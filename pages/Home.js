import React from "react";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-2 mt-40 max-sm:mt-14 max-sm:grid-cols-1">
        <div className="mt-20">
          <h1 className="leading-tight text-6xl font-bold capitalize text-gray-700 max-sm:mt-1 max-sm:text-center max-sm:text-4xl">
            Hello guys I'm
          </h1>
          <h1 className="leading-tight text-6xl font-bold uppercase text-blue-700 max-sm:mt-1 max-sm:text-center ">
            Imtiaz Nayeem Shawon
          </h1>
          <p className="text-gray-700 leading-7 text-left text-sm capitalize mt-8 max-sm:text-justify">
            {" "}
            I am a creative and ambitious web developer. I have been doing web
            design for the last 2 years and I have worked in 7+ organizations as
            a web developer and also done some client work. I am expert in
            Javascript Next js and React js also proficient in React js tailwind
            CSS MUI and CSS.
          </p>
          <div>
            <button className="mt-6 bg-gray-800  text-white px-7 p-3 rounded-lg uppercase font-semibold">
              Resume
            </button>
            <button className="mt-6 bg-gray-800  text-white px-7 p-3 rounded-lg uppercase font-semibold ml-20">
              Hire me{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
