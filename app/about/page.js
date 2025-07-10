"use client";
import React from "react";
import Hero from "./components/hero";
import OurMissionSection from "./components/aboutus";
import ERPImplementationDiagram from "./components/erp";
import TechHero from "./components/hero";
import Journey from "./components/journey";

export default function AboutPage() {
  return (

    <div className="min-h-* bg-gradient-to-br from-[#081020] via-[#0d1a34] to-[#1a3468] text-white font-inter overflow-hidden bg-fixed">
      
      
      <TechHero />
      
        <Journey />
     
      <div className="relative min-w-*">
      <ERPImplementationDiagram />
    </div>
      
      <div className="relative">
      <OurMissionSection />
    </div>
    </div>
  );
}
  