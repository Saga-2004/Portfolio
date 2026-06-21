import React, { useState } from 'react';
import { useScrollDirection } from '../hooks/useScrollDirection';
import { HiMenuAlt3, HiX, HiMoon, HiSun } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ darkMode, toggleDarkMode }) {
  const scrollDirection = useScrollDirection();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleDownloadResume = () => {
    const customUrl = localStorage.getItem('portfolio_resume_url');
    const defaultUrl = import.meta.env.VITE_RESUME_URL || '';
    const url = customUrl || defaultUrl;
    if (url) {
      window.open(url, '_blank');
    } else {
      console.warn("Resume URL not configured.");
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-brown-200/20 glass-effect ${
        scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="font-mono text-xl font-bold tracking-tight text-brown-800 dark:text-brown-200">
          &lt;<span className="text-brown-500 font-extrabold">Sagar</span> /&gt;
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-brown-700 hover:text-brown-500 dark:text-brown-300 dark:hover:text-brown-100 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}

          {/* Dark / Light Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-full bg-brown-100/55 dark:bg-brown-800/80 text-brown-700 dark:text-brown-300 hover:text-brown-500 dark:hover:text-brown-100 transition-colors duration-200 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {darkMode ? <HiSun size={20} /> : <HiMoon size={20} />}
          </button>

          {/* CTA Download Resume */}
          <button
            onClick={handleDownloadResume}
            className="px-5 py-2.5 rounded-lg border-2 border-brown-500 dark:border-brown-400 text-brown-700 dark:text-brown-200 font-semibold text-sm hover:bg-brown-500 hover:text-white dark:hover:bg-brown-400 dark:hover:text-brown-900 transition-all duration-300 shadow-sm cursor-pointer"
          >
            Download Resume
          </button>
        </div>

        {/* Mobile Navbar Controls */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-brown-100/55 dark:bg-brown-800/80 text-brown-700 dark:text-brown-300 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {darkMode ? <HiSun size={18} /> : <HiMoon size={18} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-brown-800 dark:text-brown-200 focus:outline-none cursor-pointer"
            aria-label="Toggle Mobile Menu"
          >
            {isOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-effect border-b border-brown-200/20 overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-brown-700 hover:text-brown-500 dark:text-brown-300 dark:hover:text-brown-100 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  handleDownloadResume();
                }}
                className="w-full py-2.5 mt-2 rounded-lg border-2 border-brown-500 dark:border-brown-400 text-brown-700 dark:text-brown-200 font-semibold hover:bg-brown-500 hover:text-white dark:hover:bg-brown-400 dark:hover:text-brown-900 text-center transition-all duration-300 cursor-pointer"
              >
                Download Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
