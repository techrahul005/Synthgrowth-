'use client';

import React from 'react';
import { AGENCY_CONFIG } from '@/lib/constants';
import { MessageCircle, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#FAF6EE] border-t border-[#07545A]/15 py-12 md:py-16 text-[#18383A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#07545A]/10">
          
          {/* Brand Info */}
          <div>
            <a href="#" className="flex items-center gap-2 group">
              <span className="text-2xl font-bold tracking-tight text-[#07545A]">
                {AGENCY_CONFIG.name}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF9D00]" aria-hidden="true" />
            </a>
            <p className="text-xs font-semibold tracking-wider text-[#FF9D00] uppercase mt-1">
              {AGENCY_CONFIG.tagline}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm font-medium text-[#18383A]/80">
            <a href="#services" className="hover:text-[#07545A] transition-colors">
              Services
            </a>
            <a href="#packages" className="hover:text-[#07545A] transition-colors">
              Packages
            </a>
            <a href="#contact" className="hover:text-[#07545A] transition-colors">
              Contact
            </a>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-sm font-medium">
            <a
              href={AGENCY_CONFIG.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#18383A]/80 hover:text-[#07545A] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 text-[#FF9D00]" />
              <span>Instagram</span>
            </a>

            <a
              href={AGENCY_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#18383A]/80 hover:text-[#07545A] transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-[#FF9D00]" />
              <span>WhatsApp</span>
            </a>

            <a
              href={`mailto:${AGENCY_CONFIG.email}`}
              className="flex items-center gap-1.5 text-[#18383A]/80 hover:text-[#07545A] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 text-[#FF9D00]" />
              <span>Email</span>
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#597274] gap-4">
          <p>© 2026 SynthGrowth. All rights reserved.</p>
          <p className="text-[11px] text-[#597274]/80">
            Professional Website Development • AI Automation • Social Media Management
          </p>
        </div>

      </div>
    </footer>
  );
}
