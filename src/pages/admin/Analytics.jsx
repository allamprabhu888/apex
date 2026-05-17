import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import T from '../../styles/theme';

export default function Analytics() {
  const [stats, setStats] = useState({ revenue: 0, students: 0, enrollments: 0 });

  useEffect(() => {
    fetch('http://localhost:5000/api/stats')
      .then(res => res.json())
      .then(data => {
        if(data.success) {
          setStats(data.stats);
        }
      });
  }, []);

  const data = [
    { name: 'Mon', revenue: 4000, students: 24 },
    { name: 'Tue', revenue: 3000, students: 18 },
    { name: 'Wed', revenue: 6000, students: 35 },
    { name: 'Thu', revenue: 8500, students: 48 },
    { name: 'Fri', revenue: 5000, students: 30 },
    { name: 'Sat', revenue: 9500, students: 55 },
    { name: 'Sun', revenue: 11000, students: 65 },
  ];

  return (
    <div className="fade-up">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
        <div>
          <h1 style={{ fontSize: 28, fontWeight: 700, color: T.ink, marginBottom: 8 }}>Analytics & Revenue</h1>
          <p style={{ color: T.ink2 }}>Real-time business performance overview.</p>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <select style={{ padding: "10px 16px", borderRadius: 8, border: `1px solid ${T.cream2}`, outline: "none", fontWeight: 600, color: T.ink }}>
             <option>Last 7 Days</option>
             <option>This Month</option>
             <option>All Time</option>
          </select>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 32 }}>
        {[
          { label: "Total Revenue", val: `₹ ${stats.revenue.toLocaleString()}`, up: "+14%", icon: "💰" },
          { label: "New Enrollments", val: stats.enrollments, up: "+22%", icon: "👨‍🎓" },
          { label: "Active Students", val: stats.students, up: "+5%", icon: "🔄" },
        ].map((s, i) => (
          <div key={i} style={{ background: "#fff", padding: 24, borderRadius: 16, border: `1px solid ${T.cream2}`, boxShadow: "0 4px 12px rgba(0,0,0,0.02)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
               <div style={{ width: 48, height: 48, borderRadius: 12, background: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>{s.icon}</div>
               <div style={{ fontSize: 13, fontWeight: 700, color: "#10b981", background: "#ecfdf5", padding: "4px 8px", borderRadius: 20 }}>{s.up}</div>
            </div>
            <div style={{ fontSize: 32, fontWeight: 700, color: T.ink, marginBottom: 4 }}>{s.val}</div>
            <div style={{ fontSize: 14, color: T.ink3, fontWeight: 500 }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 24 }}>
        <div style={{ background: "#fff", padding: 24, borderRadius: 16, border: `1px solid ${T.cream2}` }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 24, color: T.ink }}>Revenue Trend</h2>
          <div style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={T.orange} stopOpacity={0.3}/>
                    <stop offset="95%" stopColor={T.orange} stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: "#94a3b8", fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: "#94a3b8", fontSize: 12}} />
                <Tooltip contentStyle={{ borderRadius: 8, border: "none", boxShadow: "0 8px 24px rgba(0,0,0,0.12)", fontWeight: 600 }} />
                <Area type="monotone" dataKey="revenue" stroke={T.orange} strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div style={{ background: "#fff", padding: 24, borderRadius: 16, border: `1px solid ${T.cream2}` }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 24, color: T.ink }}>New Enrollments</h2>
          <div style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: "#94a3b8", fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: "#94a3b8", fontSize: 12}} />
                <Tooltip cursor={{fill: "#f8fafc"}} contentStyle={{ borderRadius: 8, border: "none", boxShadow: "0 8px 24px rgba(0,0,0,0.12)", fontWeight: 600 }} />
                <Bar dataKey="students" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
