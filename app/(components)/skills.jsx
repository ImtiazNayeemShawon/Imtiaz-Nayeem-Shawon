"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Data from "@/utils/techSkills.json";
import { useState } from "react";

export default function Skills() {
  const options = [
    "All",
    "Frontend",
    "Backend",
    "Programming",
    "App",
    "CSS/UI library",
    "DevOps",
    "Database",
    "Others",
  ];
  const [Lenght, setLenght] = useState(12);
  const [filteredData, setFilteredData] = useState(Data);
  const [key, setKey] = useState("All");
  function handleFilter(filterKey) {
    if (filterKey == "All") {
      setFilteredData(Data);
    } else {
      const filters = Data?.filter((item) => item.Category === filterKey);
      setFilteredData(filters);
    }
    setKey(filterKey);
  }

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
      <div className="flex items-center gap-5 flex-wrap mt-10">
        {options?.map((data) => (
          <button
            onClick={() => {
              handleFilter(data);
            }}
            className={`text-white text-[14px] font-semibold  border-[1px] border-[#2b2a2a] px-4 py-1 rounded-full ${
              key == data ? "bg-[#6366F1]" : ""
            }`}
          >
            {data}
          </button>
        ))}
      </div>
      <div className="  w-full  flex flex-col items-center justify-center overflow-hidden rounded-md">
        <HoverEffect items={filteredData} Lenght={Lenght} />
      </div>
      {key == "All" && (
        <button
          onClick={() => setLenght(Data?.length)}
          className="text-[14px] max-md:text-[10px] border border-[#9597f7]  bg-[#6366F1]   flex justify-center self-center m-auto mt-20 items-center gap-1 hover:gap-2 duration-300  font-semibold capitalize text-[#feffff] hover:opacity-80 px-4 py-2 rounded-full"
        >
          See All{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
