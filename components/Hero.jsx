"use client";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Mail } from "lucide-react";

export default function Hero({ data }) {
  return (
    <section className="hero md:h-screen w-full   bg-grid-[#19191952] relative pt-40 ">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        {/* <Badge variant="secondary" className="mb-6 text-sm font-medium">
          Full-Stack Development Case Study
        </Badge> */}

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-[#ffff] to-[#6366F1] bg-clip-text text-transparent">
          {data?.title}
        </h1>

        <p className="text-lg md:text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
          {data?.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href={data?.link}
            size="lg"
            target="_blank"
            className="  bg-[#6366F1] flex items-center gap-1 hover:gap-2 duration-300  capitalize text-[#feffff] hover:opacity-80 px-4 py-2 rounded-md"
          >
            <ExternalLink className="mr-2 h-5 w-5 transition-transform" />
            View Live Demo
          </a>
        </div>

        <div className="grid  grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {data?.metadata?.map((data, index) => (
            <div className="text-center ">
              <div className="text-2xl font-bold text-white">{data?.data}</div>
              <div className="text-sm text-muted-foreground">{data?.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
