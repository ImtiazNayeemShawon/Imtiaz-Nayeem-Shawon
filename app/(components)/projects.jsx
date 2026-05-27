"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ShieldAlert, ArrowUpRight } from "lucide-react";

import Ryun from "/public/projects/ryun.png";
import Zipbox from "/public/projects/zipbox.png";
import Frosty from "/public/projects/frosty.png";
import Skinsort from "/public/projects/skinsort.png";
import Mzmedia from "/public/projects/mzmedia.png";
import SkyNetix from "/public/projects/skynetix.png";
import Dealer from "/public/dealer.png";
import Fahim from "/public/fahim.png";

export default function Projects() {
  const projects = [
    {
      title: "Dealer Nexus",
      category: "SaaS Platform",
      problem: "Automotive dealerships needed a unified, high-performance portal to coordinate workflows and lead intake pipelines.",
      built: "Architected a custom dashboard, secure authentication, lead routing logic, and high-performance API integrations.",
      tags: ["SaaS", "Next.js", "UI/UX", "Product Strategy", "API Integration"],
      image: Dealer,
      link: "https://dealernexus.com"
    },
    {
      title: "Cosmpulse",
      category: "Productivity SaaS",
      problem: "Users struggled to maintain habits and record daily progress logs within traditional complex planning platforms.",
      built: "Created a simplified logs tracking dashboard with interactive visual habits trackers and user logging systems.",
      tags: ["SaaS", "Dashboard", "User Tracking", "Product Design", "Zustand"],
      image: Skinsort,
      link: ""
    },
    {
      title: "Ryun Shim",
      category: "Academic Showcase",
      problem: "A Cornell University graduate needed a premium visual CV to highlight research, papers, and credentials cleanly.",
      built: "Designed a minimal, high-speed profile containing animated components, publication indexes, and contact links.",
      tags: ["Portfolio", "Frontend", "Next.js", "Framer Motion"],
      image: Ryun,
      link: ""
    },
    {
      title: "MZ Media",
      category: "Digital Agency",
      problem: "An agency needed a high-converting website to present video case studies, client feedback, and lead captures.",
      built: "Engineered a custom responsive agency website with optimized video players, performance enhancements, and review widgets.",
      tags: ["Next.js", "Tailwind CSS", "Lead Capture", "SEO Optimized"],
      image: Mzmedia,
      link: ""
    },
    {
      title: "Zipbox",
      category: "Design & Development Agency",
      problem: "An agency required a clean, visually outstanding portfolio site to capture high-value design leads.",
      built: "Implemented a responsive custom agency showcase with complex horizontal scroll components and micro-interactions.",
      tags: ["Agency Portfolio", "React", "Horizontal Scroll", "Tailwind CSS"],
      image: Zipbox,
      link: ""
    },
    {
      title: "Frosty Icepod",
      category: "E-Commerce",
      problem: "An icepod retail brand needed a fast, high-converting product checkout flow and sales pages.",
      built: "Coded a high-performance custom product e-commerce catalog featuring shopping cart systems, custom reviews, and checkout.",
      tags: ["E-Commerce", "Next.js", "Stripe API", "Conversion Optimization"],
      image: Frosty,
      link: ""
    },
    {
      title: "Skynetix",
      category: "Marketing Agency",
      problem: "A digital marketing firm needed a high-performance, authoritative website to list 360-degree services.",
      built: "Developed a premium, responsive multi-page marketing hub detailing client case studies and intake funnels.",
      tags: ["Marketing Hub", "Next.js", "Lead Flow", "Responsive Layout"],
      image: SkyNetix,
      link: ""
    },
    {
      title: "Product Designer Portfolio",
      category: "Design Showcase",
      problem: "A senior UI/UX designer required a pixel-perfect, premium grid portfolio to display case studies.",
      built: "Coded a responsive showcase website emphasizing high-contrast layout grids, micro-interactions, and visual assets.",
      tags: ["UI/UX Showcase", "Next.js", "Framer Motion", "Minimal Grid"],
      image: Fahim,
      link: ""
    }
  ];

  return (
    <section id="projects" className="py-24 md:py-32 w-full bg-[#070A12] relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] h-[35%] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-3 codefont">
            Selected Works
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
            Featured Case Studies
          </h2>
          <p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed">
            A handpicked selection of SaaS products, interactive web systems, and custom client platforms built from the ground up.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden shadow-xl border border-white/5 hover:border-purple-500/30 transition-all duration-300 flex flex-col group"
            >
              {/* Image Preview Container */}
              <div className="relative overflow-hidden h-64 w-full bg-zinc-900 border-b border-white/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-w-768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#070A12]/80 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-wider text-indigo-300">
                  {project.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-white text-xl font-bold tracking-tight mb-4 flex items-center justify-between">
                    {project.title}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 hover:text-white transition-colors"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    )}
                  </h3>
                  
                  {/* Problem & Built */}
                  <div className="space-y-3 mb-6">
                    <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                      <strong className="text-zinc-300">Problem: </strong> {project.problem}
                    </p>
                    <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                      <strong className="text-zinc-300">What I Built: </strong> {project.built}
                    </p>
                  </div>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/5 text-[10px] font-mono text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA button */}
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex cursor-pointer items-center gap-1.5 text-purple-400 hover:text-purple-300 text-xs font-semibold tracking-wide uppercase transition-colors"
                    >
                      <span>View Project Live</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-zinc-600 text-xs font-semibold tracking-wide uppercase">
                      Client Portal (Confidential)
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* NDA Alert strip */}
        <div className="mt-16 p-4 rounded-xl border border-yellow-500/10 bg-yellow-500/5 flex items-start gap-3 max-w-4xl mx-auto">
          <ShieldAlert className="w-5 h-5 text-yellow-500/80 shrink-0 mt-0.5" />
          <p className="text-xs text-zinc-400 leading-relaxed">
            <strong className="text-zinc-300">NDA Confidentiality Note:</strong> Some client projects, backend systems, and automated agent workflows cannot be shown publicly due to confidentiality agreements. However, the system architecture, product thinking, and coding execution process remain consistent across all build cycles.
          </p>
        </div>

      </div>
    </section>
  );
}
