import React from "react";
import Image from "next/image";
import Logo from "../public/logo.png";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Navbar() {
  return (
    <div className="fixed">
      <nav className="bg-inherit	 px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-0">
        <div className="container flex  items-right justify-between mx-auto">
          <span className="">
            <Image className="w-12 rounded-lg" src={Logo} alt="logo" />
          </span>

        
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col p-1 font-bold mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-6 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 uppercase text-sm">
              <Link href="/" className=" text-gray hover:text-white hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-3 text-center duration-300">
                Home
              </Link>
              <Link href="/About" className=" text-gray hover:text-white hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-3 text-center duration-300">
                About
              </Link>
              <Link href="/" className=" text-gray hover:text-white hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-3 text-center duration-300">
                Tech stack
              </Link>
              <Link href="/" className=" text-gray hover:text-white hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-3 text-center duration-300">
                Projects
              </Link>
              <Link href="/" className=" text-gray hover:text-white hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-3 text-center duration-300">
                Achievment
              </Link>

              <a
                href="https://github.com/ImtiazNayeemShawon"
                target="_blank"
                className="text-white bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
              >
                <GitHubIcon /> GitHub
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
