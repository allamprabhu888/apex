import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import T from '../../styles/theme';
import { Btn } from '../ui';
import { COURSES, FACULTY } from '../../data/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);
  
  // Search State
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState({ courses: [], faculty: [] });

  // Handle Scroll
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Handle Theme
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDark]);

  // Handle Routing reset
  useEffect(() => {
    setMobileOpen(false);
    setSearchQuery(""); // clear search on route change
  }, [location.pathname]);

  // Handle Search Filtering
  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const q = searchQuery.toLowerCase();
      setSearchResults({
        courses: COURSES.filter(c => c.name.toLowerCase().includes(q) || c.tag.toLowerCase().includes(q)),
        faculty: FACULTY.filter(f => f.name.toLowerCase().includes(q) || f.subject.toLowerCase().includes(q)),
      });
    } else {
      setSearchResults({ courses: [], faculty: [] });
    }
  }, [searchQuery]);

  const links = [
    { label: "Home", path: "/" },
    { label: "Courses", path: "/" },
    { label: "Results", path: "/results" },
    { label: "Faculty", path: "/" },
    { label: "About Us", path: "/" },
    { label: "Contact", path: "/" }
  ];

  return (
    <>
      {/* Primary Top Navbar */}
      <nav style={{ 
        position:"sticky", top:0, zIndex:200,
        background: scrolled ? "var(--header-bg, rgba(255,255,255,.97))" : "var(--white, #fff)",
        backdropFilter:"blur(12px)", borderBottom:`1px solid var(--cream2, ${T.cream2})`,
        transition:"all .3s" }}>
        
        <div style={{ maxWidth:1300, margin:"0 auto", padding:"0 24px",
          display:"flex", alignItems:"center", gap:20, height:76 }}>

          {/* Logo Left */}
          <Link to="/" style={{ textDecoration: "none", display:"flex", flexDirection:"column", marginRight:"auto" }}>
            <div className="serif" style={{ fontSize:22, fontWeight:700, color:T.ink, lineHeight:1.1 }}>
              Apex<span style={{ color:T.orange }}>Academy</span>
            </div>
            <div style={{ fontSize:10, color:T.ink3, fontWeight:500, letterSpacing:".02em", marginTop:2 }}>
              Shaping Futures, Building Careers
            </div>
          </Link>

          {/* Center Links */}
          <ul className="nav-desktop" style={{ display:"flex", gap:2, listStyle:"none", marginRight:"auto" }}>
            {links.map((l, i) => {
              const active = location.pathname === l.path && l.label !== "Courses" && l.label !== "Faculty" && l.label !== "About Us" && l.label !== "Contact"; 
              return (
                <li key={i}>
                  <Link to={l.path} style={{ padding:"6px 12px", borderRadius:7, fontSize:13, fontWeight:active ? 600 : 500,
                    color: active ? T.orange : T.ink2, display:"block", transition:"all .2s", textDecoration: "none",
                    background: active ? T.orangeLt : "transparent" }}
                    onMouseEnter={e => { if(!active) e.target.style.color = T.orange; }}
                    onMouseLeave={e => { if(!active) e.target.style.color = T.ink2; }}>
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right Section */}
          <div className="nav-desktop" style={{ display:"flex", alignItems:"center", gap:16 }}>
            
            <button onClick={() => setIsDark(!isDark)} style={{ background:"none", border:"none", fontSize:18, cursor:"pointer", padding:"6px", color:T.ink, borderRadius:"50%", transition:"all .2s", display:"flex", alignItems:"center", justifyContent:"center" }} title="Toggle Theme" onMouseEnter={e => e.target.style.background = T.cream} onMouseLeave={e => e.target.style.background = "transparent"}>
              {isDark ? "☀️" : "🌙"}
            </button>

            <span style={{ width: 1, height: 24, background: T.cream2 }}></span>

            <a href="tel:+919876543210" style={{ display:"flex", alignItems:"center", gap:6, fontSize:13, fontWeight:600, color:T.ink, textDecoration:"none" }} onMouseEnter={e => e.target.style.color=T.orange} onMouseLeave={e => e.target.style.color=T.ink}>
              📞 Call Now
            </a>

            <span style={{ width: 1, height: 24, background: T.cream2 }}></span>

            <Link to="/login" style={{ fontSize:13, fontWeight:500, color:T.ink2,
              padding:"8px 16px", border:`1px solid ${T.cream2}`, borderRadius:6, textDecoration:"none", transition:"all .2s" }}
              onMouseEnter={e => { e.target.style.borderColor = T.orange; e.target.style.color = T.orange; }}
              onMouseLeave={e => { e.target.style.borderColor = T.cream2; e.target.style.color = T.ink2; }}>
              Student Login
            </Link>
            
            <Btn to="/enroll" style={{ padding:"10px 24px", fontSize:13 }}>Enroll Now</Btn>
          </div>

          <div className="nav-mobile-toggle" style={{ display:"none", alignItems:"center", gap:12 }}>
            <button onClick={() => setIsDark(!isDark)} style={{ background:"none", border:"none", fontSize:18, cursor:"pointer", color:T.ink }}>
              {isDark ? "☀️" : "🌙"}
            </button>
            <button style={{ background:"none", border:"none", fontSize:26, cursor:"pointer", color:T.ink }}
              onClick={() => setMobileOpen(o => !o)}>
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div style={{ background:T.white, borderTop:`1px solid ${T.cream2}`, padding:"16px 24px" }}>
            {links.map((l, i) => {
              const active = location.pathname === l.path && l.label !== "Courses" && l.label !== "Faculty" && l.label !== "About Us" && l.label !== "Contact";
              return (
                <Link key={i} to={l.path} style={{ display:"block", padding:"12px 16px", fontSize:15,
                  fontWeight:active ? 600 : 500, color: active ? T.orange : T.ink2, 
                  borderBottom:`1px solid ${T.cream2}`, textDecoration:"none",
                  background: active ? T.orangeLt : "transparent", borderRadius: active ? 6 : 0 }}>
                  {l.label}
                </Link>
              )
            })}
            
            <div style={{ padding:"16px 16px 0", display:"flex", justifyContent:"flex-end", fontSize:14, fontWeight:500 }}>
               <a href="tel:+919876543210" style={{ color:T.ink, textDecoration:"none", fontWeight:600 }}>📞 Call Now</a>
            </div>

            <div style={{ paddingTop:20, display:"flex", gap:10 }}>
              <Btn variant="outline" to="/login" style={{ flex:1, padding:"10px 12px", fontSize:14 }}>Student Login</Btn>
              <Btn to="/enroll" style={{ flex:1, padding:"10px 12px", fontSize:14 }}>Enroll Now</Btn>
            </div>
          </div>
        )}
      </nav>

      {/* Secondary Search Bar Row */}
      <div style={{ background: "var(--cream, #f7f3ed)", padding: "12px 24px", borderBottom: `1px solid var(--cream2, ${T.cream2})`, boxShadow: scrolled ? "0 4px 16px rgba(0,0,0,.04)" : "none" }}>
         <div style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}>
           <input 
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="🔍 Search for courses, subjects, or faculty mentors..."
              style={{ width: "100%", padding: "12px 24px", borderRadius: 50, border: `1.5px solid ${searchQuery ? T.orange : T.cream2}`, background: "var(--white, #fff)", color: T.ink, fontSize: 14, outline: "none", transition: "border .2s", fontFamily: "'DM Sans', sans-serif" }}
           />
           
           {/* Functional Search Autocomplete Dropdown */}
           {searchQuery.trim().length > 1 && (
             <div className="fade-up" style={{ position: "absolute", top: "100%", left: 0, right: 0, marginTop: 12, background: "var(--white, #fff)", borderRadius: 16, border: `1px solid var(--cream2, ${T.cream2})`, boxShadow: "0 24px 64px rgba(0,0,0,.15)", zIndex: 999, overflow: "hidden", maxHeight: 400, overflowY: "auto" }}>
                
                {searchResults.courses.length === 0 && searchResults.faculty.length === 0 ? (
                  <div style={{ padding: "32px", textAlign: "center", color: T.ink3, fontSize: 14 }}>
                    No results found for "<b style={{color:T.ink}}>{searchQuery}</b>"
                  </div>
                ) : (
                  <div style={{ padding: 12 }}>
                    {searchResults.courses.length > 0 && (
                      <div style={{ marginBottom: 16 }}>
                         <div style={{ padding: "8px 12px", fontSize: 11, fontWeight: 700, color: T.ink3, textTransform: "uppercase", letterSpacing: ".05em" }}>Courses & Programs</div>
                         {searchResults.courses.map(c => (
                           <Link key={c.id} to={`/course/${c.id}`} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px", borderRadius: 8, textDecoration: "none", transition: "background .2s" }} onMouseEnter={e => e.currentTarget.style.background = T.cream} onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                             <div style={{ width: 40, height: 40, borderRadius: 8, background: c.light, color: c.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{c.emoji}</div>
                             <div>
                               <div style={{ fontWeight: 600, color: T.ink, fontSize: 15, marginBottom: 2 }}>{c.name}</div>
                               <div style={{ fontSize: 12, color: T.ink3 }}>{c.tag}</div>
                             </div>
                           </Link>
                         ))}
                      </div>
                    )}

                    {searchResults.faculty.length > 0 && (
                      <div>
                         <div style={{ padding: "8px 12px", fontSize: 11, fontWeight: 700, color: T.ink3, textTransform: "uppercase", letterSpacing: ".05em" }}>Faculty Mentors</div>
                         {searchResults.faculty.map(f => {
                           const slug = f.name.toLowerCase().replace(/[\s.]+/g, '-');
                           return (
                             <Link key={f.name} to={`/faculty/${slug}`} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px", borderRadius: 8, textDecoration: "none", transition: "background .2s" }} onMouseEnter={e => e.currentTarget.style.background = T.cream} onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                               {f.img ? (
                                 <img src={f.img} alt={f.name} style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover", filter: "grayscale(20%)" }} />
                               ) : (
                                 <div style={{ width: 40, height: 40, borderRadius: "50%", background: T.cream2, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }} className="serif">{f.initials}</div>
                               )}
                               <div>
                                 <div style={{ fontWeight: 600, color: T.ink, fontSize: 15, marginBottom: 2 }}>{f.name}</div>
                                 <div style={{ fontSize: 12, color: T.ink3, display:"flex", alignItems:"center", gap:6 }}>
                                    <span style={{ color:T.orange }}>{f.subject}</span> • {f.exp}
                                 </div>
                               </div>
                             </Link>
                           );
                         })}
                      </div>
                    )}
                  </div>
                )}

             </div>
           )}
         </div>
      </div>
    </>
  );
}
