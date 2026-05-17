import React from 'react';
import T from '../../styles/theme';

export default function Tests() {
  return (
    <div className="fade-up">
      <h1 style={{ fontSize: 28, fontWeight: 700, color: T.ink, marginBottom: 8 }}>Online Test Series & Quizzes</h1>
      <p style={{ color: T.ink2, marginBottom: 32 }}>Timed exam environment simulating real JEE/NEET interfaces with auto-grading.</p>

      <div style={{ background: "#fff", padding: 32, borderRadius: 16, border: `1px solid ${T.cream2}`, marginBottom: 32 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <div>
            <div style={{ display: "inline-block", padding: "4px 12px", background: "#fef3c7", color: "#b45309", borderRadius: 20, fontSize: 12, fontWeight: 700, marginBottom: 8 }}>ACTIVE MOCK TEST</div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: T.ink }}>JEE Main Mock Test #5 - Full Syllabus</h2>
            <div style={{ color: T.ink3, fontSize: 14, marginTop: 4 }}>Duration: 180 Minutes • Max Marks: 300</div>
          </div>
          <button style={{ padding: "14px 28px", background: T.orange, color: "#fff", border: "none", borderRadius: 8, fontSize: 16, fontWeight: 600, cursor: "pointer", boxShadow: `0 8px 24px rgba(232,83,10,0.3)` }}>
            Start Exam Now
          </button>
        </div>
        <div style={{ display: "flex", gap: 16, borderTop: `1px solid ${T.cream2}`, paddingTop: 20 }}>
          <div style={{ flex: 1, padding: 16, background: "#f8fafc", borderRadius: 12 }}>
             <div style={{ fontSize: 12, color: T.ink3, fontWeight: 600 }}>SUBJECTS</div>
             <div style={{ fontSize: 14, fontWeight: 600, color: T.ink, marginTop: 4 }}>Physics, Chemistry, Maths</div>
          </div>
          <div style={{ flex: 1, padding: 16, background: "#f8fafc", borderRadius: 12 }}>
             <div style={{ fontSize: 12, color: T.ink3, fontWeight: 600 }}>MARKING SCHEME</div>
             <div style={{ fontSize: 14, fontWeight: 600, color: T.ink, marginTop: 4 }}>+4 for correct, -1 for incorrect</div>
          </div>
        </div>
      </div>

      <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>Performance Analytics</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        {[
          { name: "Mock Test #4", score: "210/300", perc: "92%", status: "Evaluated" },
          { name: "Topic Test: Thermodynamics", score: "45/50", perc: "90%", status: "Evaluated" },
          { name: "Mock Test #3", score: "195/300", perc: "86%", status: "Evaluated" }
        ].map((t, i) => (
          <div key={i} style={{ padding: 24, background: "#fff", borderRadius: 12, border: `1px solid ${T.cream2}` }}>
            <h3 style={{ fontSize: 15, fontWeight: 600, color: T.ink, marginBottom: 16 }}>{t.name}</h3>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 16 }}>
               <div>
                 <div style={{ fontSize: 11, color: T.ink3, fontWeight: 600, marginBottom: 4 }}>SCORE</div>
                 <div style={{ fontSize: 24, fontWeight: 700, color: "#10b981" }}>{t.score}</div>
               </div>
               <div style={{ fontSize: 14, fontWeight: 600, color: T.ink2 }}>{t.perc}ile</div>
            </div>
            <button style={{ width: "100%", padding: "8px", background: "#f1f5f9", border: "none", borderRadius: 6, fontWeight: 600, color: "#475569", cursor: "pointer" }}>View Detailed Analysis</button>
          </div>
        ))}
      </div>
    </div>
  );
}
