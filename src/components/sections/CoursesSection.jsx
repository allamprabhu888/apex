import React, { useState } from 'react';
import T from '../../styles/theme';
import { SectionLabel, SectionTitle, Btn } from '../ui';
import { COURSES } from '../../data/constants';
import { Link } from 'react-router-dom';

function Courses() {
  const [active, setActive] = useState("all");
  const filters = [
    { id:"all", lbl:"All Courses" }, 
    { id:"jee", lbl:"JEE" }, 
    { id:"neet", lbl:"NEET" }, 
    { id:"upsc", lbl:"UPSC" }, 
    { id:"foundation", lbl:"Foundation" }
  ];
  
  const visible = active === "all" ? COURSES : COURSES.filter(c => c.id === active);
  
  return (
    <section style={{ background:T.cream, padding:"88px 0" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px" }}>
        <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", flexWrap:"wrap", gap:16, marginBottom:48 }}>
          <div>
            <SectionLabel>Courses</SectionLabel>
            <SectionTitle>Programs <em style={{ fontStyle:"italic", color:T.orange }}>Built to Win</em></SectionTitle>
          </div>
          <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
            {filters.map(f => (
              <button key={f.id} className="filter-btn" onClick={() => setActive(f.id)}
                style={{ padding:"9px 20px", borderRadius:50, border:`1.5px solid ${active===f.id ? T.orange : T.cream2}`,
                  background: active===f.id ? T.orange : "#fff",
                  color: active===f.id ? "#fff" : T.ink2,
                  fontSize:14, fontWeight:500, cursor:"pointer" }}>
                {f.lbl}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(270px,1fr))", gap:24 }}>
          {visible.map(c => (
            <div key={c.id} className="course-card" style={{ background:"#fff", borderRadius:18,
              overflow:"hidden", border:`1px solid ${T.cream2}`, boxShadow:"0 2px 12px rgba(0,0,0,.04)" }}>
              <div style={{ height:120, background:`linear-gradient(135deg, ${c.color} 0%, ${c.color}aa 100%)`,
                padding:"24px", display:"flex", alignItems:"flex-end", position:"relative" }}>
                <span style={{ position:"absolute", top:18, right:18, fontSize:36, opacity:.45 }}>{c.emoji}</span>
                <span style={{ padding:"4px 12px", borderRadius:50, background:"rgba(255,255,255,.2)",
                  color:"#fff", fontSize:12, fontWeight:600, letterSpacing:".06em", textTransform:"uppercase" }}>
                  {c.tag}
                </span>
              </div>
              <div style={{ padding:"22px 24px" }}>
                <h3 className="serif" style={{ fontSize:"1.2rem", fontWeight:700, marginBottom:14 }}>{c.name}</h3>
                <ul style={{ marginBottom:20 }}>
                  {c.programs.map(p => (
                    <li key={p} style={{ fontSize:14, color:T.ink2, padding:"5px 0",
                      borderBottom:`1px solid ${T.cream2}`, display:"flex", alignItems:"center", gap:8 }}>
                      <span style={{ color:T.orange, fontSize:13 }}>→</span> {p}
                    </li>
                  ))}
                </ul>
                <Link to={`/course/${c.id}`} style={{ fontSize:14, fontWeight:600, color:T.orange,
                  display:"inline-flex", alignItems:"center", gap:6, textDecoration:"none" }}>
                  Learn More <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DemoClasses() {
  return (
    <section style={{ background:T.ink, padding:"88px 0" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px" }}>
        <div className="demo-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"center" }}>
          <div>
            <SectionLabel>Demo Classes</SectionLabel>
            <SectionTitle light>Experience Learning<br /><em style={{ fontStyle:"italic", color:T.orange }}>Before You Enroll</em></SectionTitle>
            <ul style={{ listStyle:"none", margin:"28px 0 36px" }}>
              {[["🎥","Free Live Classes","o"],["🎞️","Recorded Lectures","t"],["📌","Topic-wise Previews","y"]].map(([icon, lbl, cls]) => (
                <li key={lbl} style={{ display:"flex", alignItems:"center", gap:14, padding:"14px 0",
                  borderBottom:"1px solid rgba(255,255,255,.08)", color:"rgba(255,255,255,.75)", fontSize:15 }}>
                  <span style={{ width:38, height:38, borderRadius:10, display:"flex", alignItems:"center",
                    justifyContent:"center", fontSize:16, flexShrink:0,
                    background: cls==="o" ? "rgba(232,83,10,.2)" : cls==="t" ? "rgba(10,110,92,.2)" : "rgba(245,200,66,.18)" }}>
                    {icon}
                  </span>
                  {lbl}
                </li>
              ))}
            </ul>
            <Btn to="/book-demo" variant="white">Book Your Free Demo →</Btn>
          </div>

          <div style={{ background:"rgba(255,255,255,.05)", borderRadius:24, padding:28,
            border:"1px solid rgba(255,255,255,.1)" }}>
            <div style={{ width:"100%", aspectRatio:"16/9", borderRadius:14, marginBottom:18,
              background:"linear-gradient(135deg, rgba(232,83,10,.28) 0%, rgba(10,110,92,.28) 100%)",
              display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", position:"relative",
              overflow:"hidden" }}>
              <div style={{ width:64, height:64, borderRadius:"50%", background:"rgba(255,255,255,.9)",
                display:"flex", alignItems:"center", justifyContent:"center", fontSize:22,
                boxShadow:"0 8px 32px rgba(0,0,0,.3)", zIndex:1 }}>▶</div>
              <div style={{ position:"absolute", top:14, left:14, background:"rgba(232,83,10,.9)",
                borderRadius:6, padding:"4px 10px", fontSize:12, color:"#fff", fontWeight:600 }}>LIVE</div>
            </div>
            <div style={{ display:"flex", gap:12 }}>
              {["⚗️","📐","🧬"].map(e => (
                <div key={e} style={{ flex:1, aspectRatio:"4/3", borderRadius:10, cursor:"pointer",
                  background:"rgba(255,255,255,.07)", border:"1px solid rgba(255,255,255,.1)",
                  display:"flex", alignItems:"center", justifyContent:"center", fontSize:24,
                  transition:"all .18s" }}>
                  {e}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CoursesSection() {
  return (
    <>
      <Courses />
      <DemoClasses />
    </>
  );
}
