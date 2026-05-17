import React, { useEffect, useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import T from '../../styles/theme';

export default function AdminLayout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('apex_token');
    const userData = JSON.parse(localStorage.getItem('apex_user') || 'null');
    
    if (!token || !userData || (userData.role !== 'admin' && userData.role !== 'teacher')) {
      navigate('/login?type=admin');
    } else {
      setUser(userData);
    }
  }, [navigate]);

  if (!user) {
    return <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f1f5f9" }}>Loading Operations Center...</div>;
  }

  const nav = [
    { name: "Analytics Dashboard", path: "/admin", icon: "📈" },
    { name: "Content CMS", path: "/admin/cms", icon: "📝" },
    { name: "Student Leads", path: "/admin/leads", icon: "👥" },
    { name: "Automations", path: "/admin/automations", icon: "⚡" },
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f1f5f9", fontFamily: "Inter, sans-serif" }}>
      {/* Sidebar */}
      <div style={{ width: 280, background: "#1e293b", color: "#fff", display: "flex", flexDirection: "column", boxShadow: "4px 0 24px rgba(0,0,0,0.1)", zIndex: 10 }}>
        <div style={{ padding: "24px 32px", borderBottom: `1px solid rgba(255,255,255,0.1)` }}>
          <Link to="/" style={{ textDecoration: "none", color: "#fff", fontSize: 22, fontWeight: 800, letterSpacing: "-0.02em" }}>
            Apex<span style={{ color: T.orange }}>Admin</span>
          </Link>
          <div style={{ fontSize: 11, fontWeight: 600, color: "#94a3b8", marginTop: 4, letterSpacing: "0.05em", textTransform: "uppercase" }}>Operations Center</div>
        </div>
        
        <div style={{ padding: "24px 16px", flex: 1 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12, paddingLeft: 16 }}>Modules</div>
          {nav.map(n => {
            const active = pathname === n.path || (pathname.startsWith(n.path) && n.path !== "/admin");
            // If role is teacher, hide CMS and Automations
            if (user.role === 'teacher' && (n.name === 'Content CMS' || n.name === 'Automations')) return null;

            return (
              <Link key={n.name} to={n.path} style={{
                display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", borderRadius: 8,
                textDecoration: "none", color: active ? "#fff" : "#cbd5e1", fontWeight: active ? 600 : 500,
                background: active ? "rgba(255,255,255,0.1)" : "transparent", marginBottom: 4, transition: "all .2s"
              }} onMouseEnter={e => { if(!active) e.currentTarget.style.background = "rgba(255,255,255,0.05)" }} onMouseLeave={e => { if(!active) e.currentTarget.style.background = "transparent" }}>
                <span style={{ fontSize: 18 }}>{n.icon}</span>
                {n.name}
              </Link>
            )
          })}
        </div>

        <div style={{ padding: 24, borderTop: `1px solid rgba(255,255,255,0.1)` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: 8, background: T.orange, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>{user.name}</div>
              <div style={{ fontSize: 12, color: "#94a3b8", textTransform: "capitalize" }}>{user.role}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <header style={{ height: 76, background: "#fff", borderBottom: `1px solid ${T.cream2}`, display: "flex", alignItems: "center", padding: "0 40px", justifyContent: "space-between", boxShadow: "0 4px 12px rgba(0,0,0,0.02)" }}>
          <div style={{ fontSize: 18, fontWeight: 600, color: T.ink }}>Command Center</div>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <div style={{ padding: "8px 16px", background: "#fef2f2", borderRadius: 20, fontSize: 13, fontWeight: 600, color: "#b91c1c", display: "flex", alignItems: "center", gap: 8 }}>
              🔴 Live Updates Active
            </div>
            <button 
              onClick={() => { localStorage.clear(); navigate('/login'); }}
              style={{ padding: "8px 16px", background: "#f1f5f9", color: "#475569", border: "1px solid #cbd5e1", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all .2s" }}
            >
              Log Out
            </button>
          </div>
        </header>
        
        <main style={{ flex: 1, padding: 40, overflowY: "auto" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <Outlet context={{ user }} />
          </div>
        </main>
      </div>
    </div>
  );
}
