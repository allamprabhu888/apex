import React, { useState, useEffect } from 'react';
import T from '../../styles/theme';

export default function Leads() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/leads')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setLeads(data.leads);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching leads:", err);
        setLoading(false);
      });
  }, []);

  const handleExport = () => {
    alert("Exporting leads to CSV... (Mock Download Started)");
  };

  return (
    <div className="fade-up">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
        <div>
          <h1 style={{ fontSize: 28, fontWeight: 700, color: T.ink, marginBottom: 8 }}>Student Leads</h1>
          <p style={{ color: T.ink2 }}>Manage inquiries and enrollments for your sales team.</p>
        </div>
        <button onClick={handleExport} style={{ padding: "12px 24px", background: "#10b981", color: "#fff", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
          <span>📥</span> Export to Excel / CSV
        </button>
      </div>

      <div style={{ background: "#fff", borderRadius: 16, border: `1px solid ${T.cream2}`, overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr style={{ background: "#f8fafc", borderBottom: `1px solid ${T.cream2}` }}>
              <th style={{ padding: "16px 24px", fontSize: 13, fontWeight: 700, color: T.ink3, textTransform: "uppercase" }}>Lead ID</th>
              <th style={{ padding: "16px 24px", fontSize: 13, fontWeight: 700, color: T.ink3, textTransform: "uppercase" }}>Name</th>
              <th style={{ padding: "16px 24px", fontSize: 13, fontWeight: 700, color: T.ink3, textTransform: "uppercase" }}>Contact Info</th>
              <th style={{ padding: "16px 24px", fontSize: 13, fontWeight: 700, color: T.ink3, textTransform: "uppercase" }}>Course Interest</th>
              <th style={{ padding: "16px 24px", fontSize: 13, fontWeight: 700, color: T.ink3, textTransform: "uppercase" }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan="5" style={{ padding: "16px", textAlign: "center", color: T.ink2 }}>Loading leads...</td></tr>
            ) : leads.length === 0 ? (
              <tr><td colSpan="5" style={{ padding: "16px", textAlign: "center", color: T.ink2 }}>No leads found.</td></tr>
            ) : leads.map((l, i) => (
              <tr key={l.id || i} style={{ borderBottom: i === leads.length-1 ? "none" : `1px solid ${T.cream2}` }}>
                <td style={{ padding: "16px 24px", fontSize: 14, fontWeight: 600, color: T.ink }}>{l.id}</td>
                <td style={{ padding: "16px 24px", fontSize: 14, fontWeight: 600, color: T.ink }}>{l.name}</td>
                <td style={{ padding: "16px 24px", fontSize: 14, color: T.ink2 }}>
                  <div>{l.email}</div>
                  <div style={{ fontSize: 12, color: T.ink3, marginTop: 4 }}>{l.phone}</div>
                </td>
                <td style={{ padding: "16px 24px", fontSize: 14, color: T.ink2 }}>
                  <span style={{ background: "#f1f5f9", padding: "4px 8px", borderRadius: 4, fontSize: 12, fontWeight: 600 }}>{l.course}</span>
                </td>
                <td style={{ padding: "16px 24px", fontSize: 14, color: T.ink2 }}>{new Date(l.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
