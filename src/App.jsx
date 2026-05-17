import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Enroll from './pages/Enroll';
import BookDemo from './pages/BookDemo';
import FacultyDetail from './pages/FacultyDetail';
import Results from './pages/Results';
import CourseDetail from './pages/CourseDetail';
import Courses from './pages/Courses';
import Faculty from './pages/Faculty';
import About from './pages/About';
import Contact from './pages/Contact';
import VerifyEmail from './pages/VerifyEmail';

// Dashboard Imports
import DashboardLayout from './pages/dashboard/DashboardLayout';
import Overview from './pages/dashboard/Overview';
import VideoLectures from './pages/dashboard/VideoLectures';
import LiveClasses from './pages/dashboard/LiveClasses';
import Tests from './pages/dashboard/Tests';
import Assignments from './pages/dashboard/Assignments';
import Forum from './pages/dashboard/Forum';

// Admin Imports
import AdminLayout from './pages/admin/AdminLayout';
import Analytics from './pages/admin/Analytics';
import CMS from './pages/admin/CMS';
import Leads from './pages/admin/Leads';
import Automations from './pages/admin/Automations';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="enroll" element={<Enroll />} />
          <Route path="book-demo" element={<BookDemo />} />
          <Route path="faculty/:id" element={<FacultyDetail />} />
          <Route path="course/:id" element={<CourseDetail />} />
          <Route path="results" element={<Results />} />
          <Route path="courses" element={<Courses />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        
        <Route path="/verify" element={<VerifyEmail />} />

        {/* Dashboard Routes (No public Navbar/Footer) */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="videos" element={<VideoLectures />} />
          <Route path="live" element={<LiveClasses />} />
          <Route path="tests" element={<Tests />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="forum" element={<Forum />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Analytics />} />
          <Route path="cms" element={<CMS />} />
          <Route path="leads" element={<Leads />} />
          <Route path="automations" element={<Automations />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
