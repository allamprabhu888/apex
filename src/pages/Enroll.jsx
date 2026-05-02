import React, { useState } from 'react';
import T from '../styles/theme';
import { Btn, SectionTitle } from '../components/ui';
import { COURSES } from '../data/constants';

export default function Enroll() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ name:"", phone:"", email:"", course:"" });
  const [complete, setComplete] = useState(false);

  const handleNext = async (e) => {
    e.preventDefault();
    if (step === 1 && data.name && data.phone && data.email) setStep(2);
    else if (step === 2 && data.course) {
      try {
        const res = await fetch('/api/enroll', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        if (res.ok) {
          setComplete(true);
        } else {
          alert('Failed to submit enrollment. Please try again.');
        }
      } catch (err) {
        console.error('Error:', err);
        alert('Network error. Please try again later.');
      }
    }
  };

  const inp = { width:"100%", padding:"14px 18px", borderRadius:12, border:`1.5px solid ${T.cream2}`,
    fontSize:15, color:T.ink, outline:"none", background:"#fff", transition:"border .2s",
    fontFamily:"DM Sans, sans-serif", marginBottom:16 };

  return (
    <section style={{ background:T.ink, minHeight:"80vh", display:"flex", padding:"80px 24px", alignItems:"center", position:"relative" }}>
      <div className="responsive-grid" style={{ maxWidth:1000, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"center" }}>
        {/* Left side info */}
        <div>
          <div style={{ display:"inline-flex", alignItems:"center", gap:9,
            background:"rgba(232,83,10,.14)", border:"1px solid rgba(232,83,10,.28)",
            borderRadius:50, padding:"6px 18px", marginBottom:26 }}>
            <span style={{ fontSize:13, color:"#ffb899", fontWeight:500 }}>Limited Seats Available</span>
          </div>
          <SectionTitle light>Start Your Legacy <em style={{ fontStyle:"italic", color:T.orange }}>Today</em></SectionTitle>
          <p style={{ color:"rgba(255,255,255,.7)", fontSize:17, lineHeight:1.7, marginTop:20, marginBottom:40 }}>
            Join the ranks of thousands of top performers. Gain access to elite faculty, curated study material, and personalized mentorship.
          </p>
          <div style={{ display:"flex", gap:24 }}>
            <div>
              <div style={{ color:T.orange, fontWeight:900, fontSize:"2rem" }} className="serif">90%</div>
              <div style={{ color:"rgba(255,255,255,.5)", fontSize:13 }}>Up to Scholarship</div>
            </div>
            <div style={{ width:1, background:"rgba(255,255,255,.1)" }} />
            <div>
              <div style={{ color:T.tealLt, fontWeight:900, fontSize:"2rem" }} className="serif">100%</div>
              <div style={{ color:"rgba(255,255,255,.5)", fontSize:13 }}>Job/College Assistance</div>
            </div>
          </div>
        </div>

        {/* Form panel */}
        <div style={{ background:"#fff", borderRadius:24, padding:"40px", boxShadow:"0 20px 60px rgba(0,0,0,.2)" }}>
           <h3 className="serif" style={{ fontSize:"1.6rem", fontWeight:900, marginBottom:8 }}>Enrollment Form</h3>
           <p style={{ color:T.ink3, fontSize:14, marginBottom:28 }}>Step {step} of 2 — {step===1 ? "Personal Details" : "Select Program"}</p>

           <form onSubmit={handleNext}>
             {step === 1 ? (
               <div className="fade-up">
                 <input required placeholder="Full Name" type="text" value={data.name} onChange={e => setData({...data,name:e.target.value})} style={inp} onFocus={e=>e.target.style.borderColor=T.orange} onBlur={e=>e.target.style.borderColor=T.cream2}/>
                 <input required placeholder="Email Address" type="email" value={data.email} onChange={e => setData({...data,email:e.target.value})} style={inp} onFocus={e=>e.target.style.borderColor=T.orange} onBlur={e=>e.target.style.borderColor=T.cream2}/>
                 <input required placeholder="Phone Number" type="tel" value={data.phone} onChange={e => setData({...data,phone:e.target.value})} style={inp} onFocus={e=>e.target.style.borderColor=T.orange} onBlur={e=>e.target.style.borderColor=T.cream2}/>
                 <Btn style={{ width:"100%", justifyContent:"center", marginTop:16 }}>Continue →</Btn>
               </div>
             ) : (
               <div className="fade-up">
                 <div style={{ display:"flex", flexDirection:"column", gap:12, marginBottom:24 }}>
                   {COURSES.map(c => (
                     <button type="button" key={c.id} onClick={() => setData({...data,course:c.id})}
                       style={{ padding:"16px 20px", borderRadius:12, border:`2px solid ${data.course===c.id ? c.color : T.cream2}`,
                         background: data.course===c.id ? c.light : "#fff", cursor:"pointer",
                         display:"flex", alignItems:"center", gap:16, textAlign:"left",
                         transition:"all .2s", fontFamily:"DM Sans,sans-serif" }}>
                       <span style={{ fontSize:28 }}>{c.emoji}</span>
                       <div>
                         <div style={{ fontWeight:700, fontSize:15, color:T.ink }}>{c.name}</div>
                         <div style={{ fontSize:13, color:T.ink3 }}>{c.tag}</div>
                       </div>
                     </button>
                   ))}
                 </div>
                 <div style={{ display:"flex", gap:12 }}>
                   <Btn variant="outline" type="button" onClick={() => setStep(1)} style={{ padding:"12px 20px" }}>Back</Btn>
                   <Btn style={{ flex:1, justifyContent:"center" }}>Confirm Enrollment</Btn>
                 </div>
               </div>
             )}
           </form>
        </div>
      </div>

      {/* Success Popup Modal */}
      {complete && (
        <div style={{ position:"fixed", inset:0, zIndex:999,
          background:"rgba(0,0,0,.6)", backdropFilter:"blur(6px)",
          display:"flex", alignItems:"center", justifyContent:"center", padding:24 }}>
          <div className="fade-up" style={{ background:"#fff", padding:"48px", borderRadius:24, textAlign:"center", maxWidth:460, width:"100%", boxShadow:"0 32px 80px rgba(0,0,0,.35)" }}>
            <div style={{ fontSize:64, marginBottom:16 }}>✨</div>
            <h3 className="serif" style={{ fontSize:"1.8rem", fontWeight:900, marginBottom:12 }}>Application Received!</h3>
            <p style={{ color:T.ink2, fontSize:15, lineHeight:1.6, marginBottom:32 }}>
              Thank you, <b>{data.name}</b>! We have successfully received your enrollment query for the <b>{COURSES.find(c => c.id === data.course)?.name}</b> program. We will get back to you shortly.
            </p>
            <Btn to="/" style={{ width:"100%", justifyContent:"center" }}>Return Home</Btn>
          </div>
        </div>
      )}
    </section>
  );
}
