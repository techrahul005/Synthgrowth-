'use client';

import React from 'react';
import { Check, Info, Star } from 'lucide-react';
import { PACKAGES, BOOKING_LINK } from '@/lib/constants';

interface PackagesProps {
  onOpenBookingForPackage?: (packageName: string) => void;
}

export default function Packages({ onOpenBookingForPackage }: PackagesProps) {

  return (
    <section id="packages" className="py-16 md:py-24 bg-[#F8F4EB] border-t border-[#07545A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-0.5 bg-[#FF9D00]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-wider text-[#07545A] uppercase">
              Transparent Investment
            </span>
            <span className="w-6 h-0.5 bg-[#FF9D00]" aria-hidden="true" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18383A] tracking-tight">
            Simple Packages
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#597274]">
            Transparent monthly partnerships designed to build, automate, and grow your business.
          </p>
        </div>

        {/* Pricing Cards Grid (Exactly 3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PACKAGES.map((pkg) => {
            const isGrowth = pkg.isPopular;

            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between rounded-2xl p-7 sm:p-8 transition-all duration-200 ${
                  isGrowth
                    ? 'bg-white border-2 border-[#07545A] shadow-xl md:-translate-y-2 ring-2 ring-[#FF9D00]/20'
                    : 'bg-white border border-[#07545A]/15 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Orange "Most Popular" Badge for GROWTH */}
                {isGrowth && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#FF9D00] text-[#053C40] text-xs font-bold tracking-wider uppercase rounded-full shadow-md flex items-center gap-1.5 border border-white/50">
                    <Star className="w-3.5 h-3.5 fill-[#053C40]" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  {/* Package Name */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold tracking-tight text-[#18383A]">
                      {pkg.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="mt-3 mb-5 pb-5 border-b border-[#07545A]/10">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-extrabold text-[#07545A] tracking-tight font-mono">
                        {pkg.price}
                      </span>
                      <span className="text-sm font-medium text-[#597274]">
                        {pkg.period}
                      </span>
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-3 mb-6">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#07545A]">
                      Deliverables:
                    </div>
                    <ul className="space-y-2.5">
                      {pkg.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-[#18383A]/90">
                          <Check className="w-4 h-4 text-[#FF9D00] shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Important Client Costs Notice */}
                  <div className="mb-6 p-3.5 rounded-xl bg-[#FAF6EE] border border-[#07545A]/10 space-y-1.5">
                    <div className="flex items-start gap-1.5 text-xs text-[#07545A] font-medium">
                      <Info className="w-3.5 h-3.5 text-[#FF9D00] shrink-0 mt-0.5" />
                      <span>{pkg.clientCosts.domainHosting}</span>
                    </div>
                    {pkg.clientCosts.thirdPartyCharges && (
                      <div className="flex items-start gap-1.5 text-xs text-[#07545A] font-medium pl-5">
                        <span>{pkg.clientCosts.thirdPartyCharges}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card CTA: Book a Call → */}
                <div className="pt-2">
                  <a
                    href={BOOKING_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 font-semibold rounded-xl transition-all flex items-center justify-center gap-2 text-sm shadow-xs cursor-pointer ${
                      isGrowth
                        ? 'bg-[#07545A] hover:bg-[#053C40] text-white active:scale-[0.98]'
                        : 'bg-[#F8F4EB] hover:bg-[#07545A] hover:text-white text-[#07545A] border border-[#07545A]/20 active:scale-[0.98]'
                    }`}
                  >
                    <span>Book a Call →</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
