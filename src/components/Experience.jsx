import React from "react";
import { experiences } from "../data/experience";
import SectionHeader from "./SectionHeader";
import ExperienceCard from "./ExperienceCard";

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
            <ExperienceCard
              key={index}
              role={job.role}
              company={job.company}
              duration={job.duration}
              location={job.location}
              description={job.description}
              technologies={job.technologies}
              achievements={job.achievements}
            />
          ))}

        </div>
      </div>
    </section>
  );
}