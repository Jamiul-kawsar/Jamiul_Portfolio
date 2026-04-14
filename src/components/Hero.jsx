import React from 'react'
import { useState, useEffect } from 'react';
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

const roles = [
    "Software Engineer",
    "ML Engineer",
    "Robotics Enthusiast"
];

const Hero = () => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentRole = roles[index];

        if (charIndex < currentRole.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + currentRole[charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 80);
            return () => clearTimeout(timeout);
        }
        const timeout = setTimeout(() => {
            setText("");
            setCharIndex(0);
            setIndex((prev) => (prev + 1) % roles.length);
        }, 1500);
    }, [index, charIndex]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#17364d] via-black to-[#2b1338] text-white px-4 py-10 md:py-0 relative overflow-hidden">
            {/* GRID OVERLAY */}
            <div className="absolute pointer-events-none inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

            {/* ORBS */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, -40, 20, 0],
                        y: [0, 30, -20, 0],
                        scale: [1, 1.1, 0.95, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#7c3aed] top-[-200px] right-[-100px] rounded-full blur-[100px] opacity-30"
                />

                <motion.div
                    animate={{
                        x: [0, 30, -20, 0],
                        y: [0, -20, 30, 0],
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity
                    }}
                    className="absolute w-[300px] h-[300px] bg-[#00d4ff] bottom-[-100px] left-[-100px] rounded-full blur-[100px] opacity-30"
                />

                <motion.div
                    animate={{
                        x: [0, 15, -20, 0],
                        y: [0, -20, 15, 0]
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity
                    }}
                    className="absolute w-[300px] h-[300px] bg-[#10b981] top-[35%] left-[35%] rounded-full blur-[100px] opacity-30"
                />
            </div>

            {/* CONTENT */}
            <div className="text-center flex flex-col items-center justify-center space-y-6 px-4">
                <div className='text-cyan-600 flex items-center py-2 border border-cyan-600 px-4 py-2 rounded-full animate-pulse'>

                    {/* green dot */}
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>

                    <p className="text-sm text-cyan-600 tracking-widest">
                        open to opportunities
                    </p>
                </div>

                <div className='bg-[linear-gradient(135deg,#ffffff,cyan,#7F00FF)] bg-clip-text text-transparent animate-[gradient_5s_ease_infinite]'>
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold font-stretch-expanded text-center">
                        <span className="inline">Jamiul</span>{" "}
                        <span className="inline">Kawsar</span>
                    </h1>
                </div>

                <div>
                    <p className="text-2xl text-[#00d4ff] mb-4">
                        {text}
                        <span className="animate-pulse">|</span>
                    </p>
                </div>

                <div className='max-w-xl'>
                    <p className="text-md text-gray-400 mb-8">
                        I build intelligent systems combining machine learning, robotics, and modern web technologies — turning complex problems into elegant solutions.
                    </p>
                </div>

                <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
                    <button onClick={() => scrollToSection('projects')} className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-7 py-3 rounded-lg font-bold text-sm bg-[#00d4ff] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,212,255,0.3)] transition-all duration-200 whitespace-nowrap">
                        View Projects
                        <ArrowRight size={18} />
                    </button>

                    <a href="/CV_Jamiul_Kawsar_BD.pdf" download className="w-full sm:w-auto border border-gray-600 hover:border-cyan-600 text-white hover:text-cyan-600 font-bold py-2 px-8 rounded-lg inline-flex justify-center items-center gap-2 whitespace-nowrap">
                        Download Resume
                        <Download className='inline ml-2' size={18} />
                    </a>

                    <a href="https://github.com/Jamiul-kawsar" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto group border border-gray-600 hover:border-cyan-600 text-white hover:text-cyan-600 font-bold py-2 px-8 rounded-lg inline-flex justify-center items-center gap-2 whitespace-nowrap">
                        GitHub
                        <img src="/github.png" alt="GitHub"
                            className='w-4 h-4  rounded-full bg-white group-hover:bg-cyan-600 transition-all duration-200 ' />
                    </a>
                </div>

                {/* Scroll down indicator */}
                <div
                    className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 text-xs tracking-widest uppercase animate-[bounce_2s_infinite]">
                    Scroll
                    <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-400 to-transparent"></div>
                </div>
            </div>
        </div>
    )
}

export default Hero