import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const navigate = useNavigate();
  const [clickCount, setClickCount] = useState(0);

  const handleVersionClick = () => {
    const nextCount = clickCount + 1;
    setClickCount(nextCount);
    if (nextCount >= 5) {
      setClickCount(0);
      navigate('/admin');
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-white dark:bg-brown-900 border-t border-brown-200/20 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center space-y-6">
        
        {/* Quick Nav Links */}
        <div className="flex flex-wrap justify-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-brown-600 hover:text-brown-500 dark:text-brown-400 dark:hover:text-brown-200 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Icons Row */}
        <div className="flex items-center space-x-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brown-500 hover:text-brown-700 dark:text-brown-400 dark:hover:text-brown-200 transition-colors duration-200"
            aria-label="GitHub Profile"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brown-500 hover:text-brown-700 dark:text-brown-400 dark:hover:text-brown-200 transition-colors duration-200"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-brown-500 hover:text-brown-700 dark:text-brown-400 dark:hover:text-brown-200 transition-colors duration-200"
            aria-label="Send Email"
          >
            <FaEnvelope size={20} />
          </a>
        </div>

        {/* Divider */}
        <div className="w-24 h-px bg-brown-200 dark:bg-brown-700/60" />

        {/* Main Copyright & Version */}
        <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-2 sm:space-y-0 text-center">
          <p className="text-sm font-medium text-brown-600 dark:text-brown-400">
            Built with ❤️ by <span className="font-semibold text-brown-800 dark:text-brown-200">Sagar</span> | 2026
          </p>
          <span className="hidden sm:inline text-brown-300 dark:text-brown-700">|</span>
          <button
            onClick={handleVersionClick}
            className="text-xs font-mono font-bold text-brown-400 hover:text-brown-500 dark:text-brown-500 dark:hover:text-brown-400 select-none bg-transparent border-none cursor-pointer focus:outline-none"
            title="Sagar Portfolio Release Version"
          >
            v1.0.0
          </button>
        </div>

      </div>
    </footer>
  );
}
