"use client";
import React, { useState } from "react";
import ProductNetwork3D from "@/app/components/ui/product3d";

import Link from "next/link";
import {
  ChevronRight,
  Users,
  BookOpen,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Target,
  Layers,
  Database,
  Globe,
  X,
} from "lucide-react";

const SAPProductPage = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);

  const products = [
    {
      id: 1,
      name: "SAP S/4HANA",
      slug: "sap-s4hana-products",
      tagline: "The Future of ERP",
      description:
        "Get hands-on with SAP's integrated, intelligent, next-generation ERP platform for modern businesses. Learn core and advanced modules.",
      features: [
        "Finance & Controlling (FI/CO)",
        "Supply Chain Management",
        "Embedded Analytics & Reporting",
        "Cloud and On-prem Deployment Options",
      ],
      icon: <Database className="w-8 h-8" />,
      modules: 12,
      certification: "SAP S/4HANA Certified",
      difficulty: "Intermediate",
    },
    {
      id: 2,
      name: "SAP Ariba",
      slug: "sap-ariba-products",
      tagline: "Procurement Excellence",
      description:
        "Master collaborative procurement, supplier management, and sourcing with SAP Ariba's cloud-based solutions.",
      features: [
        "Supplier & Contract Management",
        "Guided Sourcing",
        "Spend Analysis",
        "Procure-to-Pay Automation",
      ],
      icon: <TrendingUp className="w-8 h-8" />,
      modules: 8,
      certification: "SAP Ariba Certified",
      difficulty: "Beginner",
    },
    {
      id: 3,
      name: "SAP SuccessFactors",
      slug: "sap-successfactors-products",
      tagline: "Human Capital Revolution",
      description:
        "Revolutionize HR management—from recruiting to performance—with SAP's leading cloud HCM suite.",
      features: [
        "Core HR / Employee Central",
        "Talent & Performance Management",
        "Learning & Development",
        "HR Analytics & Workforce Planning",
      ],
      icon: <Users className="w-8 h-8" />,
      modules: 10,
      certification: "SAP SuccessFactors Certified",
      difficulty: "Intermediate",
    },
    {
      id: 4,
      name: "SAP Hybris (SAP Commerce Cloud)",
      slug: "sap-hybris-products",
      tagline: "Commerce Innovation",
      description:
        "Create seamless omnichannel e-commerce experiences and customer journeys using the SAP Commerce platform.",
      features: [
        "Product Content Management",
        "Omnichannel Commerce",
        "Personalization & Promotions",
        "API-First Architecture",
      ],
      icon: <Globe className="w-8 h-8" />,
      modules: 9,
      certification: "SAP Commerce Certified",
      difficulty: "Advanced",
    },
    {
      id: 5,
      name: "SAP BusinessObjects",
      slug: "sap-businessobjects-products",
      tagline: "Data Intelligence",
      description:
        "Gain expertise in SAP BusinessObjects for enterprise reporting, data visualization, and business intelligence.",
      features: [
        "Crystal Reports & Web Intelligence",
        "Interactive Dashboards",
        "Self-Service BI",
        "Semantic Layer Design",
      ],
      icon: <Layers className="w-8 h-8" />,
      modules: 7,
      certification: "SAP BusinessObjects Certified",
      difficulty: "Intermediate",
    },
    {
      id: 6,
      name: "SAP Concur",
      slug: "sap-concur-products",
      tagline: "Expense Simplified",
      description:
        "Learn to automate travel expense management, streamline compliance and expense management using SAP Concur.",
      features: [
        "Expense & Invoice Automation",
        "Travel Booking Integration",
        "Policy Compliance",
        "Mobile Receipt Capture",
      ],
      icon: <Target className="w-8 h-8" />,
      modules: 5,
      certification: "SAP Concur Certified",
      difficulty: "Beginner",
    },
  ];

  const difficultyColor = (level) => {
    switch (level) {
      case "Beginner":
        return "from-green-400 to-teal-400 text-white";
      case "Intermediate":
        return "from-yellow-400 to-yellow-500 text-white";
      case "Advanced":
        return "from-pink-500 to-purple-500 text-white";
      default:
        return "from-gray-400 to-gray-500 text-white";
    }
  };

  const ProductModal = ({ product, onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-[fadeIn_0.5s]">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white/5 border border-white/10 shadow-2xl"
        style={{boxShadow: "0 16px 48px 0 rgba(0, 80, 180, 0.3), 0 1.5px 4px 0 rgba(0,0,0,0.15)"}}
      >
        <div className="absolute top-3 right-3">
          <button onClick={onClose} className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition shadow">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-8 pt-10">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-14 h-14 bg-[#0c1c3c]/80 border border-[#00aeef]/40 rounded-2xl flex items-center justify-center text-cyan-400 shadow">
              {product.icon}
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-white font-[Nunito]">{product.name}</h3>
              <p className="text-cyan-300 text-base font-semibold">{product.tagline}</p>
            </div>
          </div>
          <p className="text-white/70 text-lg leading-relaxed mb-6">{product.description}</p>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="glass-card text-center">
              <div className="text-2xl font-extrabold text-white">{product.modules}</div>
              <div className="text-cyan-200 text-xs uppercase">Modules</div>
            </div>
            <div className="glass-card text-center">
              <div className="flex items-center justify-center gap-2 text-cyan-400 font-bold text-lg">
                <CheckCircle className="w-5 h-5" />
                Certified
              </div>
              <div className="text-white/70 text-xs">{product.certification}</div>
            </div>
            <div className={`glass-card text-center bg-gradient-to-r ${difficultyColor(product.difficulty)} shadow-md`}>
              <div className="text-md font-black uppercase">{product.difficulty}</div>
              <div className="text-white/80 text-xs tracking-widest">Level</div>
            </div>
          </div>
          <div className="mb-7">
            <h4 className="text-lg font-bold text-white font-[Nunito] mb-3">What You Will Learn</h4>
            <div className="space-y-2">
              {product.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-white/80 text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            
          </div>
        </div>
      </div>
    </div>
  );

  const nodeData = [
    { id: 'node1', cx: 200, cy: 70, r: 18, name: 'SAP S/4HANA', color: 'fill-cyan-400', delay: '0s' },
    { id: 'node2', cx: 80, cy: 180, r: 18, name: 'SAP Ariba', color: 'fill-indigo-400', delay: '0.5s' },
    { id: 'node3', cx: 320, cy: 180, r: 18, name: 'SAP SuccessFactors', color: 'fill-emerald-400', delay: '1s' },
    { id: 'node4', cx: 80, cy: 320, r: 18, name: 'SAP Commerce Cloud', color: 'fill-rose-400', delay: '1.5s' },
    { id: 'node5', cx: 320, cy: 320, r: 18, name: 'SAP BusinessObjects', color: 'fill-amber-400', delay: '2s' },
    { id: 'node6', cx: 200, cy: 380, r: 18, name: 'SAP Concur', color: 'fill-violet-400', delay: '2.5s' },
  ];

  const handleNodeHover = (node) => {
    setHoveredNode(node);
  };

  const handleNodeLeave = () => {
    setHoveredNode(null);
  };

  return (
    <div className="relative min-h-* bg-gradient-to-br from-[#081020] via-[#0d1a34] to-[#1a3468] text-white overflow-hidden">
    
        
      <section className="py-24 px-8 sm:px-8 lg:px-0 max-w-7xl mx-auto w-full pt-30">
      
     
      <main className="relative z-10 pt-0 pb-10 sm:pb-28 lg:pb-16 font-sans">
        {/* Subtle Background Blobs (Optional: Remove these if you don't want them or haven't configured 'animate-blob' in tailwind.config.js) */}
        {/* These blobs are hidden on small screens (md:hidden) to keep mobile clean */}
        <div className="hidden md:block absolute top-1/4 left-1/4 w-[28rem] h-[28rem] bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="hidden md:block absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

        {/* Content container for alignment and responsiveness */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid for two-column layout on medium screens and up, single column on small screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12 lg:gap-x-24 items-center">
            {/* Left Column: Text Content */}
            <div className="text-left py-12 md:py-0"> {/* Added vertical padding for mobile, none for desktop */}
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
              <p className="max-w-full lg:max-w-xl text-lg sm:text-lg leading-relaxed text-slate-300 mb-2 pt-7">
                SAP products are a suite of software solutions developed by SAP, one of the world&apos;s largest enterprise software companies.
              </p>
              <p className="max-w-full lg:max-w-xl text-lg sm:text-lg leading-relaxed text-slate-300 pt-2">
                These products are designed to help organizations manage key business functions such as finance, human resources, procurement,
                supply chain, sales, e-commerce, analytics, and more. SAP&apos;s flagship products include solutions like SAP S/4 HANA
                for enterprise resource planning (ERP), SAP Ariba for procurement, SAP SuccessFactors for human capital management,
                SAP Commerce Cloud (formerly Hybris) for e-commerce, SAP BusinessObjects for business intelligence, and SAP Concur
                for travel and expense management.
              </p>

              
            </div>

            {/* Right Column: Three.js 3D Visual */}
            {/* Set a fixed height for the canvas container, as Canvas fills its parent */}
            <div className="mt-12 md:mt-0 w-full h-96 sm:h-[400px] lg:h-[500px] flex justify-center items-center">
              {/* The ProductNetwork3D component will render the interactive 3D canvas */}
              <ProductNetwork3D />
            </div>
          </div>
        </div>
      </main>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, idx) => (
            <div
              key={product.id}
              className={`relative group cursor-pointer bg-white/[.04] backdrop-blur-[2.5px] rounded-3xl border border-white/10 shadow-xl transition-all duration-400 p-8 overflow-hidden min-h-[380px] flex flex-col
                hover:shadow-2xl hover:scale-[1.025] hover:border-cyan-400/80 animate-[fadePop_0.9s_ease]`}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              onClick={() => setSelectedProduct(product)}
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              {/* Floating badge */}
              
              <div className="w-14 h-14 rounded-xl bg-cyan-950/90 border border-cyan-900/90 flex items-center justify-center mb-6 text-cyan-400 shadow">
                {product.icon}
              </div>
              <h3 className="text-2xl font-bold mb-0.5 group-hover:text-cyan-400 transition-colors duration-200">
                {product.name}
              </h3>
              <p className="text-gray-300 text-xs font-medium mb-3">{product.tagline}</p>
              <p className="text-white/80 mb-4 leading-relaxed text-base line-clamp-3 flex-1">{product.description}</p>
              
              {/* Animated CTA Button */}
              <Link href={`/products/${product.slug}`}>
                <button className="mt-auto w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-bold bg-cyan-900/40 backdrop-blur hover:bg-gradient-to-r hover:from-cyan-300 hover:to-blue-400 hover:text-black border border-cyan-400/20 shadow hover:scale-105 transition-all duration-250 hover:cursor-pointer">
                  Get Details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </Link>
              {/* Glow on hover */}
              <div className="absolute inset-0 pointer-events-none z-0 group-hover:opacity-80 rounded-3xl group-hover:shadow-[0_8px_36px_0_#00d4ff30] transition-all duration-400" />
            </div>
          ))}
        </div>
        {/* View All Courses Button */}
        
      </section>

      

      
      {/* Animations & Glass Card */}
      <style jsx>{`
        /* Animated gradient sweep for hero */
        @keyframes gradient-wave {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-wave {
          background-size: 200% 100%;
          animation: gradient-wave 3.8s ease-in-out infinite alternate;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: scale(0.99); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes fadePop {
          0% { opacity: 0.1; transform: translateY(32px) scale(0.95); }
          75% { opacity: 1; transform: translateY(-5px) scale(1.03); }
          100% { transform: translateY(0) scale(1); }
        }
        .animate-blob-move {
          animation: blob-move 17s cubic-bezier(0.23, 1, 0.32, 1) infinite alternate;
        }
        @keyframes blob-move {
          0% { transform: scale(1) translate(-50%, -50%); }
          50% { transform: scale(1.1, 1.03) translate(-49%, -52%); }
          100% { transform: scale(0.97,1.07) translate(-51%, -48%); }
        }
        .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
        .glass-card {
          background: linear-gradient(112.8deg,rgba(13,36,56,0.91) 10%,rgba(40,89,156,0.12) 90%);
          border: 1.5px solid rgba(0,212,255,0.09);
          border-radius: 16px;
          box-shadow: 0 0.5px 5px 0 rgba(0, 212, 255, 0.05), 0 0.5px 1px 0 rgba(0,0,0,0.07);
          padding: 1.1rem 0.75rem;
        }
      `}</style>
    </div>
  );
};

export default SAPProductPage;