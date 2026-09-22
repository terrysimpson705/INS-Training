const $=s=>document.querySelector(s), esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const lessons=[
  {
    "m": 3,
    "t": "Compliance is a daily habit",
    "intro": "Keep the store ready every day, not just before an inspection.",
    "body": "<p>The <strong>Levels to Excellence</strong> program uses quarterly compliance audits. Internal or third-party auditors may visit without advance notice.</p><p>Standards come from the operations manual, current planograms and Head Office directives. They cover approved products, store condition, layout, staffing, uniforms, service, payments and applicable requirements.</p><p>Report maintenance or equipment problems that prevent compliance immediately to Operations. Use the support route from Module 2 and keep the issue documented.</p><details><summary>What should you check each day?</summary><p>Keep the location clean, well lit and in good repair. Use approved equipment and signage. Obtain prior written approval for alterations. Maintain required operating hours, supplies and staffing. Pay invoices on their terms and follow applicable requirements.</p></details>",
    "q": [
      "An audit has not been scheduled. When should the store meet its standards?",
      [
        "Only during the audit quarter.",
        "Every day, because visits may be unannounced.",
        "After receiving a warning."
      ],
      1,
      "Keep the store up to standard every day. An auditor may arrive without notice."
    ]
  },
  {
    "m": 3,
    "t": "Audit results & corrective action",
    "intro": "Read the findings, fix the issues and check what happens next.",
    "body": "<p>Read the report, identify each deficiency and act on the corrective instructions. The planogram audit policy allows <strong>7 business days to correct issues after the first audit</strong>. Follow the specific written direction for your report.</p><h3>Check which fees apply</h3><p>The listed fee for a failed Levels to Excellence audit is <strong>$250 + HST</strong>. The planogram audit policy lists a <strong>$1,000 planogram audit cost</strong> and additional amounts for repeat non-compliance. Ask Operations which fee schedule applies to your report. The two schedules aren’t clearly linked, so don’t add them together yourself.</p><details><summary>Fees when a default remains unresolved</summary><p>First occurrence: $1,000. Second: $2,000. Third: $3,000. The policy also allows a royalty change until compliance is restored and possible further action under the Franchise Agreement. The amount of that change isn’t specified. Ask Operations to confirm any charges that apply to your store.</p></details><h3>Retraining time and fees</h3><table><tr><th>Audit score</th><th>Duration</th><th>Listed fee</th></tr><tr><td>0–50%</td><td>5 days</td><td>$2,500</td></tr><tr><td>51–60%</td><td>4 days</td><td>$2,000</td></tr><tr><td>61–70%</td><td>3 days</td><td>$1,500</td></tr><tr><td>71–80%</td><td>2 days</td><td>$1,000</td></tr></table><p class=\"note\">Check with Operations if your score includes decimals or is above 80%, and confirm the pass criteria. These details aren’t covered in this fee table. Retraining may take place at Head Office or the store.</p>",
    "q": [
      "You receive a report and see different audit fees in the manual. What should you do?",
      [
        "Choose the lower fee and ignore the report.",
        "Add every fee together yourself.",
        "Correct the deficiencies and ask Operations to confirm the applicable schedule."
      ],
      2,
      "Fix the issues in the report and ask Operations to explain the fees and next steps."
    ]
  },
  {
    "m": 3,
    "t": "Hours & store coverage",
    "intro": "Plan coverage around the hours approved for your location.",
    "body": "<table><tr><th>Location</th><th>Minimum operating hours</th></tr><tr><td>Transit</td><td>Daily 7 a.m.–11 p.m., including weekends and statutory holidays; also align with transit schedules.</td></tr><tr><td>Street</td><td>Daily 7 a.m.–11 p.m., including weekends.</td></tr><tr><td>Inline</td><td>Daily 7 a.m.–7 p.m., unless the landlord requires earlier closing.</td></tr><tr><td>Mall</td><td>Follow both landlord and Franchisor requirements.</td></tr></table><p>Request extended hours with a reason and obtain written Head Office approval before changing them. Reductions require written approval under exceptional circumstances.</p><p>Plan enough staff coverage to keep service running. Confirm your store’s procedure with Operations for bathroom breaks, emergencies, fire or casualty. The closure instructions aren’t fully consistent, so ask if you’re unsure. Never stay in an unsafe store just to maintain operating hours.</p>",
    "q": [
      "You want to close your street location one hour early because trade is quiet. What is the appropriate action?",
      [
        "Close early and send a message tomorrow.",
        "Follow approved hours and seek written approval before a planned reduction.",
        "Change the sign so the shorter hours become official."
      ],
      1,
      "A planned reduction below the minimum requires written Franchisor approval under exceptional circumstances."
    ]
  },
  {
    "m": 3,
    "t": "Approved products & suppliers",
    "intro": "Know where your products come from and follow the approved buying process.",
    "body": "<p>Purchase through approved INS suppliers and sell approved products. Authorized sourcing helps trace products during recalls or quality concerns and supports consistent products, fixtures and presentation.</p><p>The supplier list includes Sobeys for confectionery, snacks and bars; Coca-Cola, Frito-Lay and Pepsi for direct-to-store delivery; and Chase for payment processing. Follow the approved category and supplier instructions for your location. Where category descriptions overlap, confirm the route with Head Office.</p><p>A product unavailable through an approved supplier needs a <strong>Product Request to Head Office before bringing it into the store</strong>. A low price or customer request is not approval. Supplier lists can change.</p><details><summary>Suppliers and services you may use</summary><p>Core and food suppliers include Sobeys, Scholten’s, Magnum, GFS, Coca-Cola, PepsiCo Food Canada, Van Houtte and Mr. Dairy. Other programs include Now PrePay, VisualTouch, provincial lottery providers and LCBO. Availability and authorization depend on the location and program; check current instructions.</p></details>",
    "q": [
      "A nearby wholesaler offers a popular snack at a lower price but is not approved. What should you do?",
      [
        "Buy it now and request approval later.",
        "Buy a small quantity as an exception.",
        "Submit a product request through Head Office before bringing it in."
      ],
      2,
      "Use approved suppliers and get approval before bringing in a new product. A lower price doesn’t replace that approval."
    ]
  },
  {
    "m": 3,
    "t": "New products & regular orders",
    "intro": "Stay on top of new products and regular orders.",
    "body": "<p><strong>New Product Innovations (NPI)</strong> include new, seasonal, promotional and exclusive products. Allocations depend on store size, store type, assortment and customer demand.</p><p>Primary distribution through Sobeys supports launches and key items. Approved DSD suppliers support direct-to-store launches and promotional releases.</p><p>Place regular orders and work toward the budgets and purchasing targets provided by your Field Manager. Operations may place an automatic order after <strong>two or more missed scheduled orders or a one-month ordering gap</strong>. You may also lose ordering privileges for three months and need retraining before they are restored.</p><p class=\"note\">Confirm the current missed-order process with Operations, as this part of the policy may need updating.</p>",
    "q": [
      "Your store is about to miss another scheduled supplier order. What is the best response?",
      [
        "Wait until the shelves are empty.",
        "Review stock needs and promptly raise the ordering problem through the support process.",
        "Replace the supplier with an unapproved wholesaler."
      ],
      1,
      "Regular ordering supports availability. Raise problems early rather than allowing gaps to continue or bypassing approved suppliers."
    ]
  },
  {
    "m": 3,
    "t": "Planograms & merchandising",
    "intro": "Make your shelves easy to shop and keep them in line with your planogram.",
    "body": "<p>Store layout, merchandising, cleanliness and uniforms form part of compliance. Use the current store-specific planogram and approved promotional materials.</p><ul><li>Keep shelves and pegs evenly spaced and labelled.</li><li>Face products forward and keep prices current.</li><li>Use current approved signage and remove outdated material.</li><li>Keep the floor clear, doors unobstructed and lights operational.</li><li>Maintain stock and follow the regular cleaning schedule.</li></ul><p>The merchandising checklist calls for six items on pegs or shelves where space allows, with category exceptions, and boxed items at least 85% full. Stock minimums differ elsewhere in the guidance, so check the current requirement with your trainer.</p><details><summary>Practice store walk</summary><p>A handwritten promotion sign, blocked doorway, unlabelled shelf and broken cooler light all need attention. Correct the presentation issues using approved materials and report the repair requirement promptly.</p></details>",
    "q": [
      "You notice an old promotion sign beside a current planogram display. What should happen?",
      [
        "Leave it until the next audit.",
        "Make a replacement by hand.",
        "Remove or replace it with the current approved material."
      ],
      2,
      "Current approved signage and planograms are part of ongoing compliance."
    ]
  },
  {
    "m": 3,
    "t": "When a product will not scan",
    "intro": "Use the product reporting process to get the scanning issue fixed.",
    "body": "<p>If a product does not scan in VisualTouch, complete the <strong>Non-Scanning SKU form</strong>. Send it to <strong>michelelown@thedavisgroup.ca</strong>.</p><p>New-product requests also go to Michele. Products must be approved and set up before you buy or sell them. Do not assume that being able to enter a price makes a product approved.</p><p class=\"note\">This product-specific reporting route differs from the usual Help Desk process. Confirm the current recipient with your trainer and follow the approved SKU procedure.</p><details><summary>What should you prepare?</summary><p>Use the actual Non-Scanning SKU form from the manual appendix. Have the store identifier, product details and barcode available so the issue can be investigated. These are preparation tips, not a replacement form.</p></details>",
    "q": [
      "An approved product won’t scan. What should you do?",
      [
        "Complete the Non-Scanning SKU form and follow the specified reporting route.",
        "Decide it no longer needs to be recorded.",
        "Buy a different unapproved product instead."
      ],
      0,
      "The form gives the support team a record of the product and the issue so they can investigate."
    ]
  },
  {
    "m": 3,
    "t": "Markdowns & product removal",
    "intro": "Act before short-dated and discontinued stock becomes a problem.",
    "body": "<p>Mark down products with <strong>two weeks of shelf life or less</strong>, and products flagged for removal because of planogram changes. Use standard INS marketing tags and follow Head Office removal directions.</p><p>A 50% reduction is recommended, though other approved markdown approaches may suit the product and your customers. Category Managers provide direction on slow-selling and discontinued products. Use the calendar to schedule action and update signs and tags.</p><h3>Markdown practice</h3><div class=\"columns\"><div class=\"field\"><label for=\"original\">Original price ($)</label><input id=\"original\" type=\"number\" min=\"0\" step=\"0.01\" value=\"4.99\"></div><div class=\"field\"><label for=\"discount\">Discount (%)</label><input id=\"discount\" type=\"number\" min=\"0\" max=\"100\" value=\"50\"></div></div><button id=\"markdownCalc\" class=\"secondary\">Calculate markdown</button><div id=\"markdownOut\" class=\"feedback\" aria-live=\"polite\"></div><p class=\"note\">Practice calculation, rounded to cents. Use approved pricing instructions for the actual item.</p>",
    "q": [
      "A product has 10 days of shelf life remaining. What does the policy call for?",
      [
        "Wait until it reaches its date.",
        "Mark it down using approved materials and the applicable direction.",
        "Keep the price unchanged unless a customer complains."
      ],
      1,
      "Ten days falls within the two-week markdown window. Products flagged for planogram removal also require action."
    ]
  },
  {
    "m": 3,
    "t": "Payment standards",
    "intro": "Apply the same payment rules to small and large purchases.",
    "body": "<p>Payment options include cash, Interac, Visa, Mastercard, American Express, Apple Pay and Google Pay.</p><ul><li><strong>No minimum purchase</strong> for debit or credit cards.</li><li><strong>No fee</strong> charged to the customer for using debit or credit.</li><li><strong>No tips.</strong></li></ul><p>If a payment fails, follow the approved terminal procedure. Don’t add a surcharge or set your own minimum purchase.</p>",
    "q": [
      "A customer wants to pay for a small purchase by debit. Which response follows INS policy?",
      [
        "Require a $5 minimum.",
        "Add a small processing fee.",
        "Accept debit without a minimum purchase or card-use fee."
      ],
      2,
      "The payment policy states no minimum purchase and no debit or credit card-use fee."
    ]
  },
  {
    "m": 3,
    "t": "Mystery Shops & improvement",
    "intro": "Use the report to improve the customer experience and sales accuracy.",
    "body": "<p>Mystery Shops assess service, employee conduct, checkout, signage, cleanliness, presentation and expectations. Items are recorded as <strong>YES = compliant</strong> or <strong>NO = non-compliant</strong>.</p><p>Head Office reviews the findings. Operations/Training shares the report and required improvements. Employees who still aren’t meeting the standards after two independent visits need retraining, with a listed fee of $500 per employee. Fully compliant stores are not charged the Mystery Shop fee.</p><details><summary>Fees for sales-registration issues</summary><table><tr><th>Occurrence</th><th>Stated action</th></tr><tr><td>First failed shop</td><td>$150 and written warning</td></tr><tr><td>Second</td><td>$300 and written warning</td></tr><tr><td>Third</td><td>$500, default notice and mandatory meeting/teleconference</td></tr></table><p>These fees are separate from audit and other default fees. Ask Operations to confirm which charges and next steps apply to your store.</p></details>",
    "q": [
      "A Mystery Shop report identifies repeated checkout errors. What is the useful response?",
      [
        "Review the findings with the team and carry out the required corrective training.",
        "Only improve when you recognize a shopper.",
        "Ignore it because the store looked clean."
      ],
      0,
      "Accurate checkout and professional service both matter. Use the feedback to help your team improve where it’s needed."
    ]
  },
  {
    "m": 3,
    "t": "Five central sales standards",
    "intro": "Practise the customer interaction from greeting to goodbye.",
    "body": "<ol><li><strong>Greet or acknowledge:</strong> acknowledge every customer within one minute.</li><li><strong>Determine needs:</strong> ask useful open-ended questions.</li><li><strong>Offer a promotion or related item:</strong> suggest a relevant current offer or additional product.</li><li><strong>Register correctly:</strong> scan accurately, keep the cash drawer closed before and after the purchase, and offer a receipt.</li><li><strong>Thank and invite back:</strong> close the interaction courteously.</li></ol><p>Pause routine tasks when a customer needs attention. A quick acknowledgement can let the next customer know you will be with them shortly.</p><details><summary>A short practice conversation</summary><p>“Hello, I’ll be with you shortly.”<br>“What kind of snack are you looking for?”<br>“That item is in our current promotion; would you like to hear the offer?”<br>Scan correctly and offer the receipt.<br>“Thank you. Have a good day!”</p></details>",
    "q": [
      "You scanned correctly and accepted payment. Which closing actions still belong in the standards?",
      [
        "Offer a receipt, thank the customer and invite them back.",
        "Leave the cash drawer open for the next sale.",
        "Start stocking without acknowledging the customer."
      ],
      0,
      "Correct registration includes offering a receipt. Thanking the customer and inviting them back completes the interaction."
    ]
  },
  {
    "m": 3,
    "t": "Your compliance action plan",
    "intro": "Spot the problem, take action and follow up until it’s resolved.",
    "body": "<p>Before completing Module 3, practise a store walk with your trainer:</p><ul><li>Check current signage, planograms, stock presentation and cleaning.</li><li>Confirm approved products, supplier ordering and markdown action.</li><li>Review store hours, coverage, uniforms and customer-service standards.</li><li>Check cameras and equipment are operating; report faults.</li><li>Review open issues and the corrective actions required by Operations.</li></ul><p>Check the rules for staff breaks, phone use and seating too. Approved accommodations and operational needs are exceptions to the sales-floor seating restriction. Ask your trainer if any instructions conflict or you’re unsure what applies.</p><p>Your next step is the knowledge check, followed by a practical discussion and the appropriate training-matrix sign-off. The online practice score is not an audit result or official certification.</p>",
    "q": [
      "You find a display fault, a short-dated product and an unresolved equipment ticket. What is the best plan?",
      [
        "Wait for an auditor to prioritize everything.",
        "Follow the approved steps to fix the display, mark down the product and follow up on the repair ticket.",
        "Change the store standards to match the current situation."
      ],
      1,
      "Handle the issues you can fix, keep a record and follow up on anything still outstanding. Don’t wait for an inspection."
    ]
  }
];
let state={i:0,done:[],answers:{},quiz:{},submitted:false};try{const s=JSON.parse(localStorage.getItem('ins-m3-v1'));if(s&&Number.isInteger(s.i)&&s.i>=0&&s.i<=12&&Array.isArray(s.done)){state={...state,...s};state.done=s.done.filter(n=>Number.isInteger(n)&&n>=0&&n<12)}}catch{}
const quiz=[lessons[0].q,lessons[2].q,lessons[3].q,lessons[4].q,lessons[5].q,lessons[6].q,lessons[7].q,lessons[8].q,lessons[9].q,lessons[10].q];
function save(){try{localStorage.setItem('ins-m3-v1',JSON.stringify(state))}catch{}}
function navigate(i){if(!Number.isInteger(i)||i<0||i>12)throw Error('Unknown lesson');state.i=i;save();render();$('#main').focus();window.scrollTo({top:0,behavior:'smooth'})}
function nav(){let group=0;$('#nav').innerHTML=lessons.map((l,i)=>{let h='';if(l.m!==group){group=l.m;h=`<p class="group">0${group} / ${'COMPLIANCE'}</p>`}return h+`<button data-nav="${i}" class="${state.i===i?'active':''}" ${state.i===i?'aria-current="step"':''}><span>${state.done.includes(i)?'✓':String(i+1).padStart(2,'0')}</span>${l.t}</button>`}).join('')+`<button data-nav="12" class="${state.i===12?'active':''}"><span>→</span>Final knowledge check</button>`;document.querySelectorAll('[data-nav]').forEach(b=>b.onclick=()=>navigate(Number(b.dataset.nav)));$('#progressText').textContent=`${state.done.length} of 12 lessons completed`;$('#progress').value=state.done.length}
function render(){nav();if(state.i===12){renderQuiz();return}const l=lessons[state.i],a=state.answers[state.i];$('#main').innerHTML=`<span class="pill">Module 0${l.m} · Lesson ${state.i+1} of 12</span><h1>${l.t}</h1><p class="intro">${l.intro}</p><section class="lesson">${l.body}</section><section class="activity"><span class="tag">YOUR TURN</span><h2>${l.q[0]}</h2><div id="choices">${l.q[1].map((v,i)=>`<button class="choice ${a===i?(i===l.q[2]?'correct':'wrong'):''}" data-choice="${i}">${v}</button>`).join('')}</div><div id="feedback" class="feedback ${a===l.q[2]?'good':''}" aria-live="polite">${a!==undefined?(a===l.q[2]?'Correct. ':'Not quite—have another try. ')+l.q[3]:''}</div></section><p class="source">Scenarios are practice examples based on the manual.</p><div class="actions"><button id="back" class="secondary" ${state.i===0?'disabled':''}>Previous</button><button id="next" class="primary" ${a!==l.q[2]?'disabled':''}>${state.i===11?'Continue to final check':'Complete & continue'}</button></div>`;document.querySelectorAll('[data-choice]').forEach(b=>b.onclick=()=>{state.answers[state.i]=Number(b.dataset.choice);save();render()});$('#back').onclick=()=>navigate(state.i-1);$('#next').onclick=()=>{if(state.answers[state.i]!==l.q[2])return;if(!state.done.includes(state.i))state.done.push(state.i);navigate(state.i+1)};bindLabs()}
const money=n=>new Intl.NumberFormat('en-CA',{style:'currency',currency:'CAD'}).format(n);
function values(ids){let v=ids.map(id=>$('#'+id).value.trim());if(v.some(x=>x===''))return null;v=v.map(Number);return v.every(x=>Number.isFinite(x)&&x>=0)?v:null}
function bindLabs(){if($('#markdownCalc'))$('#markdownCalc').onclick=()=>{const v=values(['original','discount']);if(!v||v[1]>100){$('#markdownOut').textContent='Enter a non-negative price and a discount from 0% to 100%.';return}$('#markdownOut').innerHTML=`New price: <strong>${money(v[0]*(1-v[1]/100))}</strong><br>Discount: ${v[1]}% of ${money(v[0])}. Confirm the actual label and POS price agree.`}}
function score(){return quiz.reduce((n,q,i)=>n+(state.quiz[i]===q[2]?1:0),0)}
function renderQuiz(){if(state.done.length<12){$('#main').innerHTML=`<span class="pill">Final knowledge check</span><h1>Finish your learning path</h1><p class="intro">Complete each lesson’s practice question, then select “Complete & continue”.</p><p>${12-state.done.length} lessons remain. Your work is saved in this browser.</p><button id="resume" class="primary">Continue learning</button>`;$('#resume').onclick=()=>navigate(lessons.findIndex((_,i)=>!state.done.includes(i)));return}if(state.submitted){const n=score();$('#main').innerHTML=`<span class="pill">Practice result</span><h1>${n>=8?'Knowledge check complete':'Review & try again'}</h1><p class="score">${n}/10</p><p>${n>=8?'You reached the suggested practice target of 80%.':'The suggested practice target is 80%. Review the explanations below before another attempt.'}</p><p class="note">This target is for this session only, not an official INS certification threshold. All 12 lessons completed. This result is stored only in this browser.</p><section class="lesson"><h2>Your answer review</h2>${quiz.map((q,i)=>`<details><summary>${state.quiz[i]===q[2]?'✓ Correct':'Review'} · ${i+1}. ${q[0]}</summary><p>Your answer: ${esc(q[1][state.quiz[i]]||'Not answered')}</p><p><strong>Correct answer: ${q[1][q[2]]}</strong></p><p>${q[3]}</p></details>`).join('')}</section><div class="actions"><button class="secondary" id="retry">Try the check again</button><button class="primary" id="download">Download result</button><button class="secondary" id="print">Print result</button></div>`;$('#retry').onclick=()=>{state.quiz={};state.submitted=false;save();renderQuiz()};$('#download').onclick=download;$('#print').onclick=()=>window.print();return}$('#main').innerHTML=`<span class="pill">10 questions · Suggested practice target 80%</span><h1>Check your understanding</h1><p class="intro">Choose one answer for each question. Your score and explanations appear after submission.</p><form id="quiz">${quiz.map((q,i)=>`<fieldset class="lesson"><legend>${i+1}. ${q[0]}</legend>${q[1].map((v,j)=>`<label class="check"><input style="width:auto;margin-right:12px" type="radio" name="q${i}" value="${j}" ${state.quiz[i]===j?'checked':''} required>${v}</label>`).join('')}</fieldset>`).join('')}<p id="quizCount" class="note"></p><button class="primary" type="submit">Submit knowledge check</button></form>`;function count(){$('#quizCount').textContent=`${Object.keys(state.quiz).length} of 10 answered`}count();$('#quiz').onchange=e=>{state.quiz[Number(e.target.name.slice(1))]=Number(e.target.value);save();count()};$('#quiz').onsubmit=e=>{e.preventDefault();if(Object.keys(state.quiz).length!==10)return;state.submitted=true;state.completedAt=new Date().toISOString();save();renderQuiz();window.scrollTo(0,0)}}
function download(){const txt=`INS MARKET — MODULE 3\nPractice learning record\nCompleted: ${new Date(state.completedAt).toLocaleString()}\nLessons completed: ${state.done.length}/12\nKnowledge check: ${score()}/10 (${score()*10}%)\nSuggested practice target: 80%\nNot an official certification. Self-reported browser result, not identity verified.\n\n`+quiz.map((q,i)=>`${i+1}. ${q[0]}\nAnswer: ${q[1][state.quiz[i]]}\nCorrect: ${q[1][q[2]]}\n`).join('\n');const url=URL.createObjectURL(new Blob([txt],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='INS-Module-3-Practice-Result.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}
$('#reset').onclick=()=>{if(confirm('Clear this browser’s lesson progress and quiz results?')){state={i:0,done:[],answers:{},quiz:{},submitted:false};save();render()}};render();
if(document.modelContext?.registerTool){try{document.modelContext.registerTool({name:'get_learning_progress',description:'Read completed lesson count and practice quiz result without changing them.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true},execute:()=>({lesson:state.i+1,completed:state.done.length,total:12,quizSubmitted:state.submitted,score:state.submitted?score():null})});document.modelContext.registerTool({name:'open_learning_lesson',description:'Navigate to an INS lesson without completing it or answering questions.',inputSchema:{type:'object',properties:{lesson:{type:'integer',minimum:1,maximum:13}},required:['lesson'],additionalProperties:false},execute:input=>{if(!Number.isInteger(input.lesson)||input.lesson<1||input.lesson>13)throw Error('Lesson must be 1–13');navigate(input.lesson-1);return{lesson:input.lesson}}})}catch{}}
