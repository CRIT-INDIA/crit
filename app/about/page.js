"use client";
import React from "react";

import OurMissionSection from "./components/expertise";
import ERPImplementationDiagram from "./components/erp";
import TechHero from "./components/hero";
import Journey from "./components/journey";

export default function AboutPage() {
  return (
    <div className="min-h-* bg-white">
      <TechHero />
      <div className="relative min-h-*">
        <Journey />
        </div>
      <div className="relative min-w-* min-h-*">
      <ERPImplementationDiagram />
    </div>
      <div className="relative">
      <OurMissionSection />
    </div>
    </div>
  );
}
  