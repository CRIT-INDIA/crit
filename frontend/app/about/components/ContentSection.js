"use client";
import React from "react";

export function ContentSection() {
  return (
    <section className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left: Image */}
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/duz9xipfm/image/upload/v1750912642/bigstock-153437726_ybobwd.jpg"
                alt="Company Overview"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Right: Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-lg sm:text-xl font-bold text-blue-500 mb-2">Welcome to CRITINDIA</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-gray-200">
              Transforming Business Through SAP Excellence
            </h3>
            <p className="mb-4 text-gray-400 text-sm sm:text-base">
              Empower your enterprise with CRITINDIA's comprehensive SAP implementation and support services. We deliver tailored solutions that drive innovation and growth, helping businesses achieve operational excellence through SAP expertise.
            </p>
            <p className="mb-6 text-gray-400 text-sm sm:text-base">
              Our team of experts combines deep technical knowledge with business acumen to provide tailored solutions that address your unique challenges and opportunities.
            </p>
            <button className="relative overflow-hidden group px-6 py-3 bg-blue-600 rounded-md w-full sm:w-auto max-w-xs">
              <span className="absolute inset-0 bg-[#AE0B01] transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              <span className="relative z-10 uppercase text-base text-white">Learn More</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 