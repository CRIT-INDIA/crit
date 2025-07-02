import React from 'react';
import { Linkedin, Twitter, Youtube, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#0c1c3c] text-white overflow-visible">
      <div className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
            
            {/* Company Brand Section */}
            <div className="lg:col-span-5">
              <div>
                {/* Logo and Brand */}
                <div className="flex items-center mb-8">
                  <div className="relative group">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center mr-6 transform transition-all duration-500 shadow-lg overflow-hidden">
                      <img
                        src="https://res.cloudinary.com/dujw4np0d/image/upload/v1751005553/CRIT-3D_cpzr1n.png"
                        alt="CRIT 3D Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
                      Connecting Roots IT 
                    </h2>
                    <p className="text-[#3B82F6] text-sm font-medium">SAP Excellence Partner</p>
                  </div>
                </div>
                
                {/* Mission Statement */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-[#3B82F6] hover:text-[#D12222] transition-colors duration-300">Transforming Business Through Technology</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Empowering enterprises with comprehensive SAP implementation and support services. 
                    We deliver tailored solutions that drive innovation and sustainable growth.
                  </p>
                </div>
                
                
                
                {/* Social Media */}
                <div className="flex space-x-4">
                  {[
                    { name: 'LinkedIn', icon: Linkedin, link: 'https://www.linkedin.com/company/connecting-root/' },
                    { name: 'Twitter', icon: Twitter, link: 'https://x.com/critindia' },
                    { name: 'YouTube', icon: Youtube },
                    { name: 'Facebook', icon: Facebook, link: 'https://www.facebook.com/critindia' }
                  ].map((social, index) => (
                    <a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#3B82F6] hover:scale-110 rounded-xl flex items-center justify-center cursor-pointer transform transition-all duration-300 hover:shadow-lg hover:shadow-[#D12222]/30"
                      style={{animationDelay: `${index * 0.1}s`}}
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <social.icon className="w-5 h-5 text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="lg:col-span-4">
              <div className="grid grid-cols-2 gap-8">
                
                {/* SAP Services Column (moved from bottom) */}
                <div className="group">
                  <h3 className="text-xl font-bold mb-6 text-[#3B82F6] hover:text-[#D12222] transition-colors duration-300 relative cursor-pointer">
                    SAP Services
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3B82F6] transition-all duration-700 group-hover:w-35"></div>
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: 'SAP Implementation', path: '/services/implementation' },
                      { name: 'SAP RollOut', path: '/services/rollout' },
                      { name: 'SAP Support', path: '/services/support' },
                      { name: 'SAP Upgrade', path: '/services/upgrade' },
                      { name: 'SAP Integration', path: '/services/integration' },
                      { name: 'SAP Migration', path: '/services/migration' },
                    ].map((service, index) => (
                      <a
                        key={service.name}
                        href={service.path}
                        className=" text-gray-300 hover:text-[#3B82F6] transition-all duration-500 flex items-center group/link transform hover:translate-x-3"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="w-2 h-2 bg-[#3B82F6] rounded-full mr-3 transform scale-0 transition-all duration-300 group-hover/link:scale-100"></div>
                        <span className="relative text-sm">
                          {service.name}
                          <span className="absolute bottom-0 left-0 w-0 h-px bg-[#3B82F6] transition-all duration-500 group-hover/link:w-full"></span>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
 
                {/* Our Products Column */}
                <div className="group">
                  <h3 className="text-xl font-bold mb-6 text-[#3B82F6] hover:text-[#D12222] transition-colors duration-300 relative cursor-pointer">
                    Our Products
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3B82F6] transition-all duration-700 group-hover:w-25"></div>
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: 'SAP S/4HANA', path: '/products/sap-s4hana' },
                      { name: 'SAP ARIBA', path: '/products/sap-ariba' },
                      { name: 'SAP SuccessFactors', path: '/products/success-factors' },
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
                  { icon: '📍', text: '1st Floor,101, Police, Wireless Colony,Vishal Nagar, Pimple Nilakh Pune, Pimpri-Chinchwad, Maharashtra 411027', delay: '0s' },
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
             
            </div>
          </div>
          
          {/* Company Section (moved from main grid) */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <h4 className="text-center text-[#3B82F6] hover:text-[#D12222] transition-colors duration-300 font-semibold mb-6 text-lg cursor-pointer">
              Company
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
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
                  className="px-4 py-2 bg-[#0c1c3c] text-gray-300 rounded-full text-sm border border-gray-700 transform transition-all duration-500 hover:border-[#3B82F6] hover:text-[#3B82F6] hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#3B82F6]/20 cursor-pointer"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {link.name}
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
    </footer>
  );
}