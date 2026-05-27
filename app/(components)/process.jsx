"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  Layers, 
  Palette, 
  Terminal, 
  BrainCircuit, 
  Rocket 
} from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "001",
      icon: <Search className="w-5 h-5 text-indigo-400" />,
      title: "Problem Mapping",
      desc: "I identify the real user pain, business goal, operational workflow, and product opportunity before touching code. Together we define what success looks like.",
      details: "Outputs: Scope document, user journey maps, core feature requirements."
    },
    {
      num: "002",
      icon: <Layers className="w-5 h-5 text-purple-400" />,
      title: "System Design",
      desc: "I map system architecture, user flows, database structures, API layers, and scalability requirements. I layout the blueprint of the tech stack.",
      details: "Outputs: Database schemas, API endpoints layout, architecture diagrams."
    },
    {
      num: "003",
      icon: <Palette className="w-5 h-5 text-cyan-400" />,
      title: "UI/UX & Product Experience",
      desc: "I design interfaces that make complex systems simple, usable, and conversion-focused. Clean dashboard UX drives user retention.",
      details: "Outputs: Interactive wireframes, high-fidelity UI designs."
    },
    {
      num: "004",
      icon: <Terminal className="w-5 h-5 text-emerald-400" />,
      title: "Full-Stack Development",
      desc: "I build the frontend, robust backend, authentication, database transactions, dashboards, and third-party integrations with clean, testable code.",
      details: "Outputs: Next.js frontend, API endpoints, backend services, deployment scripts."
    },
    {
      num: "005",
      icon: <BrainCircuit className="w-5 h-5 text-indigo-400" />,
      title: "AI Integration",
      desc: "I add AI where it creates real value: vector search, automated agent systems, agent reasoning, LLM tool calling, and intelligent workflows.",
      details: "Outputs: Vector store schemas, custom agent nodes, LLM fine-tuning/prompts."
    },
    {
      num: "006",
      icon: <Rocket className="w-5 h-5 text-purple-400" />,
      title: "Deployment & Scale",
      desc: "I deploy the software to AWS or Vercel, setup monitoring alerts, optimize server query response times, and prepare the systems for scale.",
      details: "Outputs: Live production URL, monitoring alert dashboards, server scaling rules."
    }
  ];

  return (
    <section id="process" className="py-24 md:py-32 w-full bg-[#070A12] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[50%] left-[-15%] w-[40%] h-[40%] rounded-full bg-indigo-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Sticky Title */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-4">
            <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest codefont">
              Execution Roadmap
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              My Product-Building Process
            </h2>
            <p className="text-zinc-400 font-light text-base leading-relaxed">
              From unclear idea to scalable product system. I follow a structured engineering workflow to ship clean, production-ready software.
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-1 text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <span>Start a Project</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Vertical Timeline Steps */}
          <div className="lg:col-span-8 space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="glass-card p-6 md:p-8 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start hover:bg-white/[0.02]"
              >
                {/* Step Num & Icon */}
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs font-bold text-zinc-500 tracking-wider font-mono bg-white/5 border border-white/5 px-2.5 py-1 rounded">
                    {step.num}
                  </span>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-zinc-400">
                    {step.icon}
                  </div>
                </div>

                {/* Step Description */}
                <div className="flex-1 space-y-3">
                  <h3 className="text-white text-lg font-bold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 text-sm font-light leading-relaxed">
                    {step.desc}
                  </p>
                  
                  {/* Visual Metadata Spec */}
                  <div className="pt-2 border-t border-white/5">
                    <p className="text-[11px] font-mono text-zinc-500">
                      <span className="text-indigo-400 font-semibold">//</span> {step.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
