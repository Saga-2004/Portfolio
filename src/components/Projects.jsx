import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaBrain } from 'react-icons/fa';
import { projects, personalInfo } from '../data/portfolioData';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 50, damping: 12 },
    },
  };

  return (
    <section id="projects" className="py-24 bg-brown-50 dark:bg-brown-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute left-1/4 top-1/4 w-80 h-80 bg-brown-200/10 dark:bg-brown-500/5 rounded-full filter blur-3xl pointer-events-none" />

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
            Things I've Built
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-brown-500 dark:bg-brown-400 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => {
            const hasAi = project.title.includes("Sales Insight");
            const githubLink = project.github || personalInfo.github;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  borderColor: '#C4A882',
                  boxShadow: '0 20px 25px -5px rgba(139, 105, 20, 0.1), 0 10px 10px -5px rgba(139, 105, 20, 0.04)'
                }}
                className="flex flex-col h-full rounded-2xl bg-white dark:bg-brown-800 border border-brown-200/40 dark:border-brown-700/60 shadow-md transition-all duration-300 overflow-hidden relative"
              >
                {/* Visual Header bar */}
                <div className="h-2 bg-gradient-to-r from-brown-300 to-brown-500 dark:from-brown-400 dark:to-brown-600" />
                
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Top Row: Title & Badges */}
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <h3 className="text-2xl font-bold font-serif text-brown-900 dark:text-white">
                        {project.title}
                      </h3>
                      {hasAi && (
                        <span className="flex items-center space-x-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold tracking-widest uppercase bg-amber-500/10 text-amber-600 dark:bg-amber-400/10 dark:text-amber-300 border border-amber-500/20 whitespace-nowrap">
                          <FaBrain className="animate-pulse" />
                          <span>Gemini AI</span>
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm font-bold font-mono text-brown-500 dark:text-brown-400 uppercase tracking-widest mb-4">
                      {project.subtitle}
                    </h4>

                    <p className="text-sm sm:text-base text-brown-700 dark:text-brown-300 leading-relaxed mb-6 font-medium">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-xs font-bold font-mono bg-brown-50 dark:bg-brown-900/60 text-brown-700 dark:text-brown-300 border border-brown-200/30 dark:border-brown-700/40"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Actions Row */}
                    <div className="flex items-center justify-between pt-4 border-t border-brown-100 dark:border-brown-700/30">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-sm font-bold text-brown-600 hover:text-brown-500 dark:text-brown-300 dark:hover:text-brown-100 transition-colors duration-200"
                      >
                        <FaExternalLinkAlt size={14} />
                        <span>Live Demo</span>
                      </a>
                      
                      <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-brown-50 hover:bg-brown-500 dark:bg-brown-900 dark:hover:bg-brown-400 text-brown-700 dark:text-brown-300 hover:text-white dark:hover:text-brown-900 border border-brown-200/30 dark:border-brown-700/40 transition-all duration-300"
                        aria-label="View Source on GitHub"
                        title="View Source on GitHub"
                      >
                        <FaGithub size={18} />
                      </a>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer GitHub Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-xl border-2 border-brown-500 dark:border-brown-400 text-brown-700 dark:text-brown-200 font-bold hover:bg-brown-500 hover:text-white dark:hover:bg-brown-400 dark:hover:text-brown-900 transition-all duration-300"
          >
            <FaGithub size={20} />
            <span>More Projects on GitHub</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
