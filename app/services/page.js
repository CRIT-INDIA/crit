"use client";
import React, { useEffect } from "react";
import { ServicesHeader } from "./s_header";
import { ServicesGrid } from "./components/s_grid";

export default function Services() {
  // Force close any open CTA forms when this page loads
  useEffect(() => {
    // Find and remove any existing CTA modals
    const existingModals = document.querySelectorAll('[data-modal="cta"]');
    existingModals.forEach(modal => modal.remove());
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-[#081020] via-[#0d1a34] to-[#1a3468] bg-fixed">
      <div className="flex-1 w-full text-white pt-28 sm:pt-32 pb-20 sm:pb-24 md:pb-32">
        <div className="max-w-[90rem] mx-auto">
          <ServicesHeader />
          <ServicesGrid showAll={true} />
        </div>
      </div>
    </div>
  );
}
