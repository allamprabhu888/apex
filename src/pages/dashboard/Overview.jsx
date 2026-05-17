import React from 'react';
import { useOutletContext } from 'react-router-dom';
import T from '../../styles/theme';

export default function Overview() {
  const { user } = useOutletContext();
  const firstName = user?.name?.split(' ')[0] || 'Student';

  return (
    <div className="fade-up">
      <h1 style={{ fontSize: 28, fontWeight: 700, color: T.ink, marginBottom: 8 }}>Welcome back, {firstName}! 👋</h1>
      <p style={{ color: T.ink2, marginBottom: 32 }}>Here is what's happening with your JEE preparation today.</p>

      {/* Stats Row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginBottom: 32 }}>
        {[
          { label: "Classes Attended", val: "42/45", color: "#10b981", icon: "📈" },
          { label: "Tests Completed", val: "12", color: "#3b82f6", icon: "📝" },
          { label: "Average Score", val: "78%", color: "#8b5cf6", icon: "🎯" },
          { label: "Pending Assignments", val: "3", color: "#ef4444", icon: "⚠️" }
        ].map((s, i) => (
          <div key={i} style={{ background: "#fff", padding: 24, borderRadius: 16, border: `1px solid ${T.cream2}`, boxShadow: "0 4px 12px rgba(0,0,0,0.02)" }}>
            <div style={{ fontSize: 24, marginBottom: 12 }}>{s.icon}</div>
            <div style={{ fontSize: 28, fontWeight: 700, color: s.color, marginBottom: 4 }}>{s.val}</div>
            <div style={{ fontSize: 13, color: T.ink3, fontWeight: 500 }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 24 }}>
        {/* Gamification / Leaderboard */}
        <div style={{ background: "#fff", padding: 32, borderRadius: 16, border: `1px solid ${T.cream2}` }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>🏆 Global Leaderboard</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { rank: 1, name: "Aarav S.", xp: "4,200", isMe: false },
              { rank: 2, name: "Priya M.", xp: "3,950", isMe: false },
              { rank: 3, name: firstName, xp: "2,450", isMe: true },
              { rank: 4, name: "Rohan K.", xp: "2,100", isMe: false },
            ].map((u, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", padding: "12px 16px", background: u.isMe ? "#fff7ed" : "#f8fafc", borderRadius: 12, border: `1px solid ${u.isMe ? "#fdba74" : "transparent"}` }}>
                <div style={{ width: 32, fontWeight: 700, color: u.rank <= 3 ? T.orange : T.ink3 }}>#{u.rank}</div>
                <div style={{ flex: 1, fontWeight: u.isMe ? 700 : 500, color: T.ink }}>{u.name} {u.isMe && "(You)"}</div>
                <div style={{ fontWeight: 600, color: T.ink2 }}>{u.xp} XP</div>
              </div>
            ))}
          </div>
        </div>

        {/* Up Next */}
        <div style={{ background: "#fff", padding: 32, borderRadius: 16, border: `1px solid ${T.cream2}` }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>⏰ Up Next</h2>
          <div style={{ padding: 16, background: "#eff6ff", borderRadius: 12, border: "1px solid #bfdbfe", marginBottom: 16 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#2563eb", marginBottom: 4 }}>LIVE CLASS IN 30 MINS</div>
            <div style={{ fontWeight: 600, color: "#1e3a8a", marginBottom: 8 }}>Advanced Calculus - Integration</div>
            <button style={{ width: "100%", padding: "8px", background: "#2563eb", color: "#fff", border: "none", borderRadius: 6, fontWeight: 600, cursor: "pointer" }}>Join Zoom Link</button>
          </div>
          
          <div style={{ padding: 16, background: "#fef2f2", borderRadius: 12, border: "1px solid #fecaca" }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#dc2626", marginBottom: 4 }}>DUE TODAY</div>
            <div style={{ fontWeight: 600, color: "#991b1b", marginBottom: 8 }}>Physics Assignment #4</div>
            <button style={{ width: "100%", padding: "8px", background: "#fff", color: "#dc2626", border: "1px solid #f87171", borderRadius: 6, fontWeight: 600, cursor: "pointer" }}>Upload PDF</button>
          </div>
        </div>
      </div>
    </div>
  );
}
