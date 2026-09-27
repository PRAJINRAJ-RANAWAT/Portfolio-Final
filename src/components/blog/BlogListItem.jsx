import React from "react";
import { Link } from "react-router-dom";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

const BlogListItem = ({ post, index }) => (
  <li>
    <Link
      to={`/blog/${post.slug}`}
      className="group flex items-center justify-between gap-6 py-5 px-4 -mx-4 rounded-xl border-b-2 border-dark/20 dark:border-light/20 last:border-b-0 hover:bg-black/[0.03] dark:hover:bg-white/[0.05] transition-colors"
    >
      <div className="flex items-center gap-4 min-w-0 flex-1">
        <span className="font-mono text-xs font-bold text-gray-400 tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="text-lg font-bold font-mont truncate relative">
          {post.title}
          <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-accent group-hover:w-full transition-all duration-300 ease-quart" />
        </h3>
      </div>
      <div className="flex items-center gap-4 shrink-0">
        <time className="font-mono text-xs text-gray-400 uppercase tracking-wider">{formatDate(post.date)}</time>
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </Link>
  </li>
);

export default BlogListItem;
