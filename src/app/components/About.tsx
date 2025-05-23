"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="text-gray-300 bg-gray-900 font-inter pt-16 relative overflow-hidden">
      {/* Decorative Background Wave */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full opacity-20"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#gradient)"
            d="M0,192L60,186.7C120,181,240,171,360,181.3C480,192,600,224,720,213.3C840,203,960,149,1080,138.7C1200,128,1320,160,1380,176L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4f46e5" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-5 py-16 relative z-10">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full flex flex-col bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl mx-auto max-w-4xl"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl font-semibold text-white mb-6 text-center"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="leading-relaxed text-lg text-gray-300 mb-4 text-center"
          >
            I’m Anusha Qasim, a passionate Frontend Developer dedicated to
            crafting intuitive and responsive web experiences. My expertise spans{" "}
            <span className="font-semibold text-indigo-400">Next.js</span>,{" "}
            <span className="font-semibold text-indigo-400">Tailwind CSS</span>,
            and <span className="font-semibold text-indigo-400">TypeScript</span>,
            allowing me to build seamless, user-centric interfaces.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="leading-relaxed text-lg text-gray-300 mb-4 text-center"
          >
            As a student in the Governor Sindh’s GIAIC program, I’m advancing my
            skills in{" "}
            <span className="font-semibold text-indigo-400">Python</span> and{" "}
            <span className="font-semibold text-indigo-400">AI</span>, with a
            goal to create innovative solutions that blend design and technology.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="leading-relaxed text-lg text-gray-300 mb-6 text-center"
          >
            Beyond coding, I’m driven by a curiosity for new frameworks, design
            trends, and problem-solving. I’m excited to collaborate on projects
            that challenge boundaries and deliver impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex justify-center gap-4"
          >
            <a
              href="#contact"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-6 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="bg-gray-700 text-white py-3 px-6 rounded-full font-semibold shadow-lg hover:bg-gray-600 hover:scale-105 transition-all duration-300"
            >
              View Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;