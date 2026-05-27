"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Bot, Database, Workflow, Cpu, Terminal, Layers } from "lucide-react";

export default function AIEngineering() {
  const capabilities = [
    { title: "RAG pipelines", desc: "Indexing document chunks into embeddings for semantic context injection." },
    { title: "Vector databases", desc: "Integration with Pinecone, pgvector, and Qdrant for semantic search." },
    { title: "LangGraph workflows", desc: "Cyclic multi-agent systems with state persistence and human-in-the-loop." },
    { title: "Agentic AI systems", desc: "Autonomous execution agents with tool access and task planner modules." },
    { title: "FastAPI AI microservices", desc: "High-performance Python backends optimized for LLM requests." },
    { title: "LLM tool calling", desc: "JSON schema generation for parsing function calls and parameters." },
    { title: "AI automation workflows", desc: "Integrating LLM reasoning blocks with external APIs and services." },
    { title: "Prompt engineering", desc: "System directives, few-shot testing, and chain-of-thought routing." },
    { title: "AI assistant architecture", desc: "Session memory management, conversational buffers, and semantic cache." },
    { title: "Redis caching", desc: "Caching prompt embeddings and output responses for latency reduction." },
    { title: "Postgres / Mongo integration", desc: "Handling hybrid architectures of unstructured vectors and relation schemas." },
    { title: "LLMOps basics", desc: "Monitoring model tokens consumption, input latency, and fallback retry logs." },
    { title: "API orchestration", desc: "Connecting AI reasoning outputs to external transaction endpoints." },
    { title: "Multi-step reasoning", desc: "Breaking complex prompts into planner execution paths and validation loops." }
  ];

  return (
    <section id="ai-engineering" className="py-24 md:py-32 w-full bg-[#070A12] relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-[40%] right-[-10%] w-[35%] h-[35%] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[35%] h-[35%] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Big Concept Title & Statement */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest codefont">
              Core Expertise
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              AI Engineering Capabilities
            </h2>
            <div className="p-5 rounded-2xl border border-emerald-500/10 bg-emerald-500/5 relative">
              <span className="text-emerald-400 font-mono text-2xl absolute top-3 left-4">“</span>
              <p className="text-zinc-300 font-light text-base leading-relaxed pl-6 italic">
                AI products are not just API calls. Real AI systems need memory, tools, retrieval, monitoring, workflows, and clean architecture.
              </p>
            </div>
            
            {/* Visual Agent Loop Graphic */}
            <div className="hidden lg:block border border-white/5 bg-white/[0.01] p-6 rounded-2xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider font-mono">// System Runtime Agent Loop</span>
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="flex items-center justify-center py-4 relative">
                <div className="h-20 w-20 rounded-full border border-zinc-700 flex items-center justify-center bg-zinc-900 z-10">
                  <Brain className="w-8 h-8 text-indigo-400" />
                </div>
                <div className="absolute left-[20%] top-[40%] h-12 w-12 rounded-full border border-dashed border-zinc-700 flex items-center justify-center bg-zinc-900/60">
                  <Bot className="w-5 h-5 text-purple-400" />
                </div>
                <div className="absolute right-[20%] top-[40%] h-12 w-12 rounded-full border border-dashed border-zinc-700 flex items-center justify-center bg-zinc-900/60">
                  <Database className="w-5 h-5 text-cyan-400" />
                </div>
                {/* SVG circular connection arrows */}
                <svg className="absolute inset-0 w-full h-full animate-spin pointer-events-none" style={{ animationDuration: "12s" }} viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="32" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="5,15" />
                </svg>
              </div>
              <div className="text-[10px] text-zinc-500 font-mono text-center">
                System state manager: persistent threads active.
              </div>
            </div>
          </div>

          {/* Right Column: Grid of Capabilities */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capabilities.map((cap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white/[0.01] border border-white/5 hover:border-emerald-500/30 p-4 rounded-xl flex items-start gap-3 transition-all duration-300 hover:bg-white/[0.02]"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0 animate-pulse" />
                <div>
                  <h4 className="text-white text-sm font-bold tracking-tight mb-1 font-mono">
                    {cap.title}
                  </h4>
                  <p className="text-zinc-400 text-xs font-light leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
