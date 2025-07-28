"use client";
import { Suspense, lazy, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import { ThreeDMarquee } from "./components/ui/3d-marquee";
import MovingClientsSection from "./components/ui/clients";


// Lazy load non-critical components
const WhyChooseUs = dynamic(() => import('./components/ui/whychoose'), { 
  loading: () => <div className="h-[500px] w-full bg-gray-100 animate-pulse"></div> 
});

const ServicesGrid = dynamic(() => import('./components/ui/ServicesGrid'), { 
  loading: () => <div className="h-[500px] w-full bg-gray-100 animate-pulse"></div> 
});

const DesignClassesSection = dynamic(() => import('./components/ui/products'), { 
  loading: () => <div className="h-[500px] w-full bg-gray-100 animate-pulse"></div> 
});

const FeaturedClients = dynamic(() => import('./components/ui/FeaturedClients'), { 
  loading: () => <div className="h-[300px] w-full bg-gray-100 animate-pulse"></div> 
});

const SAPServices3DShowcase = dynamic(() => import('./components/ui/risewithsap'), { 
  loading: () => <div className="h-[600px] w-full bg-gray-100 animate-pulse"></div> 
});

const Capabilities = dynamic(() => import('./components/ui/capabilities'), { 
  loading: () => <div className="h-[500px] w-full bg-gray-100 animate-pulse"></div> 
});

const GrowingSection = dynamic(() => import('./components/ui/growingsection'), { 
  loading: () => <div className="h-[400px] w-full bg-gray-100 animate-pulse"></div> 
});

const ContactForm = dynamic(() => import('./components/ui/ContactForm'), { 
  loading: () => <div className="h-[600px] w-full bg-gray-100 animate-pulse"></div> 
});

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Only render components on the client side
  if (!isClient) {
    return (
      <div className="relative overflow-hidden max-w-[1800px] w-full mx-auto bg-[#fff5f5] min-h-screen">
        <div className="h-screen w-full bg-gray-100 animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden max-w-[1800px] w-full mx-auto bg-[#fff5f5]">
      {/* Critical components rendered immediately */}
      <div className="relative h-* min-h-[400px] overflow-hidden">
        <ThreeDMarquee />
      </div>
      
      <div className="relative">  
        <MovingClientsSection />
      </div>

      {/* Lazy loaded components with Suspense boundaries */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Suspense fallback={<div className="h-[500px] w-full bg-gray-100 animate-pulse"></div>}>
          <div className="relative">
            <WhyChooseUs />
          </div>
        </Suspense>

        <Suspense fallback={<div className="h-[500px] w-full bg-gray-100 animate-pulse"></div>}>
          <div className="relative">
            <ServicesGrid mobileLimit={2} />
          </div>
        </Suspense>

        <Suspense fallback={<div className="h-[500px] w-full bg-gray-100 animate-pulse"></div>}>
          <div className="relative">
            <DesignClassesSection />
          </div>
        </Suspense>

        <Suspense fallback={<div className="h-[300px] w-full bg-gray-100 animate-pulse"></div>}>
          <div className="relative">
            <FeaturedClients />
          </div>
        </Suspense>

        <Suspense fallback={<div className="h-[600px] w-full bg-gray-100 animate-pulse"></div>}>
          <div className="relative">
            <SAPServices3DShowcase />
          </div>
        </Suspense>

        <Suspense fallback={<div className="h-[500px] w-full bg-gray-100 animate-pulse"></div>}>
          <div className="relative overflow-hidden">
            <Capabilities />
          </div>
        </Suspense>

        <Suspense fallback={<div className="h-[400px] w-full bg-gray-100 animate-pulse"></div>}>
          <div className="relative">
            <GrowingSection />
          </div>
        </Suspense>

        <Suspense fallback={<div className="h-[600px] w-full bg-gray-100 animate-pulse"></div>}>
          <div className="relative overflow-hidden">
            <ContactForm />
          </div>
        </Suspense>
      </div>
    </div>
  );
}
