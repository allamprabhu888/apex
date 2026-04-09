import React from 'react';
import { Link } from 'react-router-dom';
import T from '../../styles/theme';

export const SectionLabel = ({ children }) => (
  <div style={{ display:"inline-flex", alignItems:"center", gap:8, fontSize:11, fontWeight:500,
    letterSpacing:".15em", textTransform:"uppercase", color:T.orange, marginBottom:14 }}>
    <span style={{ width:20, height:1, background:T.orange, display:"block" }} />
    {children}
  </div>
);

export const SectionTitle = ({ children, light }) => (
  <h2 className="serif" style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:400,
    lineHeight:1.15, color: light ? "#fff" : T.ink, letterSpacing:"-0.02em" }}>
    {children}
  </h2>
);

export const Btn = ({ children, variant="primary", style={}, onClick, href, to, className }) => {
  const base = { display:"inline-flex", alignItems:"center", justifyContent:"center", gap:8,
    padding:"10px 22px", borderRadius:4, fontSize:14, fontWeight:400, cursor:"pointer",
    border:"none", transition:"all .3s ease", textDecoration:"none", letterSpacing:".03em", ...style };
  
  const variants = {
    primary: { background:T.orange, color:"#fff" },
    outline: { background:"transparent", color:T.ink, border:`1px solid ${T.ink}` },
    outlineWhite: { background:"transparent", color:"#fff", border:"1px solid rgba(255,255,255,.45)" },
    teal: { background:T.teal, color:"#fff" },
    white: { background:"#fff", color:T.orange, fontWeight:500 },
  };
  
  if (to) {
    return (
      <Link to={to} className={className} style={{...base,...variants[variant]}} onClick={onClick}>
        {children}
      </Link>
    );
  }
  
  const Tag = href ? "a" : "button";
  return (
    <Tag href={href} className={className} style={{...base,...variants[variant]}} onClick={onClick}>
      {children}
    </Tag>
  );
};
