"use client";
import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 font-inter py-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(79,_70,_229,_0.2),_transparent_50%)]" />
      <div className="container mx-auto px-5 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-white mb-1 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
              AQ WebWorks
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Crafting modern, responsive web experiences.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center md:items-end"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.6 }}
          >
            <div className="flex gap-4 mb-3">
              <Link
                href="/"
                className="text-gray-400 hover:text-gray-300 transition duration-300 text-sm"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-gray-400 hover:text-gray-300 transition duration-300 text-sm"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="text-gray-400 hover:text-gray-300 transition duration-300 text-sm"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-gray-400 hover:text-gray-300 transition duration-300 text-sm"
              >
                Contact
              </Link>
            </div>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/ANOOSHA-QASIM"
                target="_blank"
                className="text-indigo-400 hover:text-gray-300 transition duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: false }}
              >
                <FaGithub className="text-xl" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/anusha-qasim-714ab1324/"
                target="_blank"
                className="text-indigo-400 hover:text-gray-300 transition duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: false }}
              >
                <FaLinkedin className="text-xl" />
              </motion.a>
              <motion.a
                href="https://x.com/anushatech333"
                target="_blank"
                className="text-indigo-400 hover:text-gray-300 transition duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                viewport={{ once: false }}
              >
                <FaTwitter className="text-xl" />

              </motion.a>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="text-center mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Anusha Qasim. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;