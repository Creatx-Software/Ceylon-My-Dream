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
    <>
        <main>
          {/* Hero */}
          <section className="mt-4 px-4 sm:px-6 lg:px-12">
            <div className="max-w-8xl mx-auto relative h-[50vh] min-h-[600px] overflow-hidden rounded-[1.5rem]">
              {/* Background image – transitions on active card */}
              {tour.galleryImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={tour.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  i === galleryIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

                {/* Headline */}
                <h1 className="mt-32 md:max-w-4xl ml-10 text-5xl md:text-8xl text-white tracking-tight drop-shadow-lg" style={{ fontFamily: "'Abhaya Libre', serif", fontWeight: 800 }}>
                  {tour.title}
                </h1>
                

                {/* Horizontal scrollable cards */}
                <div className="relative z-10 container mx-auto px-4 lg:px-8 pb-6 sm:pb-8">
                  <div className="relative flex items-center">
                    {/* Prev button */}
                    <button
                      onClick={prevGallery}
                      className="absolute -left-1 sm:left-0 z-20 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={18} />
                    </button>

                    {/* Cards container — 1 visible on mobile, 4 on md+ */}
                    <div className="mx-10 sm:mx-12 overflow-hidden w-full">
                      <style>{`
                        @media (min-width: 768px) {
                        .hero-gallery-track {
                        transform: translateX(calc(-${galleryIndex} * (25% + 2.25px))) !important;
                        }
                      }
                    `}</style>
                    <div
                      className="hero-gallery-track flex gap-3 transition-transform duration-500 ease-out"
                      style={{
                        transform: `translateX(calc(-${galleryIndex} * (100% + 12px)))`,
                      }}
                    >
                    {tour.galleryImages.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setGalleryIndex(i)}
                        className={`flex-shrink-0 w-full md:w-[calc(25%-9px)] aspect-[4/3] rounded-xl overflow-hidden transition-all duration-300 cursor-pointer ${
                        i === galleryIndex
                        ? "ring-2 ring-primary scale-[1.02] shadow-xl"
                        : "opacity-60 hover:opacity-90"
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

                {/* Next button */}
                <button
                  onClick={nextGallery}
                  className="absolute -right-1 sm:right-0 z-20 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Price info */}
            <div className="flex justify-end mt-4 gap-4 items-baseline">
                <span className="font-heading text-lg sm:text-xl font-bold text-primary-foreground/80">
                  {tour.duration}
                </span>
                <div>
                  <span className="font-heading text-2xl sm:text-3xl font-bold text-primary">
                    {tour.pricePerNight}
                  </span>
                  <span className="text-primary-foreground/70 text-sm"> / Night</span>
                </div>
              </div>
            </div>
          </section>
        </main>
    </>
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