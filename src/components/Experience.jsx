import React from "react";
import { experiences } from "../data/experience";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id='experience' className="py-24 px-6 text-white bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="// Work"
          title="Work"
          highlight="Experiences"
        />

        <div className="space-y-8">

          {experiences.map((job, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 hover:border-cyan-400 transition"
            >
              <div className="flex flex-col md:flex-row md:justify-between">

                <div>
                  <h3 className="text-xl font-bold">
                    {job.role}
                  </h3>

                  <p className="text-cyan-400">
                    {job.company}
                  </p>
                </div>

                <div className="text-gray-400 text-sm mt-2 md:mt-0">
                  <p>{job.duration}</p>
                  <p>{job.location}</p>
                </div>

              </div>

              <p className="mt-4 text-gray-400 leading-7">
                {job.description}
              </p>

              <ul className="mt-5 space-y-3 text-gray-400">
                <h3 className="text-cyan-400 font-bold">Achievements:</h3>
                {job.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-5">
                <h3 className="text-cyan-400 font-bold">Technologies:</h3>
                {job.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}