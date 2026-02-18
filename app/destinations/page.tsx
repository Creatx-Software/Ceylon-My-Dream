'use client';

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Search, List, LayoutGrid, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import {
  destinationsData,
  destinationTabs,
  type Destination,
} from '../lib/destinationsData';

export default function DestinationsPage() {
    const [activeTab, setActiveTab] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredDestinations = useMemo(() => {
    let result = [...destinationsData];

    if (activeTab !== 'All') {
      result = result.filter((dest) => dest.category === activeTab);
    }

    const normalizedSearch = searchTerm.trim().toLowerCase();
    if (normalizedSearch) {
      result = result.filter((dest) =>
        dest.name.toLowerCase().includes(normalizedSearch) ||
        dest.category.toLowerCase().includes(normalizedSearch)
      );
    }

    result.sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [activeTab, searchTerm]);

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
                                backgroundImage: `url('https://images.unsplash.com/photo-1653959747793-c7c3775665f0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
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
                                    DESTINATIONS
                                </h1>
                                <p className="mt-8 animate-on-scroll mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white font-inter font-medium sm:text-base md:text-xl">
                                    Your island escape, perfectly scripted. From heritage ruins to wild horizons, let us guide you through the heart of Sri Lanka.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ─── DESTINATIONS / TOUR PACKAGES ─── */}
                <section className="py-12 md:py-16">
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
                                    Popular Destinations
                                </motion.h2>

                                {/* Tabs */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="flex gap-3 animate-on-scroll flex-wrap"
                                >
                                    {destinationTabs.map((tab, index) => (
                                        <motion.button
                                            key={tab}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                                            onClick={() => setActiveTab(tab)}
                                            className={`mt-5 px-6 py-2 rounded-full text-sm font-inter font-semibold transition-colors border ${activeTab === tab
                                                ? "bg-[#FBB03B] text-white border-[#FBB03B]"
                                                : "bg-transparent text-[#717171] border-border hover:border-[#717171] hover:text-primary"
                                                }`}
                                        >
                                            {tab}
                                        </motion.button>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Right Side - Search and View Toggle */}
                            <div className="lg:w-2/5 md:mt-5 w-full md:w-auto">
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
                                        placeholder="Search destinations..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 bg-white border border-[#7D7474]/30 rounded-lg text-[#4B485B] placeholder-[#7D7474]/60 focus:outline-none focus:ring-2 focus:ring-[#FBB03B] focus:border-transparent transition-all"
                                    />
                                </motion.div>

                                <div className="flex gap-3 lg:gap-6">
                                  <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    onClick={() => setViewMode('grid')}
                                    className={`flex-1 flex items-center justify-center gap-2 lg:gap-6 px-4 py-3 rounded-lg font-inter font-semibold transition-all ${viewMode === 'grid'
                                      ? 'bg-[#FBB03B] text-white border border-[#FBB03B]'
                                      : 'bg-white text-[#4B485B] border border-[#7D7474]/30 hover:bg-[#FBB03B] hover:text-white hover:border-[#FBB03B]'
                                      }`}
                                  >
                                    <LayoutGrid size={20} />
                                    Grid View
                                  </motion.button>

                                  <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    onClick={() => setViewMode('list')}
                                    className={`flex-1 flex items-center justify-center gap-2 lg:gap-6 px-4 py-3 rounded-lg font-inter font-semibold transition-all ${viewMode === 'list'
                                      ? 'bg-[#FBB03B] text-white border border-[#FBB03B]'
                                      : 'bg-white text-[#4B485B] border border-[#7D7474]/30 hover:bg-[#FBB03B] hover:text-white hover:border-[#FBB03B]'
                                      }`}
                                  >
                                    <List size={20} />
                                    List View
                                  </motion.button>
                                </div>

                            </div>
                        </div>

                            {filteredDestinations.length === 0 ? (
                              <div className="rounded-2xl border border-border bg-card p-10 text-center text-muted-foreground font-inter">
                                No destinations found for current filters.
                              </div>
                            ) : viewMode === 'grid' ? (
                              <MasonryGrid destinations={filteredDestinations} />
                            ) : (
                              <ListView destinations={filteredDestinations} />
                            )}
                    </div>
                </section>
            </main>

            {/* ─── FOOTER ─── */}
            <Footer />
        </div>
    );
}

const sizePattern: Array<"sm" | "md" | "lg"> = [
  "sm", "md",       
  "sm", "sm", "lg", 
  "md", "lg", "sm",     
  "sm", "sm", "sm", 
  "md", "sm", "lg", 
  "sm", "sm",     
  "md",
];

/* ============ MASONRY GRID ============ */
const MasonryGrid = ({ destinations }: { destinations: Destination[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px] sm:auto-rows-[220px] lg:auto-rows-[340px]">
      {destinations.map((dest, i) => {
        const size = sizePattern[i % sizePattern.length];
        let spanClass = "";
        if (size === "md") spanClass = "sm:col-span-2";
        if (size === "lg") spanClass = "sm:row-span-2";

        return (
          <DestinationCard key={dest.id} dest={dest} className={spanClass} />
        );
      })}
    </div>
  );
};

/* ============ DESTINATION CARD ============ */
const DestinationCard = ({
  dest,
  className = "",
}: {
  dest: Destination;
  className?: string;
}) => {
  return (
    <motion.div
      className={`relative rounded-2xl overflow-hidden group animate-on-scroll-scale cursor-pointer ${className}`}
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <img
        src={dest.img}
        alt={dest.name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0" />
      <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/20 backdrop-blur-md rounded-xl">
        <h3 className="text-white text-xl font-inter font-medium">
            {dest.name}
        </h3>
        <Link
            href={`/destination_info?id=${dest.id}`}
            className="inline-flex items-center text-white text-xs font-inter font-regular hover:text-[#FBB03B] transition-colors mt-2"
        >
            SEE MORE <ArrowRight size={14} className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};

/* ============ LIST VIEW ============ */
const ListView = ({ destinations }: { destinations: Destination[] }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {destinations.map((dest) => (
        <motion.div
          key={dest.id}
          className="flex flex-row gap-4 rounded-2xl overflow-hidden bg-card group animate-on-scroll"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative w-32 sm:w-64 h-32 sm:h-auto flex-shrink-0 overflow-hidden rounded-2xl">
            <img
              src={dest.img}
              alt={dest.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          {/* label */}
          <div className="flex flex-col justify-center p-5">
            <h3 className="font-inter text-xl font-medium text-black mb-1">
              {dest.name}
            </h3>
            <span className="text-xs text-black font-inter font-regular uppercase tracking-wider mb-3">
              {dest.category}
            </span>
            <Link
              href={`/destination_info?id=${dest.id}`}
              className="inline-flex items-center gap-1 text-black text-sm font-inter font-regular uppercase tracking-wider hover:text-[#FBB03B] transition-colors mt-auto"
            >
              See More <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};