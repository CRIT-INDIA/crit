'use client';
import React, { useState } from 'react';
import { 
  Database, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Plane, 
  Handshake,
  FileText,
  Building2,
  TrendingUp,
  Shield,
  Award,
  Phone,
  Mail,
  Calendar,
  Download,
  ChevronRight,
  Briefcase,
  Settings,
  DollarSign,
  Clock
} from 'lucide-react';

const SAPProductsInfo = () => {
  const [selectedProduct, setSelectedProduct] = useState('sap-s4hana');

  // Custom styles for animations
  const animationStyles = `
    /* Hide scrollbar for all browsers */
    * {
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* Internet Explorer 10+ */
    }
    *::-webkit-scrollbar {
      display: none; /* WebKit */
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideInLeft {
      from { transform: translateX(-100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideInRight {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideInUp {
      from { transform: translateY(50px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    @keyframes fadeInUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    .animate-fade-in {
      animation: fadeIn 0.8s ease-out;
    }
    .animate-slide-in-left {
      animation: slideInLeft 0.8s ease-out;
    }
    .animate-slide-in-right {
      animation: slideInRight 0.8s ease-out;
    }
    .animate-slide-in-up {
      animation: slideInUp 0.6s ease-out;
    }
    .animate-fade-in-up {
      animation: fadeInUp 0.5s ease-out forwards;
      opacity: 0;
    }
    .hover\:scale-102:hover {
      transform: scale(1.02);
    }
  `;

  React.useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = animationStyles;
    document.head.appendChild(styleElement);
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  const products = [
    {
      id: 'sap-s4hana',
      name: 'SAP S/4HANA',
      subtitle: 'Next-Generation Intelligent ERP Suite',
      category: 'Enterprise Resource Planning',
      icon: <Database className="w-8 h-8 text-blue-600" />,
      executiveSummary: 'Think of SAP S/4HANA as the central nervous system for your entire company. It is the intelligent engine that powers everything, giving you up-to-the-minute information and automating tasks to make your business run smoother and smarter. Because it is built on a super-fast platform called SAP HANA. Built on the SAP HANA in-memory platform, it delivers unprecedented performance and simplifies your IT landscape while enabling digital transformation initiatives.',
      keyCapabilities: [
        'Real-time financial planning and analysis with embedded analytics',
        'Intelligent automation through machine learning and AI integration',
        'Simplified data architecture reducing system complexity by 75%',
        'Cloud-first architecture with flexible deployment options',
        'Advanced supply chain optimization and demand planning',
        'Integrated compliance and risk management frameworks'
      ],
      businessOutcomes: [
        'Reduce time-to-insight from days to minutes with real-time analytics',
        'Decrease operational costs by 15-25% through process optimization',
        'Accelerate month-end close processes by up to 50%',
        'Improve cash flow management with real-time financial visibility',
        'Enable faster decision-making with predictive analytics capabilities'
      ],
      technicalSpecs: {
        deployment: 'Cloud | On-Premise | Hybrid',
        integration: 'REST APIs, SAP Cloud Platform Integration',
        security: 'SOC 2 Type II, ISO 27001, GDPR Compliant',
        availability: '99.9% SLA with 24/7 support'
      },
      investmentMetrics: {
        roi: '145% over 3 years',
        paybackPeriod: '18 months',
        costReduction: '20-30% in operational costs',
        productivity: '25% improvement in employee productivity'
      },
      industryFocus: ['Manufacturing', 'Financial Services', 'Retail', 'Healthcare', 'Oil & Gas', 'Utilities'],
      clientProfile: 'Mid-market to Enterprise (500+ employees)',
      implementationTime: '6-18 months depending on complexity'
    },
    {
      id: 'sap-ariba',
      name: 'SAP Ariba',
      subtitle: 'Global Procurement and Supply Chain Network',
      category: 'Procurement Excellence',
      icon: <Handshake className="w-8 h-8 text-white" />,
      executiveSummary: 'SAP Ariba connects your organization to the world\'s largest business network, enabling strategic procurement, supplier collaboration, and supply chain optimization. Built on a secure and collaborative platform, Ariba helps you negotiate better deals, reduce risk, and build stronger relationships with your trading partners.',
      keyCapabilities: [
        'Strategic sourcing with AI-powered supplier recommendations',
        'Contract lifecycle management with automated compliance monitoring',
        'Dynamic supplier risk assessment and performance analytics',
        'Guided buying experiences with intelligent catalog management',
        'Automated invoice processing and payment optimization',
        'Supplier network analytics and market intelligence'
      ],
      businessOutcomes: [
        'Achieve 10-20% reduction in procurement costs through better sourcing',
        'Improve supplier performance by 30% with enhanced collaboration',
        'Reduce contract cycle times by 40% with automated workflows',
        'Enhance compliance rates to 95%+ through policy enforcement',
        'Accelerate innovation through strategic supplier partnerships'
      ],
      technicalSpecs: {
        deployment: 'Cloud-based SaaS Platform',
        integration: 'SAP and third-party ERP systems',
        security: 'Multi-tenant architecture with enterprise-grade security',
        availability: '99.9% uptime with global data centers'
      },
      investmentMetrics: {
        roi: '300% over 3 years',
        paybackPeriod: '12 months',
        costReduction: '15-25% in procurement spend',
        productivity: '40% faster procurement cycles'
      },
      industryFocus: ['Manufacturing', 'Government', 'Healthcare', 'Technology', 'Professional Services'],
      clientProfile: 'Mid-market to Enterprise (200+ employees)',
      implementationTime: '3-9 months depending on scope'
    },
    {
      id: 'sap-successfactors',
      name: 'SAP SuccessFactors',
      subtitle: 'Comprehensive Human Capital Management Suite',
      category: 'Human Resources Technology',
      icon: <Users className="w-8 h-8 text-blue-600" />,
      executiveSummary: 'SAP SuccessFactors transforms human resources into a strategic business function through intelligent talent management, workforce analytics, and employee engagement solutions. By aligning your people strategy with your business goals, SuccessFactors helps you attract, retain, and develop top talent in today\'s competitive market.',
      keyCapabilities: [
        'AI-powered talent acquisition and candidate matching',
        'Continuous performance management with goal alignment',
        'Personalized learning and development pathways',
        'Compensation planning and equity management',
        'Succession planning with talent mobility insights',
        'Advanced workforce analytics and predictive modeling'
      ],
      businessOutcomes: [
        'Reduce time-to-hire by 50% with intelligent recruiting tools',
        'Increase employee engagement scores by 25% through personalized experiences',
        'Improve talent retention rates by 30% with proactive management',
        'Accelerate leadership development with succession planning',
        'Optimize workforce costs through predictive analytics'
      ],
      technicalSpecs: {
        deployment: 'Cloud-native SaaS Platform',
        integration: 'SAP ERP, Workday, Oracle HCM, and 500+ connectors',
        security: 'ISO 27001, SOC 2 Type II, Privacy Shield certified',
        availability: '99.9% SLA with regional data residency'
      },
      investmentMetrics: {
        roi: '225% over 3 years',
        paybackPeriod: '15 months',
        costReduction: '20-35% in HR operational costs',
        productivity: '30% improvement in HR team efficiency'
      },
      industryFocus: ['Technology', 'Financial Services', 'Manufacturing', 'Healthcare', 'Public Sector'],
      clientProfile: 'Mid-market to Enterprise (100+ employees)',
      implementationTime: '4-12 months depending on modules'
    },
    {
      id: 'sap-commerce',
      name: 'SAP Commerce Cloud',
      subtitle: 'Omnichannel Digital Commerce Platform',
      category: 'Digital Experience',
      icon: <ShoppingCart className="w-8 h-8 text-white" />,
      executiveSummary: 'SAP Commerce Cloud enables businesses to deliver personalized, seamless shopping experiences across all channels. With advanced AI-driven personalization and robust B2B capabilities, it supports complex commerce scenarios while driving revenue growth and customer loyalty.',
      keyCapabilities: [
        'Omnichannel experience management with unified customer profiles',
        'AI-powered personalization and product recommendations',
        'Advanced B2B commerce with account-based selling',
        'Headless commerce architecture for flexible front-end experiences',
        'Order orchestration and inventory management across channels',
        'Real-time customer service integration and support tools'
      ],
      businessOutcomes: [
        'Increase conversion rates by 20-40% through personalization',
        'Reduce time-to-market for new products by 60%',
        'Improve customer lifetime value by 35% with enhanced experiences',
        'Optimize inventory turnover with intelligent demand forecasting',
        'Enable rapid international expansion with localized commerce'
      ],
      technicalSpecs: {
        deployment: 'Cloud-native with microservices architecture',
        integration: 'SAP ERP, third-party systems via APIs',
        security: 'PCI DSS compliant, enterprise-grade security',
        availability: '99.9% SLA with auto-scaling capabilities'
      },
      investmentMetrics: {
        roi: '280% over 3 years',
        paybackPeriod: '14 months',
        costReduction: '25-40% in commerce platform costs',
        productivity: '50% faster campaign deployment'
      },
      industryFocus: ['Retail', 'Consumer Goods', 'Manufacturing', 'B2B Wholesale', 'Fashion'],
      clientProfile: 'Mid-market to Enterprise (50+ employees)',
      implementationTime: '6-15 months depending on complexity'
    },
    {
      id: 'sap-businessobjects',
      name: 'SAP BusinessObjects',
      subtitle: 'Enterprise Business Intelligence Platform',
      category: 'Analytics & Intelligence',
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      executiveSummary: 'SAP BusinessObjects delivers comprehensive business intelligence capabilities, enabling organizations to transform data into actionable insights. With self-service analytics, enterprise reporting, and advanced visualization, it democratizes data access while maintaining governance and security.',
      keyCapabilities: [
        'Self-service analytics with drag-and-drop report building',
        'Enterprise-grade reporting with pixel-perfect formatting',
        'Interactive dashboards with real-time data visualization',
        'Advanced analytics including predictive and statistical modeling',
        'Mobile BI with offline capabilities for field users',
        'Governed data access with role-based security controls'
      ],
      businessOutcomes: [
        'Reduce report generation time by 70% with self-service capabilities',
        'Improve decision-making speed by 40% with real-time insights',
        'Increase data adoption across the organization by 60%',
        'Optimize operational efficiency through performance analytics',
        'Enable regulatory compliance with automated reporting'
      ],
      technicalSpecs: {
        deployment: 'Cloud | On-Premise | Hybrid environments',
        integration: 'SAP and non-SAP data sources, REST APIs',
        security: 'Row-level security, LDAP/SSO integration',
        availability: '99.9% SLA with disaster recovery options'
      },
      investmentMetrics: {
        roi: '190% over 3 years',
        paybackPeriod: '16 months',
        costReduction: '30-45% in reporting costs',
        productivity: '60% improvement in analyst productivity'
      },
      industryFocus: ['Financial Services', 'Manufacturing', 'Healthcare', 'Government', 'Telecommunications'],
      clientProfile: 'Mid-market to Enterprise (250+ employees)',
      implementationTime: '3-8 months depending on scope'
    },
    {
      id: 'sap-concur',
      name: 'SAP Concur',
      subtitle: 'Travel, Expense & Invoice Management',
      category: 'Financial Operations',
      icon: <Plane className="w-8 h-8 text-white" />,
      executiveSummary: 'SAP Concur simplifies and automates travel and expense management for organizations worldwide. With intelligent automation, policy compliance, and comprehensive audit capabilities, it provides complete visibility and control over business spending.',
      keyCapabilities: [
        'Automated expense reporting with receipt capture and processing',
        'Integrated travel booking with policy compliance monitoring',
        'Invoice management with automated approval workflows',
        'Advanced analytics and spend visibility dashboards',
        'Mobile-first experience with offline capabilities',
        'Risk management and duty of care for traveling employees'
      ],
      businessOutcomes: [
        'Reduce expense processing costs by 65% through automation',
        'Improve policy compliance rates to 98% with intelligent controls',
        'Accelerate expense reimbursement cycles by 75%',
        'Achieve 15-25% savings in travel spending through optimization',
        'Enhance employee satisfaction with streamlined processes'
      ],
      technicalSpecs: {
        deployment: 'Cloud-based SaaS with global data centers',
        integration: 'ERP systems, credit card feeds, travel agencies',
        security: 'SOC 2 Type II, ISO 27001, GDPR compliant',
        availability: '99.9% SLA with 24/7 support coverage'
      },
      investmentMetrics: {
        roi: '385% over 3 years',
        paybackPeriod: '8 months',
        costReduction: '50-70% in T&E processing costs',
        productivity: '80% reduction in manual processing time'
      },
      industryFocus: ['Professional Services', 'Technology', 'Manufacturing', 'Financial Services', 'Healthcare'],
      clientProfile: 'Small to Enterprise (25+ employees)',
      implementationTime: '2-6 months depending on complexity'
    }
  ];

  const currentProduct = products.find(p => p.id === selectedProduct);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white" >
      {/* Executive Header */}
      <div className="border-b border-red-200 bg-white" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-4xl font-bold text-black mb-2">
                SAP Enterprise Solutions Portfolio
              </h1>
              <p className="text-lg text-gray-700">
                Strategic Technology Solutions for Digital Transformation
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                className="flex items-center space-x-2 border border-red-300 text-black px-6 py-3 rounded-lg transition-colors group hover:text-white hover:bg-red-600 hover:border-red-600"
                onClick={() => window.open('mailto:info@example.com?subject=Schedule%20Meeting%20Request&body=I%20would%20like%20to%20schedule%20a%20meeting%20to%20discuss%20SAP%20solutions.')}
              >
                <Calendar className="w-5 h-5 text-black group-hover:text-white transition-colors" />
                <span>Schedule Meeting</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 overflow-x-auto">
          {/* Product Navigation */}
          <div className="lg:col-span-1 animate-slide-in-left sticky top-8">
            <div className="rounded-lg shadow-sm border border-red-200 p-6 bg-white hover:shadow-lg transition-all duration-300" >
              <h3 className="text-lg font-semibold text-red-600 mb-4">Solutions Portfolio</h3>
              <nav className="space-y-2">
                {products.map((product, index) => (
                  <button
                    key={product.id}
                    onClick={() => setSelectedProduct(product.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-all duration-300 transform hover:translate-x-2 hover:shadow-md animate-fade-in-up ${
                      selectedProduct === product.id
                        ? 'bg-red-100 text-red-600 border border-red-300 scale-105 shadow-md'
                        : 'hover:bg-red-50 hover:text-gray-900 text-gray-900 hover:scale-102'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`${selectedProduct === product.id ? 'text-red-600' : 'text-red-400'}`}>
                      {React.cloneElement(product.icon, { className: 'w-8 h-8', color: selectedProduct === product.id ? '#dc2626' : '#f87171' })}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate text-gray-900">{product.name}</div>
                      <div className="text-sm text-gray-700 truncate">{product.category}</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-red-300" />
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:col-span-3 animate-slide-in-right">
            {currentProduct && (
              <div className="space-y-8 animate-fade-in" key={selectedProduct}>
                {/* Product Header */}
                <div className="rounded-lg shadow-sm border border-red-200 p-8 bg-red-100 hover:shadow-lg transition-all duration-300 transform hover:scale-102 animate-slide-in-up">
                  <div className="flex items-start space-x-4">
                    <div className="text-red-600">
                      {React.cloneElement(currentProduct.icon, { className: 'w-8 h-8', color: '#dc2626' })}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-black mb-2">
                        {currentProduct.name}
                      </h2>
                      <p className="text-lg text-gray-900 mb-4">
                        {currentProduct.subtitle}
                      </p>
                      <div className="flex flex-col items-start space-y-2 sm:flex-row sm:items-center sm:space-x-6 sm:space-y-0 text-sm text-gray-900">
                        <span className="flex items-center space-x-1">
                          <Briefcase className="w-4 h-4 text-red-400" />
                          <span>{currentProduct.category}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Users className="w-4 h-4 text-red-400" />
                          <span>{currentProduct.clientProfile}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="w-4 h-4 text-red-400" />
                          <span>{currentProduct.implementationTime}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Executive Summary */}
                <div className="rounded-lg shadow-sm border border-red-200 p-8 bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-102 animate-slide-in-up" style={{ animationDelay: '200ms' }}>
                  <h3 className="text-xl font-semibold text-red-600 mb-4 flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-red-500" />
                    <span>Executive Summary</span>
                  </h3>
                  <p className="text-gray-900 leading-relaxed text-lg text-justify">
                    {currentProduct.executiveSummary}
                  </p>
                </div>

                {/* Key Capabilities & Business Outcomes */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="rounded-lg shadow-sm border border-red-200 p-8 bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-102 animate-slide-in-up" style={{ animationDelay: '300ms' }}>
                    <h3 className="text-xl font-semibold text-red-600 mb-6 flex items-center space-x-2">
                      <Settings className="w-5 h-5 text-red-500" />
                      <span>Key Capabilities</span>
                    </h3>
                    <div className="space-y-4">
                      {currentProduct.keyCapabilities.map((capability, index) => (
                        <div key={index} className="flex items-start space-x-3 animate-fade-in-up" style={{ animationDelay: `${400 + index * 100}ms` }}>
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                          <span className="text-gray-900 hover:text-red-600 transition-colors duration-200">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg shadow-sm border border-red-200 p-8 bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-102 animate-slide-in-up" style={{ animationDelay: '400ms' }}>
                    <h3 className="text-xl font-semibold text-red-600 mb-6 flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5 text-red-500" />
                      <span>Business Outcomes</span>
                    </h3>
                    <div className="space-y-4">
                      {currentProduct.businessOutcomes.map((outcome, index) => (
                        <div key={index} className="flex items-start space-x-3 animate-fade-in-up" style={{ animationDelay: `${500 + index * 100}ms` }}>
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                          <span className="text-gray-900 hover:text-red-600 transition-colors duration-200">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Investment Metrics */}
                <div className="rounded-lg shadow-sm border border-red-200 p-8 sm:block hidden bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-102 animate-slide-in-up" style={{ animationDelay: '500ms' }}>
                  <h3 className="text-xl font-semibold text-red-600 mb-6 flex items-center space-x-2 flex-row">
                    <DollarSign className="w-5 h-5 text-red-500" />
                    <span>Investment Analysis</span>
                  </h3>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="text-center">
                      <div className="font-bold text-red-600 mb-1 text-xs sm:text-base">
                        {currentProduct.investmentMetrics.roi}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-red-600 mb-1 text-xs sm:text-base">
                        {currentProduct.investmentMetrics.paybackPeriod}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-red-600 mb-1 text-xs sm:text-base">
                        {currentProduct.investmentMetrics.costReduction}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-red-600 mb-1 text-xs sm:text-base">
                        {currentProduct.investmentMetrics.productivity}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 mt-1">
                    <div className="text-xs text-gray-700 text-center">Total ROI</div>
                    <div className="text-xs text-gray-700 text-center">Payback Period</div>
                    <div className="text-xs text-gray-700 text-center">Cost Reduction</div>
                    <div className="text-xs text-gray-700 text-center">Productivity Gain</div>
                  </div>
                </div>

                {/* Technical Specifications & Industries */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="rounded-lg shadow-sm border border-red-200 p-8 bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-102 animate-slide-in-up" style={{ animationDelay: '600ms' }}>
                    <h3 className="text-xl font-semibold text-red-600 mb-6 flex items-center space-x-2">
                      <Shield className="w-5 h-5 text-red-500" />
                      <span>Technical Specifications</span>
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900">Deployment Options</div>
                        <div className="text-gray-900">{currentProduct.technicalSpecs.deployment}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">Integration Capabilities</div>
                        <div className="text-gray-900">{currentProduct.technicalSpecs.integration}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">Security & Compliance</div>
                        <div className="text-gray-900">{currentProduct.technicalSpecs.security}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">Service Level Agreement</div>
                        <div className="text-gray-900">{currentProduct.technicalSpecs.availability}</div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg shadow-sm border border-red-200 p-8 sm:block hidden bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-102 animate-slide-in-up" style={{ animationDelay: '700ms' }}>
                    <h3 className="text-xl font-semibold text-red-600 mb-6 flex items-center space-x-2">
                      <Building2 className="w-5 h-5 text-red-500" />
                      <span>Industry Applications</span>
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {currentProduct.industryFocus.map((industry, index) => (
                        <div key={index} className="flex items-center space-x-2 p-3 rounded-lg">
                          <Award className="w-4 h-4 text-red-500" />
                          <span className="text-sm text-gray-900">{industry}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Executive Contact Section */}
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-red-600">
              Executive Consultation Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Partner with our enterprise solution architects to develop a strategic roadmap tailored to your business objectives and digital transformation goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg p-4 sm:p-8 text-center break-words group bg-white border border-red-200 shadow-sm">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-600">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-red-600">Strategic Advisory</h3>
              <p className="text-gray-700 mb-6 text-justify">
                One-on-one consultation with certified solution architects to assess your enterprise requirements and develop implementation strategies.
              </p>
            </div>
            
            <div className="rounded-lg p-4 sm:p-8 text-center break-words group bg-white border border-red-200 shadow-sm" >
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-600">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-red-600">Business Case Development</h3>
              <p className="text-gray-700 mb-6 text-justify">
                Comprehensive ROI analysis, risk assessment, and business case documentation to support your technology investment decisions.
              </p>
            </div>
            
            <div className="rounded-lg p-4 sm:p-8 text-center break-words group bg-white border border-red-200 shadow-sm">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-600">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-red-600">Proof of Concept</h3>
              <p className="text-gray-700 mb-6 text-justify">
                Customized demonstration environments and pilot programs to validate solution fit and demonstrate business value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SAPProductsInfo;