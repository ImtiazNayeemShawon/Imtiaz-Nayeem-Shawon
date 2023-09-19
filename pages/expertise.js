import React, { useState } from "react";
import Image from "next/image";
import Js from "../public/js.png";
import Reactjs from "../public/react.png";
import CSS from "../public/css-3.png";
import Ts from "../public/typescript.png";
import Next from "../public/next.png";
import MongoDb from "../public/mongo.png";
import Express from "../public/express.png";
import Tailwind from "../public/tailwind.png";
import Bt from "../public/bootstrap.png";
import Linux from "../public/linux.png";
import Figma from "../public/figma.png";

import Data from "./api/data.json";

export default function expertise() {
  const [toggle, setToggle] = useState(false);

  const expertise = (
    <div className="grid grid-cols-4 max-sm:grid-cols-3 gap-y-20 mt-5 capitalize">
      <div className="block  p-3">
        <Image src={Js} width={50} className=" m-auto block" />
        <h1 className="text-center">Javascript</h1>
      </div>
      <div className="block  p-3">
        <Image src={Reactjs} width={50} className=" m-auto block" />
        <h1 className="text-center">React js</h1>
      </div>
      <div className="block  p-3">
        <Image src={Next} width={50} className=" m-auto block" />
        <h1 className="text-center">Next js</h1>
      </div>
      <div className="block  p-3">
        <Image src={Express} width={50} className=" m-auto block" />
        <h1 className="text-center">Express js</h1>
      </div>
      <div className="block  p-3">
        <Image src={MongoDb} width={50} className=" m-auto block" />
        <h1 className="text-center">MongoDb</h1>
      </div>
      <div className="block  p-3">
        <Image src={Tailwind} width={50} className=" m-auto block" />
        <h1 className="text-center">Tailwind CSS</h1>
      </div>
      <div className="block  p-3">
        <Image src={CSS} width={50} className=" m-auto block" />
        <h1 className="text-center">CSS3</h1>
      </div>
      <div className="block  p-3">
        <Image src={Ts} width={50} className=" m-auto block" />
        <h1 className="text-center">Typescript</h1>
      </div>
      <div className="block  p-3">
        <Image src={Bt} width={50} className=" m-auto block" />
        <h1 className="text-center">Bootstrap 5</h1>
      </div>
      <div className="block  p-3">
        <Image src={Linux} width={50} className=" m-auto block" />
        <h1 className="text-center">Linux </h1>
      </div>
      <div className="block  p-3">
        <Image src={Figma} width={50} className=" m-auto block" />
        <h1 className="text-center">Figma</h1>
      </div>
    </div>
  );
  const experince = (
    <div className="grid grid-cols-2 gap-5">
      {Data?.map((item, index) => (
        <div className="p-3 mt-10" key={index + 1}>
          <h2 className="text-blue-700 text-lg capitalize mainfont">
            {item.time}
          </h2>
          <a href={item.link} className="text-lg capitalize mainfont mt-2 max-sm:text-sm hover:underline hover:text-gray-700 duration-300">
            {item.orgname}
          </a>
          <hr class="h-px my-4 bg-gray-400 border-0 w-20" />
          <b className="text-2xl text-gray-900 mt-5 max-sm:text-lg">
            {item.position}
          </b>
        </div>
      ))}
    </div>
  );

  return (
    <React.Fragment>
      <div className="grid grid-cols-2 mt-20 max-sm:grid-cols-1" id="expertise">
        <div className="pl-40 pr-10 max-sm:px-3">
          <h1 className="text-5xl mainfont font-semibold max-sm:text-3xl">
            My expert <br /> areas{" "}
            <div className="h-1 bg-black rounded-lg w-40 mt-4"></div>
          </h1>
          <p className="mt-2 leading-8 mainfont text-lg text-gray-800 max-sm:text-sm">
            You can express yourself however you want and whenever you want, for
            free. You can customize a template or make your own from scratch,
            with an immersive library at your disposal. You can express yourself
            however you want and whenever you free.{" "}
            <span className="mt-4">
              You can customize a template or make your own from scratch, with
              an immersive library at your disposal.
            </span>
          </p>
        </div>
        <div className="max-sm:mt-7">
          <div className="flex justify-around">
            <button
              onClick={() => setToggle(true)}
              className={`text-lg mainfont font-semibold bg-gray-100 px-10 py-4  rounded-lg flex justify-around ${
                !toggle ? "" : "ring-2"
              }`}
            >
              Skills
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
                  d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                />
              </svg>
            </button>
            <button
              onClick={() => setToggle(false)}
              className={`text-lg mainfont font-semibold bg-gray-100 px-10 py-4  rounded-lg flex justify-around ${
                toggle ? "" : "ring-2"
              }`}
            >
              Experince
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
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                />
              </svg>
            </button>
          </div>
          {toggle ? <div> {expertise}</div> : <div>{experince}</div>}
        </div>
      </div>
    </React.Fragment>
  );
}
