'use client';

import React, { useState, useCallback, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { format } from 'date-fns';
import { ChevronLeft, ChevronRight, ChevronDown, CalendarIcon, Users, MessageSquare, Mail } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { getTourById } from '../lib/toursData';
import { Popover, PopoverTrigger, PopoverContent } from '../components/ui/Popover';
import { Button } from '../components/ui/Button';
import { Calendar } from '../components/ui/Calendar';
import { cn } from '../lib/utils';
import Image from 'next/image';

function TourInfoContent() {
  const [checkIn, setCheckIn] = useState<Date | undefined>(undefined);
  const [checkOut, setCheckOut] = useState<Date | undefined>(undefined);
  const [guests, setGuests] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');
  const [galleryIndex, setGalleryIndex] = useState(0);

  const searchParams = useSearchParams();
  const tourId = searchParams.get('id') || 'tour-1';

  // Get the tour by ID from URL parameter
  const tour = getTourById(tourId);

  const nextGallery = useCallback(() => {
    if (!tour) return;
    setGalleryIndex((i) => (i + 1) % tour.galleryImages.length);
  }, [tour]);

  const prevGallery = useCallback(() => {
    if (!tour) return;
    setGalleryIndex((i) => (i - 1 + tour.galleryImages.length) % tour.galleryImages.length);
  }, [tour]);

  if (!tour) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <p className="text-xl text-gray-600">Tour not found</p>
      </div>
    );
  }

  return (
    <main>
      {/* Hero */}
      <section className="mt-4 px-4 sm:px-6 lg:px-12">
        <div className="max-w-8xl mx-auto relative h-[60vh] md:min-h-[740px] lg:min-h-[680px] overflow-hidden rounded-[1.5rem]">
          {/* Background image – transitions on active card */}
          {tour.galleryImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={tour.title}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === galleryIndex ? "opacity-100" : "opacity-0"
                }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

          {/* Headline */}
          <div className="relative z-10 container mx-auto px-4 lg:px-8 pb-6 sm:pb-8">
            <h1 className="mt-32 md:max-w-4xl ml-10 text-5xl md:text-8xl text-white tracking-tight drop-shadow-lg" style={{ fontFamily: "'Abhaya Libre', serif", fontWeight: 800 }}>
              {tour.title}
            </h1>
          </div>

          {/* Horizontal scrollable cards */}
          <div className="relative z-10 container mx-auto px-4 lg:px-8 pb-8 sm:pb-12">
            <div className="flex items-center gap-4">
              {/* Cards container */}
              <div className="flex-1 relative max-w-[180px] md:max-w-sm lg:max-w-xl xl:max-w-4xl">
                {/* Prev button - only show if more cards than visible */}
                {tour.galleryImages.length > 1 && (
                  <button
                    onClick={prevGallery}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white text-[#FBB03B] shadow-lg hover:bg-white/90 transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={18} />
                  </button>
                )}

                {/* Cards container — 1 visible on mobile, 2 on md, 4 on lg+ */}
                <div className={`overflow-hidden w-full ${tour.galleryImages.length > 1 ? 'mx-10 md:mx-12' : 'mx-0'}`}>
                  <style>{`
                    @media (min-width: 768px) and (max-width: 1023px) {
                      .hero-gallery-track {
                        transform: translateX(calc(-${Math.floor(galleryIndex / 2)} * (100% + 12px))) !important;
                      }
                    }
                    @media (min-width: 1024px) {
                      .hero-gallery-track {
                        transform: translateX(calc(-${Math.floor(galleryIndex / 4)} * (100% + 12px))) !important;
                      }
                    }
                  `}</style>
                  <div
                    className={`hero-gallery-track flex gap-3 transition-transform duration-500 ease-out ${tour.galleryImages.length <= 1 ? 'justify-center' : ''}`}
                    style={{
                      transform: tour.galleryImages.length > 1 
                        ? `translateX(calc(-${galleryIndex} * (100% + 12px)))`
                        : 'none',
                    }}
                  >
                    {tour.galleryImages.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setGalleryIndex(i)}
                        className={`flex-shrink-0 w-full md:w-[calc(50%-6px)] lg:w-[calc(25%-9px)] aspect-[3/4] rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${
                          i === galleryIndex
                            ? "scale-[1.02] shadow-xl"
                            : "opacity-100 hover:opacity-90"
                          }`}
                      >
                        <img
                          src={img}
                          alt={`Gallery ${i + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Next button - only show if more cards than visible */}
                {tour.galleryImages.length > 1 && (
                  <button
                    onClick={nextGallery}
                    className="absolute -right-20 md:-right-24 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white text-[#FBB03B] shadow-lg hover:bg-white/90 transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight size={18} />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Price info - positioned independently at right corner of background image */}
          <div className="absolute bottom-8 right-8 z-20">
            <div className="bg-transparent rounded-xl p-4">
              <div className="text-center md:text-left">
                <span className="font-inter text-sm md:text-2xl font-semibold text-white block mb-1">
                  {tour.duration}
                </span>
                <div className="flex items-baseline justify-center md:justify-start">
                  <span className="font-inter text-xl md:text-3xl font-semibold text-white">
                    ${tour.pricePerNight}
                  </span>
                  <span className="text-white text-sm md:text-lg font-inter font-medium ml-1"> / Night</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ===== PACKAGE OVERVIEW + ITINERARY ===== */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left: Overview + Policies */}
            <div>
              <h2 className="font-inter text-3xl font-semibold text-[#4B485B] md:text-5xl mb-6">
                Package Overview
              </h2>
              {tour.overview.map((p, i) => (
                <p
                  key={i}
                  className="text-md text-[#7A7777] leading-relaxed font-inter font-regular mb-4"
                >
                  {p}
                </p>
              ))}

              <h2 className="mt-12 font-inter text-3xl font-semibold text-[#4B485B] md:text-5xl mb-6">
                Additional Details And Policies
              </h2>

              <div className="space-y-5 animate-on-scroll">
                <div>
                  <h4 className="font-inter font-semibold text-[#423939] text-xl mb-1">Travel Validity</h4>
                  <p className="text-md text-[#7A7777] leading-relaxed font-inter font-regular">{tour.policies.travelValidity}</p>
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-[#423939] text-xl mb-1">Easy Cancellation</h4>
                  <p className="text-md text-[#7A7777] leading-relaxed font-inter font-regular">
                    {tour.policies.cancellation}
                  </p>
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-[#423939] text-xl mb-1">Guaranteed Dates</h4>
                  <p className="text-md text-[#7A7777] leading-relaxed font-inter font-regular">{tour.policies.guaranteedDates}</p>
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-[#423939] text-xl mb-1">Booking Policy</h4>
                  {tour.policies.bookingPolicy.map((bp, i) => (
                    <p key={i} className="text-md text-[#7A7777] leading-relaxed font-inter font-regular mb-2">
                      {bp}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Day-by-day Itinerary */}
            <div className="relative">
              {/* Vertical timeline line */}
              <div 
                className="absolute left-1/2 top-0 w-0.5 bg-[#FBB03B]" 
                style={{ 
                  height: `${((tour.itinerary.length + 0.1) / tour.itinerary.length) * 100}%` 
                }} 
              />

              <div className="space-y-6 sm:space-y-12 md:space-y-6">
                {tour.itinerary.map((day, i) => {
                  const isLeft = i % 2 === 0;
                  return (
                    <div
                      key={day.day}
                      className="animate-on-scroll relative"
                    >
                      {/* Timeline dot */}
                      <div className="flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="h-5 w-5 rounded-full bg-[#FBB03B] shadow-lg shadow-[#FBB03B]/40" />
                      </div>

                      <div className={`flex items-center ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
                        {/* Images + Day label side */}
                        <div className={`w-[45%] ${isLeft ? "pr-0" : "pl-0"} flex ${isLeft ? "justify-end" : "justify-start"} items-center gap-2`}>
                          <div className={`relative w-fit ${isLeft ? "order-1" : "order-2"}`}>
                            {/* Large image */}
                            <div className="w-28 h-28 rounded-xl overflow-hidden shadow-xl">
                              <img
                                src={day.images[0]}
                                alt={day.location}
                                className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                            {/* Small image - overlapping */}
                            <div className={`absolute -bottom-6 sm:-bottom-8 ${isLeft ? "-right-8 sm:-right-10" : "-left-8 sm:-left-10"} w-20 h-20 rounded-xl overflow-hidden shadow-xl`}>
                              <img
                                src={day.images[1] || day.images[0]}
                                alt={`${day.location} detail`}
                                className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          </div>
                          
                          {/* Day label */}
                          <div className={`-mt-16 ${isLeft ? "text-left order-2" : "text-left order-1"}`}>
                            <span className="text-[#FBB03B] text-xs sm:text-sm font-inter font-regular uppercase tracking-widest block">
                              DAY {day.day}
                            </span>
                            <span className="text-md lg:text-lg font-inter font-semibold text-[#423939]">
                              {day.location}
                            </span>
                          </div>
                        </div>

                        {/* Center spacer for timeline */}
                        <div className="block w-[10%]" />

                        {/* Empty side */}
                        <div className="w-[45%]" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT'S INCLUDED ===== */}
      <section className="py-12 sm:py-16 bg-[#D9D9D9] relative">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1501446529957-6226bd447c46?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" />
        </div>

        <div className="container mx-auto relative z-10">
          <h2 className="font-inter text-3xl font-semibold text-white md:text-5xl mb-6">
            What's Included
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-10 text-center">
            {tour.included.map((item, i) => {
              return (
                <div
                  key={i}
                  className="mt-4 p-5 sm:p-6 rounded-2xl bg-white/10 backdrop-blur border border-white/40 animate-on-scroll-scale"
                >
                  <h4 className="font-inter text-sm md:text-lg font-semibold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs md:text-sm text-white leading-relaxed font-inter font-regular">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== BOOKING FORM + MAP ===== */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-8xl mx-auto relative h-[60vh] md:min-h-[740px] lg:min-h-[680px] overflow-hidden rounded-[1.5rem]">
          {/* Booking bg */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1558925149-65d296f8c9a9?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Hero background"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Booking Info */}
          <div className="container mx-auto relative z-10 h-full">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start h-full">
              {/* Booking Form */}
              <div className="bg-secondary rounded-2xl p-6 sm:p-8 animate-on-scroll-left">
                <h2 className="font-inter text-3xl md:text-5xl font-medium text-white mb-6">
                  Want to Join Us?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {/* Check-in */}
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="flex items-center gap-3 w-full rounded-lg bg-card/40 border border-border/20 px-4 py-3 text-left hover:border-primary/40 transition-colors">
                        <CalendarIcon size={18} className="text-primary shrink-0" />
                        <div>
                          <span className="text-xs text-white font-inter font-medium block">Check-in</span>
                          <span className="text-sm text-white font-inter font-regular">
                            {checkIn ? format(checkIn, "MM/dd/yyyy") : "Select date"}
                          </span>
                        </div>
                        <ChevronDown size={14} className="text-muted-foreground ml-auto" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 z-50" align="start">
                      <Calendar
                        mode="single"
                        selected={checkIn}
                        onSelect={(date) => setCheckIn(Array.isArray(date) ? date[0] : date)}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>

                  {/* Check-out */}
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="flex items-center gap-3 w-full rounded-lg bg-card/40 border border-border/20 px-4 py-3 text-left hover:border-primary/40 transition-colors">
                        <CalendarIcon size={18} className="text-primary shrink-0" />
                        <div>
                          <span className="text-xs text-muted-foreground block">Check-out</span>
                          <span className="text-sm text-secondary-foreground font-medium">
                            {checkOut ? format(checkOut, "MM/dd/yyyy") : "Select date"}
                          </span>
                        </div>
                        <ChevronDown size={14} className="text-muted-foreground ml-auto" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 z-50" align="start">
                      <Calendar
                        mode="single"
                        selected={checkOut}
                        onSelect={(date) => setCheckOut(Array.isArray(date) ? date[0] : date)}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Guests */}
                <div className="flex items-center gap-3 w-full rounded-lg bg-card/40 border border-border/20 px-4 py-3 mb-4">
                  <Users size={18} className="text-primary shrink-0" />
                  <div>
                    <span className="text-xs text-muted-foreground block">Guests</span>
                    <input
                      type="text"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="text-sm text-secondary-foreground font-medium bg-transparent outline-none w-full"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 w-full rounded-lg bg-card/40 border border-border/20 px-4 py-3 mb-4">
                  <Mail size={18} className="text-primary shrink-0" />
                  <div className="flex-1">
                    <span className="text-xs text-muted-foreground block">Email</span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="text-sm text-secondary-foreground font-medium bg-transparent outline-none w-full placeholder:text-muted-foreground"
                    />
                  </div>
                </div>

                {/* Note */}
                <div className="flex items-start gap-3 w-full rounded-lg bg-card/40 border border-border/20 px-4 py-3 mb-6">
                  <MessageSquare size={18} className="text-primary shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="text-xs text-muted-foreground block">Note</span>
                    <textarea
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="Any special message?"
                      rows={2}
                      className="text-sm text-secondary-foreground font-medium bg-transparent outline-none w-full resize-none placeholder:text-muted-foreground"
                    />
                  </div>
                </div>

                {/* Price + Enquire */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="font-heading text-2xl font-bold text-primary">
                      {tour.pricePerNight}
                    </span>
                    <span className="text-muted-foreground text-sm"> / Night</span>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block">Total Price</span>
                    <span className="font-heading text-xl font-bold text-secondary-foreground">
                      {tour.price}
                    </span>
                  </div>
                </div>
                <Button className="w-full rounded-full text-base py-6">Enquire</Button>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg animate-on-scroll-right h-[400px] sm:h-[500px] lg:h-full lg:min-h-[550px]">
                <iframe
                  title="Sri Lanka Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2025938.522792887!2d79.38588715!3d7.8731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593cf65a1e9d%3A0xe13da4b400e2d38c!2sSri%20Lanka!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    );
}

export default function TourInfoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Suspense fallback={
        <div className="flex items-center justify-center h-[60vh]">
          <p className="text-xl text-gray-600">Loading...</p>
        </div>
      }>
        <TourInfoContent />
      </Suspense>
      <Footer />
    </div>
  );
}