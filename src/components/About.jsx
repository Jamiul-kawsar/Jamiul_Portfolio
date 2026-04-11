import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 text-white bg-gray-950">
      
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-cyan-400 font-mono text-xs uppercase tracking-[0.15em]" id="about">
            // About Me
          </p>

          <h2 className="text-4xl md:text-7xl font-extrabold">
            Who I{" "}
            <span className="bg-gradient-to-br from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Am
            </span>
          </h2>

          <div className="w-16 h-[3px] bg-gradient-to-r from-cyan-400 to-purple-500 mt-4"></div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="flex flex-col items-center">

            {/* Avatar */}
            <div className="w-[280px] h-[280px] rounded-[24px] bg-gradient-to-br from-purple-500 to-cyan-400 p-[3px]">
              <div className="w-full h-full rounded-[22px] bg-[#0d1426] flex items-center justify-center overflow-hidden">
                <img
                  src="/Jamiul_Kawsar.jpeg"
                  alt="My Image"
                  className="w-full h-full object-cover rounded-[22px]"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8 w-full max-w-lg">
              
              <div className="p-5 text-center rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-2xl font-bold text-cyan-400">3.93</h3>
                <p className="text-xs text-gray-400 mt-1">CGPA</p>
              </div>

              <div className="p-5 text-center rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-2xl font-bold text-cyan-400">7+</h3>
                <p className="text-xs text-gray-400 mt-1">Projects</p>
              </div>

              <div className="p-5 text-center rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-2xl font-bold text-cyan-400">5+</h3>
                <p className="text-xs text-gray-400 mt-1">Tech Stacks</p>
              </div>

              <div className="p-5 text-center rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-2xl font-bold text-cyan-400">∞</h3>
                <p className="text-xs text-gray-400 mt-1">Curiosity</p>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="text-gray-400 text-lg space-y-6">
            <p>
              I'm a Computer Science & Engineering graduate from {" "}
              <strong className="text-white">Sonargaon University</strong>{" "} with a stellar CGPA of 3.93, passionate about building systems that sit at the intersection of intelligence and hardware.
            </p>

            <p>
              My journey spans machine learning model development, embedded robotics with Arduino and ATmega328P microcontrollers, and modern full-stack web development. My undergraduate thesis focused on designing and building a {" "} <strong className="text-white">Robot Car based on ATmega328P</strong>{" "}  — a hands-on blend of firmware engineering and sensor fusion.
            </p>

            <p>
              I thrive on tackling complex problems — whether it's training an XGBoost model to predict caloric burn, crafting a pathfinding AI for a Snake game, or building a responsive real estate platform from scratch.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;