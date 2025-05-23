"use client";
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Abdul Samad",
    role: "Project Manager",
    quote: "Anusha delivered an exceptional e-commerce platform with a seamless user experience. Her attention to detail and responsiveness made the project a success.",
  },
  {
    name: "Fatima Zahra",
    role: "Tech Lead",
    quote: "Working with Anusha was a pleasure. Her expertise in Next.js and TypeScript ensured our blog site was both performant and scalable.",
  },
  {
    name: "Omar Farooq",
    role: "Client",
    quote: "Anusha’s ability to create intuitive, mobile-first designs is remarkable. The resume builder she developed exceeded our expectations.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-900 text-white font-inter py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(79,_70,_229,_0.2),_transparent_50%)]" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 tracking-wider"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.6 }}
        >
          What People Say
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl glow-border hover:bg-gray-700 transition-all duration-300"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <p className="text-gray-400 leading-relaxed mb-4 italic">{`"${testimonial.quote}"`}</p>
              <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;