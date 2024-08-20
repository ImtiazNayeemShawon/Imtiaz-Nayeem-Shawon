"use client";
import { useState } from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function Skills() {

  return (
    <div id="tech" className="mx-[10%] mt-40">
      <h1 className="font-bold text-white text-[40px]">
        Years of gaining my{" "}
        <b className="border-b-2 border-blue-400">skills.</b>
      </h1>
      <p className="text-sm text-white my-4">
        I've learned a lot throughout my life and{" "}
        <b>wrote my first program when I was in 7th grade</b>. I love to explore
        things, and most of the skills I've gained are through practice and
        hands-on experience
      </p>
      {/* <div className="flex items-center gap-5 flex-wrap mt-10">
        <button
          className={`text-white font-semibold  border-[1px] border-white px-8 py-2 rounded-full ${filter && ""}`}
        >
          All
        </button>
        <button
          className={`text-white font-semibold  border-[1px] border-white px-8 py-2 rounded-full ${filter && ""}`}
        >
          Languages
        </button>
        <button
          className={`text-white font-semibold border-[1px] border-white px-8 py-2 rounded-full ${filter && "bg-[#6366F1]"}`}
        >
          Frontend
        </button>
        <button
          className={`text-white font-semibold  border-[1px] border-white px-8 py-2 rounded-full ${filter && ""}`}
        >
          Backend
        </button>
        <button
          className={`text-white font-semibold  border-[1px] border-white px-8 py-2 rounded-full ${filter && ""}`}
        >
          DevOps
        </button>
        <button
          className={`text-white font-semibold  border-[1px] border-white px-8 py-2 rounded-full ${filter && ""}`}
        >
          UI/UX
        </button>
        <button
          className={`text-white font-semibold  border-[1px] border-white px-8 py-2 rounded-full ${filter && ""}`}
        >
          App
        </button>
      </div> */}
      <div className="  w-full  flex flex-col items-center justify-center overflow-hidden rounded-md">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}
export const projects = [
  {
    title: "React js",
    link: "https://stripe.com",
    logo: "/react.svg",
    description:
      "React. js is an open-source JavaScript library, crafted with precision by Facebook, that aims to simplify the intricate process of building interactive user interfaces.",
  },
  {
    title: "Next JS",
    link: "https://stripe.com",
    logo: "/next copy.svg",
    description:
      "Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.",
  },
  {
    title: "Javascript",
    link: "https://stripe.com",
    logo: "/js.svg",
    description:
      "JavaScript is a scripting or programming language that allows you to implement complex features on web pages ",
  },
  {
    title: "Express JS",
    link: "https://stripe.com",
    logo: "/react.svg",
  },
  {
    title: "AWS",
    link: "https://stripe.com",
    logo: "/react.svg",
  },
  {
    title: "Frontend development",
    link: "https://stripe.com",
    logo: "/react.svg",
  },
  {
    title: "Frontend development",
    link: "https://stripe.com",
    logo: "/react.svg",
  },
  {
    title: "Frontend development",
    link: "https://stripe.com",
    logo: "/react.svg",
  },
  {
    title: "Frontend development",
    link: "https://stripe.com",
    logo: "/react.svg",
  },
];
