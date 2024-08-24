import React from "react";
import Link from "next/link";

export default function sidebar() {
  return (
    <div className="text-white">
      <div className="border-r-[1px]  border-[#302020] shadow-xl h-screen  flex flex-col gap-10 px-4 py-10">
        <p className="font-extrabold text-center ">Dashboard</p>
        <hr />
        <Link href={"/upload"} className="text-sm font-bold ">
          Tech Stack
        </Link>
        <Link href={"/upload"} className="text-sm font-bold ">
          Projects
        </Link>
        <Link href={"/upload"} className="text-sm font-bold ">
          Experiences
        </Link>
      </div>
    </div>
  );
}
