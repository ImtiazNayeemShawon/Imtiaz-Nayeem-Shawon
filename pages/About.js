import React from "react";

export default function About() {
  return (
    <React.Fragment>
      <div
      id="about"
      className="grid grid-cols-2 justify-around bg-blue-700 py-20 max-sm:mt-10 max-sm:grid-cols-1">
        <div className="px-40 max-sm:px-2">
          <div className="aboutbg  rounded-lg">
            <h1 className="extrastyle text-blue-700 m-auto text-center mainfont max-sm:h-fit">
              03
            </h1>
            <p className="text-3xl text-blue-700 uppercase font-bold mainfont max-sm:text-xl text-center ">
              Years of experience
            </p>
          </div>
        </div>

        <div className="pr-60 max-sm:p-3 max-sm:mt-10">
          <h1 className="mainfont text-white capitalize text-5xl font-semibold">
            About me{" "}
            <div className="h-1 rounded-2xl bg-yellow-200 w-20 mt-2"></div>{" "}
          </h1>
          <p className="text-white font-light leading-7 mainfont mt-10">
            With 3 years experience as a professional Web developer, I have
            acquired the skills and knowledge necessary to make your project a
            success. I enjoy every step of the design process, from discussion
            and collaboration.
          </p>

            <button
              className="mt-6 flex justify-around bg-white text-xl text-blue-700 px-10 py-5 rounded-2xl capitalize font-semibold hover:bg-white hover:text-gray-800 duration-300 hover:shadow-sm
              max-sm:m-auto max-sm:px-20 max-sm:py-3 max-sm:rounded-md max-sm:mt-4"
            >
              Download CV{" "}
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
                  d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
                />
              </svg>
            </button>
        </div>
      </div>
    </React.Fragment>
  );
}
