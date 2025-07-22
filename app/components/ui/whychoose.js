import React from 'react';
import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Certified Expertise",
      description: "Team of certified SAP professionals with extensive implementation experience."
    },
    {
      title: "End-to-End Support", 
      description: "Comprehensive support from assessment to post-implementation maintenance."
    },
    {
      title: "Industry Expertise",
      description: "Deep understanding of industry-specific requirements and best practices."
    }
  ];

  return (
    <div className="text-black flex items-center w-full px-2 py-8 sm:px-4 sm:py-12 lg:px-10 lg:py-20">
      <div className="max-w-7xl mx-auto w-full px-0 sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        
          
          {/* Left side - Office Image */}
          <div className="relative w-full mb-8 lg:mb-0">
            <div className="rounded-none sm:rounded-xl overflow-hidden">
              <div className="aspect-[16/9] sm:aspect-[4/3] md:aspect-[3/2] relative w-full min-h-[180px] sm:min-h-[240px] md:min-h-[320px]">
                <Image 
                  src="https://res.cloudinary.com/dujw4np0d/image/upload/v1750913233/DeWatermark.ai_1750851940290-_2__iyr1bg.avif" 
                  alt="CRIT India Office" 
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-4 px-2 sm:px-8 lg:px-0">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Why Choose{' '}
                <span className="text-red-500">Connecting Roots IT</span>{' '}
              </h1>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex sm:flex-row items-start gap-2 sm:gap-4">
                  {/* Blue checkmark */}
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white stroke-2" />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-1 sm:space-y-2">
                    <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-black">
                      {feature.title}
                    </h1>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;