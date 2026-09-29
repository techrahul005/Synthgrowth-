// Centralized editable booking-link constant:
export const BOOKING_LINK: string = "https://calendly.com/synthgrowth9598/30min";

export const AGENCY_CONFIG = {
  name: 'SynthGrowth',
  tagline: 'BUSINESS GROWTH AGENCY',
  businessType: 'Business Growth Agency',
  email: 'synthgrowth9598@gmail.com',
  whatsappDisplay: '+91 8107425083',
  whatsappNumber: '918107425083',
  whatsappLink: 'https://wa.me/918107425083',
  instagramDisplay: '@synthgrowth.agency',
  instagramLink: 'https://instagram.com/synthgrowth.agency',
  bookingLink: BOOKING_LINK,
};

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  clientCostNote?: string;
  features: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-dev',
    number: '01',
    title: 'Professional Website Development',
    description: 'Modern, responsive and professional websites designed around your business.',
    clientCostNote: 'Domain & Hosting: Client pays separately.',
    features: [
      'Tailored custom design aligned with your brand identity',
      'Mobile-first responsive architecture across all screen sizes',
      'Fast loading speeds & foundational on-page SEO',
      'Clear conversion pathways & WhatsApp/contact integration',
    ],
  },
  {
    id: 'ai-automation',
    number: '02',
    title: 'AI Automation',
    description: 'Smart workflows that reduce repetitive work and help your business operate more efficiently.',
    clientCostNote: 'Third-party APIs, software and platform charges: Client pays separately.',
    features: [
      'Automated lead intake and instant notification routing',
      'Repetitive task elimination across email, CRM, and forms',
      'Connected toolchains that keep your operational data in sync',
      'Structured business workflows that free up founder time',
    ],
  },
  {
    id: 'social-media',
    number: '03',
    title: 'Social Media Management',
    description: 'Consistent content and posting that keeps your brand active and professional online.',
    clientCostNote: undefined,
    features: [
      'Consistent publishing schedule to maintain active presence',
      'Clean on-brand graphics and tailored captions',
      'Audience-aligned messaging focused on credibility',
      'Community monitoring and brand presentation hygiene',
    ],
  },
];

export interface PackageItem {
  id: string;
  name: string;
  price: string;
  period: string;
  isPopular?: boolean;
  deliverables: string[];
  clientCosts: {
    domainHosting: string;
    thirdPartyCharges?: string;
  };
}

export const PACKAGES: PackageItem[] = [
  {
    id: 'starter',
    name: 'STARTER',
    price: '₹9,999',
    period: '/ month',
    isPopular: false,
    deliverables: [
      'Professional Website',
      'WhatsApp Integration',
      'Basic Website Maintenance',
      'Small Website Updates',
      'Mobile Responsive Design',
    ],
    clientCosts: {
      domainHosting: 'Domain & Hosting: Client pays separately.',
    },
  },
  {
    id: 'growth',
    name: 'GROWTH',
    price: '₹19,999',
    period: '/ month',
    isPopular: true,
    deliverables: [
      'Professional Website',
      'AI Automation',
      'Social Media Management',
      '8 Reels / Month',
      '4 Posts / Month',
      'Monthly Report',
    ],
    clientCosts: {
      domainHosting: 'Domain & Hosting: Client pays separately.',
      thirdPartyCharges: 'Third-party APIs, software and platform charges: Client pays separately.',
    },
  },
  {
    id: 'scale',
    name: 'SCALE',
    price: '₹34,999',
    period: '/ month',
    isPopular: false,
    deliverables: [
      'Professional Website',
      'Advanced Automation',
      'Social Media Management',
      '8 Reels / Month',
      '4 Posts / Month',
      'Priority Support',
    ],
    clientCosts: {
      domainHosting: 'Domain & Hosting: Client pays separately.',
      thirdPartyCharges: 'Third-party APIs, software and platform charges: Client pays separately.',
    },
  },
];
