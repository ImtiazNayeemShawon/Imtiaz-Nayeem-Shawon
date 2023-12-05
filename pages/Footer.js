import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="mt-60 mx-40 max-sm:mx-4 max-sm:mt-20">
        <div className="w-full h-[1px] bg-[#282626] my-2" />
        <div>
          <h1 className="mainfont mt-10 text-center text-[50px] max-sm:text-[30px] capitalize">
            let's make <br /> something unique together
          </h1>
          <a href="mailto:imtiaznayim95@gmail.com" className="text-[#9C9C9C] px-20 py-3 bg-[#1A1A1A] border-[#2f2e2e] border rounded-sm flex items-center gap-2 hover:shadow-2xl shadow-[#8D8D8D] duration-300 m-auto mt-10 w-fit">
            Get in touch{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
          </a>
        </div>
        <div className="mt-10 py-10">
          <div className="w-full h-[1px] bg-[#282626] my-2" />
          <p className="text-center">
            © 2023 Imtiaz Nayeem Shawon. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
