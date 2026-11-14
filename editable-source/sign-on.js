/* Start notifications use the existing verified Gmail sender. */
let signOnSendInFlight=false,signOnVerificationToken='',signOnVerificationWidget=null;
function signOnEmailConfigured(){return certificateEmailConfigured()&&emailDeliveryConfig().provider==='apps-script';}
function signOnIdentity(profile=state){return JSON.stringify([COURSE_EDITION,profile.email.trim().toLowerCase(),profile.storeNumber.trim().toLowerCase()]);}
function normalizeSignOn(raw){
 if(!raw||typeof raw.identity!=='string'||raw.identity.length>600||!['ready','sending','submitted','failed','uncertain'].includes(raw.status)||typeof raw.startedAt!=='string'||isNaN(Date.parse(raw.startedAt)))return null;
 return {identity:raw.identity,startedAt:raw.startedAt,status:raw.status==='sending'?'uncertain':raw.status,attemptedAt:typeof raw.attemptedAt==='string'&&!isNaN(Date.parse(raw.attemptedAt))?raw.attemptedAt:null,submittedAt:typeof raw.submittedAt==='string'&&!isNaN(Date.parse(raw.submittedAt))?raw.submittedAt:null};
}
function queueSignOnNotification(){
 if(!signOnEmailConfigured()||!profileComplete())return;
 const identity=signOnIdentity();
 if(state.signOn?.identity!==identity)state.signOn={identity,startedAt:new Date().toISOString(),status:'ready',attemptedAt:null,submittedAt:null};
}
function signOnNotificationStatus(){
 const n=state.signOn;
 if(n?.status==='submitted')return 'Your training start notification was submitted to Terry.';
 if(n?.status==='sending')return 'Notifying Terry that you have started training…';
 if(n?.status==='uncertain')return 'Your start notification could not be confirmed. Retry to check its status; duplicate notifications are prevented.';
 if(n?.status==='failed')return 'Your start notification was not submitted. Check your connection, complete verification and retry. You can continue training.';
 return 'Terry will receive your name, email and store details when you start. Complete the verification check if prompted. You can continue training while this is sent.';
}
function signOnNotificationPanel(){
 if(!signOnEmailConfigured()||!state.signOn||state.signOn.identity!==signOnIdentity()||state.signOn.status==='submitted')return '';
 return `<section id="sign-on-notification" class="notice neutral no-print"><strong>Training start notification</strong><p id="sign-on-status" class="small" role="status" aria-live="polite">${esc(signOnNotificationStatus())}</p><div id="sign-on-verification-widget"></div><button id="retry-sign-on" class="secondary" type="button" disabled>Retry notification</button></section>`;
}
function refreshSignOnNotification(){
 const panel=$('#sign-on-notification');if(!panel)return;
 if(state.signOn?.status==='submitted'){panel.hidden=true;return;}
 const label=$('#sign-on-status');if(label)label.textContent=signOnNotificationStatus();
 const button=$('#retry-sign-on');if(button){button.hidden=!['failed','uncertain'].includes(state.signOn?.status);button.disabled=signOnSendInFlight||!signOnVerificationToken;}
}
async function sendSignOnNotification({automatic=false}={}){
 const n=state.signOn;
 if(signOnSendInFlight||!signOnEmailConfigured()||!profileComplete()||!n||n.identity!==signOnIdentity()||n.status==='submitted'||automatic&&n.attemptedAt||!signOnVerificationToken)return;
 const body={event:'sign_on',course_edition:COURSE_EDITION,started_at:n.startedAt,to_email:state.email,franchisee_name:state.name,store_name:state.storeName,store_number:state.storeNumber,turnstile_token:signOnVerificationToken};
 signOnVerificationToken='';signOnSendInFlight=true;n.status='sending';n.attemptedAt=new Date().toISOString();save();refreshSignOnNotification();
 try{
  const reply=await sendCertificateViaGoogle(emailDeliveryConfig().endpoint,body);
  if(reply.accepted===true&&typeof reply.messageId==='string'&&reply.messageId){n.status='submitted';n.submittedAt=new Date().toISOString();}
  else n.status=reply.uncertain===true?'uncertain':'failed';
 }catch{n.status='uncertain';}
 finally{
  signOnSendInFlight=false;save();refreshSignOnNotification();
  if(n===state.signOn&&n.status!=='submitted'&&signOnVerificationWidget!==null&&window.turnstile)window.turnstile.reset(signOnVerificationWidget);
  if(n!==state.signOn)bindSignOnNotification();
 }
}
async function bindSignOnNotification(){
 const container=$('#sign-on-verification-widget');
 if(signOnVerificationWidget!==null&&window.turnstile){window.turnstile.remove(signOnVerificationWidget);signOnVerificationWidget=null;}
 signOnVerificationToken='';if(!container)return;
 $('#retry-sign-on')?.addEventListener('click',()=>sendSignOnNotification());refreshSignOnNotification();
 try{
  if(!navigator.onLine)throw Error('Offline');
  const service=await loadCertificateVerification();if(!container.isConnected)return;
  signOnVerificationWidget=service.render(container,{sitekey:emailDeliveryConfig().turnstileSiteKey,action:'sign_on',size:'flexible',
   callback:token=>{if(!container.isConnected)return;signOnVerificationToken=token;refreshSignOnNotification();sendSignOnNotification({automatic:true});},
   'expired-callback':()=>{signOnVerificationToken='';refreshSignOnNotification();},
   'error-callback':()=>{signOnVerificationToken='';const label=$('#sign-on-status');if(label)label.textContent='Start notification verification is unavailable. You can continue training and reload this page to try again.';}
  });
 }catch{const label=$('#sign-on-status');if(label)label.textContent='Your start notification is waiting for an internet connection and verification. You can continue training and reload this page to try again.';}
}
