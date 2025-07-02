import React from 'react';
import { Check } from 'lucide-react';
import Image from 'next/image';

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
    <div className="text-white flex items-center w-full p-10" style={{ backgroundColor: '#0c1c3c' }}>
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Office Image */}
          <div className="relative w-full">
            <div className="rounded-none sm:rounded-xl overflow-hidden">
              <div className="aspect-[16/9] relative w-full">
                <Image 
                  src="https://res.cloudinary.com/dujw4np0d/image/upload/v1750913233/DeWatermark.ai_1750851940290-_2__iyr1bg.avif" 
                  alt="CRIT India Office" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-4 px-4 sm:px-8 lg:px-0">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Why Choose{' '}
                <span className="text-blue-400">Connecting Roots IT</span>{' '}
              
              </h1>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  {/* Blue checkmark */}
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white stroke-2" />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
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