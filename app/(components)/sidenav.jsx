"use client"
import React, { useState, useEffect } from "react";

const SideNav = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  return (
    <div className={`fixed right-0 top-1/4 z-40 transition-all duration-300 ${isOpen ? "translate-x-0" : "-translate-x-48"}`}>
      <div className=" h-auto rounded-r-lg ">
        <div className="p-4 w-48">
          
          <ul className="space-y-10">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left py-1 px-2 rounded-md text-sm hover:opacity-100 transition-colors ${
                    activeSection === section.id
                      ? "opacity-100  text-white font-medium"
                      : "text-gray-300 opacity-20"
                  }`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Toggle button when closed */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="absolute top-0 right-0 translate-x-full  p-2 rounded-r-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SideNav;