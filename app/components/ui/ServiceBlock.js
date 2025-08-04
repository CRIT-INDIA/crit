'use client'; 
import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { 
  ChevronDown, ChevronRight, CheckCircle, ArrowRight, Clock, Users, Shield, Zap, 
  Database, Cloud, BarChart3, Settings, Cpu, Globe, Lock, TrendingUp, 
  Layers, Smartphone, RefreshCw, Target, Workflow, Activity, Monitor,
  Lightbulb, Rocket, Brain, Network, Server, Palette, Briefcase,
  Building, FileText, Mail, Phone, Calendar, MapPin, Award, Star
} from 'lucide-react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';

// Dynamically import components with no SSR to avoid hydration issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
const FaqSection1 = dynamic(() => import('@/app/services/components/faq'), { ssr: false });
const CompanyProgressSection = dynamic(() => import('@/app/services/components/companyprogress'), { ssr: false });
const TestimonialCarousel = dynamic(() => import('@/app/services/components/testimonial'), { ssr: false });
const BenefitsSection = dynamic(() => import('@/app/services/components/benefits'), { ssr: false });
const ErrorBoundary = dynamic(() => import('./ErrorBoundary'), { ssr: false });

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

// Enhanced icon mapping function with duplicate prevention and null checks
const getIconForFeature = (feature, index = 0, availableIcons = []) => {
  // Return a default icon if feature is invalid
  if (!feature || typeof feature !== 'object') {
    return <div className="w-8 h-8 bg-gray-200 rounded-full" />;
  }
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
  
  // Safely get feature text
  const featureText = [
    feature.title || '',
    feature.description || ''
  ].join(' ').toLowerCase();
  
  // First, try to find a contextually relevant icon that hasn't been used
  for (const [keyword, icon] of Object.entries(iconMap)) {
    if (featureText.includes(keyword) && React.isValidElement(icon)) {
      const iconKey = icon.type?.displayName || icon.type?.name || keyword;
      if (!usedIcons.has(iconKey)) {
        usedIcons.add(iconKey);
        return icon;
      }
    }
  }
  
  // If no contextual match or all contextual icons are used, use available icons
  const safeIndex = Math.max(0, Math.min(index, availableIcons.length - 1)) || 0;
  const availableIcon = availableIcons[safeIndex] || allUniqueIcons[0] || <div className="w-8 h-8 bg-gray-200 rounded-full" />;
  
  if (React.isValidElement(availableIcon)) {
    const iconKey = availableIcon.type?.displayName || 
                   availableIcon.type?.name || 
                   `fallback-${safeIndex}`;
    usedIcons.add(iconKey);
  }
  
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

export default function ServiceBlock({ serviceName }) {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [assessmentAnimation, setAssessmentAnimation] = useState(null);
  const [planningAnimation, setPlanningAnimation] = useState(null);
  const [implementationAnimation, setImplementationAnimation] = useState(null);
  const [supportAnimation, setSupportAnimation] = useState(null);
  const [servicesData, setServicesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Implementation animations mapping
  const implementationAnimations = useMemo(() => ({
    'assessment': assessmentAnimation,
    'planning': planningAnimation,
    'implementation': implementationAnimation,
    'support': supportAnimation
  }), [assessmentAnimation, planningAnimation, implementationAnimation, supportAnimation]);

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

  // Create a comprehensive list of unique icons for fallback with keys
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
  ].map((icon, i) => React.cloneElement(icon, { key: `icon-${i}` })), []);

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
        section.title.toLowerCase().includes('rollout') || 
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

  // Get the implementation process steps with Lottie animations
  const implementationSteps = useMemo(() => {
    try {
      if (!Array.isArray(serviceSection?.implementationSteps)) return [];
      
      return serviceSection.implementationSteps
        .filter(step => step && typeof step === 'object')
        .map((step, index) => ({
          title: step.title || `Step ${index + 1}`,
          description: step.description || '',
          animation: step.animation || '',
          animationData: implementationAnimations?.[step.animation] || null,
          key: `step-${index}`
        }));
    } catch (error) {
      console.error('Error processing implementation steps:', error);
      return [];
    }
  }, [serviceSection, implementationAnimations]);

  // Get the FAQ items with validation
  const faqItems = useMemo(() => {
    try {
      if (!Array.isArray(serviceSection?.faqs)) return [];
      
      return serviceSection.faqs
        .filter(faq => faq && typeof faq === 'object' && (faq.question || faq.answer))
        .map((faq, index) => ({
          question: faq.question || 'Question',
          answer: faq.answer || '',
          key: `faq-${index}`
        }));
    } catch (error) {
      console.error('Error processing FAQ items:', error);
      return [];
    }
  }, [serviceSection]);
  
  // Get related services with validation
  const relatedServices = useMemo(() => {
    try {
      if (!Array.isArray(serviceSection?.relatedServiceIds) || 
          !Array.isArray(servicesData?.relatedServices)) {
        return [];
      }
      
      return serviceSection.relatedServiceIds
        .filter(id => id && typeof id === 'string')
        .map(id => {
          const service = servicesData.relatedServices.find(svc => svc && svc.id === id);
          return service ? {
            id: service.id,
            title: service.title || 'Service',
            description: service.description || '',
            icon: service.icon || <Briefcase className="w-6 h-6" />
          } : null;
        })
        .filter(Boolean)
        .slice(0, 3);
    } catch (error) {
      console.error('Error processing related services:', error);
      return [];
    }
  }, [servicesData, serviceSection]);

  // Get the hero content with validation
  const heroContent = useMemo(() => {
    try {
      if (!serviceSection?.hero || typeof serviceSection.hero !== 'object') {
        return {
          title: serviceName || 'Our Service',
          subtitle: 'Expert solutions for your business needs',
          backgroundImage: '/images/service-hero-bg.jpg'
        };
      }
      
      return {
        title: serviceSection.hero.title || serviceName || 'Our Service',
        subtitle: serviceSection.hero.subtitle || 'Expert solutions for your business needs',
        backgroundImage: serviceSection.hero.backgroundImage || '/images/service-hero-bg.jpg',
        ctaText: serviceSection.hero.ctaText || 'Get Started',
        ctaLink: serviceSection.hero.ctaLink || '/contact'
      };
    } catch (error) {
      console.error('Error processing hero content:', error);
      return {
        title: serviceName || 'Our Service',
        subtitle: 'Expert solutions for your business needs',
        backgroundImage: '/images/service-hero-bg.jpg'
      };
    }
  }, [serviceSection, serviceName]);

  // Get the overview content with validation
  const overviewContent = useMemo(() => {
    try {
      if (!serviceSection?.overview || typeof serviceSection.overview !== 'object') {
        return {
          title: `About ${serviceName || 'Our Service'}`,
          description: 'Learn more about our comprehensive service offerings.',
          image: '/images/service-overview.jpg'
        };
      }
      
      return {
        title: serviceSection.overview.title || `About ${serviceName || 'Our Service'}`,
        description: serviceSection.overview.description || 'Learn more about our comprehensive service offerings.',
        image: serviceSection.overview.image || '/images/service-overview.jpg',
        features: Array.isArray(serviceSection.overview.features) 
          ? serviceSection.overview.features
          : []
      };
    } catch (error) {
      console.error('Error processing overview content:', error);
      return {
        title: `About ${serviceName || 'Our Service'}`,
        description: 'Learn more about our comprehensive service offerings.',
        image: '/images/service-overview.jpg'
      };
    }
  }, [serviceSection, serviceName]);
  
  // Get key features from the matched service section or use defaults with guaranteed unique icons
  const keyFeatures = useMemo(() => {
    // Reset used icons for features
    usedIcons.clear();
    
    try {
      if (serviceSection?.features?.length) {
        return serviceSection.features
          .filter(feature => feature && (feature.title || feature.description)) // Filter out invalid features
          .map((feature, index) => {
            if (!feature) return null;
            
            // Get remaining available icons that haven't been used
            const availableIcons = allUniqueIcons.filter((icon, iconIndex) => {
              const iconKey = icon?.type?.displayName || icon?.type?.name || `icon-${iconIndex}`;
              return iconKey && !usedIcons.has(iconKey);
            });
            
            const icon = getIconForFeature(feature, index, availableIcons.length > 0 ? availableIcons : allUniqueIcons);
            const colorClass = getCategoryColor(feature.category || 'General');
            
            // Ensure we have a valid React element for the icon
            let iconElement;
            if (React.isValidElement(icon)) {
              iconElement = React.cloneElement(icon, { 
                className: `w-8 h-8 ${colorClass}`, 
                key: `feature-icon-${index}`,
                'aria-hidden': 'true'
              });
            } else {
              iconElement = <div className="w-8 h-8 bg-gray-200 rounded-full" aria-hidden="true" />;
            }
            
            return {
              icon: iconElement,
              title: feature.title || 'Feature',
              description: feature.description || '',
              category: feature.category || 'General'
            };
          })
          .filter(Boolean); // Remove any null entries
      }
    } catch (error) {
      console.error('Error processing service features:', error);
      // Return empty array instead of undefined to prevent map errors
      return [];
    }
    
    // Fallback to default features if no service features available
    return (defaultKeyFeatures || []).map((feature, index) => {
      let iconElement;
      if (React.isValidElement(feature?.icon)) {
        iconElement = React.cloneElement(feature.icon, { 
          className: `w-8 h-8 ${getCategoryColor(feature.category || 'General')}`,
          key: `default-icon-${index}`,
          'aria-hidden': 'true'
        });
      } else {
        iconElement = <div className="w-8 h-8 bg-gray-200 rounded-full" aria-hidden="true" />;
      }
      
      return {
        ...feature,
        icon: iconElement,
        title: feature?.title || 'Feature',
        description: feature?.description || '',
        category: feature?.category || 'General'
      };
    });
  }, [serviceSection, allUniqueIcons, defaultKeyFeatures]);

  // Format the service name for display
  const formattedServiceName = serviceName ? formatServiceName(serviceName) : '';
  
  // Set the headline and subheading based on the service
  const headline = formattedServiceName || 'SAP S/4 HANA';
  const subheading = serviceSection?.seo_description || servicesData?.subheading || 'Transform your business with intelligent ERP solutions powered by in-memory computing, real-time analytics, and modern user experiences.';

  // Validate keyFeatures to ensure it's always an array
  const safeKeyFeatures = Array.isArray(keyFeatures) ? keyFeatures : [];

  return (
    <ErrorBoundary>
      <div className="min-h-*">
      {/* Preload the hero image in the document head */}
      <link 
        rel="preload" 
        as="image" 
        href={serviceSection?.image} 
        fetchPriority="high"
      />
      
      {/* Hero Section */}
      <section className="relative h-[550px] overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${serviceSection?.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            // Add will-change for performance hint
            willChange: 'transform',
            // Add transform for GPU acceleration
            transform: 'translateZ(0)'
          }}
          // Add loading and fetchpriority attributes
          loading="eager"
          fetchPriority="high"
          // Add width and height to prevent layout shifts
          width="1920"
          height="1080"
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Main Content Container */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <div className="text-left space-y-4 pl-10">
                {/* Main Headline */}
                <h1 
                  className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight"
                  style={{ color: '#ffffff' }}
                >
                  {serviceSection?.title}
                </h1>
                
                {/* Subheadline */}
                <p 
                  className="text-md lg:text-lg leading-relaxed max-w-2xl text-gray-300">
                  Are you ready to optimize you buisness processes? Expert consulting, customization, and support to transform your business operations
                </p>
                
                {/* CTA Button */}
                <div className="pt-2">
                 <a href="/contact"> <button 
                    className="group relative bg-[#dc2626] border-1 border-gray-500 text-white px-4 py-3 rounded-lg font-semibold text-md transition-all duration-300 hover:shadow-2xl whitespace-nowrap cursor-pointer"
                    style={{
                      boxShadow: '0 0 0 0 rgba(255, 0, 0, 0)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 20px 5px rgba(255, 0, 0, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 0 0 rgba(255, 0, 0, 0)';
                    }}
                  >
                    Get Started Today
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-10 md:py-10 text-black bg-[#fff5f5]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-Gray-700">Overview</h2>
            <svg className="mx-auto my-0" style={{marginTop: '-18px'}} width="130" height="18" viewBox="0 0 220 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 18 Q 110 8, 215 14" stroke="#FFD700" strokeWidth="4" strokeLinecap="round" fill="none"/>
              <path d="M15 21 Q 120 15, 200 18" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" fill="none"/>
            </svg>  
          </div>
          <div className="grid lg:grid-cols-2 gap-2 items-center">
            <div className="space-y-6 mr-10">
              <h3 className="text-2xl font-bold text-gray-700">{formattedServiceName || 'Overview'}</h3>
              <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">{overviewText}</p>
            </div>
            <div className="relative mt-1 lg:mt-1">
              <div className="rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center bg-gray-100 p-4">
                <div className="flex flex-col gap-6 w-full max-w-2xl">
                  {/* Pair 1 */}
                  <div className="flex gap-4 items-center">
                    <div className="flex-1 rounded-xl flex items-center justify-center animate-pulse bg-red-100 p-1" style={{ animationDelay: '0s' }}>
                      <img src="https://res.cloudinary.com/dujw4np0d/image/upload/v1753165462/Project_70-02_uw5nzc.jpg" alt="Overview 1" className="w-40 h-40 object-contain rounded" />
                    </div>
                    <div className="flex-1 rounded-xl flex items-center justify-center animate-pulse bg-red-100 p-1" style={{ animationDelay: '0.2s' }}>
                      <img src="https://res.cloudinary.com/dujw4np0d/image/upload/v1753166207/101_ZS0yMw_jp1azj.jpg" alt="Overview 2" className="w-40 h-40 object-contain rounded" />
                    </div>
                  </div>
                  
                  {/* Pair 2 */}
                  <div className="flex gap-4 items-center">
                    <div className="flex-1 rounded-xl flex items-center justify-center animate-pulse bg-red-100 p-1" style={{ animationDelay: '0.4s' }}>
                      <img src="https://res.cloudinary.com/dujw4np0d/image/upload/v1753166794/MyApril10_k7z7wb.jpg" alt="Overview 3" className="w-40 h-40 object-contain rounded" />
                    </div>
                    <div className="flex-1 rounded-xl flex items-center justify-center animate-pulse bg-red-100 p-1" style={{ animationDelay: '0.6s' }}>
                      <img src="https://res.cloudinary.com/dujw4np0d/image/upload/v1753167637/vecteezy_office-worker-vector-illustration-holding-business-chart_8149367-1_bstjox.jpg" alt="Overview 4" className="w-40 h-40 object-contain rounded" />
                    </div>
                  </div>
                  
                  {/* Pair 3 */}
                  <div className="flex gap-4 items-center">
                    <div className="flex-1 rounded-xl flex items-center justify-center animate-pulse bg-red-100 p-1" style={{ animationDelay: '0.8s' }}>
                      <img src="https://res.cloudinary.com/dujw4np0d/image/upload/v1753167770/Man_and_woman_with_briefcase_shake_hand_generated_bv5jsf.jpg" alt="Overview 5" className="w-40 h-40 object-contain rounded" />
                    </div>
                    <div className="flex-1 rounded-xl flex items-center justify-center animate-pulse bg-red-100 p-1" style={{ animationDelay: '1s' }}>
                      <img src="https://res.cloudinary.com/dujw4np0d/image/upload/v1753167937/vecteezy_business-teamwork-brainstorming-in-flat-style-isolated-on_36893510_mzafm8.jpg" alt="Overview 6" className="w-40 h-40 object-contain rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-black">Our Implementation Process</h2>
            <svg className="mx-auto my-0" style={{marginTop: '-18px'}} width="340" height="18" viewBox="0 0 360 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 18 Q 140 8, 275 14" stroke="#FFD700" strokeWidth="4" strokeLinecap="round" fill="none"/>
              <path d="M15 21 Q 150 15, 260 18" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" fill="none"/>
            </svg>
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
      <section className="py-16 md:py-20 bg-[#fff5f5]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-black">Key Features</h2>
            <svg className="mx-auto my-0" style={{marginTop: '-18px'}} width="160" height="18" viewBox="0 0 220 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 18 Q 110 8, 215 14" stroke="#FFD700" strokeWidth="4" strokeLinecap="round" fill="none"/>
              <path d="M15 21 Q 120 15, 200 18" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" fill="none"/>
            </svg>
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
      {/* Company Progress Section */}
      <CompanyProgressSection />
      {/* Benefits Section */}
      <BenefitsSection serviceName={serviceName} />
      {/* Testimonial Section */}
      <TestimonialCarousel />
      {/* FAQ Section */}
        <FaqSection1 />
      </div>
    </ErrorBoundary>
  );
}

// Add PropTypes for better type checking
ServiceBlock.propTypes = {
  serviceName: PropTypes.string
};

// Default props
ServiceBlock.defaultProps = {
  serviceName: ''
};
