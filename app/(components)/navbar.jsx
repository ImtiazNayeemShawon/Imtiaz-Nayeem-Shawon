"use client";

import React, { useState, useEffect } from "react";
import Logo from "/public/logo.png";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (sectionId) => {
    setOpen(false);
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Work", id: "projects" },
    { name: "Process", id: "process" },
    { name: "Skills", id: "tech" },
    { name: "Experience", id: "experince" },
    { name: "Writing", id: "blogs" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-[#070A12]/75 backdrop-blur-md border-b border-white/5 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.3)]" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src={Logo}
            alt="Logo"
            className="w-10 h-10 bg-white/10 p-1.5 rounded-xl border border-white/10 group-hover:border-indigo-500/50 transition-all duration-300"
          />
          <div className="flex flex-col">
            <span className="text-white text-sm font-extrabold tracking-tight">IMTIAZ SHAWON</span>
            <span className="text-[10px] text-indigo-400 font-bold tracking-wider uppercase codefont">SaaS & AI Architect</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 bg-white/5 border border-white/5 px-6 py-2 rounded-full backdrop-blur-md">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigation(link.id)}
              className="text-[13px] font-semibold text-zinc-300 hover:text-white transition-colors capitalize"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href="https://cal.com/imtiaznayeem/30min?overlayCalendar=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-[13px] font-semibold px-5 py-2.5 rounded-full border border-indigo-500/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300"
          >
            <span>Book a Call</span>
            <Calendar className="w-3.5 h-3.5 text-indigo-200" />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-zinc-300 hover:text-white p-2 border border-white/5 rounded-xl bg-white/5"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden w-full bg-[#070A12] border-b border-white/5 absolute top-full left-0 right-0 overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-8 flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavigation(link.id)}
                  className="text-base font-medium text-zinc-300 hover:text-white transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <a
                href="https://cal.com/imtiaznayeem/30min?overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center inline-flex items-center justify-center gap-2 bg-indigo-600 text-white font-semibold text-sm px-6 py-3 rounded-full border border-indigo-500/20"
                onClick={() => setOpen(false)}
              >
                <span>Book a Call</span>
                <Calendar className="w-4 h-4 text-indigo-200" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
