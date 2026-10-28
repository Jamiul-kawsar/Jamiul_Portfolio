
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { getBlogBySlug } from "../data/blogs";

export default function BlogDetails() {
    const { slug } = useParams();
    const blog = getBlogBySlug(slug);

    if (!blog) {
        return (
            <main className="min-h-screen bg-gray-950 px-6 py-16 text-white">
                <h1 className="text-2xl font-bold">Article not found</h1>
                <Link to="/#blog" className="mt-4 inline-block text-[#00d4ff]">
                    Back to Home
                </Link>
            </main>
        );
    }

    const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    return (
        <main className="min-h-screen bg-gray-950 px-6 py-12 text-white md:py-16">
            <article className="mx-auto max-w-3xl">
                <Link
                    to="/#blog"
                    className="text-sm text-[#00d4ff] transition-colors hover:text-white"
                >
                    ← Back to Home
                </Link>

                {blog.coverImage && (
                    <img
                        src={blog.coverImage}
                        alt={blog.title}
                        className="mt-8 aspect-video w-full rounded-xl border border-white/10 object-cover"
                    />
                )}

                <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-slate-400">
                    <time dateTime={blog.date}>{formattedDate}</time>
                    <span aria-hidden="true">·</span>
                    <span>{blog.readTime}</span>
                </div>

                <h1 className="mt-5 text-3xl font-bold leading-tight md:text-4xl">
                    {blog.title}
                </h1>

                <p className="mt-4 text-base leading-7 text-slate-400 md:text-lg md:leading-8">
                    {blog.excerpt}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                    {blog.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded border border-white/10 bg-[rgba(0,212,255,0.06)] px-2.5 py-1 font-mono text-xs text-[#00d4ff]"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="mt-10 border-t border-white/10 pt-8 text-[0.95rem] leading-7 text-slate-300 [&_a]:text-[#00d4ff] [&_a]:underline [&_blockquote]:border-l-2 [&_blockquote]:border-[#00d4ff] [&_blockquote]:pl-4 [&_blockquote]:text-slate-400 [&_code]:rounded [&_code]:bg-white/10 [&_code]:px-1.5 [&_code]:py-0.5 [&_h1]:mb-5 [&_h1]:mt-10 [&_h1]:text-3xl [&_h1]:font-bold [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-white [&_img]:my-6 [&_img]:rounded-lg [&_li]:my-1 [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:my-4 [&_pre]:my-6 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-white/10 [&_pre]:bg-black/30 [&_pre]:p-4 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_strong]:text-white [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6">
                    <ReactMarkdown>{blog.content}</ReactMarkdown>
                </div>
            </article>
        </main>
    );
}
