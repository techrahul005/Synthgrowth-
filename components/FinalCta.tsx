'use client';

import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { AGENCY_CONFIG, BOOKING_LINK } from '@/lib/constants';

interface FinalCtaProps {
  onOpenBooking?: () => void;
}

export default function FinalCta({ onOpenBooking }: FinalCtaProps) {
  return (
    <section className="py-20 md:py-28 bg-[#07545A] text-white relative overflow-hidden">
      {/* Subtle organic orange ambient background glow */}
      <div 
        className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#FF9D00]/10 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#053C40] blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Small Tagline */}
        <div className="inline-flex items-center gap-2 mb-4 justify-center">
          <span className="w-5 h-0.5 bg-[#FF9D00]" aria-hidden="true" />
          <span className="text-xs font-semibold tracking-widest text-[#FF9D00] uppercase">
            Let&apos;s Collaborate
          </span>
          <span className="w-5 h-0.5 bg-[#FF9D00]" aria-hidden="true" />
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-5 text-balance">
          Ready to grow your business?
        </h2>

        {/* Short Text */}
        <p className="text-base sm:text-xl text-white/80 max-w-xl mx-auto mb-10 leading-relaxed font-normal">
          Let&apos;s build the right digital solution for your business.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BOOKING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-[#07545A] bg-white hover:bg-[#FFFDF9] active:scale-[0.98] rounded-xl transition-all shadow-lg cursor-pointer whitespace-nowrap inline-flex items-center justify-center"
          >
            <span>Book a Call →</span>
          </a>

          <a
            href={AGENCY_CONFIG.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-[#053C40] hover:bg-[#042d30] border border-white/20 active:scale-[0.98] rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5 text-[#FF9D00]" />
            <span>Chat on WhatsApp →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
