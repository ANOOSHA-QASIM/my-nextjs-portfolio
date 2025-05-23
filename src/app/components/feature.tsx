"use client";
import React from "react";
import { FaRocket, FaCode, FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaRocket />,
    title: "Fast Development",
    description: "Delivering high-performance web applications with rapid development cycles using modern frameworks like Next.js.",
  },
  {
    icon: <FaCode />,
    title: "Clean Code",
    description: "Writing maintainable, well-structured code with TypeScript and best practices for scalability.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    description: "Creating mobile-first, responsive interfaces with Tailwind CSS for seamless user experiences.",
  },
];

const Feature = () => {
  return (
    <section className="bg-gray-900 text-white font-inter py-20 relative overflow-hidden" id="features">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(79,_70,_229,_0.2),_transparent_50%)]" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 tracking-wider"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.6 }}
        >
          Key Features
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl glow-border hover:bg-gray-700 transition-all duration-300"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <div className="text-indigo-400 text-4xl mb-4 mx-auto">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;