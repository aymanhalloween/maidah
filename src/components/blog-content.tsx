"use client";

import Link from "next/link";
import { FadeIn } from "./fade-in";

const posts = [
  {
    title: "The Maidah Memo",
    date: "2026",
    slug: "the-maidah-memo",
  },
  {
    title: "Introducing Maidah",
    date: "2026",
    slug: "introducing-maidah",
  },
];

export function BlogContent() {
  return (
    <section className="px-6 pt-20 sm:pt-32 pb-24">
      <div className="max-w-[680px] mx-auto">
        <div className="divide-y divide-border border-b border-border">
          {posts.map((post, i) => (
            <FadeIn key={post.slug} index={i}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block py-5"
              >
                <h2 className="text-lg text-primary group-hover:text-accent transition-colors duration-200">
                  {post.title}
                </h2>
                <p className="text-[13px] text-muted mt-1">{post.date}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
