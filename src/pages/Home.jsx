import React, { useState, useEffect } from 'react';
import HeroSection from '../components/sections/HeroSection';
import SuccessGallery from '../components/sections/SuccessGallery';
import CoursesSection from '../components/sections/CoursesSection';
import FacultySection from '../components/sections/FacultySection';
import InformationSection from '../components/sections/InformationSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import ContactSection from '../components/sections/ContactSection';
import { Btn } from '../components/ui';

export default function Home() {
  const [showSticky, setShowSticky] = useState(false);
  
  useEffect(() => {
    const fn = () => setShowSticky(window.scrollY > 500);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <HeroSection />
      <SuccessGallery />
      <CoursesSection />
      <FacultySection />
      <InformationSection />
      <FeaturesSection />
      <ContactSection />

      {/* Sticky CTA */}
      {showSticky && (
        <div style={{ position:"fixed", bottom:28, right:28, zIndex:150,
          boxShadow:"0 8px 32px rgba(232,83,10,.45)", borderRadius:50,
          animation:"fadeUp .4s ease" }}>
          <Btn to="/enroll" className="sticky-cta-btn"
            style={{ padding:"14px 28px", fontSize:15, boxShadow:"none" }}>
            🎓 Enroll Now
          </Btn>
        </div>
      )}
    </>
  );
}
