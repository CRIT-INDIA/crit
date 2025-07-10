import React, { useState, useEffect } from 'react';
import { Award, CheckCircle, Star, Globe, Users, MapPin } from 'lucide-react';

const WhatSetsUsApart = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      id: 1,
      icon: Award,
      title: "SAP Gold Partner",
      description: "As a SAP Gold Partner, best practices and robust solutions are at the heart of our offerings.",
      color: "from-[#5062B9] to-[#3A4BA2]",
      shadowColor: "shadow-[#5062B9]/20"
    },
    {
      id: 2,
      icon: CheckCircle,
      title: "Industry-Tailored SAP Integration Solutions",
      description: "We offer vertical solutions that are completely with multiple SAP products, providing a seamless business engagement experience.",
      color: "from-[#3A4BA2] to-[#2C3978]",
      shadowColor: "shadow-[#3A4BA2]/20"
    },
    {
      id: 3,
      icon: Star,
      title: "Cloud and SAP Products-Centric Services",
      description: "Our focus on cloud technologies and SAP products ensures efficient and scalable solutions for our clients.",
      color: "from-[#2C3978] to-[#1B2859]",
      shadowColor: "shadow-[#2C3978]/20"
    },
    {
      id: 4,
      icon: Globe,
      title: "Worldwide Presence",
      description: "Serving clients in more than 25 countries, 19+ states of global reach and localized service.",
      color: "from-[#1B2859] to-[#5062B9]",
      shadowColor: "shadow-[#1B2859]/20"
    },
    {
      id: 5,
      icon: Users,
      title: "Dynamic and Dedicated Team",
      description: "Our team is young, energetic, and passionate about delivering exceptional results for our clients.",
      color: "from-[#5062B9] to-[#3A4BA2]",
      shadowColor: "shadow-[#5062B9]/20"
    },
    {
      id: 6,
      icon: MapPin,
      title: "Extensive Domain and Enterprise Knowledge",
      description: "We combine deep industry knowledge with enterprise-level expertise to provide custom solutions.",
      color: "from-[#3A4BA2] to-[#2C3978]",
      shadowColor: "shadow-[#3A4BA2]/20"
    }
  ];

  return (
    <div className="min-h-* py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: '#0c1c3c' }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 sm:w-80 h-40 sm:h-80 bg-[#5062B9]/5 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 sm:w-80 h-40 sm:h-80 bg-[#3A4BA2]/5 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-96 h-48 sm:h-96 bg-[#2C3978]/5 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 bg-gradient-to-r from-[#5062B9] to-[#1B2859] bg-clip-text text-transparent">
            What Sets Us Apart
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
            With over years of Industry outcome and tech obsession, we ensure that your business is future-ready
          </p>
          <div className="mt-6 sm:mt-8 w-16 sm:w-24 h-1 bg-gradient-to-r from-[#5062B9] to-[#1B2859] mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isHovered = hoveredCard === feature.id;
            
            return (
              <div
                key={feature.id}
                className={`group relative transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card */}
                <div className={`
                  relative bg-slate-800/30 backdrop-blur-lg rounded-2xl p-6 sm:p-8 h-full
                  transform transition-all duration-500 hover:scale-105
                  border border-slate-700/30 hover:border-slate-600/50
                  ${isHovered ? `shadow-2xl ${feature.shadowColor}` : 'shadow-lg shadow-black/20'}
                `}>
                  
                  {/* Gradient overlay */}
                  <div className={`
                    absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 
                    transition-opacity duration-500 bg-gradient-to-br ${feature.color}
                  `}></div>
                  
                  {/* Icon container with 3D effect */}
                  <div className={`
                    relative mb-6 w-14 sm:w-16 h-14 sm:h-16 mx-auto
                    transform transition-all duration-500
                    ${isHovered ? 'scale-110' : 'scale-100'}
                  `}>
                    <div className={`
                      absolute inset-0 rounded-xl bg-gradient-to-br ${feature.color}
                      transform transition-all duration-500
                      ${isHovered ? 'scale-110' : 'scale-100'}
                      shadow-lg
                    `}></div>
                    <div className="relative w-14 sm:w-16 h-14 sm:h-16 bg-white rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-105">
                      <IconComponent 
                        size={24} 
                        className={`sm:w-7 sm:h-7 transform transition-all duration-500 ${
                          isHovered ? 'scale-110' : 'scale-100'
                        } text-black`}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <h3 className={`
                      text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 
                      transform transition-all duration-500
                    `}>
                      {feature.title}
                    </h3>
                    <p className={`
                      text-slate-300 leading-relaxed text-sm sm:text-base
                      transform transition-all duration-500
                      ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-90'}
                    `}>
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* 3D depth shadow */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl
                  transform transition-all duration-500 -z-10 opacity-10
                  ${isHovered ? 'translate-x-2 translate-y-2 scale-105' : 'translate-x-1 translate-y-1 scale-100'}
                  blur-sm
                `}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA section */}
        
      </div>
    </div>
  );
};

export default WhatSetsUsApart;