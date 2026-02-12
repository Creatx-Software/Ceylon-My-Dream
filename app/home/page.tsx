'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import Image from 'next/image';
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Calendar as CalendarIcon, Users } from 'lucide-react';
import { useState, useEffect, useCallback } from "react";
import { homeData } from '../lib/homeData';
import { Button } from '../components/ui/Button';
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
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground transition-colors hover:bg-primary-foreground/40"
                  aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={goNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground transition-colors hover:bg-primary-foreground/40"
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
                <h1 className="mt-10 text-5xl md:text-8xl text-white tracking-tight drop-shadow-lg" style={{ fontFamily: "'Abhaya Libre', serif", fontWeight: 800 }}>
                  {homeData.heroSlides[heroIndex].title}
                </h1>
                <p className="mt-8 animate-on-scroll mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white font-inter font-medium sm:text-base md:text-xl">
                  {homeData.heroSlides[heroIndex].description}
                </p>

                {/* Search Bar */}
          <div className="animate-on-scroll flex flex-col sm:flex-row items-stretch sm:items-center gap-0 bg-background rounded-full p-2 sm:p-3 max-w-3xl mx-auto shadow-xl">
            {/* Check In */}
            <Popover>
              <PopoverTrigger asChild>
                <button className="flex items-center gap-2 flex-1 px-4 py-3 text-left hover:bg-muted/50 rounded-full transition-colors">
                  <CalendarIcon size={20} className="text-muted-foreground shrink-0" />
                  <span className="text-sm text-foreground font-medium">{checkIn ? format(checkIn, "MMM dd, yyyy") : "Check In"}</span>
                  <ChevronDown size={14} className="text-muted-foreground ml-auto" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 z-50" align="start">
                <Calendar mode="single" selected={checkIn} onSelect={handleCheckInSelect} initialFocus className={cn("p-3 pointer-events-auto")} />
              </PopoverContent>
            </Popover>

            <div className="hidden sm:block w-px h-8 bg-border" />

            {/* Check Out */}
            <Popover>
              <PopoverTrigger asChild>
                <button className="flex items-center gap-2 flex-1 px-4 py-3 text-left hover:bg-muted/50 rounded-full transition-colors">
                  <CalendarIcon size={20} className="text-muted-foreground shrink-0" />
                  <span className="text-sm text-foreground font-medium">{checkOut ? format(checkOut, "MMM dd, yyyy") : "Check Out"}</span>
                  <ChevronDown size={14} className="text-muted-foreground ml-auto" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 z-50" align="start">
                <Calendar mode="single" selected={checkOut} onSelect={handleCheckOutSelect} initialFocus className={cn("p-3 pointer-events-auto")} />
              </PopoverContent>
            </Popover>

            <div className="hidden sm:block w-px h-8 bg-border" />

            {/* Pax */}
            <div className="flex items-center gap-2 px-4 py-3">
              <Users size={20} className="text-muted-foreground shrink-0" />
              <span className="text-sm text-foreground font-medium">Pax</span>
              <div className="flex flex-col ml-1">
                <button onClick={() => setPax((p) => p + 1)} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Increase pax">
                  <ChevronUp size={14} />
                </button>
                <button onClick={() => setPax((p) => Math.max(1, p - 1))} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Decrease pax">
                  <ChevronDown size={14} />
                </button>
              </div>
              <span className="text-sm font-semibold text-foreground min-w-[16px] text-center">{pax}</span>
            </div>

            {/* Inquiry Now Button */}
            <Button className="rounded-full px-8 py-3 text-base font-semibold ml-2">
              Inquiry Now
            </Button>
          </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
        
      {/* Footer*/}
      <Footer />
    </div>
  );
}
