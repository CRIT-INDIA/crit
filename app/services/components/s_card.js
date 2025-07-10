"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { HoverBorderGradient } from "@/app/components/ui/hover-border-gradient";

export function ServiceCard({ service }) {
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, visible: false });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    setSpotlight({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      visible: true
    });
  };

  const handleMouseLeave = () => {
    setSpotlight(s => ({ ...s, visible: false }));
  };

  return (
    <div
      ref={cardRef}
      className="relative h-full bg-[#13274F]/60 backdrop-blur-md border border-slate-600/40 rounded-xl md:rounded-2xl p-2  md:p-6 flex flex-col transition-all duration-300 group hover:border-slate-400/60 hover:shadow-xl hover:shadow-slate-500/10 hover:-translate-y-1 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Spotlight effect */}
      {spotlight.visible && (
        <div
          className="pointer-events-none absolute z-10"
          style={{
            left: spotlight.x - 120,
            top: spotlight.y - 120,
            width: 240,
            height: 240,
            }}
        />
      )}
      <div className="bg-[#2563EB] w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-xl sm:text-2xl shadow-lg text-slate-200 ring-1 ring-white/10">
        {service.icon && typeof service.icon === 'object' && service.icon.type === 'img' ? (
          <img
            src={service.icon.url}
            alt={service.title + ' icon'}
            className="w-6 h-6 sm:w-6 sm:h-6 object-contain"
          />
        ) : (
          typeof service.icon === 'string' ? service.icon : null
        )}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-slate-100 mt-4 sm:mt-6 line-clamp-1 group-hover:text-white transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-sm sm:text-base text-slate-300 group-hover:text-slate-200 mt-2 sm:mt-4 flex-1 transition-colors duration-300">
        {service.description}
      </p>
      <div className="mt-4 sm:mt-6 flex">
        <Link href={service.link} passHref legacyBehavior>
          <a className="text-slate-300 hover:text-slate-100 font-medium transition-colors duration-300 flex items-center gap-2 group/link">
            Learn More
            <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
} 