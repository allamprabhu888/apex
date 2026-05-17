import React, { useEffect, useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import T from '../../styles/theme';

export default function DashboardLayout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('apex_token');
    const userData = localStorage.getItem('apex_user');
    if (!token || !userData) {
      navigate('/login');
    } else {
      setUser(JSON.parse(userData));
    }
  }, [navigate]);

  if (!user) return null;

  const nav = [
    { name: "Overview", path: "/dashboard", icon: "📊" },
    { name: "Video Lectures", path: "/dashboard/videos", icon: "🎥" },
    { name: "Live Classes", path: "/dashboard/live", icon: "🔴" },
    { name: "Tests & Quizzes", path: "/dashboard/tests", icon: "📝" },
    { name: "Assignments", path: "/dashboard/assignments", icon: "📁" },
    { name: "Discussion Forum", path: "/dashboard/forum", icon: "💬" },
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f8fafc", fontFamily: "Inter, sans-serif" }}>
      {/* Sidebar */}
      <div style={{ width: 280, background: "#fff", borderRight: `1px solid ${T.cream2}`, display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "24px 32px", borderBottom: `1px solid ${T.cream2}` }}>
          <Link to="/" style={{ textDecoration: "none", color: T.ink, fontSize: 22, fontWeight: 800, letterSpacing: "-0.02em" }}>
            Apex<span style={{ color: T.orange }}>Portal</span>
          </Link>
        </div>
        
        <div style={{ padding: "24px 16px", flex: 1 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: T.ink3, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12, paddingLeft: 16 }}>Menu</div>
          {nav.map(n => {
            const active = pathname === n.path || (pathname.startsWith(n.path) && n.path !== "/dashboard");
            return (
              <Link key={n.name} to={n.path} style={{
                display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", borderRadius: 12,
                textDecoration: "none", color: active ? "#fff" : T.ink2, fontWeight: active ? 600 : 500,
                background: active ? T.orange : "transparent", marginBottom: 4, transition: "all .2s"
              }}>
                <span style={{ fontSize: 18 }}>{n.icon}</span>
                {n.name}
              </Link>
            )
          })}
        </div>

        <div style={{ padding: 24, borderTop: `1px solid ${T.cream2}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: T.orangeLt, color: T.orange, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: T.ink }}>{user.name}</div>
              <div style={{ fontSize: 12, color: T.ink3 }}>Student Portal</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <header style={{ height: 76, background: "#fff", borderBottom: `1px solid ${T.cream2}`, display: "flex", alignItems: "center", padding: "0 40px", justifyContent: "space-between" }}>
          <div style={{ fontSize: 18, fontWeight: 600, color: T.ink }}>Student Dashboard</div>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <div style={{ padding: "8px 16px", background: "#f1f5f9", borderRadius: 20, fontSize: 13, fontWeight: 600, color: "#475569", display: "flex", alignItems: "center", gap: 8 }}>
              🔥 12 Day Streak!
            </div>
            <div style={{ padding: "8px 16px", background: "#fef3c7", borderRadius: 20, fontSize: 13, fontWeight: 600, color: "#b45309", display: "flex", alignItems: "center", gap: 8 }}>
              🏆 2,450 XP
            </div>
            <button 
              onClick={() => { localStorage.clear(); navigate('/login'); }}
              style={{ padding: "8px 16px", background: "#fee2e2", color: "#dc2626", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", marginLeft: 8 }}
            >
              Logout
            </button>
          </div>
        </header>
        
        <main style={{ flex: 1, padding: 40, overflowY: "auto" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <Outlet context={{ user }} />
          </div>
        </main>
      </div>
    </div>
  );
}
