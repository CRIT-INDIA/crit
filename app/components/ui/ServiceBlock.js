'use client'; 
import React, { useState, useEffect, useMemo } from 'react';
import { ChevronDown, ChevronRight, CheckCircle, ArrowRight, Clock, Users, Shield, Zap, Database, Cloud, BarChart3, Settings } from 'lucide-react';
import Lottie from 'lottie-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SapS4HanaServicePage({ serviceName }) {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [assessmentAnimation, setAssessmentAnimation] = useState(null);
  const [planningAnimation, setPlanningAnimation] = useState(null);
  const [implementationAnimation, setImplementationAnimation] = useState(null);
  const [supportAnimation, setSupportAnimation] = useState(null);
  const [servicesData, setServicesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Load animations
    const animationPromises = [
      fetch('https://res.cloudinary.com/dujw4np0d/raw/upload/v1753089355/Man_and_robot_with_computers_sitting_together_in_workplace_wqrfib.json')
        .then(response => response.json())
        .then(data => setAssessmentAnimation(data)),
      
      fetch('https://res.cloudinary.com/dujw4np0d/raw/upload/v1753091479/Business_team_c1xybu.json')
        .then(response => response.json())
        .then(data => setPlanningAnimation(data)),
      
      fetch('https://res.cloudinary.com/dujw4np0d/raw/upload/v1753092104/compliance_yrfpwo.json')
        .then(response => response.json())
        .then(data => setImplementationAnimation(data)),
      
      fetch('https://res.cloudinary.com/dujw4np0d/raw/upload/v1753094678/Customer_Support___Help___Support_Agent_pfq47o.json')
        .then(response => response.json())
        .then(data => setSupportAnimation(data)),
      
      // Load services data
      fetch('/json/data/services.json')
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to load services data');
          }
          return response.json();
        })
        .then(data => setServicesData(data.services))
        .catch(err => {
          console.error('Error loading services data:', err);
          setError('Failed to load services data. Please try again later.');
        })
    ];

    Promise.all(animationPromises)
      .catch(err => {
        console.error('Error loading resources:', err);
        setError('Failed to load some resources. Some features may not work as expected.');
      })
      .finally(() => setLoading(false));
  }, []);

  // Default key features in case services data is not loaded
  const defaultKeyFeatures = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "In-Memory Computing",
      description: "Lightning-fast data processing with real-time analytics and reporting capabilities"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud-Ready Architecture",
      description: "Flexible deployment options including on-premise, cloud, and hybrid models"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-Time Analytics",
      description: "Embedded analytics with real-time insights for data-driven decision making"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Simplified Architecture",
      description: "Streamlined data model reducing complexity and improving system performance"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Modern User Experience",
      description: "Intuitive SAP Fiori interface designed for enhanced user productivity"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enhanced Security",
      description: "Advanced security features with role-based access and data protection"
    }
  ];

  // Find the matching service section based on serviceName
  const serviceSection = servicesData?.sections?.find(
    section => section.title === serviceName
  );

  // Get key features from the matched service section or use defaults
  const keyFeatures = serviceSection?.features?.map(feature => ({
    icon: <CheckCircle className="w-8 h-8 text-red-600" />,
    title: feature.title,
    description: feature.description
  })) || defaultKeyFeatures;

  // Set the headline and subheading based on the service
  const headline = serviceName || 'SAP S/4 HANA';
  const subheading = serviceSection?.seo_description || servicesData?.subheading || 'Transform your business with intelligent ERP solutions powered by in-memory computing, real-time analytics, and modern user experiences.';

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 flex flex-col items-center justify-center text-center" style={{ background: 'linear-gradient(90deg, #fff 0%, #ffe5e5 100%)' }}>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, #fff 0%, #ffe5e5 100%)', opacity: 0.95, zIndex: 0 }}></div>
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-gray-600 drop-shadow-lg">
            {headline}
            <span className="block text-red-600 font-black tracking-widest">
              {serviceName ? 'Services' : 'Implementation Services'}
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-500 font-light">
            {subheading}
          </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0">
              <button className="w-full sm:w-auto px-6 py-4 sm:px-8 sm:py-4 font-bold rounded-full shadow-lg bg-red-600 text-white text-base sm:text-lg hover:bg-red-700 transition-all duration-300 active:scale-95">
                Get Started Today
              </button>
              <button className="w-full sm:w-auto px-6 py-4 sm:px-8 sm:py-4 border-2 font-bold rounded-full text-base sm:text-lg border-gray-400 text-gray-500 bg-transparent hover:bg-white hover:text-black transition-all duration-300 active:scale-95">
                Download Brochure
              </button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-Gray-700">Overview</h2>
            <div className="w-24 h-1 mx-auto mb-8 bg-red-600 rounded"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-700">Revolutionize Your Enterprise Operations</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                SAP S/4 HANA represents the future of enterprise resource planning, combining the power of in-memory computing with intelligent automation and real-time analytics. Our comprehensive implementation services ensure your organization leverages the full potential of this next-generation ERP platform.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                With over a decade of SAP expertise, we guide enterprises through digital transformation journeys that drive operational excellence, enhance decision-making capabilities, and accelerate business growth.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 rounded-xl shadow-md border-2 border-red-600 bg-white">
                  <div className="text-3xl font-extrabold mb-2 text-red-600">500+</div>
                  <div className="text-black font-medium">Successful Implementations</div>
                </div>
                <div className="text-center p-6 rounded-xl shadow-md border-2 border-black bg-white">
                  <div className="text-3xl font-extrabold mb-2 text-black">99.9%</div>
                  <div className="text-black font-medium">Uptime Guarantee</div>
                </div>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="aspect-video rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center bg-gray-100">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 sm:p-8 w-full h-full">
                    {[
                      "https://res.cloudinary.com/dujw4np0d/image/upload/v1753165462/Project_70-02_uw5nzc.jpg",
                      "https://res.cloudinary.com/dujw4np0d/image/upload/v1753166207/101_ZS0yMw_jp1azj.jpg",
                      "https://res.cloudinary.com/dujw4np0d/image/upload/v1753166794/MyApril10_k7z7wb.jpg",
                      "https://res.cloudinary.com/dujw4np0d/image/upload/v1753167637/vecteezy_office-worker-vector-illustration-holding-business-chart_8149367-1_bstjox.jpg",
                      "https://res.cloudinary.com/dujw4np0d/image/upload/v1753167770/Man_and_woman_with_briefcase_shake_hand_generated_bv5jsf.jpg",
                      "https://res.cloudinary.com/dujw4np0d/image/upload/v1753167937/vecteezy_business-teamwork-brainstorming-in-flat-style-isolated-on_36893510_mzafm8.jpg"
                    ].map((src, i) => (
                      <div key={i} className="rounded-lg flex items-center justify-center animate-pulse bg-red-100" style={{ animationDelay: `${i * 0.2}s` }}>
                         <img src={src} alt={`Overview ${i+1}`} className="w-24 h-24 object-contain rounded" />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-black">Our Implementation Process</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center md:items-start md:justify-between gap-8 md:gap-0">
              {/* Step 1 */}
              <div className="flex-1 flex flex-col items-center text-center">
                {assessmentAnimation ? (
                  <Lottie 
                    animationData={assessmentAnimation} 
                    loop={true} 
                    className="w-40 h-40 md:w-56 md:h-56 mb-1"
                  />
                ) : (
                  <div className="w-40 h-40 md:w-56 md:h-56 mb-1 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-gray-500">Loading...</div>
            </div>
                )}
                <div className="font-bold text-lg text-black mb-1">Assessment</div>
                <div className="text-gray-600 text-base">Current state analysis</div>
                </div>
              <div className="w-16 h-1 bg-red-600 rounded md:hidden"></div>
              <div className="h-32 hidden md:flex items-center"><div className="w-16 h-1 bg-red-600 mx-2 rounded"></div></div>
              {/* Step 2 */}
              <div className="flex-1 flex flex-col items-center text-center">
                {planningAnimation ? (
                  <Lottie 
                    animationData={planningAnimation} 
                    loop={true} 
                    className="w-40 h-40 md:w-56 md:h-56 mb-1"
                  />
                ) : (
                  <div className="w-40 h-40 md:w-56 md:h-56 mb-1 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-gray-500">Loading...</div>
                  </div>
                )}
                <div className="font-bold text-lg text-black mb-1">Planning</div>
                <div className="text-gray-600 text-base">Strategy & roadmap</div>
              </div>
              <div className="w-16 h-1 bg-red-600 rounded md:hidden"></div>
              <div className="h-32 hidden md:flex items-center"><div className="w-16 h-1 bg-red-600 mx-2 rounded"></div></div>
              {/* Step 3 */}
              <div className="flex-1 flex flex-col items-center text-center">
                {implementationAnimation ? (
                  <Lottie 
                    animationData={implementationAnimation} 
                    loop={true} 
                    className="w-40 h-40 md:w-56 md:h-56 mb-1"
                  />
                ) : (
                  <div className="w-40 h-40 md:w-56 md:h-56 mb-1 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-gray-500">Loading...</div>
                </div>
                )}
                <div className="font-bold text-lg text-black mb-1">Implementation</div>
                <div className="text-gray-600 text-base">Deployment & testing</div>
              </div>
              <div className="w-16 h-1 bg-red-600 rounded md:hidden"></div>
              <div className="h-32 hidden md:flex items-center"><div className="w-16 h-1 bg-red-600 mx-2 rounded"></div></div>
              {/* Step 4 */}
              <div className="flex-1 flex flex-col items-center text-center">
                {supportAnimation ? (
                  <Lottie 
                    animationData={supportAnimation} 
                    loop={true} 
                    className="w-40 h-40 md:w-56 md:h-56 mb-1"
                  />
                ) : (
                  <div className="w-40 h-40 md:w-56 md:h-56 mb-1 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-gray-500">Loading...</div>
                    </div>
                )}
                <div className="font-bold text-lg text-black mb-1">Support</div>
                <div className="text-gray-600 text-base">Ongoing optimization</div>
              </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-black">Key Features</h2>
            <div className="w-24 h-1 mx-auto mb-8 bg-red-600 rounded"></div>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
              Discover the powerful capabilities that make SAP S/4 HANA the leading choice for modern enterprises seeking digital transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ 
                  opacity: 0, 
                  rotateY: -90,
                  z: -100
                }}
                animate={{ 
                  opacity: 1, 
                  rotateY: 0,
                  z: 0
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 80
                }}
                whileHover={{
                  rotateY: 5,
                  rotateX: 5,
                  z: 50,
                  transition: { duration: 0.4 }
                }}
                className="group h-full perspective-1000"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div 
                  className="relative flex flex-col h-full rounded-2xl p-8 bg-white min-h-[320px] overflow-hidden shadow-lg border-2 border-transparent"
                  whileHover={{
                    borderColor: "#ef4444",
                    boxShadow: "0 25px 50px rgba(239, 68, 68, 0.15)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Morphing Background Blobs */}
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-200 to-pink-200 rounded-full opacity-20 blur-xl"
                    animate={{
                      scale: [1, 1.3, 1],
                      x: [0, 20, 0],
                      y: [0, -10, 0]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      delay: index * 0.8,
                      type: "tween"
                    }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-200 to-red-200 rounded-full opacity-15 blur-lg"
                    animate={{
                      scale: [1.2, 1, 1.2],
                      x: [0, -15, 0],
                      y: [0, 15, 0]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      delay: index * 0.6,
                      type: "tween"
                    }}
                  />

                  {/* Pulsing Border Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-red-400 opacity-0"
                    animate={{
                      opacity: [0, 0.6, 0],
                      scale: [1, 1.02, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 1.2,
                      type: "tween"
                    }}
                  />

                  {/* 3D Rotating Icon Container */}
                  <motion.div
                    className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white shadow-xl"
                    whileHover={{
                      rotateY: 180,
                      scale: 1.1,
                      boxShadow: "0 30px 60px rgba(239, 68, 68, 0.4)"
                    }}
                    transition={{ duration: 0.6, type: "spring" }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Front Face */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-600"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      {feature.icon}
                    </motion.div>
                    
                    {/* Back Face */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-red-500"
                      style={{ 
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                      }}
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, type: "tween" }}
                      >
                        {feature.icon}
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Typewriter Effect Title */}
                  <motion.h3
                    className="relative text-xl font-bold mb-4 text-gray-800 z-10 overflow-hidden"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                  >
                    <motion.span
                      className="inline-block"
                      whileHover={{ 
                        color: "#dc2626",
                        textShadow: "0 0 8px rgba(220, 38, 38, 0.5)"
                      }}
                    >
                      {feature.title}
                    </motion.span>
                  </motion.h3>

                  {/* Reveal Animation for Description */}
                  <motion.div className="relative overflow-hidden flex-1">
                    <motion.p
                      className="leading-relaxed text-gray-600"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
                      whileHover={{ 
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {feature.description}
                    </motion.p>
                  </motion.div>

                  {/* Interactive Progress Bar */}
                  <motion.div className="mt-6 relative">
                    <motion.div
                      className="h-1 bg-gray-200 rounded-full overflow-hidden"
                      whileHover={{ height: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="h-full bg-gradient-to-r from-red-500 to-pink-500 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ 
                          duration: 2, 
                          delay: index * 0.3 + 1,
                          type: "tween"
                        }}
                        whileHover={{
                          background: "linear-gradient(90deg, #ef4444, #f97316, #ef4444)",
                          transition: { duration: 0.3 }
                        }}
                      />
                    </motion.div>
                  </motion.div>

                  {/* Corner Accent Animation */}
                  <motion.div
                    className="absolute top-4 right-4 w-3 h-3 bg-red-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.4,
                      type: "tween"
                    }}
                  />
                  
                  {/* Ripple Effect on Hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    whileHover={{
                      background: "radial-gradient(circle at center, rgba(239, 68, 68, 0.1) 0%, transparent 70%)"
                    }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection1 />

      {/* CTA Section */}
      <section className="py-16 md:py-20 relative overflow-hidden bg-gray-200">
        <div className="absolute inset-0 bg-white opacity-80"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-gray-700">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-500">
            Let our SAP S/4 HANA experts help you unlock the full potential of intelligent ERP and drive your digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
            <button className="px-8 py-4 border-2 font-bold rounded-full text-lg border-red-500 text-gray-700 bg-transparent hover:bg-red-200 hover:text-red transition-all duration-300">
              Get Free Assessment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function FaqSection1() {
  const [activeId, setActiveId] = useState('01');
  const [hoveredId, setHoveredId] = useState(null);
  const [isAutoCycling, setIsAutoCycling] = useState(true);
  const [userInteracted, setUserInteracted] = useState(false);
  
  const faqs = useMemo(() => [
    {
      id: '01',
      category: 'BASICS',
      q: 'What is SAP?',
      a: 'SAP is a global leader in enterprise software, providing solutions for business operations and customer relations management.'
    },
    {
      id: '02',
      category: 'BENEFITS',
      q: 'What are the benefits of using SAP for my business?',
      a: 'SAP helps streamline processes, improve data visibility, enhance productivity, and support better decision-making through integrated business solutions.'
    },
    {
      id: '03',
      category: 'SUITABILITY',
      q: 'Is SAP suitable for small and medium-sized enterprises (SMEs)?',
      a: 'Yes, SAP offers scalable solutions tailored for businesses of all sizes, including SMEs, to help them grow efficiently.'
    },
    {
      id: '04',
      category: 'IMPLEMENTATION',
      q: 'How long does it take to implement SAP?',
      a: 'Implementation time varies based on business size and requirements, but SAP provides rapid deployment options and best practices to accelerate the process.'
    },
  ], []);

  // Auto-cycling effect
  useEffect(() => {
    if (!isAutoCycling || userInteracted) return;

    const interval = setInterval(() => {
      setActiveId(prevId => {
        const currentIndex = faqs.findIndex(faq => faq.id === prevId);
        const nextIndex = (currentIndex + 1) % faqs.length;
        return faqs[nextIndex].id;
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoCycling, userInteracted, faqs]);

  // Reset auto-cycling after user interaction pause
  useEffect(() => {
    if (userInteracted) {
      const timeout = setTimeout(() => {
        setUserInteracted(false);
        setIsAutoCycling(true);
      }, 4000); // Resume auto-cycling after 10 seconds of no interaction

      return () => clearTimeout(timeout);
    }
  }, [userInteracted]);

  // Handle manual FAQ selection
  const handleFaqClick = (faqId) => {
    setActiveId(faqId);
    setIsAutoCycling(false);
    setUserInteracted(true);
  };

  // Handle hover events
  const handleMouseEnter = (faqId) => {
    setHoveredId(faqId);
    // Removed auto-cycling pause on hover
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
    // Removed auto-cycling resume logic
  };

  return (
    <section className="relative min-h-[80vh] bg-white py-16 md:py-20 overflow-hidden pb-20">
      {/* Animated Background Pattern */}
      

      <div className="relative mx-auto max-w-6xl px-4 sm:px-5 lg:px-7">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-5">
              Frequently Asked
              <span className="block text-red-500">Questions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about Nicepay. Can't find your answer? 
              <span className="text-red-600 font-medium"> We're here to help.</span>
            </p>
          </motion.div>
        </div>

        {/* FAQ Container */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          {/* Left Side - Questions */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => handleMouseEnter(faq.id)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleFaqClick(faq.id)}
                className="relative cursor-pointer group"
              >
                <div
                  className={`relative p-5 rounded-2xl border-2 transition-all duration-500 ${
                    activeId === faq.id
                      ? 'bg-red-500 border-red-500 shadow-2xl shadow-red-500/20 scale-[1.015]'
                      : 'bg-white border-gray-200'
                  }`}
                >

                  <div className="relative flex items-start gap-3">
                    {/* Number */}
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-base transition-all duration-300 ${
                        activeId === faq.id
                          ? 'bg-white text-red-500'
                          : 'bg-red-50 text-red-600'
                      }`}
                    >
                      {faq.id}
                    </div>

                    {/* Question */}
                    <div className="flex-1">
                      <p
                        className={`text-xs font-semibold tracking-wider mb-1 transition-colors duration-300 ${
                          activeId === faq.id 
                            ? 'text-red-100' 
                            : 'text-red-400'
                        }`}
                      >
                        {faq.category}
                      </p>
                      <h3
                        className={`text-base font-semibold transition-colors duration-300 ${
                          activeId === faq.id
                            ? 'text-white'
                            : 'text-gray-900'
                        }`}
                      >
                        {faq.q}
                      </h3>
                    </div>

                    {/* Arrow */}
                    <motion.svg
                      animate={{ 
                        rotate: activeId === faq.id ? 45 : 0
                      }}
                      className={`w-5 h-5 flex-shrink-0 transition-colors duration-300 ${
                        activeId === faq.id
                          ? 'text-white'
                          : 'text-red-400'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </motion.svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Answer Display */}
          <div className="lg:sticky lg:top-6 mt-8 lg:mt-0">
            <AnimatePresence mode="wait">
              {faqs.map((faq) => (
                activeId === faq.id && (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.97 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    {/* Background Decoration */}
                    <div className="absolute -inset-3 bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl opacity-50 blur-2xl" />
                    
                    <div className="relative bg-white rounded-2xl p-7 shadow-2xl border-2 border-red-100">
                      {/* Top Pattern */}
                      <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-red-500 to-pink-500 rounded-full opacity-10 blur-2xl" />
                      
                      {/* Category Badge */}
                      <div className="inline-flex items-center gap-1.5 mb-5 bg-red-50 px-4 py-2 rounded-full">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                        <span className="text-xs font-semibold tracking-wider text-red-700">
                          {faq.category}
                        </span>
                      </div>

                      {/* Question Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {faq.q}
                      </h3>

                      {/* Answer */}
                      <p className="text-gray-600 leading-relaxed text-base">
                        {faq.a}
                      </p>

                      {/* Action Button */}
                      <div className="mt-7 flex items-center gap-3">
                        
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}