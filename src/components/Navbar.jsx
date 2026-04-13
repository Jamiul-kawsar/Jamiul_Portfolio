import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950 border-b border-gray-850 shadow-lg backdrop-blur-sm ">
      <div className="font-syne text-white flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-violet-500 text-transparent bg-clip-text">
          JK.dev
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-sm">
          <a
            href="#about"
            className=" text-gray-500 hover:text-[#00d4ff] transition duration-300"
          >
            ABOUT
          </a>
          <a
            href="#skills"
            className=" text-gray-500 hover:text-[#00d4ff] transition duration-300"
          >
            SKILLS
          </a>
          <a
            href="#projects"
            className=" text-gray-500 hover:text-[#00d4ff] transition duration-300"
          >
            PROJECTS
          </a>
          <a
            href="#contact"
            className=" text-gray-500 hover:text-[#00d4ff] transition duration-300"
          >
            CONTACT
          </a>
        </div>

        {/* Call To Action Button */}
        <a  href="#contact"
        className=" bg-gradient-to-l from-blue-500 to-violet-700 text-white py-1 px-3 rounded-md hover:from-blue-600 hover:to-violet-800 transition duration-300 ease-in-out cursor-pointer" >
          Hire Me
        </a >

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0f1e] border-t border-gray-800">
          <div className="px-6 py-4 space-y-3">
            <a
              href="#about"
              onClick={handleLinkClick}
              className="block px-4 py-2 text-gray-600 hover:text-[#00d4ff] hover:bg-white/5 rounded-md transition duration-300"
            >
              ABOUT
            </a>
            <a
              href="#skills"
              onClick={handleLinkClick}
              className="block px-4 py-2 text-gray-600 hover:text-[#00d4ff] hover:bg-white/5 rounded-md transition duration-300"
            >
              SKILLS
            </a>
            <a
              href="#projects"
              onClick={handleLinkClick}
              className="block px-4 py-2 text-gray-600 hover:text-[#00d4ff] hover:bg-white/5 rounded-md transition duration-300"
            >
              PROJECTS
            </a>
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="block px-4 py-2 text-gray-600 hover:text-[#00d4ff] hover:bg-white/5 rounded-md transition duration-300"
            >
              CONTACT
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}
export default Navbar