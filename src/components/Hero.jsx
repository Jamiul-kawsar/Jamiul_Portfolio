import React from 'react'
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-tr from-[#17364d] via-[#000000] to-[#2b1338] text-white">
            {/* GRID OVERLAY */}
            <div className="absolute pointer-events-none inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

            {/* ORBS */}
            <div className="absolute relative z-10 inset-0 overflow-hidden">
                <div className="absolute w-[600px] h-[600px] bg-violet-900 top-[-200px] right-[-100px] rounded-full blur-[80px] opacity-20 animate-float1"></div>
                <div className="absolute w-[300px] h-[300px] bg-cyan-900 bottom-[-100px] left-[-100px] rounded-full blur-[80px] opacity-20 animate-float2"></div>
                <div className="absolute w-[300px] h-[300px] bg-emerald-600 top-[35%] left-[35%] rounded-full blur-[80px] opacity-20 animate-float3"></div>
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
                    <h1 className="text-5xl lg:text-8xl font-extrabold font-stretch-expanded text-center">
                        <span className="inline lg:block">Jamiul</span>{" "}
                        <span className="inline lg:block">Kawsar</span>
                    </h1>
                </div>
                <div>
                    <p className="text-md text-gray-400 mb-4">
                        Software Engineer | AI Researcher | Robotics Enthusiast
                    </p>
                </div>
                <div className='max-w-xl'>
                    <p className="text-md text-gray-400 mb-8">
                        I build intelligent systems combining machine learning, robotics, and modern web technologies — turning complex problems into elegant solutions.
                    </p>
                </div>
                <div className="flex space-x-6">
                    <div className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-bold text-sm bg-cyan-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,212,255,0.3)] transition-all duration-200">
                        View Projects
                        <ArrowRight size={18} />
                    </div>
                    <div className="border border-gray-600 hover:border-cyan-600 text-white hover:text-cyan-600 font-bold py-2 px-8 rounded-lg">
                        Download Resume
                        <Download className='inline ml-2' size={18} />
                    </div>
                    <div className="border border-gray-600 hover:border-cyan-600 text-white hover:text-cyan-600 font-bold py-2 px-8 rounded-lg inline-flex items-center gap-2">
                        GitHub
                        <img src="./public/github.png" alt="GitHub" 
                        className='w-4 h-4  rounded-full bg-white hover:bg-cyan-600 transition-all duration-200 '/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero