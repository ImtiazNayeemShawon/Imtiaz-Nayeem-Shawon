import React from "react";
import Side from "../public/side.png";
import Image from "next/image";

export default function brands() {
  return (
    <div className="mt-44 max-sm:mt-20 mx-20  max-sm:mx-5 ">
      <div className="grid grid-cols-2 place-items-center gap-8 max-sm:grid-cols-1">
        <div>
          <h1 className="text-4xl font-sans font-semibold text-gray-800 text-left max-sm:text-center">
            Achievements 🏆
          </h1>
          <p className="leading-9 text-justify text-md mt-8 text-gray-900">
            As I grew older, I thought about the things that I have achieved. To
            my surprise, I haven’t accomplished a lot. I believe, Achievements
            of today are the stepping stones for the future ones.
          </p>
          <button className="mt-6 bg-indigo-800  text-white px-5 p-3 rounded-3xl  font-semibold">
            Testimonials
          </button>
          <button className="mt-6 bg-indigo-800  text-white px-5 p-3 rounded-3xl  font-semibold ml-20">
            About me 
          </button>
         
        </div>
        <div>
          <Image src={Side} alt="Side picture " width={550} height={550} />
        </div>
      </div>
    </div>
  );
}
