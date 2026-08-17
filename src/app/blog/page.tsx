"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, Clock, ArrowRight, Mail, CheckCircle } from "lucide-react";
import { blogPosts, BlogPost } from "@/data/blogData";

const categories = ["All", "Logistics", "Customs", "Sourcing", "Compliance"] as const;

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Filter posts based on category and search query
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // We spotlight the first post as the featured one (e.g. Navigating REACH)
  const featuredPost = blogPosts[0];

  // Rest of the posts for the grid
  const gridPosts = filteredPosts.filter((post) => post.slug !== featuredPost.slug || selectedCategory !== "All");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <div className="py-12 bg-white min-h-screen">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-16 space-y-6 pt-6">
        <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-[10px] font-bold text-neutral-800 uppercase tracking-widest">
          Veda Insights
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-900 tracking-tight leading-none uppercase max-w-4xl">
          Global Trade & Logistics <br />
          <span className="text-[#1261C9]">Intelligence.</span>
        </h1>
        
        <p className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-2xl">
          Stay informed with analytical perspectives from our logistics desk, compliance officers, and trade coordinators. Updates on custom frameworks, ocean carrier alliances, and global sourcing lanes.
        </p>
      </section>

      {/* Featured Post Spotlight - Only show when no active search/category filters are applied for a cleaner layout */}
      {selectedCategory === "All" && searchQuery === "" && featuredPost && (
        <section className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
          <div className="border border-neutral-200/60 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-neutral-50/50">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Image Gradient Representation */}
              <div className="lg:col-span-6 h-64 lg:h-auto min-h-[300px] relative bg-[#071B3A] overflow-hidden flex flex-col justify-between p-8 md:p-12">
                {/* Decorative background grid and shapes */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className={`absolute -right-20 -top-20 w-80 h-80 rounded-full bg-gradient-to-tr ${featuredPost.gradientFrom} ${featuredPost.gradientTo} opacity-40 blur-3xl`}></div>
                <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-gradient-to-tr from-[#1261C9] to-[#38A9F5] opacity-25 blur-3xl"></div>

                <span className="relative z-10 self-start px-3 py-1 rounded-full bg-[#1261C9] text-white text-[10px] font-bold uppercase tracking-wider">
                  Featured Article
                </span>

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-3 text-xs text-[#B9E3FF]">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {featuredPost.publishedAt}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3.5xl font-black text-white leading-tight tracking-tight uppercase">
                    {featuredPost.title}
                  </h3>
                </div>
              </div>

              {/* Text Meta Info */}
              <div className="lg:col-span-6 p-8 md:p-12 flex flex-col justify-between space-y-8 bg-white">
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#1261C9]/10 text-[#1261C9] text-[10px] font-bold uppercase tracking-wider">
                    {featuredPost.category}
                  </span>
                  <p className="text-neutral-500 text-sm md:text-base leading-relaxed">
                    {featuredPost.description}
                  </p>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-6 border-t border-neutral-100">
                  <div className="flex items-center gap-3">
                    <span className="h-10 w-10 bg-[#071B3A] text-white font-bold flex items-center justify-center rounded-full text-xs">
                      {featuredPost.author.avatar}
                    </span>
                    <div>
                      <span className="block text-xs font-bold text-neutral-900">{featuredPost.author.name}</span>
                      <span className="block text-[10px] text-neutral-450">{featuredPost.author.role}</span>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 bg-[#071B3A] hover:bg-[#1261C9] text-white text-xs font-bold px-6 py-3.5 rounded-full transition-all tracking-wider uppercase group"
                  >
                    Read Full Article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-neutral-200/60">
          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border whitespace-nowrap ${
                    isActive
                      ? "bg-[#1261C9] text-white border-[#1261C9] shadow-sm"
                      : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-neutral-200 text-xs focus:outline-none focus:border-[#1261C9] focus:ring-1 focus:ring-[#1261C9] bg-neutral-50/50"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        {gridPosts.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {gridPosts.map((post) => (
                <motion.article
                  key={post.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group bg-white rounded-3xl border border-neutral-200/60 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Visual representation */}
                    <div className="h-48 relative bg-[#071B3A] overflow-hidden p-6 flex flex-col justify-between">
                      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                      <div className={`absolute -right-16 -top-16 w-48 h-48 rounded-full bg-gradient-to-tr ${post.gradientFrom} ${post.gradientTo} opacity-50 blur-2xl`}></div>
                      
                      <span className="relative z-10 self-start px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                        {post.category}
                      </span>

                      <div className="relative z-10 flex items-center gap-3 text-[10px] text-[#B9E3FF]">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.publishedAt}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>

                    {/* Meta description */}
                    <div className="p-6 space-y-3">
                      <h4 className="font-extrabold text-neutral-900 text-lg uppercase leading-snug group-hover:text-[#1261C9] transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-neutral-500 text-xs leading-relaxed line-clamp-3">
                        {post.description}
                      </p>
                    </div>
                  </div>

                  {/* Card bottom details */}
                  <div className="p-6 pt-0 border-t border-neutral-100 flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2">
                      <span className="h-7 w-7 bg-neutral-100 text-neutral-800 font-bold flex items-center justify-center rounded-full text-[10px]">
                        {post.author.avatar}
                      </span>
                      <div>
                        <span className="block text-[10px] font-bold text-neutral-900 leading-none">{post.author.name}</span>
                        <span className="block text-[9px] text-neutral-450 leading-none mt-0.5">{post.author.role.split(" & ")[0]}</span>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-[#1261C9] font-bold text-xs uppercase tracking-wider group-hover:underline"
                    >
                      Read
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-20 border border-dashed border-neutral-200 rounded-3xl bg-neutral-50/30">
            <p className="text-neutral-450 text-sm font-semibold">No articles match your search parameters.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 text-[#1261C9] hover:underline font-bold text-xs uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Premium Newsletter CTA */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 mb-16">
        <div className="relative bg-gradient-to-r from-[#071B3A] to-[#0B3D91] rounded-3xl p-8 md:p-12 text-white overflow-hidden shadow-xl border border-neutral-800">
          <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px]"></div>
          <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-gradient-to-tr from-[#1261C9] to-[#38A9F5] opacity-20 blur-3xl"></div>

          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
            <div className="p-3 bg-white/10 rounded-2xl inline-block backdrop-blur-md">
              <Mail className="h-6 w-6 text-[#38A9F5]" />
            </div>
            
            <h3 className="text-2xl md:text-3.5xl font-black uppercase tracking-tight">
              Get Logistics Updates In Your Inbox
            </h3>
            
            <p className="text-neutral-300 text-xs md:text-sm leading-relaxed">
              We send monthly roundups covering shipping lane rate variations, key tariff updates, and custom broker regulatory notices. No spam, only commercial trade data.
            </p>

            <AnimatePresence mode="wait">
              {!subscribed ? (
                <motion.form
                  key="subscribe-form"
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter business email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-5 py-3 rounded-full border border-neutral-700 bg-neutral-900/60 text-white placeholder-neutral-450 focus:outline-none focus:border-[#1261C9] focus:ring-1 focus:ring-[#1261C9] text-xs"
                  />
                  <button
                    type="submit"
                    className="bg-[#1261C9] hover:bg-[#1687E8] text-white font-bold py-3 px-6 rounded-full text-xs transition-all tracking-wide uppercase cursor-pointer shadow-md"
                  >
                    Subscribe
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="subscribed-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center gap-2 text-emerald-400 font-bold text-sm bg-emerald-950/20 border border-emerald-900/30 py-3.5 px-6 rounded-full max-w-md mx-auto"
                >
                  <CheckCircle className="h-5 w-5" />
                  Subscription active! Check your inbox soon.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
