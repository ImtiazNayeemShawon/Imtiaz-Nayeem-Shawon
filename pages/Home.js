import React from "react";
import Image from "next/image";
import Imtiaz from "../public/imti.png";

export default function Home() {
  return (
    <div className="bghome ">
      <div className="grid grid-cols-2 max-sm:grid-cols-1  place-items-center mx-20  max-sm:mx-5 ">
        <div className="mt-20">
          
          <h1 className="leading-tight text-4xl font-bold  mt-10  text-gray-700 max-sm:mt-1 max-sm:text-center max-sm:text-xl">
            It's a pleasure to introduce myself
          </h1>
          <h1 className="leading-tight   text-6xl font-bold uppercase text-blue-700 max-sm:mt-1 max-sm:text-center max-sm:text-4xl">
            <span className="text-red-500  ">I'm</span> Imtiaz Nayeem Shawon
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
            My name is Imtiaz Nayeem Shawon, and I am a student of Cumilla Modern High School, SSC 23 batch. I am passionate about full-stack web development and am also learning AI and data science. My love for technology has led me to participate in many Olympiads, such as the Bangladesh Junior Science Olympiad and the ICT Olympiad. In 2021, I was honored with a Creative Junior Award for my web designing skills. I am constantly learning and strive to explore new things in the field of technology.
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
