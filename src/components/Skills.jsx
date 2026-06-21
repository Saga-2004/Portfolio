import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub, FaServer, FaRobot, FaBrain 
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiPostgresql, SiOpenai 
} from 'react-icons/si';

// Helper to resolve skill icons with proper brand colors
const getSkillIcon = (name) => {
  const size = 20;
  switch (name) {
    case 'React':
      return <FaReact size={size} className="text-[#61DAFB]" />;
    case 'JavaScript':
      return <FaJs size={size} className="text-[#F7DF1E]" />;
    case 'TypeScript':
      return <SiTypescript size={size} className="text-[#3178C6]" />;
    case 'HTML5':
      return <FaHtml5 size={size} className="text-[#E34F26]" />;
    case 'CSS3':
      return <FaCss3Alt size={size} className="text-[#1572B6]" />;
    case 'Tailwind CSS':
      return <SiTailwindcss size={size} className="text-[#06B6D4]" />;
    case 'Node.js':
      return <FaNodeJs size={size} className="text-[#339933]" />;
    case 'Express.js':
      return <SiExpress size={size} className="text-gray-800 dark:text-gray-200" />;
    case 'MongoDB':
      return <SiMongodb size={size} className="text-[#47A248]" />;
    case 'PostgreSQL':
      return <SiPostgresql size={size} className="text-[#4169E1]" />;
    case 'Claude Code':
      return <FaRobot size={size} className="text-[#D97706]" />;
    case 'GitHub Copilot':
      return <FaGithub size={size} className="text-[#8B5CF6]" />;
    case 'Gemini':
      return <FaBrain size={size} className="text-[#2563EB]" />;
    case 'ChatGPT':
      return <SiOpenai size={size} className="text-[#10B981]" />;
    case 'Git':
      return <FaGitAlt size={size} className="text-[#F05032]" />;
    case 'GitHub':
      return <FaGithub size={size} className="text-gray-800 dark:text-gray-200" />;
    default:
      return <FaBrain size={size} className="text-brown-400" />;
  }
};

export default function Skills() {
  const categories = Object.keys(skills);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 60, damping: 12 },
    },
  };

  const badgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 10 },
    },
  };

  return (
    <section id="skills" className="py-24 bg-brown-50 dark:bg-brown-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-brown-100/40 dark:bg-brown-800/10 rounded-full filter blur-3xl pointer-events-none" />

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
            My Tech Stack
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-brown-500 dark:bg-brown-400 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category) => (
            <motion.div
              key={category}
              variants={cardVariants}
              className="p-8 rounded-2xl bg-white dark:bg-brown-800 border border-brown-200/50 dark:border-brown-700/60 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold font-serif text-brown-800 dark:text-brown-200 mb-6 pb-2 border-b border-brown-100 dark:border-brown-700/50 flex justify-between items-center">
                  <span>{category}</span>
                  <span className="text-xs uppercase tracking-widest font-mono text-brown-400 dark:text-brown-500 font-bold">
                    Domain
                  </span>
                </h3>

                {/* Skill badges grid */}
                <div className="flex flex-wrap gap-3">
                  {skills[category].map((skill) => (
                    <motion.div
                      key={skill}
                      variants={badgeVariants}
                      whileHover={{ 
                        scale: 1.06, 
                        y: -3,
                        boxShadow: '0 8px 16px -4px rgba(139, 105, 20, 0.15)',
                        borderColor: '#C4A882'
                      }}
                      className="px-4 py-2.5 rounded-xl bg-brown-50 dark:bg-brown-900 border border-brown-200/40 dark:border-brown-700/40 text-sm font-semibold text-brown-800 dark:text-brown-200 flex items-center space-x-2.5 transition-all duration-200"
                    >
                      {getSkillIcon(skill)}
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
