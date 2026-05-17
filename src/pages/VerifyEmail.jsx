import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import T from '../styles/theme';

export default function VerifyEmail() {
  const [status, setStatus] = useState('verifying');
  const location = useLocation();
  const token = new URLSearchParams(location.search).get('token');

  useEffect(() => {
    if (!token) {
      setStatus('error');
      return;
    }

    fetch('http://localhost:5000/api/auth/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
           setStatus('success');
           // Optionally auto-login here if needed
           localStorage.setItem('apex_token', data.token);
           localStorage.setItem('apex_user', JSON.stringify(data.user));
        } else {
           setStatus('error');
        }
      })
      .catch(() => setStatus('error'));
  }, [token]);

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f8fafc" }}>
      <div style={{ background: "#fff", padding: 40, borderRadius: 16, boxShadow: "0 4px 24px rgba(0,0,0,0.04)", textAlign: "center", maxWidth: 400, width: "100%" }}>
        {status === 'verifying' && (
          <>
            <div style={{ fontSize: 40, marginBottom: 16 }}>⏳</div>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: T.ink, marginBottom: 8 }}>Verifying Email</h2>
            <p style={{ color: T.ink2 }}>Please wait while we verify your account...</p>
          </>
        )}

        {status === 'success' && (
          <>
            <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: T.ink, marginBottom: 8 }}>Email Verified!</h2>
            <p style={{ color: T.ink2, marginBottom: 24 }}>Your email has been successfully verified. Your account is now fully active.</p>
            <Link to="/dashboard" style={{ display: "inline-block", padding: "12px 24px", background: T.orange, color: "#fff", textDecoration: "none", borderRadius: 8, fontWeight: 600 }}>
              Go to Dashboard
            </Link>
          </>
        )}

        {status === 'error' && (
          <>
            <div style={{ fontSize: 48, marginBottom: 16 }}>❌</div>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: T.ink, marginBottom: 8 }}>Verification Failed</h2>
            <p style={{ color: T.ink2, marginBottom: 24 }}>The verification link is invalid or has expired.</p>
            <Link to="/login" style={{ display: "inline-block", padding: "12px 24px", background: "#f1f5f9", color: T.ink, textDecoration: "none", borderRadius: 8, fontWeight: 600 }}>
              Return to Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
