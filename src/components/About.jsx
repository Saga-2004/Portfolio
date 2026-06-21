import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

// Simple, responsive count-up timer component triggered when scrolled into view
function Counter({ value, suffix = '', duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value, 10);
      if (isNaN(end)) {
        setCount(value);
        return;
      }
      
      const totalTicks = 30;
      const step = end / totalTicks;
      const intervalTime = (duration * 1000) / totalTicks;
      
      let currentTick = 0;
      const timer = setInterval(() => {
        currentTick++;
        start += step;
        if (currentTick >= totalTicks) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, intervalTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-serif text-4xl sm:text-5xl font-black text-brown-500 dark:text-brown-300">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const stats = [
    { label: "Internships completed", value: "2", suffix: "+" },
    { label: "Live Projects deployed", value: "3", suffix: "+" },
    { label: "AI Developer tools mastered", value: "4", suffix: "" },
    { label: "B.Tech Graduation CGPA", value: "7", suffix: "/10" },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-brown-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-brown-100/30 dark:bg-brown-900/20 rounded-full filter blur-3xl pointer-events-none" />
      
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
            About Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-brown-500 dark:bg-brown-400 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Contents Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Column - Quote Card */}
          <motion.div variants={itemVariants} className="lg:col-span-5">
            <div className="p-8 sm:p-10 rounded-2xl bg-brown-50 dark:bg-brown-900 border border-brown-200/50 dark:border-brown-700/60 shadow-lg relative overflow-hidden">
              {/* Giant decorative quotation mark */}
              <span className="absolute top-2 left-4 text-8xl font-serif font-extrabold text-brown-300/20 dark:text-brown-700/10 pointer-events-none select-none">
                “
              </span>
              
              <p className="text-lg sm:text-xl font-serif italic text-brown-800 dark:text-brown-100 leading-relaxed relative z-10">
                "Developing software in the AI era isn't about typing faster; it's about architecting smarter. I leverage artificial intelligence to design, debug, and ship production-ready full-stack applications in record time."
              </p>
              
              <div className="mt-6 flex items-center space-x-3">
                <div className="w-10 h-0.5 bg-brown-400" />
                <span className="text-sm font-mono uppercase tracking-widest text-brown-600 dark:text-brown-400 font-bold">
                  Sagar
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Bio and Profile */}
          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold font-serif text-brown-800 dark:text-brown-200">
              AI-First Full Stack Developer
            </h3>
            
            <p className="text-brown-700 dark:text-brown-300 leading-relaxed text-base sm:text-lg">
              I am a passionate software engineer focused on building robust, scalable web applications. My development style is heavily accelerated by advanced AI tools like <strong>Claude Code, GitHub Copilot, Gemini, and ChatGPT</strong>, enabling me to build products with high accuracy and speed.
            </p>

            <p className="text-brown-700 dark:text-brown-300 leading-relaxed text-base sm:text-lg">
              During my internships, I've designed and shipped complex full-stack modules. I've integrated <strong>Razorpay payment systems</strong>, automated intricate <strong>CRM workflows</strong>, resolved timezone sync errors across databases, and deployed live services on <strong>VPS servers using PM2</strong>. I thrive on solving complex backend challenges and translating them into elegant, user-centric interfaces.
            </p>

            {/* Stats Counter Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-brown-200/30 dark:border-brown-700/40">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col space-y-2">
                  <div className="flex items-baseline">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <span className="text-xs sm:text-sm text-brown-600 dark:text-brown-400 font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
