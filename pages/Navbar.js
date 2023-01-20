import React from "react";
import { useState } from "react";
import Image from "next/image";
import Logo from "../public/logo.png";
import Link from "next/link";
import GitHubIcon from '@mui/icons-material/GitHub';



export default function Navbar() {
  const [alert, setAlert] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed">
      <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <span class="">
            <Image className="w-12 rounded-md" src={Logo} alt="logo" />
          </span>

          <div class="flex md:order-2">
            <a
            href="https://github.com/ImtiazNayeemShawon"
              target="_blank"
              class="text-white bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
             
            >
              <GitHubIcon/> GitHub
            </a>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={() => setOpen(!open)}
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="RoboticsShop"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Tech stack
                </Link>
              </li>
              <li>
                <Link
                  href="About"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="Achivments"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Achievements
                </Link>
              </li>
              <li>
                <Link
                  href="Gellary"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="Gellary"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="Gellary"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Showcase
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {open && (
        <div className="mt-0 fixed bg-slate-50 shadow-xl shadow-indigo p-16  rounded py-9 md:hidden cursor-pointer">
          <ul className="text-black-600 font-semibold list-item">
            <Link
              href="/"
              className=" list-item mb-10  hover:bg-slate-200 p-2 rounded text-center text-black"
              onClick={() => setOpen(!open)}
            >
              Home
            </Link>
            <Link
              href="RoboticsShop"
              className=" list-item mb-10  hover:bg-slate-200 p-2 rounded text-center text-black"
              onClick={() => setOpen(!open)}
            >
              Tech stack
            </Link>
            <Link
              href="About"
              onClick={() => setOpen(!open)}
              className=" list-item mb-10  hover:bg-slate-200 p-2 rounded text-center text-black"
            >
              About
            </Link>
            <Link
              href="Achivments"
              onClick={() => setOpen(!open)}
              className="list-item mb-10  hover:bg-slate-200 p-2 rounded text-center text-black"
            >
              Achievements
            </Link>
            <Link
              href="Gallery"
              onClick={() => setOpen(!open)}
              className="list-item mb-10  hover:bg-slate-200 p-2 rounded text-center text-black"
            >
              Projects
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}
