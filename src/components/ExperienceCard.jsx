import React from "react";

const ExperienceCard = ({
  role,
  company,
  duration,
  location,
  description,
  technologies = [],
  achievements = [],
}) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 hover:border-cyan-400 transition">
      <div className="flex flex-col md:flex-row md:justify-between">

        <div>
          <h3 className="text-xl font-bold">
            {role}
          </h3>

          <p className="text-cyan-400">
            {company}
          </p>
        </div>

        <div className="text-gray-400 text-sm mt-2 md:mt-0">
          <p>{duration}</p>
          <p>{location}</p>
        </div>

      </div>

      <p className="mt-4 text-gray-400 leading-7">
        {description}
      </p>

      <ul className="mt-5 space-y-3 text-gray-400">
        <h3 className="text-cyan-400 font-bold">Achievements:</h3>
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0"></span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mt-5">
        <h3 className="text-cyan-400 font-bold">Technologies:</h3>
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

    </div>
  );
};

export default ExperienceCard;
