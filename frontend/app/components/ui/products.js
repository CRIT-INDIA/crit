import React from 'react';
 
const ProductSection = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "SAP S/4 HANA",
      description: "We specialize in tokenizing real-world assets, enabling seamless fractional ownership and blockchain-secured transactions.",
      image: "https://res.cloudinary.com/drvug594q/image/upload/v1751435057/S4-HANA-cloud_lrmjwc.png",
      category: "ERP Implementation"
    },
    {
      id: 2,
      title: "SAP SuccessFactors",
      description: "We offer end-to-end token development services, creating secure, efficient, and scalable tokens tailored to your needs. ",
      image: "https://res.cloudinary.com/drvug594q/image/upload/v1751434326/imgi_189_spot-product-application-automation-broad-saas-connectivity_z35swm_tjn32m.webp",
      category: "Success Factors"
    },
    {
      id: 3,
      title: "SAP Analytics & Ariba",
      description: "We build comprehensive enterprise solutions combining SAP Analytics Cloud for advanced business intelligence and SAP Ariba for streamlined procurement processes. ",
      image: "https://res.cloudinary.com/drvug594q/image/upload/v1751434327/imgi_228_sap_solutions_yfpqpr.webp",
      category: "Enterprise Solutions"
    },
    {
      id: 4,
      title: "SAP Concur",
      description: "We help bring your memecoin vision to life with expert token development, strategic marketing, and community-building solutions.",
      image: "https://res.cloudinary.com/drvug594q/image/upload/v1751434326/imgi_163_SAP_2011_logo.svg_uuwdpq.webp",
      category: "Memecoin"
    }
  ];
 
  return (
    <div style={{ backgroundColor: '#0c1c3c' }} className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Products
          </h2>
          
        </div>
 
        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {portfolioItems.slice(0, 4).map((item, index) => (
            <div
              key={item.id}
              className={`
                group relative overflow-hidden rounded-2xl
                transform transition-all duration-500 hover:scale-105 hover:shadow-2xl
                ${index === 0 || index === 2 ? 'lg:row-span-2' : ''}
                ${index === 3 ? 'md:col-span-1' : ''}
              `}
              style={{
                minHeight: index === 0 || index === 2 ? '500px' : '300px'
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
              <div className="relative z-10 p-4 sm:p-6 lg:p-8 h-full flex flex-col justify-between">
                {/* Category Badge */}
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block px-2 sm:px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm font-medium">
                    {item.category}
                  </span>
                </div>
 
                {/* Title and Description */}
                <div className="mt-auto">
                  <h3 className="text-white text-base sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-xs sm:text-sm lg:text-base leading-relaxed hidden sm:block">
                    {item.description}
                  </p>
                </div>
 
                {/* Hover Indicator */}
                <div className="absolute bottom-4 right-4 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
 
              {/* Gradient Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
 
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base">
            View All Products
            <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
 
export default ProductSection;