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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
