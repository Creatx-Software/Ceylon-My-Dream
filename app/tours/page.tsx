'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Star, Search, Filter, ChevronDown, ArrowUpDown } from 'lucide-react';
import { tourData } from '../lib/toursData';

export default function TourstPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showDefaultDropdown, setShowDefaultDropdown] = useState(false);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [selectedSort, setSelectedSort] = useState('A-Z');
  const [selectedFilter, setSelectedFilter] = useState('Popular');

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
              backgroundImage: `url('https://images.unsplash.com/photo-1754966543433-637028f632e4?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
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
              className="max-w-4xl mx-auto mt-10"
            >
              <h1 className="text-5xl md:text-8xl text-white tracking-tight drop-shadow-lg" style={{ fontFamily: "'Abhaya Libre', serif", fontWeight: 800 }}>
                TOUR PACKAGES
              </h1>
              <p className="mt-8 animate-on-scroll mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white font-inter font-medium sm:text-base md:text-xl">
                Where travel dreams take flight and unforgettable stories begin. Explore our curated tours and find the adventure you’ve been waiting for.
              </p>
            </motion.div>
          </div>
          </div>
        </section>
      </main>

      {/* Packages*/}
      <section className="py-12 md:py-12">
        <div className="container mx-auto">
          {/* Header and Controls */}
          <div className="flex flex-col md:flex-row justify-between items-start lg:items-center gap-6 mb-10">
            {/* Left Side - Tabs */}
            <div className="flex-1">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-inter text-3xl font-semibold text-[#4B485B] md:text-5xl mb-6"
              >
                Our Tour Packages
              </motion.h2>
              
              {/* Tabs */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex gap-3 animate-on-scroll flex-wrap"
              >
                {["All", "Ancient", "Heritage", "Hill"].map((tab, index) => (
                  <motion.button
                    key={tab}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    onClick={() => setActiveTab(tab)}
                    className={`mt-5 px-6 py-2 rounded-full text-sm font-inter font-semibold transition-colors border ${
                      activeTab === tab
                        ? "bg-[#FBB03B] text-white border-[#FBB03B]"
                        : "bg-transparent text-[#717171] border-border hover:border-[#717171] hover:text-primary"
                    }`}
                  >
                    {tab}
                  </motion.button>
                ))}
              </motion.div>
            </div>

            {/* Right Side - Search and Dropdowns */}
            <div className="lg:w-2/5 md:mt-5">
              {/* Search Bar */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative mb-4"
              >
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7D7474]/85 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search tours..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-[#7D7474]/30 rounded-lg text-[#4B485B] placeholder-[#7D7474]/60 focus:outline-none focus:ring-2 focus:ring-[#FBB03B] focus:border-transparent transition-all"
                />
              </motion.div>

              {/* Dropdowns */}
              <div className="flex gap-3">
                {/* Default Dropdown */}
                <div className="relative flex-1">
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    onClick={() => setShowDefaultDropdown(!showDefaultDropdown)}
                    className="w-full flex items-center justify-between px-4 py-3 bg-white border border-[#7D7474]/30 rounded-lg text-[#4B485B] font-inter font-semibold hover:bg-[#FBB03B] hover:text-white hover:border-[#FBB03B] transition-all"
                  >
                    
                    <div className="flex items-center gap-2">
                      <ArrowUpDown size={20} />
                      Default
                    </div>
                    <ChevronDown size={20} className={`transition-transform ${showDefaultDropdown ? 'rotate-180' : ''}`} />
                  </motion.button>
                  
                  {showDefaultDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#7D7474]/30 rounded-xl shadow-lg z-10">
                      <div className="p-2">
                        {['A-Z', 'Z-A', 'Price: Low to High', 'Price: High to Low'].map((option) => (
                          <button 
                            key={option}
                            onClick={() => {
                              setSelectedSort(option);
                              setShowDefaultDropdown(false);
                            }}
                            className={`w-full text-left px-4 py-2 text-[#4B485B] hover:bg-[#FBB03B]/10 rounded-lg transition-colors ${selectedSort === option ? 'bg-[#FBB03B]/20' : ''}`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Filter Dropdown */}
                <div className="relative flex-1">
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                    className="w-full flex items-center justify-between px-4 py-3 bg-white border border-[#7D7474]/30 rounded-lg text-[#4B485B] font-inter font-semibold hover:bg-[#FBB03B] hover:text-white hover:border-[#FBB03B] transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <Filter size={20} />
                      Filters
                    </div>
                    <ChevronDown size={20} className={`transition-transform ${showFilterDropdown ? 'rotate-180' : ''}`} />
                  </motion.button>
                  
                  {showFilterDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#7D7474]/30 rounded-xl shadow-lg z-10">
                      <div className="p-2">
                        {['Popular', 'Rating', 'Duration', 'Price Range'].map((option) => (
                          <button 
                            key={option}
                            onClick={() => {
                              setSelectedFilter(option);
                              setShowFilterDropdown(false);
                            }}
                            className={`w-full text-left px-4 py-2 text-[#4B485B] hover:bg-[#FBB03B]/10 rounded-lg transition-colors ${selectedFilter === option ? 'bg-[#FBB03B]/20' : ''}`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Tour Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourData.tours
              .filter((tour) => activeTab === "All" || tour.category === activeTab)
              .filter((tour) => tour.title.toLowerCase().includes(searchTerm.toLowerCase()))
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
                      <button 
                        onClick={() => router.push(`/tour_info?id=${tour.id}`)}
                        className="px-5 py-2 rounded-full text-sm font-inter font-semibold border border-[#717171] text-[#717171] hover:scale-105 transition-transform"
                      >
                        View More
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
      
      {/* ─── FOOTER ─── */}
      <Footer />
    </div>
  );
}