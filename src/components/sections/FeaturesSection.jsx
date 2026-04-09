import React from 'react';
import T from '../../styles/theme';
import { SectionLabel, SectionTitle, Btn } from '../ui';
import { WHY_US, BRANCHES } from '../../data/constants';

function WhyUs() {
  return (
    <section style={{ background:T.white, padding:"88px 0" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px" }}>
        <div style={{ textAlign:"center", marginBottom:56 }}>
          <SectionLabel>Why Apex</SectionLabel>
          <SectionTitle>Why <em style={{ fontStyle:"italic", color:T.orange }}>Students Choose Us</em></SectionTitle>
        </div>
        <div className="why-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:24 }}>
          {WHY_US.map(w => (
            <div key={w.title} style={{ padding:"28px 26px", borderRadius:18, border:`1px solid ${T.cream2}`,
              transition:"all .25s", cursor:"default" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor=T.orange; e.currentTarget.style.background=T.orangeLt; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor=T.cream2; e.currentTarget.style.background=""; }}>
              <div style={{ fontSize:30, marginBottom:14 }}>{w.icon}</div>
              <h3 className="serif" style={{ fontSize:"1.1rem", fontWeight:700, marginBottom:8 }}>{w.title}</h3>
              <p style={{ fontSize:14, color:T.ink2, lineHeight:1.65 }}>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OnlineLearning() {
  return (
    <section style={{ background:T.cream, padding:"88px 0" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"center" }}>
          <div>
            <SectionLabel>Online Learning</SectionLabel>
            <SectionTitle>Learn <em style={{ fontStyle:"italic", color:T.orange }}>Anytime, Anywhere</em></SectionTitle>
            <p style={{ fontSize:16, color:T.ink2, marginTop:16, marginBottom:32, lineHeight:1.75 }}>
              Access world-class coaching from the comfort of your home. Our platform offers live sessions, recorded content, and AI-powered performance tracking.
            </p>
            <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
              {[["📡","Live + Recorded Classes","Never miss a lecture — attend live or watch recordings."],
                ["📱","Mobile App Access","Study on the go with our feature-rich mobile app."],
                ["📈","Performance Tracking","Detailed analytics to identify strengths and gaps."]].map(([icon,title,desc]) => (
                <div key={title} style={{ display:"flex", gap:14, alignItems:"flex-start" }}>
                  <span style={{ fontSize:22, marginTop:2 }}>{icon}</span>
                  <div>
                    <div style={{ fontWeight:600, fontSize:15, marginBottom:3 }}>{title}</div>
                    <div style={{ fontSize:13, color:T.ink3 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background:T.ink, borderRadius:24, padding:40, textAlign:"center" }}>
            <div style={{ fontSize:80, marginBottom:20 }}>📲</div>
            <div className="serif" style={{ fontSize:"1.5rem", fontWeight:700, color:"#fff", marginBottom:12 }}>Apex Learning App</div>
            <p style={{ fontSize:14, color:"rgba(255,255,255,.55)", marginBottom:28 }}>500K+ downloads. Top rated on Play Store & App Store.</p>
            <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
              <Btn variant="white" style={{ padding:"11px 22px", fontSize:14 }}>📱 App Store</Btn>
              <Btn variant="outlineWhite" style={{ padding:"11px 22px", fontSize:14 }}>🤖 Google Play</Btn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Branches() {
  return (
    <section style={{ background:T.ink, padding:"64px 0" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px" }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:24 }}>
          <div>
            <div style={{ fontSize:12, fontWeight:600, letterSpacing:".12em", textTransform:"uppercase",
              color:T.orange, marginBottom:8, display:"flex", alignItems:"center", gap:8 }}>
              <span style={{ width:24, height:2, background:T.orange, display:"block" }} /> Branches
            </div>
            <h2 className="serif" style={{ fontSize:"1.8rem", fontWeight:900, color:"#fff" }}>
              We're Present <em style={{ fontStyle:"italic", color:T.orange }}>Pan-India</em>
            </h2>
          </div>
          <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
            {BRANCHES.map(b => (
              <div key={b} style={{ padding:"10px 22px", borderRadius:50, border:"1px solid rgba(255,255,255,.2)",
                color:"rgba(255,255,255,.8)", fontSize:14, fontWeight:500, display:"flex", alignItems:"center", gap:6 }}>
                📍 {b}
              </div>
            ))}
          </div>
          <Btn variant="outlineWhite">Find Nearest Center →</Btn>
        </div>
      </div>
    </section>
  );
}

export default function FeaturesSection() {
  return (
    <>
      <WhyUs />
      <OnlineLearning />
      <Branches />
    </>
  );
}
