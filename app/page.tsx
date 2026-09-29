'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CostTransparency from '@/components/CostTransparency';
import Packages from '@/components/Packages';
import FinalCta from '@/components/FinalCta';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import BookingModal from '@/components/BookingModal';
import { BOOKING_LINK } from '@/lib/constants';

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | undefined>(undefined);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenBooking = () => {
    window.open(BOOKING_LINK, '_blank', 'noopener,noreferrer');
  };

  const handleOpenBookingForPackage = (_pkgName: string) => {
    window.open(BOOKING_LINK, '_blank', 'noopener,noreferrer');
  };

  const handleOpenBookingForService = (_serviceName: string) => {
    window.open(BOOKING_LINK, '_blank', 'noopener,noreferrer');
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF9] text-[#18383A] selection:bg-[#FF9D00] selection:text-[#053C40]">
      {/* Sticky Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Services Section */}
        <Services onOpenBookingForService={handleOpenBookingForService} />

        {/* Client-Paid Cost Transparency */}
        <CostTransparency />

        {/* Packages Section */}
        <Packages onOpenBookingForPackage={handleOpenBookingForPackage} />

        {/* Final CTA Banner */}
        <FinalCta onOpenBooking={handleOpenBooking} />

        {/* Contact Section */}
        <Contact onOpenBooking={handleOpenBooking} />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Floating Sticky WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Global Booking Consultation Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        selectedPackage={selectedPackage}
        selectedService={selectedService}
      />
    </div>
  );
}
