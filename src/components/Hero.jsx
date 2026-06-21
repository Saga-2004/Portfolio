import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import profileImg from '../assets/hero.png';

export default function Hero() {
  const roles = ["MERN Stack Developer", "Problem Solver", "AI Tools Expert"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[roleIndex];
      
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          // Finished typing, pause
          setIsDeleting(true);
          setTypingSpeed(1800); // pause at the end
        } else {
          setTypingSpeed(80 + Math.random() * 50); // variance in speed
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(400); // pause before typing next
        } else {
          setTypingSpeed(40);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const handleDownloadResume = () => {
    const customUrl = localStorage.getItem('portfolio_resume_url');
    const defaultUrl = import.meta.env.VITE_RESUME_URL || '';
    const url = customUrl || defaultUrl;
    if (url) {
      window.open(url, '_blank');
    }
  };

  // Variants for staggered entrance animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 75, damping: 15 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern bg-brown-50 dark:bg-brown-900"
    >
      {/* Floating particles background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-brown-300/10 dark:bg-brown-500/5 blur-xl"
            style={{
              width: `${120 + i * 80}px`,
              height: `${120 + i * 80}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, i % 2 === 0 ? 20 : -20, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left column: Bio & Actions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left"
        >
          <div className="space-y-4">
            <motion.span
              variants={itemVariants}
              className="inline-block py-1.5 px-4 rounded-full text-xs font-bold uppercase tracking-widest bg-brown-200/50 dark:bg-brown-800/80 text-brown-800 dark:text-brown-200 border border-brown-300/20"
            >
              🚀 Welcome to my space
            </motion.span>
            
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-brown-900 dark:text-white leading-tight"
            >
              Hi, I'm <span className="text-brown-500 dark:text-brown-300">Sagar</span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-brown-700 dark:text-brown-200">
                AI-First Full Stack Developer
              </span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="h-10 text-xl sm:text-2xl font-mono text-brown-500 dark:text-brown-300 font-semibold"
            >
              I am a <span className="border-r-2 border-brown-500 dark:border-brown-300 pr-1 animate-pulse">{currentText}</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-brown-700 dark:text-brown-300 max-w-xl font-medium leading-relaxed"
            >
              {personalInfo.summary}
            </motion.p>
          </div>

          {/* Social Row */}
          <motion.div variants={itemVariants} className="flex items-center space-x-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white dark:bg-brown-800 hover:bg-brown-500 dark:hover:bg-brown-400 text-brown-700 dark:text-brown-300 hover:text-white dark:hover:text-brown-900 shadow-sm border border-brown-200/30 dark:border-brown-700/50 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub size={22} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white dark:bg-brown-800 hover:bg-brown-500 dark:hover:bg-brown-400 text-brown-700 dark:text-brown-300 hover:text-white dark:hover:text-brown-900 shadow-sm border border-brown-200/30 dark:border-brown-700/50 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-xl bg-white dark:bg-brown-800 hover:bg-brown-500 dark:hover:bg-brown-400 text-brown-700 dark:text-brown-300 hover:text-white dark:hover:text-brown-900 shadow-sm border border-brown-200/30 dark:border-brown-700/50 transition-all duration-300"
              aria-label="Send Email"
            >
              <FaEnvelope size={22} />
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-xl bg-brown-500 dark:bg-brown-400 text-white dark:text-brown-900 font-bold hover:bg-brown-600 dark:hover:bg-brown-300 transition-all duration-300 shadow-md hover:shadow-lg text-center"
            >
              View My Work
            </a>
            <button
              onClick={handleDownloadResume}
              className="px-8 py-3.5 rounded-xl border-2 border-brown-500 dark:border-brown-400 text-brown-700 dark:text-brown-200 font-bold hover:bg-brown-500 hover:text-white dark:hover:bg-brown-400 dark:hover:text-brown-900 transition-all duration-300 text-center cursor-pointer"
            >
              Download Resume
            </button>
          </motion.div>
        </motion.div>

        {/* Right column: Dynamic graphic / avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96">
            {/* Spinning decorative frame */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-[40%] border-4 border-dashed border-brown-300/40 dark:border-brown-400/20"
            />
            
            {/* Rotating background blob */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-2 rounded-[30% 70% 70% 30% / 30% 30% 70% 70%] bg-gradient-to-tr from-brown-100 to-brown-300 dark:from-brown-800 dark:to-brown-700 opacity-60 filter blur-sm"
            />

            {/* Inner profile area showing stylized developer graphic */}
            <div className="absolute inset-4 rounded-[38%] overflow-hidden bg-white dark:bg-brown-800 border-2 border-brown-200/50 dark:border-brown-700 shadow-xl flex items-center justify-center">
             <img src={profileImg} alt=""  className=" mt-20 mr-4 object-contain object-top z-10 scale-105 "/>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
