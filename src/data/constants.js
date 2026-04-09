export const NAV_LINKS = ["Home","Courses","Results","Faculty","About Us","Contact"];

export const STATS = [
  { num: "50,000+", lbl: "Students Trained" },
  { num: "1,200+", lbl: "Top Rankers" },
  { num: "15+", lbl: "Years of Excellence" },
  { num: "4.8★", lbl: "Average Rating" },
];

export const COURSES = [
  {
    id: "jee", tag: "Engineering", name: "JEE Main & Advanced",
    color: "#e8530a", light: "#fde8dc", emoji: "⚙️",
    programs: ["2-Year Classroom Program", "Crash Course", "Online Batches"],
    description: "Our flagship program designed for engineering aspirants aiming for the prestigious IITs, NITs, and IIITs. Experience rigorous curriculum spanning Physics, Chemistry, and Mathematics built on decades of analytics to predict advanced question patterns.",
    duration: "1 Year / 2 Year Programs Available",
    features: ["Daily Practice Problems (DPP)", "All India Mock Test Series", "Personalized IITian Mentorship", "In-depth Concept Modules"]
  },
  {
    id: "neet", tag: "Medical", name: "NEET UG Preparation",
    color: "#0a6e5c", light: "#d8f0eb", emoji: "🧬",
    programs: ["Foundation Course", "Test Series", "Crash Course"],
    description: "Carefully structured curriculum for future medical professionals aiming for AIIMS and top medical colleges. Focused strictly on NCERT logic combined with high-level application required to secure a 700+ score.",
    duration: "1 Year / 2 Year Programs Available",
    features: ["Intensive Biology Flashcards", "Physics Numerical Shortcuts", "Weekly Cumulative Tests", "Botany & Zoology 3D Visuals"]
  },
  {
    id: "upsc", tag: "Civil Services", name: "UPSC Foundation",
    color: "#1a2a6c", light: "#e0e4f8", emoji: "🏛️",
    programs: ["GS Foundation", "Prelims + Mains", "Interview Guidance"],
    description: "A comprehensive pathway to cracking the Civil Services Examination. Covering GS Papers internally, current affairs analysis from The Hindu, and extensive answer writing practice to build analytical, administrative mindsets.",
    duration: "1 Year Foundation / 10 Month Crash",
    features: ["Daily Editorial Analysis", "Exclusive Mains Answer Writing", "Current Affairs Magazines", "Mock Interview Panels"]
  },
  {
    id: "foundation", tag: "Foundation", name: "Class 8–10 Foundation",
    color: "#2d2d2d", light: "#f0f0f0", emoji: "📚",
    programs: ["Olympiad Preparation", "NTSE", "Concept Building"],
    description: "Start early, finish ahead. This program builds the critical analytical fundamentals early on, ensuring students seamlessly transition into advanced competitive prep for IIT-JEE/NEET in higher classes.",
    duration: "1 to 3 Year Programs",
    features: ["Mental Ability & Logic", "Olympiad Level Science", "Fun Interactive Quizzes", "Board Exam Prep Integration"]
  },
];

export const FACULTY = [
  { 
    name: "Dr. Rajesh Sharma", subject: "Physics", exp: "15+ years", 
    bg: ["#fde8dc","#fbb99a"], initials: "RS",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    about: "Former Head of Physics at IIT Delhi. Dr. Sharma has dedicated his life to simplifying quantum mechanics and thermodynamics for competitive exams. His unique 'Visualization First' approach has helped over 2,000 students crack the top 100 ranks.",
    achievements: ["Author of 'Quantum Simplified'", "Ex-IIT Delhi Professor", "Mentored 15 AIR Top 10s"]
  },
  { 
    name: "Neha Verma", subject: "Biology", exp: "10+ years", 
    bg: ["#d8f0eb","#8dd4c4"], initials: "NV",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    about: "An AIIMS alumni who turned down a lucrative medical practice to follow her passion for teaching. Neha brings human anatomy to life through interactive 3D models and deeply engaging storytelling.",
    achievements: ["AIIMS New Delhi Gold Medalist", "Pioneer of 3D Bio-Learning", "100% selection rate in 2023"]
  },
  { 
    name: "Amit Gupta", subject: "Mathematics", exp: "12+ years", 
    bg: ["#fef5d3","#f5c842"], initials: "AG",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    about: "Known as the 'Human Calculator', Amit transforms complex calculus and algebra into intuitive puzzles. His classes are renowned for being high-energy, interactive, and strictly logic-driven without rote memorization.",
    achievements: ["Math Olympiad Coach", "Produced 4 consecutive Math perfect scores", "Stanford Alumni"]
  },
  { 
    name: "Priya Singh", subject: "Chemistry", exp: "8+ years", 
    bg: ["#e8e8ff","#9999dd"], initials: "PS",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    about: "Priya specializes in demystifying Organic Chemistry. Her incredible mnemonic techniques and reaction mapping strategies help students remember entire chemical pathways effortlessly.",
    achievements: ["Youngest ever Head of Chemistry", "Developed 'Chem-Map' methodology", "Guest speaker at IISc Bangalore"]
  },
];

export const TOPPERS = [
  { name: "Rohan Mehta", rank: "AIR 12", exam: "JEE Advanced", type: "jee" },
  { name: "Sneha Iyer", rank: "AIR 45", exam: "NEET UG", type: "neet" },
  { name: "Arjun Singh", rank: "AIR 78", exam: "UPSC CSE", type: "upsc" },
  { name: "Aditi Rao", rank: "AIR 14", exam: "NEET UG", type: "neet" },
  { name: "Vikram Das", rank: "AIR 23", exam: "JEE Main", type: "jee" },
  { name: "Pooja Menon", rank: "AIR 56", exam: "UPSC CSE", type: "upsc" },
];

export const TESTIMONIALS = [
  { name: "Priya K.", exam: "NEET AIR 45", text: "Apex Academy helped me secure AIR 45 in NEET. The faculty support and study material were truly world-class." },
  { name: "Rahul M.", exam: "JEE Advanced AIR 120", text: "The structured preparation, daily tests, and doubt sessions made all the difference. Couldn't have done it without Apex." },
  { name: "Ananya S.", exam: "UPSC CSE 2024", text: "The UPSC program is incredibly thorough. Mentors guided me at every stage, from Prelims to the Interview." },
];

export const WHY_US = [
  { icon: "🎓", title: "Experienced Faculty", desc: "IIT/AIIMS alumni with 10+ years average teaching experience." },
  { icon: "🧭", title: "Personalized Mentorship", desc: "One-on-one guidance tailored to each student's strengths." },
  { icon: "📊", title: "Regular Tests & Analysis", desc: "Weekly tests with detailed performance analytics." },
  { icon: "📖", title: "Premium Study Material", desc: "Curated notes, question banks, and previous year solutions." },
  { icon: "💬", title: "Doubt Clearing Sessions", desc: "Daily doubt sessions — no question goes unanswered." },
  { icon: "📱", title: "Mobile App Access", desc: "Learn anytime, anywhere with our full-featured app." },
];

export const BRANCHES = ["Bangalore","Hyderabad","Delhi","Pune", "Mumbai", "Chennai"];

export const FAQS = [
  { q: "When do new batches start?", a: "New batches begin in April and November each year. Crash courses start 3 months before each exam cycle." },
  { q: "Is there an online mode available?", a: "Yes! All courses are available in live online, recorded, and hybrid formats with full study material access." },
  { q: "How do I enroll?", a: "Register online, attend a free counseling session, choose your course, and begin learning — it's that simple." },
  { q: "What is the fee structure?", a: "Fees vary by course and duration. Contact our counseling team or fill the inquiry form for a detailed breakdown." },
  { q: "Are scholarships available?", a: "Yes, merit-based scholarships of up to 90% are available based on our entrance test performance." },
];
