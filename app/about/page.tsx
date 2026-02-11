'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { aboutData } from '../lib/aboutData';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      <main>
        {/* Hero */}
        <section className="mt-4 px-4 sm:px-6 lg:px-12">
          <div className="max-w-8xl mx-auto relative h-[50vh] min-h-[500px] overflow-hidden rounded-[1.5rem]">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
              backgroundImage: `url('https://plus.unsplash.com/premium_photo-1687653078299-ae7fc1453bc4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
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
                  className="max-w-4xl mx-auto"
                >
                  <h1 className="mt-10 text-5xl md:text-8xl text-white tracking-tight drop-shadow-lg" style={{ fontFamily: "'Abhaya Libre', serif", fontWeight: 800 }}>
                    YOUR JOURNEY
                    <br />
                    <span className="block mt-2">OUR PASSION</span>
                  </h1>
                  <p className="mt-8 animate-on-scroll mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white font-inter font-medium sm:text-base md:text-xl">
                    Discover the inspiring story behind Ceylon My Dream a place where travel dreams come true, unforgettable journeys begin and every destination holds a new adventure waiting
                  </p>
                </motion.div>
              </div>
            </div>
        </section>

        {/* Get To Know About Us */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-12">
          <div className="grid items-start gap-10 lg:grid-cols-2">
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
                Get To Know About Us
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-5 font-inter text-3xl font-semibold text-[#4B485B] md:text-5xl"
              >
                A Collective of Passionate Minds Driven by Purpose
              </motion.h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="space-y-8"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-sm md:text-md leading-relaxed text-[#7A7777] font-inter font-regular"
              >
                Travel is more than visiting new places. It&apos;s about creating stories that stay with you forever. At Ceylon My Dream, we turn every journey into an unforgettable experience. From the very beginning, our mission has been to craft personalized trips that celebrate culture, adventure and connection.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex gap-16 md:gap-32"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="font-inter font-semibold text-4xl font-bold text-foreground block"
                  >
                    {aboutData.stats.customerSatisfaction}
                  </motion.span>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    className="mt-1 text-md font-inter font-medium text-[#625F5F]"
                  >
                    Customer Satisfaction
                  </motion.p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    className="font-inter font-semibold text-4xl font-bold text-foreground block"
                  >
                    {aboutData.stats.travelExperts}
                  </motion.span>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="mt-1 text-md font-inter font-medium text-[#625F5F]"
                  >
                    Travel Experts
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Partners Strip */}
        <section className="relative py-12 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1424581342241-2b1aba4d3462?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            }}
          />
          <div className="absolute inset-0 bg-black/5" />
          <div className="relative">
            <motion.div 
              className="flex items-center gap-36 px-4 lg:gap-36"
              animate={{
                x: [0, -1920] // Adjust based on total width
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {[...aboutData.partners, ...aboutData.partners].map((partner, index) => (
                <div key={`${partner.name}-${index}`} className="flex items-center gap-2 opacity-70 flex-shrink-0">
                  <div className="flex h-8 w-8 items-center justify-center">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="h-16 w-auto object-contain scale-[4]"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

      </main>

      {/* Footer*/}
      <Footer />
    </div>
  );
}