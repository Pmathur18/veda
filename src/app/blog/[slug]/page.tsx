"use client";

import React, { use, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2, Link as LinkIcon, Check, ChevronRight, User } from "lucide-react";
import { blogPosts, BlogPost } from "@/data/blogData";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPostDetail({ params }: BlogPostPageProps) {
  const { slug } = use(params);
  const [copied, setCopied] = useState(false);

  // Find current post
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-4 px-4 text-center">
        <h2 className="text-2xl md:text-3.5xl font-black uppercase text-neutral-900">Article Not Found</h2>
        <p className="text-neutral-500 text-sm max-w-md">
          The requested trade intelligence analysis dossier does not exist or has been archived.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 bg-[#071B3A] text-white text-xs font-bold px-6 py-3.5 rounded-full uppercase tracking-wider hover:bg-[#1261C9] transition-all"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>
      </div>
    );
  }

  // Find related posts (exclude current, prioritize same category, take up to 2)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => {
      if (a.category === post.category && b.category !== post.category) return -1;
      if (b.category === post.category && a.category !== post.category) return 1;
      return 0;
    })
    .slice(0, 2);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="py-12 bg-white min-h-screen">
      {/* Navigation Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-4 mb-10 pt-6">
        <div className="flex items-center gap-2 text-xs font-bold text-neutral-450 uppercase tracking-widest mb-6">
          <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/blog" className="hover:text-neutral-900 transition-colors">Blog</Link>
          <ChevronRight className="h-3 w-3 animate-pulse" />
          <span className="text-neutral-850 truncate max-w-[200px] md:max-w-xs">{post.category}</span>
        </div>

        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[#1261C9] hover:text-neutral-950 font-black text-xs uppercase tracking-widest group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Blog
        </Link>
      </nav>

      {/* Main Post Section */}
      <article className="max-w-4xl mx-auto px-4 mb-20">
        {/* Header Block */}
        <header className="space-y-6 pb-8 border-b border-neutral-100 mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-[#1261C9]/10 text-[#1261C9] text-[10px] font-bold uppercase tracking-wider">
            {post.category}
          </span>

          <h1 className="text-3xl md:text-5xl font-black text-neutral-900 leading-tight tracking-tight uppercase">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-6 pt-4">
            {/* Author */}
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 bg-[#071B3A] text-white font-bold flex items-center justify-center rounded-full text-xs">
                {post.author.avatar}
              </span>
              <div>
                <span className="block text-xs font-bold text-neutral-900">{post.author.name}</span>
                <span className="block text-[10px] text-neutral-450">{post.author.role}</span>
              </div>
            </div>

            {/* Read info */}
            <div className="flex items-center gap-4 text-xs text-neutral-450">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {post.publishedAt}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>
          </div>
        </header>

        {/* Visual Header Representation */}
        <div className="relative h-64 md:h-96 w-full rounded-3xl overflow-hidden mb-12 shadow-md border border-neutral-150">
          <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px] bg-[#071B3A]"></div>
          <div className={`absolute inset-0 bg-gradient-to-br ${post.gradientFrom} ${post.gradientTo} opacity-90`}></div>
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 text-white/95">
            <h2 className="text-lg md:text-2xl font-bold max-w-2xl leading-relaxed uppercase opacity-85 select-none">
              {post.description}
            </h2>
          </div>
        </div>

        {/* Content Elements */}
        <div className="space-y-6 text-neutral-700 text-sm md:text-base leading-relaxed mb-16">
          {post.content.map((sec, idx) => {
            if (sec.type === "paragraph") {
              return (
                <p key={idx} className="font-normal">
                  {sec.text}
                </p>
              );
            }
            if (sec.type === "heading") {
              return (
                <h3
                  key={idx}
                  className="text-xl md:text-2xl font-extrabold text-neutral-900 uppercase pt-6 mb-2 tracking-tight flex items-center gap-2"
                >
                  <span className="h-1.5 w-6 bg-[#1261C9] rounded-full"></span>
                  {sec.text}
                </h3>
              );
            }
            if (sec.type === "list" && sec.items) {
              return (
                <ul key={idx} className="space-y-3.5 my-4 pl-4 md:pl-6 list-none border-l-2 border-neutral-150">
                  {sec.items.map((item, itemIdx) => {
                    const [title, desc] = item.split(": ");
                    return (
                      <li key={itemIdx} className="text-xs md:text-sm">
                        <strong className="text-neutral-900 font-bold uppercase tracking-wide block sm:inline">
                          {title}:
                        </strong>{" "}
                        <span className="text-neutral-500">{desc}</span>
                      </li>
                    );
                  })}
                </ul>
              );
            }
            return null;
          })}
        </div>

        {/* Share buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 border-y border-neutral-100 mb-16">
          <span className="text-xs font-bold text-neutral-450 uppercase tracking-widest flex items-center gap-2">
            <Share2 className="h-4 w-4 text-[#1261C9]" /> Share This Analysis
          </span>

          <div className="flex gap-2.5">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-4 py-2 border border-neutral-200 hover:border-neutral-400 rounded-full text-xs font-bold uppercase tracking-wider text-neutral-700 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-500" />
                  Copied!
                </>
              ) : (
                <>
                  <LinkIcon className="h-3.5 w-3.5" />
                  Copy Link
                </>
              )}
            </button>
          </div>
        </div>

        {/* Author Details Profile Block */}
        <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-200/50 flex flex-col md:flex-row items-start gap-6">
          <span className="h-16 w-16 bg-[#071B3A] text-white font-bold flex items-center justify-center rounded-full text-lg shrink-0 shadow-inner">
            {post.author.avatar}
          </span>
          <div className="space-y-3">
            <div>
              <span className="text-xs font-bold text-[#1261C9] uppercase tracking-wider block">Author Profile</span>
              <h4 className="text-lg font-extrabold text-neutral-900">{post.author.name}</h4>
              <span className="text-xs text-neutral-400 font-semibold">{post.author.role}</span>
            </div>
            <p className="text-neutral-500 text-xs md:text-sm leading-relaxed">
              {post.author.bio}
            </p>
          </div>
        </div>
      </article>

      {/* Related Posts Grid */}
      {relatedPosts.length > 0 && (
        <section className="bg-neutral-50/50 border-t border-neutral-100 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-xl md:text-2xl font-black text-neutral-900 uppercase tracking-tight mb-8">
              Related Sourcing Insights
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((rPost) => (
                <Link
                  key={rPost.slug}
                  href={`/blog/${rPost.slug}`}
                  className="group bg-white rounded-3xl border border-neutral-200/50 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#1261C9]/10 text-[#1261C9] text-[9px] font-bold uppercase tracking-wider">
                      {rPost.category}
                    </span>
                    <h4 className="font-extrabold text-neutral-900 text-base uppercase leading-snug group-hover:text-[#1261C9] transition-colors line-clamp-2">
                      {rPost.title}
                    </h4>
                    <p className="text-neutral-500 text-[11px] leading-relaxed line-clamp-2">
                      {rPost.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 mt-4 border-t border-neutral-100 text-[10px] text-neutral-450">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {rPost.publishedAt}
                    </span>
                    <span className="font-bold text-[#1261C9] group-hover:underline">Read →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
