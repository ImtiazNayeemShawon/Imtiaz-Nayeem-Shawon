import React from "react";
import Image from "next/image";
import Imtiaz from "../public/imti.png";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-2 mt-40 max-sm:grid-cols-1 max-sm:mt-40 place-items-center">
        <div className="mt-0">
          
          <h1 className="leading-tight text-4xl font-bold  text-gray-700 max-sm:mt-1 max-sm:text-center max-sm:text-xl">
            It's a pleasure to introduce myself
          </h1>
          <h1 className="leading-tight text-6xl font-bold uppercase text-blue-700 max-sm:mt-1 max-sm:text-center max-sm:text-4xl">
            <span className="text-red-500">I'm</span> Imtiaz Nayeem Shawon
          </h1>
          <div className="">
            <Image
              className="m-auto  hidden max-sm:block"
              src={Imtiaz}
              width="500"
              alt="imtiaz nayeem shawon"
            />
          </div>
          <p className="text-gray-700 leading-7 text-left text-sm  mt-8 max-sm:text-justify">
            {" "}
            I am a creative and ambitious web developer. I have been doing web
            design for the last 2 years and I have worked in 7+ organizations as
            a web developer and also done some client work. I am expert in
            Javascript Next js and React js also proficient in React js tailwind
            CSS MUI and CSS.
          </p>
          <div className="flex max-sm:justify-around">
            <button className="mt-6 bg-gray-800  text-white px-7 p-3 rounded-lg uppercase font-semibold hover:bg-white hover:text-gray-800 duration-300 hover:shadow-xl">
              Resume
            </button>
            <button className="mt-6 bg-gray-800  text-white px-7 p-3 rounded-lg uppercase font-semibold hover:bg-white hover:text-gray-800 duration-300 hover:shadow-xl ml-20">
              Contact{" "}
            </button>
          </div>
        </div>
        <div className="">
          <Image
            className="m-auto block max-sm:hidden"
            src={Imtiaz}
            width="500"
            alt="imtiaz nayeem shawon"
          />
        </div>
      </div>
    </div>
  );
}
