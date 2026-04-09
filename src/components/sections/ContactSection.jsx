import React, { useState } from 'react';
import T from '../../styles/theme';
import { SectionLabel, SectionTitle, Btn } from '../ui';

function Contact() {
  const [form, setForm] = useState({ name:"", phone:"", course:"", message:"" });
  const [sent, setSent] = useState(false);
  
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    setSent(true); 
  };
  
  const inp = { 
    width:"100%", padding:"12px 16px", borderRadius:10, 
    border:`1.5px solid ${T.cream2}`,
    fontSize:15, color:T.ink, outline:"none", 
    background:"#fff", fontFamily:"DM Sans, sans-serif",
    transition:"border .18s" 
  };
  
  return (
    <section style={{ background:T.white, padding:"88px 0" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px" }}>
        <div className="contact-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1.2fr", gap:64, alignItems:"start" }}>
          <div>
            <SectionLabel>Contact</SectionLabel>
            <SectionTitle>Get in <em style={{ fontStyle:"italic", color:T.orange }}>Touch</em></SectionTitle>
            <p style={{ fontSize:16, color:T.ink2, marginTop:16, marginBottom:36, lineHeight:1.7 }}>
              Have questions? Our counselors are ready to help you find the perfect program.
            </p>
            <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
              {[["📞","+91 98765 43210","tel:+919876543210"],["📧","support@apexacademy.com","mailto:support@apexacademy.com"]].map(([icon,val,href]) => (
                <a key={val} href={href} style={{ display:"flex", alignItems:"center", gap:14,
                  padding:"16px 20px", borderRadius:14, border:`1px solid ${T.cream2}`,
                  color:T.ink, transition:"all .2s", textDecoration:"none" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor=T.orange; e.currentTarget.style.background=T.orangeLt; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor=T.cream2; e.currentTarget.style.background=""; }}>
                  <span style={{ fontSize:22 }}>{icon}</span>
                  <span style={{ fontSize:15, fontWeight:500 }}>{val}</span>
                </a>
              ))}
            </div>
          </div>

          <div style={{ background:T.cream, borderRadius:20, padding:36 }}>
            {sent ? (
              <div style={{ textAlign:"center", padding:"40px 0" }}>
                <div style={{ fontSize:56 }}>🎉</div>
                <h3 className="serif" style={{ fontSize:"1.4rem", fontWeight:700, marginTop:16, marginBottom:8 }}>Message Sent!</h3>
                <p style={{ color:T.ink2 }}>Our counselors will reach out within 24 hours.</p>
                <Btn onClick={() => setSent(false)} style={{ marginTop:24 }}>Send Another</Btn>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:16 }}>
                <h3 className="serif" style={{ fontSize:"1.3rem", fontWeight:700, marginBottom:4 }}>Enquiry Form</h3>
                <input required placeholder="Your Name" value={form.name} onChange={e => setForm({...form,name:e.target.value})}
                  style={inp} onFocus={e => e.target.style.borderColor=T.orange} onBlur={e => e.target.style.borderColor=T.cream2} />
                <input required placeholder="Phone Number" value={form.phone} onChange={e => setForm({...form,phone:e.target.value})}
                  style={inp} onFocus={e => e.target.style.borderColor=T.orange} onBlur={e => e.target.style.borderColor=T.cream2} />
                <select value={form.course} onChange={e => setForm({...form,course:e.target.value})}
                  style={{...inp, color: form.course ? T.ink : T.ink3}}>
                  <option value="">Course Interested</option>
                  {["JEE Main & Advanced","NEET UG","UPSC Foundation","Foundation (8-10)"].map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <textarea placeholder="Your Message" value={form.message} onChange={e => setForm({...form,message:e.target.value})}
                  rows={4} style={{...inp, resize:"vertical"}}
                  onFocus={e => e.target.style.borderColor=T.orange} onBlur={e => e.target.style.borderColor=T.cream2} />
                <Btn style={{ justifyContent:"center" }}>Send Message →</Btn>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [sub, setSub] = useState(false);
  
  return (
    <div style={{ background:T.orange, padding:"56px 24px", textAlign:"center" }}>
      <div style={{ maxWidth:540, margin:"0 auto" }}>
        <h3 className="serif" style={{ fontSize:"1.8rem", fontWeight:900, color:"#fff", marginBottom:8 }}>Stay Updated</h3>
        <p style={{ color:"rgba(255,255,255,.75)", marginBottom:28, fontSize:15 }}>Get exam tips, rank updates & exclusive offers straight to your inbox.</p>
        {sub ? (
          <div style={{ color:"#fff", fontSize:16, fontWeight:600 }}>✅ You're subscribed! Watch your inbox.</div>
        ) : (
          <div style={{ display:"flex", gap:0, maxWidth:420, margin:"0 auto", borderRadius:50, overflow:"hidden",
            boxShadow:"0 8px 30px rgba(0,0,0,.2)", border:"2px solid rgba(255,255,255,.25)" }}>
            <input placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)}
              style={{ flex:1, padding:"14px 22px", border:"none", outline:"none", fontSize:15, fontFamily:"DM Sans,sans-serif" }} />
            <button onClick={() => email && setSub(true)}
              style={{ padding:"14px 26px", background:T.ink, color:"#fff", border:"none", cursor:"pointer",
                fontSize:14, fontWeight:600, fontFamily:"DM Sans,sans-serif", whiteSpace:"nowrap" }}>
              Subscribe →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ContactSection() {
  return (
    <>
      <Contact />
      <Newsletter />
    </>
  );
}
