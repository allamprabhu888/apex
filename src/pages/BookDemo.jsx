import React, { useState } from 'react';
import T from '../styles/theme';
import { Btn, SectionTitle } from '../components/ui';

export default function BookDemo() {
  const [complete, setComplete] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleBook = (e) => {
    e.preventDefault();
    if(selectedSlot) setComplete(true);
  };

  const inp = { width:"100%", padding:"14px 18px", borderRadius:12, border:`1.5px solid ${T.cream2}`,
    fontSize:15, color:T.ink, outline:"none", background:"#fff", transition:"border .2s",
    fontFamily:"DM Sans, sans-serif", marginBottom:16 };

  const slots = ["Tomorrow, 10:00 AM", "Tomorrow, 4:00 PM", "Saturday, 11:00 AM", "Sunday, 2:00 PM"];

  if (complete) {
    return (
      <section style={{ minHeight:"80vh", background:T.cream, display:"flex", alignItems:"center", justifyContent:"center" }}>
        <div style={{ background:"#fff", padding:"60px", borderRadius:32, textAlign:"center", maxWidth:500, border:`1px solid ${T.cream2}` }}>
          <div style={{ fontSize:72, marginBottom:20 }}>🎥</div>
          <SectionTitle>Demo Scheduled!</SectionTitle>
          <p style={{ color:T.ink2, marginTop:16, fontSize:16, lineHeight:1.6, marginBottom:32 }}>
            Your live demo class is scheduled for <b>{selectedSlot}</b>. A join link has been sent to your email. Get ready to experience world-class teaching!
          </p>
          <Btn to="/">Back to Home</Btn>
        </div>
      </section>
    );
  }

  return (
    <section style={{ background:T.cream, minHeight:"80vh", padding:"80px 24px" }}>
      <div style={{ maxWidth:900, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:48 }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:9,
            background:"rgba(10,110,92,.14)", borderRadius:50, padding:"6px 18px", marginBottom:20 }}>
            <span style={{ fontSize:13, color:T.teal, fontWeight:600 }}>100% Free Live Session</span>
          </div>
          <SectionTitle>Book Your <em style={{ fontStyle:"italic", color:T.teal }}>Free Demo Class</em></SectionTitle>
          <p style={{ color:T.ink2, fontSize:17, marginTop:16, maxWidth:600, margin:"16px auto 0" }}>
            Experience our interactive teaching methodology firsthand. Choose a subject and time slot that works for you.
          </p>
        </div>

        <div style={{ background:"#fff", borderRadius:24, padding:"48px", boxShadow:"0 20px 60px rgba(0,0,0,.04)", border:`1px solid ${T.cream2}` }}>
          <form onSubmit={handleBook}>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:40 }}>
              
              <div>
                <h4 style={{ fontWeight:700, fontSize:16, marginBottom:20 }}>Your Details</h4>
                <input required placeholder="Student Name" type="text" style={inp} onFocus={e=>e.target.style.borderColor=T.orange} onBlur={e=>e.target.style.borderColor=T.cream2}/>
                <input required placeholder="Phone Number" type="tel" style={inp} onFocus={e=>e.target.style.borderColor=T.orange} onBlur={e=>e.target.style.borderColor=T.cream2}/>
                <select required style={inp} onFocus={e=>e.target.style.borderColor=T.orange} onBlur={e=>e.target.style.borderColor=T.cream2}>
                  <option value="">Select Subject for Demo</option>
                  <option value="physics">Physics (JEE/NEET)</option>
                  <option value="chemistry">Chemistry (JEE/NEET)</option>
                  <option value="math">Mathematics (JEE)</option>
                  <option value="bio">Biology (NEET)</option>
                </select>
              </div>

              <div>
                <h4 style={{ fontWeight:700, fontSize:16, marginBottom:20 }}>Available Slots</h4>
                <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                  {slots.map(s => (
                    <div key={s} onClick={() => setSelectedSlot(s)}
                      style={{ padding:"16px 20px", borderRadius:12, border:`2px solid ${selectedSlot===s ? T.teal : T.cream2}`,
                        background: selectedSlot===s ? T.tealLt : "#fff", cursor:"pointer",
                        display:"flex", alignItems:"center", gap:12, transition:"all .2s" }}>
                      <div style={{ width:20, height:20, borderRadius:"50%", border:`2px solid ${T.teal}`,
                        background: selectedSlot===s ? T.teal : "transparent", display:"flex", alignItems:"center", justifyContent:"center" }}>
                        {selectedSlot===s && <span style={{ width:8, height:8, borderRadius:"50%", background:"#fff" }}/>}
                      </div>
                      <span style={{ fontWeight:600, fontSize:15, color:T.ink }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
            
            <div style={{ marginTop:40, paddingTop:32, borderTop:`1px solid ${T.cream2}`, display:"flex", justifyContent:"flex-end" }}>
              <Btn variant="teal" style={{ padding:"16px 36px", fontSize:16, cursor: selectedSlot ? "pointer" : "not-allowed", opacity: selectedSlot ? 1 : 0.6 }}>
                Confirm Demo Booking
              </Btn>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
