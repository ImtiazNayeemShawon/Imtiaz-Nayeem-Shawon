"use client";
import React from "react";
import Logo from "/public/logo.png";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (sectionId) => {
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Delay to ensure the navigation is complete
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className={`${pathname == "/resume" && "hidden"}`}>
      <div className="flex justify-around py-4 mt-8 max-md:mt-2 max-md:justify-center items-center fixed w-full max-md:flex-wrap z-40">
        <div>
          <Image
            src={Logo}
            alt="Logo"
            className="w-14 bg-[#efeff5] rounded-[20%] max-md:hidden "
          />
        </div>
        <div>
          <div className="bg-[#191919] border border-[#323233] shadow-sm p-[5px] pl-5 rounded-full flex items-center gap-10 max-md:gap-40">
            <button
              onClick={() => handleNavigation("home")}
              className="text-[14px] max-md:text-[10px] font-semibold capitalize text-[#EAF3FB] hover:opacity-80"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("projects")}
              className="text-[14px] max-md:text-[10px] font-semibold capitalize text-[#EAF3FB] hover:opacity-80"
            >
              Projects
            </button>
            <button
              onClick={() => handleNavigation("experince")}
              className="text-[14px] max-md:text-[10px] font-semibold capitalize text-[#EAF3FB] hover:opacity-80"
            >
              Experiences
            </button>
            <button
              onClick={() => handleNavigation("tech")}
              className="text-[14px] max-md:text-[10px] font-semibold capitalize text-[#EAF3FB] hover:opacity-80"
            >
              Skills
            </button>
            <Link
              href="/eca"
              className="text-[14px] max-md:text-[10px] font-semibold capitalize text-[#EAF3FB] hover:opacity-80"
            >
              ECA Profile
            </Link>
            <Link
              href="/resume"
              target="_blank"
              className="text-[14px] max-md:text-[10px] border border-[#9597f7] bg-[#6366F1] flex items-center gap-1 hover:gap-2 duration-300 font-semibold capitalize text-[#feffff] hover:opacity-80 px-4 py-2 rounded-full"
            >
              Get Resume{" "}
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
