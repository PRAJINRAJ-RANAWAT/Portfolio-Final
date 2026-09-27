import React from "react";
import SectionEyebrow from "../components/ui/SectionEyebrow";
import BlogListItem from "../components/blog/BlogListItem";
import { posts } from "../data/blog";
import { profile } from "../data/profile";

const linkedInActivityUrl = `${profile.socials.linkedin}recent-activity/all/`;

const BlogPage = () => (
  <section className="py-16">
    <SectionEyebrow>Writing</SectionEyebrow>
    <h1 className="text-3xl sm:text-4xl font-black font-mont mb-8">Blog</h1>

    {posts.length === 0 ? (
      <a
        href={linkedInActivityUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="brutal-card p-10 text-center text-gray-600 dark:text-gray-400 block hover:no-underline"
      >
        No long-form posts here yet — I share updates and write-ups on{" "}
        <span className="text-accent-ink dark:text-accent font-bold">LinkedIn</span> in the meantime →
      </a>
    ) : (
      <ul>
        {posts.map((post, i) => (
          <BlogListItem key={post.slug} post={post} index={i} />
        ))}
      </ul>
    )}
  </section>
);

export default BlogPage;
