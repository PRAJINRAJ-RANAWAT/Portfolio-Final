import React from "react";
import { Link, useParams } from "react-router-dom";
import { posts } from "../data/blog";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="py-16">
        <div className="brutal-card p-10 text-center">
          <p className="mb-4">This post doesn't exist (yet).</p>
          <Link to="/blog" className="brutal-btn bg-accent text-black inline-flex">
            Back to blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article className="py-16">
      <Link to="/blog" className="font-mono text-xs uppercase tracking-wider text-accent-ink dark:text-accent hover:underline">
        ← All posts
      </Link>
      <h1 className="text-3xl sm:text-4xl font-black font-mont mt-4 mb-2">{post.title}</h1>
      <time className="font-mono text-xs text-gray-400 uppercase tracking-wider">{formatDate(post.date)}</time>

      <div className="prose mt-8 dark:text-gray-200">
        {post.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
};

export default BlogPostPage;
