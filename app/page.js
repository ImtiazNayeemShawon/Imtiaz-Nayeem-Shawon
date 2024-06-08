import React from "react";
import Herosection from "./(components)/herosection";
import Projects from "./(components)/projects";
import Process from "./(components)/process";
import Skills from "./(components)/skills";
import Githubrofile from "./(components)/githubProfile";
import Worldwide from "./(components)/wordlwide";
import Contact from "./(components)/contact"

export default function page() {
  return (
    <div>
      <Herosection />
      <Projects />
      <Githubrofile />
      <Process />
      <Skills />
      <Worldwide />
      <Contact/>
    </div>
  );
}
