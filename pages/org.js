"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Skynetix from "/public/logos/skynetix.png";
import Mzmedia from "/public/logos/mz.png";
import Mhc from "/public/logos/mhc.png";
import Ridge from "/public/logos/ridge.png";
import Edu from "/public/logos/edu.png";
import Ski from "/public/logos/skinsort.png";
import Cinema from "/public/logos/cm.png";

export default function Org() {
  return (
    <div className="mt-60 max-sm:mt-20">
      <div className="my-10 w-fit m-auto block">
        <h1 className="text-center mainfont  capitalize text-[30px] text-white">
          &#128509; Brands I worked with{" "}
        </h1>
        <div className="w-40 h-[1px] rounded-full bg-[#6a6767]" />
      </div>
      <div className="flex relative gap-10 mt-40 max-sm:mt-10 logogroup">
        <Marquee className="flex gap-20">
          {[Skynetix, Mzmedia, Mhc, Ridge, Edu, Ski, Cinema].map((data) => (
            <div className="">
              <Image
                src={data}
                alt="data"
                width={1000}
                height={1000}
                className="w-60 max-sm:mx-2 max-sm:w-40  mx-10 brandlogo"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
