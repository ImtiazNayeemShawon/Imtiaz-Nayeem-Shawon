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
            <strong>imtiaznayim95@gmail.com</strong>.
          </p>

         
        </div>
        <BackgroundBeams />
      </div>
  );
}
