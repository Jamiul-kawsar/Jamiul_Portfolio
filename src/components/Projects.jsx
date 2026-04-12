import React from 'react'
import SectionHeader from "./SectionHeader";

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

        <h1 className='text-5xl font-bold mb-4'>My Projects</h1>
        <p className='text-lg text-gray-400 mb-8'>
          Here are some of the projects I've worked on. Each project showcases my skills in machine learning, robotics, and web development.
        </p>
      </div>
    </section>
  )
}

export default Projects