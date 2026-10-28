import React from 'react'
import SectionHeader from "./SectionHeader";
import BlogCard from './BlogCard';
import { blogs } from "../data/blogs";

const Blog = () => {
    return (
        <section id="blog" className="py-24 px-6 text-white bg-gray-950">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 text-center">
                    <strong class="text-lg text-blue-400">Blog Section is not complete yet.</strong> I will update it soon. For now, here is a sample blog post that I wrote on my personal blog. You can read it.
                </div>
                <SectionHeader
                    label="// Thoughts"
                    title="Latest"
                    highlight="Blogs"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                        <BlogCard key={blog.slug} blog={blog} />
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Blog
