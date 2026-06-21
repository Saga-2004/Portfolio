import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Import components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';

// Main Single-Page Portfolio Layout
function PortfolioLayout({ darkMode, toggleDarkMode }) {
  return (
    <div className="relative">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('portfolio_dark_mode');
    if (saved !== null) {
      return saved === 'true';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  // Apply dark class and save choice
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
    localStorage.setItem('portfolio_dark_mode', darkMode);
  }, [darkMode]);

  // Desktop custom cursor dot handler
  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return;

    const handleMouseMove = (e) => {
      if (cursorRef.current && cursorDotRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        cursorDotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      {/* Toast provider */}
      <Toaster 
        position="top-right" 
        toastOptions={{
          className: 'dark:bg-brown-800 dark:text-brown-50 border border-brown-200/20 shadow-lg font-sans font-medium text-sm',
          duration: 4000,
        }} 
      />

      {/* Desktop Custom Cursor */}
      <div className="hidden md:block pointer-events-none">
        <div
          ref={cursorRef}
          className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-brown-500/50 dark:border-brown-400/40 z-[9999] transition-transform duration-[0.08s] ease-out -mt-4 -ml-4"
        />
        <div
          ref={cursorDotRef}
          className="fixed top-0 left-0 w-2 h-2 rounded-full bg-brown-500 dark:bg-brown-400 z-[9999] transition-transform duration-[0.02s] ease-out -mt-1 -ml-1"
        />
      </div>

      <Routes>
        <Route 
          path="/" 
          element={<PortfolioLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} 
        />
        <Route 
          path="/admin" 
          element={<AdminPanel />} 
        />
      </Routes>
    </Router>
  );
}
