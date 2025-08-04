'use client';
import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

const CompanyProgressSection = () => {
    const [businessAnimation, setBusinessAnimation] = useState(null);
  
    useEffect(() => {
      // Load the business deal animation
      fetch('https://res.cloudinary.com/dujw4np0d/raw/upload/v1754038152/Profit_Gains_nvddtl.json')
        .then(response => response.json())
        .then(data => setBusinessAnimation(data))
        .catch(err => {
          console.error('Error loading business animation:', err);
        });
    }, []);
  
    return (
      <div className="min-h-* bg-white flex items-center justify-center p-15">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-red-500 font-medium text-lg tracking-wide uppercase">
                Company progress
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                A leading IT technology
                <br />
                services provider, enterprise
                <br />
                software makers
              </h1>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              Started in the year of 2013 SAP Partner in India for one of
              the most valuable brand in manufacturing industry, we
              chose to move up for sustainable growth using narrow
              focus on enterprise software consulting, implementation
              and maintenance support.
            </p>
            
           <a href="/about"><button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
              Read More
            </button></a>
          </div>
  
          {/* Right Side - Image with Decorative Elements */}
          <div className="relative">
            {/* Background decorative stroke */}
            
  
            {/* Lottie Animation placeholder */}
            <div className="relative">
              <div className="bg-[#fff5f5] p-6 rounded-lg">
                {businessAnimation ? (
                  <Lottie 
                    animationData={businessAnimation}
                    loop={true}
                    className="w-full h-80 object-contain rounded-lg"
                  />
                ) : (
                  <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-gray-500">Loading animation...</div>
                  </div>
                )}
              </div>
            </div>
  
            </div>
  
          </div>
        </div>
  
    );
  };

export default CompanyProgressSection;