import React from "react";
import Image from "next/image";
import Logo from "../public/logo.png";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="">
      <div className="flex justify-between items-center mx-40 mt-6  max-sm:mx-4">
        <div>
          <Image className="w-12 rounded-lg bg-[#f9f9f9]" src={Logo} alt="logo" />
        </div>
        <div>
          <button className="text-[#9C9C9C] px-6 py-3 bg-[#1A1A1A] border-[#2f2e2e] border rounded-sm flex items-center gap-2 hover:shadow-2xl shadow-[#8D8D8D] duration-300">
            Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="mt-4 h-[1px] w-[80%] m-auto block bg-[#242424]" />
    </nav>
  );
}
