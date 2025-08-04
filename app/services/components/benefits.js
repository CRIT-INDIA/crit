'use client'; 
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, ArrowRight, Clock, Users, Shield, Zap, 
  Database, BarChart3, Settings, Cpu, Globe, Lock, TrendingUp, 
  Layers, Smartphone, RefreshCw, Target, Activity, Monitor,
  Lightbulb, Rocket, Brain, Star, DollarSign
} from 'lucide-react';

export default function BenefitsSection({ serviceName }) {
  console.log('BenefitsSection rendered with serviceName:', serviceName);

  const [benefits, setBenefits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeBenefit, setActiveBenefit] = useState(0);

  // Function to normalize service names for comparison
  const normalizeServiceName = (name) => {
    if (!name) return '';
    // Convert to lowercase and remove any non-alphanumeric characters except spaces
    return name.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
  };

  // Fetch benefits from services.json based on serviceName
  useEffect(() => {
    const fetchBenefits = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/json/data/services.json');
        if (!response.ok) {
          throw new Error('Failed to fetch services data');
        }
        const data = await response.json();
        
        // Normalize the serviceName for comparison
        const normalizedServiceName = normalizeServiceName(serviceName);
        
        // Find the service that matches the serviceName (case-insensitive and ignoring special chars)
        const service = data.services.sections.find(service => 
          normalizeServiceName(service.title) === normalizedServiceName
        );
        
        console.log('Looking for service:', normalizedServiceName);
        console.log('Available services:', data.services.sections.map(s => ({
          title: s.title,
          normalized: normalizeServiceName(s.title)
        })));
        
        if (service) {
          if (service.benefits && service.benefits.length > 0) {
            // Map the benefits to ensure they have the expected structure
            const formattedBenefits = service.benefits.map(benefit => {
              // If benefit has detailedDescription, use it as is
              if (benefit.detailedDescription) {
                return {
                  title: benefit.title || 'Benefit',
                  description: benefit.description || '',
                  detailedDescription: benefit.detailedDescription
                };
              }
              // If no detailedDescription but has description, use description for both
              if (benefit.description) {
                return {
                  title: benefit.title || 'Benefit',
                  description: benefit.description,
                  detailedDescription: [benefit.description] // Use description as the only item in detailedDescription
                };
              }
              // Fallback for any other case
              return {
                title: benefit.title || 'Benefit',
                description: '',
                detailedDescription: ['No detailed description available.']
              };
            });
            
            setBenefits(formattedBenefits);
            setActiveBenefit(0); // Reset to first benefit when service changes
          } else {
            // Service found but no benefits defined
            setBenefits([{
              title: 'Benefits Coming Soon',
              description: 'We are currently preparing detailed benefits for this service. Please check back soon or contact us for more information.'
            }]);
          }
        } else {
          // Fallback to default benefits if service not found or no benefits defined
          setBenefits([
            {
              title: 'Strategic Alignment',
              description: 'Align your SAP implementation with business objectives, ensuring technology investments directly support growth and operational goals.',
              detailedDescription: [
                'Align IT strategy with business goals',
                'Ensure technology supports business growth',
                'Optimize operational efficiency through technology'
              ]
            },
            {
              title: 'Process Standardization',
              description: 'Establish consistent business processes across all departments, eliminating variations and improving operational efficiency.',
              detailedDescription: [
                'Standardize workflows across the organization',
                'Reduce process variations and exceptions',
                'Improve operational efficiency'
              ]
            },
            {
              title: 'Data Centralization',
              description: 'Create a single source of truth for all business data, enabling better decision-making and eliminating data silos.',
              detailedDescription: [
                'Centralize data management',
                'Improve data accuracy and consistency',
                'Enable better business intelligence and reporting'
              ]
            },
            {
              title: 'Scalable Foundation',
              description: 'Build a flexible SAP foundation that grows with your business, supporting future expansion and new requirements.',
              detailedDescription: [
                'Design for future growth',
                'Support new business requirements',
                'Easily adapt to changing business needs'
              ]
            },
            {
              title: 'Cost Optimization',
              description: 'Reduce operational costs through streamlined processes, improved resource utilization, and elimination of redundant systems.',
              detailedDescription: [
                'Identify and eliminate redundant processes',
                'Optimize resource allocation',
                'Reduce total cost of ownership'
              ]
            },
            {
              title: 'Compliance Assurance',
              description: 'Ensure regulatory compliance and data governance from day one, reducing legal risks and audit complexities.',
              detailedDescription: [
                'Maintain regulatory compliance',
                'Implement robust data governance',
                'Simplify audit processes'
              ]
            }
          ]);
        }
      } catch (error) {
        console.error('Error fetching benefits:', error);
        // Set default benefits on error
        setBenefits([
          {
            title: 'Service Unavailable',
            description: 'We are currently unable to load the benefits. Please try again later.'
          }
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    if (serviceName) {
      fetchBenefits();
    } else {
      // If no serviceName is provided, clear benefits
      setBenefits([]);
      setIsLoading(false);
    }
  }, [serviceName]);

  // Icon mapping for benefits - dynamic based on benefit titles
  const getIconForBenefit = (benefitTitle) => {
    const iconMap = {
      'Strategic Alignment': <Target className="w-6 h-6" />,
      'Process Standardization': <CheckCircle className="w-6 h-6" />,
      'Data Centralization': <Database className="w-6 h-6" />,
      'Scalable Foundation': <TrendingUp className="w-6 h-6" />,
      'Cost Optimization': <DollarSign className="w-6 h-6" />,
      'Compliance Assurance': <Shield className="w-6 h-6" />,
      'Global Standardization': <Globe className="w-6 h-6" />,
      'Rapid Expansion': <Rocket className="w-6 h-6" />,
      'Local Adaptation': <Settings className="w-6 h-6" />,
      'Reduced Implementation Time': <Clock className="w-6 h-6" />,
      'Cost Efficiency': <BarChart3 className="w-6 h-6" />,
      'Risk Mitigation': <Shield className="w-6 h-6" />,
      'Continuous Operations': <Activity className="w-6 h-6" />,
      'Performance Excellence': <Zap className="w-6 h-6" />,
      'Expert Guidance': <Users className="w-6 h-6" />,
      'Proactive Maintenance': <RefreshCw className="w-6 h-6" />,
      'Cost Predictability': <DollarSign className="w-6 h-6" />,
      'Technology Innovation': <Lightbulb className="w-6 h-6" />,
      'Technology Modernization': <Cpu className="w-6 h-6" />,
      'Enhanced User Experience': <Smartphone className="w-6 h-6" />,
      'Advanced Analytics': <BarChart3 className="w-6 h-6" />,
      'Future-Proof Platform': <TrendingUp className="w-6 h-6" />,
      'Improved Performance': <Zap className="w-6 h-6" />,
      'Security Enhancement': <Lock className="w-6 h-6" />,
      'Unified Data Ecosystem': <Database className="w-6 h-6" />,
      'Real-Time Synchronization': <Activity className="w-6 h-6" />,
      'Enhanced Collaboration': <Users className="w-6 h-6" />,
      'Flexible Architecture': <Layers className="w-6 h-6" />,
      'Reduced Complexity': <Settings className="w-6 h-6" />,
      'Improved Decision Making': <Brain className="w-6 h-6" />,
      'Seamless Transition': <ArrowRight className="w-6 h-6" />,
      'Modern Platform Benefits': <Star className="w-6 h-6" />,
      'Data Integrity Assurance': <Shield className="w-6 h-6" />,
      'Scalable Infrastructure': <TrendingUp className="w-6 h-6" />,
      'Process Efficiency': <Zap className="w-6 h-6" />,
      'Intelligent Automation': <Brain className="w-6 h-6" />,
      'Real-Time Operations': <Activity className="w-6 h-6" />,
      'Cost Reduction': <DollarSign className="w-6 h-6" />,
      'Scalable Solutions': <TrendingUp className="w-6 h-6" />,
      'Enhanced Accuracy': <CheckCircle className="w-6 h-6" />,
      'Quality Assurance': <CheckCircle className="w-6 h-6" />,
      'Performance Optimization': <Zap className="w-6 h-6" />,
      'Accelerated Deployment': <Rocket className="w-6 h-6" />,
      'Compliance Validation': <Shield className="w-6 h-6" />,
      'User Experience Excellence': <Smartphone className="w-6 h-6" />
    };
    
    return iconMap[benefitTitle] || <Star className="w-6 h-6" />;
  };

  // Auto-rotate active benefit every 5 seconds
  useEffect(() => {
    if (benefits.length > 0) {
      const interval = setInterval(() => {
        setActiveBenefit((prev) => (prev + 1) % benefits.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [benefits.length]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600"></div>
      </div>
    );
  }

  return (
    <section id="benefits" className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-[#fff5f5] scroll-mt-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose {serviceName ? serviceName.toUpperCase() : 'SAP SERVICES'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the key benefits that make our {serviceName?.toLowerCase() || 'SAP services'} the preferred choice for enterprises worldwide.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Sidebar - Detailed Benefits */}
          <div className="lg:sticky lg:top-8 transition-all duration-300 hover:transform hover:-translate-y-1">
            <div className="bg-gradient-to-br from-red-50 via-white to-orange-50 p-8 rounded-3xl border-2 border-red-200/50 shadow-2xl shadow-red-200/30 backdrop-blur-sm relative overflow-hidden hover:shadow-2xl hover:shadow-red-200/50 transition-all duration-300">
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-red-300/20 to-pink-300/20 rounded-full blur-lg animate-pulse"></div>
              
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-400/20 via-orange-400/20 to-red-400/20 animate-pulse"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                    <span className="relative">
                      <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full"></span>
                      Benefits Overview
                    </span>
                  </h3>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => setActiveBenefit(prev => (prev - 1 + benefits.length) % benefits.length)}
                      className="p-1.5 rounded-full bg-white/80 shadow hover:bg-white transition-colors"
                      aria-label="Previous benefit"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => setActiveBenefit(prev => (prev + 1) % benefits.length)}
                      className="p-1.5 rounded-full bg-white/80 shadow hover:bg-white transition-colors"
                      aria-label="Next benefit"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {benefits[activeBenefit] && (
                  <div className="space-y-6">
                    <div className="bg-white/80 p-6 rounded-2xl border border-red-200/50 shadow-lg backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-red-100 to-orange-50 text-red-600 mr-4 shadow-inner">
                          {getIconForBenefit(benefits[activeBenefit].title)}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-800 mb-2">
                            {benefits[activeBenefit].title}
                          </h4>
                          <p className="text-gray-700">
                            {benefits[activeBenefit].description}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Dynamic detailed description from JSON */}
                    {benefits[activeBenefit].detailedDescription && (
                      <div className="bg-gradient-to-br from-red-50/80 to-orange-50/80 p-6 rounded-2xl border-2 border-red-200/50 shadow-lg backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                        <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                          <span className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mr-2"></span>
                          Key Benefits
                        </h4>
                        <ul className="text-gray-700 space-y-3">
                          {benefits[activeBenefit].detailedDescription.map((item, index) => (
                            <li key={index} className="flex items-start group">
                              <span className="text-red-500 font-bold mr-3 mt-0.5 group-hover:scale-110 transition-transform">•</span>
                              <span className="group-hover:text-gray-900 transition-colors">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
                
                {/* Navigation dots */}
                {benefits.length > 1 && (
                  <div className="flex justify-center mt-6 space-x-2">
                    {benefits.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveBenefit(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          index === activeBenefit ? 'w-6 bg-gradient-to-r from-red-500 to-orange-500' : 'bg-red-300/50 hover:bg-red-400/50'
                        }`}
                        aria-label={`Go to benefit ${index + 1}`}
                      ></button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Sidebar - Benefits List */}
          <div className="">
            <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 p-8 rounded-3xl border-2 border-gray-200/50 shadow-2xl shadow-gray-200/30 backdrop-blur-sm min-h-[600px] w-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                <span className="w-3 h-3 bg-gray-500 rounded-full mr-3"></span>
                Key Benefits
              </h3>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveBenefit(index)}
                    className={`p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                      index === activeBenefit
                        ? 'bg-gradient-to-r from-red-500 to-red-600 border-red-500 shadow-lg shadow-red-200/50'
                        : 'bg-white/60 border-gray-200 hover:border-red-300 hover:bg-red-50/50'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`mr-4 ${
                        index === activeBenefit ? 'text-white' : 'text-red-600'
                      }`}>
                        {getIconForBenefit(benefit.title)}
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-semibold ${
                          index === activeBenefit ? 'text-white' : 'text-gray-800'
                        }`}>
                          {benefit.title}
                        </h4>
                        <p className={`text-sm mt-1 ${
                          index === activeBenefit ? 'text-red-100' : 'text-gray-600'
                        }`}>
                          {benefit.description}
                        </p>
                      </div>
                      <div className={`ml-4 ${
                        index === activeBenefit ? 'text-white' : 'text-gray-400'
                      }`}>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 