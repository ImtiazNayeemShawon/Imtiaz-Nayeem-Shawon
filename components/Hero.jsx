"use client";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero md:h-screen w-full   bg-grid-[#19191952] relative pt-40 ">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        {/* <Badge variant="secondary" className="mb-6 text-sm font-medium">
          Full-Stack Development Case Study
        </Badge> */}

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-[#ffff] to-[#6366F1] bg-clip-text text-transparent">
          Vestornet
        </h1>

        <p className="text-lg md:text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
          A comprehensive project management platform built with modern
          technologies. Featuring real-time collaboration, advanced analytics,
          and seamless user experience.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="  bg-[#6366F1] flex items-center gap-1 hover:gap-2 duration-300  capitalize text-[#feffff] hover:opacity-80 px-4 py-2 rounded-md"
          >
            <ExternalLink className="mr-2 h-5 w-5 transition-transform" />
            View Live Demo
          </Button>

          <Button className="bg-primary/90 flex items-center gap-1 hover:gap-2 duration-300  capitalize text-[#feffff] hoveropacity-80 px-4 py-2 rounded-md">
            <Mail className="mr-2 h-5 w-5  transition-transform" />
            Contact Developer
          </Button>
        </div>

        <div className="grid  grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div className="text-center ">
            <div className="text-2xl font-bold text-white">50+</div>
            <div className="text-sm text-muted-foreground">Components</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">15+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">100%</div>
            <div className="text-sm text-muted-foreground">TypeScript</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">98%</div>
            <div className="text-sm text-muted-foreground">Test Coverage</div>
          </div>
        </div>
      </div>
    </section>
  );
}
