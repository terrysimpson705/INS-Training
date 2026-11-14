// Local contract tests. All Google services and all sending are mocked.
const fs = require('node:fs'), path = require('node:path'), vm = require('node:vm'), crypto = require('node:crypto'), assert = require('node:assert/strict');
function makeGoogleMock() {
  const properties = new Map([['ALLOWED_ORIGINS','https://example.github.io'],['TURNSTILE_SECRET_KEY','synthetic-test-secret']]);
  const sent = [], verificationCalls = [], logs = [];
  let owner = 'insmarket.training@gmail.com', quota = 100, verified = true, failSend = false, locked = false, action = 'certificate';
  const props = {getProperty:key=>properties.get(key)||null,setProperty:(key,value)=>{properties.set(key,value)},setProperties:changes=>Object.entries(changes).forEach(([key,value])=>properties.set(key,value)),getProperties:()=>Object.fromEntries(properties),deleteProperty:key=>properties.delete(key)};
  const context = {
    console:{log:x=>logs.push(x)},
    Session:{getEffectiveUser:()=>({getEmail:()=>owner})},
    PropertiesService:{getScriptProperties:()=>props},
    LockService:{getScriptLock:()=>({tryLock:()=>{if(locked)return false;locked=true;return true},releaseLock:()=>{locked=false}})},
    MailApp:{getRemainingDailyQuota:()=>quota,sendEmail:message=>{sent.push(message);if(failSend)throw Error('Simulated lost response')}},
    UrlFetchApp:{fetch:(url,options)=>{assert.equal(url,'https://challenges.cloudflare.com/turnstile/v0/siteverify');verificationCalls.push(options);return {getResponseCode:()=>200,getContentText:()=>JSON.stringify({success:verified,hostname:'example.github.io',action})}}},
    Utilities:{
      base64Decode:value=>[...Buffer.from(value,'base64')],
      base64EncodeWebSafe:value=>Buffer.from(value).toString('base64url'),
      computeDigest:(algorithm,value)=>[...crypto.createHash('sha256').update(value).digest()],
      DigestAlgorithm:{SHA_256:'sha256'},Charset:{UTF_8:'utf8'},
      newBlob:(bytes,type,name)=>({bytes,type,name}),getUuid:()=>crypto.randomUUID(),
      formatDate:date=>date.toISOString().slice(0,10)
    },
    HtmlService:{createHtmlOutput:content=>({content,setXFrameOptionsMode(){return this}}),XFrameOptionsMode:{ALLOWALL:'ALLOWALL'}}
  };
  vm.createContext(context);vm.runInContext(fs.readFileSync(path.join(__dirname,'Code.gs'),'utf8'),context,{timeout:1000});
  return {context,properties,sent,verificationCalls,logs,owner:x=>{owner=x},quota:x=>{quota=x},verified:x=>{verified=x},failSend:x=>{failSend=x},action:x=>{action=x}};
}
const fixture = {
  origin:'https://example.github.io',nonce:'a'.repeat(64),turnstile_token:'synthetic-test-token',
  to_email:'franchisee@example.com',franchisee_name:'Sample Franchisee',store_name:'INS Market Sample',store_number:'0042',completion_date:'October 25, 2026',
  certificate_number:'INS-20261025-ABCDEF123456',idempotency_key:'INS-20261025-ABCDEF123456',
  certificate_file:Buffer.from('%PDF-1.7\n'+('synthetic test PDF\n'.repeat(10))+'%%EOF').toString('base64')
};
function post(mock,patch={}) {return mock.context.doPost({parameter:{payload:JSON.stringify({...fixture,...patch})}}).content;}
function result(content) {const match=/var reply=(.*?);var ancestor=window;/.exec(content);return match?JSON.parse(match[1]).result:null;}
if(require.main===module) {
  let m=makeGoogleMock();m.context.authorizeSender();assert.equal(m.sent.length,0);m.owner('wrong@gmail.com');assert.throws(()=>m.context.authorizeSender());
  m=makeGoogleMock();let reply=result(post(m,{cc_email:'attacker@example.com',subject:'arbitrary content',html:'untrusted HTML'}));assert(reply.accepted);assert.equal(m.sent.length,1);assert.equal(m.sent[0].to,fixture.to_email);assert.equal(m.sent[0].cc,'terry@thedavisgroup.ca');assert.equal(m.sent[0].replyTo,'terry@thedavisgroup.ca');assert.equal(m.sent[0].name,'INS Market Training');assert(m.sent[0].body.includes('0042'));assert(m.sent[0].attachments[0].name.endsWith('.pdf'));assert(!JSON.stringify(m.sent[0]).includes('attacker@example.com'));assert.equal(result(post(m)).messageId,reply.messageId);assert.equal(m.sent.length,1);
  assert(!result(post(m,{store_number:'9999'})).accepted);assert.equal(m.sent.length,1);assert(!post(m,{origin:'https://attacker.example'}).includes('postMessage'));assert(!post(m,{nonce:'bad'}).includes('postMessage'));
  m=makeGoogleMock();m.verified(false);assert(!result(post(m)).accepted);assert.equal(m.sent.length,0);m.verified(true);assert(!result(post(m,{to_email:'one@example.com,two@example.com'})).accepted);assert.equal(m.sent.length,0);
  m=makeGoogleMock();m.quota(1);assert(!result(post(m)).accepted);assert.equal(m.sent.length,0);
  m=makeGoogleMock();m.failSend(true);assert(result(post(m)).uncertain);assert.equal(m.sent.length,1);m.failSend(false);assert(result(post(m)).uncertain);assert.equal(m.sent.length,1,'A lost acknowledgement must not send a second email');
  m=makeGoogleMock();m.properties.set('day:'+new Date().toISOString().slice(0,10),'89');assert(!result(post(m)).accepted);assert.equal(m.sent.length,0);
  m=makeGoogleMock();m.properties.set('day:2000-01-01','2');m.context.cleanOldRateCounters();assert(!m.properties.has('day:2000-01-01'));
  const manifest=JSON.parse(fs.readFileSync(path.join(__dirname,'appsscript.json'),'utf8'));assert.equal(manifest.oauthScopes.length,3);assert(!manifest.oauthScopes.some(x=>/gmail|drive|spreadsheets/.test(x)));
  m=makeGoogleMock();m.action('sign_on');let start={event:'sign_on',course_edition:'operations-manual-2026-v3',started_at:'2026-11-14T21:30:00.000Z'};assert(result(post(m,start)).accepted);assert.equal(m.sent.length,1);assert.equal(m.sent[0].to,'terry@thedavisgroup.ca');assert(result(post(m,start)).accepted);assert.equal(m.sent.length,1);assert(result(post(m,{...start,course_edition:'operations-manual-2026-v2'})).accepted);assert.equal(m.sent.length,2);
  console.log('PASS Gmail sender account, fixed recipients, PDF attachment, duplicate prevention, uncertain outcomes, origin/verification checks, quota limits, no inbox access. No live emails sent.');
}
module.exports={makeGoogleMock,fixture,post,result};
