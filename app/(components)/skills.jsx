"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Layout, Server, BrainCircuit, Database, Cloud } from "lucide-react";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("All");

  const categories = [
    { id: "All", name: "All Skills", icon: <Code className="w-4 h-4" /> },
    { id: "AI", name: "AI / ML / LLM", icon: <BrainCircuit className="w-4 h-4" /> },
    { id: "Frontend", name: "Frontend", icon: <Layout className="w-4 h-4" /> },
    { id: "Backend", name: "Backend", icon: <Server className="w-4 h-4" /> },
    { id: "Database", name: "Database", icon: <Database className="w-4 h-4" /> },
    { id: "DevOps", name: "DevOps / Cloud", icon: <Cloud className="w-4 h-4" /> }
  ];

  const skillData = [
    // AI / ML / LLM
    { name: "Python", category: "AI", level: "Production", desc: "Scripting, model integration, agent loops development." },
    { name: "LangGraph", category: "AI", level: "Core", desc: "Cyclic state-aware multi-agent orchestrator design." },
    { name: "RAG & Vector Search", category: "AI", level: "Production", desc: "Chunky semantic context search, document parsing." },
    { name: "Vector Databases", category: "AI", level: "Production", desc: "Pinecone, pgvector, Qdrant integration." },
    { name: "LLM APIs Integration", category: "AI", level: "Core", desc: "OpenAI, Anthropic, Gemini, Groq orchestration." },
    { name: "Agentic AI workflows", category: "AI", level: "Production", desc: "Autonomous task solvers, tool callers, validator loops." },
    { name: "AI Microservices", category: "AI", level: "Production", desc: "Distributed runtimes optimized for concurrent LLM streaming." },

    // Frontend
    { name: "React", category: "Frontend", level: "Expert", desc: "Interactive UI, custom hooks, atomic components." },
    { name: "Next.js", category: "Frontend", level: "Expert", desc: "App router, SSR, static page optimization, API routing." },
    { name: "TypeScript", category: "Frontend", level: "Production", desc: "Statically typed safety across full-stack applications." },
    { name: "Tailwind CSS", category: "Frontend", level: "Expert", desc: "Utility styling, custom themes, responsive grids." },
    { name: "Redux Toolkit", category: "Frontend", level: "Production", desc: "Global state management for complex web apps." },
    { name: "Zustand", category: "Frontend", level: "Production", desc: "Lightweight, reactive client-side store systems." },

    // Backend
    { name: "Node.js", category: "Backend", level: "Production", desc: "High-throughput asynchronous JavaScript runtime." },
    { name: "Express.js", category: "Backend", level: "Production", desc: "Modular, light API routing layers for services." },
    { name: "NestJS", category: "Backend", level: "Production", desc: "Structured, class-based TypeScript enterprise servers." },
    { name: "FastAPI", category: "Backend", level: "Production", desc: "Fast, document-documented async Python API microservices." },
    { name: "REST APIs", category: "Backend", level: "Production", desc: "Secure, structured endpoint specifications." },
    { name: "Authentication Systems", category: "Backend", level: "Production", desc: "JWT, session cookies, OAuth security layers." },

    // Database
    { name: "MongoDB & Mongoose", category: "Database", level: "Production", desc: "JSON document schemas for rapid scaling." },
    { name: "PostgreSQL & Prisma", category: "Database", level: "Production", desc: "Strict schema relations, migrations, pgvector query maps." },
    { name: "Redis Caching", category: "Database", level: "Production", desc: "Context caching, fast data queues, session buffers." },

    // DevOps
    { name: "AWS Cloud", category: "DevOps", level: "Production", desc: "EC2 provisioning, S3 assets, Lambda execution." },
    { name: "Docker", category: "DevOps", level: "Production", desc: "Containerized environments for consistent microservice execution." },
    { name: "Cloudinary", category: "DevOps", level: "Production", desc: "Dynamic media and image delivery pipelines." },
    { name: "Deployment Systems", category: "DevOps", level: "Production", desc: "Vercel, Railway, DigitalOcean deployment loops." },
    { name: "Server Management", category: "DevOps", level: "Production", desc: "Nginx reverse proxy, SSL setups, system process controls." }
  ];

  const filteredSkills = activeTab === "All" 
    ? skillData 
    : skillData.filter(skill => skill.category === activeTab);

  return (
    <section id="tech" className="py-24 md:py-32 w-full bg-[#070A12] relative overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] h-[35%] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-3 codefont">
            Technical Stack
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
            Skills & Capabilities
          </h2>
          <p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed">
            I write clean, structured code and design architectures that prioritize performance, security, and developer ergonomics.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2.5 mb-10 border-b border-white/5 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 text-xs md:text-sm font-semibold px-4 py-2 rounded-full border transition-all duration-300 ${
                activeTab === cat.id
                  ? "bg-indigo-600 border-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                  : "bg-white/5 border-white/5 text-zinc-400 hover:border-white/10 hover:text-white"
              }`}
            >
              {cat.icon}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={skill.name}
                className="glass-card p-6 rounded-xl border border-white/5 hover:border-indigo-500/20 transition-all duration-300 flex flex-col justify-between hover:bg-white/[0.02] group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-white text-base font-bold tracking-tight">
                      {skill.name}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-zinc-400 text-xs font-light leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-zinc-500">
                  <span>// STACK: {skill.category}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:animate-ping" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
