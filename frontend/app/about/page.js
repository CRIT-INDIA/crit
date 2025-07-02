"use client";
import React from "react";
import { HeroSection } from "./components/HeroSection";
import { TabBar } from "./components/TabBar";
import { ContentSection } from "./components/ContentSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white font-inter overflow-x-hidden">
      <HeroSection />
      <TabBar />
      <ContentSection />
    </div>
  );
}
  