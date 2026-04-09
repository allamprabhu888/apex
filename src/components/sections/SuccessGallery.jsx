import React from 'react';
import T from '../../styles/theme';
import { SectionTitle, SectionLabel } from '../ui';

export default function SuccessGallery() {
  const photos = [
    { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80", alt: "Graduating Students", tag: "AIR 12 & AIR 45" },
    { src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80", alt: "Study Success", tag: "100% Scholarship" },
    { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80", alt: "Group Achievement", tag: "AIIMS Batch 2023" },
    { src: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?w=600&q=80", alt: "Happy Student", tag: "IIT Delhi Selected" },
  ];

  return (
    <section style={{ padding: "100px 0", background: "var(--cream, #f7f3ed)", overflow: "hidden" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 24px", textAlign: "center", marginBottom: 56 }}>
        <SectionLabel>Student Triumphs</SectionLabel>
        <SectionTitle>Realizing Dreams, <em style={{ fontStyle: "italic", color: T.orange }}>Celebrating Success</em></SectionTitle>
        <p style={{ color: T.ink2, fontSize: 16, marginTop: 16, maxWidth: 600, margin: "16px auto 0", fontWeight: 300 }}>
          Behind every rank is a story of intense perseverance, late-night doubts, and eventual triumph. These are the moments we live for.
        </p>
      </div>

      {/* Marquee/Gallery Flow */}
      <div style={{ display: "flex", gap: 32, padding: "0 24px", overflowX: "auto", scrollbarWidth: "none", paddingBottom: 32 }} className="no-scrollbar">
        {photos.map((item, i) => (
          <div key={i} style={{ minWidth: 320, height: 420, borderRadius: 8, overflow: "hidden", position: "relative", flexShrink: 0, boxShadow: "0 24px 48px rgba(0,0,0,.08)" }} className="course-card">
            <img src={item.src} alt={item.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)" }} />
            
            <div style={{ position: "absolute", bottom: 24, left: 24, right: 24 }}>
               <div style={{ display: "inline-block", background: "rgba(255,255,255,0.9)", backdropFilter:"blur(4px)", padding: "6px 14px", borderRadius: 50, fontSize: 12, fontWeight: 600, color: T.ink, boxShadow: "0 4px 12px rgba(0,0,0,.1)" }}>
                  🎓 {item.tag}
               </div>
            </div>
          </div>
        ))}

        {/* Duplicate logic for endless scroll illusion if desired, or just repeated manually */}
        {photos.map((item, i) => (
          <div key={`dup-${i}`} style={{ minWidth: 320, height: 420, borderRadius: 8, overflow: "hidden", position: "relative", flexShrink: 0, boxShadow: "0 24px 48px rgba(0,0,0,.08)" }} className="course-card">
            <img src={item.src} alt={item.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)" }} />
            <div style={{ position: "absolute", bottom: 24, left: 24, right: 24 }}>
               <div style={{ display: "inline-block", background: "rgba(255,255,255,0.9)", backdropFilter:"blur(4px)", padding: "6px 14px", borderRadius: 50, fontSize: 12, fontWeight: 600, color: T.ink, boxShadow: "0 4px 12px rgba(0,0,0,.1)" }}>
                  🎓 {item.tag}
               </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
