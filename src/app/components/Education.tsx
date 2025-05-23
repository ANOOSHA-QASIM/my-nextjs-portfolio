"use client";
import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const education = [
  {
    degree: "Certified Cloud Applied Generative AI Engineering",
    institution: "Governor’s Initiative for AI & Computing (GIAIC), Governor House Sindh",
    duration: "2024 – Present",
    description: "Pursuing advanced training in web development, Python, and AI technologies under the Governor’s Initiative, focusing on building innovative, cloud-based solutions.",
  },
  {
    degree: "Intermediate in Commerce",
    institution: "Board of Intermediate Education",
    duration: "2021 – 2023",
    description: "Completed Intermediate education with a focus on commerce, developing analytical and problem-solving skills.",
  },
  {
    degree: "Matriculation in Science",
    institution: "Board of Secondary Education",
    duration: "2019 – 2021",
    description: "Completed Matriculation with a strong foundation in science, fostering a curiosity for technology and innovation.",
  },
];

const Education = () => {
  return (
    <section className="bg-gray-900 text-white font-inter py-20 relative overflow-hidden" id="education">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(79,_70,_229,_0.2),_transparent_50%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 tracking-wider"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.6 }}
        >
          My Education
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl glow-border hover:bg-gray-700 transition-all duration-300 mb-6"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <FaGraduationCap className="text-indigo-400 text-2xl mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                  <p className="text-sm text-gray-400">{edu.institution}</p>
                </div>
              </div>
              <p className="text-gray-400 mb-2">{edu.duration}</p>
              <p className="text-gray-400 leading-relaxed">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;