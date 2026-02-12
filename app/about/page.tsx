'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { aboutData } from '../lib/aboutData';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../components/ui/Button';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      <main>
        {/* Hero */}
        <section className="mt-4 px-4 sm:px-6 lg:px-12">
          <div className="max-w-8xl mx-auto relative h-[50vh] min-h-[500px] overflow-hidden rounded-[1.5rem]">
            <div className="absolute inset-0">
              <Image
                src="https://plus.unsplash.com/premium_photo-1687653078299-ae7fc1453bc4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Hero background"
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
                className="max-w-4xl mx-auto"
              >
                <h1 className="mt-10 text-5xl md:text-8xl text-white tracking-tight drop-shadow-lg" style={{ fontFamily: "'Abhaya Libre', serif", fontWeight: 800 }}>
                  YOUR JOURNEY
                  <br />
                  <span className="block mt-2">OUR PASSION</span>
                </h1>
                <p className="mt-8 animate-on-scroll mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white font-inter font-medium sm:text-base md:text-xl">
                  Discover the inspiring story behind Ceylon My Dream, a place where travel dreams come true, unforgettable journeys begin, and every destination holds a new adventure waiting
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Get To Know About Us */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-12">
          <div className="container mx-auto grid items-start gap-16 lg:grid-cols-2">
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
                Travel is more than visiting new places. It&#39;s about creating stories that stay with you forever. At Ceylon My Dream, we turn every journey into an unforgettable experience. From the very beginning, our mission has been to craft personalized trips that celebrate culture, adventure and connection.
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
            className="absolute inset-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1424581342241-2b1aba4d3462?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Partners background"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/5" />
          <div className="relative">
            <motion.div 
              className="flex items-center gap-36 px-4 lg:gap-36"
              whileInView={{
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
                    <Image 
                      src={partner.logo} 
                      alt={partner.name}
                      width={64}
                      height={64}
                      className="object-contain scale-[4]"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why We Stand Out */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-12">
          <div className="container mx-auto">
            <div className="animate-on-scroll mb-12 text-center">
              <span className="text-sm font-inter font-semibold uppercase tracking-widest text-[#FBB03B]">Why We Stand Out</span>
              <h2 className="container mt-5 font-inter text-3xl font-semibold text-[#4B485B] md:text-5xl md:max-w-4xl items-center justify-center mx-auto">
                Discover the Heart of Sri Lanka with Service You Can Rely On
              </h2>
            </div>
          
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
              {/* Split 1: 1st Image */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden rounded-2xl h-[560px]"
              >
                <Image
                  src="https://images.unsplash.com/photo-1755099342998-9ce9af7cd9e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Sri Lanka Tea Plantation"
                  fill
                  className="object-cover"
                />
              </motion.div>
              
              {/* Split 2: 1st Paragraph, 2nd Image, Last Paragraph */}
              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-black leading-relaxed font-inter font-regular text-justify between"
                >
                  At Ceylon My Dream, travelers discover more than just a destination â€” they uncover the true essence of Sri Lanka. As a trusted Sri Lanka travel agency, we open doors to unforgettable memories, authentic encounters, and meaningful moments that stay with you long after the journey ends.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative overflow-hidden rounded-2xl h-[230px]"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1526786397950-a1cda63d1ab2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Sri Lanka Beach Resort"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-black leading-relaxed font-inter font-regular text-justify between"
                >
                  No matter your travel style, you&apos;ll find yourself immersed in Sri Lanka&apos;s rich culture, vibrant landscapes, and local charm. Whether you&apos;re seeking quiet reflection, cultural depth, or pure adventureâ€”your journey with Ceylon My Dream becomes a personal story worth telling.
                </motion.p>
              </div>
              
              {/* Split 3: 2nd Paragraph */}
              <div className="flex items-center justify-center mt-0 h-full">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-[#7A7777] leading-relaxed font-inter font-regular text-justify between"
                >
                  Moreover, our deep local knowledge means you don&apos;t just see the sights â€” you experience the soul of the island. From wandering through ancient cities and lush tea plantations to witnessing wildlife in their natural habitat and relaxing on secluded coastal shores, every moment feels curated just for you.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-12 -mt-10">
          <div className="container mx-auto">
            <div className="mb-12 grid gap-16 lg:grid-cols-2">
              <div className="animate-on-scroll-left">
                <span className="text-sm font-inter font-semibold uppercase tracking-widest text-[#FBB03B]">Our Team</span>
                <h2 className="mt-5 font-inter text-3xl font-semibold text-[#4B485B] md:text-5xl">
                  Meet the Experts Behind Your Adventure
                </h2>
              </div>
              <div className="animate-on-scroll-right flex items-end">
                <p className="text-sm md:text-md leading-relaxed text-[#7A7777] sm:text-base font-inter font-regular">
                  Driven by a passion for discovery, our team transforms your travel dreams into expertly guided realities.
                </p>
              </div>
            </div>

            {/* Team Cards */}
            <div className="space-y-8 lg:space-y-0">
              {/* First Row: 1 Large Card + 4 Small Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
                {/* Large Featured Card */}
                {aboutData.team.filter(member => member.featured).map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-2 lg:row-span-2 group"
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-[#faead2] shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="relative aspect-[4/5] lg:aspect-[4/4] p-4">
                        <div className="relative h-full w-full">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover transition-transform duration-500 rounded-xl"
                          />
                        </div>
                      </div>
                      <div className="p-6 bg-[#faead2]">
                        <h3 className="text-xl font-semibold text-[#FBB03B] font-inter">{member.name}</h3>
                        <p className="text-[#423939] font-inter font-regular mt-1">{member.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Small Cards - First 4 in 2x2 grid */}
                <div className="lg:col-span-4 md:grid grid-cols-2 gap-8">
                  {aboutData.team.filter(member => !member.featured).slice(0, 4).map((member, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="group"
                    >
                      <div className="relative overflow-hidden rounded-2xl bg-[#faead2] shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="relative aspect-[16/6.3] p-4">
                          <div className="relative h-full w-full">
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover transition-transform duration-500 rounded-xl"
                            />
                          </div>
                        </div>
                        <div className="p-4 bg-[#faead2]">
                          <h3 className="text-lg font-semibold text-[#FBB03B] font-inter">{member.name}</h3>
                          <p className="text-[#423939] font-inter font-regular text-sm mt-1">{member.role}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Second Row: Remaining 4 Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {aboutData.team.filter(member => !member.featured).slice(4, 8).map((member, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="group"
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-[#faead2] shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="relative aspect-[4/3] p-4">
                        <div className="relative h-full w-full">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover transition-transform duration-500 rounded-xl"
                          />
                        </div>
                      </div>
                      <div className="p-6 bg-[#faead2]">
                        <h3 className="text-lg font-semibold text-[#FBB03B] font-inter">{member.name}</h3>
                        <p className="text-[#423939] font-inter font-regular text-sm mt-1">{member.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Get Started */}
        <section className="mt-4 px-4 sm:px-6 lg:px-12 pb-8">
          <div className="max-w-8xl mx-auto relative h-[50vh] min-h-[500px] overflow-hidden rounded-[1.5rem]">
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1536607961765-592e80bcc19e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                className="max-w-4xl mx-auto"
              >
                <h1 className="mt-10 text-4xl md:text-6xl text-white tracking-tight drop-shadow-lg font-inter font-medium">
                  Ready to Start Your Next Adventure?
                </h1>
                <p className="mt-8 animate-on-scroll mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white font-inter font-medium md:text-lg">
                  Join with Ceylon My Dream and unlock the ultimate travel experiences
                </p>
                <Link href="">
                  <Button size="lg" className="mt-8 rounded-full px-8">
                    Get Started Now
                  </Button>
                </Link>
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
