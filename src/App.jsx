import { useState } from "react";

var JUDGE = "/judge 3.png";
var MARKET = 6.19;

var LENDERS = [
  {name:"CommBank",src:"/cba.png"},
  {name:"NAB",src:"/nab"},
  {name:"ANZ",src:"/anz.png"},
  {name:"Westpac",src:"/wbc.png"},
  {name:"St George",src:"/STG.jpg"},
  {name:"Macquarie",src:"/macquarie.svg"},
  {name:"ING",src:"/ING.png"},
  {name:"Suncorp",src:"/suncorp.png"},
  {name:"Bankwest",src:"/bankwest.png"},
  {name:"AMP",src:"/amp.svg"},
  {name:"Pepper Money",src:"/pepper.png"},
  {name:"Liberty",src:"/liberty.png"},
  {name:"La Trobe",src:"/latrobe.png"},
  {name:"Resimac",src:"/resimac.svg"},
  {name:"Firstmac",src:"/firstmac.svg"},
  {name:"Athena",src:"/athena.svg"},
  {name:"Ubank",src:"/ubank.svg"},
];

var CSS = "*{box-sizing:border-box;margin:0;padding:0}" +
  "body{font-family:Inter,Arial,sans-serif;color:#1a1a2e}" +
  ".nav{background:#fff;border-bottom:1px solid #e5e7eb;padding:1rem 2rem;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100}" +
  ".logo{font-size:1.2rem;font-weight:800;color:#0f4c5c}" +
  ".logo span{color:#f97316}" +
  ".nl{display:flex;gap:2rem}" +
  ".nl a{text-decoration:none;color:#4b5563;font-size:.9rem;font-weight:500;cursor:pointer}" +
  ".nl a:hover{color:#0f4c5c}" +
  ".ncta{background:#f97316;color:#fff;border:none;padding:.6rem 1.4rem;border-radius:.4rem;font-weight:700;cursor:pointer;font-size:.9rem}" +
  ".hero{position:relative;min-height:600px;overflow:hidden;display:flex;align-items:stretch;background:#f8fafc}" +
  ".hi{position:absolute;inset:0;z-index:1}" +
  ".hi img{width:100%;height:100%;object-fit:cover;object-position:right center}" +
  ".hf{position:absolute;inset:0;z-index:2;background:linear-gradient(to right,rgba(248,250,252,1) 0%,rgba(248,250,252,.98) 42%,rgba(248,250,252,.7) 62%,transparent 100%)}" +
  ".hb{position:relative;z-index:3;width:50%;padding:5rem 3rem 5rem 5rem;display:flex;flex-direction:column;justify-content:center}" +
  ".hb h1{font-size:2.8rem;font-weight:900;line-height:1.1;color:#0f4c5c;margin-bottom:1.2rem}" +
  ".hb h1 em{color:#f97316;font-style:normal}" +
  ".hb p{font-size:1.05rem;color:#374151;margin-bottom:2rem;line-height:1.65}" +
  ".btn{background:#f97316;color:#fff;border:none;padding:1rem 2.5rem;border-radius:.5rem;font-size:1.05rem;font-weight:700;cursor:pointer;display:inline-flex;align-items:center;gap:.4rem}" +
  ".btn:hover{background:#ea6c00}" +
  ".trust{display:flex;gap:1.5rem;margin-top:1.5rem;flex-wrap:wrap}" +
  ".trust span{font-size:.85rem;color:#374151;font-weight:500}" +
  ".tw{background:#fff;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;padding:.9rem 0;overflow:hidden}" +
  ".tl{text-align:center;font-size:.65rem;font-weight:700;color:#9ca3af;letter-spacing:.12em;text-transform:uppercase;margin-bottom:.7rem}" +
  ".ticker{display:flex;gap:2.5rem;animation:scroll 30s linear infinite;width:max-content}" +
  ".ticker:hover{animation-play-state:paused}" +
  "@keyframes scroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}" +
  ".lc{display:flex;align-items:center;justify-content:center;height:44px;min-width:100px;padding:0 1rem}" +
  ".lc img{height:30px;width:auto;max-width:110px;object-fit:contain}" +
  ".sec{padding:5rem 2rem;max-width:860px;margin:0 auto}" +
  ".st{font-size:1.9rem;font-weight:800;color:#0f4c5c;margin-bottom:.5rem}" +
  ".ss{color:#6b7280;margin-bottom:2.5rem;font-size:1rem}" +
  ".card{background:#fff;border-radius:1rem;box-shadow:0 4px 24px rgba(0,0,0,.08);padding:2.5rem;max-width:580px;margin:0 auto}" +
  ".fi{margin-bottom:1.4rem}" +
  ".fi label{display:block;font-weight:600;color:#374151;margin-bottom:.45rem;font-size:.92rem}" +
  ".fi select,.fi input{width:100%;padding:.72rem 1rem;border:1.5px solid #d1d5db;border-radius:.5rem;font-size:1rem;color:#1a1a2e;outline:none}" +
  ".fi select:focus,.fi input:focus{border-color:#0f4c5c}" +
  ".sb{width:100%;background:#f97316;color:#fff;border:none;padding:1rem;border-radius:.5rem;font-size:1.05rem;font-weight:700;cursor:pointer;margin-top:.4rem}" +
  ".sb:hover{background:#ea6c00}" +
  ".stamp{font-size:2.2rem;font-weight:900;letter-spacing:.15em;padding:.7rem 1.8rem;border:4px solid;border-radius:.5rem;display:inline-block;margin:1rem 0;text-transform:uppercase}" +
  ".bw{margin:1.4rem 0}" +
  ".bar{height:11px;background:#e5e7eb;border-radius:6px;overflow:hidden}" +
  ".bf{height:100%;border-radius:6px;transition:width 1s}" +
  ".sav{background:#f0fdf4;border:1px solid #bbf7d0;border-radius:.75rem;padding:1.4rem;margin:1.4rem 0;text-align:center}" +
  ".sav h3{color:#16a34a;font-size:1.05rem;font-weight:700;margin-bottom:.3rem}" +
  ".amt{font-size:1.5rem;font-weight:800;color:#0f4c5c}" +
  ".lf{text-align:left;margin-top:2rem}" +
  ".lf h3{font-size:1.05rem;font-weight:700;color:#0f4c5c;margin-bottom:1rem}" +
  ".steps{display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;margin-top:2rem}" +
  ".step{text-align:center}" +
  ".sn{width:46px;height:46px;background:#0f4c5c;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.15rem;font-weight:800;margin:0 auto 1rem}" +
  ".step h3{font-weight:700;color:#0f4c5c;margin-bottom:.35rem}" +
  ".step p{color:#6b7280;font-size:.88rem}" +
  ".ft{background:#0f4c5c;color:rgba(255,255,255,.7);padding:2rem;text-align:center;font-size:.82rem}" +
  ".ft strong{color:#fff}" +
  "@media(max-width:768px){" +
  ".hero{flex-direction:column;min-height:auto}" +
  ".hi{position:relative;height:260px}" +
  ".hi img{object-position:center 15%}" +
  ".hf{background:linear-gradient(to bottom,transparent 30%,rgba(248,250,252,.95) 70%,rgba(248,250,252,1) 100%)}" +
  ".hb{width:100%;padding:1.5rem 1.2rem 2.5rem}" +
  ".hb h1{font-size:1.9rem}" +
  ".nl{display:none}" +
  ".trust{gap:.8rem}" +
  ".steps{grid-template-columns:1fr}" +
  ".card{padding:1.5rem}" +
  "}";

function vd(r){
  if(r>MARKET+0.5) return {label:"GUILTY",color:"#dc2626",score:Math.max(1,Math.round(10-(r-MARKET)*4))};
  if(r>MARKET+0.1) return {label:"UNDER REVIEW",color:"#d97706",score:Math.round(10-(r-MARKET)*3)};
  return {label:"ACQUITTED",color:"#16a34a",score:Math.min(10,Math.round(10-(r-MARKET)*2))};
}

export default function App(){
  var _s=useState("home"),page=_s[0],setPage=_s[1];
  var _f=useState({type:"owner",rateType:"variable",rate:"",amount:"",lender:"CommBank"}),form=_f[0],setForm=_f[1];
  var _l=useState({name:"",phone:"",email:""}),lead=_l[0],setLead=_l[1];
  var _r=useState(null),result=_r[0],setResult=_r[1];
  var _d=useState(false),done=_d[0],setDone=_d[1];

  function go(p){setPage(p);window.scrollTo(0,0);}

  function check(){
    var r=parseFloat(form.rate);
    if(!r||!form.amount) return;
    var v=vd(r), diff=r-MARKET;
    setResult(Object.assign({},v,{r:r,diff:diff.toFixed(2),lo:Math.max(0,Math.round(diff*0.8*parseFloat(form.amount)/100)),hi:Math.max(0,Math.round(diff*parseFloat(form.amount)/100))}));
    go("result");
  }

  function submit(){
    if(!lead.name||!lead.phone||!lead.email) return;
    fetch("https://hook.eu1.make.com/your-webhook-url",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object.assign({source:"ratemyhomeloan"},lead,form,{verdict:result&&result.label}))}).catch(function(){});
    setDone(true);
  }

  var doubled=LENDERS.concat(LENDERS);

  return React.createElement(React.Fragment,null,
    React.createElement("style",{dangerouslySetInnerHTML:{__html:CSS}}),
    React.createElement("nav",{className:"nav"},
      React.createElement("div",{className:"logo"},"RateMy",React.createElement("span",null,"Home"),"Loan.com.au"),
      React.createElement("div",{className:"nl"},
        React.createElement("a",{onClick:function(){go("home")}},"Home"),
        React.createElement("a",{onClick:function(){go("how")}},"How It Works"),
        React.createElement("a",{onClick:function(){go("about")}},"About")),
      React.createElement("button",{className:"ncta",onClick:function(){go("quiz")}},"Check My Rate")),

    page==="home" && React.createElement(React.Fragment,null,
      React.createElement("div",{className:"hero"},
        React.createElement("div",{className:"hi"},React.createElement("img",{src:JUDGE,alt:"Judge"})),
        React.createElement("div",{className:"hf"}),
        React.createElement("div",{className:"hb"},
          React.createElement("h1",null,"Is your home loan ",React.createElement("em",null,"guilty")," of overcharging you?"),
          React.createElement("p",null,"Compare your rate against Australia's leading lenders and get an honest verdict — no signup, no obligation."),
          React.createElement("button",{className:"btn",onClick:function(){go("quiz")}},"Start the trial →"),
          React.createElement("div",{className:"trust"},
            React.createElement("span",null,"✓ 100% free"),
            React.createElement("span",null,"✓ No obligation"),
            React.createElement("span",null,"✓ Updated monthly")))),
      React.createElement("div",{className:"tw"},
        React.createElement("div",{className:"tl"},"Comparing rates across Australia's leading lenders"),
        React.createElement("div",{className:"ticker"},
          doubled.map(function(l,i){
            return React.createElement("div",{key:i,className:"lc"},
              React.createElement("img",{src:l.src,alt:l.name,onError:function(e){e.target.style.display="none";e.target.nextSibling.style.display="block";}}),
              React.createElement("span",{style:{display:"none",fontWeight:700,fontSize:".7rem",color:"#0f4c5c"}},l.name));}))),
      React.createElement("div",{className:"sec",style:{textAlign:"center"}},
        React.createElement("div",{className:"st"},"Find out if your lender is overcharging you"),
        React.createElement("p",{className:"ss"},"Enter your current rate and get a verdict in under 60 seconds"),
        React.createElement("button",{className:"btn",onClick:function(){go("quiz")}},"Get My Verdict →"))),

    page==="quiz" && React.createElement("div",{className:"sec"},
      React.createElement("div",{className:"st"},"THE TRIAL"),
      React.createElement("p",{className:"ss"},"Enter your loan details to receive your verdict"),
      React.createElement("div",{className:"card"},
        React.createElement("div",{className:"fi"},React.createElement("label",null,"Loan Purpose"),React.createElement("select",{value:form.type,onChange:function(e){setForm(Object.assign({},form,{type:e.target.value}));}},React.createElement("option",{value:"owner"},"Owner Occupied"),React.createElement("option",{value:"investment"},"Investment"))),
        React.createElement("div",{className:"fi"},React.createElement("label",null,"Rate Type"),React.createElement("select",{value:form.rateType,onChange:function(e){setForm(Object.assign({},form,{rateType:e.target.value}));}},React.createElement("option",{value:"variable"},"Variable"),React.createElement("option",{value:"fixed"},"Fixed"))),
        React.createElement("div",{className:"fi"},React.createElement("label",null,"Your Current Interest Rate (%)"),React.createElement("input",{type:"number",step:"0.01",min:"1",max:"15",placeholder:"e.g. 6.45",value:form.rate,onChange:function(e){setForm(Object.assign({},form,{rate:e.target.value}));}})),
        React.createElement("div",{className:"fi"},React.createElement("label",null,"Loan Amount ($)"),React.createElement("input",{type:"number",step:"10000",min:"50000",placeholder:"e.g. 600000",value:form.amount,onChange:function(e){setForm(Object.assign({},form,{amount:e.target.value}));}})),
        React.createElement("div",{className:"fi"},React.createElement("label",null,"Current Lender"),React.createElement("select",{value:form.lender,onChange:function(e){setForm(Object.assign({},form,{lender:e.target.value}));}},LENDERS.map(function(l){return React.createElement("option",{key:l.name},l.name);}))),
        React.createElement("button",{className:"sb",onClick:check},"Deliver the Verdict →"))),

    page==="result" && result && React.createElement("div",{className:"sec"},
      React.createElement("div",{className:"st"},"THE VERDICT"),
      React.createElement("div",{className:"card",style:{textAlign:"center"}},
        React.createElement("p",{style:{color:"#6b7280"}},"Your rate ",React.createElement("strong",null,result.r,"%")," vs market average ",React.createElement("strong",null,MARKET,"%")),
        React.createElement("div",{className:"stamp",style:{color:result.color,borderColor:result.color}},result.label),
        React.createElement("div",{className:"bw"},
          React.createElement("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:".35rem"}},
            React.createElement("span",{style:{fontSize:".82rem",color:"#6b7280"}},"Rate Score"),
            React.createElement("span",{style:{fontSize:".82rem",fontWeight:700,color:result.color}},result.score,"/10")),
          React.createElement("div",{className:"bar"},React.createElement("div",{className:"bf",style:{width:result.score*10+"%",background:result.color}}))),
        result.diff>0 && React.createElement("div",{className:"sav"},
          React.createElement("h3",null,"Potential Annual Savings"),
          React.createElement("p",{className:"amt"},"$",result.lo.toLocaleString()," – $",result.hi.toLocaleString()),
          React.createElement("p",{style:{fontSize:".82rem",color:"#6b7280",marginTop:".3rem"}},"By switching to a more competitive rate")),
        !done ? React.createElement("div",{className:"lf"},
          React.createElement("h3",null,"Get a free rate review from a licensed broker"),
          React.createElement("div",{className:"fi"},React.createElement("label",null,"Name"),React.createElement("input",{placeholder:"Your name",value:lead.name,onChange:function(e){setLead(Object.assign({},lead,{name:e.target.value}));}})),
          React.createElement("div",{className:"fi"},React.createElement("label",null,"Phone"),React.createElement("input",{placeholder:"Your phone",value:lead.phone,onChange:function(e){setLead(Object.assign({},lead,{phone:e.target.value}));}})),
          React.createElement("div",{className:"fi"},React.createElement("label",null,"Email"),React.createElement("input",{placeholder:"Your email",value:lead.email,onChange:function(e){setLead(Object.assign({},lead,{email:e.target.value}));}})),
          React.createElement("button",{className:"sb",onClick:submit},"Get My Free Rate Review →"))
        : React.createElement("div",{style:{background:"#f0fdf4",padding:"1.5rem",borderRadius:".75rem",marginTop:"1.5rem"}},
            React.createElement("p",{style:{color:"#16a34a",fontWeight:700,fontSize:"1.05rem"}},"✓ Thanks! A broker will be in touch shortly.")))),

    page==="how" && React.createElement("div",{className:"sec"},
      React.createElement("div",{className:"st"},"How It Works"),
      React.createElement("p",{className:"ss"},"Three steps to your verdict"),
      React.createElement("div",{className:"steps"},
        React.createElement("div",{className:"step"},React.createElement("div",{className:"sn"},"1"),React.createElement("h3",null,"Enter Your Rate"),React.createElement("p",null,"Tell us your current interest rate, loan type and lender.")),
        React.createElement("div",{className:"step"},React.createElement("div",{className:"sn"},"2"),React.createElement("h3",null,"Get Your Verdict"),React.createElement("p",null,"We compare against the best rates available right now.")),
        React.createElement("div",{className:"step"},React.createElement("div",{className:"sn"},"3"),React.createElement("h3",null,"Take Action"),React.createElement("p",null,"Connect with a broker and start saving on your repayments.")))),

    page==="about" && React.createElement("div",{className:"sec"},
      React.createElement("div",{className:"st"},"About RateMyHomeLoan"),
      React.createElement("p",{style:{color:"#374151",lineHeight:1.8,marginTop:"1rem"}},"RateMyHomeLoan.com.au is an independent rate comparison tool helping Australian homeowners find out if they are paying too much. We compare your rate against live market data across Australia's leading lenders.")),

    React.createElement("div",{className:"ft"},
      React.createElement("strong",null,"RateMyHomeLoan.com.au"),
      React.createElement("br",null),
      React.createElement("span",null,"General information only. Not financial advice. Always seek independent advice. © 2026")));
                              }
