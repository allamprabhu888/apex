import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import T from '../styles/theme';
import { Btn, SectionTitle } from '../components/ui';

export default function Login() {
  const [isSign, setIsSign] = useState(false);
  const [form, setForm] = useState({ name:"", email:"", password:"", confirm:"" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle, loading, success
  const navigate = useNavigate();
  const location = useLocation();
  const isAdminLogin = new URLSearchParams(location.search).get('type') === 'admin';

  const validate = () => {
    let err = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(form.email)) {
      err.email = "Please enter a valid email address.";
    }
    
    if (form.password.length < 6) {
      err.password = "Password must be at least 6 characters long.";
    }

    if (isSign) {
      if (form.name.trim().length < 2) err.name = "Please enter your full name.";
      if (form.password !== form.confirm) err.confirm = "Passwords do not match.";
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    
    const endpoint = isSign ? '/api/auth/register' : '/api/auth/login';
    const payload = isSign 
      ? { name: form.name, email: form.email, password: form.password, role: isAdminLogin ? 'admin' : 'student' }
      : { email: form.email, password: form.password };

    fetch(`http://localhost:5000${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        if (isSign) {
          // It's a registration, proceed to login without verification
          setStatus("success");
          setErrors({ general: "" }); // clear errors
        } else {
          // It's a login
          localStorage.setItem('apex_token', data.token);
          localStorage.setItem('apex_user', JSON.stringify(data.user));
          setStatus("success");
          if (data.user.role === 'admin' || data.user.role === 'teacher') {
            navigate('/admin');
          } else {
            navigate('/dashboard');
          }
        }
      } else {
        setStatus("idle");
        setErrors({ general: data.error || "Authentication failed. Please try again." });
      }
    })
    .catch(err => {
      setStatus("idle");
      setErrors({ general: "Server error. Please check if the backend is running." });
    });
  };

  const toggleMode = () => {
    setIsSign(!isSign);
    setErrors({});
    setStatus("idle");
    setForm({ name:"", email:"", password:"", confirm:"" });
  };

  const inp = { width:"100%", padding:"14px 18px", borderRadius:12, border:`1.5px solid ${T.cream2}`,
    fontSize:15, color:T.ink, outline:"none", background:"#fff", transition:"border .2s",
    fontFamily:"DM Sans, sans-serif", marginBottom:4 };

  const ErrorLabel = ({ msg }) => msg ? <div style={{ color:"#e11d48", fontSize:12, fontWeight:500, marginBottom:16, marginTop:2, paddingLeft:4 }}>{msg}</div> : <div style={{marginBottom:16}}/>;

  if (status === "success") {
    return (
      <section style={{ background:`var(--cream, ${T.cream})`, minHeight:"80vh", display:"flex", alignItems:"center", justifyContent:"center" }}>
        <div style={{ background:"var(--white, #fff)", padding:"60px", borderRadius:24, textAlign:"center", maxWidth:440, border:`1px solid var(--cream2, ${T.cream2})` }}>
          <div style={{ fontSize:64, marginBottom:20 }}>✅</div>
          <SectionTitle>Account Created</SectionTitle>
          <p style={{ color:T.ink2, marginTop:16, fontSize:15, lineHeight:1.6, marginBottom:32 }}>
            Welcome to Apex, <b>{form.name}</b>. Your student portal has been successfully generated. You can now log in directly.
          </p>
          <Btn onClick={toggleMode} style={{ width: "100%", justifyContent: "center" }}>Proceed to Login</Btn>
        </div>
      </section>
    );
  }

  return (
    <section style={{ background:`var(--cream, ${T.cream})`, minHeight:"80vh", display:"flex", padding:"80px 24px",
      alignItems:"center", justifyContent:"center", position:"relative" }}>
      <div style={{ position:"absolute", inset:0, pointerEvents:"none",
        backgroundImage:`radial-gradient(circle at 50% 0%, rgba(232,83,10,.05) 0%, transparent 60%)` }} />

      <div className="fade-up" style={{ background:"var(--white, #fff)", borderRadius:24, padding:"48px 40px", 
        width:"100%", maxWidth:480, boxShadow:"0 20px 60px rgba(0,0,0,.08)", zIndex:1,
        border:`1px solid var(--cream2, ${T.cream2})` }}>
        
        <div style={{ textAlign:"center", marginBottom:32 }}>
          <div style={{ width:64, height:64, borderRadius:"50%", background:`var(--orangeLt, ${T.orangeLt})`,
            display:"flex", alignItems:"center", justifyContent:"center", fontSize:28,
            margin:"0 auto 20px" }}>{isAdminLogin ? "👔" : "🧑‍🎓"}</div>
          <SectionTitle>
             {isSign ? (isAdminLogin ? "Create Staff Account" : "Create Account") : (isAdminLogin ? "Staff / Admin Login" : "Student Login")}
          </SectionTitle>
          <p style={{ color:T.ink3, marginTop:8, fontSize:15 }}>
            {isSign ? (isAdminLogin ? "Register to access the staff portal." : "Register to unlock premium courses and study tools.") : (isAdminLogin ? "Access your command center and manage operations." : "Access your dashboard, live classes & test series.")}
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          {isSign && (
            <>
              <input placeholder="Full Name" type="text"
                value={form.name} onChange={e => setForm({...form,name:e.target.value})}
                style={{...inp, borderColor: errors.name ? "#e11d48" : T.cream2}} />
              <ErrorLabel msg={errors.name} />
            </>
          )}

          <input placeholder="Email Address" type="email"
            value={form.email} onChange={e => setForm({...form,email:e.target.value})}
             style={{...inp, borderColor: errors.email ? "#e11d48" : T.cream2}} />
          <ErrorLabel msg={errors.email} />
            
          <input placeholder="Password" type="password"
            value={form.password} onChange={e => setForm({...form,password:e.target.value})}
             style={{...inp, borderColor: errors.password ? "#e11d48" : T.cream2}} />
          <ErrorLabel msg={errors.password} />

          {isSign && (
             <>
              <input placeholder="Confirm Password" type="password"
                value={form.confirm} onChange={e => setForm({...form,confirm:e.target.value})}
                 style={{...inp, borderColor: errors.confirm ? "#e11d48" : T.cream2}} />
              <ErrorLabel msg={errors.confirm} />
             </>
          )}
          
          {!isSign && (
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:28, marginTop: -8 }}>
              <label style={{ display:"flex", alignItems:"center", gap:8, fontSize:14, color:T.ink2, cursor:"pointer" }}>
                <input type="checkbox" style={{ accentColor:T.orange, width:16, height:16 }} /> Remember me
              </label>
              <button type="button" style={{ background:"none", border:"none", fontSize:14, color:T.orange, fontWeight:600, cursor:"pointer" }}>Forgot Password?</button>
            </div>
          )}

          <Btn style={{ width:"100%", justifyContent:"center", fontSize:16, padding:"16px", opacity: status==="loading"?0.7:1 }}>
            {status === "loading" ? "Processing..." : (isSign ? (isAdminLogin ? "Register Staff" : "Create Student Profile") : (isAdminLogin ? "Login to Admin Portal" : "Login to Dashboard"))}
          </Btn>

          {errors.general && (
            <div className="fade-up" style={{ marginTop:20, padding:"12px", borderRadius:8, background:"#fee2e2", color:"#be123c", fontSize:14, textAlign:"center", fontWeight:500, border:"1px solid #fecdd3" }}>
              {errors.general}
            </div>
          )}
        </form>

        <div style={{ marginTop:32, textAlign:"center", fontSize:14, color:T.ink3 }}>
          {isSign ? "Already have an account? " : "Don't have an account? "}
          <button type="button" onClick={toggleMode} style={{ background:"none", border:"none", color:T.orange, fontWeight:600, cursor:"pointer", fontSize:14 }}>
            {isSign ? "Log In Instead" : "Sign up here"}
          </button>
        </div>
      </div>
    </section>
  );
}
