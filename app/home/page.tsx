'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import Image from 'next/image';
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Calendar as CalendarIcon, Users } from 'lucide-react';
import { useState, useEffect, useCallback } from "react";
import { homeData } from '../lib/homeData';
import { Button } from '../components/ui/ButtonMain';
import { Popover, PopoverTrigger, PopoverContent } from '../components/ui/Popover';
import { format } from 'date-fns';
import { cn } from '../lib/utils';
import { Calendar } from '../components/ui/Calendar';

export default function HomePage() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [checkIn, setCheckIn] = useState<Date | undefined>(undefined);
  const [checkOut, setCheckOut] = useState<Date | undefined>(undefined);
  const [pax, setPax] = useState(1);

  const goNext = useCallback(() => setHeroIndex((i) => (i + 1) % homeData.heroSlides.length), []);
  const goPrev = useCallback(() => setHeroIndex((i) => (i - 1 + homeData.heroSlides.length) % homeData.heroSlides.length), []);

  useEffect(() => {
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [goNext]);

  
  const handleCheckInSelect = (date: Date | Date[] | undefined) => {
    if (date instanceof Date) {
      setCheckIn(date);
    }
  };

  const handleCheckOutSelect = (date: Date | Date[] | undefined) => {
    if (date instanceof Date) {
      setCheckOut(date);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      <main>
        {/* Hero */}
        <section className="mt-4 px-4 sm:px-6 lg:px-12">
          <div className="max-w-8xl mx-auto relative h-[50vh] min-h-[600px] overflow-hidden rounded-[1.5rem]">
            <div className="absolute inset-0">
              {/* Slides */}
              {homeData.heroSlides.map((slide, i) => (
              <Image
                key={i}
                src={slide.img}
                alt={slide.title}
                fill
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                  i === heroIndex ? "opacity-100" : "opacity-0"
                }`}
                priority={i === 0}
              />
              ))}
              <div className="absolute inset-0 bg-black/5" />

              {/* Chevron Buttons */}
              <button
                onClick={goPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/50 backdrop-blur-sm border border-white/30 text-[#1E1E1E] transition-colors hover:bg-white/60"
                  aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={goNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/50 backdrop-blur-sm border border-white/30 text-[#1E1E1E] transition-colors hover:bg-white/60"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>
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
                className="max-w-4xl mx-auto"
              >
                <h1 className="-mt-36 md:-mt-20 lg:mt-10 text-5xl md:text-8xl text-white tracking-tight drop-shadow-lg" style={{ fontFamily: "'Abhaya Libre', serif", fontWeight: 800 }}>
                  {homeData.heroSlides[heroIndex].title}
                </h1>
                <p className="mt-8 animate-on-scroll mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white font-inter font-medium sm:text-base md:text-xl">
                  {homeData.heroSlides[heroIndex].description}
                </p>
              </motion.div>
              
              {/* Search Bar - Independent from slides */}
              <div className="absolute bottom-10 md:bottom-16 left-1/2 -translate-x-1/2 w-full max-w-3xl px-4 z-30">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-0 bg-white rounded-xl md:rounded-full p-3 sm:p-3 shadow-xl">
                  {/* Check In */}
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="flex items-center gap-2 flex-1 px-4 py-3 text-left hover:bg-muted/50 rounded-full transition-colors">
                        <CalendarIcon size={20} className="text-[#7D7474] shrink-0" />
                        <span className="text-sm text-[#7D7474] font-inter font-medium">{checkIn ? format(checkIn, "MMM dd, yyyy") : "Check In"}</span>
                        <ChevronDown size={14} className="text-[#7D7474] ml-auto" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 z-50 bg-transparent border-none shadow-none" align="start">
                      <Calendar mode="single" selected={checkIn} onSelect={handleCheckInSelect} initialFocus className={cn("pointer-events-auto")} />
                    </PopoverContent>
                  </Popover>

                  <div className="hidden sm:block w-px h-8 bg-border" />

                  {/* Check Out */}
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="flex items-center gap-2 flex-1 px-4 py-3 text-left hover:bg-muted/50 rounded-full transition-colors">
                        <CalendarIcon size={20} className="text-[#7D7474] shrink-0" />
                        <span className="text-sm text-[#7D7474] font-inter font-medium">{checkOut ? format(checkOut, "MMM dd, yyyy") : "Check Out"}</span>
                        <ChevronDown size={14} className="text-[#7D7474] ml-auto" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 z-50 bg-transparent border-none shadow-none" align="start">
                      <Calendar mode="single" selected={checkOut} onSelect={handleCheckOutSelect} initialFocus className={cn("pointer-events-auto")} />
                    </PopoverContent>
                  </Popover>

                  <div className="hidden sm:block w-px h-8 bg-border" />

                  {/* Pax */}
                  <div className="flex items-center gap-2 px-4 py-3">
                    <Users size={20} className="text-[#7D7474] shrink-0" />
                    <span className="text-sm text-[#7D7474] font-inter font-medium">Pax</span>
                    <div className="flex flex-col ml-1">
                      <button onClick={() => setPax((p) => p + 1)} className="text-[#7D7474] hover:text-primary transition-colors" aria-label="Increase pax">
                        <ChevronUp size={14} />
                      </button>
                      <button onClick={() => setPax((p) => Math.max(1, p - 1))} className="text-[#7D7474] hover:text-primary transition-colors" aria-label="Decrease pax">
                        <ChevronDown size={14} />
                      </button>
                    </div>
                    <span className="text-sm font-inter font-semibold text-[#7D7474] min-w-[16px] text-center">{pax}</span>
                  </div>

                  {/* Inquiry Now Button */}
                  <Button className="rounded-full px-8 py-3 text-base font-inter font-semibold ml-2">
                    Inquiry Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm font-inter font-semibold uppercase tracking-widest text-[#FBB03B] inline-block"
              >
                ABOUT US
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-5 font-inter text-3xl font-semibold text-[#4B485B] md:text-5xl"
              >
                Your Sri Lanka Tour Starts Here
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-10 text-lg text-black leading-relaxed font-inter font-regular"
              >
                At Ceylon My Dream, we create soulful Sri Lanka journeys that go beyond sightseeing. From misty hills to ancient cities and hidden beaches, every moment is crafted to leave lasting memories.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-6 text-lg text-[#7A7777] leading-relaxed font-inter font-regular"
              >
                With over six years of experience and a multilingual team, we craft tailor-made journeys for solo travelers, couples, and families. Go beyond the usual paths with Ceylon My Dream, where every trip becomes a story to cherish.
              </motion.p>

              {/* 2x2 Cards Grid */}
              <div className="mt-10 grid grid-cols-2 gap-4 max-w-lg">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <span className="text-3xl font-inter font-semibold text-black">07</span>
                  <span className="text-sm text-[#625F5F] font-inter font-medium">Years of Expertise</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <span className="text-3xl font-inter font-semibold text-black">13+</span>
                  <span className="text-sm text-[#625F5F] font-inter font-medium">Destinations</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <span className="text-3xl font-inter font-semibold text-black">10K</span>
                  <span className="text-sm text-[#625F5F] font-inter font-medium">International Guests</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <span className="text-3xl font-inter font-semibold text-black">24/7</span>
                  <span className="text-sm text-[#625F5F] font-inter font-medium">Support</span>
                </motion.div>
              </div>

              {/* Two Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="px-8 py-3 bg-[#FBB03B] text-white font-inter font-semibold rounded-full hover:bg-[#FBB03B]/90 transition-colors"
                >
                  Explore Our Tours
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="px-8 py-3 border-2 border-[#FBB03B] text-[#FBB03B] font-inter font-semibold rounded-full hover:bg-[#FBB03B] hover:text-white transition-colors"
                >
                  Explore Sri Lankan Destinations
                </motion.button>
              </div>
            </motion.div>

            {/* Right Side Image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="relative"
            >
              <Image
                src="/assets/AboutUsHome.png"
                alt="About Us - Ceylon My Dream"
                width={400}
                height={250}
                className="w-full h-auto max-w-xl mx-auto"
              />
            </motion.div>
          </div>
        </section>
      </main>
        
      {/* Footer*/}
      <Footer />
    </div>
  );
}
