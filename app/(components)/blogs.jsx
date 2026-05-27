"use client";

import React, { useEffect, useState } from "react";
import { Calendar, ExternalLink, BookOpen, ArrowUpRight } from "lucide-react";

export default function MediumPosts() {
  const [allPosts, setAllPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Authority themes defined as editorial fallbacks if RSS is empty or loading
  const fallbackThemes = [
    {
      title: "From Full-Stack Developer to AI Engineer: The Shift in Systems Thinking",
      pubDate: new Date().toISOString(),
      link: "https://medium.com/@imtiaznayim95",
      description: "Moving from deterministic page loops to probabilistic AI execution. Why modern engineering demands a deep understanding of memory, retrieval, and agents.",
      category: "AI Engineering",
      isFallback: true
    },
    {
      title: "Agentic AI vs API Calls: Building Autonomous SaaS Workflows",
      pubDate: new Date(Date.now() - 86400000 * 2).toISOString(),
      link: "https://medium.com/@imtiaznayim95",
      description: "Why single-prompt wrappers fail in production. How to construct reliable execution graphs that plan, handle tool calls, and auto-correct errors.",
      category: "Agentic AI",
      isFallback: true
    },
    {
      title: "LangGraph vs LangChain: When to Choose Cyclic Agent Flows",
      pubDate: new Date(Date.now() - 86400000 * 5).toISOString(),
      link: "https://medium.com/@imtiaznayim95",
      description: "Analyzing stateful multi-agent orchestrations. A deep dive into circular dependencies, human-in-the-loop workflows, and robust state schemas.",
      category: "System Design",
      isFallback: true
    },
    {
      title: "Fundamentals Over Frameworks: Why Architecture Wins in SaaS MVPs",
      pubDate: new Date(Date.now() - 86400000 * 8).toISOString(),
      link: "https://medium.com/@imtiaznayim95",
      description: "Avoid framework churn. A practical guide to database indexing, caching strategies, and secure session management for rapid product validation.",
      category: "SaaS MVPs",
      isFallback: true
    },
    {
      title: "Software Development to AI/ML: Demystifying Vector Embeddings",
      pubDate: new Date(Date.now() - 86400000 * 12).toISOString(),
      link: "https://medium.com/@imtiaznayim95",
      description: "A developer's guide to semantic indexing. How cosine similarity search connects textual customer queries to structured transactional databases.",
      category: "AI systems",
      isFallback: true
    }
  ];

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const res = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@imtiaznayim95"
        );
        const data = await res.json();
        
        let posts = data.items || [];
        // Map category tags if available
        posts = posts.map(p => ({
          ...p,
          category: p.categories && p.categories.length > 0 ? p.categories[0] : "SaaS & AI",
          isFallback: false
        }));

        // Merge with fallback themes if RSS is empty
        if (posts.length === 0) {
          posts = fallbackThemes;
        }

        setAllPosts(posts);
        setDisplayedPosts(posts.slice(0, 6));
      } catch (err) {
        console.error("Failed to fetch Medium posts, loading fallbacks", err);
        setAllPosts(fallbackThemes);
        setDisplayedPosts(fallbackThemes.slice(0, 6));
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  // Extract clean summary from HTML description
  const stripHtml = (html) => {
    if (!html) return "";
    // Clean markup using simple regex to support server side/client rendering safely
    const cleanText = html.replace(/<\/?[^>]+(>|$)/g, "");
    return cleanText.substring(0, 160) + "...";
  };

  return (
    <section id="blogs" className="py-24 md:py-32 w-full bg-[#070A12] relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-[40%] right-[-10%] w-[35%] h-[35%] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-3 codefont">
            Knowledge Share
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
            Writing on AI, SaaS, and Engineering
          </h2>
          <p className="text-zinc-400 font-light text-base leading-relaxed">
            I write about building production-ready AI systems, software architecture, career growth, and the future of SaaS.
          </p>
        </div>

        {/* Editorial Posts Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayedPosts.map((post, index) => (
            <article
              key={`${post.link}-${index}`}
              className="group glass-card p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between hover:bg-white/[0.02] hover:-translate-y-1"
            >
              <div>
                {/* Category tag & Date */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/5 text-[9px] font-mono text-zinc-400 uppercase tracking-widest">
                    {post.category || "AI Engineering"}
                  </span>
                  
                  <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
                    <Calendar className="w-3.5 h-3.5" />
                    <time dateTime={post.pubDate}>
                      {new Date(post.pubDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-base md:text-lg leading-snug mb-3 group-hover:text-indigo-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Description summary */}
                <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed line-clamp-3 mb-6">
                  {post.isFallback ? post.description : stripHtml(post.description)}
                </p>
              </div>

              {/* Read more link */}
              <div className="pt-4 border-t border-white/5">
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex cursor-pointer items-center gap-1.5 text-indigo-400 hover:text-indigo-300 text-xs font-semibold tracking-wide uppercase transition-colors"
                >
                  <span>Read Article</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Medium CTA */}
        <div className="flex flex-col items-center justify-center mt-16 gap-3">
          <a
            href="https://medium.com/@imtiaznayim95"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full border border-indigo-500/20 shadow-lg hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Read More on Medium</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <span className="text-[10px] text-zinc-500 font-mono">// System updates deployed weekly</span>
        </div>

      </div>
    </section>
  );
}
