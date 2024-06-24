import React from "react";
import Spotlight from "@/components/ui/spotlight";

export default function herosection() {
  return (
    <div
      id="home"
      className="hero md:h-screen w-full   bg-grid-[#19191952] relative "
    >
      <Spotlight className="" fill="white" />

      <div className="absolute pointer-events-none inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>

      <div className="mx-[10%] pt-[300px] max-md:pt-[150px] max-md:mx-[4%] ">
        <div className="flex flex-col gap-6">
          <h1 className="uppercase text-[#7f8bf1]  text-lg tracking-wider codefont">
            Hello world ///
          </h1>
          <h2 className="text-white text-[50px] font-extrabold w-[60%] max-md:text-[30px]  max-md:w-full leading-[120%]">
            Designing and developing scalable, striking websites
          </h2>
          <p className="text-[#f5f1f1] font-light w-[50%] max-md:w-full">
            Hey🖐 , I'm Imtiaz Nayeem Shawon Self-taught{" "}
            <strong>Full stack web developer</strong> with 3 years of experience
            in product development and client services.
          </p>
          {/* cta */}
          <div className="flex items-center gap-8">
            <a
              href="https://www.linkedin.com/in/imtiaznayeem/"
              target="_blank"
              className="text-[14px] max-md:text-[10px] border border-[#9597f7]  bg-[#6366F1]   flex items-center gap-1 hover:gap-2 duration-300  font-semibold capitalize text-[#feffff] hover:opacity-80 px-4 py-2 rounded-full"
            >
              Let's connect{" "}
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
            </a>
            <a
              href="https://github.com/ImtiazNayeemShawon?tab"
              target="_blank"
              className="text-[14px] max-md:text-[10px] border border-[#323233]  bg-[#191919]   flex items-center gap-1 hover:gap-2 duration-300  font-semibold capitalize text-[#feffff] hover:opacity-80 px-4 py-2 rounded-full"
            >
              view github{" "}
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
