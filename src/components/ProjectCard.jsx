import React from 'react'

const ProjectCard = ({
    icon = "",
    title,
    description,
    tags = [],
    githubLink,
}) => {
    return (
        <div className="group relative p-7 rounded-2xl bg-white/5 border border-white/10 cursor-pointer overflow-hidden transition-all duration-30">

            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" >
            </div>
            <div className='flex justify-between items-start mb-4'>
                <span className='text-3xl'>{icon}</span>
                <div className='flex gap-2'>
                    <a href={githubLink}
                        className="inline-flex items-center gap-1 bg-white/5 border border-white/10 hover:border-[#00d4ff] text-slate-500 px-4 py-2 rounded-md text-xs font-mono cursor-pointer transition-all duration-200 no-underline"
                    >
                        ⭐ GitHub</a>
                </div>
            </div>

            <h3 className='text-[1.05rem] font-bold mb-[0.6rem] text-white'>{title}</h3>

            <p className="text-slate-500 text-[0.85rem] leading-[1.65] mb-5">
                {description}
            </p>
            <div className='flex flex-wrap'>
                <span className="inline-block bg-[rgba(0,212,255,0.06)] border border-white/10 px-2.5 py-1 rounded text-sm text-[#00d4ff] font-mono m-1 transition-all duration-200">{tags[0]}</span>

                <span className="inline-block bg-[rgba(0,212,255,0.06)] border border-white/10 px-2.5 py-1 rounded text-sm text-[#00d4ff] font-mono m-1 transition-all duration-200">{tags[1]}</span>

                <span className="inline-block bg-[rgba(0,212,255,0.06)] border border-white/10 px-2.5 py-1 rounded text-sm text-[#00d4ff] font-mono m-1 transition-all duration-200">{tags[2]}</span>

                <span className="inline-block bg-[rgba(0,212,255,0.06)] border border-white/10 px-2.5 py-1 rounded text-sm text-[#00d4ff] font-mono m-1 transition-all duration-200">{tags[3]}</span>

                <span className="inline-block bg-[rgba(0,212,255,0.06)] border border-white/10 px-2.5 py-1 rounded text-sm text-[#00d4ff] font-mono m-1 transition-all duration-200">{tags[4]}</span>
            </div>

            <button className="mt-4 bg-transparent border border-purple-500/30 hover:border-purple-500/70 text-[#a78bfa] px-[0.9rem] py-[0.4rem] rounded-[6px] text-[0.75rem] font-mono cursor-pointer transition-all duration-200"
            >
                View Details
            </button>

        </div>
    )
}

export default ProjectCard