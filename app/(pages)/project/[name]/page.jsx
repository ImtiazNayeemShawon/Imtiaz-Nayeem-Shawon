"use client";

import React from "react";
import HeroSection from "@/components/Hero";
import { Overview } from "@/components/Overview";

export default function page() {
  return (
    <>
      <HeroSection />;
      <Overview />
    </>
  );
}
