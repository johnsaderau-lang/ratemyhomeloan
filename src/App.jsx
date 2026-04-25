import { useState } from "react";

const JUDGE = "/judge 3.png";

const LENDERS = [
  { name: "CommBank", src: "/cba.png" },
  { name: "NAB", src: "/nab" },
  { name: "ANZ", src: "/anz.png" },
  { name: "Westpac", src: "/wbc.png" },
  { name: "St George", src: "/STG.jpg" },
  { name: "Macquarie", src: "/macquarie.svg" },
  { name: "ING", src: "/ING.png" },
  { name: "Suncorp", src: "/suncorp.png" },
  { name: "Bankwest", src: "/bankwest.png" },
  { name: "AMP", src: "/amp.svg" },
  { name: "Pepper Money", src: "/pepper.png" },
  { name: "Liberty", src: "/liberty.png" },
  { name: "La Trobe", src: "/latrobe.png" },
  { name: "Resimac", src: "/resimac.svg" },
  { name: "Firstmac", src: "/firstmac.svg" },
  { name: "Athena", src: "/athena.svg" },
  { name: "Ubank", src: "/ubank.svg" },
];

const MARKET = 6.19;

function getVerdict(r) {
  if (r > MARKET + 0.5) return { label: "GUILTY", color: "#dc2626", score: Math.max(1, Math.round(10-(r-MARKET)*4)) };
  if (r > MARKET + 0.1) return { label: "UNDER REVIEW", color: "#d97706", score: Math.round(10-(r-MARKET)*3) };
  return { label: "ACQUITTED", color: "#16a34a", score: Math.min(10, Math.round(10-(r-MARKET)*2)) };
}

export default function App() {
  const [page, setPage] = useState("home");
  const [form, setForm] = useState({ type: "owner", rateType: "variable", rate: "", amount: "", lender: "CommBank" });
  const [lead, setLead] = useState({ name: "", phone: "", email: "" });
  const [result, setResult] = useState(null);
  const [done, setDone] = useState(false);

  const go = (p) => { setPage(p); window.scrollTo(0, 0); };

  const check = () => {
    const r = parseFloat(form.rate);
    if (!r || !form.amount) return;
    const v = getVerdict(r);
    const diff = r - MARKET;
    const lo = Math.max(0, Math.round(diff * 0.8 * parseFloat(form.amount) / 100));
    const hi = Math.max(0, Math.round(diff * parseFloat(form.amount) / 100));
    setResult({ ...v, r, diff: diff.toFixed(2), lo, hi });
    go("result");
  };

  const submit = async () => {
    if (!lead.name || !lead.phone || !lead.email) return;
    try {
      await fetch("https://hook.eu1.make.com/your-webhook-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "ratemyhomeloan", ...lead, ...form, verdict: result?.label }),
      });
    } catch(e) {}
    setDone(true);
  };

  const css = `
    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:'Inter','Helvetica Neue',Arial,sans-serif;color:#1a1a2e}
    .nav{background:#fff;border-bottom:1px solid #e5e7eb;padding:1rem 2rem;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100}
    .logo{font-size:1.25rem;font-weight:800;color:#0f4c5c}.logo span{color:#f97316}
    .nav-links{display:flex;gap:2rem}.nav-links a{text-decoration:none;color:#4b5563;font-size:.9rem;font-weight:500;cursor:pointer}
    .nav-links a:hover{color:#0f4c5c}
    .cta{background:#f97316;color:#fff;border:none;padding:.6rem 1.4rem;border-radius:.4rem;font-weight:700;cursor:pointer;font-size:.9rem}
    .hero{position:relative;min-height:600px;overflow:hidden;display:flex;align-items:stretch;background:#f8fafc}
    .hi{position:absolute;inset:0;z-index:1}.hi img{width:100%;height:100%;object-fit:cover;object-position:right center}
    .hf{position:absolute;inset:0;z-index:2;background:linear-gradient(to right,rgba(248,250,252,1) 0%,rgba(248,250,252,.98) 42%,rgba(248,250,252,.7) 62%,rgba(248,250,252,.05) 85%,transparent 100%)}
    .hb{position:relative;z-index:3;width:50%;padding:5rem 3rem 5rem 5rem;display:flex;flex-direction:column;justify-content:center}
    .hb h1{font-size:2.8rem;font-weight:900;line-height:1.1;color:#0f4c5c;margin-bottom:1.2rem}
    .hb h1 em{color:#f97316;font-style:normal}
    .hb p{font-size:1.05rem;color:#374151;margin-bottom:2rem;line-height:1.65}
    .btn{background:#f97316;color:#fff;border:none;padding:1rem 2.5rem;border-radius:.5rem;font-size:1.05rem;font-weight:700;cursor:pointer;display:inline-flex;align-items:center;gap:.4rem;transition:background .2s}
    .btn:hover{background:#ea6c00}
    .trust{display:flex;gap:1.5rem;margin-top:1.5rem;flex-wrap:wrap}
    .trust span{font-size:.85rem;color:#374151;font-weight:500}
    .trust span::before{content:"\2713 ";color:#16a34a;font-weight:700}
    .ticker-wrap{background:#fff;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;padding:.9rem 0;overflow:hidden}
    .tlabel{text-align:center;font-size:.65rem;font-weight:700;color:#9ca3af;letter-spacing:.12em;text-transform:uppercase;margin-bottom:.7rem}
    .ticker{display:flex;gap:2.5rem;animation:scroll 30s linear infinite;width:max-content}
    .ticker:hover{animation-play-state:paused}
    @keyframes scroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
    .lcard{display:flex;align-items:center;justify-content:center;height:44px;min-width:100px;padding:0 1rem}
    .lcard img{height:30px;width:auto;max-width:110px;object-fit:contain}
    .sec{padding:5rem 2rem;max-width:860px;margin:0 auto}
    .stitle{font-size:1.9rem;font-weight:800;color:#0f4c5c;margin-bottom:.5rem}
    .ssub{color:#6b7280;margin-bottom:2.5rem;font-size:1rem}
    .card{background:#fff;border-radius:1rem;box-shadow:0 4px 24px rgba(0,0,0,.08);padding:2.5rem;max-width:580px;margin:0 auto}
    .field{margin-bottom:1.4rem}.field label{display:block;font-weight:600;color:#374151;margin-bottom:.45rem;font-size:.92rem}
    .field select,.field input{width:100%;padding:.72rem 1rem;border:1.5px solid #d1d5db;border-radius:.5rem;font-size:1rem;color:#1a1a2e;outline:none;transition:border-color .2s}
    .field select:focus,.field input:focus{border-color:#0f4c5c}
    .sub-btn{width:100%;background:#f97316;color:#fff;border:none;padding:1rem;border-radius:.5rem;font-size:1.05rem;font-weight:700;cursor:pointer;margin-top:.4rem}
    .sub-btn:hover{background:#ea6c00}
    .stamp{font-size:2.2rem;font-weight:900;letter-spacing:.15em;padding:.7rem 1.8rem;border:4px solid;border-radius:.5rem;display:inline-block;margin:1rem 0;text-transform:uppercase}
    .bw{margin:1.4rem 0}.bar{height:11px;background:#e5e7eb;border-radius:6px;overflow:hidden}
    .bf{height:100%;border-radius:6px;transition:width 1s}
    .sav{background:#f0fdf4;border:1px solid #bbf7d0;border-radius:.75rem;padding:1.4rem;margin:1.4rem 0;text-align:center}
    .sav h3{color:#16a34a;font-size:1.05rem;font-weight:700;margin-bottom:.3rem}
    .sav .amt{font-size:1.5rem;font-weight:800;color:#0f4c5c}
    .lf{text-align:left;margin-top:2rem}.lf h3{font-size:1.05rem;font-weight:700;color:#0f4c5c;margin-bottom:1rem}
    .steps{display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;margin-top:2rem}
    .step{text-align:center}
    .snum{width:46px;height:46px;background:#0f4c5c;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.15rem;font-weight:800;margin:0 auto 1rem}
    .step h3{font-weight:700;color:#0f4c5c;margin-bottom:.35rem}.step p{color:#6b7280;font-size:.88rem}
    .footer{background:#0f4c5c;color:rgba(255,255,255,.7);padding:2rem;text-align:center;font-size:.82rem}
    .footer strong{color:#fff}
    @media(max-width:768px){
      .hero{flex-direction:column;min-height:auto}
      .hi{position:relative;height:260px}.hi img{object-position:center 15%}
      .hf{background:linear-gradient(to bottom,transparent 30%,rgba(248,250,252,.92) 70%,rgba(248,250,252,1) 100%)}
      .hb{width:100%;padding:1.5rem 1.2rem 2.5rem}.hb h1{font-size:1.9rem}
      .nav-links{display:none}.trust{gap:.8rem}.steps{grid-template-columns:1fr}
      .card{padding:1.5rem}
    }
  `;

  const doubled = [...LENDERS, ...LENDERS];

  return (
    <>
      <style>{css}</style>
      <nav className="nav">
        <div className="logo">RateMy<span>Home</span>Loan.com.au</div>
        <div className="nav-links">
          <a onClick={() => go("home")}>Home</a>
          <a onClick={() => go("how")}>How It Works</a>
          <a onClick={() => go("about")}>About</a>
        </div>
        <button className="cta" onClick={() => go("quiz")}>Check My Rate</button>
      </nav>

      {page === "home" && <>
        <div className="hero">
          <div className="hi"><img src={JUDGE} alt="Judge" /></div>
          <div className="hf" />
          <div className="hb">
            <h1>Is your home loan <em>guilty</em> of overcharging you?</h1>
            <p>Compare your rate against Australia's leading lenders and get an honest verdict — no signup, no obligation.</p>
            <button className="btn" onClick={() => go("quiz")}>Start the trial &#8594;</button>
            <div className="trust">
              <span>100% free</span><span>No obligation</span><span>Updated monthly</span>
            </div>
          </div>
        </div>
        <div className="ticker-wrap">
          <div className="tlabel">Comparing rates across Australia's leading lenders</div>
          <div className="ticker">
            {doubled.map((l, i) => (
              <div key={i} className="lcard">
                <img src={l.src} alt={l.name} onError={e => { e.target.style.display="none"; e.target.nextSibling.style.display="block"; }} />
                <span style={{display:"none",fontWeight:700,fontSize:".7rem",color:"#0f4c5c"}}>{l.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="sec" style={{textAlign:"center"}}>
          <div className="stitle">Find out if your lender is overcharging you</div>
          <p className="ssub">Enter your current rate and get a verdict in under 60 seconds</p>
          <button className="btn" onClick={() => go("quiz")}>Get My Verdict &#8594;</button>
        </div>
      </>}

      {page === "quiz" && <div className="sec">
        <div className="stitle">THE TRIAL</div>
        <p className="ssub">Enter your loan details to receive your verdict</p>
        <div className="card">
          <div className="field"><label>Loan Purpose</label>
            <select value={form.type} onChange={e => setForm({...form, type: e.target.value})}>
              <option value="owner">Owner Occupied</option><option value="investment">Investment</option>
            </select>
          </div>
          <div className="field"><label>Rate Type</label>
            <select value={form.rateType} onChange={e => setForm({...form, rateType: e.target.value})}>
              <option value="variable">Variable</option><option value="fixed">Fixed</option>
            </select>
          </div>
          <div className="field"><label>Your Current Interest Rate (%)</label>
            <input type="number" step="0.01" min="1" max="15" placeholder="e.g. 6.45" value={form.rate} onChange={e => setForm({...form, rate: e.target.value})} />
          </div>
          <div className="field"><label>Loan Amount ($)</label>
            <input type="number" step="10000" min="50000" placeholder="e.g. 600000" value={form.amount} onChange={e => setForm({...form, amount: e.target.value})} />
          </div>
          <div className="field"><label>Current Lender</label>
            <select value={form.lender} onChange={e => setForm({...form, lender: e.target.value})}>
              {LENDERS.map(l => <option key={l.name}>{l.name}</option>)}
            </select>
          </div>
          <button className="sub-btn" onClick={check}>Deliver the Verdict &#8594;</button>
        </div>
      </div>}

      {page === "result" && result && <div className="sec">
        <div className="stitle">THE VERDICT</div>
        <div className="card" style={{textAlign:"center"}}>
          <p style={{color:"#6b7280"}}>Your rate <strong>{result.r}%</strong> vs market average <strong>{MARKET}%</strong></p>
          <div className="stamp" style={{color:result.color,borderColor:result.color}}>{result.label}</div>
          <div className="bw">
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:".35rem"}}>
              <span style={{fontSize:".82rem",color:"#6b7280"}}>Rate Score</span>
              <span style={{fontSize:".82rem",fontWeight:700,color:result.color}}>{result.score}/10</span>
            </div>
            <div className="bar"><div className="bf" style={{width:result.score*10+"%",background:result.color}} /></div>
          </div>
          {result.diff > 0 && <div className="sav">
            <h3>Potential Annual Savings</h3>
            <p className="amt">${result.lo.toLocaleString()} – ${result.hi.toLocaleString()}</p>
            <p style={{fontSize:".82rem",color:"#6b7280",marginTop:".3rem"}}>By switching to a more competitive rate</p>
          </div>}
          {!done ? <div className="lf">
            <h3>Get a free rate review from a licensed broker</h3>
            <div className="field"><label>Name</label><input placeholder="Your name" value={lead.name} onChange={e=>setLead({...lead,name:e.target.value})} /></div>
            <div className="field"><label>Phone</label><input placeholder="Your phone" value={lead.phone} onChange={e=>setLead({...lead,phone:e.target.value})} /></div>
            <div className="field"><label>Email</label><input placeholder="Your email" value={lead.email} onChange={e=>setLead({...lead,email:e.target.value})} /></div>
            <button className="sub-btn" onClick={submit}>Get My Free Rate Review &#8594;</button>
          </div> : <div style={{background:"#f0fdf4",padding:"1.5rem",borderRadius:".75rem",marginTop:"1.5rem"}}>
            <p style={{color:"#16a34a",fontWeight:700,fontSize:"1.05rem"}}>✓ Thanks! A broker will be in touch shortly.</p>
          </div>}
        </div>
      </div>}

      {page === "how" && <div className="sec">
        <div className="stitle">How It Works</div>
        <p className="ssub">Three steps to your verdict</p>
        <div className="steps">
          <div className="step"><div className="snum">1</div><h3>Enter Your Rate</h3><p>Tell us your current interest rate, loan type and lender.</p></div>
          <div className="step"><div className="snum">2</div><h3>Get Your Verdict</h3><p>We compare against the best rates available right now.</p></div>
          <div className="step"><div className="snum">3</div><h3>Take Action</h3><p>Connect with a broker and start saving on your repayments.</p></div>
        </div>
      </div>}

      {page === "about" && <div className="sec">
        <div className="stitle">About RateMyHomeLoan</div>
        <p style={{color:"#374151",lineHeight:1.8,marginTop:"1rem"}}>RateMyHomeLoan.com.au is an independent rate comparison tool helping Australian homeowners find out if they are paying too much. We compare your rate against live market data across Australia's leading lenders and connect you with a licensed mortgage broker.</p>
      </div>}

      <div className="footer">
        <strong>RateMyHomeLoan.com.au</strong><br />
        <span>General information only. Not financial advice. Always seek independent advice. © 2026</span>
      </div>
    </>
  );
}
