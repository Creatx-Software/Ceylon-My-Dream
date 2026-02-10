'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Mail,
  Phone,
  CheckCircle,
  ChevronDown,
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

/* ─── Contact Cards Data ─── */
const contactCards = [
  {
    title: 'Office Address',
    text: 'Prefer to visit our office? Our travel experts are ready to assist you!',
    icon: MapPin,
    detail: 'No 626, Negombo Road, Dadugama, Jaela, Sri Lanka',
    delay: 0,
  },
  {
    title: 'Message Us',
    text: 'Send us your travel queries, and our team will reply as soon as possible!',
    icon: Mail,
    detail: 'info@ceylonmydream.com',
    delay: 0.15,
  },
  {
    title: 'Call Us Now',
    text: "Need assistance? Call us, and we'll make your travel planning!",
    icon: Phone,
    detail: '+94 1122 47 633\n+94 77 465 2922',
    delay: 0.3,
  },
];

/* ─── Why Reach Out Data ─── */
const benefits = [
  'Personalized Travel Planning',
  '24/7 Customer Support',
  'Fast & Secure Booking',
  'Local Travel Experts',
  'Exclusive Travel Deals',
];

export function ContactPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* ─── NAVBAR ─── */}
      <Navbar />

      <main>
        {/* ─── HERO ─── */}
        <section className="mt-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto relative h-[50vh] min-h-[500px] overflow-hidden rounded-[1.5rem]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1664910880748-06b4260f1571?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
              <h1 className="text-5xl md:text-8xl text-white tracking-tight drop-shadow-lg" style={{ fontFamily: "'Abhaya Libre', serif", fontWeight: 800 }}>
                GET IN TOUCH
                <br />
                <span className="block mt-2">WITH US</span>
              </h1>
            </motion.div>
          </div>
          </div>
        </section>

        {/* ─── CONTACT INFO CARDS ─── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="text-3xl md:text-5xl font-inter font-semibold text-[#4B485B] text-center mb-16"
            >
              Our Contact Information
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: card.delay,
                    duration: 0.5,
                  }}
                  whileHover={{
                    y: -4,
                    shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    transition: {
                      duration: 0.2,
                      ease: "easeOut"
                    }
                  }}
                  className="bg-[#1E1E1E] rounded-2xl p-8 text-white relative overflow-hidden cursor-pointer"
                >
                  <div className="relative z-10 h-full flex flex-col">
                    <h3 className="text-xl font-inter font-semibold mb-4">{card.title}</h3>
                    <p className="text-[#E8DFD0] text-sm mb-8 flex-grow leading-relaxed font-inter font-regular">
                      {card.text}
                    </p>
                    <div className="flex items-center space-x-4 mt-auto pt-0">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 duration-300">
                        <card.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-sm font-inter font-medium text-[#FAEFDF] whitespace-pre-line">
                        {card.detail}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CONTACT FORM + INFO ─── */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Form */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: -60,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="relative rounded-[2rem] overflow-hidden min-h-[600px] flex items-center justify-center p-8"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80')",
                  }}
                />

                <div className="absolute inset-0 bg-black/20" />

                <div className="relative w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
                  <h3 className="text-3xl font-bold text-white mb-8">
                    Send Us A Message
                  </h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full bg-white/20 border border-white/30 rounded-full px-6 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                      />

                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full bg-white/20 border border-white/30 rounded-full px-6 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                      />
                    </div>
                    <div className="relative">
                      <select className="w-full bg-white/20 border border-white/30 rounded-full px-6 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-white/50 transition-all cursor-pointer">
                        <option className="text-gray-800">Subject</option>
                        <option className="text-gray-800">
                          General Inquiry
                        </option>
                        <option className="text-gray-800">
                          Booking Request
                        </option>
                        <option className="text-gray-800">Support</option>
                      </select>
                      <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white pointer-events-none" />
                    </div>
                    <textarea
                      rows={5}
                      placeholder="Message"
                      className="w-full bg-white/20 border border-white/30 rounded-3xl px-6 py-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all resize-none"
                    />

                    <button
                      type="button"
                      className="w-full bg-white text-[#f59e0b] font-bold py-4 rounded-full hover:bg-gray-50 transition-colors duration-300 shadow-lg mt-4"
                    >
                      Send Now
                    </button>
                  </form>
                </div>
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: 60,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-4xl font-bold text-[#1a1a2e] mb-6 leading-tight">
                    Get In Touch With
                    <br />
                    Ceylon My Dream
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Have questions or need help planning your next trip? Contact
                    us and let's make your travel experience!
                  </p>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-[#1a1a2e]">
                    Why reach out to us?
                  </h3>
                  <ul className="space-y-4">
                    {benefits.map((item, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-[#f59e0b] flex-shrink-0" />
                        <span className="text-gray-700 font-medium">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── MAP SECTION ─── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="text-3xl md:text-4xl font-bold text-[#1a1a2e] text-center mb-12"
            >
              Get Directions
            </motion.h2>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
              className="w-full h-[400px] rounded-3xl overflow-hidden shadow-lg border border-gray-100"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.5!2d79.9!3d7.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDYnMDAuMCJOIDc5wrA1NCcwMC4wIkU!5e0!3m2!1sen!2slk!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <Footer />
    </div>
  );
}
