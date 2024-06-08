"use client";
import React from "react";
import { BackgroundBeams } from "../../components/ui/background-beams";

export default function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md  relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Get in touch
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          If you have any further questions or queries, please contact me via
          WhatsApp at <strong>+8801745927842</strong> or email at{" "}
          <strong>imtiaznayeem@icloud.com</strong>.
        </p>
        <div className="">
          <input
            type="text"
            placeholder="Enter your email i'll reach you "
            className="rounded-lg px-3 py-2 border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 text-white"
          />
          <button className="text-[14px] z-10 cursor-pointer m-auto mt-5 max-md:text-[10px] border border-[#323233]  bg-[#171C23]   flex items-center gap-1 hover:gap-2 duration-300  font-semibold capitalize text-[#feffff] hover:opacity-80 px-20 py-2 rounded-full">
            SUBMIT
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6"
            >
              <path
                fillRule="evenodd"
                d="M15.28 9.47a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06L13.69 10 9.97 6.28a.75.75 0 0 1 1.06-1.06l4.25 4.25ZM6.03 5.22l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L8.69 10 4.97 6.28a.75.75 0 0 1 1.06-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
