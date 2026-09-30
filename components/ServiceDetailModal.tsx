'use client';

import React, { useEffect } from 'react';
import { X, CheckCircle2, AlertCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { ServiceItem, AGENCY_CONFIG, BOOKING_LINK } from '@/lib/constants';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookCall?: (serviceTitle: string) => void;
}

export default function ServiceDetailModal({
  service,
  onClose,
  onBookCall,
}: ServiceDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#053C40]/60 backdrop-blur-xs transition-opacity duration-200">
      <div
        className="relative w-full max-w-lg bg-[#FFFDF9] rounded-2xl border border-[#07545A]/20 shadow-2xl overflow-hidden p-6 sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-detail-title"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#18383A]/60 hover:text-[#18383A] rounded-full hover:bg-[#F8F4EB] transition-colors"
          aria-label="Close service details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono font-bold text-[#FF9D00]">
              SERVICE {service.number}
            </span>
          </div>
          <h2 id="service-detail-title" className="text-2xl font-bold text-[#18383A]">
            {service.title}
          </h2>
          <p className="text-sm text-[#597274] mt-2 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Deliverables / Scope */}
        <div className="space-y-3 mb-6">
          <h4 className="text-xs font-semibold tracking-wider text-[#07545A] uppercase">
            What We Deliver
          </h4>
          <ul className="space-y-2.5">
            {service.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-[#18383A]/90">
                <CheckCircle2 className="w-4 h-4 text-[#07545A] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Client-Paid Transparency Note */}
        {service.clientCostNote && (
          <div className="mb-6 p-3.5 rounded-xl bg-[#F8F4EB] border border-[#07545A]/15 text-xs text-[#18383A]">
            <div className="flex items-center gap-2 font-semibold text-[#07545A] mb-1">
              <AlertCircle className="w-4 h-4 text-[#FF9D00] shrink-0" />
              <span>Transparent Client-Paid Costs</span>
            </div>
            <p className="text-[#597274] pl-6 leading-relaxed">
              {service.clientCostNote} We guide you in selecting the best-fit accounts in your own name so you retain 100% direct ownership.
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <a
            href={BOOKING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex-1 py-3 px-4 text-center font-medium text-white bg-[#07545A] hover:bg-[#053C40] rounded-xl transition-colors shadow-xs text-sm block"
          >
            Book a Call →
          </a>
          <a
            href={`https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hi ${AGENCY_CONFIG.name}, I'd like to discuss ${service.title}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-4 text-center font-medium text-[#07545A] bg-[#F8F4EB] hover:bg-[#EFE9DD] rounded-xl transition-colors flex items-center justify-center gap-2 text-sm"
          >
            <MessageCircle className="w-4 h-4 text-[#FF9D00]" />
            <span>Chat on WhatsApp →</span>
          </a>
        </div>
      </div>
    </div>
  );
}
