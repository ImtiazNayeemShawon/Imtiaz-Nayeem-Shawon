"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Lightbulb, Blocks } from "lucide-react";

export default function AboutSection() {
  const cards = [
    {
      icon: <Lightbulb className="w-6 h-6 text-indigo-400" />,
      title: "Product Thinking",
      desc: "I start with the real problem, not the feature list. I collaborate with founders to outline user journeys, map workflows, and define clear business goals before writing code."
    },
    {
      icon: <BrainCircuit className="w-6 h-6 text-purple-400" />,
      title: "AI Engineering",
      desc: "I design AI systems that connect reasoning, tools, data, and workflows. I implement smart memory systems, RAG indexes, and automated agents to automate complex operations."
    },
    {
      icon: <Blocks className="w-6 h-6 text-cyan-400" />,
      title: "Scalable Development",
      desc: "I build full-stack products with clean architecture and production readiness. I design high-throughput APIs, modular databases, and fast frontend experiences ready to support growth."
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 w-full bg-[#070A12] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[40%] left-[-10%] w-[35%] h-[35%] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        <div className="max-w-3xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-3 codefont"
          >
            My Philosophy
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-6"
          >
            More than a developer — I think in systems.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-zinc-400 font-light leading-relaxed"
          >
            I combine software engineering, AI systems, product thinking, and scalable architecture to build products that are not just functional, but useful, maintainable, and ready to grow. My work sits at the intersection of SaaS, automation, AI engineering, and business problem-solving.
          </motion.p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card p-6 md:p-8 rounded-2xl shadow-xl flex flex-col items-start gap-4 transition-all duration-300 hover:border-indigo-500/35 hover:-translate-y-1 hover:bg-white/[0.03] group"
            >
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:border-indigo-500/30 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-white text-lg font-bold tracking-tight mt-2">
                {card.title}
              </h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
