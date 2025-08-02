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

  // Fetch benefits from services.json based on serviceName
  useEffect(() => {
    const fetchBenefits = async () => {
      try {
        const response = await fetch('/json/data/services.json');
        const data = await response.json();
        
        // Find the service that matches the serviceName
        const service = data.services.sections.find(service => 
          service.title === serviceName
        );
        
        if (service && service.benefits) {
          setBenefits(service.benefits);
        } else {
          // Fallback to default benefits if service not found
          setBenefits([
            {
              title: 'Strategic Alignment',
              description: 'Align your SAP implementation with business objectives, ensuring technology investments directly support growth and operational goals.'
            },
            {
              title: 'Process Standardization',
              description: 'Establish consistent business processes across all departments, eliminating variations and improving operational efficiency.'
            },
            {
              title: 'Data Centralization',
              description: 'Create a single source of truth for all business data, enabling better decision-making and eliminating data silos.'
            },
            {
              title: 'Scalable Foundation',
              description: 'Build a flexible SAP foundation that grows with your business, supporting future expansion and new requirements.'
            },
            {
              title: 'Cost Optimization',
              description: 'Reduce operational costs through streamlined processes, improved resource utilization, and elimination of redundant systems.'
            },
            {
              title: 'Compliance Assurance',
              description: 'Ensure regulatory compliance and data governance from day one, reducing legal risks and audit complexities.'
            }
          ]);
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching benefits:', error);
        setIsLoading(false);
      }
    };

    if (serviceName) {
      fetchBenefits();
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
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100">
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
          <div className="lg:sticky lg:top-8">
            <div className="bg-gradient-to-br from-red-50 via-white to-orange-50 p-8 rounded-3xl border-2 border-red-200/50 shadow-2xl shadow-red-200/30 backdrop-blur-sm relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-red-300/20 to-pink-300/20 rounded-full blur-lg"></div>
              
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-400/20 via-orange-400/20 to-red-400/20 animate-pulse"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                  Benefits Overview
                </h3>
                
                {benefits[activeBenefit] && (
                  <div className="space-y-6">
                    <div className="bg-white/60 p-6 rounded-2xl border border-red-200/50 shadow-lg">
                      <div className="flex items-center mb-4">
                        <div className="text-red-600 mr-3">
                          {getIconForBenefit(benefits[activeBenefit].title)}
                        </div>
                        <h4 className="text-xl font-semibold text-gray-800">
                          {benefits[activeBenefit].title}
                        </h4>
                      </div>
                      <p className="text-gray-700 mb-4">
                        {benefits[activeBenefit].description}
                      </p>
                    </div>
                    
                    {/* Dynamic detailed description from JSON */}
                    {benefits[activeBenefit].detailedDescription && (
                      <div className="bg-gradient-to-br from-red-100/40 to-orange-100/30 p-6 rounded-2xl border-2 border-red-300/50 shadow-xl shadow-red-200/40 backdrop-blur-sm">
                        <h4 className="font-bold text-red-800 mb-3 flex items-center">
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                          Key Benefits
                        </h4>
                        <ul className="text-sm text-gray-700 space-y-2">
                          {benefits[activeBenefit].detailedDescription.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-red-500 font-bold mr-2 mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
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