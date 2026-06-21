import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import toast from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey) {
        // Submit using EmailJS REST API
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
              from_name: formData.name,
              from_email: formData.email,
              message: formData.message,
              to_name: personalInfo.name,
            },
          }),
        });

        if (response.ok) {
          toast.success("Message sent successfully! I'll get back to you shortly.");
          setFormData({ name: '', email: '', message: '' });
        } else {
          throw new Error("EmailJS service failed to process request.");
        }
      } else {
        // Fallback demo message
        await new Promise((resolve) => setTimeout(resolve, 1000));
        toast.success("Demo Message Received! (Add EmailJS keys in .env to enable production emails)");
        console.log("Submitted Data:", formData);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Failed to send message. Please reach out directly via email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <FaEnvelope size={20} />,
      label: "Email Me",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: <FaPhone size={20} />,
      label: "Call/WhatsApp",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s+/g, '')}`,
    },
    {
      icon: <FaLinkedin size={20} />,
      label: "LinkedIn Profile",
      value: "sagar-b4b643283",
      href: personalInfo.linkedin,
    },
    {
      icon: <FaGithub size={20} />,
      label: "GitHub Profile",
      value: "Saga-2004",
      href: personalInfo.github,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-brown-50 dark:bg-brown-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute left-10 bottom-10 w-96 h-96 bg-brown-100/30 dark:bg-brown-800/10 rounded-full filter blur-3xl pointer-events-none" />

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
            Let's Connect
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-brown-500 dark:bg-brown-400 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* 2-Column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Connection Methods */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col space-y-6"
          >
            <h3 className="text-2xl font-bold font-serif text-brown-900 dark:text-white mb-2">
              Get in Touch
            </h3>
            <p className="text-brown-700 dark:text-brown-300 leading-relaxed text-sm sm:text-base mb-6">
              I am open to intern roles, full-time positions, or custom collaborations. Shoot me a message, call directly, or hook up via LinkedIn. I usually respond within a few hours!
            </p>

            <div className="space-y-4">
              {contactMethods.map((method, idx) => (
                <a
                  key={idx}
                  href={method.href}
                  target={idx > 1 ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-5 rounded-2xl bg-white dark:bg-brown-800 border border-brown-200/40 dark:border-brown-700/60 shadow-sm hover:shadow-md hover:border-brown-300 dark:hover:border-brown-400 transition-all duration-300 group"
                >
                  <div className="p-3.5 rounded-xl bg-brown-100 dark:bg-brown-900 text-brown-700 dark:text-brown-300 group-hover:bg-brown-500 group-hover:text-white dark:group-hover:bg-brown-400 dark:group-hover:text-brown-900 transition-colors duration-300">
                    {method.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold font-mono text-brown-400 dark:text-brown-500 uppercase tracking-wider block">
                      {method.label}
                    </span>
                    <span className="text-base font-bold text-brown-800 dark:text-brown-200 group-hover:text-brown-500 dark:group-hover:text-brown-100 transition-colors duration-200">
                      {method.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Styled Form */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            {/* Setup note inside code comment:
                To enable real emails:
                1. Go to https://www.emailjs.com/
                2. Set up a free service + template
                3. Update service, template, and public key in your .env
            */}
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-brown-800 border border-brown-200/40 dark:border-brown-700/60 shadow-md flex flex-col space-y-6"
            >
              <h3 className="text-2xl font-bold font-serif text-brown-900 dark:text-white">
                Drop a Message
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="text-xs font-bold font-mono uppercase tracking-wider text-brown-500 dark:text-brown-400">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="px-4 py-3 rounded-xl border border-brown-200 dark:border-brown-700 bg-brown-50/50 dark:bg-brown-900/40 text-brown-900 dark:text-white focus:outline-none focus:border-brown-500 dark:focus:border-brown-400 transition-colors duration-200 font-medium"
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-xs font-bold font-mono uppercase tracking-wider text-brown-500 dark:text-brown-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="px-4 py-3 rounded-xl border border-brown-200 dark:border-brown-700 bg-brown-50/50 dark:bg-brown-900/40 text-brown-900 dark:text-white focus:outline-none focus:border-brown-500 dark:focus:border-brown-400 transition-colors duration-200 font-medium"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="text-xs font-bold font-mono uppercase tracking-wider text-brown-500 dark:text-brown-400">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or role..."
                  className="px-4 py-3 rounded-xl border border-brown-200 dark:border-brown-700 bg-brown-50/50 dark:bg-brown-900/40 text-brown-900 dark:text-white focus:outline-none focus:border-brown-500 dark:focus:border-brown-400 transition-colors duration-200 resize-none font-medium"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-brown-500 hover:bg-brown-600 dark:bg-brown-400 dark:hover:bg-brown-300 text-white dark:text-brown-900 font-bold transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white dark:border-brown-900 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <FaPaperPlane size={14} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
