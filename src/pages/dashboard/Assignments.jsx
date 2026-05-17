import React from 'react';
import T from '../../styles/theme';

export default function Assignments() {
  return (
    <div className="fade-up">
      <h1 style={{ fontSize: 28, fontWeight: 700, color: T.ink, marginBottom: 8 }}>Assignment Submission</h1>
      <p style={{ color: T.ink2, marginBottom: 32 }}>Upload PDFs of your homework and receive faculty grades.</p>

      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 24 }}>
        <div>
          <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>Pending Assignments</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { id: "PHY-04", title: "Rotational Motion Problems", due: "Today, 11:59 PM", subject: "Physics" },
              { id: "CHEM-12", title: "Hydrocarbons Worksheet", due: "Tomorrow, 11:59 PM", subject: "Chemistry" }
            ].map((a, i) => (
              <div key={i} style={{ background: "#fff", padding: 24, borderRadius: 12, border: `1px solid ${T.cream2}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, background: "#f1f5f9", padding: "4px 8px", borderRadius: 4, color: "#475569" }}>{a.subject}</span>
                    <span style={{ fontSize: 12, color: "#dc2626", fontWeight: 600 }}>Due: {a.due}</span>
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: T.ink }}>{a.title}</h3>
                </div>
                <label style={{ cursor: "pointer", background: T.orange, color: "#fff", padding: "10px 20px", borderRadius: 8, fontWeight: 600, fontSize: 14 }}>
                  <input type="file" style={{ display: "none" }} accept="application/pdf" />
                  Upload PDF
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div>
           <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>Recently Graded</h2>
           <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
             <div style={{ background: "#fff", padding: 16, borderRadius: 12, border: `1px solid ${T.cream2}` }}>
               <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                 <div style={{ fontWeight: 600, fontSize: 14 }}>Center of Mass</div>
                 <div style={{ color: "#10b981", fontWeight: 700 }}>9.5/10</div>
               </div>
               <div style={{ fontSize: 13, color: T.ink3, fontStyle: "italic", background: "#f8fafc", padding: "8px", borderRadius: 8 }}>
                 "Great steps in question 4. Be careful with unit conversions!" - Prof. Sharma
               </div>
             </div>
             <div style={{ background: "#fff", padding: 16, borderRadius: 12, border: `1px solid ${T.cream2}` }}>
               <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                 <div style={{ fontWeight: 600, fontSize: 14 }}>Limits & Derivatives</div>
                 <div style={{ color: "#10b981", fontWeight: 700 }}>10/10</div>
               </div>
               <div style={{ fontSize: 13, color: T.ink3, fontStyle: "italic", background: "#f8fafc", padding: "8px", borderRadius: 8 }}>
                 "Perfect solutions." - Prof. Verma
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
