import React, { useState } from 'react';
import T from '../../styles/theme';

export default function CMS() {
  const [activeTab, setActiveTab] = useState("courses");
  
  return (
    <div className="fade-up">
      <h1 style={{ fontSize: 28, fontWeight: 700, color: T.ink, marginBottom: 8 }}>Content Management System (CMS)</h1>
      <p style={{ color: T.ink2, marginBottom: 32 }}>Add or update courses and faculty without writing any code.</p>

      <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
        {['courses', 'faculty'].map(tab => (
           <button key={tab} onClick={() => setActiveTab(tab)} style={{
             padding: "10px 24px", borderRadius: 8, fontSize: 15, fontWeight: 600, textTransform: "capitalize", cursor: "pointer", transition: "all .2s",
             background: activeTab === tab ? T.ink : "#fff", color: activeTab === tab ? "#fff" : T.ink2, border: `1px solid ${activeTab===tab ? T.ink : T.cream2}`
           }}>
             {tab} Management
           </button>
        ))}
      </div>

      <div style={{ background: "#fff", padding: 32, borderRadius: 16, border: `1px solid ${T.cream2}` }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 24 }}>Add New {activeTab === "courses" ? "Course" : "Faculty"}</h2>
        
        {activeTab === "courses" ? (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: T.ink3, marginBottom: 8 }}>Course Name</label>
              <input placeholder="e.g. Target JEE Advanced 2027" style={{ width: "100%", padding: "12px", borderRadius: 8, border: `1px solid ${T.cream2}`, outline: "none", fontSize: 14 }} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: T.ink3, marginBottom: 8 }}>Price (₹)</label>
              <input placeholder="e.g. 45000" type="number" style={{ width: "100%", padding: "12px", borderRadius: 8, border: `1px solid ${T.cream2}`, outline: "none", fontSize: 14 }} />
            </div>
            <div style={{ gridColumn: "1 / -1" }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: T.ink3, marginBottom: 8 }}>Course Description</label>
              <textarea placeholder="Write a short description..." rows={4} style={{ width: "100%", padding: "12px", borderRadius: 8, border: `1px solid ${T.cream2}`, outline: "none", fontSize: 14, fontFamily: "inherit", resize: "vertical" }} />
            </div>
            <div>
              <button style={{ padding: "14px 24px", background: T.orange, color: "#fff", border: "none", borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: "pointer" }}>Save Course to Database</button>
            </div>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
             <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: T.ink3, marginBottom: 8 }}>Faculty Name</label>
              <input placeholder="e.g. Dr. H.C. Verma" style={{ width: "100%", padding: "12px", borderRadius: 8, border: `1px solid ${T.cream2}`, outline: "none", fontSize: 14 }} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: T.ink3, marginBottom: 8 }}>Subject</label>
              <input placeholder="e.g. Physics" style={{ width: "100%", padding: "12px", borderRadius: 8, border: `1px solid ${T.cream2}`, outline: "none", fontSize: 14 }} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: T.ink3, marginBottom: 8 }}>Experience (Years)</label>
              <input placeholder="e.g. 15" type="number" style={{ width: "100%", padding: "12px", borderRadius: 8, border: `1px solid ${T.cream2}`, outline: "none", fontSize: 14 }} />
            </div>
            <div style={{ gridColumn: "1 / -1", marginTop: 12 }}>
              <button style={{ padding: "14px 24px", background: T.orange, color: "#fff", border: "none", borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: "pointer" }}>Add Faculty Profile</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
