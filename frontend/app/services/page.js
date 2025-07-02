"use client";
import React, { useEffect } from "react";
import { ServicesHeader } from "../components/ui/ServicesHeader";
import { ServicesGrid } from "../components/ui/ServicesGrid";

export default function Services() {
  // Force close any open CTA forms when this page loads
  useEffect(() => {
    // Find and remove any existing CTA modals
    const existingModals = document.querySelectorAll('[data-modal="cta"]');
    existingModals.forEach(modal => modal.remove());
  }, []);

  return (
    <div className="relative">
      <div className="flex-1 w-full bg-[#0c1c3c] text-white pt-28 sm:pt-32 pb-20 sm:pb-24 md:pb-32">
        <div className="max-w-[90rem] mx-auto">
          <ServicesHeader />
          <ServicesGrid />
        </div>
      </div>
    </div>
  );
}
