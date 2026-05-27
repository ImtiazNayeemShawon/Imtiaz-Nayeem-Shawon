"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Github, 
  Twitter, 
  Instagram, 
  Facebook, 
  BookOpen, 
  ArrowUpRight 
} from "lucide-react";

export default function SocialGrowth() {
  const channels = [
    {
      name: "X (Twitter)",
      icon: <Twitter className="w-5 h-5 text-zinc-300" />,
      desc: "Daily thoughts on SaaS builds, AI engineering experiments, prompt patterns, and systems logic.",
      action: "Follow",
      link: "https://x.com/imtiaz_zippix",
      borderHover: "hover:border-white/20"
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5 text-purple-400" />,
      desc: "Open-source repositories, agentic workflows, database configurations, and template repos.",
      action: "Review Code",
      link: "https://github.com/ImtiazNayeemShawon",
      borderHover: "hover:border-purple-500/30"
    },
    {
      name: "Medium",
      icon: <BookOpen className="w-5 h-5 text-emerald-400" />,
      desc: "Long-form engineering deep-dives, RAG tutorials, multi-agent frameworks, and systems thinking.",
      action: "Read Articles",
      link: "https://medium.com/@imtiaznayim95",
      borderHover: "hover:border-emerald-500/30"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5 text-pink-400" />,
      desc: "Visual workflow breakdowns, system design graphics, carousels, and developer life behind the scenes.",
      action: "Follow visual logs",
      link: "https://www.instagram.com/imtiaz.scale",
      borderHover: "hover:border-pink-500/30"
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5 text-blue-400" />,
      desc: "Founder updates, networking, developer groups collaboration, and business scaling thoughts.",
      action: "Follow",
      link: "https://www.facebook.com/imtiaznayeemshawon/",
      borderHover: "hover:border-blue-500/30"
    }
  ];

  return (
    <section id="social" className="py-24 md:py-32 w-full bg-[#070A12] relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] h-[35%] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-3 codefont">
            Connect & Grow
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
            Follow My Build Journey
          </h2>
          <p className="text-zinc-400 font-light text-base leading-relaxed">
            I share what I’m building, what I’m learning, and how AI/SaaS products are designed, engineered, launched, and scaled.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map((channel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`glass-card p-6 rounded-2xl shadow-xl flex flex-col justify-between items-start border border-white/5 transition-all duration-300 ${channel.borderHover} hover:bg-white/[0.02] group`}
            >
              <div className="w-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
                    {channel.icon}
                  </div>
                  <a
                    href={channel.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
                <h3 className="text-white text-base font-bold tracking-tight mb-2">
                  {channel.name}
                </h3>
                <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed mb-6">
                  {channel.desc}
                </p>
              </div>

              <a
                href={channel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center gap-1.5 text-indigo-400 hover:text-indigo-300 text-xs font-semibold uppercase tracking-wide transition-colors"
              >
                <span>{channel.action}</span>
                <span>→</span>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
