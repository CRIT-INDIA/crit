import React from 'react';
import Link from 'next/link';
 
const ProductSection = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "SAP S/4 HANA",
      description: "We specialize in tokenizing real-world assets, enabling seamless fractional ownership and blockchain-secured transactions.",
      image: "https://res.cloudinary.com/duz9xipfm/image/upload/v1751344095/image_1_fgf2ck.jpg",
      category: "ERP Implementation"
    },
    {
      id: 2,
      title: "SAP SuccessFactors",
      description: "We offer end-to-end token development services, creating secure, efficient, and scalable tokens tailored to your needs.",
      image: "https://res.cloudinary.com/dujw4np0d/image/upload/v1751448000/DeWatermark.ai_1751435005351_hwus46.jpg",
      category: "Success Factors"
    },
    {
      id: 3,
      title: "SAP Analytics & Ariba",
      description: "We build comprehensive enterprise solutions combining SAP Analytics Cloud for advanced business intelligence and SAP Ariba for streamlined procurement processes.",
      image: "https://res.cloudinary.com/duz9xipfm/image/upload/v1751284251/image_2_koxpg4.png",
      category: "Enterprise Solutions"
    },
    {
      id: 4,
      title: "SAP Concur",
      description: "We help bring your Concur vision to life with expert token development, strategic marketing, and community-building solutions.",
      image: "https://res.cloudinary.com/dujw4np0d/image/upload/v1751535788/AdobeStock_704829221_Preview-processed_lightpdf.com_oohiae.jpg",
      category: "Concur"
    },
    {
      id: 5,
      title: "SAP BTP",
      description: "Unlock innovation with SAP Business Technology Platform for analytics, integration, and extensibility.",
      image: "https://res.cloudinary.com/dujw4np0d/image/upload/v1751534532/AdobeStock_330968808_Preview_hubplq.jpg",
      category: "Technology Platform"
    },
    {
      id: 6,
      title: "SAP Fiori",
      description: "Enhance user experience with SAP Fiori's modern, intuitive design for all SAP applications.",
      image: "https://res.cloudinary.com/duz9xipfm/image/upload/v1751344095/image_3_jfnwiv.jpg",
      category: "User Experience"
    }
  ];
 
  const slugify = (title) =>
    '/products/' + title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
 
  return (
    <div className="min-h-* py-8 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 inline-block relative">
    <span className="text-white">Our </span>
    <span className="text-blue-500">Products</span>
    <svg 
      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2" 
      width="100%" 
      height="4" 
      viewBox="0 0 200 4"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="underlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8"/>
          <stop offset="30%" stopColor="#3b82f6" stopOpacity="1"/>
          <stop offset="70%" stopColor="#1d4ed8" stopOpacity="1"/>
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9"/>
        </linearGradient>
      </defs>
      <rect 
        x="0" 
        y="0" 
        width="200" 
        height="4" 
        fill="url(#underlineGradient)"
        rx="2"
      />
    </svg>
  </h1>  
      </div>
 
        {/* Mobile Layout - 2x2 Grid (First 2 Products Only) */}
        <div className="block md:hidden">
          <div className="grid grid-cols-2 gap-4">
            {portfolioItems.slice(0, 2).map((item) => (
              <Link key={item.id} href={slugify(item.title)}>
                <div
                  className="group relative overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-102 hover:shadow-xl cursor-pointer"
                  style={{ minHeight: '220px' }}
                >
                  {/* Background Image with Zoom Effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
                      style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${item.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                  </div>
 
                  {/* Content Overlay */}
                  <div className="relative z-10 p-4 h-full flex flex-col justify-end">
                    {/* Title Only */}
                    <div>
                      <h3 className="text-white text-base font-bold leading-tight">
                        {item.title}
                      </h3>
                    </div>
 
                    {/* Hover Indicator */}
                    <div className="absolute bottom-3 right-3 w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
 
                  {/* Gradient Overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Tablet Layout - 2 Columns */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-2 gap-6">
            {portfolioItems.map((item) => (
              <Link key={item.id} href={slugify(item.title)}>
                <div
                  className="group relative overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
                  style={{ minHeight: '350px' }}
                >
                  {/* Background Image with Zoom Effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
                      style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${item.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                  </div>
 
                  {/* Content Overlay */}
                  <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                    {/* Category Badge */}
                    <div className="flex justify-between items-start mb-4">
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                        {item.category}
                      </span>
                    </div>
 
                    {/* Title and Description */}
                    <div className="mt-auto">
                      <h3 className="text-white text-xl font-bold mb-3 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-200 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
 
                    {/* Hover Indicator */}
                    <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
 
                  {/* Gradient Overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </Link>
            ))}
          </div>
        </div>
 
        {/* Desktop Layout - Original Masonry Grid (unchanged) */}
        <div className="hidden lg:block cursor-pointer">
          <div className="grid grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Link key={item.id} href={slugify(item.title)}>
                <div
                  className={`
                    group relative overflow-hidden rounded-2xl
                    transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer
                    ${index === 0 ? 'row-span-2' : ''}
                    ${index === 4 ? 'col-span-2 -mt-48' : ''}
                  `}
                  style={{
                    minHeight: (index === 0 || index === 2 || index === 4) ? '500px' : '300px'
                  }}
                >
                  {/* Background Image with Zoom Effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
                      style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${item.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                  </div>
 
                  {/* Content Overlay */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                    {/* Category Badge */}
                   
 
                    {/* Title and Description */}
                    <div className="mt-auto">
                      <h3 className="text-white text-2xl font-bold mb-3 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-200 text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
 
                    {/* Hover Indicator */}
                    <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
 
                  {/* Gradient Overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </Link>
            ))}
          </div>
        </div>
 
        {/* Bottom CTA */}
        
      </div>
    </div>
  );
};
 
export default ProductSection;