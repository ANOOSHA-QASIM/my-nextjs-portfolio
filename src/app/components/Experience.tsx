"use client";
import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Frontend Developer (GIAIC Projects)",
    company: "Governor’s Initiative for AI & Computing (GIAIC)",
    duration: "2024 – Present (1 Year)",
    description: "Developed multiple web and Python-based projects, including e-commerce platforms, resume builders, and AI-driven applications using Next.js, TypeScript, and Streamlit. Focused on responsive design and performance optimization.",
  },
  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    duration: "2023 – Present",
    description: "Designed and built responsive websites for small businesses, leveraging HTML, CSS, JavaScript, and Tailwind CSS. Collaborated with clients to deliver user-friendly interfaces and optimized user experiences.",
  },
];

const Experience = () => {
  return (
    <section className="bg-gray-900 text-white font-inter py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(79,_70,_229,_0.2),_transparent_50%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 tracking-wider"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.6 }}
        >
          My Experience
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl glow-border hover:bg-gray-700 transition-all duration-300 mb-6"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <FaBriefcase className="text-indigo-400 text-2xl mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <p className="text-sm text-gray-400">{exp.company}</p>
                </div>
              </div>
              <p className="text-gray-400 mb-2">{exp.duration}</p>
              <p className="text-gray-400 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;