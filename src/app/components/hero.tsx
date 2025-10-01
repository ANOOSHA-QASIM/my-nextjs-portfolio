"use client";
import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Hero = () => {
  const [typewriterKey, setTypewriterKey] = useState(0);

  useEffect(() => {
    setTypewriterKey((prevKey) => prevKey + 1);
  }, []);

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/anusha-qasim-714ab1324/",
      icon: FaLinkedin,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/ANOOSHA-QASIM",
      icon: FaGithub,
      label: "GitHub",
    },
    {
      href: "https://x.com/anushatech333",
      icon: FaTwitter,
      label: "Twitter",
    },
    {
      href: "https://www.instagram.com/anooshaqasim/",
      icon: FaInstagram,
      label: "Instagram",
    },
    {
      href: "https://www.facebook.com/profile.php?id=61575896135326",
      icon: FaFacebook,
      label: "Facebook",
    },
  ];

  return (
    <section className="text-gray-300 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 font-inter pt-20">
      <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center justify-between">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="title-font sm:text-5xl text-3xl font-bold mb-6 text-white leading-tight"
          >
            Hi, I’m <span className="text-indigo-400">Anusha Qasim</span>
            <br />
            <span className="text-2xl sm:text-3xl">
              <Typewriter
                key={typewriterKey}
                words={[
                  "Frontend Developer",
                  "UI/UX Enthusiast",
                  "GIAIC Student",
                  "Tech Innovator",
                ]}
                loop={3}
                cursor={true}
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-8 text-lg text-gray-300 leading-relaxed max-w-md"
          >
            Building modern web solutions with Next.js, Tailwind CSS, and
            TypeScript. Currently expanding my expertise in Python and AI via
            GIAIC.
          </motion.p>

          <motion.div
            className="flex space-x-4 mb-8"
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon className="text-white text-xl" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <a
              href="/Anusha Qasim Resume.pdf"
              download
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-6 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Download CV
            </a>
            <a
              href="https://github.com/ANOOSHA-QASIM"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 text-white py-3 px-6 rounded-full font-semibold shadow-lg hover:bg-gray-600 hover:scale-105 transition-all duration-300"
            >
              Visit GitHub
            </a>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative"
        >
          <div className="relative w-64 h-64 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-xl opacity-50" />
            <Image
              src="/profle.png"
              alt="Anusha Qasim"
              width={256}
              height={256}
              priority
              className="relative object-cover object-center rounded-full w-full h-full border-4 border-gray-800 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
