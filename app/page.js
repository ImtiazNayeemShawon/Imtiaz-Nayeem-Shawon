import React from "react";
import Herosection from "./(components)/herosection";
import Projects from "./(components)/projects";
import Process from "./(components)/process";
import Skills from "./(components)/skills";
import Githubrofile from "./(components)/githubProfile";
import Worldwide from "./(components)/wordlwide";
import Contact from "./(components)/contact";
import Footer from "./(components)/footer";
import Experience from "./(components)/experience";


export default function page() {
  return (
    <div>
      <Herosection />
      <Projects />
      <Githubrofile />
      <Process />
      <Skills />
      <Experience/>
      <Worldwide />
      <Contact />
      <Footer />
    </div>
  );
}
