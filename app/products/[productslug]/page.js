"use client";

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useParams } from 'next/navigation';
import { Player } from '@lottiefiles/react-lottie-player';
import Image from 'next/image';

const ProductBlock = () => {
  const params = useParams();
  const { productslug } = params;
  const [isVisible, setIsVisible] = useState(true);
  const [productsData, setProductsData] = useState(null);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeFeature, setActiveFeature] = useState(null);
  const [features, setFeatures] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Default animation to use when none is specified
  const defaultAnimation = "https://assets2.lottiefiles.com/packages/lf20_LmW6VioIWc.json";

  const getFeatureAnimation = useCallback((feature) => {
    return feature.animation || defaultAnimation;
  }, []);

  const statsAnimations = useMemo(() => ({
    implementations: "https://assets2.lottiefiles.com/packages/lf20_LmW6VioIWc.json",
    satisfaction: "https://assets9.lottiefiles.com/packages/lf20_xvrofzfk.json",
    experience: "https://assets2.lottiefiles.com/packages/lf20_49rdyysj.json",
    support: "https://res.cloudinary.com/duz9xipfm/raw/upload/v1751618238/sup_cr0dur.json"
  }), []);

  const processAnimations = useMemo(() => ({
    assessment: "https://assets9.lottiefiles.com/packages/lf20_5tl1xxnz.json",
    planning: "https://res.cloudinary.com/duz9xipfm/raw/upload/v1751620471/planinng_jqjust.json",
    implementation: "https://assets9.lottiefiles.com/packages/lf20_LmW6VioIWc.json",
    support: "https://res.cloudinary.com/duz9xipfm/raw/upload/v1751618238/sup_cr0dur.json"
  }), []);

  // Load products data only once
  useEffect(() => {
    setIsLoading(true);
    fetch('/json/data/products.json')
      .then(response => response.json())
      .then(data => {
        setProductsData(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Find the current product by slug
  const currentProduct = useMemo(() => {
    if (!productsData || !productslug) return null;
    return productsData.products.find(product => product.slug === productslug) || null;
  }, [productsData, productslug]);

  // Memoized features with optimization
  useEffect(() => {
    if (!currentProduct) {
      setFeatures([]);
      return;
    }
    // Generate features based on product type
    const generateFeatures = (product) => {
      const baseFeatures = [
        {
          title: "Implementation & Setup",
          description: "Complete product implementation with best practices and industry standards",
          animation: "https://assets2.lottiefiles.com/packages/lf20_LmW6VioIWc.json"
        },
        {
          title: "Integration Services",
          description: "Seamless integration with existing SAP and third-party systems",
          animation: "https://assets5.lottiefiles.com/packages/lf20_kkflmtur.json"
        },
        {
          title: "Customization & Configuration",
          description: "Tailored configuration to meet your specific business requirements",
          animation: "https://assets3.lottiefiles.com/private_files/lf30_w11f2qv0.json"
        },
        {
          title: "Training & Support",
          description: "Comprehensive user training and ongoing technical support",
          animation: "https://res.cloudinary.com/duz9xipfm/raw/upload/v1751618238/sup_cr0dur.json"
        },
        {
          title: "Migration & Upgrade",
          description: "Smooth migration from legacy systems and version upgrades",
          animation: "https://assets9.lottiefiles.com/packages/lf20_5tl1xxnz.json"
        },
        {
          title: "Maintenance & Optimization",
          description: "Continuous monitoring, maintenance, and performance optimization",
          animation: "https://assets9.lottiefiles.com/packages/lf20_xvrofzfk.json"
        }
      ];
      return baseFeatures.map((feature) => ({
        ...feature,
        subtitle: feature.description?.split(' ').slice(0, 3).join(' ') || '',
      }));
    };
    setFeatures(generateFeatures(currentProduct));
  }, [currentProduct]);

  const toggleFAQ = useCallback((index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  }, [openFAQ]);

  const faqData = useMemo(() => [
    {
      question: "How long does a typical SAP product implementation take?",
      answer: "The duration varies based on the product complexity and scope. SAP S/4HANA implementations typically take 6-18 months, while smaller products like SAP Concur can be implemented in 3-6 months."
    },
    {
      question: "What are the key benefits of implementing this SAP product?",
      answer: "Each SAP product offers specific benefits including improved operational efficiency, real-time analytics, streamlined processes, and better user experience tailored to your business needs."
    },
    {
      question: "Do you provide training for our team?",
      answer: "Yes, we provide comprehensive training programs tailored to different user roles and skill levels, ensuring your team can effectively use the new SAP product."
    },
    {
      question: "What support do you offer post-implementation?",
      answer: "We offer 24/7 support services including system monitoring, troubleshooting, maintenance, and continuous optimization to ensure optimal performance."
    },
    {
      question: "Can you help with integration with other SAP products?",
      answer: "Absolutely! We specialize in SAP product integration, ensuring seamless connectivity between different SAP modules and third-party systems."
    }
  ], []);

  if (isLoading) {
    return (
      <div className="bg-[#0C1C3C] text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
          <p className="text-slate-400">Loading products...</p>
        </div>
      </div>
    );
  }

  // Fallback if no data loaded or product not found
  if (!productsData || !currentProduct) {
    return (
      <div className="bg-[#0C1C3C] text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-400">No product data available</p>
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
    <div className="bg-[#0C1C3C] text-white pt-20">
      

      {/* Hero Section */}
      <section className="relative w-full px-6 py-16 bg-cover bg-center bg-no-repeat min-h-[500px] min-w-[1000px] overflow-hidden"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dujw4np0d/image/upload/v1751361098/image_r62spt.png')" }}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent leading-tight">
              {currentProduct.name} Services
            </h1>
            <p className="text-xl text-slate-400 mb-8 max-w-lg">
              {currentProduct.on_page_copy}
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
          {/* Product Image */}
          <div className="flex-1 w-full max-w-lg animate-floatIn">
            <div className="bg-[#142338] p-8 md:p-10 rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-blue-900/30">
              <div className="relative aspect-[16/10] w-[95%] mx-auto">
                <Image
                  src="https://res.cloudinary.com/dujw4np0d/image/upload/v1751023556/image_10_v9ywju.png"
                  alt={`${currentProduct.name} Dashboard`}
                  className="rounded-lg object-cover transition-transform duration-700 hover:scale-102"
                  fill
                  priority
                />
              </div>
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
                {currentProduct.on_page_copy || 
                "Our comprehensive SAP product services are designed to transform your business operations through strategic implementation, seamless integration, and ongoing support. We leverage industry best practices and deep domain expertise to deliver solutions that drive measurable business value."}
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                With a proven track record of successful implementations across various industries, our team ensures that your SAP product journey is smooth, efficient, and aligned with your business objectives. We focus on minimizing disruption while maximizing the return on your SAP investment.
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

      <section className="max-w-7xl mx-auto px-6">
        
        
        

        {/* Contact Support */}
        <div className="text-center mt-12">
          <p className="text-slate-400 mb-4">Still have questions?</p>
          <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/25">
            Contact Support
          </button>
        </div>
      </section>
    </div>
  );
};

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0c1c3c] via-[#1a2a4a] to-[#0c1c3c]">
      <ProductBlock />
    </div>
  );
} 