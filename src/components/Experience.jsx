import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/portfolioData';
import { FaBriefcase } from 'react-icons/fa';

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 60, damping: 15 },
    },
  };

  return (
    <section id="experience" className="py-24 bg-white dark:bg-brown-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-brown-100/20 dark:bg-brown-900/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-brown-900 dark:text-white"
          >
            Work Experience
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-brown-500 dark:bg-brown-400 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Animated vertical center line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-brown-300 dark:bg-brown-600 origin-top md:-translate-x-1/2"
          />

          {/* Timeline Entries */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-16"
          >
            {experience.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative">
                  {/* Timeline Node dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-12 h-12 rounded-full bg-brown-500 dark:bg-brown-400 text-white dark:text-brown-900 border-4 border-white dark:border-brown-800 flex items-center justify-center shadow-md"
                    >
                      <FaBriefcase size={16} />
                    </motion.div>
                  </div>

                  {/* Card — on mobile always right of timeline, on desktop alternating */}
                  <div className={`pl-20 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                    <motion.div
                      variants={cardVariants}
                      className="p-8 rounded-2xl bg-brown-50 dark:bg-brown-900 border border-brown-200/50 dark:border-brown-700/60 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <span className="text-xs font-mono font-bold text-brown-500 dark:text-brown-400 uppercase tracking-wider block mb-2">
                        {exp.duration}
                      </span>
                      <h3 className="text-xl font-bold font-serif text-brown-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <h4 className="text-base font-semibold text-brown-600 dark:text-brown-300 mb-4">
                        {exp.company}
                      </h4>
                      <ul className="space-y-2.5 text-sm text-brown-700 dark:text-brown-300 list-disc pl-4">
                        {exp.points.map((point, idx) => (
                          <li key={idx} className="leading-relaxed">{point}</li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
