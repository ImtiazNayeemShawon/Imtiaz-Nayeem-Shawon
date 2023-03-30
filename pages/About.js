import React from "react";
import Imtiaz from "../public/imti.png";
import Image from "next/image";
import Frontend from "../public/frontend.png";
import Backend from "../public/backend.png";



export default function About() {
  return (

    <div className="mx-40 max-sm:mx-5 mt-20 bg-about  rounded-xl max-sm:place-items-center">
      <div className="about grid grid-cols-3 gap-x-8	max-sm:grid-cols-1 max-sm:place-items-center shadow-md rounded-xl">
        <div className="p-4 colorhunt-about-bg rounded-xl place-items-center	grid">
          <Image src={Imtiaz} alt="me" width={200} height={200} />
          <h2 className="mt-6 font-bold text-gray-800 text-xl uppercase max-sm:text-lg">
            Imtiaz Nayeem Shawon{" "}
          </h2>
          <div className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 rounded-xl p-1 px-6">
            <span className="text-sm capitalize text-gray-50 font-bold">
              Web Developer
            </span>
          </div>
          <div className="flex mt-6">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="w-5 h-5 hover:text-blue-300 hover:scale-125 duration-300 cursor-pointer  "
            >
              <path
                fill="currentColor"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 hover:text-blue-300 hover:scale-125 duration-300 cursor-pointer  ml-5"
            >
              <path
                fill="currentColor"
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-5 h-5 hover:text-blue-300 hover:scale-125 duration-300 cursor-pointer  ml-5"
            >
              <path
                fill="currentColor"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-5 h-5 hover:text-blue-300 hover:scale-125 duration-300 cursor-pointer ml-5"
            >
              <path
                fill="currentColor"
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
              />
            </svg>
          </div>
          <div className="grid place-items-start mt-10	">
            <div className="flex">
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
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>
              <span className="text-sm font-thin">19th December 2007</span>
            </div>
            <div className="flex justify-between	mt-4">
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
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>

              <span className="text-sm font-thin">
                Cumilla Chittagong ,Bangladesh
              </span>
            </div>
            <div className="flex justify-between	mt-4">
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
                  d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                />
              </svg>

              <span className="text-sm font-thin">imtiaznayim95@gmail.com</span>
            </div>
            <div className="flex justify-between	mt-4">
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
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>

              <span className="text-sm font-thin">+880 1745 9278 42</span>
            </div>
          </div>
          <a
            type="button"
            class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-10 flex "
            href="/images/myw3schoolsimage.jpg"
            download
          >
            Download Resume{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
              />
            </svg>
          </a>
        </div>
        <div className="col-span-2 p-5">
          <h1 className="text-2xl font-bold text-teal-600 ">About me </h1>
          <div className="h-2 w-20 rounded-xl mt-6 mb-6 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700"></div>
          <p className="text-justify text-sm leading-6	 font-semibold">
            My name is Imtiaz Nayeem Shawon, and I am a student of Cumilla
            Modern High School, SSC 23 batch. I am passionate about full-stack
            web development and am also learning AI and data science. My love
            for technology has led me to participate in many Olympiads, such as
            the Bangladesh Junior Science Olympiad and the ICT Olympiad. In
            2021, I was honored with a Creative Junior Award for my web
            designing skills. I am constantly learning and strive to explore new
            things in the field of technology.
          </p>
          <h1 className="text-2xl font-bold text-gray-600 capitalize mt-20">
            What I am doing
          </h1>
          <div className="grid grid-cols-2 justify-between gap-4 mt-10 max-sm:grid-cols-1">
            <div className="w-full colorhunt-about-bg place-items-center grid rounded-xl py-5 px-3 border-2 border-solid	border-inherit shadow-sm ">
              <Image src={Frontend} />
              <h1 className="font-semibold capitalize text-lg"> Web design </h1>
              <p className="font-semibold text-gray-700 text-center text-sm">
                software like Aldus PageMaker including versions of Lorem Ipsum
              </p>
            </div>
            <div className="w-full colorhunt-about-bg place-items-center grid rounded-xl py-5 px-3 border-2 border-solid	border-inherit shadow-sm ">
              <Image src={Backend} />
              <h1 className="font-semibold capitalize text-lg">
                {" "}
                Web development{" "}
              </h1>
              <p className="font-semibold text-gray-700 text-center text-sm">
                software like Aldus PageMaker including versions of Lorem Ipsum
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
