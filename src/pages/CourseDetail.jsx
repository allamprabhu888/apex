import React from 'react';
import { useParams } from 'react-router-dom';
import T from '../styles/theme';
import { Btn } from '../components/ui';
import { COURSES } from '../data/constants';

export default function CourseDetail() {
  const { id } = useParams();
  
  const course = COURSES.find(c => c.id === id);

  if (!course) {
    return (
      <section style={{ minHeight:"60vh", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", background:T.cream }}>
        <h2 style={{ fontSize:"2rem", marginBottom:16, fontWeight:400 }} className="serif">Course Not Found</h2>
        <Btn to="/">Return to Home</Btn>
      </section>
    );
  }

  return (
    <section style={{ background:T.white, minHeight:"80vh" }}>
      {/* Header Banner */}
      <div style={{ padding:"80px 24px", background:`linear-gradient(135deg, ${course.color}22 0%, ${course.light} 100%)`, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, background:`linear-gradient(135deg, ${course.color} 0%, transparent 100%)`, opacity: 0.05 }} />
        <div style={{ maxWidth:1000, margin:"0 auto", display:"flex", alignItems:"center", gap:40 }}>
          
          <div style={{ flex: 1 }}>
            <div style={{ display:"inline-flex", padding:"4px 12px", border:`1.5px solid ${course.color}55`, background:"#fff", borderRadius:50, fontSize:12, fontWeight:600, color:course.color, marginBottom:20 }}>
              {course.tag} Program
            </div>
            <h1 className="serif" style={{ fontSize:"clamp(2.5rem, 5vw, 4rem)", fontWeight:400, color:T.ink, lineHeight:1.1, marginBottom: 20 }}>
              {course.name}
            </h1>
            <p style={{ color:T.ink2, fontSize:16, lineHeight:1.7, marginBottom:32, maxWidth:600, fontWeight:300 }}>
              {course.description}
            </p>
            <div style={{ display:"flex", gap:16, flexWrap:"wrap" }}>
              <Btn to="/enroll" style={{ padding:"14px 32px" }}>Enroll Now</Btn>
              <Btn to="/book-demo" variant="outline" style={{ padding:"14px 32px", borderColor: course.color, color: course.color }} 
                   onMouseEnter={e => {e.target.style.background = course.color; e.target.style.color = '#fff';}}
                   onMouseLeave={e => {e.target.style.background = 'transparent'; e.target.style.color = course.color;}}>
                Book Demo
              </Btn>
            </div>
          </div>
          
          <div style={{ display:{xs:'none', md:'block'}, fontSize:180, opacity:0.8 }}>
            {course.emoji}
          </div>

        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth:1000, margin:"0 auto", padding:"80px 24px", display:"grid", gridTemplateColumns:"2fr 1fr", gap:64 }}>
        
        <div>
          <h3 className="serif" style={{ fontSize:"1.8rem", fontWeight:400, marginBottom:24 }}>Course Highlights</h3>
          <p style={{ color:T.ink2, fontSize:15, lineHeight:1.8, marginBottom:40, fontWeight:300 }}>
            Our {course.name} program provides an optimized, rigorous academic schedule. From expertly drafted study material designed by top national rankers to weekly predictive test analysis, we ensure you stay ahead of the curve.
          </p>

          <h3 className="serif" style={{ fontSize:"1.4rem", fontWeight:400, marginBottom:20 }}>What's Included</h3>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginBottom:40 }}>
            {course.features.map((feat, i) => (
              <div key={i} style={{ display:"flex", gap:16, alignItems:"center", padding:"16px", background:"var(--cream, #f7f3ed)", borderRadius:8, border:`1px solid var(--cream2, #ede8e0)` }}>
                <span style={{ width:32, height:32, borderRadius:8, background:course.light, color:course.color, display:"flex", alignItems:"center", justifyContent:"center", fontSize:14, fontWeight:700 }}>✓</span> 
                <span style={{ fontSize:14, color:T.ink2, fontWeight:500 }}>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div style={{ background: course.color, padding:32, borderRadius:4, color:"#fff", boxShadow:`0 20px 40px ${course.color}33` }}>
            <h4 style={{ fontWeight:400, fontSize:14, marginBottom:24, letterSpacing:".05em", textTransform:"uppercase" }}>Program Details</h4>
            <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
              <div>
                <div style={{ fontSize:11, color:"rgba(255,255,255,0.7)", textTransform:"uppercase", letterSpacing:".05em", fontWeight:500, marginBottom:4 }}>Duration</div>
                <div style={{ fontSize:14, fontWeight:500 }}>{course.duration}</div>
              </div>
              <div style={{ width:"100%", height:1, background:"rgba(255,255,255,0.2)" }} />
              <div>
                <div style={{ fontSize:11, color:"rgba(255,255,255,0.7)", textTransform:"uppercase", letterSpacing:".05em", fontWeight:500, marginBottom:4 }}>Available Batches</div>
                <div style={{ display:"flex", flexDirection:"column", gap:6, marginTop:8 }}>
                  {course.programs.map((p,i) => (
                    <div key={i} style={{ fontSize:13, fontWeight:400, display:"flex", alignItems:"center", gap:8 }}>
                      <span style={{ width:4, height:4, borderRadius:"50%", background:"#fff" }}/> {p}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ marginTop:32 }}>
               <Btn variant="white" style={{ width:"100%", justifyContent:"center" }} to="/enroll">Secure Your Seat</Btn>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
