import React, {useState} from 'react'
import { X } from "lucide-react";

const ProjectCard = ({
    icon = "",
    title,
    description,
    tags = [],
    githubLink,
}) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="group relative p-7 rounded-2xl bg-white/5 border border-white/10 cursor-pointer overflow-hidden transition-all duration-30">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className='flex justify-between items-start mb-4'>
                    <span className='text-3xl'>{icon}</span>
                    <div className='flex gap-2'>
                        <a href={githubLink}
                            className="inline-flex items-center gap-1 bg-white/5 border border-white/10 hover:border-[#00d4ff] text-slate-500 px-4 py-2 rounded-md text-xs font-mono cursor-pointer transition-all duration-200 no-underline"
                        >
                            ⭐ GitHub
                        </a>
                    </div>
                </div>

                <h3 className='text-[1.05rem] font-bold mb-[0.6rem] text-white'>{title}</h3>

                <p className="text-slate-500 text-[0.85rem] leading-[1.65] mb-5">
                    {description}
                </p>
                
                <div className='flex flex-wrap'>
                    {tags.map((tag, index) => (
                        <span key={index} className="inline-block bg-[rgba(0,212,255,0.06)] border border-white/10 px-2.5 py-1 rounded text-sm text-[#00d4ff] font-mono m-1 transition-all duration-200">{tag}</span>
                    ))}
                </div>

                <button
                    onClick={() => setOpen(true)}
                    className="mt-4 bg-transparent border border-purple-500/30 hover:border-purple-500/70 text-[#a78bfa] px-[0.9rem] py-[0.4rem] rounded-[6px] text-[0.75rem] font-mono cursor-pointer transition-all duration-200"
                >
                    View Details
                </button>
            </div>

            {open && (
                <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-8">
                    <div className="bg-gray-900 border border-white/10 rounded-lg max-w-lg w-full relative p-6">
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-4 right-4 border bg-gray-800 rounded text-slate-500 hover:text-white transition-colors text-xl"
                        >
                          < X className='p-1'/>
                        </button>
                        
                        <div className="flex flex-col items-start mb-6">
                            <span className='text-6xl mb-4'>{icon}</span>
                            <h3 className="text-2xl font-bold text-white">{title}</h3>
                        </div>
                        
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            {description}
                        </p>    
                        
                        <div className="mb-6">
                            <p className="text-xs uppercase tracking-widest text-[#00d4ff] font-mono mb-3">Tech Stack</p>
                            <div className='flex flex-wrap gap-2'>
                                {tags.map((tag, index) => (
                                    <span key={index} className="inline-block bg-[rgba(0,212,255,0.1)] px-3 py-1 border border-white/10 rounded-md text-xs text-[#00d4ff] font-mono transition-all duration-200">{tag}</span>
                                ))}
                            </div>
                        </div>
                        
                        <a 
                            href={githubLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block border border-white/10 hover:border-[#00d4ff] hover:border-[#00d4ff] hover:text-[#00d4ff] p-2 rounded-md text-sm font-mono transition-colors duration-200"
                        >
                            View on GitHub →
                        </a>
                    </div>
                </div>
            )}
        </>
    )
}

export default ProjectCard