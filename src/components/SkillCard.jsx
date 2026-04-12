import React from "react";

const SkillCard = ({ icon, title, skills = [] }) => {
  return (
    <div className="group p-8 rounded-2xl bg-white/5 hover:bg-white/7 border border-white/5 hover:border-[#00d4ff] transition-all duration-100">
      
      {/* Icon */}
      <div className="text-3xl mb-4">
        {icon}
      </div>

      {/* Title */}
      <div className="text-sm font-bold text-[#e2e8f0] mb-4 tracking-wide">
        {title}
      </div>

      {/* Skills */}
      <div className="flex flex-wrap">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="inline-block bg-white/5 border border-white/10 text-slate-500 group-hover:text-[#e2e8f0] px-2.5 py-1 rounded text-sm font-mono m-1 transition-all duration-200"
          >
            {skill}
          </span>
        ))}
      </div>

    </div>
  );
};

export default SkillCard;