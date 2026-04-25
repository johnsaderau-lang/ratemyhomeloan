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
var CSS="*{box-sizing:border-box;margin:0;padding:0}body{font-family:Inter,Arial,sans-serif;color:#1a1a2e}.nav{background:#fff;border-bottom:1px solid #e5e7eb;padding:.75rem 1rem;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100}.logo{font-size:1.1rem;font-weight:800;color:#0f4c5c}.logo span{color:#f97316}.nl{display:flex;gap:1.5rem}.nl a{color:#4b5563;font-size:.85rem;font-weight:500;cursor:pointer;text-decoration:none}.ncta{background:#f97316;color:#fff;border:none;padding:.5rem 1rem;border-radius:.4rem;font-weight:700;cursor:pointer;font-size:.85rem;white-space:nowrap}.hero{position:relative;min-height:600px;overflow:hidden;display:flex;align-items:stretch;background:#f8fafc}.hi{position:absolute;inset:0;z-index:1}.hi img{width:100%;height:100%;object-fit:cover;object-position:right center}.hf{position:absolute;inset:0;z-index:2;background:linear-gradient(to right,rgba(248,250,252,1) 0%,rgba(248,250,252,.98) 42%,rgba(248,250,252,.6) 62%,transparent 100%)}.hb{position:relative;z-index:3;width:50%;padding:5rem 3rem 5rem 5rem;display:flex;flex-direction:column;justify-content:center}.hb h1{font-size:2.8rem;font-weight:900;line-height:1.1;color:#0f4c5c;margin-bottom:1.2rem}.hb h1 em{color:#f97316;font-style:normal}.hb p{font-size:1.05rem;color:#374151;margin-bottom:2rem;line-height:1.65}.btn{background:#f97316;color:#fff;border:none;padding:1rem 2.5rem;border-radius:.5rem;font-size:1.05rem;font-weight:700;cursor:pointer;display:inline-flex;align-items:center;gap:.4rem}.btn:hover{background:#ea6c00}.trust{display:flex;gap:1.2rem;margin-top:1.5rem;flex-wrap:wrap}.trust span{font-size:.85rem;color:#374151;font-weight:500}.trust .tick{color:#16a34a;font-weight:700;margin-right:.2rem}.tw{background:#fff;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;padding:1rem 0;overflow:hidden}.ticker{display:flex;gap:1rem;animation:sc 35s linear infinite;width:max-content}.ticker:hover{animation-play-state:paused}@keyframes sc{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}.lc{display:flex;align-items:center;justify-content:center;width:120px;height:48px;overflow:hidden;flex-shrink:0}.lc img{max-height:32px;max-width:100px;width:auto;height:auto;object-fit:contain}.subtext-mobile{display:none}.sec{padding:4rem 2rem;max-width:860px;margin:0 auto}.st{font-size:1.9rem;font-weight:800;color:#0f4c5c;margin-bottom:.5rem}.ss{color:#6b7280;margin-bottom:2.5rem}.card{background:#fff;border-radius:1rem;box-shadow:0 4px 24px rgba(0,0,0,.08);padding:2.5rem;max-width:580px;margin:0 auto}.fi{margin-bottom:1.4rem}.fi label{display:block;font-weight:600;color:#374151;margin-bottom:.45rem;font-size:.92rem}.fi select,.fi input{width:100%;padding:.72rem 1rem;border:1.5px solid #d1d5db;border-radius:.5rem;font-size:1rem;color:#1a1a2e;outline:none}.fi select:focus,.fi input:focus{border-color:#0f4c5c}.sb{width:100%;background:#f97316;color:#fff;border:none;padding:1rem;border-radius:.5rem;font-size:1.05rem;font-weight:700;cursor:pointer;margin-top:.4rem}.sb:hover{background:#ea6c00}.stamp{font-size:2.2rem;font-weight:900;letter-spacing:.12em;padding:.7rem 1.8rem;border:4px solid;border-radius:.5rem;display:inline-block;margin:1rem 0;text-transform:uppercase}.bw{margin:1.4rem 0}.bar{height:11px;background:#e5e7eb;border-radius:6px;overflow:hidden}.bf{height:100%;border-radius:6px;transition:width 1s}.sav{background:#f0fdf4;border:1px solid #bbf7d0;border-radius:.75rem;padding:1.4rem;margin:1.4rem 0;text-align:center}.sav h3{color:#16a34a;font-size:1.05rem;font-weight:700;margin-bottom:.3rem}.amt{font-size:1.5rem;font-weight:800;color:#0f4c5c}.lf{text-align:left;margin-top:2rem}.lf h3{font-size:1.05rem;font-weight:700;color:#0f4c5c;margin-bottom:1rem}.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;margin-top:2rem}.step{text-align:center}.sn{width:46px;height:46px;background:#0f4c5c;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.15rem;font-weight:800;margin:0 auto 1rem}.step h3{font-weight:700;color:#0f4c5c;margin-bottom:.35rem}.step p{color:#6b7280;font-size:.88rem}.ft{background:#0f4c5c;color:rgba(255,255,255,.7);padding:2rem;text-align:center;font-size:.82rem}.ft strong{color:#fff}@media(max-width:768px){.hero{min-height:auto;padding:0;background:#fff;display:block;position:relative}.hi{position:relative;width:100%;height:auto;inset:auto}.hi img{width:100%;height:auto;object-fit:contain;display:block}.hf{display:none}.hb{position:absolute;top:0;left:0;width:62%;height:100%;padding:1rem .8rem 1rem 1rem;background:transparent;z-index:5;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start}.hb h1{font-size:1.5rem;margin-top:.7rem;margin-bottom:1.3rem;line-height:1.2;color:#0f4c5c;text-shadow:0 1px 2px rgba(255,255,255,.8)}.hb p{display:none}.hb .btn{padding:.7rem 1.2rem;font-size:.9rem;width:auto;align-self:flex-start;margin-top:0}.hb .trust{display:none}.subtext-mobile{display:block;padding:1rem 1.2rem .4rem;text-align:center;font-size:.85rem;color:#374151;line-height:1.5;background:#fff}.trust-mobile{display:flex;justify-content:center;gap:.6rem;padding:.6rem 1rem .9rem;flex-wrap:wrap;background:#fff}.trust-mobile span{font-size:.75rem;color:#374151;font-weight:500}.trust-mobile .tick{color:#16a34a;font-weight:700;margin-right:.2rem}.nl{display:none}.steps{grid-template-columns:1fr}.card{padding:1.5rem}.sec{padding:2.5rem 1.2rem}}@media(min-width:769px){.trust-mobile,.subtext-mobile{display:none}}";
function vd(r){if(r>M+.5)return{label:"GUILTY",color:"#dc2626",score:Math.max(1,Math.round(10-(r-M)*4))};if(r>M+.1)return{label:"UNDER REVIEW",color:"#d97706",score:Math.round(10-(r-M)*3)};return{label:"ACQUITTED",color:"#16a34a",score:Math.min(10,Math.round(10-(r-M)*2))};}
export default function App(){
  const [pg,setPg]=useState("home");
  const [fm,setFm]=useState({tp:"owner",rt:"variable",rate:"",amt:"",lender:"CommBank"});
  const [ld,setLd]=useState({name:"",phone:"",email:""});
  const [res,setRes]=useState(null);
  const [dn,setDn]=useState(false);
  const go=p=>{setPg(p);window.scrollTo(0,0);};
  const check=()=>{const r=parseFloat(fm.rate);if(!r||!fm.amt)return;const v=vd(r),d=r-M;setRes({...v,r,d:d.toFixed(2),lo:Math.max(0,Math.round(d*.8*parseFloat(fm.amt)/100)),hi:Math.max(0,Math.round(d*parseFloat(fm.amt)/100))});go("result");};
  const send=()=>{if(!ld.name||!ld.phone||!ld.email)return;fetch("https://hook.eu1.make.com/your-webhook",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({source:"ratemyhomeloan",...ld,...fm,verdict:res?.label})}).catch(()=>{});setDn(true);};
  const dl=[...L,...L];
  return (<>
    <style dangerouslySetInnerHTML={{__html:CSS}}/>
    <nav className="nav">
      <div className="logo">RateMy<span>Home</span>Loan.com.au</div>
      <div className="nl"><a onClick={()=>go("home")}>Home</a><a onClick={()=>go("how")}>How It Works</a><a onClick={()=>go("about")}>About</a></div>
      <button className="ncta" onClick={()=>go("quiz")}>Check My Rate</button>
    </nav>
    {pg==="home"&&<>
      <div className="hero">
        <div className="hi"><img src={J} alt="Judge"/></div>
        <div className="hf"/>
        <div className="hb">
          <h1>Is your bank <em>guilty</em> of overcharging you?</h1>
          <p>Compare your rate against real lenders and get an honest verdict.</p>
          <button className="btn" onClick={()=>go("quiz")}>Start the trial &#8594;</button>
          <div className="trust"><span><span className="tick">&#10003;</span> 100% free</span><span><span className="tick">&#10003;</span> No obligation</span><span><span className="tick">&#10003;</span> Updated monthly</span></div>
        </div>
      </div>
      <div className="subtext-mobile">Compare your rate against real lenders and get an honest verdict.</div>
      <div className="trust-mobile"><span><span className="tick">&#10003;</span> 100% free</span><span><span className="tick">&#10003;</span> No obligation</span><span><span className="tick">&#10003;</span> Updated monthly</span></div>
      <div className="tw"><div className="ticker">
        {dl.map((l,i)=>(<div key={i} className="lc"><img src={l.s} alt={l.name} style={{transform:l.sc?"scale("+l.sc+")":undefined,maxHeight:"32px",maxWidth:"100px",width:"auto",height:"auto",objectFit:"contain"}} onError={e=>{e.target.style.display="none";e.target.nextSibling.style.display="block";}}/><span style={{display:"none",fontWeight:700,fontSize:".7rem",color:"#0f4c5c"}}>{l.name}</span></div>))}
      </div></div>
      <div className="sec" style={{textAlign:"center"}}>
        <div className="st">Find out if your lender is overcharging you</div>
        <p className="ss">Enter your current rate and get a verdict in 60 seconds</p>
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
        <button className="sb" onClick={send}>Get My Free Rate Review &#8594;</button>
      </div>:<div style={{background:"#f0fdf4",padding:"1.5rem",borderRadius:".75rem",marginTop:"1.5rem"}}><p style={{color:"#16a34a",fontWeight:700}}>&#10003; Thanks! A broker will be in touch shortly.</p></div>}
    </div></div>}
    {pg==="how"&&<div className="sec"><div className="st">How It Works</div><p className="ss">Three steps to your verdict</p><div className="steps"><div className="step"><div className="sn">1</div><h3>Enter Your Rate</h3><p>Tell us your current rate, loan type and lender.</p></div><div className="step"><div className="sn">2</div><h3>Get Your Verdict</h3><p>We compare against the best rates right now.</p></div><div className="step"><div className="sn">3</div><h3>Take Action</h3><p>Connect with a broker and start saving.</p></div></div></div>}
    {pg==="about"&&<div className="sec"><div className="st">About RateMyHomeLoan</div><p style={{color:"#374151",lineHeight:1.8,marginTop:"1rem"}}>RateMyHomeLoan.com.au is an independent rate comparison tool helping Australian homeowners find out if they are paying too much on their home loan.</p></div>}
    <div className="ft"><strong>RateMyHomeLoan.com.au</strong><br/><span>General information only. Not financial advice. &#169; 2026</span></div>
  </>);
}
