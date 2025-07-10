"use client";

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useParams } from 'next/navigation';
import { Player } from '@lottiefiles/react-lottie-player';

const ServicesBlock = () => {
  const params = useParams();
  const [initialService, setInitialService] = useState('SAP Implementation Services');
  const [isVisible, setIsVisible] = useState(true);
  const [servicesData, setServicesData] = useState(null);
  const [selectedService, setSelectedService] = useState(initialService);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeFeature, setActiveFeature] = useState(null);
  const [features, setFeatures] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log('ServiceBlock received initialService:', initialService);
  console.log('ServiceBlock selectedService:', selectedService);

  // Default animation to use when none is specified
  const defaultAnimation = "https://assets2.lottiefiles.com/packages/lf20_LmW6VioIWc.json";

  const getFeatureAnimation = useCallback((feature) => {
    return feature.animation || defaultAnimation;
  }, []);

  const statsAnimations = useMemo(() => ({
    implementations: "https://assets2.lottiefiles.com/packages/lf20_LmW6VioIWc.json", // Implementation counter animation
    satisfaction: "https://assets9.lottiefiles.com/packages/lf20_xvrofzfk.json", // Success/satisfaction animation
    experience: "https://assets2.lottiefiles.com/packages/lf20_49rdyysj.json", // Analytics/experience animation
    support: "https://res.cloudinary.com/duz9xipfm/raw/upload/v1751618238/sup_cr0dur.json" // Support centre animation
  }), []);

  const processAnimations = useMemo(() => ({
    assessment: "https://assets9.lottiefiles.com/packages/lf20_5tl1xxnz.json", // Assessment/Analysis
    planning:"https://res.cloudinary.com/duz9xipfm/raw/upload/v1751620471/planinng_jqjust.json",
    implementation: "https://assets9.lottiefiles.com/packages/lf20_LmW6VioIWc.json", // Implementation
    support: "https://res.cloudinary.com/duz9xipfm/raw/upload/v1751618238/sup_cr0dur.json" // Support/Maintenance
  }), []);

  const serviceCards = useMemo(() => [
    {
      title: "Installation, Configuration & Integration",
      description: "Expert system setup and integration services",
      icon: "https://assets5.lottiefiles.com/packages/lf20_kkflmtur.json", // Professional gear/settings animation
      circleColor: "bg-[#FF4B26]"
    },
    {
      title: "Quality Testing & End-User Training",
      description: "Comprehensive testing and training solutions",
      icon: "https://assets3.lottiefiles.com/private_files/lf30_w11f2qv0.json", // Professional training/learning animation
      circleColor: "bg-[#D946EF]"
    }
  ], []);

  // Determine service from URL path
  useEffect(() => {
    const determineServiceFromURL = () => {
      const path = window.location.pathname;
      console.log('Current path:', path);
      
      // Map URL paths to service names
      const serviceMap = {
        '/sap-implementation-services': 'SAP Implementation Services',
        '/sap-rollout-services': 'SAP Implementation Rollout Services',
        '/sap-support-services': 'SAP Support Services',
        '/sap-upgrade-services': 'SAP Upgrade Services',
        '/sap-integration-services': 'SAP Integration Services',
        '/sap-migration-services': 'SAP Migration Services',
        '/sap-automation-services': 'SAP Automation Services',
        '/sap-testing-services': 'SAP Testing Services'
      };
      
      const serviceName = serviceMap[path];
      if (serviceName) {
        console.log('Service determined from URL:', serviceName);
        setInitialService(serviceName);
        setSelectedService(serviceName);
      } else {
        console.log('No service found for path:', path, 'using default');
        // Keep default service
      }
    };

    determineServiceFromURL();
  }, []);

  // Load services data only once
  useEffect(() => {
    setIsLoading(true);
    console.log('Loading services data...');
    fetch('/json/data/services.json')
      .then(response => {
        console.log('Services response:', response);
        return response.json();
      })
      .then(data => {
        console.log('Services data loaded:', data);
        setServicesData(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error loading services:', error);
        setIsLoading(false);
      });
  }, []);

  // Set initial visibility immediately
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Removed mouse movement tracking for better performance

  // Memoized service data
  const currentService = useMemo(() => {
    console.log('Finding service:', selectedService, 'in data:', servicesData);
    const found = servicesData?.services?.sections?.find(
      (section) => section.title === selectedService
    ) || {};
    console.log('Found service:', found);
    return found;
  }, [selectedService, servicesData]);

  // Memoized features with optimization
  useEffect(() => {
    console.log('Updating features for service:', selectedService);
    if (!servicesData?.services?.sections || !selectedService) {
      console.log('No services data or selected service');
      return;
    }

    const newService = servicesData.services.sections.find(
      (section) => section.title === selectedService
    );
    
    console.log('Found service for features:', newService);
    
    if (newService?.features) {
      const updatedFeatures = newService.features.map((feature) => ({
        ...feature,
        subtitle: feature.description?.split(' ').slice(0, 3).join(' ') || '',
      }));
      console.log('Updated features:', updatedFeatures);
      setFeatures(updatedFeatures);
    } else {
      console.log('No features found for service');
      setFeatures([]);
    }
  }, [selectedService, servicesData]);

  const handleServiceChange = useCallback((event) => {
    console.log('Service changed to:', event.target.value);
    setSelectedService(event.target.value);
    setActiveFeature(null); // Reset active feature on service change
    setOpenFAQ(null); // Reset FAQ state on service change
  }, []);

  const toggleFAQ = useCallback((index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  }, [openFAQ]);

  const faqData = useMemo(() => [
    {
      question: "How long does a typical SAP implementation take?",
      answer: "The duration of SAP implementation varies based on the complexity..."
    },
    {
      question: "What are the key benefits of SAP implementation?",
      answer: "SAP implementation provides numerous benefits including improved operational efficiency..."
    },
    {
      question: "Do you provide training for our team?",
      answer: "Yes, we provide comprehensive training programs tailored to different user roles..."
    },
    {
      question: "What support do you offer post-implementation?",
      answer: "We offer 24/7 support services including system monitoring..."
    },
    {
      question: "Can you help with SAP system upgrades?",
      answer: "Absolutely! We specialize in SAP system upgrades including migration to S/4HANA..."
    }
  ], []);

  // Memoized service options
  const serviceOptions = useMemo(() => {
    return servicesData?.services?.sections?.map((section) => (
      <option 
        key={section.title} 
        value={section.title}
        className="bg-slate-900 text-white"
      >
        {section.title}
      </option>
    )) || (
      <option 
        value="SAP Implementation Services"
        className="bg-slate-900 text-white"
      >
        SAP Implementation Services
      </option>
    );
  }, [servicesData]);

  if (isLoading) {
    return (
      <div className="bg-[#0C1C3C] text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
          <p className="text-slate-400">Loading services...</p>
        </div>
      </div>
    );
  }

  // Fallback if no data loaded
  if (!servicesData) {
    return (
      <div className="bg-[#0C1C3C] text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-400">No services data available</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div key={selectedService} className="bg-[#0C1C3C] text-white pt-20">
      

      {/* Hero Section */}
      <section className="relative w-full px-6 py-16 bg-cover bg-center bg-no-repeat min-h-[500px] min-w-[1000px] overflow-hidden "
        style={{ backgroundImage: "url('https://res.cloudinary.com/dujw4np0d/image/upload/v1751361098/image_r62spt.png')" }}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent leading-tight">
              {currentService.h1 || currentService.h2 || currentService.headline || currentService.title}
            </h1>
            <p className="text-xl text-slate-400 mb-8 max-w-lg">
              {currentService.paragraph || currentService.intro_paragraph}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/25">
                Get Started
              </button>
              <button className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-white/10">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Overview Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                {currentService.overview || currentService.paragraph || 
                "Our comprehensive SAP services are designed to transform your business operations through strategic implementation, seamless integration, and ongoing support. We leverage industry best practices and deep domain expertise to deliver solutions that drive measurable business value."}
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                {currentService.overview_extended || 
                "With a proven track record of successful implementations across various industries, our team ensures that your SAP journey is smooth, efficient, and aligned with your business objectives. We focus on minimizing disruption while maximizing the return on your SAP investment."}
              </p>
            </div>
          </div>

          {/* Stats/Metrics */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-center">
                <div className="h-16 w-16 mx-auto mb-4">
                  <Player
                    src={statsAnimations.implementations}
                    loop={true}
                    autoplay={true}
                    style={{ width: '100%', height: '100%' }}
                    speed={0.5}
                    rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
                  />
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-center">
                <div className="h-16 w-16 mx-auto mb-4">
                  <Player
                    src={statsAnimations.satisfaction}
                    loop={true}
                    autoplay={true}
                    style={{ width: '100%', height: '100%' }}
                    speed={0.5}
                    rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
                  />
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-center">
                <div className="h-16 w-16 mx-auto mb-4">
                  <Player
                    src={statsAnimations.experience}
                    loop={true}
                    autoplay={true}
                    style={{ width: '100%', height: '100%' }}
                    speed={0.5}
                    rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
                  />
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-center">
                <div className="h-16 w-16 mx-auto mb-4">
                  <Player
                    src={statsAnimations.support}
                    loop={true}
                    autoplay={true}
                    style={{ width: '100%', height: '100%' }}
                    speed={0.5}
                    rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Process Section */}
      <div className="px-6 my-15">
        <section className="relative w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-2xl font-bold text-white mb-12 text-center">Our Implementation Process</h3>
            <div className="flex justify-between items-center">
              <div className="flex-1 text-center">
                <div className="w-24 h-24 mx-auto mb-4">
                  <Player
                    src={processAnimations.assessment}
                    loop={true}
                    autoplay={true}
                    style={{ width: '100%', height: '100%' }}
                    speed={0.5}
                    rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
                  />
                </div>
                <div className="text-white font-medium mb-2">Assessment</div>
                <div className="text-slate-400 text-sm">Current state analysis</div>
              </div>
              <div className="w-32 h-0.5 bg-red-500/30"></div>
              <div className="flex-1 text-center">
                <div className="w-24 h-24 mx-auto mb-4">
                  <Player
                    src={processAnimations.planning}
                    loop={true}
                    autoplay={true}
                    style={{ width: '100%', height: '100%' }}
                    speed={0.5}
                    rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
                  />
                </div>
                <div className="text-white font-medium mb-2">Planning</div>
                <div className="text-slate-400 text-sm">Strategy & roadmap</div>
              </div>
              <div className="w-32 h-0.5 bg-red-500/30"></div>
              <div className="flex-1 text-center">
                <div className="w-24 h-24 mx-auto mb-4">
                  <Player
                    src={processAnimations.implementation}
                    loop={true}
                    autoplay={true}
                    style={{ width: '100%', height: '100%' }}
                    speed={0.5}
                    rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
                  />
                </div>
                <div className="text-white font-medium mb-2">Implementation</div>
                <div className="text-slate-400 text-sm">Deployment & testing</div>
              </div>
              <div className="w-32 h-0.5 bg-red-500/30"></div>
              <div className="flex-1 text-center">
                <div className="w-24 h-24 mx-auto mb-4">
                  <Player
                    src={processAnimations.support}
                    loop={true}
                    autoplay={true}
                    style={{ width: '100%', height: '100%' }}
                    speed={0.5}
                    rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
                  />
                </div>
                <div className="text-white font-medium mb-2">Support</div>
                <div className="text-slate-400 text-sm">Ongoing optimization</div>
              </div>
            </div>
          </div>
        </section>
      </div>

       {/* Interactive Key Features Section */}
       <section className="max-w-7xl mx-auto px-6 py-16 relative">
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white">KEY FEATURES</h2>
          </div>
          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`relative group cursor-pointer transition-all duration-700 ${index % 2 === 1 ? 'md:mt-12' : ''}`} 
                  onMouseEnter={() => setActiveFeature(index)}
                  onMouseLeave={() => setActiveFeature(null)}
                >
                  <div className="relative mb-4">
                    <div className={`w-32 h-32 mx-auto flex items-center justify-center transform transition-all duration-500 ${activeFeature === index ? 'scale-125 rotate-12' : 'scale-100'} hover:scale-125 hover:rotate-12`}>
                      {feature.animation ? (
                        <Player
                          src={feature.animation}
                          loop={true}
                          autoplay={true}
                          style={{ width: '100%', height: '100%' }}
                          speed={0.5}
                          background="transparent"
                          rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
                        />
                      ) : feature.icon ? (
                        <div className="text-4xl">{feature.icon}</div>
                      ) : (
                        <Player
                          src={defaultAnimation}
                          loop={true}
                          autoplay={true}
                          style={{ width: '100%', height: '100%' }}
                          speed={0.5}
                          background="transparent"
                          rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
                        />
                      )}
                    </div>
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className={`text-xl font-bold transition-all duration-500 ${activeFeature === index ? 'text-white scale-105' : 'text-gray-400'}`}>
                      {feature.title}
                    </h3>
                    
                    <div className={`transition-all duration-500 ${activeFeature === index ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-slate-300 text-sm leading-relaxed px-2">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  <div className={`absolute top-10 left-1/2 w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent transform -translate-x-1/2 transition-all duration-500 ${activeFeature === index ? 'opacity-100' : 'opacity-0'}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Get answers to common questions about our SAP services and implementation process
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:border-red-500/30 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white pr-8">
                  {faq.question}
                </h3>
                <div className={`transform transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className={`transition-all duration-300 ${openFAQ === index ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-8 pb-6">
                  <p className="text-slate-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="text-center mt-12">
          <p className="text-slate-400 mb-4">Still have questions?</p>
          <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/25">
            Contact Support
          </button>
        </div>
      </section>

      {/* Service Cards Section */}
      
    </div>
  );
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0c1c3c] via-[#1a2a4a] to-[#0c1c3c]">
      
      <ServicesBlock />
      
    </div>
  );
} 