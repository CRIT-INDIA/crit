import React from 'react';
import { Linkedin, Twitter, Youtube, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Animated Tech Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-blue-500 rounded-lg animate-pulse transform rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-blue-400 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-500 opacity-20 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 border border-blue-300 rounded-lg animate-bounce"></div>
      </div>
      
      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({length: 48}).map((_, i) => (
            <div key={i} className="border-r border-blue-500/10 animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
          ))}
        </div>
      </div>
      
      <div className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
            
            {/* Company Brand Section */}
            <div className="lg:col-span-5 group">
              <div className="transform transition-all duration-700 hover:translate-y-[-8px]">
                {/* Logo and Brand */}
                <div className="flex items-center mb-8">
                  <div className="relative">
                    <div className="w-16 h-16 bg-[#D12222] rounded-xl flex items-center justify-center mr-6 transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-lg shadow-[#D12222]/30">
                      <span className="text-white font-bold text-2xl">C</span>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#D12222] rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-2 tracking-tight">
                      CRIT India
                    </h2>
                    <p className="text-[#3B82F6] text-sm font-medium">SAP Excellence Partner</p>
                  </div>
                </div>
                
                {/* Mission Statement */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-[#3B82F6] hover:text-[#D12222] transition-colors duration-300">Transforming Business Through Technology</h3>
                  <p className="text-gray-300 leading-relaxed text-lg transition-colors duration-500 group-hover:text-white">
                    Empowering enterprises with comprehensive SAP implementation and support services. 
                    We deliver tailored solutions that drive innovation and sustainable growth.
                  </p>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {[
                    { number: '500+', label: 'Enterprise Clients' },
                    { number: '15+', label: 'Years Experience' },
                    { number: '50+', label: 'SAP Experts' }
                  ].map((stat, index) => (
                    <div key={stat.label} 
                         className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-700 transform transition-all duration-500 hover:bg-[#3B82F6]/10 hover:border-[#3B82F6] hover:scale-105"
                         style={{animationDelay: `${index * 0.2}s`}}>
                      <div className="text-2xl font-bold text-[#D12222] mb-1">{stat.number}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                {/* Social Media */}
                <div className="flex space-x-4">
                  {[
                    { name: 'LinkedIn', icon: Linkedin },
                    { name: 'Twitter', icon: Twitter },
                    { name: 'YouTube', icon: Youtube },
                    { name: 'Facebook', icon: Facebook }
                  ].map((social, index) => (
                    <div key={social.name} 
                         className="w-12 h-12 bg-[#3B82F6] hover:bg-[#090909] rounded-xl flex items-center justify-center cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#D12222]/30"
                         style={{animationDelay: `${index * 0.1}s`}}>
                      <social.icon className="w-5 h-5 text-white" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="lg:col-span-4">
              <div className="grid grid-cols-2 gap-8">
                
                {/* Our products Column */}
                <div className="group">
  <h3 className="text-xl font-bold mb-6 text-[#3B82F6] hover:text-[#D12222] transition-colors duration-300 relative cursor-pointer">
    Our Products
    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3B82F6] transition-all duration-700 group-hover:w-35"></div>
  </h3>
  <div className="space-y-3">
    {[
      { name: 'SAP S/4HANA', path: '/products/sap-s4hana' },
      { name: 'SAP ARIBA', path: '/products/sap-ariba' },
      { name: 'SAP Success Factors', path: '/products/success-factors' },
      { name: 'SAP HYBRIS', path: '/products/sap-hybris' },
      { name: 'SAP Business Object', path: '/products/business-object' },
      { name: 'SAP Concur', path: '/products/sap-concur' },
    ].map((product, index) => (
      <a
        key={product.name}
        href={product.path}
        className=" text-gray-300 hover:text-[#3B82F6] transition-all duration-500 flex items-center group/link transform hover:translate-x-3"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="w-2 h-2 bg-[#3B82F6] rounded-full mr-3 transform scale-0 transition-all duration-300 group-hover/link:scale-100"></div>
        <span className="relative text-sm">
          {product.name}
          <span className="absolute bottom-0 left-0 w-0 h-px bg-[#3B82F6] transition-all duration-500 group-hover/link:w-full"></span>
        </span>
      </a>
    ))}
  </div>
</div>
 
                {/* Company Column */}
                <div className="group">
                  <h3 className="text-xl font-bold mb-6 text-[#3B82F6] hover:text-[#D12222] transition-colors duration-300 relative cursor-pointer">
                    Company
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3B82F6] transition-all duration-700 group-hover:w-25"></div>
                  </h3>
                  <div className="space-y-3">
    {[
      { name: 'About Us', path: '/about' },
      { name: 'Our Team', path: '/team' },
      { name: 'Careers', path: '/career' },
      { name: 'Case Studies', path: '/case-studies' },
      { name: 'News & Events', path: '/news-events' },
      { name: 'Contact', path: '/contact' }
    ].map((link, index) => (
      <a
        key={link.name}
        href={link.path}
        className=" text-gray-300 hover:text-[#3B82F6] transition-all duration-500 flex items-center group/link transform hover:translate-x-3"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="w-2 h-2 bg-[#3B82F6] rounded-full mr-3 transform scale-0 transition-all duration-300 group-hover/link:scale-100"></div>
        <span className="relative text-sm">
          {link.name}
          <span className="absolute bottom-0 left-0 w-0 h-px bg-[#3B82F6] transition-all duration-500 group-hover/link:w-full"></span>
        </span>
      </a>
    ))}
  </div>
                </div>
              </div>
            </div>
            
            {/* Contact & Newsletter */}
            <div className="lg:col-span-3 group">
              <h3 className="text-xl font-bold mb-6 text-[#3B82F6] hover:text-[#D12222] transition-colors duration-300 relative cursor-pointer">
                Get in Touch
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3B82F6] transition-all duration-700 group-hover:w-33"></div>
              </h3>
              
              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                {[
                  { icon: '📍', text: '3rd Floor, Office No. C 305 DP Road, Police, Wireless Colony, Pune, Maharashtra', delay: '0s' },
                  { icon: '📞', text: '+91 89560 01555', delay: '0.1s' },
                  { icon: '✉️', text: 'info@critindia.com', delay: '0.2s' }
                ].map((contact, index) => (
                  <div key={index} 
                       className="flex items-center text-gray-300 transition-all duration-500 hover:text-[#3B82F6] cursor-pointer transform hover:translate-x-2 hover:scale-105"
                       style={{animationDelay: contact.delay}}>
                    <span className="text-lg mr-4 transform transition-transform duration-300 hover:rotate-12">{contact.icon}</span>
                    <span className="text-sm">{contact.text}</span>
                  </div>
                ))}
              </div>
              
              {/* Newsletter */}
              <div className="p-6 bg-gray-900/60 rounded-2xl border border-gray-700 transform transition-all duration-500 hover:bg-gray-900/80 hover:border-[#3B82F6] backdrop-blur-sm">
                <h4 className="text-lg font-semibold mb-3 text-[#3B82F6]">Stay Updated</h4>
                <p className="text-gray-400 text-sm mb-4">Get latest SAP insights and updates</p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-sm focus:outline-none focus:border-[#3B82F6] transition-all duration-300 focus:shadow-lg focus:shadow-[#3B82F6]/20"
                  />
                  <button className="w-full px-4 py-3 bg-[#3B82F6] hover:bg-[#D12222] rounded-lg text-sm font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#D12222]/30">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* SAP Expertise Showcase */}
          <div className="border-t border-gray-800 pt-8 mb-8">
    <h4 className="text-center text-[#3B82F6] hover:text-[#D12222] transition-colors duration-300 font-semibold mb-6 text-lg cursor-pointer">
      SAP Services
    </h4>
    <div className="flex flex-wrap justify-center gap-3">
      {[
        { name: 'SAP Implementation', path: '/services/implementation' },
        { name: 'SAP Roll Out', path: '/services/rollout' },
        { name: 'SAP Support', path: '/services/support' },
        { name: 'SAP Upgrade', path: '/services/upgrade' },
        { name: 'SAP Integration', path: '/services/integration' },
        { name: 'SAP Migration', path: '/services/migration' },
        { name: 'SAP Automation', path: '/services/automation' },
        { name: 'SAP Testing', path: '/services/testing' },
      ].map((service, index) => (
        <a
          key={service.name}
          href={service.path}
          className="px-4 py-2 bg-gray-900 text-gray-300 rounded-full text-sm border border-gray-700 transform transition-all duration-500 hover:border-[#3B82F6] hover:text-[#3B82F6] hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#3B82F6]/20 cursor-pointer"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {service.name}
        </a>
      ))}
    </div>
  </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              
              {/* Copyright */}
              <div className="text-gray-400 text-sm hover:text-white transition-colors duration-300">
                © {new Date().getFullYear()} CRIT India. All rights reserved. | Transforming Business Through SAP Excellence
              </div>
              
              {/* Legal Links */}
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                {[
                  'Privacy Policy',
                  'Terms of Service',
                  'Sitemap'
                ].map((link, index) => (
                  <a key={link}
                     href="#"
                     className="text-gray-400 hover:text-[#3B82F6] transition-all duration-300 relative group/legal"
                     style={{animationDelay: `${index * 0.1}s`}}>
                    {link}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-[#3B82F6] transition-all duration-500 group-hover/legal:w-full"></span>
                  </a>
                ))}
              </div>
              
          
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
    </footer>
  );
}