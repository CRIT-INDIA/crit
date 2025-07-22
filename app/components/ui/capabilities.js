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
          className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg md:rounded-xl p-3 md:p-6 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 hover:-translate-y-1"
        >
          <div className="flex flex-col items-center text-center space-y-2 md:space-y-4">
            <div className="p-2 md:p-3 bg-red-100/80 rounded-lg group-hover:bg-red-500/20 transition-colors duration-300">
              {item.icon}
            </div>
            <h3 className="text-sm md:text-xl font-semibold text-white group-hover:text-red-300 transition-colors duration-300 leading-tight">
              {item.title}
            </h3>
            <p className="hidden md:block text-gray-200 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
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
      icon: React.createElement(Bot, { className: "w-8 h-8 text-red-500" })
    },
    {
      title: "Cloud Architecture",
      description: "Build scalable, flexible cloud infrastructure that enables digital transformation and supports your growing business needs.",
      link: "#cloud-architecture",
      icon: React.createElement(Cloud, { className: "w-8 h-8 text-red-500" })
    },
    {
      title: "Digital Innovation",
      description: "Create breakthrough digital experiences using emerging technologies and innovative approaches to solve complex business challenges.",
      link: "#digital-innovation",
      icon: React.createElement(Lightbulb, { className: "w-8 h-8 text-red-500" })
    },
    {
      title: "Agile Delivery",
      description: "Employ modern agile methodologies to deliver solutions faster, with greater flexibility and continuous improvement cycles.",
      link: "#agile-delivery",
      icon: React.createElement(Rocket, { className: "w-8 h-8 text-red-500" })
    },
    {
      title: "Cybersecurity",
      description: "Protect your digital assets with advanced security measures, threat detection, and comprehensive risk management strategies.",
      link: "#cybersecurity",
      icon: React.createElement(Shield, { className: "w-8 h-8 text-red-500" })
    },
    {
      title: "24/7 DevOps",
      description: "Continuous integration and deployment with round-the-clock monitoring and support from our global team of experts.",
      link: "#devops",
      icon: React.createElement(Settings, { className: "w-8 h-8 text-red-500" })
    },
    {
      title: "Smart Automation",
      description: "Streamline operations with intelligent process automation, RPA, and workflow optimization solutions.",
      link: "#smart-automation",
      icon: React.createElement(Zap, { className: "w-8 h-8 text-red-500" })
    },
    {
      title: "Strategic Growth",
      description: "Partner with us for long-term success with strategic planning, continuous optimization, and innovation roadmapping.",
      link: "#strategic-growth",
      icon: React.createElement(TrendingUp, { className: "w-8 h-8 text-red-500" })
    }
  ];

  return React.createElement(
    'div',
    { className: "min-h-* py-8 md:py-16 px-4" },
    React.createElement(
      'div',
      { className: "max-w-7xl mx-auto" },
      React.createElement(
        'div',
        { className: "text-center mb-8 md:mb-12" },
        React.createElement(
  'h1',
  { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 inline-block relative pb-3" },
  React.createElement('span', { className: "text-black" }, "Our "),
  React.createElement('span', { className: "text-red-500" }, "Capabilities"),
  React.createElement('svg', { 
  className: "absolute -bottom-2 left-1/2 transform -translate-x-1/2 mx-auto my-0", 
  style: {marginTop: '2px'}, 
  width: "120", 
  height: "18", 
  viewBox: "0 0 180 24", 
  fill: "none"
}, 
  React.createElement('path', {
    d: "M10 18 Q 70 8, 170 14",
    stroke: "#dc2626",
    strokeWidth: "4",
    strokeLinecap: "round",
    fill: "none"
  }),
  React.createElement('path', {
    d: "M25 21 Q 100 15, 160 18",
    stroke: "#dc2626",
    strokeWidth: "2",
    strokeLinecap: "round",
    fill: "none"
  })
)
),
        React.createElement(
          'p',
          { className: "text-sm md:text-lg text-gray-800 max-w-3xl mx-auto px-4" },
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