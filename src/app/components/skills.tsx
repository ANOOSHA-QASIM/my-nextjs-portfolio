"use client";
import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaGithub, FaFigma, FaCode, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { icon: <FaHtml5 />, name: "HTML", color: "text-orange-500" },
  { icon: <FaCss3Alt />, name: "CSS", color: "text-blue-500" },
  { icon: <FaJsSquare />, name: "JavaScript", color: "text-yellow-400" },
  { icon: <FaCode />, name: "TypeScript", color: "text-sky-400" },
  { icon: <FaPython />, name: "Python", color: "text-blue-400" },
];

const tools = [
  { icon: <SiNextdotjs />, name: "Next.js", color: "text-white" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-teal-400" },
  { icon: <FaGithub />, name: "GitHub", color: "text-gray-300" },
  { icon: <FaFigma />, name: "Figma", color: "text-pink-400" },
];

const Skills = () => {
  return (
    <section className="bg-gray-900 text-white font-inter py-20 relative overflow-hidden" id="skills">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(79,_70,_229,_0.2),_transparent_50%)]" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 tracking-wider"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.6 }}
        >
          My Skills & Tools
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl glow-border hover:bg-gray-700 transition-all duration-300"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <div className={`text-5xl mb-4 ${skill.color} mx-auto`}>{skill.icon}</div>
              <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
        <motion.h2
          className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 tracking-wider"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.6 }}
        >
          Tools & Frameworks
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl glow-border hover:bg-gray-700 transition-all duration-300"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <div className={`text-5xl mb-4 ${tool.color} mx-auto`}>{tool.icon}</div>
              <h3 className="text-lg font-semibold text-white">{tool.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;