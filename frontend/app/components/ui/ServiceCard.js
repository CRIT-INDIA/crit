"use client";
import React from "react";
import Link from "next/link";
import { HoverBorderGradient } from "@/app/components/ui/hover-border-gradient";


export function ServiceCard({ service }) {
  return (
    <HoverBorderGradient
      containerClassName="h-full rounded-3xl transition-transform duration-500 will-change-transform hover:scale-105 hover:shadow-2xl"
      className="h-full bg-[#0B1120] p-4 sm:p-6 md:p-8 rounded-3xl flex flex-col transition-all duration-500 group hover:bg-[#141316]"
      as="div"
    >
      <div className="bg-[#AE0B01] w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-xl sm:text-2xl shadow-lg text-white">
        {service.icon && typeof service.icon === 'object' && service.icon.type === 'img' ? (
          <img
            src={service.icon.url}
            alt={service.title + ' icon'}
            className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
          />
        ) : (
          typeof service.icon === 'string' ? service.icon : null
        )}
      </div>

      <h3 className="text-lg sm:text-xl font-semibold text-white/90 mt-4 sm:mt-6 line-clamp-1">
        {service.title}
      </h3>

      <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 mt-2 sm:mt-4 flex-grow line-clamp-3">
        {service.description}
      </p>

      <div className="mt-4 sm:mt-6 flex">
        <HoverBorderGradient
          as={Link}
          href={service.link}
          className="text-white px-3 py-1 text-xs sm:text-sm"
        >
          Learn More
        </HoverBorderGradient>
      </div>
    </HoverBorderGradient>
  );
} 