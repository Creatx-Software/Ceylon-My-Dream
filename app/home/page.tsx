'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import Image from 'next/image';
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Calendar as CalendarIcon, Users, ArrowRight, UserPen, HeartHandshake, Star, ChartNoAxesCombined, Languages } from 'lucide-react';
import { useState, useEffect, useCallback } from "react";
import { homeData } from '../lib/homeData';
import { Button } from '../components/ui/ButtonMain';
import { Popover, PopoverTrigger, PopoverContent } from '../components/ui/Popover';
import { format } from 'date-fns';
import { cn } from '../lib/utils';
import { Calendar } from '../components/ui/Calendar';
import { Button as Button2 } from '../components/ui/Button';
import { Mail } from 'lucide-react';

export default function HomePage() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [checkIn, setCheckIn] = useState<Date | undefined>(undefined);
  const [checkOut, setCheckOut] = useState<Date | undefined>(undefined);
  const [pax, setPax] = useState(1);
  const [activeTab, setActiveTab] = useState("All");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const goNext = useCallback(() => setHeroIndex((i) => (i + 1) % homeData.heroSlides.length), []);
  const goPrev = useCallback(() => setHeroIndex((i) => (i - 1 + homeData.heroSlides.length) % homeData.heroSlides.length), []);
  
  const getVisibleCards = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
    }
    return 1;
  };

  const nextTestimonial = useCallback(() => {
    setTestimonialIndex((i) => {
      const newIndex = i + 1;
      return newIndex >= homeData.testimonials.length ? 0 : newIndex;
    });
  }, []);

  const prevTestimonial = useCallback(() => {
    setTestimonialIndex((i) => {
      const newIndex = i - 1;
      return newIndex < 0 ? homeData.testimonials.length - 1 : newIndex;
    });
  }, []);

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
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="absolute bottom-10 md:bottom-16 left-0 right-0 mx-auto w-full max-w-3xl px-4 z-30"
              >
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
              </motion.div>
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

        {/* Visit Destinations */}
        <section className="py-16 md:py-20 -mt-10">
          <div className="container mx-auto">
            {/* Top Section - Text and Button */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
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
                  MUST VISIT DESTINATIONS
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mt-5 font-inter text-3xl font-semibold text-[#4B485B] md:text-5xl"
                >
                  Explore Beautiful Places Now
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="mt-10 text-sm md:text-md text-[#7A7777] leading-relaxed font-inter font-regular"
                >
                  Discover Sri Lanka — from ancient cities and rich culture to golden beaches and misty hill country.
                </motion.p>
              </motion.div>
              
              {/* Right Side - Explore More Button */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="flex justify-center lg:justify-end"
              >
                <Button className="rounded-full px-8 py-3 text-base font-inter font-semibold">
                  Explore More <ArrowRight size={14} className="ml-2" />
                </Button>
              </motion.div>
            </div>
            
            {/* Bottom Section - Destination Cards (Full Width) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {homeData.destinations.map((destination, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className={`relative group cursor-pointer overflow-hidden rounded-3xl ${
                    index === 0 
                      ? 'md:row-span-2' 
                      : index === 4
                      ? 'md:row-span-2 md:col-start-2'
                      : ''
                  }`}
                >
                  <div className={`relative ${
                    index === 0 || index === 4 
                      ? 'h-96 md:h-full' 
                      : 'h-48 md:h-48'
                  }`}>
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/20 backdrop-blur-md rounded-xl">
                      <h3 className="text-white text-xl font-inter font-medium">
                        {destination.name}
                      </h3>
                      <a
                        href={destination.link}
                        className="inline-flex items-center text-white text-xs font-inter font-regular hover:text-[#FBB03B] transition-colors mt-2"
                      >
                        SEE MORE <ArrowRight size={14} className="ml-2" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-20 -mt-10">
          <div className="container mx-auto">
            <div className="animate-on-scroll mb-12 text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm font-inter font-semibold uppercase tracking-widest text-[#FBB03B]"
              >
                WHY CHOOSE US
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="container mt-5 font-inter text-3xl font-semibold text-[#4B485B] md:text-5xl md:max-w-5xl items-center justify-center mx-auto"
              >
                Exceptional Service from a Trusted Sri Lanka Travel Agency
              </motion.h2>
            </div>
            
            {/* 5 Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {homeData.whyChooseUs.map((item, index) => {
                const iconComponents = {
                  UserPen,
                  HeartHandshake,
                  Star,
                  ChartNoAxesCombined,
                  Languages
                };
                const IconComponent = iconComponents[item.icon as keyof typeof iconComponents];
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-white border rounded-full shadow-lg flex items-center justify-center">
                      <div className="w-12 h-12 bg-[#FBB03B]/40 rounded-full flex items-center justify-center">
                        <IconComponent className="text-[#FBB03B]" size={24} />
                      </div>
                    </div>
                    <h3 className="font-inter text-lg font-semibold text-[#423939] mb-2">{item.title}</h3>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-20 -mt-10">
          <div className="container mx-auto">
            <div className="animate-on-scroll mb-12 text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm font-inter font-semibold uppercase tracking-widest text-[#FBB03B]"
              >
                EXPLORE POPULAR PACKAGES
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="container mt-5 font-inter text-3xl font-semibold text-[#4B485B] md:text-5xl md:max-w-5xl items-center justify-center mx-auto"
              >
                What we offer is an Unforgettable Journey and Experience
              </motion.h2>
            </div>

            {/* Tabs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex justify-center gap-3 mb-10 animate-on-scroll flex-wrap"
            >
              {["All", "Ancient", "Heritage", "Hill"].map((tab, index) => (
                <motion.button
                  key={tab}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full text-sm font-inter font-semibold transition-colors border ${
                    activeTab === tab
                      ? "bg-[#FBB03B] text-white border-[#FBB03B]"
                      : "bg-transparent text-[#717171] border-border hover:border-[#717171] hover:text-primary"
                  }`}
                >
                  {tab}
                </motion.button>
              ))}
            </motion.div>

            {/* Tour Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {homeData.tours
                .filter((tour) => activeTab === "All" || tour.category === activeTab)
                .slice(0, typeof window !== 'undefined' && window.innerWidth >= 1024 ? 3 : typeof window !== 'undefined' && window.innerWidth >= 768 ? 4 : 3)
                .map((tour, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                  className="rounded-2xl overflow-hidden bg-white group shadow-sm animate-on-scroll"
                >
                  <div className="relative h-56 sm:h-60 overflow-hidden">
                    <img src={tour.img} alt={tour.title} className="h-full w-full object-cover transition-transform duration-500 rounded-2xl" />
                    {/* Rating badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1 bg-[#0C111F]/40 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1.5 rounded-full">
                      <Star size={12} className="text-[#FBB03B] fill-[#FBB03B]" />
                      {tour.rating}
                    </div>
                    {/* Duration badge */}
                    <div className="absolute bottom-3 right-3 bg-white/18 backdrop-blur-sm text-white text-xs font-inter font-semibold px-3 py-1.5 rounded-full border border-white/30">
                      {tour.duration}
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="text-base sm:text-lg font-semibold text-black mb-2">{tour.title}</h3>
                    <p className="text-[#7A7777] text-sm mb-4 font-inter font-medium">{tour.desc}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-[#0C111F]/60 font-inter font-medium">Price</p>
                        <span className="text-[#0C111F] font-inter font-bold text-lg">$ {tour.price}</span>
                      </div>
                      <button className="px-5 py-2 rounded-full text-sm font-inter font-semibold border border-[#717171] text-[#717171] hover:scale-105 transition-transform">
                        View More
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Explore More Button */}
            <div className="text-center animate-on-scroll">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2"
              >
                <Button className="rounded-full px-8 py-3 text-base font-inter font-semibold">
                  Explore More <ArrowRight size={14} className="ml-2" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Adventure */}
        <section className="py-16 md:py-20 -mt-10">
          <div className="container mx-auto">
            <div className="mb-12 grid gap-16 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="animate-on-scroll-left"
              >
                <span className="text-sm font-inter font-semibold uppercase tracking-widest text-[#FBB03B]">ADVENTURES</span>
                <h2 className="mt-5 font-inter text-3xl font-semibold text-[#4B485B] md:text-5xl">
                  Uncharted Expeditions Thrilling Adventures Await!
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                className="animate-on-scroll-right flex items-end"
              >
                <p className="text-sm md:text-md leading-relaxed text-[#7A7777] font-inter font-regular">
                  Uncharted Expeditions invites you to explore Sri Lanka’s hidden wonders through breathtaking landscapes and unforgettable adventures.
                </p>
              </motion.div>
            </div>

            {/* Adventure Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {homeData.adventures.map((adventure, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl"
                >
                  <div className="relative h-80 md:h-80 lg:h-[400px]">
                    <img 
                      src={adventure.image} 
                      alt={adventure.title} 
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                    <div className="absolute bottom-8 left-8 right-0">
                      <span className="text-white text-xs font-inter font-regular mb-2 uppercase">
                        {adventure.type}
                      </span>
                      <h3 className="mt-2 text-white text-lg font-inter font-semibold">{adventure.title}</h3>
                      <a href="#" className="inline-flex items-center text-white text-sm font-inter font-regular hover:text-[#FBB03B] transition-colors mt-2">
                        SEE MORE <ArrowRight size={14} className="ml-2" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/*  FAQ */}
        <section className="py-16 lg:py-20 -mt-10">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="grid lg:grid-cols-2 gap-10 items-start"
            >
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="animate-on-scroll-left lg:max-w-lg"
              >
                <p className="text-sm font-inter font-semibold uppercase tracking-widest text-[#FBB03B] mb-2">FAQ</p>
                <h2 className="mt-5 font-inter text-3xl font-semibold text-[#4B485B] md:text-5xl mb-5">
                  Frequently Asked Questions
                </h2>
                <p className="text-sm md:text-md text-[#7A7777] font-inter font-regular mt-6">
                  Click on any of the questions below to find answers that guide you through the booking process.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="space-y-3 animate-on-scroll-right"
              >
                {homeData.faqs.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left p-4 rounded-xl bg-white border border-[#7D7474]/85 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-md font-inter font-medium text-[#1E1E1E]">{q.question}</span>
                    </div>
                    {openFaq === i && (
                      <p className="mt-3 text-sm text-[#717171] font-inter font-regular">
                        {homeData.faqs[i].answer}
                      </p>
                    )}
                  </button>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-20 -mt-10">
          <div className="container mx-auto">
            <div className="animate-on-scroll mb-12 text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm font-inter font-semibold uppercase tracking-widest text-[#FBB03B]"
              >
                TESTIMONIALS
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="container mt-5 font-inter text-3xl font-semibold text-[#4B485B] md:text-5xl items-center justify-center mx-auto"
              >
                Your Trusted Partner in Travel
              </motion.h2>
            </div>
            <div className="relative">
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
              <div className="overflow-hidden mx-12">
                <div 
                  className="flex gap-4 md:gap-6 lg:gap-10 transition-transform duration-500 ease-in-out"
                  style={{ 
                    transform: `translateX(-${testimonialIndex * (100 / getVisibleCards() + 2 / getVisibleCards())}%)`
                  }}
                >
                  {homeData.testimonials.map((t, i) => (
                    <div key={i} className={`p-6 rounded-2xl bg-white border text-left animate-on-scroll transition-all duration-300 flex-shrink-0 w-[98%] md:w-[48%] lg:w-[31%] ${i === testimonialIndex ? "border-primary shadow-lg" : "border-border/20"}`}>
                      <div className="flex items-center gap-3 mb-4">
                        {t.profileImage ? (
                          <div className="h-12 w-12 rounded-full overflow-hidden">
                            <img 
                              src={t.profileImage} 
                              alt={t.name} 
                              className="h-full w-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="h-12 w-12 rounded-full bg-[#4B485B] flex items-center justify-center">
                            <span className="font-inter text-sm font-semibold text-white">{t.name[0]}</span>
                          </div>
                        )}
                        <div>
                          <p className="text-sm font-semibold text-card-foreground">{t.name}</p>
                          <div className="flex gap-1 mt-1">
                            {[...Array(5)].map((_, j) => (
                              <Star key={j} size={14} className="text-[#FBB03B] fill-[#FBB03B]" />
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-sm text-[#7D7474]/85 font-inter font-regular">&ldquo;{t.text}&rdquo;</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Started */}
        <section className="px-4 sm:px-6 lg:px-12 pb-8">
          <div className="max-w-8xl mx-auto relative h-[50vh] min-h-[500px] overflow-hidden rounded-[1.5rem]">
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1734279135077-0d3069b1dabf?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Ready background"
                fill
                className="object-cover"
                priority
              />
            </div>
        
            <div className="absolute inset-0 bg-black/30" />
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
                <h4 className="-mt-16 text-md md:text-lg text-white tracking-tight font-inter font-medium">
                  DO YOU NEED OUR HELP?
                </h4>
                <h1 className="mt-4 text-4xl md:text-6xl md:max-w-lg text-white tracking-tight drop-shadow-lg font-inter font-medium">
                  Contact us for Help or Information
                </h1>
                <p className="mt-8 animate-on-scroll mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white font-inter font-medium md:text-lg">
                  We provide through the button below
                </p>
                {/* Submit Bar */}
                <div className="absolute mt-10 left-0 right-0 mx-auto w-full max-w-xl px-4 z-30">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-0 bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl md:rounded-full p-3 sm:p-3 shadow-xl">

                    {/* Email Input */}
                    <div className="relative flex-1">
                      <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-white h-5 w-5" />
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full pl-12 pr-4 py-3 bg-transparent text-white placeholder-white caret-white"
                        style={{ 
                          outline: 'none', 
                          border: 'none', 
                          boxShadow: 'none',
                          WebkitAppearance: 'none',
                          MozAppearance: 'none',
                          appearance: 'none'
                        }}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button2 className="rounded-full px-12 py-2 text-base font-inter font-semibold">
                      Submit
                    </Button2>
                  </div>
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
