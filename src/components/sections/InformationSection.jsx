import React, { useState, useEffect } from 'react';
import T from '../../styles/theme';
import { SectionLabel, SectionTitle, Btn } from '../ui';
import { TESTIMONIALS, FAQS } from '../../data/constants';

function Testimonials() {
  const [cur, setCur] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCur(c => (c + 1) % TESTIMONIALS.length), 4000);
    return () => clearInterval(t);
  }, []);

  const t = TESTIMONIALS[cur];

  return (
    <section style={{ background: T.teal, padding: "88px 0", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", inset: 0, opacity: .06,
        backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px"
      }} />
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px", textAlign: "center", position: "relative", zIndex: 1 }}>
        <SectionLabel>Testimonial</SectionLabel>
        <div style={{ minHeight: 160 }}>
          <p style={{
            fontFamily: "Fraunces, serif", fontSize: "clamp(1.15rem,2.5vw,1.5rem)", fontStyle: "italic",
            color: "rgba(255,255,255,.9)", lineHeight: 1.7, marginBottom: 28
          }}>
            "{t.text}"
          </p>
          <div style={{ fontWeight: 600, color: "#fff", fontSize: 15 }}>{t.name}</div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,.6)", marginTop: 3 }}>{t.exam}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 32 }}>
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => setCur(i)}
              style={{
                width: i === cur ? 28 : 8, height: 8, borderRadius: 50,
                background: i === cur ? "#fff" : "rgba(255,255,255,.35)",
                border: "none", cursor: "pointer", transition: "all .3s"
              }} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AdmissionProcess() {
  const steps = [
    { n: "01", title: "Register Online", desc: "Fill the simple registration form in under 2 minutes.", icon: "📝" },
    { n: "02", title: "Attend Counseling", desc: "Our experts guide you to the right course for your goals.", icon: "🧑💼" },
    { n: "03", title: "Choose Course", desc: "Select from Classroom, Online, or Hybrid programs.", icon: "📚" },
    { n: "04", title: "Start Learning", desc: "Begin your success journey with Apex Academy!", icon: "🚀" },
  ];

  return (
    <section style={{ background: T.white, padding: "88px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <SectionLabel>Admission</SectionLabel>
          <SectionTitle>Simple <em style={{ fontStyle: "italic", color: T.orange }}>4-Step Process</em></SectionTitle>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 0, position: "relative" }}>
          {steps.map((s, i) => (
            <div key={s.n} style={{ textAlign: "center", padding: "32px 20px", position: "relative" }}>
              {i < steps.length - 1 && (
                <div style={{
                  position: "absolute", top: 48, right: 0, width: "50%", height: 2,
                  background: `linear-gradient(90deg, ${T.orange}, ${T.cream2})`, zIndex: 0,
                  display: "block"
                }} />
              )}
              <div style={{
                position: "relative", zIndex: 1, display: "inline-flex", alignItems: "center",
                justifyContent: "center", width: 64, height: 64, borderRadius: "50%",
                background: T.orangeLt, border: `2px solid ${T.orange}`, marginBottom: 20, fontSize: 26
              }}>
                {s.icon}
              </div>
              <div className="serif" style={{
                fontSize: ".75rem", fontWeight: 700, color: T.orange,
                letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 6
              }}>Step {s.n}</div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: 8 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: T.ink3, lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section style={{ background: T.cream, padding: "88px 0" }}>
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <SectionLabel>FAQ</SectionLabel>
          <SectionTitle>Common <em style={{ fontStyle: "italic", color: T.orange }}>Questions</em></SectionTitle>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {FAQS.map((f, i) => (
            <div key={i} style={{
              background: "#fff", borderRadius: 14, overflow: "hidden",
              border: `1px solid ${open === i ? T.orange : T.cream2}`, transition: "border .2s"
            }}>
              <button onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "18px 22px", background: "none", border: "none", cursor: "pointer",
                  fontSize: 15, fontWeight: 600, color: T.ink, textAlign: "left", gap: 12
                }}>
                {f.q}
                <span style={{
                  fontSize: 20, color: T.orange, transition: "transform .3s",
                  transform: open === i ? "rotate(45deg)" : "rotate(0)", flexShrink: 0
                }}>+</span>
              </button>
              <div className="accordion-body" style={{
                maxHeight: open === i ? 200 : 0,
                opacity: open === i ? 1 : 0
              }}>
                <p style={{ padding: "0 22px 18px", fontSize: 14, color: T.ink2, lineHeight: 1.7 }}>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function InformationSection() {
  return (
    <>
      <Testimonials />
      <AdmissionProcess />
      <FAQ />
    </>
  );
}
