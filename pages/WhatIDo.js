import React from "react";
import Image from "next/image";
import Ui from "../public/ui.png";
import Db from "../public/db.png";
import Frontend from "../public/frontend.png";
import backend from "../public/backend.png";
import App from "../public/app.png";

export default function WhatIDo() {
  return (
    <div className="mt-44 max-sm:mt-20  max-sm:mx-5 mx-20">
      <h1 className="text-4xl text-center capitalize	font-bold text-gray-800">
        what I do?
      </h1>
      <p className="text-gray-700 capitalize text-center text-sm leading-10 max-sm:leading-7 ">
        I am expert in <span className="font-bold"> front-end development</span>{" "}
        but i learn about more things which related to web and tech{" "}
      </p>
      <div className="mt-20 grid grid-cols-3 gap-11 place-items-center max-sm:grid-cols-1">
        {/* Front end part */}
        <div className="grid justify-items-center bg-gray-200 p-10 rounded-lg shadow-sm min-w-full	">
          <h1 className="text-gray-900 text-2xl text-center capitalize font-bold ">
            Front-end development
            <p className="text-sm   text-green-600">Expert</p>
          </h1>
          <Image src={Frontend} alt="Front-end" />
          <p className=" text-gray-500 capitalize text-sm leading-7 max-sm:text-center text-center mb-3">
            Completed 20+ front-end Project{" "}
          </p>

          <button className="text-white bg-blue-600 p-2 rounded-md font-semibold uppercase text-sm">
            View projects 👉
          </button>
        </div>

        {/* UI/UX part */}
        <div className="grid justify-items-center bg-gray-200 p-10 rounded-lg shadow-sm min-w-full	">
          <h1 className="text-gray-900 text-2xl text-center capitalize font-bold ">
            UI/UX design
            <p className="text-sm  text-green-600 ">Beginner</p>
          </h1>
          <Image src={Ui} alt="Front-Ui" />
          <p className=" text-gray-500 capitalize text-sm leading-7 max-sm:text-center text-center mb-3">
            Completed 4+ UI/UX Project{" "}
          </p>

          <button className="text-white bg-blue-600 p-2 rounded-md font-semibold uppercase text-sm">
            View projects 👉
          </button>
        </div>
        {/* Backend part */}

        <div className="grid justify-items-center bg-gray-200 p-10 rounded-lg shadow-sm min-w-full	">
          <h1 className="text-gray-900 text-2xl text-center capitalize font-bold ">
            Back-end development
            <p className="text-sm  text-green-600 ">Beginner</p>
          </h1>
          <Image src={backend} alt="Front-backend" />
          <p className=" text-gray-500 capitalize text-sm leading-7 max-sm:text-center text-center mb-3">
            Completed 1+ Back-end Project{" "}
          </p>

          <button className="text-white bg-blue-600 p-2 rounded-md font-semibold uppercase text-sm">
            View projects 👉
          </button>
        </div>
        {/* Database part */}
        <div className="grid justify-items-center bg-gray-200 p-10 rounded-lg shadow-sm min-w-full	">
          <h1 className="text-gray-900 text-2xl text-center capitalize font-bold ">
            Database
            <p className="text-sm  text-green-600 ">Beginner</p>
          </h1>
          <Image src={Db} alt="Db" />
          <p className=" text-gray-500 capitalize text-sm leading-7 max-sm:text-center text-center mb-3">
            Completed 0 Database Project{" "}
          </p>

          <button className="text-white bg-blue-600 p-2 rounded-md font-semibold uppercase text-sm">
            View projects 👉
          </button>
        </div>
        {/* App develop part */}
        <div className="grid justify-items-center bg-gray-200 p-10 rounded-lg shadow-sm min-w-full	">
          <h1 className="text-gray-900 text-2xl text-center capitalize font-bold ">
            App development
            <p className="text-sm  text-green-600 ">Beginner</p>
          </h1>
          <Image src={App} alt="Db" />
          <p className=" text-gray-500 capitalize text-sm leading-7 max-sm:text-center text-center mb-3">
            Completed 0 App Project{" "}
          </p>

          <button className="text-white bg-blue-600 p-2 rounded-md font-semibold uppercase text-sm">
            View projects 👉
          </button>
        </div>
      </div>
    </div>
  );
}
