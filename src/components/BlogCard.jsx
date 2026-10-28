
import React from 'react'

const BlogCard = ({ blog }) => {
    const {
        slug,
        title,
        excerpt,
        date,
        readTime,
        tags = [],
        coverImage
    } = blog

    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    })

    return (
        <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:border-[#00d4ff]">

            {/* Top gradient border */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#00d4ff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

            {/* Cover Image */}
            {coverImage && (
                <div className="w-full aspect-video overflow-hidden bg-slate-800">
                    <img
                        src={coverImage}
                        alt={title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            )}

            {/* Blog Content */}
            <div className="flex flex-col grow p-7">

                <div className="flex items-center gap-3 mb-4 font-mono text-xs text-slate-500">
                    <span>📝 {formattedDate}</span>
                    <span aria-hidden="true">•</span>
                    <span>{readTime}</span>
                </div>

                <h3 className="text-[1.05rem] font-bold mb-[0.6rem] text-white">
                    {title}
                </h3>

                <p className="text-slate-500 text-[0.85rem] leading-[1.65] mb-5 grow">
                    {excerpt}
                </p>

                <div className="flex flex-wrap mb-5">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="inline-block bg-[rgba(0,212,255,0.06)] border border-white/10 px-2.5 py-1 rounded text-sm text-[#00d4ff] font-mono m-1 transition-all duration-200"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <a
                    href={`/blog/${slug}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 self-start border border-purple-500/30 hover:border-purple-500/70 text-[#a78bfa] px-[0.9rem] py-[0.4rem] rounded-md text-[0.75rem] font-mono no-underline transition-all duration-200"
                >
                    Read Article →
                </a>

            </div>
        </article>
    )
}

export default BlogCard
