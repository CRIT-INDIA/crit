"use client";
import React from "react";
import { Vortex } from "../../components/ui/Vortex";

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-start justify-center pt-20 pb-12 px-4 sm:px-6 md:px-8 lg:px-12 w-full min-h-[300px]">
      {/* Vortex background */}
      <div className="absolute inset-0 overflow-hidden">
        <Vortex 
          backgroundColor="black" 
          containerClassName="absolute inset-0 z-0"
          baseRadius={2.5}
          particleCount={320}
          opacity={0.35}
        />
      </div>
      {/* Hero text content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-200">About Us</h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl">
          Leading the way in SAP solutions and digital transformation for enterprises worldwide.
        </p>
      </div>
    </section>
  );
} 