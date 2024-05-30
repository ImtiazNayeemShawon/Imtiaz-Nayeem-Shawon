import React from "react";
import Herosection from "./(components)/herosection";
import Projects from "./(components)/projects";
import Process from "./(components)/process";

export default function page() {
  return (
    <div>
      <Herosection />
      <Projects />
      <Process />
     
    </div>
  );
}
