"use client";
import React from "react";

export function ServicesHeader() {
  return (
    <div className="relative z-10 text-center sm:mb-12 px-4 sm:px-1 mt-2">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 inline-block relative">
    <span className="text-white">Our </span>
    <span className="text-blue-500">Services</span>
    <svg 
      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2" 
      width="100%" 
      height="4" 
      viewBox="0 0 200 4"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="underlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8"/>
          <stop offset="30%" stopColor="#3b82f6" stopOpacity="1"/>
          <stop offset="70%" stopColor="#1d4ed8" stopOpacity="1"/>
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9"/>
        </linearGradient>
      </defs>
      <rect 
        x="0" 
        y="0" 
        width="200" 
        height="4" 
        fill="url(#underlineGradient)"
        rx="2"
      />
    </svg>
  </h1>
      <p className="text-base sm:text-lg text-white max-w-3xl mx-auto px-2 sm:px-0">
        Comprehensive SAP solutions tailored to transform your business operations and drive digital excellence
      </p>
    </div>
  );
}