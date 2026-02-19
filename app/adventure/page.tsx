'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { adventureData } from '../lib/adventureData';

const viewportConfig = { once: true, amount: 0.2 };

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

const fadeLeft = {
    hidden: { opacity: 0, x: -36 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
};

const gentleReveal = {
    hidden: { opacity: 0, y: 22 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function AdventurePage() {
    const adventures = adventureData;

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
                                backgroundImage: `url('https://images.unsplash.com/photo-1682687982360-3fbab65f9d50?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
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
                                    ADVENTURE
                                </h1>
                                <p className="mt-8 animate-on-scroll mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white font-inter font-medium sm:text-base md:text-xl">
                                    Chase the thrill. From untamed jungles to crashing surf, conquer the raw beauty of Sri Lanka.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {adventures.map((adventure, index) => (
                    <motion.section
                        key={adventure.id}
                        className="py-12 sm:py-16 lg:py-20 bg-background"
                        variants={gentleReveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                    >
                        <div className="container mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                                {/* Left: Overview */}
                                <motion.div
                                    className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                                    variants={fadeLeft}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={viewportConfig}
                                >
                                    <motion.h2
                                        className="font-inter text-3xl font-semibold text-[#4B485B] md:text-5xl mb-6"
                                        variants={fadeUp}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={viewportConfig}
                                    >
                                        {adventure.title}
                                    </motion.h2>
                                    {adventure.overview.map((paragraph, i) => (
                                        <motion.p
                                            key={i}
                                            className="text-md text-[#7A7777] leading-relaxed font-inter font-regular mb-4 text-justify"
                                            variants={fadeUp}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={viewportConfig}
                                            transition={{ delay: i * 0.05 }}
                                        >
                                            {paragraph}
                                        </motion.p>
                                    ))}
                                </motion.div>

                                {/* Right: Images */}
                                <motion.div
                                    className={`order-2 mt-10 lg:mt-0 flex justify-center items-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={viewportConfig}
                                >
                                    <div className="relative w-fit max-md:mx-auto md:scale-[1.3] lg:scale-[1.1] 2xl:scale-[1.5] items-center justify-center">
                                        {/* Large portrait image */}
                                        <div className="relative z-20 w-48 h-64 rounded-xl overflow-hidden shadow-xl">
                                            <img
                                                src={adventure.overviewImages[1]}
                                                alt={`${adventure.title} image 1`}
                                                className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        {/* Small portrait image - behind large image */}
                                        <div className={`absolute top-1/2 -translate-y-1/2 ${index % 2 === 1 ? 'right-44' : 'left-44'} w-32 h-48 rounded-xl overflow-hidden shadow-xl z-0`}>
                                            <img
                                                src={adventure.overviewImages[0]}
                                                alt={`${adventure.title} image 2`}
                                                className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.section>
                ))}
            </main>

            {/* ─── FOOTER ─── */}
            <Footer />
        </div>
    );
}