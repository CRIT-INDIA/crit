'use client';

import React from 'react';
import { Building, Factory, Hospital } from 'lucide-react';

const FeaturedClients = () => {
  return (
    <div className="bg-[#0c1c3c] text-white font-sans py-12 min-h-*">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-6xl sm:text-6xl lg:text-5xl font-bold text-white mb-2 sm:mb-8 text-center">
          Featured Clients
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            { icon: Building, title: "Fortune 500", description: "Leading global technology corporation with successful SAP implementation across 25+ countries" },
            { icon: Factory, title: "Manufacturing Giant", description: "Major industrial manufacturer with seamless SAP rollout across European operations" },
            { icon: Hospital, title: "Healthcare Leader", description: "International healthcare provider with integrated SAP solutions across 100+ facilities" }
          ].map((client, index) => (
            <div 
              key={index} 
              className="group bg-slate-800/50 p-6 sm:p-8 rounded-lg transform-gpu transition-all duration-500 hover:translate-y-[-10px] hover:shadow-xl hover:shadow-red-600/50 cursor-pointer"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-700 flex items-center justify-center mb-4 sm:mb-6 transform-gpu transition-transform duration-500 ">
                <client.icon className="text-red-400 w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl mb-3 text-blue-400">
                {client.title}
              </h3>
              <p className="text-gray-400 group-hover:text-white transition-colors text-sm sm:text-base">
                {client.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedClients;