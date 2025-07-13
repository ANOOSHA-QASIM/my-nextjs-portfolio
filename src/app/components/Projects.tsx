"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Projects = () => {
  const [filter, setFilter] = useState("featured");

  const featuredProjects = [
    {
      title: "E-commerce Website",
      tech: "Next.js, Tailwind CSS, Sanity",
      image: "/e-comerce.jpg",
      description:
        "A feature-rich e-commerce platform with seamless shopping, user authentication, and secure checkout.",
      github: "https://github.com/ANOOSHA-QASIM/e-commerce.git",
      vercel: "https://e-commerce-aq.vercel.app/",
    },
    {
      title: "Resume Builder Website",
      tech: "HTML, CSS, TypeScript",
      image: "/resume.jpeg",
      description:
        "A user-friendly resume builder with live previews and customizable templates.",
      github: "https://github.com/ANOOSHA-QASIM/Resume-Builder/tree/main",
      vercel: "https://resume-builder-hhe4.vercel.app/",
    },
    {
      title: "Tic-Tac-Toe Game",
      tech: "HTML, CSS, TypeScript",
      image: "/tic-tac-toe.jpg",
      description:
        "A clean and responsive Tic-Tac-Toe game with win/draw detection and disabled gameplay after result.",
      github: "https://github.com/ANOOSHA-QASIM/tic-tac-toe",
      vercel: "https://tic-tac-toe-liart-theta-25.vercel.app/",
    },
    {
      title: "Currency Converter App",
      tech: "HTML, CSS, TypeScript",
      image: "/currency.png",
      description:
        "A real-time currency converter app with live exchange rates, country flags, and clean responsive UI.",
      github: "https://github.com/ANOOSHA-QASIM/currency-converter-ts",
      vercel: "https://currency-converter-ts-khqr.vercel.app/",
    },
  ];

  const pythonProjects = [
    {
      title: "Unit Converter",
      tech: "Python, Streamlit",
      image: "/unit.jpg",
      description:
        "A versatile unit converter for length, weight, and temperature with an intuitive interface.",
      github:
        "https://github.com/ANOOSHA-QASIM/sir-zia-assignments/tree/main/unit-converter",
      vercel:
        "https://sir-zia-assignments-wczzzewwek9etgtqiwvw8r.streamlit.app/",
    },
    {
      title: "BMI Calculator",
      tech: "Python, Streamlit",
      image: "/bmi.jpg",
      description:
        "A simple BMI calculator providing health insights with a clean Streamlit interface.",
      github:
        "https://github.com/ANOOSHA-QASIM/sir-zia-assignments/tree/main/project-4-assignments/Python_9_mini_projects/BMI%20calculator%20using%20stremlit",
      vercel:
        "https://python9miniprojects-btiufza7k68vlsei5ewpnq.streamlit.app/",
    },
    {
      title: "Password Strength Meter",
      tech: "Python",
      image: "/password.jpg",
      description:
        "A tool to evaluate password complexity with real-time feedback.",
      github:
        "https://github.com/ANOOSHA-QASIM/sir-zia-assignments/tree/main/password-strength-meter",
      vercel:
        "https://sir-zia-assignmentsgit-6jbr3aciw2jy5ahh7t8mrk.streamlit.app/",
    },
    {
      title: "15-Min AI Website",
      tech: "Python, Streamlit",
      image: "/ai image.jpg",
      description:
        "An AI-powered website built rapidly with Streamlit, showcasing interactive features.",
      github:
        "https://github.com/ANOOSHA-QASIM/sir-zia-assignments/tree/main/project-4-assignments/Python_9_mini_projects/python-website-15min",
      vercel:
        "https://sir-zia-assignmentsgit-3re5bncxjbvqub6mfycexa.streamlit.app/",
    },
    {
      title: "Python Mini Games",
      tech: "Python",
      image: "/Python.jpg",
      description:
        "A collection of engaging mini-games demonstrating Python programming skills.",
      github:
        "https://github.com/ANOOSHA-QASIM/sir-zia-assignments/tree/main/project-4-assignments/Python_9_mini_projects",
      vercel: "#",
    },
    {
      title: "Personal Library Manager",
      tech: "Python",
      image: "/library.webp",
      description:
        "A Python app to manage a personal book library, allowing users to add, remove, and list books.",
      github:
        "https://github.com/ANOOSHA-QASIM/sir-zia-assignments/tree/main/personal-library-manager",
      vercel: "#",
    },
  ];

  return (
    <motion.section
      className="text-gray-400 bg-gray-900 font-inter py-20 relative overflow-hidden"
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-gray-900" />
      <div className="container mx-auto px-5 relative z-10">
        <div className="flex flex-wrap w-full mb-12">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl text-3xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
              My Projects
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded" />
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-lg">
            Explore my portfolio of web and Python-based projects, showcasing
            modern, responsive designs and innovative solutions.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <button
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              filter === "featured"
                ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
            onClick={() => setFilter("featured")}
          >
            Featured Projects
          </button>
          <button
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              filter === "python"
                ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
            onClick={() => setFilter("python")}
          >
            Python Projects
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {(filter === "featured" ? featuredProjects : pythonProjects).map(
            (project, index) => (
              <motion.div
                key={index}
                className="p-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl glow-border hover:bg-gray-700 transition-all duration-300 h-full flex flex-col">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={250}
                    className="rounded-lg w-full h-40 object-cover mb-4"
                  />
                  <h3 className="text-sm text-indigo-400 tracking-widest uppercase mb-2">
                    {project.tech}
                  </h3>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    {project.title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  <div className="flex gap-4 mt-4">
                    <Link
                      href={project.github}
                      className="text-indigo-400 hover:text-gray-300 transition duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </Link>
                    {project.vercel !== "#" && (
                      <Link
                        href={project.vercel}
                        className="text-indigo-400 hover:text-gray-300 transition duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {filter === "python" ? "Streamlit" : "Live"}
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
