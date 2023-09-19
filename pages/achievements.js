import React from "react";
import Image from "next/image";
import Succes from "../public/success.png";
import Achiv from "../public/sign.png";
import CJ from "../public/cj.jpeg";
import Done from "../public/done.png";
import Fail from "../public/fail.png";
import NASA from "../public/nasa.png";
import ICTOB from "../public/ictob.jpeg";
import BDJSO from "../public/bdjso.jpeg";
import DBD from "../public/digibd.png";



export default function achievements() {
  return (
    <div id="achievements" className="m-20 max-sm:mx-4">
      <div className="grid grid-cols-2 items-center place-items-end max-sm:grid-cols-1 gap-10 max-sm:place-items-center ">
        <div>
          <Image src={Achiv} width={100} />
          <h1 className="text-5xl font-semibold w-[30%] mainfont">
            Personal achievements
          </h1>
          <div className="h-1 bg-black rounded-full w-40 mt-4 "></div>
          <p className="mt-5">
            Each individual possesses their unique sphere of expertise, where
            they shine brightly, accomplishing their heartfelt desires through
            unwavering dedication and the occasional stroke of luck, serving as
            an added catalyst for their success
          </p>
        </div>
        <Image src={Succes} width={300} />
      </div>
      <div className="mt-20">
        {/* creative juniors award */}
        <div className="flex gap-5 items-center flex-wrap">
          <Image
            src={CJ}
            width={100}
            className="rounded-full border-8 border-yellow-300"
          />
          <p className=" text-xl">Creative juniors award</p>
          <div className="flex items-center justify flex-wrap max-sm:gap-5">
            <div className="flex items-center gap-2">
              <p className="uppercase text-sm">Live QUIZES</p>
              <Image src={Done} width={50} />
            </div>
            <div className="h-1 w-24 bg-yellow-300 rounded-full"></div>
            <div className="flex items-center gap-2">
              <p className="uppercase text-sm">Project</p>
              <Image src={Done} width={50} />
            </div>
            <div className="h-1 w-24 bg-yellow-300 rounded-full"></div>
            <div className="flex items-center gap-2">
              <p className="uppercase text-sm">WIN creative juniors award</p>
              <Image src={Succes} width={100} />
            </div>
          </div>
        </div>
        {/* ICTOB */}
        <div className="flex gap-5 items-center mt-10 flex-wrap">
          <Image
            src={ICTOB}
            width={100}
            className="rounded-full border-8 border-yellow-100"
          />
          <p className=" text-xl">Bangladesh ICT olympiad</p>
          <div className="flex items-center justify flex-wrap max-sm:gap-5">
            <div className="flex items-center gap-2">
              <p className="uppercase text-sm">Zilla round</p>
              <Image src={Done} width={50} />
            </div>
            <div className="h-1 w-24 bg-yellow-300 rounded-full"></div>
            <div className="flex items-center gap-2">
              <p className="uppercase text-sm">Divisional round</p>
              <Image src={Done} width={50} />
            </div>
            <div className="h-1 w-24 bg-yellow-300 rounded-full"></div>
            <div className="flex items-center gap-2">
              <p className="uppercase text-sm">National round</p>
              <Image src={Fail} width={100} />
            </div>
          </div>
        </div>
        {/* bdjso */}
        <div className="flex gap-5 items-center mt-10 flex-wrap">
          <Image
            src={BDJSO}
            width={100}
            className="rounded-full border-8 border-red-500"
          />
          <p className=" text-xl">Junior science olympiad -2022</p>
          <div className="flex items-center justify flex-wrap max-sm:gap-5">
            <div className="flex items-center gap-2">
              <p className="uppercase text-sm">Online selection</p>
              <Image src={Done} width={50} />
            </div>
            <div className="h-1 w-24 bg-yellow-300 rounded-full"></div>
            <div className="flex items-center gap-2">
              <p className="uppercase text-sm">Divisional round</p>
              <Image src={Fail} width={100} />
            </div>
          </div>
        </div>
        {/* Digital bangladesh quiz 2021,2022 */}
        <div className="flex gap-5 items-center mt-10 flex-wrap">
          <Image
            src={DBD}
            width={100}
            className="rounded-full border-8 border-red-600"
          />
          <p className=" text-xl">Digital bangladesh quiz 2021,2022</p>
          <div className="flex items-center justify flex-wrap max-sm:gap-5">
            <div className="flex items-center gap-2">
              <p className="uppercase text-sm">Online selection</p>
              <Image src={Fail} width={50} />
            </div>
          </div>
        </div>
        {/* Nasa scientise for a day */}
        <div className="flex gap-5 items-center mt-10 flex-wrap">
          <Image
            src={NASA}
            width={100}
            height={200}
            className="rounded-full border-8 border-yellow-300"
          />
          <p className=" text-xl">Nasa scientist for a day 2021 </p>
          <div className="flex items-center justify">
            <div className="flex items-center gap-2">
              <p className="uppercase text-sm"></p>
              <Image src={Succes} width={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
