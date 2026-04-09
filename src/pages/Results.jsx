import React from 'react';
import T from '../styles/theme';
import { SectionLabel, SectionTitle, Btn } from '../components/ui';
import { TOPPERS } from '../data/constants';

export default function Results() {
  const colors = { jee: T.orange, neet: T.teal, upsc: "#b8941a" };
  const lights = { jee: T.orangeLt, neet: T.tealLt, upsc: "#fef5d3" };

  return (
    <section style={{ background:T.cream, minHeight:"80vh", padding:"80px 0" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px" }}>
        <div style={{ textAlign:"center", marginBottom:56 }}>
          <SectionLabel>All Results</SectionLabel>
          <SectionTitle>Our Hall of <em style={{ fontStyle:"italic", color:T.orange }}>Fame</em></SectionTitle>
          <p style={{ color:T.ink2, fontSize:15, marginTop:16, maxWidth:600, margin:"16px auto 0", fontWeight:300 }}>
            Every year, hundreds of Apex Academy students secure remarkable ranks across India's toughest competitive exams. Here are some of our brightest stars.
          </p>
        </div>
        
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:24 }}>
          {TOPPERS.map(t => (
            <div key={t.name} className="topper-card" style={{ background:"#fff", borderRadius:4, padding:24,
              border:`1px solid ${T.cream2}`, display:"flex", alignItems:"center", gap:20,
              position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", left:0, top:0, bottom:0, width:3,
                background: colors[t.type] }} />
              <div style={{ width:56, height:56, borderRadius:"50%", flexShrink:0,
                background: lights[t.type], display:"flex", flexDirection:"column",
                alignItems:"center", justifyContent:"center", fontFamily:"Fraunces, serif" }}>
                <span style={{ fontSize:9, fontWeight:500, letterSpacing:".05em",
                  textTransform:"uppercase", color:T.ink3 }}>AIR</span>
                <span style={{ fontSize:"1.2rem", fontWeight:600, color:T.ink, lineHeight:1 }}>
                  {t.rank.replace("AIR ","").replace("AIR","").trim()}
                </span>
              </div>
              <div>
                <h3 className="serif" style={{ fontSize:"1rem", fontWeight:400, marginBottom:4 }}>{t.name}</h3>
                <span style={{ display:"inline-block", padding:"3px 8px", borderRadius:2, fontSize:11,
                  background: lights[t.type], color: colors[t.type] }}>{t.exam}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
