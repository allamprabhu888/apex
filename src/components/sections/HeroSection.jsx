import React from 'react';
import T from '../../styles/theme';
import { Btn, SectionLabel, SectionTitle } from '../ui';
import { STATS } from '../../data/constants';

function Hero({ onEnroll }) {
  return (
    <section style={{ background:T.ink, minHeight:"91vh", display:"flex",
      alignItems:"center", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", inset:0, pointerEvents:"none",
        background:"radial-gradient(circle at 70% 38%, rgba(232,83,10,.18) 0%, transparent 55%), radial-gradient(circle at 18% 78%, rgba(10,110,92,.14) 0%, transparent 45%)" }} />
      <div style={{ position:"absolute", inset:0, pointerEvents:"none",
        backgroundImage:"linear-gradient(rgba(255,255,255,.028) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.028) 1px, transparent 1px)",
        backgroundSize:"60px 60px" }} />

      <div style={{ maxWidth:1200, margin:"0 auto", padding:"80px 24px", width:"100%" }}>
        <div className="hero-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"center" }}>

          {/* Left */}
          <div>
            <div className="fade-up" style={{ display:"inline-flex", alignItems:"center", gap:9,
              background:"rgba(232,83,10,.14)", border:"1px solid rgba(232,83,10,.28)",
              borderRadius:50, padding:"6px 18px", marginBottom:26 }}>
              <span style={{ width:8, height:8, borderRadius:"50%", background:T.orange,
                animation:"pulse 2s infinite", display:"block" }} />
              <span style={{ fontSize:13, color:"#ffb899", fontWeight:500 }}>India's #1 Coaching Institute</span>
            </div>

            <h1 className="serif fade-up fade-up-1" style={{ fontSize:"clamp(2.4rem,4.8vw,4rem)",
              fontWeight:900, lineHeight:1.08, color:"#fff", marginBottom:22 }}>
              Crack Your<br />
              <em style={{ fontStyle:"italic", color:T.orange }}>Dream Exam</em><br />
              with Top Mentors
            </h1>

            <p className="fade-up fade-up-2" style={{ fontSize:17, color:"rgba(255,255,255,.62)",
              marginBottom:36, maxWidth:420, lineHeight:1.75 }}>
              Join 50,000+ students who achieved top ranks in JEE, NEET & UPSC with expert-led programs.
            </p>

            <div className="fade-up fade-up-3" style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
              <Btn onClick={onEnroll}>Enroll Now →</Btn>
              <Btn to="/book-demo" variant="outlineWhite">Book Free Demo</Btn>
            </div>

            <div className="fade-up fade-up-4" style={{ display:"flex", gap:28, marginTop:44,
              paddingTop:36, borderTop:"1px solid rgba(255,255,255,.1)" }}>
              {[["50K+","Students"],["1200+","Rankers"],["15+","Years"]].map(([n,l]) => (
                <div key={n}>
                  <div className="serif" style={{ fontSize:"1.7rem", fontWeight:900, color:"#fff" }}>{n}</div>
                  <div style={{ fontSize:13, color:"rgba(255,255,255,.5)", marginTop:2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="hero-visual" style={{ position:"relative", height:430 }}>
            {/* Main card */}
            <div className="float" style={{ position:"absolute", right:0, top:20,
              background:T.cream, borderRadius:22, padding:"24px 26px", width:300,
              boxShadow:"0 24px 70px rgba(0,0,0,.45)" }}>
              <div style={{ height:140, borderRadius:14, marginBottom:18,
                background:"linear-gradient(135deg, #e8530a 0%, #f5a623 100%)",
                display:"flex", alignItems:"center", justifyContent:"center",
                fontSize:56, opacity:.9 }}>🎯</div>
              <div className="serif" style={{ fontSize:"1.05rem", fontWeight:700, marginBottom:4 }}>JEE Advanced Prep</div>
              <div style={{ fontSize:13, color:T.ink3 }}>2-Year Classroom Program</div>
              <div style={{ marginTop:14, display:"flex", gap:6, flexWrap:"wrap" }}>
                {["Physics","Chemistry","Maths"].map(s => (
                  <span key={s} style={{ padding:"4px 10px", borderRadius:50, fontSize:12,
                    fontWeight:600, background:T.orangeLt, color:T.orange }}>{s}</span>
                ))}
              </div>
            </div>

            {/* Stat pills */}
            <div style={{ position:"absolute", top:10, left:10,
              background:"#fff", borderRadius:16, padding:"12px 18px",
              boxShadow:"0 8px 30px rgba(0,0,0,.28)", display:"flex", alignItems:"center", gap:10 }}>
              <div style={{ width:38, height:38, borderRadius:10, background:T.orangeLt,
                display:"flex", alignItems:"center", justifyContent:"center", fontSize:18 }}>🏆</div>
              <div>
                <div className="serif" style={{ fontSize:"1.2rem", fontWeight:900, lineHeight:1, color:T.ink }}>1200+</div>
                <div style={{ fontSize:11, color:T.ink3, fontWeight:500 }}>Top Rankers</div>
              </div>
            </div>

            <div style={{ position:"absolute", bottom:70, left:0,
              background:"#fff", borderRadius:16, padding:"12px 18px",
              boxShadow:"0 8px 30px rgba(0,0,0,.28)", display:"flex", alignItems:"center", gap:10 }}>
              <div style={{ width:38, height:38, borderRadius:10, background:T.tealLt,
                display:"flex", alignItems:"center", justifyContent:"center", fontSize:18 }}>⭐</div>
              <div>
                <div className="serif" style={{ fontSize:"1.2rem", fontWeight:900, lineHeight:1, color:T.ink }}>4.8/5</div>
                <div style={{ fontSize:11, color:T.ink3, fontWeight:500 }}>Student Rating</div>
              </div>
            </div>

            <div style={{ position:"absolute", top:155, left:"-10px",
              background:T.teal, borderRadius:50, padding:"9px 18px",
              fontSize:13, color:"#fff", fontWeight:600, transform:"rotate(-5deg)",
              boxShadow:"0 6px 20px rgba(10,110,92,.4)" }}>
              🔥 New Batch Starting!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <div style={{ background:T.orange, padding:"44px 0" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px" }}>
        <div className="stats-grid" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:0 }}>
          {STATS.map((s, i) => (
            <div key={s.num} className="stat-item"
              style={{ textAlign:"center", padding:"8px 24px",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,.25)" : "none" }}>
              <div className="serif" style={{ fontSize:"2.8rem", fontWeight:900, color:"#fff", lineHeight:1, marginBottom:6 }}>{s.num}</div>
              <div style={{ fontSize:14, color:"rgba(255,255,255,.8)" }}>{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HeroSection({ onEnroll }) {
  return (
    <>
      <Hero onEnroll={onEnroll} />
      <StatsBar />
    </>
  );
}
