'use client';
import React from 'react';
import Image from 'next/image';

export default function SapObject() {
  return (
    <div className="min-h-screen w-full bg-[#1C2E4E]">
      {/* Header Section */}
      <div className="w-full bg-[#142338] py-4 px-4 md:px-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl text-gray-300 font-light animate-fadeIn hover:text-blue-400 transition-colors duration-300 font-['Inria_Serif']">SAP BUSSINESS OBJECT</h2>
        </div>
      </div>

      <div className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content Section */}
          <div className="flex-1 space-y-8">
            <h1 className="group">
              <span className="text-4xl md:text-5xl font-bold text-white animate-slideIn font-['Inria_Serif'] inline-block transition-all duration-300 group-hover:text-blue-400 group-hover:translate-x-2">
                SAP BUSINESS OBJECT Services
              </span>
              <span className="block mt-2 text-3xl md:text-4xl animate-slideInDelay font-['Inria_Serif'] inline-block transition-all duration-300 hover:text-blue-400 hover:translate-x-2">
                for Analytics
              </span>
            </h1>

            <div className="space-y-6 animate-fadeInUp font-['Inknut_Antiqua']">
              <div>
                <p className="text-gray-300 mb-1">Category: Business Intelligence (BI)</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <span className="text-gray-300">•</span>
                  <p className="text-gray-300 group">
                    <span className="text-blue-400 font-semibold transition-all duration-300 group-hover:text-blue-300 group-hover:translate-x-1 inline-block">Description:</span><br/>
                    SAP BusinessObjects is a BI suite
                    for data reporting, analysis, and<br />
                    visualization.
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-gray-300">•</span>
                  <p className="text-gray-300 group">
                    <span className="text-blue-400 font-semibold transition-all duration-300 group-hover:text-blue-300 group-hover:translate-x-1 inline-block">Purpose:</span><br/>
                    Helps companies make data-driven
                    decisions through ad hoc reporting,<br />
                    dashboards, and analytics.
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-gray-300">•</span>
                  <p className="text-gray-300 group">
                    <span className="text-blue-400 font-semibold transition-all duration-300 group-hover:text-blue-300 group-hover:translate-x-1 inline-block">Benefits:</span><br/>
                    Self-service BI, interactive
                    dashboards, enterprise-level reporting, and<br />
                    integration with other SAP tools.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="flex-1 w-full max-w-lg animate-floatIn">
            <div className="bg-[#142338] p-8 md:p-10 rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-blue-900/30">
              <div className="relative aspect-[16/10] w-[95%] mx-auto">
                <Image
                  src="https://res.cloudinary.com/dujw4np0d/image/upload/v1751023556/image_10_v9ywju.png"
                  alt="SAP Business Intelligence Analytics Dashboard"
                  className="rounded-lg object-cover transition-transform duration-700 hover:scale-102"
                  fill
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 