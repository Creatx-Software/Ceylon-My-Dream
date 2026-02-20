'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '/home' },
  { name: 'About Us', href: '/about' },
  { name: 'Tours', href: '/tours' },
  { name: 'Destinations', href: '/destinations' },
  { name: 'Adventure', href: '/adventure' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact Us', href: '/contact' }
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-inter ${
        isMenuOpen
          ? 'bg-[#1E1E1E] py-6'
          : scrolled
          ? 'bg-[#1E1E1E]/95 backdrop-blur-md shadow-lg py-6'
          : 'bg-transparent py-6'
      }`}
      style={scrolled && !isMenuOpen ? { backgroundColor: 'rgba(30, 30, 30, 0.95)' } : {}}
    >
      {/* Desktop Navigation */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12 mt-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 ml-8">
            <Image 
              src="/logos/CMD logo.png" 
              alt="Ceylon My Dream Logo" 
              width={96}
              height={96}
              className="h-12 scale-[1.5] w-auto"
            />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8 px-6 py-3 rounded-full border border-white/20 bg-white/15 backdrop-blur-lg mr-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.name === 'Home' && pathname === '/');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-md font-inter font-medium transition-colors duration-200 relative ${
                    isActive
                      ? 'text-white'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-white"></span>
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-4 mr-4 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#1E1E1E] overflow-hidden"
          >
            {/* Navigation links */}
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.name === 'Home' && pathname === '/');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`block text-base font-inter font-bold ${
                      isActive
                        ? 'text-[#f59e0b]'
                        : 'text-white/80'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
