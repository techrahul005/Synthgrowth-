'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';
import { AGENCY_CONFIG, BOOKING_LINK } from '@/lib/constants';

interface NavbarProps {
  onOpenBooking?: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-[#FFFDF9]/95 backdrop-blur-md border-b border-[#07545A]/10 shadow-xs py-3.5'
          : 'bg-[#FFFDF9] border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark (Single text element in display face) */}
          <a
            href="#"
            className="flex items-center gap-2 group focus:outline-hidden"
            aria-label="SynthGrowth Home"
          >
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#07545A] group-hover:text-[#053C40] transition-colors">
              SynthGrowth
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF9D00]" aria-hidden="true" />
          </a>

          {/* Zone 2: Navigation Links (Clean text links with hover styling) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#18383A]/80">
            <a
              href="#services"
              className="hover:text-[#07545A] transition-colors py-1 relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF9D00] transition-all duration-200 group-hover:w-full" />
            </a>
            <a
              href="#packages"
              className="hover:text-[#07545A] transition-colors py-1 relative group"
            >
              Packages
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF9D00] transition-all duration-200 group-hover:w-full" />
            </a>
            <a
              href="#contact"
              className="hover:text-[#07545A] transition-colors py-1 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF9D00] transition-all duration-200 group-hover:w-full" />
            </a>
          </nav>

          {/* Zone 3: Actions (WhatsApp secondary + Book a Call primary) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={AGENCY_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-sm font-medium text-[#07545A] hover:text-[#053C40] hover:bg-[#F8F4EB] rounded-lg transition-colors flex items-center gap-1.5"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-[#FF9D00]" />
              <span>WhatsApp</span>
            </a>

            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-white bg-[#07545A] hover:bg-[#053C40] active:scale-[0.98] rounded-lg transition-all shadow-xs flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Book a Call →</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={AGENCY_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#07545A] hover:bg-[#F8F4EB] rounded-lg"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-[#FF9D00]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-[#18383A] hover:bg-[#F8F4EB] focus:outline-hidden"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#07545A]/10 bg-[#FFFDF9] px-4 pt-3 pb-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-2 text-base font-medium text-[#18383A]">
            <a
              href="#services"
              onClick={closeMenu}
              className="px-3 py-2.5 rounded-lg hover:bg-[#F8F4EB] hover:text-[#07545A] transition-colors"
            >
              Services
            </a>
            <a
              href="#packages"
              onClick={closeMenu}
              className="px-3 py-2.5 rounded-lg hover:bg-[#F8F4EB] hover:text-[#07545A] transition-colors"
            >
              Packages
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="px-3 py-2.5 rounded-lg hover:bg-[#F8F4EB] hover:text-[#07545A] transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="pt-2 flex flex-col gap-2.5 border-t border-[#07545A]/10">
            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full py-3 px-4 text-center font-medium text-white bg-[#07545A] hover:bg-[#053C40] rounded-xl transition-colors shadow-xs text-sm block"
            >
              Book a Call →
            </a>

            <a
              href={AGENCY_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full py-2.5 px-4 text-center font-medium text-[#07545A] bg-[#F8F4EB] hover:bg-[#EFE9DD] rounded-xl transition-colors flex items-center justify-center gap-2 text-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#FF9D00]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
