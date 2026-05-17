import React from 'react';
import T from '../../styles/theme';

export default function VideoLectures() {
  const videos = [
    { title: "Kinematics 1D - Full Chapter", duration: "1h 45m", thumb: "https://img.youtube.com/vi/1_M1QZ9rE30/maxresdefault.jpg", vid: "1_M1QZ9rE30" },
    { title: "Chemical Bonding - L1", duration: "2h 10m", thumb: "https://img.youtube.com/vi/bSl9OXA0t3A/maxresdefault.jpg", vid: "bSl9OXA0t3A" },
    { title: "Quadratic Equations Tricks", duration: "45m", thumb: "https://img.youtube.com/vi/Y8bZ46Dq9mY/maxresdefault.jpg", vid: "Y8bZ46Dq9mY" },
    { title: "Newton's Laws of Motion", duration: "1h 20m", thumb: "https://img.youtube.com/vi/kKKM8Y-u7ds/maxresdefault.jpg", vid: "kKKM8Y-u7ds" }
  ];

  return (
    <div className="fade-up">
      <h1 style={{ fontSize: 28, fontWeight: 700, color: T.ink, marginBottom: 8 }}>Recorded Lectures</h1>
      <p style={{ color: T.ink2, marginBottom: 32 }}>Catch up on missed classes or revise concepts.</p>

      <div style={{ background: "#fff", padding: 24, borderRadius: 16, border: `1px solid ${T.cream2}`, marginBottom: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>Currently Watching</h2>
        <div style={{ aspectRatio: "16/9", background: "#000", borderRadius: 12, overflow: "hidden", position: "relative" }}>
          {/* Embedding a placeholder YouTube Video */}
          <iframe 
            width="100%" height="100%" 
            src="https://www.youtube.com/embed/1_M1QZ9rE30" 
            title="YouTube video player" frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            style={{ position: "absolute", top: 0, left: 0 }}
          />
        </div>
      </div>

      <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>Recommended for You</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        {videos.map((v, i) => (
          <div key={i} style={{ background: "#fff", borderRadius: 12, overflow: "hidden", border: `1px solid ${T.cream2}`, cursor: "pointer", transition: "transform .2s" }} onMouseEnter={e => e.currentTarget.style.transform="translateY(-4px)"} onMouseLeave={e => e.currentTarget.style.transform="translateY(0)"}>
            <div style={{ aspectRatio: "16/9", background: "#f1f5f9", backgroundImage: `url(${v.thumb})`, backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
              <div style={{ position: "absolute", bottom: 8, right: 8, background: "rgba(0,0,0,0.8)", color: "#fff", padding: "4px 8px", borderRadius: 4, fontSize: 12, fontWeight: 600 }}>{v.duration}</div>
            </div>
            <div style={{ padding: 16 }}>
              <h3 style={{ fontSize: 15, fontWeight: 600, color: T.ink, marginBottom: 4 }}>{v.title}</h3>
              <div style={{ fontSize: 13, color: T.ink3 }}>Physics • Prof. Sharma</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
