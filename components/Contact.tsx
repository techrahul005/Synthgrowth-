'use client';

import React, { useState } from 'react';
import { MessageCircle, Mail, Instagram, ArrowRight, Send, Check } from 'lucide-react';
import { AGENCY_CONFIG, BOOKING_LINK } from '@/lib/constants';

interface ContactProps {
  onOpenBooking?: () => void;
}

export default function Contact({ onOpenBooking }: ContactProps) {
  const [senderName, setSenderName] = useState('');
  const [senderBusiness, setSenderBusiness] = useState('');
  const [message, setMessage] = useState('');
  const [sentNotice, setSentNotice] = useState(false);

  const handleSendViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Hi SynthGrowth!`;
    if (senderName) text += ` My name is ${senderName}.`;
    if (senderBusiness) text += ` Business: ${senderBusiness}.`;
    if (message) text += `\n\nMessage: ${message}`;
    const url = `https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSentNotice(true);
    setTimeout(() => setSentNotice(false), 3000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#FFFDF9] border-t border-[#07545A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-0.5 bg-[#FF9D00]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-wider text-[#07545A] uppercase">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18383A] tracking-tight">
            Let’s Talk
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#597274]">
            Have questions about websites, automation, or social media? Reach out directly via WhatsApp, email, or schedule a call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Methods Cards */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* WhatsApp Card */}
            <a
              href={AGENCY_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 sm:p-6 rounded-2xl bg-white border border-[#07545A]/15 hover:border-[#FF9D00] shadow-xs hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#F8F4EB] group-hover:bg-[#FF9D00]/15 text-[#07545A] group-hover:text-[#FF9D00] transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#597274] uppercase tracking-wider">
                    WhatsApp
                  </div>
                  <div className="text-base sm:text-lg font-bold text-[#18383A] group-hover:text-[#07545A] transition-colors">
                    {AGENCY_CONFIG.whatsappDisplay}
                  </div>
                </div>
              </div>
              <span className="text-xs font-medium text-[#07545A] group-hover:text-[#FF9D00] flex items-center gap-1">
                Chat Now →
              </span>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${AGENCY_CONFIG.email}`}
              className="flex items-center justify-between p-5 sm:p-6 rounded-2xl bg-white border border-[#07545A]/15 hover:border-[#FF9D00] shadow-xs hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#F8F4EB] group-hover:bg-[#FF9D00]/15 text-[#07545A] group-hover:text-[#FF9D00] transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#597274] uppercase tracking-wider">
                    Email
                  </div>
                  <div className="text-base sm:text-lg font-bold text-[#18383A] group-hover:text-[#07545A] transition-colors break-all">
                    {AGENCY_CONFIG.email}
                  </div>
                </div>
              </div>
              <span className="text-xs font-medium text-[#07545A] group-hover:text-[#FF9D00] flex items-center gap-1 shrink-0 ml-2">
                Write Email →
              </span>
            </a>

            {/* Instagram Card */}
            <a
              href={AGENCY_CONFIG.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 sm:p-6 rounded-2xl bg-white border border-[#07545A]/15 hover:border-[#FF9D00] shadow-xs hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#F8F4EB] group-hover:bg-[#FF9D00]/15 text-[#07545A] group-hover:text-[#FF9D00] transition-colors">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#597274] uppercase tracking-wider">
                    Instagram
                  </div>
                  <div className="text-base sm:text-lg font-bold text-[#18383A] group-hover:text-[#07545A] transition-colors">
                    {AGENCY_CONFIG.instagramDisplay}
                  </div>
                </div>
              </div>
              <span className="text-xs font-medium text-[#07545A] group-hover:text-[#FF9D00] flex items-center gap-1">
                Follow Us →
              </span>
            </a>

            {/* Buttons: Book a Call & Chat on WhatsApp */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-6 font-medium text-white bg-[#07545A] hover:bg-[#053C40] rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                <span>Book a Call →</span>
              </a>

              <a
                href={AGENCY_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-6 font-medium text-[#07545A] bg-[#F8F4EB] hover:bg-[#EFE9DD] border border-[#07545A]/15 rounded-xl transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#FF9D00]" />
                <span>Chat on WhatsApp →</span>
              </a>
            </div>

          </div>

          {/* Quick Direct Message Box */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#07545A]/15 shadow-sm">
            <h3 className="text-lg font-bold text-[#18383A] mb-1">
              Send a Quick Inquiry
            </h3>
            <p className="text-xs text-[#597274] mb-6">
              Drop us your details and jump directly into a conversation.
            </p>

            <form onSubmit={handleSendViaWhatsApp} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#18383A] mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Alex Sharma"
                  className="w-full px-3.5 py-2.5 text-sm bg-[#FFFDF9] rounded-xl border border-[#07545A]/20 focus:border-[#FF9D00] focus:outline-hidden text-[#18383A] placeholder-[#597274]/50"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#18383A] mb-1">
                  Business / Company Name
                </label>
                <input
                  type="text"
                  value={senderBusiness}
                  onChange={(e) => setSenderBusiness(e.target.value)}
                  placeholder="e.g. Apex Health"
                  className="w-full px-3.5 py-2.5 text-sm bg-[#FFFDF9] rounded-xl border border-[#07545A]/20 focus:border-[#FF9D00] focus:outline-hidden text-[#18383A] placeholder-[#597274]/50"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#18383A] mb-1">
                  How can we help you?
                </label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Briefly describe what you're looking for (e.g. New business website, workflow automation)..."
                  className="w-full px-3.5 py-2.5 text-sm bg-[#FFFDF9] rounded-xl border border-[#07545A]/20 focus:border-[#FF9D00] focus:outline-hidden text-[#18383A] placeholder-[#597274]/50 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 font-semibold text-white bg-[#07545A] hover:bg-[#053C40] active:scale-[0.99] rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 text-sm cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#FF9D00]" />
                  <span>Send Direct via WhatsApp</span>
                </button>
              </div>

              {sentNotice && (
                <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-800 text-xs flex items-center justify-center gap-1.5 animate-in fade-in">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Opening WhatsApp with your inquiry...</span>
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
