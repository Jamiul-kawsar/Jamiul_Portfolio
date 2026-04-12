import React from "react";

const SectionHeader = ({ label, title, highlight }) => {
  return (
    <div className="mb-12">
      {/* Label */}
      <p className="text-cyan-400 font-mono text-xs uppercase tracking-[0.15em] mb-2">
        {label}
      </p>

      {/* Title */}
      <h2 className="text-4xl md:text-7xl font-extrabold">
        {title}{" "}
        <span className="bg-gradient-to-br from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          {highlight}
        </span>
      </h2>

      {/* Underline */}
      <div className="w-16 h-[3px] bg-gradient-to-r from-cyan-400 to-purple-500 mt-4"></div>
    </div>
  );
};

export default SectionHeader;