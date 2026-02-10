'use client';

import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';

const quickLinks = [
  'Home',
  'About Us',
  'Tours',
  'Destinations',
  'Adventures',
  'Gallery',
  'Blog',
  'Contact Us',
];

const moreLinks = [
  'FAQ',
  'Support Center',
  'Security',
  'Booking',
  'Payments',
  'Returns',
  'Privacy Policy',
  'Terms & Conditions',
];

const socialIcons = [Facebook, Twitter, Instagram, Youtube];

export function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white pt-16 pb-8 border-t border-white/5 relative z-10" style={{ backgroundColor: '#1E1E1E' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <img 
              src="/logos/CMD logo.png" 
              alt="Ceylon My Dream Logo" 
              className="h-16 w-auto"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Relationship where we know our customers so well that we can
              suggest and deliver Total Travel Solutions for their needs.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#2d2d3f] flex items-center justify-center text-[#f59e0b] hover:bg-[#f59e0b] hover:text-white transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-[#f59e0b] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h3 className="text-lg font-semibold mb-6">More</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              {moreLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-[#f59e0b] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>
            <ul className="space-y-6 text-gray-400 text-sm">
              <li className="flex items-start space-x-4">
                <div className="mt-1 w-8 h-8 rounded-full bg-[#2d2d3f]/50 flex items-center justify-center flex-shrink-0 text-[#f59e0b]">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span>+94 1122 47 633</span>
                  <span>+94 77 465 2922</span>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="mt-1 w-8 h-8 rounded-full bg-[#2d2d3f]/50 flex items-center justify-center flex-shrink-0 text-[#f59e0b]">
                  <Mail className="w-4 h-4" />
                </div>
                <span>info@ceylonmydream.com</span>
              </li>
              <li className="flex items-start space-x-4">
                <div className="mt-1 w-8 h-8 rounded-full bg-[#2d2d3f]/50 flex items-center justify-center flex-shrink-0 text-[#f59e0b]">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>No 626, Negombo Road, Dadugama, Jaela, Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          <p>© 2026 CEYLONEMYDREAM.COM - ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  );
}
