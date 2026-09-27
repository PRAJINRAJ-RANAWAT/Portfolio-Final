import React from "react";
import { Link } from "react-router-dom";
import SectionEyebrow from "../ui/SectionEyebrow";
import BlogListItem from "../blog/BlogListItem";
import { posts } from "../../data/blog";
import { profile } from "../../data/profile";

const linkedInActivityUrl = `${profile.socials.linkedin}recent-activity/all/`;

const BlogPreview = () => (
  <section className="py-16">
    <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
      <div>
        <SectionEyebrow>Writing</SectionEyebrow>
        <h2 className="text-3xl sm:text-4xl font-black font-mont">Latest Posts</h2>
      </div>
      {posts.length > 0 ? (
        <Link to="/blog" className="brutal-btn-sm px-4 py-2 font-mono text-xs uppercase tracking-wider">
          View all →
        </Link>
      ) : (
        <a
          href={linkedInActivityUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="brutal-btn-sm px-4 py-2 font-mono text-xs uppercase tracking-wider"
        >
          View on LinkedIn →
        </a>
      )}
    </div>

    {posts.length === 0 ? (
      <a
        href={linkedInActivityUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="brutal-card p-8 text-center text-gray-600 dark:text-gray-400 block hover:no-underline"
      >
        No long-form posts here yet — I share updates and write-ups on{" "}
        <span className="text-accent-ink dark:text-accent font-bold">LinkedIn</span> in the meantime →
      </a>
    ) : (
      <ul>
        {posts.slice(0, 2).map((post, i) => (
          <BlogListItem key={post.slug} post={post} index={i} />
        ))}
      </ul>
    )}
  </section>
);

export default BlogPreview;
