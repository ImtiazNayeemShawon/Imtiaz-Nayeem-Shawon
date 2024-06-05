"use client";
import React from "react";
import { MacbookScroll } from "../../components/ui/macbook-Scroll";
import Link from "next/link";
import Thumb from "/public/github.png";

export default function GithubProfile() {
  return (
    <div className="overflow-hidden  w-full">
      <MacbookScroll
        title={<span className="text-white">Check my github contribution history </span>}
        src={Thumb}
        showGradient={false}
      />
    </div>
  );
}
