import React from "react";
import Image from "next/image";
import Imtiaz from "../public/imtiazNayeem.png";
import { Link } from "react-scroll";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const resume = () => {
    router.push("/Resume");
  };
  return (
    <React.Fragment>
      <div id="Home" className="bg-white">
        <div className=" grid grid-cols-2 max-sm:grid-cols-1  place-items-center mx-20  max-sm:mx-5 ">
          <div className="max-sm:mt-20 md:hidden">
            <Image
              className="m-auto   max-sm:block"
              src={Imtiaz}
              width={350}
              alt="imtiaz nayeem shawon"
            />
          </div>
          <div className="mt-40 max-sm:mt-6">
            <h1 className="leading-tight text-7xl  capitalize text-black max-sm:mt-1 max-sm:text-center max-sm:text-4xl mainfont font-semibold">
              Imtiaz Nayeem
            </h1>
            <div>
              {" "}
              <h2 className="text-xl mainfont  capitalize max-sm:text-center">
                web Developer | programmer | entrepreneur
              </h2>
            </div>

            <p className="text-gray-700  mr-40 max-sm:m-0 text-left text-lg  mt-10 max-sm:text-center font-medium max-sm:text-sm">
              {" "}
              A self-motivated IT professional with huge knowledge and
              proficiency in <span className="text-blue-700 font-semibold">web development ,Javascript & C++ </span>
            </p>
            <div className="flex  gap-20 mt-10 flex-wrap max-sm:gap-5">
              <button
                onClick={resume}
                className="mt-6 flex justify-around bg-blue-700 text-xl text-white px-10 py-5 rounded-3xl capitalize font-semibold hover:bg-white hover:text-gray-800 duration-300 hover:shadow-sm
              max-sm:m-auto max-sm:px-20 max-sm:py-3 max-sm:rounded-md max-sm:"
              >
                Resume{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
                  />
                </svg>
              </button>
              <Link
                to="Projects"
                smooth={true}
                duration={500}
                className="mt-6 flex justify-around bg-gray-100 text-xl text-blue-700 px-10 py-5 rounded-3xl capitalize font-semibold hover:bg-white hover:text-gray-800 duration-300 hover:shadow-sm
                max-sm:m-auto max-sm:px-20 max-sm:py-3 max-sm:rounded-md cursor-pointer"
              >
                Projects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="">
            <Image
              className="m-auto max-sm:hidden  block mt-16"
              src={Imtiaz}
              width="500"
              alt="imtiaz nayeem shawon"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
