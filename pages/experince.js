import React from "react";
import Job from "./api/data.json";
import { useScroll, animated } from '@react-spring/web'


export default function experince() {

  return (
    <div className="mx-60 mt-40 max-sm:mx-5 ">
      <div className="">
        <h1 className="text- text-4xl text-center font-bold text-cyan-800	normal-case">My experinces </h1>
        <p className="text-center font-semibold mt-5 normal-case text-lg">I have extensive experience as a web developer, having worked with numerous organizations and gained valuable insights.</p>
        <div className="w-full bg-pink-300 rounded-xl h-1 mt-6"></div>
        <div>
          {Job.map((item) => (
            <div  className="flex">
              <div className="h-66 bg-gray-500 w-4 rounded-lg mr-20 mt-20 max-sm:mr-5"></div>
              <div className="mt-20">
              <div className="w-40 bg-green-300 rounded-xl h-1 mb-6"></div>
                <h2 className="text-gray-700 text-3xl capitalize font-bold">
                  {item.position}
                  <span className="text-teal-400 ml-2 max-sm:ml-0">@{item.orgname}</span>
                </h2>
                <p className="font-semibold capitalize text-lg">
                  {item.title} 
                </p>
                <p className="font-thin capitalize">
                  {item.location} | {item.time}
                </p>
               
                <h2 className="text-justify mt-3 normal-case">{item.body}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
