"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Briefcase, Plus, Minus, ArrowUpRight } from "lucide-react";

export default function Experience({ content, title, description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Divide content into main roles and minor/older roles
  const mainRoles = content ? content.slice(0, 5) : [];
  const olderRoles = content ? content.slice(5) : [];

  function TimelineCard({ data, index }) {
    const [open, setOpen] = useState(index === 0); // Open the first item by default

    return (
      <div className="relative pl-8 pb-10 border-l border-white/10 last:pb-0">
        {/* Timeline Node Point */}
        <div className="absolute left-[-6px] top-1.5 w-3 h-3 rounded-full bg-indigo-500 border border-[#070A12] shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
        
        <div className="glass-card rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-indigo-500/25">
          {/* Header */}
          <button
            onClick={() => setOpen(!open)}
            className="w-full p-6 text-left flex items-start justify-between gap-4 select-none hover:bg-white/[0.01] transition-colors"
          >
            <div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                <h3 className="text-white text-lg font-bold tracking-tight">
                  {data?.title}
                </h3>
                <span className="px-2.5 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-[10px] font-bold uppercase tracking-wider font-mono">
                  {data?.tag}
                </span>
              </div>
              <p className="text-zinc-500 text-xs font-mono">// Core Systems & Architectures</p>
            </div>
            <div className="p-1 rounded bg-white/5 border border-white/5 text-zinc-400">
              {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            </div>
          </button>

          {/* Collapsible Content */}
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 border-t border-white/5 pt-4 text-zinc-400 text-sm font-light leading-relaxed">
                  {data?.description}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }

  return (
    <section id="experince" className="py-24 md:py-32 w-full bg-[#070A12] relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-[20%] left-[-10%] w-[35%] h-[35%] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-8 z-10 relative">
        
        {/* Section Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-3 codefont">
            Career Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
            {title || "Experiences of Working as a Developer"}
          </h2>
          <p className="text-zinc-400 font-light text-base leading-relaxed">
            {description || "A timeline of engineering leadership, scalable deployments, and full-stack system architecture."}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-2">
          {/* Main Roles */}
          <div className="space-y-2">
            {mainRoles.map((role, index) => (
              <TimelineCard key={index} data={role} index={index} />
            ))}
          </div>

          {/* Collapsed Secondary/Older Roles */}
          <AnimatePresence>
            {isExpanded && olderRoles.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden space-y-2 mt-2"
              >
                {olderRoles.map((role, index) => (
                  <TimelineCard key={`older-${index}`} data={role} index={index + 5} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Expand Trigger Button */}
        {olderRoles.length > 0 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-wider rounded-full border border-white/10 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>{isExpanded ? "Collapse History" : "View Full Experience"}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
