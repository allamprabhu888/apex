import React from 'react';
import T from '../../styles/theme';

export default function Footer() {
  return (
    <footer style={{ background:T.ink, color:"rgba(255,255,255,.7)", padding:"60px 0 28px" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px" }}>
        <div className="footer-grid" style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:40, marginBottom:48 }}>
          <div>
            <div className="serif" style={{ fontSize:"1.5rem", fontWeight:900, color:"#fff", marginBottom:12 }}>
              Apex<span style={{ color:T.orange }}>Academy</span>
            </div>
            <p style={{ fontSize:14, lineHeight:1.75, maxWidth:280 }}>
              Shaping Futures, Building Careers. India's premier coaching institute for JEE, NEET, UPSC & Foundation.
            </p>
            <div style={{ display:"flex", gap:10, marginTop:22 }}>
              {[["▶","YouTube"],["📸","Instagram"],["👥","Facebook"]].map(([icon,lbl]) => (
                <a key={lbl} href="#" title={lbl}
                  style={{ width:38, height:38, borderRadius:10, border:"1px solid rgba(255,255,255,.15)",
                    display:"flex", alignItems:"center", justifyContent:"center", fontSize:16,
                    color:"rgba(255,255,255,.7)", transition:"all .18s", textDecoration:"none" }}
                  onMouseEnter={e => { e.currentTarget.style.background=T.orange; e.currentTarget.style.borderColor=T.orange; }}
                  onMouseLeave={e => { e.currentTarget.style.background=""; e.currentTarget.style.borderColor="rgba(255,255,255,.15)"; }}>
                  {icon}
                </a>
              ))}
            </div>
          </div>
          {[
            ["Quick Links", ["Home","Courses","Results","Faculty","About Us","Contact"]],
            ["Programs", ["JEE Main & Advanced","NEET UG","UPSC Foundation","Class 8-10"]],
            ["Policies", ["Privacy Policy","Terms of Use","Refund Policy","Cookie Policy"]],
          ].map(([heading, links]) => (
            <div key={heading}>
              <h4 style={{ color:"#fff", fontWeight:600, fontSize:14, marginBottom:16,
                letterSpacing:".06em", textTransform:"uppercase" }}>{heading}</h4>
              <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:10 }}>
                {links.map(l => (
                  <li key={l}><a href="#" style={{ fontSize:14, color:"rgba(255,255,255,.55)",
                    transition:"color .18s", textDecoration:"none" }}
                    onMouseEnter={e => e.target.style.color="#fff"}
                    onMouseLeave={e => e.target.style.color="rgba(255,255,255,.55)"}>{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop:"1px solid rgba(255,255,255,.08)", paddingTop:24,
          display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:12 }}>
          <span style={{ fontSize:13, color:"rgba(255,255,255,.4)" }}>© 2026 Apex Academy. All rights reserved.</span>
          <span style={{ fontSize:13, color:"rgba(255,255,255,.3)" }}>Designed with ❤️ for India's future toppers</span>
        </div>
      </div>
    </footer>
  );
}
