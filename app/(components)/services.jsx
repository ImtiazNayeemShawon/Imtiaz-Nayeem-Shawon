"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Cpu, 
  Bot, 
  Zap, 
  Globe, 
  Database, 
  Rocket 
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Cpu className="w-6 h-6 text-indigo-400" />,
      title: "AI-Powered SaaS Products",
      desc: "From MVP to scalable SaaS platforms using modern frontend, backend, AI, and cloud architecture. Built to deliver business value and clean user experiences."
    },
    {
      icon: <Bot className="w-6 h-6 text-purple-400" />,
      title: "Agentic AI Systems",
      desc: "AI workflows that can plan, use tools, interact with APIs, retrieve knowledge, and automate real business tasks. Moving beyond simple prompts to autonomous system intelligence."
    },
    {
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      title: "Custom Business Automation",
      desc: "Internal tools, dashboards, custom databases, workflows, and automated AI assistants that eliminate manual spreadsheets and reduce operational overhead."
    },
    {
      icon: <Globe className="w-6 h-6 text-emerald-400" />,
      title: "Full-Stack Web Applications",
      desc: "Modern, high-performance web applications using Next.js, React, Node.js, FastAPI, PostgreSQL, MongoDB, and AWS cloud infrastructure."
    },
    {
      icon: <Database className="w-6 h-6 text-indigo-400" />,
      title: "RAG & Knowledge Systems",
      desc: "Document intelligence, vector databases, semantically indexed knowledge searches, and smart Q&A systems allowing teams to query private operational data safely."
    },
    {
      icon: <Rocket className="w-6 h-6 text-purple-400" />,
      title: "MVP Development",
      desc: "Helping startup founders turn raw concepts into functional, validated, launch-ready MVPs that attract early adopters, test assumptions, and secure funding."
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 w-full bg-[#070A12] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3 codefont"
          >
            My Offerings
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4"
          >
            What I Build
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-zinc-400 font-light leading-relaxed"
          >
            I architect, design, develop, and scale software solutions designed to solve real business pain points.
          </motion.p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl shadow-xl flex flex-col items-start gap-4 transition-all duration-300 hover:border-cyan-500/35 hover:-translate-y-1 hover:bg-white/[0.02] group"
            >
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:border-cyan-500/30 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-white text-lg font-bold tracking-tight mt-2">
                {service.title}
              </h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
