'use client';

import React from 'react';
import { ShieldCheck, Server, KeyRound, ExternalLink } from 'lucide-react';

export default function CostTransparency() {
  return (
    <section className="py-10 bg-[#FFFDF9] border-t border-[#07545A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl p-6 sm:p-8 bg-[#FAF6EE] border border-[#07545A]/15">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 mb-2">
                <ShieldCheck className="w-5 h-5 text-[#07545A]" />
                <h3 className="text-base font-bold text-[#18383A] uppercase tracking-wider text-xs">
                  Client-Paid Costs Policy
                </h3>
              </div>
              <p className="text-sm text-[#597274] leading-relaxed">
                We believe in total transparency. Our agency fees cover our architecture, design, and technical engineering. Direct vendor infrastructure remains 100% in your ownership:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              <div className="p-4 rounded-xl bg-white border border-[#07545A]/10 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#F8F4EB] text-[#07545A] shrink-0 mt-0.5">
                  <Server className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#18383A] uppercase tracking-wide">
                    Website Development
                  </h4>
                  <p className="text-xs font-semibold text-[#07545A] mt-1">
                    Domain & Hosting: Client pays separately.
                  </p>
                  <p className="text-[11px] text-[#597274] mt-0.5">
                    We help you register directly with providers (e.g. Cloudflare, Hostinger, Vercel) so you maintain sole administrative rights.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#07545A]/10 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#F8F4EB] text-[#07545A] shrink-0 mt-0.5">
                  <KeyRound className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#18383A] uppercase tracking-wide">
                    AI Automation
                  </h4>
                  <p className="text-xs font-semibold text-[#07545A] mt-1">
                    Third-party APIs, software and platform charges: Client pays separately.
                  </p>
                  <p className="text-[11px] text-[#597274] mt-0.5">
                    API usage (e.g. OpenAI, Anthropic, Make, Zapier, WhatsApp Business API) is billed directly by vendors to your business account.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
