import React from "react";
import Image from "next/image";
import Line from "../public/Line.png";

export default function Experince() {
  return (
    <div className="mt-44">
      <h1 className="text-4xl font-semibold text-gray-900 font-sans text-center p-5">
        My Experinces{" "}
      </h1>
      <p className="text-center text-sm text-gray-700">
        I am working on many non profit orgnazation as web developer blog
        writter i describe my all Experince below
      </p>
      <div className="mt-20">
        <div className="grid grid-cols-3 place-items-center gap-0 grid-flow-row-dense">
           {/* bsrs section */}
          <div className="bg-gray-200 p-6 pl-10 pr-3 rounded-lg min-w-full">
            <h1 className="text-xl font-bold text-blue-700 text-left capitalize ">
              Front-end developer
            </h1>
            <p className="text-gray-700 font-bold">Aug 2022 - Present </p>
          </div>
          <div className="bg-red-600 text-gray-100 py-4 px-5 rounded-3xl font-bold">
            <p>At</p>{" "}
          </div>

          <div className="bg-gray-200 p-6  rounded-lg min-w-full">
            <h1 className="text-xl font-bold text-blue-700 capitalize ">
              Bangladesh space research society{" "}
            </h1>
            <p className="text-sm text-gray-800 font-bold">Dhaka, Bangladesh</p>
            <p className="text-gray-900">Web developer as Volunteer</p>
            <br />

            <p className="text-sm text-gray-700 leading-6">
              Bangladesh space research society is a non profit organization. I
              joined in BSRS as front-end developer My Responsibilities: I
              create website for manage there event management like participant
              registration ,login The best non profit organization I have work
              ever.
            </p>
          </div>

          {/* bsrs section */}
          
        </div>
      </div>
    </div>
  );
}
