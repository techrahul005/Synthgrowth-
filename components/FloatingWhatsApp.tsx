'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { AGENCY_CONFIG } from '@/lib/constants';

export default function FloatingWhatsApp() {
  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-5 right-5 z-40"
    >
      <a
        href={AGENCY_CONFIG.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-3.5 py-2.5 bg-[#07545A] hover:bg-[#053C40] text-white rounded-full shadow-lg hover:shadow-xl border border-white/20 transition-all duration-200 active:scale-95"
        aria-label={`Chat with ${AGENCY_CONFIG.name} on WhatsApp`}
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 text-[#FF9D00]" />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#FF9D00] animate-ping" />
        </div>
        <span className="text-xs font-semibold tracking-wide pr-1 hidden sm:inline-block">
          WhatsApp
        </span>
      </a>
    </aside>
  );
}
