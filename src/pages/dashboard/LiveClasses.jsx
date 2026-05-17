import React from 'react';
import T from '../../styles/theme';

export default function LiveClasses() {
  const classes = [
    { title: "Advanced Calculus - Integration", time: "Today, 4:00 PM", status: "Live Now", platform: "Zoom", link: "https://zoom.us/" },
    { title: "Electromagnetism L4", time: "Today, 6:00 PM", status: "Upcoming", platform: "Google Meet", link: "https://meet.google.com/" },
    { title: "Organic Chemistry Revision", time: "Tomorrow, 10:00 AM", status: "Upcoming", platform: "Zoom", link: "https://zoom.us/" }
  ];

  return (
    <div className="fade-up">
      <h1 style={{ fontSize: 28, fontWeight: 700, color: T.ink, marginBottom: 8 }}>Live Class Integration</h1>
      <p style={{ color: T.ink2, marginBottom: 32 }}>Join your live sessions directly from the portal via Zoom or Google Meet.</p>

      <div style={{ display: "grid", gap: 16 }}>
        {classes.map((c, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#fff", padding: 24, borderRadius: 16, border: `1px solid ${c.status === "Live Now" ? "#fca5a5" : T.cream2}`, boxShadow: c.status === "Live Now" ? "0 4px 16px rgba(239,68,68,0.15)" : "0 2px 8px rgba(0,0,0,0.02)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div style={{ width: 56, height: 56, borderRadius: 12, background: c.status === "Live Now" ? "#fef2f2" : "#f1f5f9", color: c.status === "Live Now" ? "#dc2626" : "#64748b", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>
                {c.platform === "Zoom" ? "🎥" : "💻"}
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: T.ink }}>{c.title}</h3>
                  {c.status === "Live Now" && <span style={{ padding: "4px 8px", background: "#dc2626", color: "#fff", fontSize: 11, fontWeight: 700, borderRadius: 20, letterSpacing: "0.05em", animation: "pulse 2s infinite" }}>LIVE NOW</span>}
                </div>
                <div style={{ fontSize: 14, color: T.ink3, display: "flex", alignItems: "center", gap: 6 }}>
                  <span>⏰ {c.time}</span> • <span>Via {c.platform}</span>
                </div>
              </div>
            </div>
            <a href={c.link} target="_blank" rel="noreferrer" style={{ textDecoration: "none", padding: "12px 24px", background: c.status === "Live Now" ? "#2563eb" : "#e2e8f0", color: c.status === "Live Now" ? "#fff" : "#475569", borderRadius: 8, fontWeight: 600, fontSize: 14, transition: "background .2s", pointerEvents: c.status === "Live Now" ? "auto" : "none" }}>
              {c.status === "Live Now" ? "Join Class" : "Waiting for Host..."}
            </a>
          </div>
        ))}
      </div>
      <style>{`@keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.6; } 100% { opacity: 1; } }`}</style>
    </div>
  );
}
