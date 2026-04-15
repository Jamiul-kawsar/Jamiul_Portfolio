import React from 'react'
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/ProjectData";

const Projects = () => {
  return (
    <section id='projects' className="py-24 px-6 text-white bg-gray-950">
      <div className='max-w-6xl mx-auto'>
        {/* Section Header */}
        <SectionHeader
          label="// Work"
          title="Featured"
          highlight="Projects"
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              icon={project.icon}
              title={project.title}
              description={project.description}
              tags={project.tags}
              githubLink={project.githubLink}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects