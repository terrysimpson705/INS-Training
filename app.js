const $=s=>document.querySelector(s), esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const lessons=[
  {
    "m": 1,
    "t": "The INS Market story",
    "intro": "Get to know the business you’re part of.",
    "body": "<p>INS has served convenience customers since <strong>1994</strong>. Formerly known as <strong>International News</strong>, INS Market now offers beverages, snacks, everyday essentials and healthier alternatives.</p><p>Our aim is to make shopping quick and easy in a well-lit, clean, well-stocked and professionally operated store.</p><div class=\"columns\"><div><h3>The customer experience</h3><p>Greet customers warmly, offer assistance when needed and thank them for their business.</p></div><div><h3>What supports your store</h3><p>Store fixtures, point-of-sale technology and designated suppliers support consistent operations.</p></div></div>",
    "q": [
      "A customer asks what INS Market offers. Which response best reflects the brand?",
      [
        "Only newspapers and magazines.",
        "Convenient everyday products, drinks, snacks and healthier choices.",
        "Every location is an unrelated business with its own standards."
      ],
      1,
      "INS has grown beyond newspapers and magazines, while keeping convenience at the heart of the business."
    ]
  },
  {
    "m": 1,
    "t": "One brand, shared responsibilities",
    "intro": "See how your team, Head Office, suppliers and landlords work together.",
    "body": "<details open><summary>Head Office</summary><p>Coordinates the national promotional program with designated suppliers and supports the operating system.</p></details><details><summary>Franchisees and store teams</summary><p>Deliver the customer experience and maintain clean, well-stocked, professionally operated locations.</p></details><details><summary>Suppliers</summary><p>Support product availability and coordinated promotional programs.</p></details><details><summary>Landlords</summary><p>Form part of the partnership that supports INS locations and a consistent customer experience.</p></details>",
    "q": [
      "You notice empty shelves and a customer waiting while a team member completes a routine task. What best supports the brand?",
      [
        "Finish every routine task before acknowledging anyone.",
        "Ignore the shelves because promotions are a Head Office responsibility.",
        "Acknowledge and assist the customer, then address the stock gaps."
      ],
      2,
      "Your team looks after customers and keeps the shelves ready to shop. Head Office supports you, but these everyday tasks belong to the store."
    ]
  },
  {
    "m": 2,
    "t": "Email that gets an answer",
    "intro": "Make a store issue easy to understand and act on.",
    "body": "<p>A useful subject starts with the <strong>store name or number</strong>, followed by a short issue description. Keep the message professional, clear and respectful.</p><ol><li>Use a greeting and explain the issue concisely.</li><li>Include relevant store details and attachments.</li><li>State what help you need and add a professional sign-off.</li><li>Proofread before sending and respond promptly to replies.</li></ol><details><summary>Here’s an example</summary><p><strong>Subject: INS MARKET #5555 – Missing promotion posters</strong></p><p>Hello Help Desk,<br>Our promotion package arrived today, but the two large posters listed in the package are missing. I have attached a photo of the contents and the delivery reference. Please advise how we can obtain replacements.<br>Thank you,<br>Store #5555 team</p><p class=\"note\">Fictional practice example. This session does not send email.</p></details>",
    "q": [
      "Choose the most useful subject line for a broken shelf at store #5555.",
      [
        "URGENT!!!!!",
        "INS MARKET #5555 – Broken shelf support request",
        "Hi, can someone call me?"
      ],
      1,
      "The store identifier and specific issue help the support team route and understand your request."
    ]
  },
  {
    "m": 2,
    "t": "Help Desk & escalation",
    "intro": "Follow the support route and keep the ticket number.",
    "body": "<p><strong>helpdesk@thedavisgroup.ca</strong> is the first contact for store-level issues: technology, fixtures, marketing, delivery, accounting, supplier and general operational concerns.</p><ol><li>Email the Help Desk with the details.</li><li>Keep the ticket number. The issue is documented and assigned.</li><li>The team works toward resolution. The team aims to <strong>respond within 24 hours</strong>. Some issues will take longer to resolve.</li><li>If unresolved or more support is needed, escalate through your <strong>Field Manager</strong>.</li><li>The Field Manager coordinates further internal support. A resolved ticket is closed with confirmation.</li></ol><p>Do not bypass this route by contacting individual Head Office staff for store issues. Meetings with senior team members are arranged through the Field Manager.</p><details><summary>Who does what at Head Office</summary><p>Michele Lown — Administration<br>Tiina Kamagianis — Training, Onboarding and Western Operations<br>Terry Simpson — Training Manager<br>Andriana Padikova — Operations<br>Amedeo Catenaro — Franchise Development and Brand Operations<br>Alyson Davis — Business Executive<br>Muhammad Al-Kharsan — Business Development<br>Aftab Hussain — Franchise Sales<br>Aditya Vijay Shastri — Administration<br>Natalya Yelisyeyenko — Office Manager</p><p class=\"note\">Roles are from the August 2026 manual. Use the current internal directory for updates.</p></details>",
    "q": [
      "Your Help Desk ticket remains unresolved and needs further support. What is the next route?",
      [
        "Email every senior manager separately.",
        "Contact your Field Manager with the ticket number and an update.",
        "Open several identical tickets."
      ],
      1,
      "Your Field Manager can review the ticket and bring in the right people to help."
    ]
  },
  {
    "m": 2,
    "t": "Training & certification",
    "intro": "Know what completion means and who must be trained.",
    "body": "<p>The franchisee named on the Franchise Agreement must complete training and become certified. Certified franchisees may train staff, and must ensure staff are trained and certified for their assigned roles. <strong>Only trained and certified staff may serve customers.</strong></p><p>The program combines classroom instruction, practical training, testing and certification. It covers store operations, systems and security, customer service and safety. Sign off the training matrix as each section is successfully completed.</p><p>The franchisee is expected to work full-time in the location. If unable to meet that commitment, a fully trained and certified Store Manager must be present to oversee the store.</p><table><tr><th>Training</th><th>Training fee</th></tr><tr><td>New franchisee / Store Manager</td><td>$5,000</td></tr><tr><td>Retraining</td><td>$500 per employee, per day</td></tr></table><p class=\"note\">Confirm current arrangements with the Training Department. This online practice session does not grant certification or replace matrix sign-off.</p>",
    "q": [
      "A new employee has read the manual but has not completed role training and certification. Can they independently serve customers?",
      [
        "Yes, reading the manual is sufficient.",
        "Yes, if the store is busy.",
        "No. Complete the required role training and certification first."
      ],
      2,
      "Reading the manual is a good start. Staff still need to complete training and certification for their roles before serving customers."
    ]
  },
  {
    "m": 2,
    "t": "Your daily communication routine",
    "intro": "Turn Head Office updates into actions in the store.",
    "body": "<p>Review communications every day. A message is useful only when the required action reaches the store team.</p><div id=\"daily\"><label class=\"check\"><input type=\"checkbox\">Read Head Office memos and check email.</label><label class=\"check\"><input type=\"checkbox\">Check Google Drive and the store QR code for current planograms, layouts and merchandise breakdowns.</label><label class=\"check\"><input type=\"checkbox\">Identify new products to order and old products to mark down or clear out.</label><label class=\"check\"><input type=\"checkbox\">Identify required fixture or product changes.</label></div><p class=\"note\">Practice checklist: this does not record an actual store inspection.</p>",
    "q": [
      "A new planogram is available through your store QR code. What should happen next?",
      [
        "Keep the old layout until the next training visit.",
        "Review the change and carry out the required product or fixture updates.",
        "Only read the email; no store action is needed."
      ],
      1,
      "Daily reviews include carrying out the changes, ordering new products and clearing products as directed."
    ]
  },
  {
    "m": 2,
    "t": "Payments & financial responsibility",
    "intro": "Know when payments are due and plan ahead.",
    "body": "<div class=\"columns\"><div><p class=\"metric\">01</p><h3>Rent due</h3><p>Rent is due on the first of the month. Methods include automatic withdrawal, EFT, email transfer or post-dated cheques.</p></div><div><p class=\"metric\">15</p><h3>Royalties due</h3><p>Royalties are due on the 15th by pre-authorized debit for the current month. The amount is in the Franchise Agreement.</p></div></div><p>Rent includes base/minimum rent and estimated common area maintenance (<strong>CAM</strong>) charges. Reconciliation of actual expenses can create a credit or an additional charge, usually within six months after December 31.</p><details><summary>Fees and financial responsibilities</summary><p>HST/GST applies to royalty fees, late-payment interest is 15% per annum compounded daily, and a bounced-payment service charge is $50. Confirm applicable terms against your agreement and current Head Office instructions.</p><p>Maintain an ongoing relationship with a qualified accountant. Franchisees manage their financial and tax obligations. Head Office may request non-POS sales information as permitted under the agreement.</p></details><p class=\"note\">All figures in the exercises are hypothetical teaching examples, not store forecasts or promises of performance.</p>",
    "q": [
      "CAM reconciliation shows actual expenses above the monthly estimates. What could happen next?",
      [
        "There may be an additional charge.",
        "Rent can never change after payment.",
        "It automatically changes the royalty due date."
      ],
      0,
      "CAM is charged using estimates and later reconciled to actual expenses. The result may be a credit or an additional charge."
    ]
  },
  {
    "m": 2,
    "t": "Gross profit is not net profit",
    "intro": "See where the money from a sale goes.",
    "body": "<p><strong>Gross profit = sales − cost of goods sold.</strong><br><strong>Gross margin = gross profit ÷ sales × 100.</strong></p><p>Gross profit still has to cover operating expenses. Net profit is what remains after the relevant expenses are deducted. A 21% gross margin means 21 cents from each sales dollar remains before operating expenses.</p><p>Improve results by reducing waste, managing purchasing costs, considering pricing carefully and improving the mix of higher-margin products.</p><div class=\"columns\"><div class=\"field\"><label for=\"sales\">Example sales ($)</label><input id=\"sales\" type=\"number\" min=\"1\" value=\"1000\"></div><div class=\"field\"><label for=\"cogs\">Cost of goods sold ($)</label><input id=\"cogs\" type=\"number\" min=\"0\" value=\"700\"></div></div><div class=\"field\"><label for=\"opex\">Other operating expenses ($)</label><input id=\"opex\" type=\"number\" min=\"0\" value=\"200\"></div><button id=\"marginCalc\" class=\"secondary\">Calculate the example</button><div id=\"marginOut\" class=\"feedback\" aria-live=\"polite\"></div>",
    "q": [
      "Sales are $1,000, goods cost $700 and other operating expenses are $200. What is the simplified net profit?",
      [
        "$300",
        "$1,000",
        "$100"
      ],
      2,
      "Gross profit is $300. Subtracting $200 in other operating expenses leaves $100 in this simplified example."
    ]
  },
  {
    "m": 2,
    "t": "Costs & cash flow",
    "intro": "Plan for money coming in and money going out.",
    "body": "<p>Fixed costs, such as rent and insurance, usually stay relatively stable over a planning period. Variable costs change with activity, such as merchandise cost. Wages and utilities can have both fixed and variable elements.</p><p>Forecast cash requirements at least monthly. Consider sales patterns, seasonality, inventory purchases, debt payments, waste, productivity and an emergency reserve. Excess inventory ties up cash.</p><p><strong>Cash in the bank is not profit.</strong> A loan creates cash but is not sales income. Loan principal payments and inventory purchases affect cash differently from profit.</p><h3>Classify the cost</h3><div class=\"field\"><label for=\"costType\">Monthly rent under a fixed lease</label><select id=\"costType\"><option value=\"\">Choose a category</option><option>Usually fixed</option><option>Directly variable with every sale</option></select></div><div id=\"costFeedback\" aria-live=\"polite\"></div>",
    "q": [
      "The bank balance increased because you received a loan. Does that mean the store made a profit?",
      [
        "Yes, every increase in cash is profit.",
        "No. Borrowing increases cash and creates a repayment obligation.",
        "Yes, if the money stays in the bank for a month."
      ],
      1,
      "Cash flow and profitability measure different things. Borrowed money is not operating profit."
    ]
  },
  {
    "m": 2,
    "t": "Plan your opening costs & cash",
    "intro": "Try planning the cash you’ll need to open and cover your first month.",
    "body": "<p>Start-up planning includes licences, incorporation, deposits, equipment, modifications, insurance, opening inventory and pre-opening promotion. Keep enough working cash for ongoing bills.</p><p class=\"note\">These rounded practice amounts are invented for learning. They are not INS start-up cost estimates. Amounts are CAD.</p><div class=\"columns\"><div class=\"field\"><label for=\"startup\">One-time setup costs ($)</label><input id=\"startup\" type=\"number\" min=\"0\" value=\"12000\"></div><div class=\"field\"><label for=\"inventory\">Opening inventory ($)</label><input id=\"inventory\" type=\"number\" min=\"0\" value=\"8000\"></div></div><div class=\"field\"><label for=\"reserve\">Opening cash reserve ($)</label><input id=\"reserve\" type=\"number\" min=\"0\" value=\"5000\"></div><div class=\"columns\"><div class=\"field\"><label for=\"cashin\">Month 1 cash received ($)</label><input id=\"cashin\" type=\"number\" min=\"0\" value=\"30000\"></div><div class=\"field\"><label for=\"cashout\">Month 1 cash paid ($)</label><input id=\"cashout\" type=\"number\" min=\"0\" value=\"32000\"></div></div><button id=\"cashCalc\" class=\"secondary\">Calculate funding & closing cash</button><div id=\"cashOut\" class=\"feedback\" aria-live=\"polite\"></div><p class=\"note\">Month 1 starts after setup and opening inventory are paid. The reserve is starting cash, not another expense. Cash paid includes all payments for this example.</p>",
    "q": [
      "Starting cash is $5,000, cash received is $30,000 and cash paid is $32,000. What is closing cash?",
      [
        "$3,000",
        "$2,000 profit",
        "$35,000"
      ],
      0,
      "$5,000 + $30,000 − $32,000 = $3,000. This is a cash balance, not a profit calculation."
    ]
  },
  {
    "m": 2,
    "t": "Find your break-even point",
    "intro": "Translate costs into a sales target.",
    "body": "<p>Break-even is the sales level where revenue covers costs and the business makes neither a profit nor a loss.</p><p><strong>Break-even sales = fixed costs ÷ contribution margin ratio.</strong> Contribution margin is what remains after all variable costs. Gross margin can only stand in for it when other variable costs are already accounted for.</p><div class=\"columns\"><div class=\"field\"><label for=\"fixed\">Monthly fixed costs ($)</label><input id=\"fixed\" type=\"number\" min=\"0\" value=\"9000\"></div><div class=\"field\"><label for=\"contribution\">Contribution margin (%)</label><input id=\"contribution\" type=\"number\" min=\"0.1\" max=\"100\" step=\"0.1\" value=\"30\"></div></div><div class=\"field\"><label for=\"days\">Trading days in the month</label><input id=\"days\" type=\"number\" min=\"1\" max=\"31\" step=\"1\" value=\"30\"></div><button id=\"breakCalc\" class=\"secondary\">Calculate sales targets</button><div id=\"breakOut\" class=\"feedback\" aria-live=\"polite\"></div><p class=\"note\">Hypothetical practice model. Weekly target uses 12 months ÷ 52 weeks. Actual store planning needs its real costs and product mix.</p>",
    "q": [
      "Monthly fixed costs are $9,000 and contribution margin is 30%. What monthly sales level breaks even?",
      [
        "$2,700",
        "$30,000",
        "$9,030"
      ],
      1,
      "$9,000 ÷ 0.30 = $30,000. At that level, the $9,000 contribution covers the fixed costs."
    ]
  },
  {
    "m": 2,
    "t": "Put it into practice",
    "intro": "Bring the communication and financial habits together.",
    "body": "<p>You open the store and find a new Head Office memo, an updated planogram and a delivery issue. Your cash forecast also shows a tight month ahead.</p><ol><li>Review the memo and current planogram, then identify the store actions.</li><li>Document the delivery issue and contact the Help Desk with a clear subject and relevant details.</li><li>Keep the ticket reference and use the Field Manager route if unresolved.</li><li>Review upcoming rent, royalty and supplier payments in the cash forecast.</li><li>Confirm staff training and practical sign-offs for their responsibilities.</li></ol><p>Before the final check, be ready to explain the INS brand, write a useful support request, follow escalation, distinguish cash from profit and calculate a simple break-even target.</p>",
    "q": [
      "Which statement best describes finishing this online session?",
      [
        "It automatically certifies me to operate a store.",
        "It replaces practical training and the training matrix.",
        "It helps me practise; I still need to complete formal training, testing and sign-off."
      ],
      2,
      "This session helps you prepare. You’ll still need to complete the INS training and sign-off process for certification."
    ]
  }
];
let state={i:0,done:[],answers:{},quiz:{},submitted:false};try{const s=JSON.parse(localStorage.getItem('ins-m12-v1'));if(s&&Number.isInteger(s.i)&&s.i>=0&&s.i<=12&&Array.isArray(s.done)){state={...state,...s};state.done=s.done.filter(n=>Number.isInteger(n)&&n>=0&&n<12)}}catch{}
const quiz=[lessons[0].q,lessons[2].q,lessons[3].q,lessons[4].q,lessons[5].q,lessons[6].q,lessons[7].q,lessons[8].q,lessons[9].q,lessons[10].q];
function save(){try{localStorage.setItem('ins-m12-v1',JSON.stringify(state))}catch{}}
function navigate(i){if(!Number.isInteger(i)||i<0||i>12)throw Error('Unknown lesson');state.i=i;save();render();$('#main').focus();window.scrollTo({top:0,behavior:'smooth'})}
function nav(){let group=0;$('#nav').innerHTML=lessons.map((l,i)=>{let h='';if(l.m!==group){group=l.m;h=`<p class="group">0${group} / ${group===1?'COMPANY OVERVIEW':'TRAINING & COMMUNICATION'}</p>`}return h+`<button data-nav="${i}" class="${state.i===i?'active':''}" ${state.i===i?'aria-current="step"':''}><span>${state.done.includes(i)?'✓':String(i+1).padStart(2,'0')}</span>${l.t}</button>`}).join('')+`<button data-nav="12" class="${state.i===12?'active':''}"><span>→</span>Final knowledge check</button>`;document.querySelectorAll('[data-nav]').forEach(b=>b.onclick=()=>navigate(Number(b.dataset.nav)));$('#progressText').textContent=`${state.done.length} of 12 lessons completed`;$('#progress').value=state.done.length}
function render(){nav();if(state.i===12){renderQuiz();return}const l=lessons[state.i],a=state.answers[state.i];$('#main').innerHTML=`<span class="pill">Module 0${l.m} · Lesson ${state.i+1} of 12</span><h1>${l.t}</h1><p class="intro">${l.intro}</p><section class="lesson">${l.body}</section><section class="activity"><span class="tag">YOUR TURN</span><h2>${l.q[0]}</h2><div id="choices">${l.q[1].map((v,i)=>`<button class="choice ${a===i?(i===l.q[2]?'correct':'wrong'):''}" data-choice="${i}">${v}</button>`).join('')}</div><div id="feedback" class="feedback ${a===l.q[2]?'good':''}" aria-live="polite">${a!==undefined?(a===l.q[2]?'Correct. ':'Not quite—have another try. ')+l.q[3]:''}</div></section><p class="source">Financial calculations are added teaching exercises.</p><div class="actions"><button id="back" class="secondary" ${state.i===0?'disabled':''}>Previous</button><button id="next" class="primary" ${a!==l.q[2]?'disabled':''}>${state.i===11?'Continue to final check':'Complete & continue'}</button></div>`;document.querySelectorAll('[data-choice]').forEach(b=>b.onclick=()=>{state.answers[state.i]=Number(b.dataset.choice);save();render()});$('#back').onclick=()=>navigate(state.i-1);$('#next').onclick=()=>{if(state.answers[state.i]!==l.q[2])return;if(!state.done.includes(state.i))state.done.push(state.i);navigate(state.i+1)};bindLabs()}
const money=n=>new Intl.NumberFormat('en-CA',{style:'currency',currency:'CAD'}).format(n);
function values(ids){let v=ids.map(id=>$('#'+id).value.trim());if(v.some(x=>x===''))return null;v=v.map(Number);return v.every(x=>Number.isFinite(x)&&x>=0)?v:null}
function bindLabs(){if($('#marginCalc'))$('#marginCalc').onclick=()=>{const v=values(['sales','cogs','opex']);$('#marginOut').innerHTML=!v||v[0]<=0?'Enter sales above zero and non-negative costs.':`Gross profit: <strong>${money(v[0]-v[1])}</strong><br>Gross margin: <strong>${((v[0]-v[1])/v[0]*100).toFixed(1)}%</strong><br>Simplified net profit: <strong>${money(v[0]-v[1]-v[2])}</strong>`};if($('#costType'))$('#costType').onchange=()=>$('#costFeedback').textContent=$('#costType').value==='Usually fixed'?'Correct. Rent is usually fixed over the lease planning period.':$('#costType').value?'Try again. The rent in this example does not rise with each sale.':'';if($('#cashCalc'))$('#cashCalc').onclick=()=>{const v=values(['startup','inventory','reserve','cashin','cashout']);$('#cashOut').innerHTML=!v?'Enter a non-negative amount in every field.':`Initial funding needed: <strong>${money(v[0]+v[1]+v[2])}</strong><br>Month 1 closing cash: <strong>${money(v[2]+v[3]-v[4])}</strong><br>${v[2]+v[3]-v[4]<0?'This example has a cash shortfall. Review timing, funding and payments.':'A positive balance does not establish profitability.'}`};if($('#breakCalc'))$('#breakCalc').onclick=()=>{const v=values(['fixed','contribution','days']);if(!v||v[1]<=0||v[1]>100||!Number.isInteger(v[2])||v[2]<1||v[2]>31){$('#breakOut').textContent='Use non-negative fixed costs, a margin above 0% and up to 100%, and 1–31 whole trading days.';return}const target=v[0]/(v[1]/100);$('#breakOut').innerHTML=`Monthly sales target: <strong>${money(target)}</strong><br>Average weekly target: <strong>${money(target*12/52)}</strong><br>Daily target for this month: <strong>${money(target/v[2])}</strong>`}}
function score(){return quiz.reduce((n,q,i)=>n+(state.quiz[i]===q[2]?1:0),0)}
function renderQuiz(){if(state.done.length<12){$('#main').innerHTML=`<span class="pill">Final knowledge check</span><h1>Finish your learning path</h1><p class="intro">Complete each lesson’s practice question, then select “Complete & continue”.</p><p>${12-state.done.length} lessons remain. Your work is saved in this browser.</p><button id="resume" class="primary">Continue learning</button>`;$('#resume').onclick=()=>navigate(lessons.findIndex((_,i)=>!state.done.includes(i)));return}if(state.submitted){const n=score();$('#main').innerHTML=`<span class="pill">Practice result</span><h1>${n>=8?'Knowledge check complete':'Review & try again'}</h1><p class="score">${n}/10</p><p>${n>=8?'You reached the suggested practice target of 80%.':'The suggested practice target is 80%. Review the explanations below before another attempt.'}</p><p class="note">This target is for this session only, not an official INS certification threshold. All 12 lessons completed. This result is stored only in this browser.</p><section class="lesson"><h2>Your answer review</h2>${quiz.map((q,i)=>`<details><summary>${state.quiz[i]===q[2]?'✓ Correct':'Review'} · ${i+1}. ${q[0]}</summary><p>Your answer: ${esc(q[1][state.quiz[i]]||'Not answered')}</p><p><strong>Correct answer: ${q[1][q[2]]}</strong></p><p>${q[3]}</p></details>`).join('')}</section><div class="actions"><button class="secondary" id="retry">Try the check again</button><button class="primary" id="download">Download result</button><button class="secondary" id="print">Print result</button></div>`;$('#retry').onclick=()=>{state.quiz={};state.submitted=false;save();renderQuiz()};$('#download').onclick=download;$('#print').onclick=()=>window.print();return}$('#main').innerHTML=`<span class="pill">10 questions · Suggested practice target 80%</span><h1>Check your understanding</h1><p class="intro">Choose one answer for each question. Your score and explanations appear after submission.</p><form id="quiz">${quiz.map((q,i)=>`<fieldset class="lesson"><legend>${i+1}. ${q[0]}</legend>${q[1].map((v,j)=>`<label class="check"><input style="width:auto;margin-right:12px" type="radio" name="q${i}" value="${j}" ${state.quiz[i]===j?'checked':''} required>${v}</label>`).join('')}</fieldset>`).join('')}<p id="quizCount" class="note"></p><button class="primary" type="submit">Submit knowledge check</button></form>`;function count(){$('#quizCount').textContent=`${Object.keys(state.quiz).length} of 10 answered`}count();$('#quiz').onchange=e=>{state.quiz[Number(e.target.name.slice(1))]=Number(e.target.value);save();count()};$('#quiz').onsubmit=e=>{e.preventDefault();if(Object.keys(state.quiz).length!==10)return;state.submitted=true;state.completedAt=new Date().toISOString();save();renderQuiz();window.scrollTo(0,0)}}
function download(){const txt=`INS MARKET — MODULES 1 & 2\nPractice learning record\nCompleted: ${new Date(state.completedAt).toLocaleString()}\nLessons completed: ${state.done.length}/12\nKnowledge check: ${score()}/10 (${score()*10}%)\nSuggested practice target: 80%\nNot an official certification. Self-reported browser result, not identity verified.\n\n`+quiz.map((q,i)=>`${i+1}. ${q[0]}\nAnswer: ${q[1][state.quiz[i]]}\nCorrect: ${q[1][q[2]]}\n`).join('\n');const url=URL.createObjectURL(new Blob([txt],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='INS-Modules-1-2-Practice-Result.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}
$('#reset').onclick=()=>{if(confirm('Clear this browser’s lesson progress and quiz results?')){state={i:0,done:[],answers:{},quiz:{},submitted:false};save();render()}};render();
if(document.modelContext?.registerTool){try{document.modelContext.registerTool({name:'get_learning_progress',description:'Read completed lesson count and practice quiz result without changing them.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true},execute:()=>({lesson:state.i+1,completed:state.done.length,total:12,quizSubmitted:state.submitted,score:state.submitted?score():null})});document.modelContext.registerTool({name:'open_learning_lesson',description:'Navigate to an INS lesson without completing it or answering questions.',inputSchema:{type:'object',properties:{lesson:{type:'integer',minimum:1,maximum:13}},required:['lesson'],additionalProperties:false},execute:input=>{if(!Number.isInteger(input.lesson)||input.lesson<1||input.lesson>13)throw Error('Lesson must be 1–13');navigate(input.lesson-1);return{lesson:input.lesson}}})}catch{}}
