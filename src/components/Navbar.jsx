import { useState, useEffect } from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950 border-b border-gray-850 shadow-lg">
      <div className="font-syne text-white flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-violet-500 text-transparent bg-clip-text">
          JK.dev
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-sm">
          <a
            href="#about"
            className=" text-gray-500 hover:text-blue-400 transition duration-300"
          >
            ABOUT
          </a>
          <a
            href="#skills"
            className=" text-gray-500 hover:text-blue-400 transition duration-300"
          >
            SKILLS
          </a>
          <a
            href="#projects"
            className=" text-gray-500 hover:text-blue-400 transition duration-300"
          >
            PROJECTS
          </a>
          <a
            href="#contact"
            className=" text-gray-500 hover:text-blue-400 transition duration-300"
          >
            CONTACT
          </a>
        </div>

        {/* Call To Action Button */}
        <button className="bg-gradient-to-l from-blue-700 to-violet-800 text-white font-bold py-2 px-4 rounded-md hover:from-blue-800 hover:to-violet-900 transition-opacity duration-200 ease-in-out" >
          Hire Me
        </button>
      </div>

      {/* Mobile Navigation */}
    </nav>
  );
}