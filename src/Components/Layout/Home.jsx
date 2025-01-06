import React from "react";
import { FaArrowUp } from "react-icons/fa";
import Header from "../Pages/Header";
import AboutMe from "../Pages/About";
import Skills from "../Pages/Skill";
import Project from "../Pages/Project";
import Contact from "../Pages/Contact";
import { animateScroll as scroll } from "react-scroll"; // Smooth Scroll

export default function Home() {
  // Scroll to the top function
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 800, smooth: "easeInOutQuad" }); // Smooth animation
  };

  return (
    <div>
      <Header />
      <AboutMe />
      <Skills />
      <Project />
      <Contact />

      {/* Scroll to Top Button */}
      <div
        className="fixed bottom-8 right-8 p-4 bg-blue-600 text-white rounded-full shadow-lg cursor-pointer hover:bg-blue-700"
        onClick={scrollToTop}
      >
        <FaArrowUp className="text-xl" />
      </div>
    </div>
  );
}
