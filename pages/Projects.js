"use client";
import React from "react";
import Image from "next/image";
import Zip from "/public/zip.png";
import Data from "./project.json";
import { useState } from "react";

export default function Projects() {
  const [index, setIndex] = useState(4);
  return (
    <div id="projects" className="mt-40 mx-10 max-sm:mx-5 max-sm:mt-20">
      {/* project card */}
      <div className="flex items-start gap-5">
        {/* heading */}
        <div className="flex gap-3">
          <div className="w-[0.5px] h-40 bg-[#8a8888]"></div>
          <p className="text-[50px] font-extrabold text-white uppercase ">
            Projects
          </p>
        </div>
        {/* projects */}
        <div className="flex items-center gap-5 flex-wrap  w-fit">
          {Data?.map((data, index) => (
            <a href={data?.Link} target="__blank">
              <div key={index} className="bg-[#212225]  rounded-lg w-80 h-96 ">
                <Image
                  src={data?.image}
                  alt="image"
                  width={500}
                  height={500}
                  className="w-full h-60 rounded-t-lg m-auto block "
                />
                <div className="p-3 flex flex-col justify-between">
                  <div>
                    <span className="text-lg capitalize text-white font-semibold">
                      {data?.name}
                    </span>
                    <br />
                    <article className="text-[16px] mt-5">
                      {data?.title}
                    </article>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
