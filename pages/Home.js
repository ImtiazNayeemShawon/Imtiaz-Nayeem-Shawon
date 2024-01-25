import React from "react";
import Image from "next/image";
import Imtiaz from "../public/me.png";
import Me from "../public/me.png";

import { Link } from "react-scroll";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const resume = () => {
    router.push("/Resume");
  };
  return (
    <React.Fragment>
      <div id="Home" className="bg mt-10">
        <Image
          src={Me}
          width={1000}
          height={1000}
          className="rounded-full me object-cover  h-40 w-40 bg-[#ffffff] m-auto block border-2 border-[#434141]"
        />
        <div className="m-auto w-fit  capitalize bg-[#111010] shadow py-2 px-4 rounded-xl flex items-center gap-3 ">
          <div className="w-4 h-4 bg-[#3cf64b] rounded-full  animate-pulse">
            <div className="w-4 h-4 bg-[#3cf64b] rounded-full  animate-ping" />
          </div>
          Available for opportunities
        </div>
        <div className="mt-">
          <h1 className="mainfont text-center text-[50px] font-bold text-white">
            Welcome to my coding cosmos{" "}
          </h1>
          {/* <p className="text-center text-lg font-semibold">where lines speak louder than words</p> */}
          <p className="text-center text-sm mt-2">
            👋 I'm Imtiaz Nayeem Shawon, <br /> a full-stack web developer
            specializing in  web application development.
          </p>
          <div className="flex justify-center gap-5 mt-10">
            <a
              href="https://wa.link/gihi2p"
              target="blank"
              className="border border-[#191818] bg-white text-[#242424] px-10 text-lg  py-2 rounded-lg flex items-center gap-2  "
            >
              💬 Let's talk
            </a>

            <Link
              to="projects"
              duration={1000}
              smooth={true}
              className="border cursor-pointer border-[#474646] bg-[#242424] text-[#fffdfd] px-10 text-lg  py-2 rounded-lg flex items-center gap-2"
            >
              💻 Projects
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
