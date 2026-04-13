import React from 'react'
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";

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

        {/* Projects go here... */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Example Project Card */}
          <div className="group col-span-1 sm:col-span-2 md:col-span-3 bg-gray-800 border border-gray-800 hover:border-[#ff0000] rounded-lg p-6 flex flex-col items-center justify-center">
            <h2 className='text-xl group-hover:text-[#ff0000]'>Under Development</h2>
          </div>
          <ProjectCard
            icon="🚀"
            title="AI-Powered Chatbot"
            description="A chatbot that uses natural language processing to provide intelligent responses to user queries."
            tags={["Python", "NLP", "Chatbot", "AI", "Machine Learning"]}
            githubLink="https://github.com/yourusername/ai-chatbot"
          />
          <ProjectCard
            icon="📊"
            title="Data Visualization Dashboard"
            description="A web-based dashboard that visualizes complex datasets using interactive charts and graphs."
            tags={["React", "D3.js", "Data Visualization", "Web Development", "JavaScript"]}
            githubLink="https://github.com/yourusername/data-visualization-dashboard"
          />

          <ProjectCard
            icon="📊"
            title="Data Visualization Dashboard"
            description="A web-based dashboard that visualizes complex datasets using interactive charts and graphs."
            tags={["React", "D3.js", "Data Visualization", "Web Development", "JavaScript"]}
            githubLink="https://github.com/yourusername/data-visualization-dashboard"
          />

          <ProjectCard
            icon="📊"
            title="Data Visualization Dashboard"
            description="A web-based dashboard that visualizes complex datasets using interactive charts and graphs."
            tags={["React", "D3.js", "Data Visualization", "Web Development", "JavaScript"]}
            githubLink="https://github.com/yourusername/data-visualization-dashboard"
          />

          <ProjectCard
            icon="📊"
            title="Data Visualization Dashboard"
            description="A web-based dashboard that visualizes complex datasets using interactive charts and graphs."
            tags={["React", "D3.js", "Data Visualization", "Web Development", "JavaScript"]}
            githubLink="https://github.com/yourusername/data-visualization-dashboard"
          />

          <ProjectCard
            icon="📊"
            title="Data Visualization Dashboard"
            description="A web-based dashboard that visualizes complex datasets using interactive charts and graphs."
            tags={["React", "D3.js", "Data Visualization", "Web Development", "JavaScript"]}
            githubLink="https://github.com/yourusername/data-visualization-dashboard"
          />

          <ProjectCard
            icon="📊"
            title="Data Visualization Dashboard"
            description="A web-based dashboard that visualizes complex datasets using interactive charts and graphs."
            tags={["React", "D3.js", "Data Visualization", "Web Development", "JavaScript"]}
            githubLink="https://github.com/yourusername/data-visualization-dashboard"
          />

          <ProjectCard
            icon="📊"
            title="Data Visualization Dashboard"
            description="A web-based dashboard that visualizes complex datasets using interactive charts and graphs."
            tags={["React", "D3.js", "Data Visualization", "Web Development", "JavaScript"]}
            githubLink="https://github.com/yourusername/data-visualization-dashboard"
          />

          <ProjectCard
            icon="📊"
            title="Data Visualization Dashboard"
            description="A web-based dashboard that visualizes complex datasets using interactive charts and graphs."
            tags={["React", "D3.js", "Data Visualization", "Web Development", "JavaScript"]}
            githubLink="https://github.com/yourusername/data-visualization-dashboard"
          />

          <ProjectCard
            icon="📊"
            title="Data Visualization Dashboard"
            description="A web-based dashboard that visualizes complex datasets using interactive charts and graphs."
            tags={["React", "D3.js", "Data Visualization", "Web Development", "JavaScript"]}
            githubLink="https://github.com/yourusername/data-visualization-dashboard"
          />

        </div>

      </div>
    </section>
  )
}

export default Projects