import React from "react";
import Client from "../public/client.png";
import Projects from "../public/projects.png";
import Experince from "../public/exp.png";
import Org from "../public/org.png";

import Image from "next/image";

export default function SmallIntro() {
  return (
    <div>
      <div className="shadow-xl bg-slate-200 rounded-2xl mx-44 max-sm:m-0 max-sm:bg-transparent max-sm:shadow-sm">
        <div class=" mt-44 flex justify-around max-sm:block max-sm:p-1 ">
          <div className="grid justify-items-center bg-slate-100 rounded-2xl p-10 m-7 w-96 max-sm:text-center max-sm:w-auto max-sm:m-2  ">
            <Image src={Projects} alt="projects" />
            <h1 className="text-xl font-bold text-gray-800 uppercase">
              20+Projects
            </h1>
            <p className="text-left text-gray-500 capitalize text-sm leading-7 max-sm:text-center">
              I am completed 20+ project
            </p>
          </div>

          <div className="grid justify-items-center bg-slate-100 rounded-2xl p-10 m-7 w-96 max-sm:text-center max-sm:w-auto max-sm:m-2">
            <Image src={Client} alt="Client" />
            <h1 className="text-xl font-bold text-gray-800 uppercase">
              11+Client
            </h1>
            <p className="text-left text-gray-500 capitalize text-sm leading-7 max-sm:text-center">
              {" "}
              I have done some client work
            </p>
          </div>
        </div>

        <div className="flex mt-0 justify-around max-sm:block max-sm:p-1">
          <div className="grid justify-items-center bg-slate-100 rounded-2xl p-10 m-7 w-96  max-sm:text-center max-sm:w-auto max-sm:m-2 ">
            <Image src={Org} alt="Org" />
            <h1 className="text-xl font-bold text-gray-800 uppercase">
              7+organizations
            </h1>
            <p className="text-left text-gray-500 capitalize text-sm leading-7 max-sm:text-center">
              {" "}
              I have worked in 7+ organizations as a web developer.
            </p>
          </div>
          <div className="grid justify-items-center bg-slate-100 rounded-2xl p-10 m-7 w-96 max-sm:text-center max-sm:w-auto max-sm:m-2">
            <Image src={Experince} alt="Experince" />

            <h1 className="text-xl font-bold text-gray-800 uppercase">
              2+ year experince
            </h1>
            <p className="text-left text-gray-500 capitalize text-sm leading-7 max-sm:text-center">
              {" "}
              I have been doing web design for the last 2 years .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
