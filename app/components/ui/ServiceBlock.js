'use client'; 
import React, { useState, useEffect, useMemo } from 'react';
import { 
  ChevronDown, ChevronRight, CheckCircle, ArrowRight, Clock, Users, Shield, Zap, 
  Database, Cloud, BarChart3, Settings, Cpu, Globe, Lock, TrendingUp, 
  Layers, Smartphone, RefreshCw, Target, Workflow, Activity, Monitor,
  Lightbulb, Rocket, Brain, Network, Server, Palette, Briefcase,
  Building, FileText, Mail, Phone, Calendar, MapPin, Award, Star
} from 'lucide-react';
import Lottie from 'lottie-react';
import { motion, AnimatePresence } from 'framer-motion';

// Function to create URL-friendly slug from service name
const createServiceSlug = (name) => {
  if (!name) return '';
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

// Function to format service name from URL-friendly format to display format
const formatServiceName = (name) => {
  if (!name) return '';
  // Replace hyphens with spaces and capitalize each word
  return name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace('Sap', 'SAP'); // Special case for SAP
};

// Global icon usage tracker to prevent duplicates
let usedIcons = new Set();

// Reset used icons for each page load
const resetIconTracker = () => {
  usedIcons.clear();
};

// Enhanced icon mapping function with duplicate prevention
const getIconForFeature = (feature, index, availableIcons) => {
  const iconMap = {
    // Performance related
    'performance': <Cpu className="w-8 h-8" />,
    'memory': <Database className="w-8 h-8" />,
    'speed': <Zap className="w-8 h-8" />,
    'real-time': <Activity className="w-8 h-8" />,
    'computing': <Brain className="w-8 h-8" />,
    'fast': <Rocket className="w-8 h-8" />,
    'lightning': <TrendingUp className="w-8 h-8" />,
    
    // Cloud & Infrastructure
    'cloud': <Cloud className="w-8 h-8" />,
    'architecture': <Layers className="w-8 h-8" />,
    'deployment': <Settings className="w-8 h-8" />,
    'infrastructure': <Network className="w-8 h-8" />,
    'hybrid': <Globe className="w-8 h-8" />,
    'server': <Server className="w-8 h-8" />,
    
    // Analytics & Reporting
    'analytics': <BarChart3 className="w-8 h-8" />,
    'reporting': <FileText className="w-8 h-8" />,
    'insights': <Target className="w-8 h-8" />,
    'data': <Monitor className="w-8 h-8" />,
    'intelligence': <Lightbulb className="w-8 h-8" />,
    
    // User Experience
    'user': <Users className="w-8 h-8" />,
    'interface': <Smartphone className="w-8 h-8" />,
    'mobile': <Phone className="w-8 h-8" />,
    'fiori': <Palette className="w-8 h-8" />,
    'experience': <Star className="w-8 h-8" />,
    'modern': <Award className="w-8 h-8" />,
    
    // Security & Compliance
    'security': <Shield className="w-8 h-8" />,
    'compliance': <Lock className="w-8 h-8" />,
    'protection': <Building className="w-8 h-8" />,
    'enhanced': <CheckCircle className="w-8 h-8" />,
    'access': <MapPin className="w-8 h-8" />,
    
    // Process & Workflow
    'workflow': <Workflow className="w-8 h-8" />,
    'automation': <RefreshCw className="w-8 h-8" />,
    'process': <Briefcase className="w-8 h-8" />,
    'simplified': <Settings className="w-8 h-8" />,
    'streamlined': <Calendar className="w-8 h-8" />
  };
  
  // Try to match feature title/description with keywords
  const featureText = (feature.title + ' ' + feature.description).toLowerCase();
  
  // First, try to find a contextually relevant icon that hasn't been used
  for (const [keyword, icon] of Object.entries(iconMap)) {
    if (featureText.includes(keyword)) {
      const iconKey = icon.type.displayName || icon.type.name || keyword;
      if (!usedIcons.has(iconKey)) {
        usedIcons.add(iconKey);
        return icon;
      }
    }
  }
  
  // If no contextual match or all contextual icons are used, use available icons
  const availableIcon = availableIcons[index % availableIcons.length];
  const iconKey = availableIcon.type.displayName || availableIcon.type.name || `fallback-${index}`;
  usedIcons.add(iconKey);
  return availableIcon;
};

// Category-based color function
const getCategoryColor = (category) => {
  const colorMap = {
    'Performance': 'text-blue-600',
    'Security': 'text-green-600', 
    'Analytics': 'text-purple-600',
    'User Experience': 'text-orange-600',
    'Infrastructure': 'text-indigo-600',
    'Automation': 'text-pink-600',
    'Compliance': 'text-teal-600',
    'Architecture': 'text-cyan-600'
  };
  
  return colorMap[category] || 'text-red-600';
};

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

  // Reset icon tracker on component mount
  useEffect(() => {
    resetIconTracker();
  }, []);

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

  // Create a comprehensive list of unique icons for fallback
  const allUniqueIcons = useMemo(() => [
    <Zap className="w-8 h-8" />,
    <Database className="w-8 h-8" />,
    <Shield className="w-8 h-8" />,
    <Users className="w-8 h-8" />,
    <BarChart3 className="w-8 h-8" />,
    <Settings className="w-8 h-8" />,
    <Cloud className="w-8 h-8" />,
    <TrendingUp className="w-8 h-8" />,
    <Cpu className="w-8 h-8" />,
    <Globe className="w-8 h-8" />,
    <Lock className="w-8 h-8" />,
    <Layers className="w-8 h-8" />,
    <Smartphone className="w-8 h-8" />,
    <RefreshCw className="w-8 h-8" />,
    <Target className="w-8 h-8" />,
    <Workflow className="w-8 h-8" />,
    <Activity className="w-8 h-8" />,
    <Monitor className="w-8 h-8" />,
    <Lightbulb className="w-8 h-8" />,
    <Rocket className="w-8 h-8" />,
    <Settings className="w-8 h-8" />,
    <Brain className="w-8 h-8" />,
    <Network className="w-8 h-8" />,
    <Server className="w-8 h-8" />,
    <Palette className="w-8 h-8" />,
    <Briefcase className="w-8 h-8" />,
    <Building className="w-8 h-8" />,
    <FileText className="w-8 h-8" />,
    <Mail className="w-8 h-8" />,
    <Phone className="w-8 h-8" />,
    <Calendar className="w-8 h-8" />,
    <MapPin className="w-8 h-8" />,
    <Award className="w-8 h-8" />,
    <Star className="w-8 h-8" />,
    <CheckCircle className="w-8 h-8" />,
    <ArrowRight className="w-8 h-8" />,
    <Clock className="w-8 h-8" />
  ], []);

  // Enhanced default key features with guaranteed unique icons
  const defaultKeyFeatures = useMemo(() => {
    // Reset icon tracker for default features
    const tempUsedIcons = new Set();
    
    const features = [
      {
        title: "In-Memory Computing",
        description: "Lightning-fast data processing with real-time analytics and reporting capabilities",
        category: "Performance"
      },
      {
        title: "Cloud-Ready Architecture", 
        description: "Flexible deployment options including on-premise, cloud, and hybrid models",
        category: "Infrastructure"
      },
      {
        title: "Real-Time Analytics",
        description: "Embedded analytics with real-time insights for data-driven decision making",
        category: "Analytics"
      },
      {
        title: "Simplified Architecture",
        description: "Streamlined data model reducing complexity and improving system performance",
        category: "Architecture"
      },
      {
        title: "Modern User Experience",
        description: "Intuitive SAP Fiori interface designed for enhanced user productivity",
        category: "User Experience"
      },
      {
        title: "Enhanced Security",
        description: "Advanced security features with role-based access and data protection",
        category: "Security"
      }
    ];

    return features.map((feature, index) => {
      // Get unique icon for each feature
      const availableIcons = allUniqueIcons.filter((icon, iconIndex) => {
        const iconKey = icon.type.displayName || icon.type.name || `icon-${iconIndex}`;
        return !tempUsedIcons.has(iconKey);
      });
      
      const selectedIcon = availableIcons[index % availableIcons.length] || allUniqueIcons[index];
      const iconKey = selectedIcon.type.displayName || selectedIcon.type.name || `default-${index}`;
      tempUsedIcons.add(iconKey);
      
      return {
        icon: selectedIcon,
        title: feature.title,
        description: feature.description,
        category: feature.category
      };
    });
  }, [allUniqueIcons]);

  // Find the service section that matches the current service name
  const serviceSection = (() => {
    // Special case for SAP Rollout Services
    if (serviceName && serviceName.toLowerCase().includes('rollout')) {
      const rolloutService = servicesData?.sections?.find(section => 
        section.title.toLowerCase().includes('roll out') || 
        section.title.toLowerCase().includes('rollout')
      );
      
      if (rolloutService) {
        console.log('Matched rollout service:', rolloutService.title);
        return rolloutService;
      }
    }

    // Normal service matching logic
    return servicesData?.sections?.find(section => {
      // Normalize both the section title and the service name for comparison
      const sectionSlug = createServiceSlug(section.title).toLowerCase().replace(/\s+/g, '-');
      const currentSlug = String(serviceName || '').toLowerCase().replace(/\s+/g, '-');
      
      // Also check for common variations (like 'roll-out' vs 'rollout')
      const normalizedSectionSlug = sectionSlug
        .replace(/\broll[\s-]?out\b/gi, 'rollout')
        .replace(/\bimplement(?:ation)?\b/gi, '')
        .replace(/--+/g, '-')
        .replace(/^-+|-+$/g, '');
        
      const normalizedCurrentSlug = currentSlug
        .replace(/\broll[\s-]?out\b/gi, 'rollout')
        .replace(/\bimplement(?:ation)?\b/gi, '')
        .replace(/--+/g, '-')
        .replace(/^-+|-+$/g, '');
      
      const isMatch = 
        sectionSlug === currentSlug || 
        normalizedSectionSlug === currentSlug ||
        sectionSlug === normalizedCurrentSlug ||
        normalizedSectionSlug === normalizedCurrentSlug;
      
      return isMatch;
    });
  })();

  const overviewText = serviceSection?.overview || 'Overview content not available.';

  // Get key features from the matched service section or use defaults with guaranteed unique icons
  const keyFeatures = useMemo(() => {
    if (serviceSection?.features) {
      // Reset used icons for service features
      usedIcons.clear();
      
      return serviceSection.features.map((feature, index) => {
        // Get remaining available icons that haven't been used
        const availableIcons = allUniqueIcons.filter((icon, iconIndex) => {
          const iconKey = icon.type.displayName || icon.type.name || `icon-${iconIndex}`;
          return !usedIcons.has(iconKey);
        });
        
        const icon = getIconForFeature(feature, index, availableIcons.length > 0 ? availableIcons : [allUniqueIcons[index % allUniqueIcons.length]]);
        const colorClass = getCategoryColor(feature.category || 'General');
        
        return {
          icon: React.cloneElement(icon, { className: `w-8 h-8 ${colorClass}` }),
          title: feature.title,
          description: feature.description,
          category: feature.category || 'General'
        };
      });
    }
    
    return defaultKeyFeatures.map((feature, index) => ({
      ...feature,
      icon: React.cloneElement(feature.icon, { 
        className: `w-8 h-8 ${getCategoryColor(feature.category)}` 
      })
    }));
  }, [serviceSection, allUniqueIcons, defaultKeyFeatures]);

  // Format the service name for display
  const formattedServiceName = serviceName ? formatServiceName(serviceName) : '';
  
  // Set the headline and subheading based on the service
  const headline = formattedServiceName || 'SAP S/4 HANA';
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
              {serviceName ? '' : 'Implementation Services'}
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
              <h3 className="text-2xl font-bold text-gray-700">{formattedServiceName || 'Overview'}</h3>
              <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">{overviewText}</p>
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

      {/* Enhanced Key Features Section with Unique Icons */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-black">Key Features</h2>
            <div className="w-24 h-1 mx-auto mb-8 bg-red-600 rounded"></div>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
              Discover the powerful capabilities that make {formattedServiceName} the leading choice for modern enterprises seeking digital transformation.
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
                  className="relative flex flex-col h-full rounded-2xl p-8 bg-white min-h-[350px] overflow-hidden shadow-lg border-2 border-transparent"
                  whileHover={{
                    borderColor: "#ef4444",
                    boxShadow: "0 25px 50px rgba(239, 68, 68, 0.15)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                

                  {/* Enhanced Icon with Animation - Guaranteed Unique */}
                  <motion.div
                    className="relative mb-6"
                    whileHover={{ 
                      scale: 1.15,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.5 }
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1 + 0.3,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-red-50 group-hover:to-pink-50 transition-all duration-300 shadow-lg">
                      <motion.div
                        className="relative z-10"
                        whileHover={{
                          scale: 1.1,
                          filter: "drop-shadow(0 0 8px rgba(239, 68, 68, 0.5))"
                        }}
                      >
                        {feature.icon}
                      </motion.div>
                      
                      
                    </div>

                    
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
    </div>
  );
}

function FaqSection1() {
  const [activeId, setActiveId] = useState('01');
  const [hoveredId, setHoveredId] = useState(null);
  const [isAutoCycling, setIsAutoCycling] = useState(true);
  const [userInteracted, setUserInteracted] = useState(false);
  const [activeCategory, setActiveCategory] = useState('ALL');
  
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
    {
      id: '05',
      category: 'BASICS',
      q: 'What does SAP stand for?',
      a: 'SAP stands for Systems, Applications, and Products in Data Processing.'
    },
    {
      id: '06',
      category: 'BENEFITS',
      q: 'Can SAP help with regulatory compliance?',
      a: 'Yes, SAP includes features to help businesses maintain compliance with various industry regulations and standards.'
    },
  ], []);

  // Get unique categories
  const categories = useMemo(() => {
    const allCategories = ['ALL', ...new Set(faqs.map(faq => faq.category))];
    return allCategories;
  }, [faqs]);

  // Filter FAQs by active category
  const filteredFaqs = useMemo(() => {
    if (activeCategory === 'ALL') return faqs;
    return faqs.filter(faq => faq.category === activeCategory);
  }, [faqs, activeCategory]);

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
      }, 4000); // Resume auto-cycling after 4 seconds of no interaction

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
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  return (
    <section className="relative min-h-[80vh] bg-white py-16 md:py-20 overflow-hidden pb-20">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-5 lg:px-7">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-black">Frequently Asked </span>
              <span className="text-red-500">Questions</span>
            </h2>
            
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setUserInteracted(true);
                    setIsAutoCycling(false);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? 'bg-red-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* FAQ Container */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          {/* Left Side - Questions */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFaqs.map((faq, index) => (
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
