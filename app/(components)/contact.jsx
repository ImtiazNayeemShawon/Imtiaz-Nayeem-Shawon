"use client";

import React, { useState } from "react";
import { BackgroundBeams } from "../../components/ui/background-beams";
import { Mail, MessageSquare, Calendar, Send, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "SaaS MVP",
    budgetRange: "$5k - $10k",
    message: ""
  });
  const [status, setStatus] = useState("idle"); // idle, sending, success

  const projectTypes = [
    "SaaS MVP",
    "AI Product",
    "Automation System",
    "Full-Stack App",
    "Consulting",
    "Other"
  ];

  const budgetRanges = [
    "< $5k",
    "$5k - $10k",
    "$10k - $25k",
    "$25k+"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    
    const subject = encodeURIComponent(`Project Brief from ${formData.name} - ${formData.projectType}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Project Type: ${formData.projectType}\n` +
      `Budget Range: ${formData.budgetRange}\n\n` +
      `Message:\n${formData.message}`
    );

    setTimeout(() => {
      window.location.href = `mailto:imtiaznayeem@icloud.com?subject=${subject}&body=${body}`;
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        projectType: "SaaS MVP",
        budgetRange: "$5k - $10k",
        message: ""
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 w-full bg-[#070A12] relative overflow-hidden flex flex-col justify-center items-center border-t border-white/5">
      {/* Background beams component */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <BackgroundBeams />
      </div>

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          {/* Left Column: Direct Outreach & Copylines */}
          <div className="lg:col-span-5 flex flex-col justify-between py-2">
            <div className="space-y-6">
              <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest codefont">
                Get In Touch
              </p>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                Have an idea that needs to become a real product?
              </h2>
              <p className="text-zinc-400 font-light text-base leading-relaxed">
                Whether it's a SaaS MVP, AI workflow, automation system, or full-stack product, I can help turn the idea into a working system.
              </p>

              {/* Contact Info blocks */}
              <div className="space-y-4 pt-4">
                <a 
                  href="mailto:imtiaznayeem@icloud.com"
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:border-indigo-500/30 hover:bg-white/[0.02] transition-all duration-300 group"
                >
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-indigo-400 group-hover:bg-indigo-500/10 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider font-mono">Email Me</p>
                    <p className="text-white text-sm font-semibold">imtiaznayeem@icloud.com</p>
                  </div>
                </a>

                <a 
                  href="https://wa.link/fsoe9n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:border-emerald-500/30 hover:bg-white/[0.02] transition-all duration-300 group"
                >
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-emerald-400 group-hover:bg-emerald-500/10 transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider font-mono">WhatsApp Me</p>
                    <p className="text-white text-sm font-semibold">+8801796876012</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Action Meeting button */}
            <div className="pt-8 lg:pt-0">
              <a
                href="https://cal.com/imtiaznayeem/30min?overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm px-6 py-3.5 rounded-full border border-indigo-500/20 shadow-lg hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Book a Meeting</span>
                <Calendar className="w-4 h-4 text-indigo-200" />
              </a>
            </div>
          </div>

          {/* Right Column: Premium Quote RFP form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 md:p-8 rounded-2xl shadow-2xl border border-white/5 h-full flex flex-col justify-center">
              {status === "success" ? (
                <div className="text-center py-12 space-y-4">
                  <div className="inline-flex p-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-white text-xl font-bold tracking-tight">Message Sent Successfully!</h3>
                  <p className="text-zinc-400 text-sm font-light max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out. I have received your project details and will review them shortly. Expect a response within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-indigo-400 hover:text-indigo-300 text-xs font-semibold uppercase tracking-wider mt-4"
                  >
                    Submit Another Project
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-white text-lg font-bold tracking-tight mb-2">Project Brief Form</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-zinc-400 text-xs font-semibold uppercase tracking-wider font-mono">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500/50 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-zinc-400 text-xs font-semibold uppercase tracking-wider font-mono">Your Email</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Project Type */}
                    <div className="space-y-1.5">
                      <label className="text-zinc-400 text-xs font-semibold uppercase tracking-wider font-mono">Project Type</label>
                      <div className="relative">
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500/50 transition-colors appearance-none cursor-pointer"
                        >
                          {projectTypes.map((type) => (
                            <option key={type} value={type} className="bg-zinc-900 text-white">
                              {type}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-400">
                          ▼
                        </div>
                      </div>
                    </div>

                    {/* Budget Range */}
                    <div className="space-y-1.5">
                      <label className="text-zinc-400 text-xs font-semibold uppercase tracking-wider font-mono">Budget Range</label>
                      <div className="relative">
                        <select
                          value={formData.budgetRange}
                          onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                          className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500/50 transition-colors appearance-none cursor-pointer"
                        >
                          {budgetRanges.map((range) => (
                            <option key={range} value={range} className="bg-zinc-900 text-white">
                              {range}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-400">
                          ▼
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-zinc-400 text-xs font-semibold uppercase tracking-wider font-mono">Message Brief</label>
                    <textarea
                      required
                      rows="4"
                      placeholder="Describe your product requirements, tech dependencies, or timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500/50 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm px-6 py-3.5 rounded-xl border border-indigo-500/20 shadow-lg hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending Brief...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span>Send Message</span>
                        <Send className="w-4 h-4 text-indigo-200" />
                      </div>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
