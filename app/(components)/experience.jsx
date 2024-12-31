"use client";
import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import { useInView, motion } from "framer-motion";
import { TracingBeam } from "@/components/ui/treasingbea";

export default function Experience({ content, title, description }) {
  function Cards({ data }) {
    const ref = useRef(null);
    const inView = useInView(ref, { margin: "-50% 0px -50% 0px" });
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={` py-20 p-4 `}
      >
        <p ref={ref} className="text-2xl font-bold text-white">
          {data?.title}
        </p>
        <div className="text-[#d4c7c7] mt-4 text-sm ">{data?.description}</div>
      </motion.div>
    );
  }

  return (
    <div id="experince" className=" my-40 mx-[20%] max-md:mx-[5%]">
      <div className="">
        <h1 className="font-bold text-white  text-[40px]">{title}</h1>
        <div className="w-80 rounded-full h-1 bg-blue-500" />
        <p className="text-sm text-white my-4 ">{description}</p>
        <TracingBeam>
          <div className="flex justify-center items-start mx-[4%] max-md:mx-0">
            <div className="w-full">
              {content?.map((data, index) => (
                <Cards data={data} key={index} />
              ))}
            </div>
          </div>
        </TracingBeam>
      </div>
    </div>
  );
}
