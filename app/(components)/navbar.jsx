import React from "react";
import Logo from "/public/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function navbar() {
  return (
    <div>
      <div className="flex justify-around py-4 mt-8 max-md:mt-2 max-md:justify-center items-center fixed w-full max-md:flex-wrap">
        <div>
          <Image
            src={Logo}
            alt="Logo"
            className="w-14 bg-[#efeff5] rounded-[20%] max-md:hidden "
          />
        </div>
        <div className="">
          <div className="bg-[#363B43] shadow-sm p-[5px] pl-5 rounded-full flex items-center gap-10 max-md:gap-40 ">
            <Link
              href=""
              className="text-[14px] max-md:text-[10px]  font-semibold capitalize text-[#EAF3FB] hover:opacity-80 max-sm:block hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link
              href=""
              className="text-[14px] max-md:text-[10px]  font-semibold capitalize text-[#EAF3FB] hover:opacity-80 max-sm:hidden"
            >
              Home
            </Link>
            <Link
              href=""
              className="text-[14px] max-md:text-[10px]  font-semibold capitalize text-[#EAF3FB] hover:opacity-80 max-sm:hidden"
            >
              About
            </Link>
            <Link
              href=""
              className="text-[14px] max-md:text-[10px]  font-semibold capitalize text-[#EAF3FB] hover:opacity-80 max-sm:hidden"
            >
              Projects
            </Link>
            <Link
              href=""
              className="text-[14px] max-md:text-[10px]  font-semibold capitalize text-[#EAF3FB] hover:opacity-80 max-sm:hidden"
            >
              Tech stack
            </Link>
            <Link
              href=""
              className="text-[14px] max-md:text-[10px]  font-semibold capitalize text-[#EAF3FB] hover:opacity-80 max-sm:hidden"
            >
              Projects
            </Link>
            <Link
              href=""
              className="text-[14px] max-md:text-[10px] border border-[#9597f7]  bg-[#6366F1]   flex items-center gap-1 hover:gap-2 duration-300  font-semibold capitalize text-[#feffff] hover:opacity-80 px-4 py-2 rounded-full"
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
