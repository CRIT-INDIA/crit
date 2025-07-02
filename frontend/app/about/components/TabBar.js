"use client";
import React from "react";

const tabs = [
  { id: "overview", label: "Company Overview" },
  { id: "mission", label: "Mission & Vision" },
  { id: "team", label: "Our Team" },
  { id: "history", label: "Company Achievements" }
];

export function TabBar() {
  return (
    <nav className="sticky top-[72px] z-30 w-full bg-black/80 backdrop-blur-sm px-4 sm:px-6 md:px-8 lg:px-12 py-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 sm:gap-8 overflow-x-auto pb-2 hide-scrollbar">
          {tabs.map(tab => (
            <a 
              key={tab.id}
              href={`#${tab.id}`} 
              className="relative whitespace-nowrap text-gray-200 font-medium px-3 py-1 transition-colors focus:outline-none group"
            >
              {tab.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
} 