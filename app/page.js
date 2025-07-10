"use client";
import { ThreeDMarquee } from "./components/ui/3d-marquee";
import WhyChooseUs from "./components/ui/whychoose";
import SAPServices3DShowcase from "./components/ui/risewithsap";
import WhatSetsUsApart from "./components/ui/whatsetsusapart";
import ContactForm from './components/ui/ContactForm';
import Navbar from "./components/ui/Navbar";
import { ServicesHeader } from "./components/ui/ServicesHeader";
import { ServicesGrid } from "./components/ui/ServicesGrid";
import ProductSection from "./components/ui/products";
import GrowingSection from "./components/ui/growingsection";
import Capabilities from "./components/ui/capabilities";
import FeaturedClients from "./components/ui/FeaturedClients";
import AchievementsPage from "./components/ui/achivements";
import MovingClientsSection from "./components/ui/clients"



export default function Home() {
  return (
    <div className="relative overflow-hidden max-w-[1800px] w-full mx-auto bg-gradient-to-br from-[#081020] via-[#0d1a34] to-[#1a3468] bg-fixed">
      {/* Full-width hero section */}
      <div className="relative h-* min-h-[400px] overflow-hidden">
        <ThreeDMarquee />
      </div>
      
      <div className="relative">  
        <MovingClientsSection />
      </div>

      {/* Unified container for all main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="relative">
          <WhyChooseUs />
        </div>
        
        
        <div className="relative">
          <ServicesHeader />
          <ServicesGrid mobileLimit={2} />
        </div>
        <div className="relative">
          <ProductSection />
        </div>
        <div className="relative">
          <FeaturedClients />
        </div>
        <div className="relative">
          <SAPServices3DShowcase />
        </div>
        
        {/* <div className="relative">
          <WhatSetsUsApart />
        </div> */}
        <div className="relative overflow-hidden">
          <Capabilities />
        </div>
        
        <div className="relative">
          <GrowingSection />
        </div>
        {/*<div className="relative">
          <AchievementsPage />
          </div>*/}
        <div className="relative overflow-hidden">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
