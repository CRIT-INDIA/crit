"use client";
import React, { useState } from 'react';
 
const ConnectWithUs = () => {
  // Social media links data
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const socialLinks = [
    {
      platform: 'linkedin',
      username: 'linkedin',
      icon: 'https://res.cloudinary.com/dujw4np0d/image/upload/v1751520336/linkedin_ryjm4m.png',
      brandColor: '#0077b5'
    },
    {
      platform: 'twitter',
      username: 'twitter',
      icon: 'https://res.cloudinary.com/dujw4np0d/image/upload/v1751520337/twitter_k0jxlk.png',
      brandColor: '#1da1f2'
    },
    {
      platform: 'youtube',
      username: 'youtube',
      icon: 'https://res.cloudinary.com/dujw4np0d/image/upload/v1751520336/youtube_h5itfe.png',
      brandColor: '#ff0000'
    },
    {
      platform: 'facebook',
      username: 'facebook',
      icon: 'https://res.cloudinary.com/dujw4np0d/image/upload/v1751520337/facebook_fl3imf.png',
      brandColor: '#1877f3'
    },
    {
      platform: 'instagram',
      username: 'instagram',
      icon: 'https://res.cloudinary.com/dujw4np0d/image/upload/v1751520336/instagram_pddu5e.png',
      brandColor: '#fd5d47'
    },
    {
      platform: 'telegram',
      username: 'telegram',
      icon: 'https://res.cloudinary.com/dujw4np0d/image/upload/v1751520336/telegram_qahmsf.png',
      brandColor: '#229ed9'
    }
  ];
 
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-2">
            Follow{' '}
            <span className="text-blue-400 shadow-2xl font-bold">Our Socials</span>
          </h2>
        </div>
 
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dujw4np0d/image/upload/v1751520337/image_tl5e86.jpg"
                alt="Technology workspace with digital interfaces"
                className="w-full h-64 sm:h-80 lg:h-76 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-800/20 to-transparent rounded-lg"></div>
            </div>
          </div>
 
          {/* Right Side - Social Media Links */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`bg-black transition-all duration-300 transform hover:scale-105 rounded-xl p-4 sm:p-5 flex items-center space-x-4 shadow-lg`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={
                    hoveredIndex === index
                      ? { boxShadow: '0 0 20px 4px #2563eb' }
                      : {}
                  }
                >
                  <div className="flex-shrink-0">
                    {social.platform === 'instagram' ? (
                      <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-md bg-gradient-to-tr from-[#fd5d47] via-[#e1306c] to-[#833ab4]">
                        <img
                          src={social.icon}
                          alt={`${social.platform} icon`}
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-md" style={{ background: social.brandColor }}>
                        <img
                          src={social.icon}
                          alt={`${social.platform} icon`}
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-base truncate">
                      {social.username}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
 
        {/* Bottom Text */}
        <div className="text-center mt-12 font-bold text-2xl">
          <p className="text-lg sm:text-2xl text-gray-300">
            Think{' '}
            <span className="text-red-500 font-bold">SAP</span>
            , Think{' '}
            <span className="text-blue-400 font-bold">SoftCore Solutions</span>
            ...
          </p>
        </div>
      </div>
    </div>
  );
};
 
export default ConnectWithUs;