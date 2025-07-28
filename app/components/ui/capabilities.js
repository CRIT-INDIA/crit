// app/components/ui/capabilities.js
'use client';

import React from 'react';
import {
  Bot,
  Cloud,
  Lightbulb,
  Zap,
  Shield,
  Settings,
  TrendingUp,
  Rocket
} from 'lucide-react';

const FlipCard = ({ item, index }) => {
  return (
    <div className="group h-40 sm:h-44 md:h-52 [perspective:1000px] touch-pan-y">
      <div className="relative h-full w-full transition-all duration-500 sm:duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] active:[transform:rotateY(180deg)] sm:active:[transform:none]">
        {/* Front of card */}
        <div className="absolute inset-0 h-full w-full [backface-visibility:hidden]">
          <div className="h-full bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl p-3 sm:p-4 md:p-6 flex flex-col items-center justify-center space-y-2 sm:space-y-3 md:space-y-4 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
            {/* Decorative gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-transparent to-pink-50 opacity-50"></div>
            
            {/* Animated background circles */}
            <div className="hidden sm:block absolute -top-8 -right-8 w-24 h-24 bg-red-100 rounded-full blur-2xl opacity-40 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="hidden sm:block absolute -bottom-8 -left-8 w-32 h-32 bg-pink-100 rounded-full blur-2xl opacity-30 group-hover:scale-125 transition-transform duration-700"></div>
            
            {/* Icon container with animation */}
            <div className="relative z-10 p-1 sm:p-1.5 md:p-2 bg-red-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
              <div className="text-white">
                {React.cloneElement(item.icon, { className: "w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" })}
              </div>
            </div>
            
            {/* Title with gradient text on hover */}
            <h2 className="relative z-10 text-sm sm:text-base md:text-lg font-bold text-gray-800 text-center leading-tight px-1 sm:px-2 group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 line-clamp-2">
              {item.title.split(' ').map((word, i, arr) => (
                <React.Fragment key={i}>
                  {word}
                  {i < arr.length - 1 ? ' ' : ''}
                </React.Fragment>
              ))}
            </h2>
            
            
          </div>
        </div>
        
        {/* Back of card */}
        <div className="absolute inset-0 h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="h-full bg-red-500 rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center shadow-xl relative overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse delay-300"></div>
            </div>
            
            {/* Glass morphism overlay */}
            <div className="absolute inset-2 backdrop-blur-sm rounded-xl"></div>
            
            {/* Content */}
            <div className="relative z-10 text-center">
              <div className="mb-3 p-2 bg-white/20 backdrop-blur-sm rounded-lg inline-block">
                <div className="text-white">
                  {React.cloneElement(item.icon, { className: "w-6 h-6" })}
                </div>
              </div>
              <p className="text-white text-xs sm:text-sm leading-relaxed font-medium px-1 sm:px-2 line-clamp-4 sm:line-clamp-5">
                {item.description}
              </p>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

const Capabilities = () => {
  const services = [
    {
      title: "AI-Powered Solutions",
      description: "Leverage cutting-edge artificial intelligence and machine learning to automate and enhance your business processes for maximum efficiency.",
      icon: <Bot />
    },
    {
      title: "Cloud Architecture",
      description: "Build scalable, flexible cloud infrastructure that enables digital transformation and supports your growing business needs.",
      icon: <Cloud />
    },
    {
      title: "Digital Innovation",
      description: "Create breakthrough digital experiences using emerging technologies and innovative approaches to solve complex business challenges.",
      icon: <Lightbulb />
    },
    {
      title: "Agile Delivery",
      description: "Employ modern agile methodologies to deliver solutions faster, with greater flexibility and continuous improvement cycles.",
      icon: <Rocket />
    },
    {
      title: "Cybersecurity",
      description: "Protect your digital assets with advanced security measures, threat detection, and comprehensive risk management strategies.",
      icon: <Shield />
    },
    {
      title: " sales and distribution",
      description: "Continuous integration and deployment with round-the-clock monitoring and support from our global team of experts.",
      icon: <Settings />
    },
    {
      title: "Smart Automation",
      description: "Streamline operations with intelligent process automation, RPA, and workflow optimization solutions.",
      icon: <Zap />
    },
    {
      title: "Strategic Growth",
      description: "Partner with us for long-term success with strategic planning, continuous optimization, and innovation roadmapping.",
      icon: <TrendingUp />
    }
  ];

  return (
    <div className="min-h-screen py-8 sm:py-12 md:py-20 px-2 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
        <div className="text-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 inline-block relative">
    <span className="text-black">Our </span>
    <span className="text-red-500">Capabilities</span>
    <svg className="mx-auto my-0" style={{marginTop: '2px'}} width="120" height="18" viewBox="0 0 180 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 18 Q 70 8, 170 14" stroke="#dc2626" strokeWidth="4" strokeLinecap="round" fill="none"/>
            <path d="M25 21 Q 100 15, 160 18" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" fill="none"/>
          </svg>
   </h1>      </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Transforming Business Through Expert SAP Implementation and Digital Solutions
          </p>
          
          
        </div>
        
        <div className="max-w-6xl mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {services.map((item, index) => (
              <FlipCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;