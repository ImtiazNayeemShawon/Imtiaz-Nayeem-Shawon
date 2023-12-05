"use client";
import React from "react";
import Image from "next/image";
import Zip from "/public/zip.png";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Projects() {
  return (
    <div id="projects" className="mt-40 mx-40 max-sm:mx-5 max-sm:mt-20">
      <h1 className="text-center capitalize text-4xl max-sm:text-2xl text-white">
        Insights into My Latest <br /> Projects Recently Completed
      </h1>
      {/* project card */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="project   gap-1 grid grid-cols-2 mt-10 bg-[#181818] border border-[#2e2c2c]  rounded-2xl w-fit max-sm:grid-cols-1"
      >
        <div className="p-10 flex flex-col justify-between max-sm:p-5">
          <div>
            <p className="px-4   text-[#fcfcfc] w-fit mainfont text-xl ">
              zipbox - 2023
            </p>
            <p className="text-4xl max-sm:text-xl max-sm:mt-5 mt-10 capitalize font- mainfont text-white">
              Curating AR experiences while travelling
            </p>
            <div className="h-[1px] w-full bg-[#3f3d3d] my-4" />
            <p className="text- text-xl  my-12 max-sm:my-3 max-sm:text-sm">
              A sleek agency project powered by Next.js and styled with Tailwind
              CSS for a seamless and modern web experience
            </p>
          </div>
          <button className=" font-semibold capitalize border border-[#191818] hover:border-[#dcd7d7] hover:bg-[#191818] hover:text-white duration-300 bg-white text-[#242424] px-10 text-lg  py-2 rounded-3xl flex items-center gap-2 w-fit max-sm:px-4 max-sm:text-sm">
            Live preview{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </button>
        </div>
        <Image src={Zip} className="m-auto rounded-r-2xl h-full w-full max-sm:rounded-r-none max-sm:rounded-b-2xl" />
      </div>
    </div>
  );
}
