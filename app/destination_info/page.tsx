'use client';

import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useSearchParams } from 'next/navigation';
import { getDestinationById } from '../lib/destinationsData';
import { Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../components/ui/Button';

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

    if (!destination) {
        return (
            <div className="flex items-center justify-center h-[60vh]">
                <p className="text-xl text-gray-600">Destination not found</p>
            </div>
        );
    }

    const overviewImages = destination.overviewImages;

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
                    <div className="relative h-full flex items-start justify-start container mx-auto">
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
                            className="max-w-4xl mx-auto mt-40 text-left ml-0"
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                        {/* Left: Overview */}
                        <motion.div
                            className="order-1"
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
                            className="order-2 mt-10 lg:mt-0 flex justify-center items-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportConfig}
                        >
                            <div className="relative w-fit scale-[1] lg:scale-[1.2] 2xl:scale-[1.5]">
                                {/* Large image */}
                                <div className="w-60 h-48 rounded-xl overflow-hidden shadow-xl">
                                    <img
                                        src={overviewImages[1]}
                                        alt="Overview image 1"
                                        className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                {/* Small image - overlapping */}
                                <div className="absolute -top-16 -right-20 w-40 h-32 rounded-xl overflow-hidden shadow-xl">
                                    <img
                                        src={overviewImages[0]}
                                        alt="Overview image 2"
                                        className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* gallery images */}
            <motion.section
                className="py-12 sm:py-16 lg:py-12 bg-background -mt-10"
                variants={gentleReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
            >
                <div className="container mx-auto">
                    <style jsx>{`
                        .scrollbar-hide::-webkit-scrollbar {
                            display: none;
                        }
                        .scrollbar-hide {
                            -ms-overflow-style: none;
                            scrollbar-width: none;
                        }
                    `}</style>
                    <div className="relative">
                        <div className="flex gap-4 pb-4 cursor-grab active:cursor-grab select-none overflow-x-auto scrollbar-hide" 
                             style={{ 
                                 scrollBehavior: 'smooth', 
                                 scrollSnapType: 'x mandatory',
                                 WebkitOverflowScrolling: 'touch'
                             }}>
                            {destination.galleryImages?.slice(0, 4).map((image, index) => (
                                <motion.div
                                    key={index}
                                    initial="hidden"
                                    animate="visible"
                                    variants={fadeUp}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex-shrink-0"
                                    style={{ 
                                        scrollSnapAlign: 'start',
                                        marginTop: index % 2 === 1 ? '4rem' : '0'
                                    }}
                                >
                                    <div className="relative overflow-hidden rounded-2xl shadow-lg">
                                        <img
                                            src={image}
                                            alt={`Gallery image ${index + 1}`}
                                            className="w-80 h-96 object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

        {/* Get Started */}
        <section className="mt-4 px-4 sm:px-6 lg:px-12 pb-8">
          <div className="max-w-8xl mx-auto relative h-[50vh] min-h-[500px] overflow-hidden rounded-[1.5rem]">
            <div className="absolute inset-0">
              <Image
                src="https://plus.unsplash.com/premium_photo-1661960937960-1883bf00f480?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Ready background"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute inset-0 bg-black/40" />
            <div className="relative h-full flex items-center justify-center px-4 text-center">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  ease: 'easeOut',
                }}
                className="max-w-3xl mx-auto"
              >
                <h1 className="mt-10 text-4xl md:text-6xl text-white tracking-tight drop-shadow-lg font-inter font-medium">
                  Adventure awaits—let the journey begin!
                </h1>
                <p className="mt-8 animate-on-scroll mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white font-inter font-medium md:text-lg">
                  Experience the best of Sri Lanka with Ceylon My Dream.
                </p>
                <Link href="">
                  <Button size="lg" className="mt-8 rounded-full px-8">
                    Discover More
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
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