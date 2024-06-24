"use client";
import React from "react";
import Thumb from "/public/bard.png";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import Link from "next/link";

export default function projects() {
  return (
    <div id="projects" className="mx-[10%] max-md:mx-[4%]">
      <div>
        <h1 className="text-center text-white text-[60px] font-extrabold  max-md:text-[30px] my-10 ">
          Featured Work
        </h1>
        <div className="flex justify-center gap-10 flex-wrap  ">
          {[0, 2, 3, 4]?.map((data, index) => (
            <CardContainer className="">
              <CardBody className="border-[#252525] border relative group/card  w-auto sm:w-[30rem] h-auto rounded-xl p-6 bg-[#191919]  ">
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={Thumb}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem translateZ="50" className="mt-10">
                  <h1 className="font-bold text-white text-2xl">Cinmadrip</h1>
                </CardItem>
                <CardItem
                  as="h2"
                  translateZ="60"
                  className=" text-[#c5c0c0] text-lg w-[90%] mt-4"
                >
                  Powering delightful podcast , movie experiences for everyone,
                  everywhere
                </CardItem>
                <div>
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href="https://twitter.com/mannupaaji"
                    target="__blank"
                    className="text-[14px] max-md:text-[10px] w-fit border border-[#323233]    flex items-center gap-1 hover:gap-2 duration-300  font-semibold capitalize text-[#feffff] hover:opacity-80 px-4 py-2 rounded-full mt-4"
                  >
                    Live site{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>

        <button className="text-[14px] max-md:text-[10px] border border-[#9597f7]  bg-[#6366F1]   flex justify-center self-center m-auto mt-20 items-center gap-1 hover:gap-2 duration-300  font-semibold capitalize text-[#feffff] hover:opacity-80 px-4 py-2 rounded-full">
          See more{" "}
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
  );
}
