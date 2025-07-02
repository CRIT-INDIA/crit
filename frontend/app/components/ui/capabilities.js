import React from 'react';
import {
   Brain,
   Cloud,
   Lightbulb,
   Zap,
   Shield,
   Settings,
   Bot,
   TrendingUp,
   Rocket
} from 'lucide-react';

// Simple hover effect component since we don't have access to the original
const HoverEffect = ({ items, className }) => {
  return (
    <div className={`grid gap-3 md:gap-4 ${className}`}>
      {items.map((item, index) => (
        <div 
          key={index}
          className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg md:rounded-xl p-3 md:p-6 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20 hover:-translate-y-1"
        >
          <div className="flex flex-col items-center text-center space-y-2 md:space-y-4">
            <div className="p-2 md:p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors duration-300">
              {item.icon}
            </div>
            <h3 className="text-sm md:text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300 leading-tight">
              {item.title}
            </h3>
            <p className="hidden md:block text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Capabilities() {
  const services = [
    {
      title: "AI-Powered Solutions",
      description: "Leverage cutting-edge artificial intelligence and machine learning to automate and enhance your business processes for maximum efficiency.",
      link: "#ai-solutions",
      icon: React.createElement(Bot, { className: "w-8 h-8 text-blue-400" })
    },
    {
      title: "Cloud Architecture",
      description: "Build scalable, flexible cloud infrastructure that enables digital transformation and supports your growing business needs.",
      link: "#cloud-architecture",
      icon: React.createElement(Cloud, { className: "w-8 h-8 text-blue-400" })
    },
    {
      title: "Digital Innovation",
      description: "Create breakthrough digital experiences using emerging technologies and innovative approaches to solve complex business challenges.",
      link: "#digital-innovation",
      icon: React.createElement(Lightbulb, { className: "w-8 h-8 text-blue-400" })
    },
    {
      title: "Agile Delivery",
      description: "Employ modern agile methodologies to deliver solutions faster, with greater flexibility and continuous improvement cycles.",
      link: "#agile-delivery",
      icon: React.createElement(Rocket, { className: "w-8 h-8 text-blue-400" })
    },
    {
      title: "Cybersecurity",
      description: "Protect your digital assets with advanced security measures, threat detection, and comprehensive risk management strategies.",
      link: "#cybersecurity",
      icon: React.createElement(Shield, { className: "w-8 h-8 text-blue-400" })
    },
    {
      title: "24/7 DevOps",
      description: "Continuous integration and deployment with round-the-clock monitoring and support from our global team of experts.",
      link: "#devops",
      icon: React.createElement(Settings, { className: "w-8 h-8 text-blue-400" })
    },
    {
      title: "Smart Automation",
      description: "Streamline operations with intelligent process automation, RPA, and workflow optimization solutions.",
      link: "#smart-automation",
      icon: React.createElement(Zap, { className: "w-8 h-8 text-blue-400" })
    },
    {
      title: "Strategic Growth",
      description: "Partner with us for long-term success with strategic planning, continuous optimization, and innovation roadmapping.",
      link: "#strategic-growth",
      icon: React.createElement(TrendingUp, { className: "w-8 h-8 text-blue-400" })
    }
  ];

  return React.createElement(
    'div',
    { className: "min-h-* bg-[#0c1c3c] py-8 md:py-16 px-4" },
    React.createElement(
      'div',
      { className: "max-w-7xl mx-auto" },
      React.createElement(
        'div',
        { className: "text-center mb-8 md:mb-12" },
        React.createElement(
          'h1',
          { className: "text-6xl sm:text-6xl lg:text-5xl font-bold text-white mb-2" },
          "Our Capabilities"
        ),
        React.createElement(
          'p',
          { className: "text-sm md:text-lg text-gray-400 max-w-3xl mx-auto px-4" },
          "Transforming Business Through Expert SAP Implementation and Digital solutions"
        )
      ),
      React.createElement(
        'div',
        { className: "max-w-6xl mx-auto px-2 md:px-0" },
        React.createElement(HoverEffect, {
          items: services,
          className: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        })
      )
    )
  );
}