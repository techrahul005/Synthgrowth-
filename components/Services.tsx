'use client';

import React, { useState } from 'react';
import { Globe, Cpu, Share2, ArrowRight, Info } from 'lucide-react';
import { SERVICES, ServiceItem } from '@/lib/constants';
import ServiceDetailModal from './ServiceDetailModal';

interface ServicesProps {
  onOpenBookingForService: (serviceName: string) => void;
}

export default function Services({ onOpenBookingForService }: ServicesProps) {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'web-dev':
        return <Globe className="w-6 h-6 text-[#07545A]" strokeWidth={1.75} />;
      case 'ai-automation':
        return <Cpu className="w-6 h-6 text-[#07545A]" strokeWidth={1.75} />;
      case 'social-media':
        return <Share2 className="w-6 h-6 text-[#07545A]" strokeWidth={1.75} />;
      default:
        return <Globe className="w-6 h-6 text-[#07545A]" strokeWidth={1.75} />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-[#FFFDF9] border-t border-[#07545A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-0.5 bg-[#FF9D00]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-wider text-[#07545A] uppercase">
              What We Do
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18383A] tracking-tight">
            Our Services
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#597274]">
            Three core digital pillars designed to build credibility, streamline workflows, and drive consistent growth.
          </p>
        </div>

        {/* Exactly THREE simple premium service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-white border border-[#07545A]/15 hover:border-[#FF9D00]/50 shadow-sm hover:shadow-md transition-all duration-200 group"
            >
              {/* Orange Accent Line on Top */}
              <div 
                className="absolute top-0 left-8 right-8 h-1 bg-[#FF9D00] rounded-b-md opacity-80 group-hover:opacity-100 transition-opacity" 
                aria-hidden="true" 
              />

              <div>
                {/* Header: Icon & Editorial Number */}
                <div className="flex items-center justify-between mb-6 pt-2">
                  <div className="p-3 rounded-xl bg-[#F8F4EB] border border-[#07545A]/10 group-hover:bg-[#FF9D00]/10 transition-colors">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#597274]">
                    {service.number}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-[#18383A] mb-3 leading-snug">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-[#597274] leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Client-Paid Transparent Note */}
                {service.clientCostNote && (
                  <div className="mb-6 p-3 rounded-xl bg-[#FAF6EE] border border-[#07545A]/10 text-xs text-[#18383A]">
                    <div className="flex items-start gap-1.5 font-medium text-[#07545A]">
                      <Info className="w-3.5 h-3.5 text-[#FF9D00] shrink-0 mt-0.5" />
                      <span>{service.clientCostNote}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom CTA: Learn More */}
              <div className="pt-4 border-t border-[#07545A]/10 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalService(service)}
                  type="button"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#07545A] group-hover:text-[#FF9D00] transition-colors cursor-pointer"
                >
                  <span>Learn More →</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        onBookCall={(serviceName) => {
          setActiveModalService(null);
          onOpenBookingForService(serviceName);
        }}
      />
    </section>
  );
}
