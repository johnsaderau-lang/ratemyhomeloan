import { useState } from "react";
var J="/judge 3.png";
var M=6.19;
var L=[
{name:"CommBank",s:"/cba.png",sc:1.8},
{name:"NAB",s:"/nab"},
{name:"ANZ",s:"/anz.png"},
{name:"Westpac",s:"/wbc.png",sc:1.8},
{name:"St George",s:"/STG.jpg",sc:3.0},
{name:"Macquarie",s:"/macquarie.svg"},
{name:"ING",s:"/ING.png"},
{name:"Suncorp",s:"/suncorp.png"},
{name:"Bankwest",s:"/bankwest.png"},
{name:"AMP",s:"/amp.svg"},
{name:"Pepper Money",s:"/pepper.png"},
{name:"Liberty",s:"/liberty.png"},
{name:"La Trobe",s:"/latrobe.png",sc:1.5},
{name:"Resimac",s:"/resimac.svg"},
{name:"Firstmac",s:"/firstmac.svg"},
{name:"Athena",s:"/athena.svg"},
{name:"Ubank",s:"/ubank.svg"},
];
var CSS="*{box-sizing:border-box;margin:0;padding:0}body{font-family:Inter,Arial,sans-serif;color:#1a1a2e}.nav{background:#fff;border-bottom:1px solid #e5e7eb;padding:.75rem 1rem;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100}.logo{font-size:1.1rem;font-weight:800;color:#023047}.logo .ac{color:#22d3ee}.nl{display:flex;gap:1.5rem}.nl a{color:#4b5563;font-size:.85rem;font-weight:500;cursor:pointer;text-decoration:none}.ncta{background:#fc8500;color:#fff;border:none;padding:.5rem 1rem;border-radius:.4rem;font-weight:700;cursor:pointer;font-size:.85rem;white-space:nowrap}.ncta:hover{background:#e07700}.hero{position:relative;min-height:600px;overflow:hidden;display:flex;align-items:stretch;background:#f8fafc}.hi{position:absolute;inset:0;z-index:1}.hi img{width:100%;height:100%;object-fit:cover;object-position:right center}.hf{position:absolute;inset:0;z-index:2;background:linear-gradient(to right,rgba(248,250,252,1) 0%,rgba(248,250,252,.98) 42%,rgba(248,250,252,.6) 62%,transparent 100%)}.hb{position:relative;z-index:3;width:50%;padding:5rem 3rem 5rem 5rem;display:flex;flex-direction:column;justify-content:center}.hb h1{font-size:2.8rem;font-weight:900;line-height:1.1;color:#023047;margin-bottom:1.2rem}.hb h1 em{color:#22d3ee;font-style:normal}.hb p{font-size:1.05rem;color:#374151;margin-bottom:2rem;line-height:1.65}.btn{background:#fc8500;color:#fff;border:none;padding:1rem 2.5rem;border-radius:.5rem;font-size:1.05rem;font-weight:700;cursor:pointer;display:inline-flex;align-items:center;gap:.4rem}.btn:hover{background:#e07700}.trust{display:flex;gap:1.2rem;margin-top:1.5rem;flex-wrap:wrap}.trust span{font-size:.85rem;color:#374151;font-weight:500}.trust .tick{color:#16a34a;font-weight:700;margin-right:.2rem}.tw{background:#fff;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;padding:1rem 0;overflow:hidden}.ticker{display:flex;gap:1rem;animation:sc 35s linear infinite;width:max-content}.ticker:hover{animation-play-state:paused}@keyframes sc{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}.lc{display:flex;align-items:center;justify-content:center;width:120px;height:48px;overflow:hidden;flex-shrink:0}.lc img{max-height:32px;max-width:100px;width:auto;height:auto;object-fit:contain}.subtext-mobile{display:none}.sec{padding:4rem 2rem;max-width:860px;margin:0 auto}.st{font-size:1.9rem;font-weight:800;color:#023047;margin-bottom:.5rem}.ss{color:#6b7280;margin-bottom:2.5rem}.card{background:#fff;border-radius:1rem;box-shadow:0 4px 24px rgba(0,0,0,.08);padding:2.5rem;max-width:580px;margin:0 auto}.fi{margin-bottom:1.4rem}.fi label{display:block;font-weight:600;color:#374151;margin-bottom:.45rem;font-size:.92rem}.fi select,.fi input{width:100%;padding:.72rem 1rem;border:1.5px solid #d1d5db;border-radius:.5rem;font-size:1rem;color:#1a1a2e;outline:none}.fi select:focus,.fi input:focus{border-color:#023047}.sb{width:100%;background:#fc8500;color:#fff;border:none;padding:1rem;border-radius:.5rem;font-size:1.05rem;font-weight:700;cursor:pointer;margin-top:.4rem}.sb:hover{background:#e07700}.sb:disabled{background:#9ca3af;cursor:not-allowed}.consent{display:flex;align-items:flex-start;gap:.6rem;margin:1.2rem 0;font-size:.82rem;color:#4b5563;line-height:1.5;text-align:left}.consent input{width:auto;margin-top:.2rem;flex-shrink:0}.consent a{color:#023047;text-decoration:underline;cursor:pointer}.stamp{font-size:2.2rem;font-weight:900;letter-spacing:.12em;padding:.7rem 1.8rem;border:4px solid;border-radius:.5rem;display:inline-block;margin:1rem 0;text-transform:uppercase}.bw{margin:1.4rem 0}.bar{height:11px;background:#e5e7eb;border-radius:6px;overflow:hidden}.bf{height:100%;border-radius:6px;transition:width 1s}.sav{background:#f0fdf4;border:1px solid #bbf7d0;border-radius:.75rem;padding:1.4rem;margin:1.4rem 0;text-align:center}.sav h3{color:#16a34a;font-size:1.05rem;font-weight:700;margin-bottom:.3rem}.amt{font-size:1.5rem;font-weight:800;color:#023047}.lf{text-align:left;margin-top:2rem}.lf h3{font-size:1.05rem;font-weight:700;color:#023047;margin-bottom:1rem}.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;margin-top:2rem}.step{text-align:center}.sn{width:46px;height:46px;background:#023047;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.15rem;font-weight:800;margin:0 auto 1rem}.step h3{font-weight:700;color:#023047;margin-bottom:.35rem}.step p{color:#6b7280;font-size:.88rem}.policy{max-width:780px;margin:0 auto;padding:3rem 2rem 4rem;color:#374151;line-height:1.7}.policy h1{font-size:2rem;color:#023047;margin-bottom:.4rem}.policy .updated{color:#9ca3af;font-size:.85rem;margin-bottom:2rem}.policy h2{font-size:1.15rem;color:#023047;margin:1.6rem 0 .5rem;font-weight:700}.policy p{margin-bottom:.9rem;font-size:.95rem}.policy ul{margin:.4rem 0 .9rem 1.4rem}.policy li{margin-bottom:.3rem;font-size:.95rem}.ft{background:#023047;color:rgba(255,255,255,.85);padding:2.2rem 1.5rem 1.2rem;font-size:.68rem;line-height:1.55}.ftw{max-width:1100px;margin:0 auto;text-align:center}.ftw .brand{color:#fff;font-weight:700;font-size:.8rem;margin-bottom:.5rem}.ftw .compliance{color:rgba(255,255,255,.75);max-width:780px;margin:0 auto .8rem}.ftw .members{color:rgba(255,255,255,.7);margin-bottom:.35rem}.ftw .addr{color:rgba(255,255,255,.7);margin-bottom:.8rem}.ftw .copy{color:rgba(255,255,255,.6);font-size:.62rem;border-top:1px solid rgba(255,255,255,.15);padding-top:.8rem;margin-top:.8rem}.ftw .copy a{color:rgba(255,255,255,.85);cursor:pointer;text-decoration:none;margin:0 .3rem}.ftw .copy a:hover{color:#fff;text-decoration:underline}@media(max-width:768px){.hero{min-height:auto;padding:0;background:#fff;display:block;position:relative}.hi{position:relative;width:100%;height:auto;inset:auto}.hi img{width:100%;height:auto;object-fit:contain;display:block}.hf{display:none}.hb{position:absolute;top:0;left:0;width:62%;height:100%;padding:1rem .8rem 1rem 1rem;background:transparent;z-index:5;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start}.hb h1{font-size:1.5rem;margin-top:.7rem;margin-bottom:1.3rem;line-height:1.2;color:#023047;text-shadow:0 1px 2px rgba(255,255,255,.8)}.hb p{display:none}.hb .btn{padding:.7rem 1.2rem;font-size:.9rem;width:auto;align-self:flex-start;margin-top:0}.hb .trust{display:none}.subtext-mobile{display:block;padding:1rem 1.2rem .4rem;text-align:center;font-size:.85rem;color:#374151;line-height:1.5;background:#fff}.trust-mobile{display:flex;justify-content:center;gap:.6rem;padding:.6rem 1rem .9rem;flex-wrap:wrap;background:#fff}.trust-mobile span{font-size:.75rem;color:#374151;font-weight:500}.trust-mobile .tick{color:#16a34a;font-weight:700;margin-right:.2rem}.nl{display:none}.steps{grid-template-columns:1fr}.card{padding:1.5rem}.sec{padding:2.5rem 1.2rem}.policy{padding:2rem 1.2rem 3rem}.policy h1{font-size:1.5rem}}@media(min-width:769px){.trust-mobile,.subtext-mobile{display:none}}";
function vd(r){if(r>M+.5)return{label:"GUILTY",color:"#dc2626",score:Math.max(1,Math.round(10-(r-M)*4))};if(r>M+.1)return{label:"UNDER REVIEW",color:"#d97706",score:Math.round(10-(r-M)*3)};return{label:"ACQUITTED",color:"#16a34a",score:Math.min(10,Math.round(10-(r-M)*2))};}
export default function App(){
  const [pg,setPg]=useState("home");
  const [fm,setFm]=useState({tp:"owner",rt:"variable",rate:"",amt:"",lender:"CommBank"});
  const [ld,setLd]=useState({name:"",phone:"",email:"",consent:false});
  const [res,setRes]=useState(null);
  const [dn,setDn]=useState(false);
  const go=p=>{setPg(p);window.scrollTo(0,0);};
  const check=()=>{const r=parseFloat(fm.rate);if(!r||!fm.amt)return;const v=vd(r),d=r-M;setRes({...v,r,d:d.toFixed(2),lo:Math.max(0,Math.round(d*.8*parseFloat(fm.amt)/100)),hi:Math.max(0,Math.round(d*parseFloat(fm.amt)/100))});go("result");};
  const send=()=>{if(!ld.name||!ld.phone||!ld.email||!ld.consent)return;fetch("https://hook.eu1.make.com/gegqff5hxhba8ivp7cyfitoxj2fdgsk2",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({source:"ratemyhomeloan",name:ld.name,phone:ld.phone,email:ld.email,...fm,verdict:res?.label})}).catch(()=>{});setDn(true);};
  const dl=[...L,...L];
  return (<>
    <style dangerouslySetInnerHTML={{__html:CSS}}/>
    <nav className="nav">
      <div className="logo" onClick={()=>go("home")} style={{cursor:"pointer"}}>rate<span className="ac">my</span>home<span className="ac">loan</span>.com.au</div>
      <div className="nl"><a onClick={()=>go("home")}>Home</a><a onClick={()=>go("how")}>How It Works</a><a onClick={()=>go("about")}>About</a></div>
      <button className="ncta" onClick={()=>go("quiz")}>Check My Rate</button>
    </nav>
    {pg==="home"&&<>
      <div className="hero">
        <div className="hi"><img src={J} alt="Judge"/></div>
        <div className="hf"/>
        <div className="hb">
          <h1>Put your home loan <em>on trial</em></h1>
          <p>Compare your rate against the current market and get the verdict.</p>
          <button className="btn" onClick={()=>go("quiz")}>Start the trial &#8594;</button>
          <div className="trust"><span><span className="tick">&#10003;</span> 100% free</span><span><span className="tick">&#10003;</span> No obligation</span><span><span className="tick">&#10003;</span> Updated monthly</span></div>
        </div>
      </div>
      <div className="subtext-mobile">Compare your rate against the current market and get the verdict.</div>
      <div className="trust-mobile"><span><span className="tick">&#10003;</span> 100% free</span><span><span className="tick">&#10003;</span> No obligation</span><span><span className="tick">&#10003;</span> Updated monthly</span></div>
      <div className="tw"><div className="ticker">
        {dl.map((l,i)=>(<div key={i} className="lc"><img src={l.s} alt={l.name} style={{transform:l.sc?"scale("+l.sc+")":undefined,maxHeight:"32px",maxWidth:"100px",width:"auto",height:"auto",objectFit:"contain"}} onError={e=>{e.target.style.display="none";e.target.nextSibling.style.display="block";}}/><span style={{display:"none",fontWeight:700,fontSize:".7rem",color:"#023047"}}>{l.name}</span></div>))}
      </div></div>
      <div className="sec" style={{textAlign:"center"}}>
        <div className="st">Is your bank guilty of overcharging you?</div>
        <p className="ss">Enter your current rate and get a verdict in 60 seconds.</p>
        <button className="btn" onClick={()=>go("quiz")}>Get My Verdict &#8594;</button>
      </div>
    </>}
    {pg==="quiz"&&<div className="sec"><div className="st">THE TRIAL</div><p className="ss">Enter your loan details to receive your verdict</p><div className="card">
      <div className="fi"><label>Loan Purpose</label><select value={fm.tp} onChange={e=>setFm({...fm,tp:e.target.value})}><option value="owner">Owner Occupied</option><option value="investment">Investment</option></select></div>
      <div className="fi"><label>Rate Type</label><select value={fm.rt} onChange={e=>setFm({...fm,rt:e.target.value})}><option value="variable">Variable</option><option value="fixed">Fixed</option></select></div>
      <div className="fi"><label>Current Interest Rate (%)</label><input type="number" step="0.01" min="1" max="15" placeholder="e.g. 6.45" value={fm.rate} onChange={e=>setFm({...fm,rate:e.target.value})}/></div>
      <div className="fi"><label>Loan Amount ($)</label><input type="number" step="10000" min="50000" placeholder="e.g. 600000" value={fm.amt} onChange={e=>setFm({...fm,amt:e.target.value})}/></div>
      <div className="fi"><label>Current Lender</label><select value={fm.lender} onChange={e=>setFm({...fm,lender:e.target.value})}>{L.map(l=><option key={l.name}>{l.name}</option>)}</select></div>
      <button className="sb" onClick={check}>Deliver the Verdict &#8594;</button>
    </div></div>}
    {pg==="result"&&res&&<div className="sec"><div className="st">THE VERDICT</div><div className="card" style={{textAlign:"center"}}>
      <p style={{color:"#6b7280"}}>Your rate <strong>{res.r}%</strong> vs market <strong>{M}%</strong></p>
      <div className="stamp" style={{color:res.color,borderColor:res.color}}>{res.label}</div>
      <div className="bw"><div style={{display:"flex",justifyContent:"space-between",marginBottom:".35rem"}}><span style={{fontSize:".82rem",color:"#6b7280"}}>Rate Score</span><span style={{fontSize:".82rem",fontWeight:700,color:res.color}}>{res.score}/10</span></div><div className="bar"><div className="bf" style={{width:res.score*10+"%",background:res.color}}/></div></div>
      {res.d>0&&<div className="sav"><h3>Potential Annual Savings</h3><p className="amt">${res.lo.toLocaleString()} &#8211; ${res.hi.toLocaleString()}</p><p style={{fontSize:".82rem",color:"#6b7280",marginTop:".3rem"}}>By switching to a better rate</p></div>}
      {!dn?<div className="lf"><h3>Get a free rate review from a licensed broker</h3>
        <div className="fi"><label>Name</label><input placeholder="Your name" value={ld.name} onChange={e=>setLd({...ld,name:e.target.value})}/></div>
        <div className="fi"><label>Phone</label><input placeholder="Your phone" value={ld.phone} onChange={e=>setLd({...ld,phone:e.target.value})}/></div>
        <div className="fi"><label>Email</label><input placeholder="Your email" value={ld.email} onChange={e=>setLd({...ld,email:e.target.value})}/></div>
        <label className="consent"><input type="checkbox" checked={ld.consent} onChange={e=>setLd({...ld,consent:e.target.checked})}/><span>I have read the <a onClick={()=>go("privacy")}>Privacy Policy</a> and <a onClick={()=>go("terms")}>Terms of Use</a>, and consent to being contacted by The Finance Firm and our partner brokers about my enquiry by phone, email or SMS.</span></label>
        <button className="sb" onClick={send} disabled={!ld.consent}>Get My Free Rate Review &#8594;</button>
      </div>:<div style={{background:"#f0fdf4",padding:"1.5rem",borderRadius:".75rem",marginTop:"1.5rem"}}><p style={{color:"#16a34a",fontWeight:700}}>&#10003; Thanks! A broker will be in touch shortly.</p></div>}
    </div></div>}
    {pg==="how"&&<div className="sec"><div className="st">How It Works</div><p className="ss">Three steps to your verdict</p><div className="steps"><div className="step"><div className="sn">1</div><h3>Enter Your Rate</h3><p>Tell us your current rate, loan type and lender.</p></div><div className="step"><div className="sn">2</div><h3>Get Your Verdict</h3><p>We compare against the best rates right now.</p></div><div className="step"><div className="sn">3</div><h3>Take Action</h3><p>Connect with a broker and start saving.</p></div></div></div>}
    {pg==="about"&&<div className="sec"><div className="st">About RateMyHomeLoan</div><p style={{color:"#374151",lineHeight:1.8,marginTop:"1rem"}}>RateMyHomeLoan.com.au is an independent rate comparison tool helping Australian homeowners find out if they are paying too much on their home loan. The site is operated by The Finance Firm Pty Ltd, an Australian mortgage broking firm authorised under Australian Finance Group (AFG).</p></div>}
    {pg==="privacy"&&<div className="policy">
      <h1>Privacy Policy</h1>
      <p className="updated">Last updated: April 2026</p>
      <p>The Finance Firm Pty Ltd (ABN 31 670 677 513) ("we", "us", "our") operates ratemyhomeloan.com.au. We are committed to handling your personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).</p>
      <h2>What we collect</h2>
      <p>When you use our rate-comparison tool and submit your details for a rate review, we collect:</p>
      <ul><li>Your name, phone number, and email address</li><li>Information about your current home loan (interest rate, loan amount, lender, loan type)</li><li>Technical information automatically (IP address, browser type, device information, pages visited)</li></ul>
      <h2>Why we collect it</h2>
      <ul><li>To deliver the rate verdict service you have requested</li><li>To contact you about your enquiry, including by phone, SMS, or email</li><li>To match you with a licensed mortgage broker for a rate review</li><li>To improve our website and service</li><li>To comply with our legal and regulatory obligations</li></ul>
      <h2>Who we share it with</h2>
      <p>We may share your personal information with:</p>
      <ul><li>Mortgage brokers within The Finance Firm and our partner network, for the purpose of providing the service you requested</li><li>Australian Finance Group Ltd (AFG) and other aggregators or lenders, where required to provide credit assistance</li><li>Service providers who help us operate our website and CRM (e.g. data hosting, email delivery, customer relationship platforms)</li><li>Government or regulatory bodies where required by law</li></ul>
      <p>We do not sell your personal information.</p>
      <h2>How we store and protect it</h2>
      <p>Your information is stored on secure cloud-based platforms based in Australia or with reputable international providers. We take reasonable steps to protect your information from misuse, unauthorised access, and disclosure.</p>
      <h2>Direct marketing</h2>
      <p>By submitting your details, you consent to us contacting you about your enquiry and about other home-loan related products and services we believe may be of interest. You can opt out at any time by replying "STOP" to any SMS, clicking "unsubscribe" in any email, or contacting us directly.</p>
      <h2>Cookies and tracking</h2>
      <p>We use cookies and similar technologies to understand how visitors use our website, run advertising campaigns (including via Meta and Google), and improve user experience. You can disable cookies in your browser settings, though this may affect website functionality.</p>
      <h2>Accessing or correcting your information</h2>
      <p>You can request access to, or correction of, the personal information we hold about you at any time by contacting us at hi@thefinancefirm.com.au. We will respond within 30 days.</p>
      <h2>Complaints</h2>
      <p>If you have a privacy complaint, please contact us first at hi@thefinancefirm.com.au. If you are not satisfied with our response, you can refer the matter to the Australian Financial Complaints Authority (AFCA) on 1800 931 678 or via afca.org.au, or to the Office of the Australian Information Commissioner (OAIC) on 1300 363 992 or via oaic.gov.au.</p>
      <h2>Contact</h2>
      <p>The Finance Firm Pty Ltd<br/>1/299 Elizabeth Street, Sydney NSW 2000<br/>hi@thefinancefirm.com.au</p>
    </div>}
    {pg==="terms"&&<div className="policy">
      <h1>Terms of Use</h1>
      <p className="updated">Last updated: April 2026</p>
      <p>By using ratemyhomeloan.com.au you agree to these terms. If you do not agree, please do not use the site.</p>
      <h2>About this website</h2>
      <p>This website is operated by The Finance Firm Pty Ltd (ABN 31 670 677 513). It provides a free indicative rate comparison tool to help Australian home-loan customers understand how their current interest rate compares to the broader market.</p>
      <h2>General information only</h2>
      <p>All content on this website is general in nature. It does not take into account your personal objectives, financial situation, or needs. It is not financial advice or credit advice. The "verdict" delivered by our rate-comparison tool is indicative only and based on publicly available rate data; actual savings or refinancing options will depend on your individual circumstances and lender approval. You should obtain personal advice before making any financial decision.</p>
      <h2>Accuracy of information</h2>
      <p>We use reasonable efforts to keep market rate information accurate and current, but we cannot guarantee that all information is up to date or free from error. Rates and lender policies change frequently.</p>
      <h2>Lead referral</h2>
      <p>When you submit your details, we may refer you to a mortgage broker within The Finance Firm or our partner network. There is no cost to you for this service. Brokers are remunerated by lenders if you proceed with a loan; this does not increase the cost to you.</p>
      <h2>No reliance</h2>
      <p>You agree not to rely solely on the information on this website to make a decision about a financial product. You should always seek personal advice from a licensed broker, financial adviser, or other appropriate professional.</p>
      <h2>Intellectual property</h2>
      <p>All content on this website (text, graphics, logos, design) is owned by The Finance Firm Pty Ltd or used under licence. You may not reproduce, modify, or distribute it without permission.</p>
      <h2>Liability</h2>
      <p>To the extent permitted by law, we exclude liability for any loss or damage you may suffer as a result of using this website or relying on its content. Nothing in these terms excludes any consumer rights you have under Australian Consumer Law that cannot be excluded.</p>
      <h2>Changes to these terms</h2>
      <p>We may update these terms from time to time. The current version will always be available on this page.</p>
      <h2>Governing law</h2>
      <p>These terms are governed by the laws of New South Wales, Australia.</p>
    </div>}
    <div className="ft"><div className="ftw">
      <div className="brand">ratemyhomeloan.com.au</div>
      <div className="compliance">Operated by The Finance Firm Pty Ltd (ABN 31 670 677 513, ACN 670 677 513), Australian Credit Representative #561872 of Australian Finance Group Ltd, Australian Credit Licence 389087. Information on this website is general in nature and does not take into account your personal objectives, financial situation, or needs. It is not financial or credit advice. Comparisons are based on publicly available rate data and are indicative only. Actual rates and savings will depend on your individual circumstances and lender approval.</div>
      <div className="members">Member of MFAA (#684768) &middot; AFCA member #87710</div>
      <div className="addr">1/299 Elizabeth Street, Sydney NSW 2000</div>
      <div className="copy">&copy; 2026 The Finance Firm Pty Ltd. <a onClick={()=>go("privacy")}>Privacy Policy</a> &middot; <a onClick={()=>go("terms")}>Terms of Use</a></div>
    </div></div>
  </>);
}
