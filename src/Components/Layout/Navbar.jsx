import React, { useState } from "react";
import AminulPDF from "../../assets/Aminul.pdf";
import { FiMenu, FiX } from "react-icons/fi";
import { IoMdCloudDownload } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (section) => {
    setActiveLink(section);
    const element = document.querySelector(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close menu on mobile
  };

  return (
    <nav className="bg-gray-950 text-white fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-xl font-bold">Aminul</div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8">
          <li>
            <a
              href="#home"
              onClick={() => handleScroll("#home")}
              className={`flex items-center gap-2 hover:text-gray-300 ${
                activeLink === "#home" ? "text-yellow-500" : "text-white"
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#aboutMe"
              onClick={() => handleScroll("#aboutMe")}
              className={`flex items-center gap-2 hover:text-gray-300 ${
                activeLink === "#aboutMe" ? "text-yellow-500" : "text-white"
              }`}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#skill"
              onClick={() => handleScroll("#skill")}
              className={`flex items-center gap-2 hover:text-gray-300 ${
                activeLink === "#skill" ? "text-yellow-500" : "text-white"
              }`}
            >
              Skill
            </a>
          </li>
          <li>
            <a
              href="#project"
              onClick={() => handleScroll("#project")}
              className={`flex items-center gap-2 hover:text-gray-300 ${
                activeLink === "#project" ? "text-yellow-500" : "text-white"
              }`}
            >
              My Project
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => handleScroll("#contact")}
              className={`flex items-center gap-2 hover:text-gray-300 ${
                activeLink === "#contact" ? "text-yellow-500" : "text-white"
              }`}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Resume Button */}
        <ul>
          <li className="lg:block hidden">
            <a href={AminulPDF} download="Aminul.pdf">
              <button className="bg-transparent border border-blue-600 items-center px-5 py-2 gap-2 rounded-lg flex">
                <IoMdCloudDownload />
                <h2> Download Resume</h2>
              </button>
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="lg:hidden focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-2/3 bg-gray-950 text-white shadow-lg z-50 lg:hidden"
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <span className="text-xl font-bold"></span>
              <button onClick={toggleMenu} className="text-white">
                <FiX size={24} />
              </button>
            </div>

            <ul className="flex flex-col gap-4 p-6">
              <li>
                <a
                  href="#home"
                  onClick={() => handleScroll("#home")}
                  className={`flex items-center gap-2 hover:text-gray-300 ${
                    activeLink === "#home" ? "text-yellow-500" : "text-white"
                  }`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#aboutMe"
                  onClick={() => handleScroll("#aboutMe")}
                  className={`flex items-center gap-2 hover:text-gray-300 ${
                    activeLink === "#aboutMe" ? "text-yellow-500" : "text-white"
                  }`}
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#skill"
                  onClick={() => handleScroll("#skill")}
                  className={`flex items-center gap-2 hover:text-gray-300 ${
                    activeLink === "#skill" ? "text-yellow-500" : "text-white"
                  }`}
                >
                  Skill
                </a>
              </li>
              <li>
                <a
                  href="#project"
                  onClick={() => handleScroll("#project")}
                  className={`flex items-center gap-2 hover:text-gray-300 ${
                    activeLink === "#project" ? "text-yellow-500" : "text-white"
                  }`}
                >
                  My Project
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => handleScroll("#contact")}
                  className={`flex items-center gap-2 hover:text-gray-300 ${
                    activeLink === "#contact" ? "text-yellow-500" : "text-white"
                  }`}
                >
                  Contact
                </a>
              </li>
              <li>
                <a href={AminulPDF} download="Aminul.pdf">
                  <button className="bg-transparent border border-blue-600 items-center px-5 py-2 gap-2 rounded-lg flex">
                    <IoMdCloudDownload />
                    <h2> Download Resume</h2>
                  </button>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
