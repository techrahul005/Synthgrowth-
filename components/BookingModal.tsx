'use client';

import React, { useState, useEffect } from 'react';
import { X, Calendar, MessageCircle, Mail, ArrowRight, ExternalLink, Check } from 'lucide-react';
import { AGENCY_CONFIG, BOOKING_LINK } from '@/lib/constants';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage?: string;
  selectedService?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  selectedPackage,
  selectedService,
}: BookingModalProps) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [customTopic, setCustomTopic] = useState<string | null>(null);

  const defaultTopic = selectedPackage
    ? `${selectedPackage} Package`
    : selectedService || 'General Growth Consultation';
  const preferredTopic = customTopic ?? defaultTopic;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyPlaceholder = () => {
    navigator.clipboard?.writeText(BOOKING_LINK);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const constructWhatsAppMessage = () => {
    let msg = `Hello SynthGrowth, I'd like to book a discovery call.`;
    if (name) msg += `\nName: ${name}`;
    if (businessName) msg += `\nBusiness: ${businessName}`;
    if (preferredTopic) msg += `\nInterest: ${preferredTopic}`;
    return encodeURIComponent(msg);
  };

  const handleWhatsAppBooking = () => {
    const url = `https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${constructWhatsAppMessage()}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#053C40]/60 backdrop-blur-xs transition-opacity duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#FFFDF9] rounded-2xl border border-[#07545A]/20 shadow-2xl overflow-hidden p-6 sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#18383A]/60 hover:text-[#18383A] rounded-full hover:bg-[#F8F4EB] transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="text-xs font-semibold tracking-wider text-[#FF9D00] uppercase">
            Schedule A Consultation
          </span>
          <h2 id="booking-modal-title" className="text-2xl font-bold text-[#18383A] mt-1">
            Book a Call
          </h2>
          <p className="text-sm text-[#597274] mt-1">
            Let’s discuss your business growth goals and tailor the right digital solution.
          </p>
        </div>

        {/* Booking Link Notice / Placeholder */}
        <div className="mb-6 p-4 rounded-xl bg-[#F8F4EB] border border-[#07545A]/10">
          <div className="flex items-center justify-between text-xs text-[#597274] mb-1.5 font-medium">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#07545A]" />
              Direct Scheduler
            </span>
            <span className="text-[11px] text-[#FF9D00] font-semibold">Configurable URL</span>
          </div>

          <div className="flex items-center justify-between gap-2 mt-2 bg-white px-3 py-2.5 rounded-lg border border-[#07545A]/15">
            <div className="flex items-center gap-2 overflow-hidden">
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs font-semibold text-[#07545A] hover:text-[#FF9D00] hover:underline tracking-wider truncate"
              >
                {BOOKING_LINK}
              </a>
            </div>
            <button
              onClick={handleCopyPlaceholder}
              type="button"
              className="px-2.5 py-1 text-xs font-medium text-[#07545A] bg-[#F8F4EB] hover:bg-[#07545A] hover:text-white rounded transition-colors whitespace-nowrap"
            >
              {copiedLink ? (
                <span className="flex items-center gap-1 text-emerald-600">
                  <Check className="w-3.5 h-3.5" /> Copied
                </span>
              ) : (
                'Copy Tag'
              )}
            </button>
          </div>
          <p className="text-[11px] text-[#597274] mt-2">
            Configure your active scheduler link anytime in <code className="text-[#07545A] font-mono">lib/constants.ts</code>.
          </p>
        </div>

        {/* Direct Instant Booking via WhatsApp */}
        <div className="space-y-4">
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-[#18383A] mb-1">
                Your Name / Business Name (Optional)
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                className="w-full px-3 py-2 text-sm bg-white rounded-lg border border-[#07545A]/20 focus:border-[#FF9D00] focus:outline-hidden text-[#18383A]"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#18383A] mb-1">
                Preferred Focus
              </label>
              <select
                value={preferredTopic}
                onChange={(e) => setCustomTopic(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-white rounded-lg border border-[#07545A]/20 focus:border-[#FF9D00] focus:outline-hidden text-[#18383A]"
              >
                <option value="Professional Website Development">Professional Website Development</option>
                <option value="AI Automation">AI Automation</option>
                <option value="Social Media Management">Social Media Management</option>
                <option value="STARTER Package">STARTER Package</option>
                <option value="GROWTH Package">GROWTH Package (Most Popular)</option>
                <option value="SCALE Package">SCALE Package</option>
                <option value="General Growth Consultation">General Growth Consultation</option>
              </select>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={handleWhatsAppBooking}
              type="button"
              className="w-full py-3 px-4 bg-[#07545A] hover:bg-[#053C40] text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2 text-sm shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-[#FF9D00]" />
              <span>Confirm & Book on WhatsApp →</span>
            </button>

            <a
              href={`mailto:${AGENCY_CONFIG.email}?subject=Booking Request: ${encodeURIComponent(preferredTopic)}&body=Hello SynthGrowth Team,%0D%0A%0D%0AI would like to schedule a call regarding: ${encodeURIComponent(preferredTopic)}.%0D%0A%0D%0ABest regards`}
              className="w-full py-2.5 px-4 bg-white hover:bg-[#F8F4EB] text-[#18383A] border border-[#07545A]/20 font-medium rounded-xl transition-colors flex items-center justify-center gap-2 text-sm"
            >
              <Mail className="w-4 h-4 text-[#07545A]" />
              <span>Book via Email Instead</span>
            </a>
          </div>
        </div>

        <div className="mt-5 text-center">
          <p className="text-[12px] text-[#597274]">
            Calls are free 20-minute discovery sessions. No high-pressure sales pitch.
          </p>
        </div>
      </div>
    </div>
  );
}
