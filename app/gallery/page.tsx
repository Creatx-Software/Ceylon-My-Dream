'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { galleryData, GALLERY_TABS, type GalleryTab } from '../lib/galleryData';

export default function GalleryPage() {
    const tabs = React.useMemo(
        () =>
            GALLERY_TABS.map((tab) => ({
                key: tab,
                label: tab === 'all' ? 'All' : tab.charAt(0).toUpperCase() + tab.slice(1),
            })),
        []
    );

    const [activeTab, setActiveTab] = React.useState<GalleryTab>('all');

    const visibleImages = React.useMemo(() => {
        if (activeTab === 'all') return galleryData;
        return galleryData.filter((img) => img.category === activeTab);
    }, [activeTab]);

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
                                backgroundImage: `url('https://images.unsplash.com/photo-1620983392632-75d1e4444991?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
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
                                    GALLERY
                                </h1>
                                <p className="mt-8 animate-on-scroll mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white font-inter font-medium sm:text-base md:text-xl">
                                    The Path Less Traveled. Frame the unseen. From secret waterfalls to quiet village dawns, witness Sri Lanka through a different lens.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Tabs */}
                <section className="py-4 md:py-4 mt-10">
                    <div className="container mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="flex justify-center gap-3 mb-10 animate-on-scroll flex-wrap"
                        >
                            {tabs.map((tab, index) => (
                                <motion.button
                                    key={tab.key}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                                    onClick={() => setActiveTab(tab.key)}
                                    className={`px-6 py-2 rounded-full text-sm font-inter font-semibold transition-colors border ${
                                        activeTab === tab.key
                                            ? 'bg-[#FBB03B] text-white border-[#FBB03B]'
                                            : 'bg-transparent text-[#717171] border-border hover:border-[#717171] hover:text-primary'
                                    }`}
                                >
                                    {tab.label}
                                </motion.button>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Images */}
                <section className="py-16 md:py-20 -mt-16">
                    <div className="container mx-auto">
                        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                            {visibleImages.map((image, index) => (
                                <motion.div
                                    key={image.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.05 }}
                                    className="break-inside-avoid mb-4"
                                >
                                    <div className="relative overflow-hidden rounded-lg shadow-lg group">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}