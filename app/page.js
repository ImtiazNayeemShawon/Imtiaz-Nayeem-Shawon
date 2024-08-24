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
import Navbar from "./(components)/navbar";

export default function page() {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Projects />
      <Githubrofile />
      <Process />
      <Skills />
      <Worldwide />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
