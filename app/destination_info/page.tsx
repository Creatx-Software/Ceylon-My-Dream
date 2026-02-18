'use client';

import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useSearchParams } from 'next/navigation';
import { getDestinationById, destinationsData } from '../lib/destinationsData';
import { Star } from 'lucide-react';

const viewportConfig = { once: true, amount: 0.3 };

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const gentleReveal = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.8, staggerChildren: 0.1 }
    }
};

function DestinationInfoContent() {
    const searchParams = useSearchParams();
    const destinationId = searchParams.get('id') || '';

    const destination = getDestinationById(destinationId);

    // Get overview images from destinations data (using first 2 destinations as examples)
    const overviewImages = [
        destinationsData[0]?.img || 'https://images.unsplash.com/photo-1724031948257-8b3c68232ccc?q=80&w=670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        destinationsData[1]?.img || 'https://images.unsplash.com/photo-1755099343217-649527cd07e8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ];

    if (!destination) {
        return (
            <div className="flex items-center justify-center h-[60vh]">
                <p className="text-xl text-gray-600">Destination not found</p>
            </div>
        );
    }

    return (
        <main className="mb-0">
            <section className="mt-4 px-4 sm:px-6 lg:px-12">
                <div className="max-w-8xl mx-auto relative h-[50vh] min-h-[500px] overflow-hidden rounded-[1.5rem]">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url('${destination.infoImg}')`,
                        }}
                    />

                    <div className="absolute inset-0 bg-black/40" />
                    <div className="relative h-full flex items-start justify-start px-4">
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
                            className="max-w-4xl mx-auto mt-40 text-left ml-20"
                        >
                            <h1 className="text-5xl md:text-8xl text-white tracking-tight drop-shadow-lg" style={{ fontFamily: "'Abhaya Libre', serif", fontWeight: 800 }}>
                                VISIT {destination.name.toUpperCase()}
                            </h1>
                            <p className="mt-8 mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white font-inter font-medium sm:text-base md:text-xl">
                                {destination.description}
                            </p>
                        </motion.div>

                        {/* Google Review Label */}
                        <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 flex items-center gap-2">
                            <span className="text-white text-md font-inter font-medium">
                                Google Review {destination.rating}
                            </span>
                            <div className="flex gap-1 mt-1">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} size={14} className="text-[#FBB03B] fill-[#FBB03B]" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* destination info */}
            <motion.section
                className="py-12 sm:py-16 lg:py-20 bg-background"
                variants={gentleReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
            >
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
                        {/* Left: Overview */}
                        <motion.div
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportConfig}
                        >
                            {destination.overview.map((p, i) => (
                                <motion.p
                                    key={i}
                                    className="text-md text-[#7A7777] leading-relaxed font-inter font-regular mb-4"
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={viewportConfig}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    {p}
                                </motion.p>
                            ))}
                        </motion.div>

                        {/* Right: Images */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportConfig}
                            className="space-y-4"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <div className="relative overflow-hidden rounded-xl">
                                    <img
                                        src={overviewImages[0]}
                                        alt="Overview image 1"
                                        className="w-full h-40 object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="relative overflow-hidden rounded-xl">
                                    <img
                                        src={overviewImages[1]}
                                        alt="Overview image 2"
                                        className="w-full h-40 object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </main>
    );
}

export default function DestinationInfoPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <Suspense fallback={
                <div className="flex items-center justify-center h-[60vh]">
                    <p className="text-xl text-gray-600">Loading...</p>
                </div>
            }>
                <DestinationInfoContent />
            </Suspense>
            <Footer />
        </div>
    );
}