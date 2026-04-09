import React from 'react';
import T from '../../styles/theme';
import { SectionLabel, SectionTitle, Btn } from '../ui';
import { FACULTY, TOPPERS } from '../../data/constants';
import { Link } from 'react-router-dom';

function Faculty() {
  return (
    <section style={{ background:T.white, padding:"88px 0" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px" }}>
        <SectionLabel>Faculty</SectionLabel>
        <SectionTitle>Meet Your <em style={{ fontStyle:"italic", color:T.orange }}>Expert Mentors</em></SectionTitle>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))", gap:24, marginTop:48 }}>
          {FACULTY.map(f => {
            const facultySlug = f.name.toLowerCase().replace(/[\s.]+/g, '-');
            return (
              <Link to={`/faculty/${facultySlug}`} key={f.name} className="faculty-card" style={{ border:`1px solid ${T.cream2}`, borderRadius:4, overflow:"hidden", display:"block", textDecoration:"none", color:"inherit", background:"#fff" }}>
                <div style={{ height:220, position:"relative", background:T.cream }}>
                  {f.img ? (
                    <img src={f.img} alt={f.name} style={{ width:"100%", height:"100%", objectFit:"cover", filter:"grayscale(20%)" }} />
                  ) : (
                    <div style={{ width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center" }}>
                       <div className="serif" style={{ fontSize:72, color:"rgba(0,0,0,.1)" }}>{f.initials}</div>
                    </div>
                  )}
                  <div style={{ position:"absolute", bottom:0, left:0, right:0,
                    background:"linear-gradient(to top, rgba(0,0,0,.8) 0%, transparent 100%)",
                    padding:"20px 14px 10px", color:"#fff", fontSize:11, fontWeight:400,
                    letterSpacing:".05em", textTransform:"uppercase" }}>
                    {f.subject}
                  </div>
                </div>
                <div style={{ padding:"18px 20px" }}>
                  <h3 className="serif" style={{ fontSize:"1.1rem", fontWeight:400, marginBottom:4 }}>{f.name}</h3>
                  <div style={{ fontSize:13, color:T.orange, fontWeight:500, marginBottom:8 }}>{f.subject}</div>
                  <div style={{ fontSize:12, color:T.ink3, fontWeight:300 }}>🕐 {f.exp} teaching experience</div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  );
}

function Toppers() {
  const colors = { jee: T.orange, neet: T.teal, upsc: "#b8941a" };
  const lights = { jee: T.orangeLt, neet: T.tealLt, upsc: "#fef5d3" };
  // Only show first 3 toppers on homepage
  const visibleToppers = TOPPERS.slice(0, 3);
  
  return (
    <section style={{ background:T.cream, padding:"88px 0" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px" }}>
        <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", flexWrap:"wrap", gap:16, marginBottom:48 }}>
          <div>
            <SectionLabel>Results</SectionLabel>
            <SectionTitle>Our <em style={{ fontStyle:"italic", color:T.orange }}>Star Achievers</em></SectionTitle>
          </div>
          <Btn to="/results" variant="outline">View All Results →</Btn>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:24 }}>
          {visibleToppers.map(t => (
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

export default function FacultySection() {
  return (
    <>
      <Faculty />
      <Toppers />
    </>
  );
}
