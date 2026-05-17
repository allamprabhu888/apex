import React, { useState } from 'react';
import T from '../../styles/theme';

export default function Automations() {
  const [enabled, setEnabled] = useState({
    otp: true,
    payment: true,
    classAlert: false,
    leadWelcome: true
  });

  const toggle = (key) => setEnabled(prev => ({ ...prev, [key]: !prev[key] }));

  const cards = [
    { key: "otp", title: "OTP Verification", desc: "Send SMS verification codes during student signup via Twilio API.", icon: "🔐", provider: "Twilio SMS" },
    { key: "payment", title: "Payment Receipts", desc: "Send automated beautifully formatted email receipts after successful enrollment.", icon: "💳", provider: "Resend Email" },
    { key: "classAlert", title: "Class Starting Soon", desc: "Send SMS alerts 15 minutes before a live class begins.", icon: "⏰", provider: "Twilio SMS" },
    { key: "leadWelcome", title: "Lead Welcome Sequence", desc: "Send an automated 3-day email drip sequence to new leads.", icon: "📧", provider: "Resend Email" },
  ];

  return (
    <div className="fade-up">
      <h1 style={{ fontSize: 28, fontWeight: 700, color: T.ink, marginBottom: 8 }}>Marketing & Automations</h1>
      <p style={{ color: T.ink2, marginBottom: 32 }}>Configure automated SMS and Email alerts using Twilio and Resend integrations.</p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        {cards.map(c => (
          <div key={c.key} style={{ background: "#fff", padding: 24, borderRadius: 16, border: `1px solid ${T.cream2}`, display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
               <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                 <div style={{ width: 48, height: 48, borderRadius: 12, background: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>{c.icon}</div>
                 <div>
                   <h3 style={{ fontSize: 16, fontWeight: 700, color: T.ink }}>{c.title}</h3>
                   <div style={{ fontSize: 12, fontWeight: 600, color: T.ink3, marginTop: 4 }}>Via {c.provider}</div>
                 </div>
               </div>
               
               {/* Toggle Switch */}
               <div onClick={() => toggle(c.key)} style={{ width: 44, height: 24, borderRadius: 24, background: enabled[c.key] ? "#10b981" : "#cbd5e1", position: "relative", cursor: "pointer", transition: "all .3s" }}>
                 <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#fff", position: "absolute", top: 2, left: enabled[c.key] ? 22 : 2, transition: "all .3s", boxShadow: "0 2px 4px rgba(0,0,0,0.2)" }} />
               </div>
            </div>
            <p style={{ fontSize: 14, color: T.ink2, lineHeight: 1.5, flex: 1 }}>{c.desc}</p>
            <div style={{ marginTop: 24, paddingTop: 16, borderTop: `1px solid ${T.cream2}` }}>
              <button style={{ background: "none", border: "none", color: T.orange, fontWeight: 600, cursor: "pointer", fontSize: 14 }}>⚙️ Configure Template</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
