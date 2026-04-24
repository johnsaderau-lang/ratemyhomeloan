import { useState } from "react";

const BRAND = { primary: "#0891b2", dark: "#0f4c5c", light: "#e0f7fa", accent: "#F97316", accentLight: "#fff4ee", accentBorder: "#fcd9c0" };

const BENCHMARKS = {
  "owner-variable": { big4: 6.24, midtier: 6.05, nonbank: 5.89 },
  "owner-fixed":    { big4: 6.44, midtier: 6.28, nonbank: 6.09 },
  "investor-variable": { big4: 6.54, midtier: 6.35, nonbank: 6.19 },
  "investor-fixed":    { big4: 6.74, midtier: 6.55, nonbank: 6.39 },
};

const LENDER_TYPES = {
  "CBA": "big4", "NAB": "big4", "ANZ": "big4", "Westpac": "big4",
  "St George": "big4", "Bank of Melbourne": "big4", "BankSA": "big4",
  "Bankwest": "big4", "Macquarie": "midtier", "ING": "midtier",
  "Suncorp": "midtier", "Adelaide Bank": "midtier", "AMP": "midtier",
  "Bendigo Bank": "midtier", "Bank of Queensland": "midtier",
  "Ubank": "midtier", "Virgin Money": "midtier",
  "Pepper Money": "nonbank", "Liberty": "nonbank", "La Trobe": "nonbank",
  "Resimac": "nonbank", "Firstmac": "nonbank", "Bluestone": "nonbank",
  "Athena": "nonbank", "Reduce Home Loans": "nonbank", "Homestar": "nonbank",
  "Other": "midtier"
};

const LENDERS_DISPLAY = [
  "CBA","NAB","ANZ","Westpac","St George","Macquarie","ING","Suncorp",
  "Bankwest","AMP","Adelaide Bank","Bendigo Bank","Bank of Queensland",
  "Ubank","Pepper Money","Liberty","La Trobe","Resimac","Firstmac","Bluestone","Athena"
];

const WEBHOOK_URL = "https://hook.eu1.make.com/trzjb66urt9ry46clbb6s1mprs8tkin7";
const JUDGE_IMAGE = "/image2.png";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&family=Source+Sans+3:wght@400;500;600&display=swap');
  *{box-sizing:border-box;margin:0;padding:0;}
  body{font-family:'Source Sans 3',sans-serif;background:#fff;color:#1a1a2e;min-height:100vh;}

  .nav{display:flex;align-items:center;justify-content:space-between;padding:0.9rem 2.5rem;background:#fff;border-bottom:1px solid #e8e8e8;position:sticky;top:0;z-index:100;}
  .logo{font-family:'Montserrat',sans-serif;font-weight:900;font-size:1.15rem;color:#0f4c5c;letter-spacing:-0.02em;}
  .logo span{color:#0891b2;}
  .nav-links{display:flex;gap:2rem;list-style:none;}
  .nav-links a{color:#555;text-decoration:none;font-size:0.9rem;font-weight:500;transition:color 0.2s;}
  .nav-links a:hover{color:#0891b2;}
  .nav-cta{background:#F97316;color:#fff;padding:0.5rem 1.25rem;border-radius:0.3rem;font-weight:700;font-size:0.875rem;text-decoration:none;transition:background 0.2s;font-family:'Montserrat',sans-serif;}
  .nav-cta:hover{background:#ea6b0a;}

  .hero{position:relative;min-height:580px;overflow:hidden;display:flex;align-items:center;}
  .hero-left{position:relative;z-index:2;padding:4rem 3.5rem 4rem 5rem;max-width:55%;}
  .hero-tag{display:inline-flex;align-items:center;gap:0.4rem;background:#e0f7fa;border:1px solid #9ee8f5;color:#0891b2;font-size:0.78rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;padding:0.35rem 0.9rem;border-radius:2rem;margin-bottom:1.5rem;width:fit-content;}
  .hero h1{font-family:'Montserrat',sans-serif;font-weight:900;font-size:clamp(2rem,3.2vw,3rem);line-height:1.08;color:#fff;margin-bottom:1.1rem;}
  .hero h1 em{color:#0891b2;font-style:normal;}
  .hero p{font-size:1.05rem;color:rgba(255,255,255,0.8);line-height:1.7;margin-bottom:1.75rem;max-width:440px;}
  .hero-cta{display:inline-flex;align-items:center;gap:0.5rem;background:#F97316;color:#fff;font-family:'Montserrat',sans-serif;font-weight:700;font-size:1rem;padding:0.9rem 2rem;border-radius:0.35rem;border:none;cursor:pointer;transition:all 0.2s;margin-bottom:1.5rem;}
  .hero-cta:hover{background:#ea6b0a;transform:translateY(-1px);}
  .hero-trust{display:flex;gap:1.5rem;flex-wrap:wrap;}
  .trust-item{display:flex;align-items:center;gap:0.4rem;color:rgba(255,255,255,0.7);font-size:0.875rem;}
  .trust-check{color:#22c55e;font-weight:700;}

  .hero-right{position:absolute;inset:0;z-index:1;}
  .judge-img{width:100%;height:100%;object-fit:cover;object-position:center center;display:block;}

  .lenders-bar{background:#fff;border-top:1px solid #e8e8e8;border-bottom:1px solid #e8e8e8;padding:1.2rem 2.5rem;}
  .lenders-inner{max-width:1100px;margin:0 auto;}
  .lenders-label{font-size:0.72rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#0891b2;margin-bottom:0.75rem;text-align:center;}
  .lenders-grid{display:grid;grid-template-columns:repeat(auto-fill, minmax(110px, 1fr));gap:0.5rem;}
  .lender-pill{background:#fff;border:1px solid #e0e8ea;border-radius:0.4rem;padding:0.5rem 1rem;box-shadow:0 1px 4px rgba(0,0,0,0.06);height:52px;display:flex;align-items:center;justify-content:center;}
  .lender-logo{height:28px;width:auto;object-fit:contain;}

  .calc-section{padding:4.5rem 2.5rem;background:#fff;}
  .calc-inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 1.1fr;gap:4rem;align-items:start;}
  .section-tag{font-size:0.72rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#F97316;margin-bottom:0.6rem;}
  .section-h2{font-family:'Montserrat',sans-serif;font-weight:900;font-size:clamp(1.6rem,2.8vw,2.2rem);color:#1a1a2e;line-height:1.1;margin-bottom:1rem;}
  .calc-info p{color:#555;line-height:1.75;font-size:1rem;margin-bottom:1.25rem;}
  .info-list{list-style:none;}
  .info-list li{display:flex;align-items:flex-start;gap:0.6rem;margin-bottom:0.75rem;font-size:0.95rem;color:#444;line-height:1.5;}
  .info-bullet{width:20px;height:20px;background:#e0f7fa;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:0.1rem;}
  .info-bullet span{color:#0891b2;font-size:0.65rem;font-weight:700;}

  .calc-card{background:#fff;border:1px solid #dde8ea;border-radius:0.75rem;padding:2rem;box-shadow:0 4px 20px rgba(8,145,178,0.08);}
  .calc-card-title{font-family:'Montserrat',sans-serif;font-weight:700;font-size:1rem;color:#0f4c5c;margin-bottom:1.25rem;padding-bottom:0.75rem;border-bottom:2px solid #F97316;}
  .form-group{margin-bottom:1.1rem;}
  .form-label{display:block;font-size:0.78rem;font-weight:700;color:#444;margin-bottom:0.4rem;text-transform:uppercase;letter-spacing:0.05em;}
  .form-input,.form-select{width:100%;padding:0.7rem 0.9rem;border:1px solid #ccd5d8;border-radius:0.4rem;font-size:0.95rem;font-family:'Source Sans 3',sans-serif;color:#1a1a2e;background:#fff;transition:border-color 0.2s;appearance:none;}
  .form-input:focus,.form-select:focus{outline:none;border-color:#0891b2;box-shadow:0 0 0 3px rgba(8,145,178,0.1);}
  .toggle-group{display:flex;border:1px solid #ccd5d8;border-radius:0.4rem;overflow:hidden;}
  .toggle-btn{flex:1;padding:0.65rem;background:#fff;border:none;font-family:'Source Sans 3',sans-serif;font-size:0.875rem;font-weight:500;color:#777;cursor:pointer;transition:all 0.2s;}
  .toggle-btn.active{background:#0891b2;color:#fff;font-weight:700;}
  .submit-btn{width:100%;padding:0.9rem;background:#F97316;color:#fff;border:none;border-radius:0.4rem;font-family:'Montserrat',sans-serif;font-size:1rem;font-weight:700;cursor:pointer;transition:all 0.2s;margin-top:0.5rem;letter-spacing:0.01em;}
  .submit-btn:hover{background:#ea6b0a;}
  .submit-btn:disabled{opacity:0.5;cursor:not-allowed;}

  .result-section{background:#f8feff;padding:4rem 2.5rem;border-top:1px solid #e0f0f5;}
  .result-inner{max-width:760px;margin:0 auto;}
  .verdict-card{border-radius:0.75rem;padding:2rem;margin-bottom:1.25rem;text-align:center;}
  .verdict-card.guilty{background:#fff5f5;border:2px solid #E24B4A;}
  .verdict-card.caution{background:#fffbf0;border:2px solid #EF9F27;}
  .verdict-card.acquitted{background:#f0fff8;border:2px solid #16a34a;}
  .verdict-tag{font-size:0.72rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:0.5rem;}
  .verdict-tag.guilty{color:#E24B4A;}
  .verdict-tag.caution{color:#EF9F27;}
  .verdict-tag.acquitted{color:#16a34a;}
  .verdict-score{font-family:'Montserrat',sans-serif;font-weight:900;font-size:4rem;line-height:1;}
  .verdict-score.guilty{color:#E24B4A;}
  .verdict-score.caution{color:#EF9F27;}
  .verdict-score.acquitted{color:#16a34a;}
  .verdict-score small{font-size:1.8rem;color:#bbb;}
  .verdict-stamp{display:inline-block;border:3px solid;border-radius:0.4rem;padding:0.3rem 1.1rem;font-family:'Montserrat',sans-serif;font-weight:900;font-size:1.3rem;letter-spacing:0.1em;transform:rotate(-2deg);margin:0.75rem 0;text-transform:uppercase;}
  .verdict-stamp.guilty{color:#E24B4A;border-color:#E24B4A;}
  .verdict-stamp.caution{color:#EF9F27;border-color:#EF9F27;}
  .verdict-stamp.acquitted{color:#16a34a;border-color:#16a34a;}
  .verdict-desc{color:#555;font-size:0.95rem;line-height:1.6;margin-top:0.5rem;}

  .evidence-grid{display:grid;grid-template-columns:1fr 1fr;gap:0.875rem;margin:1.25rem 0;}
  .ev-card{background:#fff;border:1px solid #dde8ea;border-radius:0.5rem;padding:0.9rem 1.1rem;}
  .ev-label{font-size:0.7rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#999;margin-bottom:0.3rem;}
  .ev-value{font-family:'Montserrat',sans-serif;font-weight:700;font-size:1.2rem;color:#1a1a2e;}
  .ev-value.bad{color:#E24B4A;}
  .ev-value.good{color:#16a34a;}

  .savings-card{background:#fff4ee;border:2px solid #F97316;border-radius:0.75rem;padding:1.5rem;text-align:center;margin:1.1rem 0;}
  .savings-label{font-size:0.78rem;font-weight:600;color:#888;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:0.4rem;}
  .savings-amount{font-family:'Montserrat',sans-serif;font-weight:900;font-size:2rem;color:#F97316;}
  .savings-sub{font-size:0.75rem;color:#aaa;margin-top:0.3rem;}

  .lead-card{background:#fff;border:1px solid #dde8ea;border-radius:0.75rem;padding:1.5rem;margin-top:1.1rem;}
  .lead-card h4{font-family:'Montserrat',sans-serif;font-weight:700;font-size:1rem;color:#0f4c5c;margin-bottom:0.4rem;}
  .lead-card p{font-size:0.9rem;color:#666;margin-bottom:1rem;line-height:1.6;}
  .lead-row{display:grid;grid-template-columns:1fr 1fr;gap:0.65rem;margin-bottom:0.65rem;}
  .lead-input{padding:0.65rem 0.85rem;border:1px solid #ccd5d8;border-radius:0.4rem;font-size:0.9rem;font-family:'Source Sans 3',sans-serif;color:#1a1a2e;width:100%;}
  .lead-input:focus{outline:none;border-color:#0891b2;}
  .retry-btn{width:100%;margin-top:0.65rem;padding:0.65rem;background:#fff;border:1px solid #ccd5d8;border-radius:0.4rem;color:#777;font-family:'Source Sans 3',sans-serif;font-size:0.875rem;cursor:pointer;transition:all 0.2s;}
  .retry-btn:hover{border-color:#0891b2;color:#0891b2;}

  .success-box{text-align:center;padding:1.5rem 0;}
  .success-box h4{font-family:'Montserrat',sans-serif;font-weight:700;font-size:1.2rem;color:#16a34a;margin:0.5rem 0;}
  .success-box p{color:#666;font-size:0.95rem;line-height:1.6;}

  .how-section{background:#fff;padding:4rem 2.5rem;border-top:1px solid #eee;}
  .how-inner{max-width:1100px;margin:0 auto;}
  .steps{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:2.5rem;}
  .step{padding:1.5rem;border:1px solid #dde8ea;border-radius:0.75rem;}
  .step-num{font-family:'Montserrat',sans-serif;font-weight:900;font-size:2.5rem;color:#e0f7fa;line-height:1;margin-bottom:0.75rem;}
  .step h3{font-family:'Montserrat',sans-serif;font-weight:700;font-size:1rem;color:#0f4c5c;margin-bottom:0.4rem;}
  .step p{font-size:0.875rem;color:#666;line-height:1.6;}

  .about-section{padding:4rem 2.5rem;background:#f0fbfc;border-top:1px solid #cceef5;}
  .about-inner{max-width:680px;margin:0 auto;}
  .about-inner p{color:#555;line-height:1.8;margin-bottom:1rem;}
  .disclaimer{background:#fff;border:1px solid #dde8ea;border-radius:0.5rem;padding:1rem 1.2rem;font-size:0.775rem;color:#aaa;line-height:1.6;margin-top:1.5rem;}

  .footer{background:#0f4c5c;padding:2rem 2.5rem;text-align:center;color:rgba(255,255,255,0.55);font-size:0.85rem;}
  .footer a{color:rgba(255,255,255,0.7);text-decoration:none;}
  .footer a:hover{color:#fff;}

  @media(max-width:768px){
    .hero-left{padding:2.5rem 1.5rem;}
    .calc-inner{grid-template-columns:1fr;}
    .steps{grid-template-columns:1fr;}
    .evidence-grid{grid-template-columns:1fr;}
    .lead-row{grid-template-columns:1fr;}
    .nav-links,.nav-cta{display:none;}
  }
`;

export default function RateMyHomeLoan() {
  const [page, setPage] = useState("home");
  const [loanType, setLoanType] = useState("owner");
  const [rateType, setRateType] = useState("variable");
  const [rate, setRate] = useState("");
  const [amount, setAmount] = useState("");
  const [lender, setLender] = useState("CBA");
  const [result, setResult] = useState(null);
  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function scrollToCalc() {
    document.getElementById("calc-section")?.scrollIntoView({ behavior: "smooth" });
  }

  function calculate() {
    const userRate = parseFloat(rate);
    const loanAmount = parseFloat(String(amount).replace(/,/g, ""));
    if (!userRate || !loanAmount) return;
    const lenderType = LENDER_TYPES[lender] || "midtier";
    const key = `${loanType}-${rateType}`;
    const benchmark = BENCHMARKS[key][lenderType];
    const diff = userRate - benchmark;
    const rawScore = Math.max(1, Math.min(10, 10 - diff * 5));
    const score = Math.round(rawScore * 10) / 10;
    const pmt = (r, bal) => { const mr = r / 100 / 12; const n = 300; return (bal * mr * Math.pow(1 + mr, n)) / (Math.pow(1 + mr, n) - 1); };
    const annualSaving = (pmt(userRate, loanAmount) - pmt(benchmark, loanAmount)) * 12;
    const savingLow = Math.max(0, Math.round(annualSaving * 0.7));
    const savingHigh = Math.max(0, Math.round(annualSaving * 1.3));
    let verdict = score <= 4 ? "guilty" : score <= 6.5 ? "caution" : "acquitted";
    const descriptions = {
      guilty: `Your rate of ${userRate}% is well above the market average of ${benchmark}% for a ${loanType === "owner" ? "owner-occupier" : "investor"} ${rateType} loan. Your lender has been overcharging you.`,
      caution: `Your rate of ${userRate}% is slightly above the market benchmark of ${benchmark}%. You may be leaving money on the table.`,
      acquitted: `Your rate of ${userRate}% is competitive against the market benchmark of ${benchmark}%. Your lender appears to be treating you fairly.`,
    };
    setResult({ score, verdict, description: descriptions[verdict], benchmark, userRate, loanAmount, savingLow, savingHigh, diff: Math.abs(diff).toFixed(2) });
    setPage("result");
  }

  async function submitLead() {
    if (!leadName || !leadPhone || !leadEmail) return;
    setLoading(true);
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          timestamp: new Date().toISOString(), type: "ratemyhomeloan",
          consumer: { name: leadName, phone: leadPhone, email: leadEmail, message: "" },
          calcType: "rate-check",
          calcResults: { score: result?.score, verdict: result?.verdict, userRate: result?.userRate, benchmark: result?.benchmark, savingLow: result?.savingLow, savingHigh: result?.savingHigh, loanAmount: result?.loanAmount },
          purpose: loanType === "owner" ? "Owner occupier" : "Investment", lender, rateType,
        }),
      });
    } catch (e) {}
    setLoading(false);
    setSubmitted(true);
  }

  const verdictLabels = { guilty: "GUILTY", caution: "UNDER REVIEW", acquitted: "ACQUITTED" };

  return (
    <>
      <style>{css}</style>

      <nav className="nav">
        <div className="logo">RateMy<span>HomeLoan</span>.com.au</div>
        <ul className="nav-links">
          <li><a href="#" onClick={e => { e.preventDefault(); setPage("home"); }}>Check My Rate</a></li>
          <li><a href="#" onClick={e => { e.preventDefault(); setPage("how"); }}>How It Works</a></li>
          <li><a href="#" onClick={e => { e.preventDefault(); setPage("about"); }}>About</a></li>
        </ul>
        <a href="#" className="nav-cta" onClick={e => { e.preventDefault(); setPage("home"); setTimeout(scrollToCalc, 100); }}>Check My Rate →</a>
      </nav>

      {page === "home" && (
        <>
          <section className="hero">

            <div className="hero-overlay" style={{position:"absolute",inset:0,zIndex:1,background:"linear-gradient(to right, rgba(15,76,92,0.88) 0%, rgba(15,76,92,0.7) 45%, rgba(15,76,92,0.1) 75%, transparent 100%)"}} />
            <div className="hero-left">
              <h1>Is your home loan <em>guilty</em> of overcharging you?</h1>
              <p>Put your rate on trial. We compare it against real market benchmarks across 20+ lenders and deliver an honest verdict — no signup, no obligation.</p>
              <button className="hero-cta" onClick={scrollToCalc}>Start the trial →</button>
              <div className="hero-trust">
                <span className="trust-item"><span className="trust-check">✓</span> 100% free</span>
                <span className="trust-item"><span className="trust-check">✓</span> No obligation</span>
                <span className="trust-item"><span className="trust-check">✓</span> Updated monthly</span>
              </div>
            </div>
            <div className="hero-right">
              <img src={JUDGE_IMAGE} alt="Judge ready to deliver your rate verdict" className="judge-img" />
            </div>
          </section>

          <div className="lenders-bar">
            <div className="lenders-inner">
              <div className="lenders-label">Comparing rates across Australia's leading lenders</div>
              <div className="lenders-grid">
                
                <div className="lender-pill" key="CBA"><img src="/cba.svg" alt="CBA" className="lender-logo" /></div>
                <div className="lender-pill" key="NAB"><img src="/nab.svg" alt="NAB" className="lender-logo" /></div>
                <div className="lender-pill" key="ANZ"><img src="/anz.svg" alt="ANZ" className="lender-logo" /></div>
                <div className="lender-pill" key="Westpac"><img src="/westpac.svg" alt="Westpac" className="lender-logo" /></div>
                <div className="lender-pill" key="St George"><img src="/stgeorge.svg" alt="St George" className="lender-logo" /></div>
                <div className="lender-pill" key="Macquarie"><img src="/macquarie.svg" alt="Macquarie" className="lender-logo" /></div>
                <div className="lender-pill" key="ING"><img src="/ing.svg" alt="ING" className="lender-logo" /></div>
                <div className="lender-pill" key="Suncorp"><img src="/suncorp.svg" alt="Suncorp" className="lender-logo" /></div>
                <div className="lender-pill" key="Bankwest"><img src="/bankwest.svg" alt="Bankwest" className="lender-logo" /></div>
                <div className="lender-pill" key="AMP"><img src="/amp.svg" alt="AMP" className="lender-logo" /></div>
                <div className="lender-pill" key="Pepper Money"><img src="/pepper.svg" alt="Pepper Money" className="lender-logo" /></div>
                <div className="lender-pill" key="Liberty"><img src="/liberty.svg" alt="Liberty" className="lender-logo" /></div>
                <div className="lender-pill" key="La Trobe"><img src="/latrobe.svg" alt="La Trobe" className="lender-logo" /></div>
                <div className="lender-pill" key="Resimac"><img src="/resimac.svg" alt="Resimac" className="lender-logo" /></div>
                <div className="lender-pill" key="Firstmac"><img src="/firstmac.svg" alt="Firstmac" className="lender-logo" /></div>
                <div className="lender-pill" key="Athena"><img src="/athena.svg" alt="Athena" className="lender-logo" /></div>
                <div className="lender-pill" key="Ubank"><img src="/ubank.svg" alt="Ubank" className="lender-logo" /></div>
              
              </div>
            </div>
          </div>

          <section className="calc-section" id="calc-section">
            <div className="calc-inner">
              <div className="calc-info">
                <div className="section-tag">The Trial</div>
                <h2 className="section-h2">Find out if your lender is overcharging you</h2>
                <p>Australian banks have been profiting from customer inertia for years. Most homeowners have no idea whether their rate is competitive — and lenders count on that.</p>
                <ul className="info-list">
                  {["Enter your current rate and we'll compare it to the market benchmark for your exact loan type","Get a verdict — Guilty, Under Review, or Acquitted — with a score out of 10","See how much you could save annually by switching to a better rate"].map((t, i) => (
                    <li key={i}><span className="info-bullet"><span>✓</span></span>{t}</li>
                  ))}
                </ul>
              </div>
              <div className="calc-card">
                <div className="calc-card-title">⚖️ Submit your evidence</div>
                <div className="form-group">
                  <label className="form-label">Loan Purpose</label>
                  <div className="toggle-group">
                    <button className={`toggle-btn ${loanType === "owner" ? "active" : ""}`} onClick={() => setLoanType("owner")}>Owner Occupier</button>
                    <button className={`toggle-btn ${loanType === "investor" ? "active" : ""}`} onClick={() => setLoanType("investor")}>Investment</button>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Rate Type</label>
                  <div className="toggle-group">
                    <button className={`toggle-btn ${rateType === "variable" ? "active" : ""}`} onClick={() => setRateType("variable")}>Variable</button>
                    <button className={`toggle-btn ${rateType === "fixed" ? "active" : ""}`} onClick={() => setRateType("fixed")}>Fixed</button>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Your Current Interest Rate (%)</label>
                  <input className="form-input" type="number" placeholder="e.g. 6.25" value={rate} onChange={e => setRate(e.target.value)} step="0.01" min="1" max="15" />
                </div>
                <div className="form-group">
                  <label className="form-label">Loan Amount ($)</label>
                  <input className="form-input" type="number" placeholder="e.g. 500000" value={amount} onChange={e => setAmount(e.target.value)} min="50000" />
                </div>
                <div className="form-group">
                  <label className="form-label">Your Lender</label>
                  <select className="form-select" value={lender} onChange={e => setLender(e.target.value)}>
                    {Object.keys(LENDER_TYPES).map(l => <option key={l}>{l}</option>)}
                  </select>
                </div>
                <button className="submit-btn" onClick={calculate} disabled={!rate || !amount}>Deliver the verdict →</button>
              </div>
            </div>
          </section>
        </>
      )}

      {page === "result" && result && (
        <section className="result-section">
          <div className="result-inner">
            <div className="section-tag">The Verdict</div>
            <h2 className="section-h2" style={{ marginBottom: "1.5rem" }}>The court has ruled</h2>
            <div className={`verdict-card ${result.verdict}`}>
              <div className={`verdict-tag ${result.verdict}`}>Rate Verdict</div>
              <div className={`verdict-score ${result.verdict}`}>{result.score.toFixed(1)}<small>/10</small></div>
              <div className={`verdict-stamp ${result.verdict}`}>{verdictLabels[result.verdict]}</div>
              <p className="verdict-desc">{result.description}</p>
            </div>
            <div className="evidence-grid">
              <div className="ev-card"><div className="ev-label">Your Rate</div><div className={`ev-value ${result.verdict === "acquitted" ? "good" : "bad"}`}>{result.userRate}%</div></div>
              <div className="ev-card"><div className="ev-label">Market Benchmark</div><div className="ev-value">{result.benchmark}%</div></div>
              <div className="ev-card"><div className="ev-label">Difference</div><div className={`ev-value ${result.verdict === "acquitted" ? "good" : "bad"}`}>{result.verdict === "acquitted" ? "-" : "+"}{result.diff}%</div></div>
              <div className="ev-card"><div className="ev-label">Loan Amount</div><div className="ev-value">${Number(result.loanAmount).toLocaleString()}</div></div>
            </div>
            {result.verdict !== "acquitted" && result.savingHigh > 0 && (
              <div className="savings-card">
                <div className="savings-label">Potential annual savings by switching</div>
                <div className="savings-amount">${result.savingLow.toLocaleString()} – ${result.savingHigh.toLocaleString()}</div>
                <div className="savings-sub">Based on a 25-year loan term at market benchmark rate</div>
              </div>
            )}
            <div className="lead-card">
              {!submitted ? (
                <>
                  <h4>{result.verdict === "acquitted" ? "Want us to monitor your rate?" : "Want help reducing your rate?"}</h4>
                  <p>{result.verdict === "acquitted" ? "We'll alert you if the market moves against you. Leave your details and we'll keep an eye on it." : "Our team can review your situation and discuss your options — no obligation, no cost."}</p>
                  <div className="lead-row">
                    <input className="lead-input" placeholder="Your name" value={leadName} onChange={e => setLeadName(e.target.value)} />
                    <input className="lead-input" placeholder="Phone number" value={leadPhone} onChange={e => setLeadPhone(e.target.value)} />
                  </div>
                  <input className="lead-input" placeholder="Email address" value={leadEmail} onChange={e => setLeadEmail(e.target.value)} style={{ width: "100%", marginBottom: "0.65rem" }} />
                  <button className="submit-btn" onClick={submitLead} disabled={!leadName || !leadPhone || !leadEmail || loading}>{loading ? "Submitting..." : "Get help with my rate →"}</button>
                  <button className="retry-btn" onClick={() => { setPage("home"); setResult(null); setRate(""); setAmount(""); }}>Check another rate</button>
                </>
              ) : (
                <div className="success-box">
                  <div style={{ fontSize: "2.5rem" }}>✅</div>
                  <h4>Case filed successfully</h4>
                  <p>Our team will be in touch shortly to discuss your options.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {page === "how" && (
        <div className="how-section">
          <div className="how-inner">
            <div className="section-tag">The Process</div>
            <h2 className="section-h2">How the trial works</h2>
            <div className="steps">
              {[
                { n: "01", title: "Submit the evidence", desc: "Enter your current rate, loan amount, lender, and loan type. Takes less than 60 seconds." },
                { n: "02", title: "We examine the facts", desc: "We compare your rate against current market benchmarks updated monthly from RBA data and lender comparisons." },
                { n: "03", title: "The verdict is delivered", desc: "Guilty, Under Review, or Acquitted — with a score out of 10 and your potential annual savings." },
              ].map(s => (
                <div key={s.n} className="step">
                  <div className="step-num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {page === "about" && (
        <div className="about-section">
          <div className="about-inner">
            <div className="section-tag">About</div>
            <h2 className="section-h2" style={{ marginBottom: "1.25rem" }}>Why we built this</h2>
            <p>Australian lenders have been profiting from customer inertia for years. Most homeowners have no idea whether their rate is competitive — and banks count on that.</p>
            <p>Rate My Home Loan was built to change that. We compare your rate against current market benchmarks and give you a straight verdict — no affiliate games, no paid rankings.</p>
            <p>If your rate is guilty, we can help you fight back.</p>
            <div className="disclaimer">Benchmarks are updated monthly based on RBA lender rate statistics and publicly available comparison data. Results are indicative only and do not constitute financial advice. Rate My Home Loan is independently operated and not affiliated with any bank or lender. Always consult a licensed mortgage broker before making financial decisions. © 2026 RateMyHomeLoan.com.au</div>
          </div>
        </div>
      )}

      <footer className="footer">
        <p>© 2026 RateMyHomeLoan.com.au &nbsp;·&nbsp; <a href="#" onClick={e => { e.preventDefault(); setPage("how"); }}>How It Works</a> &nbsp;·&nbsp; <a href="#" onClick={e => { e.preventDefault(); setPage("about"); }}>About</a></p>
        <p style={{ marginTop: "0.5rem" }}>Benchmarks updated monthly. General information only — not financial advice.</p>
      </footer>
    </>
  );
}
