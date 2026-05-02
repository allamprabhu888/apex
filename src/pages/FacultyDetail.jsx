import React from 'react';
import { useParams } from 'react-router-dom';
import T from '../styles/theme';
import { Btn } from '../components/ui';
import { FACULTY } from '../data/constants';

export default function FacultyDetail() {
  const { id } = useParams();
  
  const faculty = FACULTY.find(f => f.name.toLowerCase().replace(/[\s.]+/g, '-') === id);

  if (!faculty) {
    return (
      <section style={{ minHeight:"60vh", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", background:T.cream }}>
        <h2 style={{ fontSize:"2rem", marginBottom:16, fontWeight:400 }} className="serif">Faculty Not Found</h2>
        <Btn to="/">Return to Home</Btn>
      </section>
    );
  }

  return (
    <section style={{ background:T.white, minHeight:"80vh" }}>
      {/* Header Banner - Thinner, more elegant */}
      <div style={{ height:280, background:T.ink, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, background:`linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 100%)` }} />
        <div style={{ maxWidth:1000, margin:"0 auto", padding:"0 24px", height:"100%", display:"flex", alignItems:"flex-end" }}>
          
          <div style={{ transform:"translateY(60px)", display:"flex", gap:32, alignItems:"flex-end", width:"100%" }}>
            
            <div style={{ width:200, height:240, borderRadius:4, background:T.cream,
              display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 20px 40px rgba(0,0,0,.15)", border:"4px solid #fff", zIndex:10, overflow:"hidden" }}>
              {faculty.img ? (
                <img src={faculty.img} alt={faculty.name} style={{ width:"100%", height:"100%", objectFit:"cover", filter:"grayscale(10%)" }} />
              ) : (
                <div className="serif" style={{ fontSize:80, fontWeight:300, color:"rgba(0,0,0,.2)" }}>{faculty.initials}</div>
              )}
            </div>
            
            <div style={{ paddingBottom:16, flex:1 }}>
              <div style={{ display:"inline-block", padding:"4px 12px", border:"1px solid rgba(255,255,255,.2)", borderRadius:2, fontSize:12, fontWeight:400, color:"#fff", marginBottom:12 }}>
                👨‍🏫 {faculty.subject} Department
              </div>
              <h1 className="serif" style={{ fontSize:"2.5rem", fontWeight:400, color:"#fff", lineHeight:1 }}>{faculty.name}</h1>
            </div>

            <div style={{ paddingBottom:16 }}>
              <Btn to="/book-demo">Book Demo Class</Btn>
            </div>
          </div>

        </div>
      </div>

      {/* Content */}
      <div className="responsive-grid-2-1" style={{ maxWidth:1000, margin:"0 auto", padding:"100px 24px 80px", display:"grid", gridTemplateColumns:"2fr 1fr", gap:64 }}>
        
        <div>
          <h3 className="serif" style={{ fontSize:"1.6rem", fontWeight:400, marginBottom:20 }}>About {faculty.name.split(" ")[0]}</h3>
          
          <p style={{ color:T.ink2, fontSize:15, lineHeight:1.8, marginBottom:24, fontWeight:300 }}>
            {faculty.about || `With over ${faculty.exp} of teaching experience, ${faculty.name} forms the backbone of Apex Academy's ${faculty.subject} department. Known for a unique teaching methodology that simplifies complex concepts, ${faculty.initials} has consistently produced top-ranking students in competitive examinations year after year.`}
          </p>
          
          {!faculty.about && (
            <p style={{ color:T.ink2, fontSize:15, lineHeight:1.8, marginBottom:40, fontWeight:300 }}>
              "My philosophy is simple: {faculty.subject} is not about memorizing formulas, it's about understanding the language of nature and logic. Once a student grasps the 'why', the 'how' becomes effortless."
            </p>
          )}

          <div style={{ height: 1, width: "100%", background: T.cream2, margin: "40px 0" }} />

          <h3 className="serif" style={{ fontSize:"1.4rem", fontWeight:400, marginBottom:20 }}>Noteworthy Achievements</h3>
          <ul style={{ display:"flex", flexDirection:"column", gap:16 }}>
            {(faculty.achievements || [
              `Mentored 500+ students to global top 100 ranks.`,
              `Author of best-selling ${faculty.subject} preparatory manuals.`,
              `Awarded 'Educator of the Year' by National Academic Council.`
            ]).map((ach, i) => (
              <li key={i} style={{ display:"flex", gap:16, alignItems:"center", fontSize:14, color:T.ink2, lineHeight:1.6, fontWeight:300 }}>
                <span style={{ color:T.orange, fontSize: 10 }}>◆</span> {ach}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div style={{ background:T.cream, padding:32, borderRadius:4, border:`1px solid ${T.cream2}` }}>
            <h4 style={{ fontWeight:400, fontSize:14, marginBottom:24, letterSpacing:".05em", textTransform:"uppercase" }}>Snapshot</h4>
            <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
              <div>
                <div style={{ fontSize:11, color:T.ink3, textTransform:"uppercase", letterSpacing:".05em", fontWeight:500, marginBottom:4 }}>Subject Specialty</div>
                <div style={{ fontSize:14, fontWeight:400, color:T.ink }}>{faculty.subject}</div>
              </div>
              <div style={{ width:"100%", height:1, background:"rgba(0,0,0,0.05)" }} />
              <div>
                <div style={{ fontSize:11, color:T.ink3, textTransform:"uppercase", letterSpacing:".05em", fontWeight:500, marginBottom:4 }}>Teaching Experience</div>
                <div style={{ fontSize:14, fontWeight:400, color:T.ink }}>{faculty.exp}</div>
              </div>
              <div style={{ width:"100%", height:1, background:"rgba(0,0,0,0.05)" }} />
              <div>
                <div style={{ fontSize:11, color:T.ink3, textTransform:"uppercase", letterSpacing:".05em", fontWeight:500, marginBottom:4 }}>Alumni Base</div>
                <div style={{ fontSize:14, fontWeight:400, color:T.ink }}>10,000+ Students Mentored</div>
              </div>
            </div>
            <div style={{ marginTop:32 }}>
               <Btn variant="outline" style={{ width:"100%", justifyContent:"center" }} to="/enroll">Enroll in Batch</Btn>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
