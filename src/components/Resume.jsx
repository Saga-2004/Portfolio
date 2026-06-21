import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf, FaFileWord, FaDownload, FaCalendarAlt, FaInfoCircle } from 'react-icons/fa';

export default function Resume() {
  const [resumeInfo, setResumeInfo] = useState({
    url: '',
    filename: 'Sagar_Resume.pdf',
    date: 'June 2026',
    type: 'PDF'
  });

  useEffect(() => {
    // Check localstorage updates from the Admin panel
    const customUrl = localStorage.getItem('portfolio_resume_url');
    const customFilename = localStorage.getItem('portfolio_resume_filename');
    const customDate = localStorage.getItem('portfolio_resume_date');
    const customType = localStorage.getItem('portfolio_resume_type');
    
    const defaultUrl = import.meta.env.VITE_RESUME_URL || '';

    setResumeInfo({
      url: customUrl || defaultUrl,
      filename: customFilename || 'Sagar_Resume.pdf',
      date: customDate || 'June 2026',
      type: customType || 'PDF'
    });
  }, []);

  const handleDownload = () => {
    if (resumeInfo.url) {
      window.open(resumeInfo.url, '_blank');
    } else {
      alert("Resume URL is not configured. Please add VITE_RESUME_URL to your .env or update it via the Admin Panel.");
    }
  };

  return (
    <section id="resume" className="py-24 bg-white dark:bg-brown-800 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-brown-100/30 dark:bg-brown-900/25 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-brown-900 dark:text-white"
          >
            Curriculum Vitae
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-brown-500 dark:bg-brown-400 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Resume Card Layout */}
        <div className="flex justify-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="w-full max-w-xl p-8 rounded-2xl bg-brown-50 dark:bg-brown-900 border border-brown-200/50 dark:border-brown-700/60 shadow-lg flex flex-col items-center text-center relative"
          >
            {/* File Icon visualization based on type */}
            <div className="p-6 rounded-2xl bg-white dark:bg-brown-800 shadow-sm border border-brown-100 dark:border-brown-700 mb-6">
              {resumeInfo.type.toUpperCase() === 'DOCX' ? (
                <FaFileWord size={52} className="text-blue-500 animate-pulse-subtle" />
              ) : (
                <FaFilePdf size={52} className="text-red-500 animate-pulse-subtle" />
              )}
            </div>

            <h3 className="text-xl font-bold font-serif text-brown-900 dark:text-white mb-2">
              {resumeInfo.filename}
            </h3>

            {/* Badges and details */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold font-mono tracking-wider uppercase bg-brown-200/50 dark:bg-brown-800/80 text-brown-800 dark:text-brown-200 border border-brown-300/10">
                Format: {resumeInfo.type}
              </span>
              <span className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-brown-600 dark:text-brown-400">
                <FaCalendarAlt />
                <span>Updated: {resumeInfo.date}</span>
              </span>
            </div>

            {/* Direct Download Button */}
            <button
              onClick={handleDownload}
              className="w-full sm:w-auto px-10 py-4 bg-brown-500 hover:bg-brown-600 dark:bg-brown-400 dark:hover:bg-brown-300 text-white dark:text-brown-900 font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-3 cursor-pointer"
            >
              <FaDownload size={18} />
              <span>Download Resume</span>
            </button>

            {/* Info label */}
            <p className="mt-6 text-xs text-brown-500 dark:text-brown-400 max-w-sm flex items-center justify-center space-x-1.5 leading-relaxed">
              <FaInfoCircle size={14} className="flex-shrink-0 text-brown-400" />
              <span>This download contains the latest CV outlining technical skills and work details.</span>
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
