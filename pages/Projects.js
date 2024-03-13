"use client";
import React from "react";
import Image from "next/image";
import Zip from "/public/zip.png";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Data from "./project.json";
import { useState } from "react";

export default function Projects() {
  const [index, setIndex] = useState(4);
  return (
    <div id="projects" className="mt-40 mx-40 max-sm:mx-5 max-sm:mt-20">
      <h1 className="text-center capitalize text-4xl max-sm:text-2xl text-white">
        Insights into My Latest <br /> Projects Recently Completed
      </h1>
      {/* project card */}
      {Data?.slice(0, index)?.map((data, i) => (
        <div
          key={i}
          className="project   gap-1 grid grid-cols-5 mt-10 bg-[#181818] border border-[#2e2c2c]  rounded-2xl w-fit max-sm:grid-cols-2"
        >
          <div className="p-10 flex flex-col justify-between max-sm:p-5 col-span-2">
            <div>
              <p className="  text-[#fcfcfc] w-fit mainfont text-xl ">
                {data?.name}
              </p>
              <p className="text-4xl max-sm:text-xl max-sm:mt-5 mt-10 capitalize font- mainfont text-white">
                {data?.title}
              </p>
              <div className="h-[1px] w-full bg-[#3f3d3d] my-4" />
              <p className="text- text-xl  my-12 max-sm:my-3 max-sm:text-sm">
                {data?.description}
              </p>
            </div>
            <a
              href={data?.Link}
              target="_blank"
              className=" font-semibold capitalize border border-[#191818] hover:border-[#dcd7d7] hover:bg-[#191818] hover:text-white duration-300 bg-white text-[#242424] px-10 text-lg  py-2 rounded-3xl flex items-center gap-2 w-fit max-sm:px-4 max-sm:text-sm"
            >
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
            </a>
          </div>
          <Image
            src={data?.image}
            width={1000}
            height={1000}
            className="m-auto col-span-3 rounded-r-2xl h-[500px] max-sm:h-96 w-full max-sm:rounded-t-none max-sm:rounded-b-2xl"
          />
        </div>
      ))}
      <button
        onClick={() => setIndex((prev) => prev + 4)}
        className="border m-auto mt-10 cursor-pointer border-[#474646] bg-[#242424] text-[#fffdfd] px-10 text-lg  py-2 rounded-lg flex items-center gap-2"
      >
        💻 See more
      </button>
    </div>
  );
}
