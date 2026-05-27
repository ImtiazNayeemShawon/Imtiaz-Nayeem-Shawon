"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Spotlight from "@/components/ui/spotlight";
import { 
  Calendar, 
  ArrowRight, 
  Terminal, 
  Cpu, 
  Layers, 
  Activity, 
  CheckCircle2, 
  Play, 
  Workflow,
  Check
} from "lucide-react";

export default function herosection() {
  const [activeStep, setActiveStep] = useState(0);

  // Rotate active execution node in the workflow for interactivity
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="home"
      className="hero min-h-screen w-full bg-[#0A0A0C] relative overflow-hidden flex items-center justify-center pt-24 pb-12 lg:py-0"
    >
      {/* Background Grids & Spotlight */}
      <Spotlight className="-top-40 left-0 md:left-0 md:-top-20" fill="rgba(129, 140, 248, 0.15)" />
      
      {/* Glow Effects */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none animate-glow-pulse" style={{ animationDelay: "-2s" }} />
      <div className="absolute top-[30%] right-[5%] w-[45%] h-[45%] rounded-full bg-indigo-500/10 blur-[150px] pointer-events-none animate-glow-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none animate-glow-pulse" style={{ animationDelay: "-4s" }} />
      
      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 bg-grid-[#19191d] bg-[size:32px_32px] opacity-[0.25] pointer-events-none" />
      <div className="absolute pointer-events-none inset-0 bg-[#0A0A0C] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#0A0A0C)]" />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, CTAs, Credibility */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Interactive Glowing Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex self-start items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-300 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="flex items-center gap-1">
                Architecting SaaS & AI Systems
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6"
            >
              I build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
                SaaS & AI products
              </span>{" "}
              that solve real problems.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-zinc-400 font-light leading-relaxed mb-8 max-w-2xl"
            >
              AI Engineer, Software Developer, and Systems Thinker helping founders and businesses turn ideas into scalable products, intelligent workflows, and production-ready systems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 mb-12"
            >
              <a
                href="https://cal.com/imtiaznayeem/30min?overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-sm px-6 py-3.5 rounded-full hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Book a Meeting</span>
                <Calendar className="w-4 h-4 text-indigo-200 transition-transform group-hover:scale-110" />
              </a>
              
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-indigo-500/30 font-semibold text-sm px-6 py-3.5 rounded-full backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 text-zinc-400 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>

            {/* Credibility Line / Tech Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border-t border-white/5 pt-8 max-w-2xl"
            >
              <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-4">Focus Areas & Specializations</p>
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs md:text-sm text-zinc-400 font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  Full-stack engineering
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  AI systems
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                  SaaS MVPs
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Agentic workflows
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  Scalable backend architecture
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Abstract Interactive Visual (Idea -> Execution -> Scale) */}
          <div className="lg:col-span-5 relative w-full h-[550px] lg:h-[600px] flex items-center justify-center">
            
            {/* SVG Connecting Flow Lines with dash animation */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="gradient-flow-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#818CF8" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="gradient-flow-2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              
              {/* Line 1: Idea Card -> Execution Card */}
              <path 
                d="M 170 170 C 230 170, 210 280, 270 280" 
                fill="none" 
                stroke="url(#gradient-flow-1)" 
                strokeWidth="2" 
                className="animate-flow-line"
              />
              
              {/* Line 2: Execution Card -> Scale Card */}
              <path 
                d="M 270 360 C 250 430, 180 410, 160 450" 
                fill="none" 
                stroke="url(#gradient-flow-2)" 
                strokeWidth="2" 
                className="animate-flow-line"
              />
            </svg>

            {/* Card 1: Idea / Input Node */}
            <motion.div
              initial={{ opacity: 0, x: -50, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-[8%] left-[-4%] sm:left-[4%] w-[85%] sm:w-[260px] glass-card glass-card-glow-indigo p-4 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-float-slow z-20"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5">
                <div className="flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-indigo-400" />
                  <span className="text-[11px] font-semibold text-zinc-400 tracking-wider uppercase codefont">Prompt Input</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-[12px] text-zinc-300 font-mono leading-relaxed">
                  <span className="text-indigo-400">user&gt;</span> "Create an automated agent that searches DB, writes summary, and sends Slack alerts."
                </p>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] text-emerald-400 font-semibold tracking-wide uppercase codefont">Active Parser</span>
                  </div>
                  <span className="text-[9px] text-zinc-500 font-mono">v1.2</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Execution / Orchestrator Node */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-[28%] right-[-4%] sm:right-[4%] w-[90%] sm:w-[320px] glass-card glass-card-glow-purple p-4 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-float-medium z-10"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5">
                <div className="flex items-center gap-1.5">
                  <Workflow className="w-4 h-4 text-purple-400" />
                  <span className="text-[11px] font-semibold text-zinc-400 tracking-wider uppercase codefont">Agent Workflow</span>
                </div>
                <div className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 text-[9px] font-mono border border-purple-500/20">
                  Orchestrator
                </div>
              </div>

              <div className="space-y-2.5">
                {/* Step 1 */}
                <div className={`p-2 rounded-lg border transition-all duration-300 ${
                  activeStep === 0 
                    ? "bg-purple-500/10 border-purple-500/30 shadow-[inset_0_1px_10px_rgba(168,85,247,0.15)]" 
                    : "bg-white/5 border-transparent opacity-80"
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        activeStep === 0 ? "bg-purple-500 text-white animate-pulse" : "bg-zinc-800 text-zinc-400"
                      }`}>
                        1
                      </span>
                      <span className="text-[12px] font-medium text-zinc-200">Database Analyzer Agent</span>
                    </div>
                    {activeStep > 0 ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Activity className={`w-3.5 h-3.5 ${activeStep === 0 ? "text-purple-400 animate-spin" : "text-zinc-600"}`} style={{ animationDuration: "3s" }} />
                    )}
                  </div>
                </div>

                {/* Step 2 */}
                <div className={`p-2 rounded-lg border transition-all duration-300 ${
                  activeStep === 1 
                    ? "bg-purple-500/10 border-purple-500/30 shadow-[inset_0_1px_10px_rgba(168,85,247,0.15)]" 
                    : "bg-white/5 border-transparent opacity-80"
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        activeStep === 1 ? "bg-purple-500 text-white animate-pulse" : "bg-zinc-800 text-zinc-400"
                      }`}>
                        2
                      </span>
                      <span className="text-[12px] font-medium text-zinc-200">LLM Summary Generator</span>
                    </div>
                    {activeStep > 1 ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Activity className={`w-3.5 h-3.5 ${activeStep === 1 ? "text-purple-400 animate-spin" : "text-zinc-600"}`} style={{ animationDuration: "3s" }} />
                    )}
                  </div>
                </div>

                {/* Step 3 */}
                <div className={`p-2 rounded-lg border transition-all duration-300 ${
                  activeStep === 2 
                    ? "bg-purple-500/10 border-purple-500/30 shadow-[inset_0_1px_10px_rgba(168,85,247,0.15)]" 
                    : "bg-white/5 border-transparent opacity-80"
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        activeStep === 2 ? "bg-purple-500 text-white animate-pulse" : "bg-zinc-800 text-zinc-400"
                      }`}>
                        3
                      </span>
                      <span className="text-[12px] font-medium text-zinc-200">Slack Dispatch Handler</span>
                    </div>
                    {activeStep === 2 ? (
                      <Activity className="w-3.5 h-3.5 text-purple-400 animate-spin" style={{ animationDuration: "3s" }} />
                    ) : (
                      <span className="w-3.5 h-3.5 rounded-full bg-zinc-800 border border-zinc-700" />
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Scale / Systems Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-[8%] left-[-2%] sm:left-[8%] w-[80%] sm:w-[250px] glass-card glass-card-glow-teal p-4 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-float-fast z-25"
            >
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5">
                <div className="flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-teal-400" />
                  <span className="text-[11px] font-semibold text-zinc-400 tracking-wider uppercase codefont">Live Metrics</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[9px] font-semibold uppercase tracking-wider">
                  Scale state
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="bg-white/5 p-2 rounded-lg border border-white/5">
                  <p className="text-[9px] text-zinc-500 uppercase font-bold tracking-wider">Uptime</p>
                  <p className="text-[13px] font-bold text-teal-400 font-mono">99.99%</p>
                </div>
                <div className="bg-white/5 p-2 rounded-lg border border-white/5">
                  <p className="text-[9px] text-zinc-500 uppercase font-bold tracking-wider">Latency</p>
                  <p className="text-[13px] font-bold text-teal-400 font-mono">120ms</p>
                </div>
              </div>

              {/* Sparkline Graph */}
              <div className="h-[45px] w-full relative">
                <svg className="w-full h-full" viewBox="0 0 180 50">
                  <defs>
                    <linearGradient id="sparkline-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Fill path under the curve */}
                  <path
                    d="M 0 45 Q 20 40, 40 43 T 80 20 T 120 30 T 160 10 L 180 12 L 180 50 L 0 50 Z"
                    fill="url(#sparkline-grad)"
                  />
                  
                  {/* Stroke path */}
                  <path
                    d="M 0 45 Q 20 40, 40 43 T 80 20 T 120 30 T 160 10 L 180 12"
                    fill="none"
                    stroke="#2DD4BF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  
                  {/* Glowing end point */}
                  <circle cx="180" cy="12" r="3.5" fill="#2DD4BF" className="animate-pulse" />
                </svg>
              </div>
            </motion.div>

            {/* Microcopy Caption */}
            <div className="absolute bottom-[0%] right-[10%] max-md:right-auto max-md:left-[10%] flex items-center gap-1.5 opacity-45 hover:opacity-85 transition-opacity duration-300">
              <span className="text-[10px] tracking-widest uppercase font-bold text-zinc-500 font-mono">
                From idea → MVP → product → scale
              </span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
