import React from "react";
import SectionHeader from "./SectionHeader";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 text-white bg-gray-950">

      <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <SectionHeader
            label="// About Me"
            title="Who I"
            highlight="Am"
          />

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
                <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">3.93</h3>
                <p className="text-xs text-gray-400 mt-1">CGPA</p>
              </div>

              <div className="p-5 text-center rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-4xl font-bold bg-gradient-to-br from-cyan-400 to-purple-500 bg-clip-text text-transparent">7+</h3>
                <p className="text-xs text-gray-400 mt-1">Projects</p>
              </div>

              <div className="p-5 text-center rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-4xl font-bold bg-gradient-to-br from-cyan-400 to-purple-500 bg-clip-text text-transparent">5+</h3>
                <p className="text-xs text-gray-400 mt-1">Tech Stacks</p>
              </div>

              <div className="p-5 text-center rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-4xl font-bold bg-gradient-to-br from-cyan-400 to-purple-500 bg-clip-text text-transparent">∞</h3>
                <p className="text-xs text-gray-400 mt-1">Curiosity</p>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="text-gray-400 text-base space-y-6">
            <div>
              <p className="mb-4">
                I am a Computer Science and Engineering graduate from Sonargaon University, Bangladesh, with a{" "} <strong className="text-white">CGPA of 3.93/4.00</strong> {" "} and recipient of the {" "} <strong className="text-white"> Vice-Chancellor Gold Medal</strong>.
              </p>

              <p className="mb-4">
                My primary interests lie in {" "} <strong className="text-white">Artificial Intelligence, Machine Learning, Deep Learning, and Computer Vision</strong> {" "}. I enjoy transforming ideas into practical solutions through data-driven experimentation, model development, and software engineering. My experience includes building machine learning pipelines, developing deep learning models for medical image classification, and creating web applications using modern technologies.
              </p>

              <p className="mb-4">
                I have worked on projects involving {" "} <strong className="text-white">PyTorch, CNNs, ResNet50 transfer learning, XGBoost, recommendation systems, and AI-powered applications</strong>. I also have professional experience in software development and machine learning, where I have worked with data preprocessing, exploratory data analysis, geospatial data processing, and application development.
              </p>

              <p className="mb-4">
                Beyond AI and machine learning, I enjoy building responsive web applications and exploring the intersection of intelligent systems and real-world problem-solving.
              </p>

              <p className="mb-4">
                I am continuously improving my technical and research skills, with the goal of developing reliable, practical, and impactful AI solutions.
              </p>
            </div>

            <div className="text-purple-400 text-sm space-y-6">
              <span className="inline-flex items-center gap-1.5 bg-purple-500/10 border border-purple-500/20 px-3 py-[5px] rounded-md text-[0.8rem] font-mono m-1">🎓 CSE Graduate</span>
              <span className="inline-flex items-center gap-1.5 bg-purple-500/10 border border-purple-500/20  px-3 py-[5px] rounded-md text-[0.8rem] font-mono m-1">💻 Software Engineer</span>
              <span className="inline-flex items-center gap-1.5 bg-purple-500/10 border border-purple-500/20  px-3 py-[5px] rounded-md text-[0.8rem] font-mono m-1">🧠 ML Engineer</span>
              <span className="inline-flex items-center gap-1.5 bg-purple-500/10 border border-purple-500/20  px-3 py-[5px] rounded-md text-[0.8rem] font-mono m-1">🤖 Robotics Dev</span>
              <span className="inline-flex items-center gap-1.5 bg-purple-500/10 border border-purple-500/20  px-3 py-[5px] rounded-md text-[0.8rem] font-mono m-1">🔍 Problem Solver</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;