import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/portfolioData';
import { FaGraduationCap } from 'react-icons/fa';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-brown-50 dark:bg-brown-900 relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute left-10 top-10 w-72 h-72 bg-brown-200/10 dark:bg-brown-500/5 rounded-full filter blur-2xl pointer-events-none" />

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
            Education
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-brown-500 dark:bg-brown-400 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Card Layout */}
        <div className="flex justify-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 50 }}
            whileHover={{ y: -6, borderColor: '#C4A882', boxShadow: '0 20px 25px -5px rgba(139, 105, 20, 0.1)' }}
            className="w-full max-w-2xl p-8 sm:p-10 rounded-2xl bg-white dark:bg-brown-800 border border-brown-200/40 dark:border-brown-700/60 shadow-md transition-all duration-300 relative overflow-hidden group"
          >
            {/* Top right corner glow */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-brown-200/20 dark:bg-brown-400/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              {/* Icon Badge */}
              <div className="p-4 rounded-2xl bg-brown-500 dark:bg-brown-400 text-white dark:text-brown-900 shadow-md">
                <FaGraduationCap size={32} />
              </div>

              {/* Education details */}
              <div className="flex-grow space-y-1">
                <span className="text-xs font-mono font-bold text-brown-500 dark:text-brown-400 uppercase tracking-widest block">
                  {education.duration}
                </span>
                <h3 className="text-2xl font-bold font-serif text-brown-900 dark:text-white">
                  {education.degree}
                </h3>
                <h4 className="text-lg font-semibold text-brown-700 dark:text-brown-300">
                  {education.college}
                </h4>
              </div>

              {/* CGPA display */}
              <div className="w-full sm:w-auto px-5 py-3 rounded-xl bg-brown-50 dark:bg-brown-900/60 border border-brown-200/30 dark:border-brown-700/40 flex flex-col items-center justify-center sm:self-center text-center">
                <span className="text-[10px] font-bold font-mono text-brown-400 dark:text-brown-500 uppercase tracking-wider block">
                  CGPA
                </span>
                <span className="text-2xl font-extrabold text-brown-500 dark:text-brown-300 font-serif block">
                  {education.cgpa}
                </span>
              </div>
            </div>

            {/* Extra details to show university excellence */}
            <div className="mt-8 pt-6 border-t border-brown-100 dark:border-brown-700/30">
              <h5 className="text-sm font-bold font-mono text-brown-500 dark:text-brown-400 uppercase tracking-wider mb-3">
                Key Specializations
              </h5>
              <div className="flex flex-wrap gap-2">
                {["Artificial Intelligence", "Machine Learning", "Neural Networks", "Data Structures & Algorithms", "Full Stack Engineering"].map((spec, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-brown-50 dark:bg-brown-900/40 text-brown-700 dark:text-brown-300 border border-brown-200/20 dark:border-brown-700/20"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
