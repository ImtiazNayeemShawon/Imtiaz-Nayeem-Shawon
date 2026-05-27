"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, FolderGit2, Cpu, Code2, Users2 } from "lucide-react";

export default function AuthorityStrip() {
  const stats = [
    {
      icon: <Briefcase className="w-5 h-5 text-indigo-400" />,
      title: "4+ Years",
      desc: "Building Products"
    },
    {
      icon: <FolderGit2 className="w-5 h-5 text-purple-400" />,
      title: "30+ Projects",
      desc: "Client Deployments"
    },
    {
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      title: "Full-Stack + AI",
      desc: "Integrated Architectures"
    },
    {
      icon: <Code2 className="w-5 h-5 text-emerald-400" />,
      title: "Core Tech Stack",
      desc: "Next.js, FastAPI, LangGraph"
    },
    {
      icon: <Users2 className="w-5 h-5 text-indigo-400" />,
      title: "CTO Experience",
      desc: "Engineering Leadership"
    }
  ];

  return (
    <div className="w-full border-y border-white/5 bg-white/[0.01] backdrop-blur-sm py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-start">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col gap-2 group"
            >
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-white/5 border border-white/5 group-hover:border-indigo-500/30 transition-colors">
                  {stat.icon}
                </div>
                <h3 className="text-white text-base font-extrabold tracking-tight">
                  {stat.title}
                </h3>
              </div>
              <p className="text-zinc-500 text-xs font-medium leading-relaxed pl-0.5">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
