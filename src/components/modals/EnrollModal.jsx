import React, { useState } from 'react';
import T from '../../styles/theme';
import { Btn } from '../ui';
import { COURSES } from '../../data/constants';

export default function EnrollModal({ onClose }) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ name:"", phone:"", course:"" });

  return (
    <div style={{ position:"fixed", inset:0, zIndex:999,
      background:"rgba(0,0,0,.6)", backdropFilter:"blur(6px)",
      display:"flex", alignItems:"center", justifyContent:"center", padding:24 }}
      onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={{ background:"#fff", borderRadius:24, padding:40, maxWidth:460, width:"100%",
        boxShadow:"0 32px 80px rgba(0,0,0,.35)", position:"relative" }}>
        <button onClick={onClose} style={{ position:"absolute", top:16, right:16,
          background:"none", border:"none", fontSize:22, cursor:"pointer", color:T.ink3, lineHeight:1 }}>✕</button>
        <div className="serif" style={{ fontSize:"1.5rem", fontWeight:900, marginBottom:4 }}>
          Enroll at <span style={{ color:T.orange }}>Apex Academy</span>
        </div>
        <p style={{ fontSize:14, color:T.ink3, marginBottom:28 }}>Step {step} of 2 — {step===1 ? "Your Details" : "Choose Course"}</p>

        {step === 1 ? (
          <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
            <input placeholder="Full Name" value={data.name} onChange={e => setData({...data,name:e.target.value})}
              style={{ padding:"13px 16px", border:`1.5px solid ${T.cream2}`, borderRadius:10, fontSize:15, outline:"none", fontFamily:"DM Sans,sans-serif" }} />
            <input placeholder="Phone Number" value={data.phone} onChange={e => setData({...data,phone:e.target.value})}
              style={{ padding:"13px 16px", border:`1.5px solid ${T.cream2}`, borderRadius:10, fontSize:15, outline:"none", fontFamily:"DM Sans,sans-serif" }} />
            <Btn onClick={() => data.name && data.phone && setStep(2)}
              style={{ justifyContent:"center", marginTop:8 }}>Continue →</Btn>
          </div>
        ) : (
          <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
            {COURSES.map(c => (
              <button key={c.id} onClick={() => setData({...data,course:c.id})}
                style={{ padding:"14px 18px", borderRadius:12, border:`2px solid ${data.course===c.id ? c.color : T.cream2}`,
                  background: data.course===c.id ? c.light : "#fff", cursor:"pointer",
                  display:"flex", alignItems:"center", gap:12, textAlign:"left",
                  transition:"all .18s", fontFamily:"DM Sans,sans-serif" }}>
                <span style={{ fontSize:24 }}>{c.emoji}</span>
                <div>
                  <div style={{ fontWeight:600, fontSize:14, color:T.ink }}>{c.name}</div>
                  <div style={{ fontSize:12, color:T.ink3 }}>{c.tag}</div>
                </div>
              </button>
            ))}
            <Btn onClick={() => data.course && onClose()} style={{ justifyContent:"center", marginTop:8 }}>
              Confirm Enrollment 🎉
            </Btn>
          </div>
        )}
      </div>
    </div>
  );
}
