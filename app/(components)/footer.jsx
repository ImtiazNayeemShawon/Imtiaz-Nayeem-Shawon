"use client";

import React from "react";
import Logo from "/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { 
  Github, 
  Twitter, 
  Instagram, 
  Facebook, 
  BookOpen 
} from "lucide-react";

export default function Footer() {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#070A12] border-t border-white/5 py-12 md:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start mb-12">
          
          {/* Logo & Brand Pitch */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src={Logo}
                alt="Logo"
                className="w-9 h-9 bg-white/10 p-1 rounded-lg border border-white/10"
              />
              <span className="text-white text-sm font-extrabold tracking-tight">IMTIAZ SHAWON</span>
            </div>
            <p className="text-zinc-400 text-xs md:text-sm font-light max-w-sm leading-relaxed">
              Building SaaS & AI products from idea to execution to scale.
            </p>
          </div>

          {/* Quick Links Grid */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider font-mono">// Sitemap</h4>
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => handleScroll("home")}
                className="text-zinc-500 hover:text-white transition-colors text-xs font-semibold text-left"
              >
                Home
              </button>
              <button 
                onClick={() => handleScroll("projects")}
                className="text-zinc-500 hover:text-white transition-colors text-xs font-semibold text-left"
              >
                Work
              </button>
              <button 
                onClick={() => handleScroll("process")}
                className="text-zinc-500 hover:text-white transition-colors text-xs font-semibold text-left"
              >
                Process
              </button>
              <button 
                onClick={() => handleScroll("blogs")}
                className="text-zinc-500 hover:text-white transition-colors text-xs font-semibold text-left"
              >
                Writing
              </button>
              <button 
                onClick={() => handleScroll("contact")}
                className="text-zinc-500 hover:text-white transition-colors text-xs font-semibold text-left"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Socials Link Grid */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider font-mono">// Channels</h4>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://x.com/imtiaz_zippix"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 border border-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/ImtiazNayeemShawon"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 border border-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://medium.com/@imtiaznayim95"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 border border-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <BookOpen className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/imtiaznayeemshawon/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 border border-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/imtiaz.scale"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 border border-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* copyright metadata */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-zinc-600 text-xs font-mono">
          <span>&copy; {currentYear} Imtiaz Nayeem Shawon. All rights reserved.</span>
          <span>// DESIGNED & BUILT FOR SAAS SCALE</span>
        </div>
      </div>
    </footer>
  );
}
