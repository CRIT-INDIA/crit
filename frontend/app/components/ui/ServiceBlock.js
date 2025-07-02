'use client';
import React, { useState, useEffect } from 'react';

const ServicesBlock = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [servicesData, setServicesData] = useState(null);
  const [selectedService, setSelectedService] = useState('SAP Implementation Services');
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [features, setFeatures] = useState([]);

  const getRandomGradient = () => {
    const gradients = [
      "from-purple-500 to-pink-500",
      "from-blue-500 to-cyan-500",
      "from-green-500 to-teal-500",
      "from-orange-500 to-red-500",
      "from-indigo-500 to-purple-500",
      "from-rose-500 to-pink-500"
    ];
    return gradients[Math.floor(Math.random() * gradients.length)];
  };

  useEffect(() => {
    setIsVisible(true);
    fetch('/json/data/services.json')
      .then(response => response.json())
      .then(data => {
        setServicesData(data);
        const serviceData = data?.services?.sections?.find(
          section => section.title === selectedService
        );
        if (serviceData?.features) {
          const initialFeatures = serviceData.features.map(feature => ({
            ...feature,
            subtitle: feature.description?.split(' ').slice(0, 3).join(' ') || '',
            color: getRandomGradient(),
          }));
          setFeatures(initialFeatures);
        }
      })
      .catch(error => console.error('Error loading services:', error));
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  useEffect(() => {
    if (!servicesData?.services?.sections) return;

    const newService = servicesData.services.sections.find(
      (section) => section.title === selectedService
    );
    if (newService?.features) {
      const updatedFeatures = newService.features.map((feature) => ({
        ...feature,
        subtitle: feature.description?.split(' ').slice(0, 3).join(' ') || '',
        color: getRandomGradient(),
      }));
      setFeatures(updatedFeatures);
      setActiveFeature(0);
    }
  }, [selectedService, servicesData]);

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const service = servicesData?.services?.sections?.find(
    (section) => section.title === selectedService
  ) || {};

  const faqData = [
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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Service Selection Dropdown */}
      <div className="w-full px-6 pt-8">
        <div className="max-w-7xl mx-auto">
          <select
            value={selectedService}
            onChange={handleServiceChange}
            className="w-full md:w-auto px-4 py-2 rounded-lg bg-gradient-to-r from-red-500/10 to-red-600/10 border-2 border-red-500/20 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500/30 backdrop-blur-lg hover:border-red-500/40 transition-all duration-300"
          >
            {servicesData?.services?.sections?.map((section) => (
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
            )}
          </select>
        </div>
      </div>

      {/* Hero Section */}
      <section className="w-full px-6 py-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://res.cloudinary.com/dujw4np0d/image/upload/v1751361098/image_r62spt.png')" }}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent leading-tight">
              {service.h1 || service.h2 || service.headline || service.title}
            </h1>
            <p className="text-xl text-slate-400 mb-8 max-w-lg">
              {service.paragraph || service.intro_paragraph}
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
                {service.overview || service.paragraph || 
                "Our comprehensive SAP services are designed to transform your business operations through strategic implementation, seamless integration, and ongoing support. We leverage industry best practices and deep domain expertise to deliver solutions that drive measurable business value."}
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                {service.overview_extended || 
                "With a proven track record of successful implementations across various industries, our team ensures that your SAP journey is smooth, efficient, and aligned with your business objectives. We focus on minimizing disruption while maximizing the return on your SAP investment."}
              </p>
            </div>
          </div>

          {/* Stats/Metrics and Process */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">500+</div>
                <div className="text-slate-300 text-sm">Successful Implementations</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">98%</div>
                <div className="text-slate-300 text-sm">Client Satisfaction</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">15+</div>
                <div className="text-slate-300 text-sm">Years Experience</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">24/7</div>
                <div className="text-slate-300 text-sm">Support Available</div>
              </div>
            </div>

            {/* Horizontal Process Overview */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-6 text-center">Our Process</h3>
              <div className="flex justify-between items-center">
                <div className="flex-1 text-center">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-3">1</div>
                  <div className="text-white font-medium mb-1">Assessment</div>
                  <div className="text-slate-400 text-xs">Current state analysis</div>
                </div>
                <div className="w-8 h-0.5 bg-red-500/30 mx-2"></div>
                <div className="flex-1 text-center">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-3">2</div>
                  <div className="text-white font-medium mb-1">Planning</div>
                  <div className="text-slate-400 text-xs">Strategy & roadmap</div>
                </div>
                <div className="w-8 h-0.5 bg-red-500/30 mx-2"></div>
                <div className="flex-1 text-center">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-3">3</div>
                  <div className="text-white font-medium mb-1">Implementation</div>
                  <div className="text-slate-400 text-xs">Deployment & testing</div>
                </div>
                <div className="w-8 h-0.5 bg-red-500/30 mx-2"></div>
                <div className="flex-1 text-center">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-3">4</div>
                  <div className="text-white font-medium mb-1">Support</div>
                  <div className="text-slate-400 text-xs">Ongoing optimization</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Interactive Key Features Section */}
       <section className="max-w-7xl mx-auto px-6 py-16 relative overflow-hidden">
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white">KEY FEATURES</h2>
          </div>
          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
              {features.map((feature, index) => (
                <div key={index} className={`relative group cursor-pointer transition-all duration-700 ${index % 2 === 1 ? 'md:mt-12' : ''}`} onMouseEnter={() => setActiveFeature(index)}>
                  <div className="relative mb-4">
                    <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center text-3xl transform transition-all duration-500 ${activeFeature === index ? 'scale-125 rotate-12' : 'scale-100'} group-hover:scale-125 group-hover:rotate-12`}>
                      {feature.icon}
                    </div>
                    <div className={`absolute inset-0 w-20 h-20 mx-auto rounded-full transition-all duration-500 ${activeFeature === index ? 'ring-4 ring-white/30 ring-offset-4 ring-offset-transparent' : ''} group-hover:ring-4 group-hover:ring-white/30 group-hover:ring-offset-4`} />
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className={`text-xl font-bold transition-all duration-500 ${activeFeature === index ? 'text-white scale-105' : 'text-gray-400'} group-hover:text-white group-hover:scale-105`}>
                      {feature.title}
                    </h3>
                    <p className={`text-base font-medium transition-all duration-500 ${activeFeature === index ? 'text-red-300' : 'text-gray-600'} group-hover:text-red-300`}>
                      {feature.subtitle}
                    </p>
                    <div className={`overflow-hidden transition-all duration-500 ${activeFeature === index ? 'max-h-16 opacity-100' : 'max-h-0 opacity-0'} group-hover:max-h-16 group-hover:opacity-100`}>
                      <p className="text-slate-300 text-sm leading-relaxed px-2">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  <div className={`absolute top-10 left-1/2 w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent transform -translate-x-1/2 transition-all duration-500 ${activeFeature === index ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100`} />
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
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:border-red-500/30 transition-all duration-300"
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
              <div className={`overflow-hidden transition-all duration-300 ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
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
    </div>
  );
};

export default ServicesBlock;