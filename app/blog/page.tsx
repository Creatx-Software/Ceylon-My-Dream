'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/ButtonMain';
import { blogTags, blogArticles } from '../lib/blogData';

export default function BlogPage() {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [activeTag, setActiveTag] = React.useState('');
    const sortedByDate = [...blogArticles].sort((a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime());
    const featuredArticle = sortedByDate[0];
    const popularArticles = [...blogArticles]
        .filter((article) => article.id !== featuredArticle?.id)
        .sort((a, b) => b.popularity - a.popularity)
        .slice(0, 3);
    const popularIds = new Set(popularArticles.map((article) => article.id));
    const smallArticles = sortedByDate.filter((article) => article.id !== featuredArticle?.id && !popularIds.has(article.id));

    return (
        <div className="min-h-screen bg-white">
            {/* ─── NAVBAR ─── */}
            <Navbar />

            <main className="mb-0">
                {/* ─── HERO ─── */}
                <section className="mt-4 px-4 sm:px-6 lg:px-12">
                    <div className="max-w-8xl mx-auto relative h-[50vh] min-h-[500px] overflow-hidden rounded-[1.5rem]">
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{
                                backgroundImage: `url('https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                            }}
                        />

                        <div className="absolute inset-0 bg-black/40" />
                        <div className="relative h-full flex items-center justify-center px-4 text-center">
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 40,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.8,
                                    ease: 'easeOut',
                                }}
                                className="max-w-2xl mx-auto mt-10"
                            >
                                <h1 className="text-5xl md:text-8xl text-white tracking-tight drop-shadow-lg" style={{ fontFamily: "'Abhaya Libre', serif", fontWeight: 800 }}>
                                    TRAVEL BLOG
                                </h1>
                                <p className="mt-8 animate-on-scroll mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white font-inter font-medium sm:text-base md:text-xl">
                                    Collect moments, not things. Explore the hidden corners of the world, one story at a time.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ─── DESTINATIONS / TOUR PACKAGES ─── */}
                <section className="py-12 md:py-16">
                    <div className="container mx-auto">
                        <div className="flex flex-col md:flex-row md:gap-10 lg:gap-16">
                            {/* Left Sidebar - Tags and Popular */}
                            <div className="w-full lg:w-2/5 space-y-8">
                                {/* Search */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="relative"
                                >
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7D7474]/85 h-5 w-5" />
                                    <input
                                        type="text"
                                        placeholder="Search blog..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 bg-white border border-[#7D7474]/30 rounded-lg text-[#4B485B] placeholder-[#7D7474]/60 focus:outline-none focus:ring-2 focus:ring-[#FBB03B] focus:border-transparent transition-all"
                                    />
                                </motion.div>

                                {/* Tags */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="bg-white"
                                >
                                    <h3 className="font-inter text-3xl font-semibold text-[#4B485B] md:text-4xl mb-6">Tags</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {blogTags.map((tag, index) => (
                                            <motion.button
                                                key={tag.name}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                                                onClick={() => setActiveTag((current) => (current === tag.name ? '' : tag.name))}
                                                className={`px-3 py-1 border rounded-md text-md font-inter font-medium transition-colors ${
                                                    activeTag === tag.name
                                                        ? 'bg-[#FBB03B] border-[#FBB03B] text-white'
                                                        : 'bg-white text-[#423939] border-[#D9D9D9] hover:bg-[#FBB03B] hover:border-[#FBB03B] hover:text-white'
                                                }`}
                                            >
                                                {tag.name}
                                            </motion.button>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Popular Posts */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    className="bg-white"
                                >
                                    <h3 className="font-inter text-3xl md:text-4xl font-semibold text-[#4B485B] mb-6">Popular</h3>
                                    <div className="space-y-4">
                                        {popularArticles.map((post, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                                className="cursor-pointer group"
                                            >
                                                <div className="w-full h-48 lg:h-60 rounded-xl overflow-hidden mb-3">
                                                    <img
                                                        src={post.image}
                                                        alt={post.title}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                </div>
                                                <h4 className="font-inter text-md font-semibold text-[#423939] line-clamp-2 group-hover:text-[#FBB03B] transition-colors mb-1">
                                                    {post.title}
                                                </h4>
                                                <p className="text-sm text-[#7A7777] font-inter font-regular">{post.dateLabel}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>

                            {/* Main Content */}
                            <div className="w-full lg:w-3/5">
                                <motion.h2
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="font-inter text-3xl font-semibold text-[#4B485B] md:text-4xl mb-6"
                                >
                                    Recent Articles
                                </motion.h2>

                                {/* Large Featured Article */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    className="bg-white mt-12 mb-8 group"
                                >
                                    <div className="relative h-96 rounded-lg overflow-hidden mb-4">
                                        <img
                                            src={featuredArticle.image}
                                            alt={featuredArticle.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    </div>
                                    <h3 className="font-inter text-lg font-semibold text-[#423939] mb-2 group-hover:text-[#FBB03B] transition-colors">{featuredArticle.title}</h3>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-full overflow-hidden">
                                            <img
                                                src={featuredArticle.authorImage}
                                                alt={featuredArticle.author}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-inter text-md font-medium text-[#1E1E1E]">{featuredArticle.author}</p>
                                            <p className="text-sm text-[#7A7777] font-inter font-regular">{featuredArticle.dateLabel}</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-[#7D7474] leading-relaxed font-inter font-regular">
                                        {featuredArticle.excerpt}
                                    </p>
                                </motion.div>

                                {/* Small Articles Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {smallArticles.map((article, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                            className="bg-white cursor-pointer group"
                                        >
                                            <div className="h-64 lg:h-80 rounded-lg overflow-hidden mb-3">
                                                <img
                                                    src={article.image}
                                                    alt={article.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                            <h4 className="font-inter text-md font-semibold text-[#423939] line-clamp-2 group-hover:text-[#FBB03B] transition-colors">
                                                {article.title}
                                            </h4>
                                            <p className="text-sm text-[#7A7777] font-inter font-regular mt-1">{article.dateLabel}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ─── View More ─── */}
                <section className="py-10 md:py-10 -mt-10">
                    <div className="container mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex justify-center"
                        >
                            <Button
                                variant="primary"
                                size="lg"
                                className="px-8 py-3"
                            >
                                View More
                            </Button>
                        </motion.div>
                    </div>
                </section>

            </main>
            {/* ─── FOOTER ─── */ }
            <Footer />
        </div >
    );
}