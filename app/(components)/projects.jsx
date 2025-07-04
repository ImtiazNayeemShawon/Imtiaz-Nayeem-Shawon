"use client";
import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import Link from "next/link";
import Ryun from "/public/projects/ryun.png";
import Zipbox from "/public/projects/zipbox.png";
import Frosty from "/public/projects/frosty.png";
import Skinsort from "/public/projects/skinsort.png";
import Mzmedia from "/public/projects/mzmedia.png";
import Byoc from "/public/projects/boyc.png";
import SkyNetix from "/public/projects/skynetix.png";
import Dealer from "/public/dealer.png";
import Fahim from "/public/fahim.png";

export default function projects() {
  const projects = [
    {
      title: "MZ Media",
      description:
        "A digital agency website for showcasing there work and reviews ",
      url: true,
      image: Mzmedia,
    },
    {
      title: "Ryun Shim",
      description:
        "A portfolio website for Ryun Shim, a graduate from Cornell University",
      url: true,
      image: Ryun,
    },
    {
      title: "Dealer nexus",
      description:
        "SaaS website for Dealer Nexus, showcasing this very approach in action",
      url: true,
      image: Dealer,
    },
    {
      title: "Product designer portfolio",
      description: "A portfolio website for showcasing his work and reviews ",
      url: true,
      image: Fahim,
    },
    {
      title: "zipbox",
      description: "A Web Design & development agency portfolio",
      url: true,
      image: Zipbox,
    },
    {
      title: "Frosty icepod",
      description:
        "A e-commerce website for selling icepod and other products ",
      url: true,
      image: Frosty,
    },
    {
      title: "cosmpulse",
      description:
        "A  SaaS platform where user can able to make routine and track daily logs",
      url: true,
      image: Skinsort,
    },
    {
      title: "Skynetix",
      description: "A 360 degreee digital marketing agency portfolio ",
      url: true,
      image: SkyNetix,
    },
  ];

  return (
    <div id="projects" className="mx-[10%] max-md:mx-[4%] max-md:mt-28">
      <div>
        <h1 className="text-center text-white text-[60px] font-extrabold  max-md:text-[30px]  ">
          Featured Work
        </h1>
        <p className="text-sm text-white text-center mb-10">
          Here, I’m showcasing my latest project. While I’ve worked on several
          other projects, I’m unable to share them due to NDA restrictions.
        </p>
        <div className="flex justify-center gap-10 flex-wrap  ">
          {projects?.map((data, index) => (
            <CardContainer key={index}>
              <CardBody className="border-[#252525]  border relative group/card  w-auto sm:w-[30rem] h-auto rounded-xl p-6 bg-[#191919]  ">
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={data?.image}
                    height="1000"
                    width="1000"
                    className="h-[16rem] w-full  object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem translateZ="50" className="mt-10">
                  <h1 className="font-bold text-white text-2xl">
                    {data?.title}
                  </h1>
                </CardItem>
                <CardItem
                  as="h2"
                  translateZ="60"
                  className=" text-[#c5c0c0] text-lg w-[90%] mt-4"
                >
                  {data?.description}
                </CardItem>

                <div>
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={""}
                    target="__blank"
                    className="text-[14px]  w-fit border border-[#323233] flex     items-center gap-1 hover:gap-2 duration-300  font-semibold capitalize text-[#feffff] hover:opacity-80 px-4 py-2 rounded-full mt-4"
                  >
                    {data?.url ? "View Project" : "No Longer Active"}
                    {data?.url ? (
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
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>

        {/* <button className="text-[14px] max-md:text-[10px] border border-[#9597f7]  bg-[#6366F1]   flex justify-center self-center m-auto mt-20 items-center gap-1 hover:gap-2 duration-300  font-semibold capitalize text-[#feffff] hover:opacity-80 px-4 py-2 rounded-full">
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
        </button> */}
      </div>
    </div>
  );
}
