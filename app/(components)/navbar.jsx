"use client";
import React from "react";
import Logo from "/public/logo.png";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };
  const handleNavigation = (sectionId) => {
    setOpen(false);
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
    <div className={`${pathname == "/resume" && "hidden"}  `}>
      {/* Mobile navbar */}
      <div
        className={`hidden fixed top-4 left-0 right-0 w-full z-40 max-md:flex flex-col p-2  bg-[#191919] border border-[#323233] shadow-sm   ${open ? "rounded-xl " : "rounded-full"
          }`}
      >
        {/* Heading */}
        <div className="max-md:flex justify-between items-center">
          <button
            onClick={() => setOpen(!open)}
            className="hover:bg-[#323131] rounded-full p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#fff" // stroke color
              className="size-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </button>
          <Image
            src={Logo}
            alt="Logo"
            className="w-10 bg-[#efeff5] rounded-full "
          />
        </div>
        {/* Navigation */}
        {open && (
          <motion.div
            className="flex flex-col items-center gap-4 my-4"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <button
              onClick={() => handleNavigation("home")}
              className="text-[14px] font-semibold capitalize text-[#EAF3FB] hover:opacity-80"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("projects")}
              className="text-[14px] font-semibold capitalize text-[#EAF3FB] hover:opacity-80"
            >
              Projects
            </button>
            <button
              onClick={() => handleNavigation("experince")}
              className="text-[14px] font-semibold capitalize text-[#EAF3FB] hover:opacity-80"
            >
              Experiences
            </button>
            <button
              onClick={() => handleNavigation("blogs")}
              className="text-[14px] font-semibold capitalize text-[#EAF3FB] hover:opacity-80"
            >
              Blogs
            </button>
            <button
              onClick={() => handleNavigation("tech")}
              className="text-[14px] font-semibold capitalize text-[#EAF3FB] hover:opacity-80"
            >
              Skills
            </button>
            <Link
              onClick={() => setOpen(false)}
              href="/eca"
              className="text-[14px] font-semibold capitalize text-[#EAF3FB] hover:opacity-80"
            >
              ECA Profile
            </Link>
            <Link
              href="https://docs.google.com/document/d/1OkUC-uBpFHLvS_snV8p1VtwFmXLvihJZ/edit?usp=sharing&ouid=106823129058087044514&rtpof=true&sd=true"
              target="_blank"
              className="text-[14px] border border-[#9597f7] bg-[#6366F1] flex items-center gap-1 hover:gap-2 duration-300 font-semibold capitalize text-[#feffff] hover:opacity-80 px-4 py-2 rounded-full"
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
          </motion.div>
        )}
      </div>
      <div className="flex justify-around py-4 mt-8 max-md:mt-2   fixed w-full  z-40">
        <div className="max-md:hidden">
          <Image
            src={Logo}
            alt="Logo"
            className="w-14 bg-[#efeff5] rounded-[20%] "
          />
        </div>
        <div className={`max-md:hidden`}>
          <div className="bg-[#191919] border border-[#323233] shadow-sm p-[5px] pl-5 rounded-full flex max-md:flex-col max-md:rounded-none items-center gap-10">
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
              onClick={() => handleNavigation("blogs")}
              className="text-[14px] font-semibold capitalize text-[#EAF3FB] hover:opacity-80"
            >
              Blogs
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
              href="https://docs.google.com/document/d/1OkUC-uBpFHLvS_snV8p1VtwFmXLvihJZ/edit?usp=sharing&ouid=106823129058087044514&rtpof=true&sd=true"
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
