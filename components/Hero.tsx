'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, MessageCircle, Laptop, Coffee, Sparkles } from 'lucide-react';
import { AGENCY_CONFIG, BOOKING_LINK } from '@/lib/constants';

interface HeroProps {
  onOpenBooking?: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Copy & Conversion Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            {/* Small uppercase label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-0.5 bg-[#FF9D00]" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#07545A] uppercase">
                OVVELA · {AGENCY_CONFIG.tagline}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#18383A] leading-[1.1] mb-6 text-balance">
              Build Smarter.<br />
              <span className="text-[#FF9D00]">Grow Faster.</span>
            </h1>

            {/* Short Description */}
            <p className="text-lg sm:text-xl text-[#597274] leading-relaxed mb-8 max-w-xl font-normal">
              Helping businesses grow, build & scale. Professional websites, smart automation and consistent social media for growing businesses.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-white bg-[#07545A] hover:bg-[#053C40] active:scale-[0.99] rounded-xl transition-all shadow-md shadow-[#07545A]/15 cursor-pointer whitespace-nowrap"
              >
                <span>Book a Call →</span>
              </a>

              <a
                href={AGENCY_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-[#07545A] bg-[#F8F4EB] hover:bg-[#EFE7D8] border border-[#07545A]/15 active:scale-[0.99] rounded-xl transition-all cursor-pointer whitespace-nowrap gap-2"
              >
                <MessageCircle className="w-5 h-5 text-[#FF9D00]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Pillar Separators (Below Buttons) */}
            <div className="pt-2 border-t border-[#07545A]/10">
              <p className="text-sm font-medium text-[#18383A]/80 tracking-wide flex items-center flex-wrap gap-2">
                <span>Websites</span>
                <span className="text-[#FF9D00] font-bold" aria-hidden="true">•</span>
                <span>Automation</span>
                <span className="text-[#FF9D00] font-bold" aria-hidden="true">•</span>
                <span>Social Media</span>
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: Hand-Drawn Editorial Illustration */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-xl aspect-4/3 rounded-3xl overflow-hidden bg-[#FAF6EE] border border-[#07545A]/10 shadow-lg group">
              {/* Decorative warm ambient glow */}
              <div 
                className="absolute -top-12 -right-12 w-48 h-48 bg-[#FF9D00]/10 rounded-full blur-2xl pointer-events-none"
                aria-hidden="true" 
              />
              <div 
                className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#07545A]/10 rounded-full blur-2xl pointer-events-none"
                aria-hidden="true" 
              />

              {/* Hand-drawn editorial illustration image */}
              {!imageError ? (
                <Image
                  src="/hero-illustration.jpg"
                  alt="Editorial hand-drawn illustration of a creative professional working relaxed on a laptop in an orange bean bag lounge chair with coffee and plant"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`object-cover transition-opacity duration-300 ${
                    imageLoaded ? 'opacity-100' : 'opacity-90'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                  referrerPolicy="no-referrer"
                />
              ) : (
                /* Styled SVG Line-Art Fallback if file read fails */
                <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-[#FAF6EE] text-[#18383A] text-center">
                  <div className="relative w-28 h-28 rounded-full bg-[#FF9D00]/15 flex items-center justify-center mb-4 border border-[#FF9D00]/30">
                    <Laptop className="w-12 h-12 text-[#07545A]" strokeWidth={1.5} />
                    <div className="absolute -top-1 -right-1 bg-[#FF9D00] p-1.5 rounded-full text-white">
                      <Coffee className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg text-[#07545A]">Creative & Efficient Growth</h3>
                  <p className="text-xs text-[#597274] max-w-xs mt-1">
                    Focused execution, streamlined digital systems, and clean modern development.
                  </p>
                </div>
              )}

              {/* Subtle editorial card corner badge */}
              <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-xs border border-[#07545A]/10 shadow-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF9D00] animate-pulse" />
                <span className="text-xs font-medium text-[#18383A]">
                  Ovvela · Modern & Purpose-Built
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
