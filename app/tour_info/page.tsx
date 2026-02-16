'use client';

import React, { useState, useCallback, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { getTourById } from '../lib/toursData';

function TourInfoContent() {
  const searchParams = useSearchParams();
  const tourId = searchParams.get('id') || 'tour-1';

  // Get the tour by ID from URL parameter
  const tour = getTourById(tourId);

  // Gallery state
  const [galleryIndex, setGalleryIndex] = useState(0);

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
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#FBB03B] hidden lg:block" />

              <div className="space-y-8 sm:space-y-10">
                {tour.itinerary.map((day, i) => {
                  const isLeft = i % 2 === 0;
                  return (
                    <div
                      key={day.day}
                      className={`animate-on-scroll relative flex flex-col sm:flex-row items-center gap-4 lg:gap-0 ${
                        isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                      }`}
                    >
                      {/* Image */}
                      <div className="w-full sm:w-48 lg:w-5/12 flex-shrink-0">
                        <div className="rounded-xl overflow-hidden aspect-[4/3] shadow-lg">
                          <img
                            src={day.images[0]}
                            alt={day.location}
                            className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>

                      {/* Day label (center on lg) */}
                      <div className="lg:w-2/12 flex flex-col items-center justify-center z-10">
                        <div className="bg-primary/10 border border-primary/30 rounded-lg px-3 py-2 text-center">
                          <span className="text-primary text-xs font-semibold uppercase tracking-wider block">
                            DAY {day.day}
                          </span>
                          <span className="font-heading text-base font-bold text-foreground">
                            {day.location}
                          </span>
                        </div>
                      </div>

                      {/* Spacer for alternating layout */}
                      <div className="hidden lg:block lg:w-5/12" />
                    </div>
                  );
                })}
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