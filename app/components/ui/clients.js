import React from 'react';

const MovingClientsSection = () => {
  // Client data matching the style from your image
  const clients = [
    { name: 'WYscale', logo: 'https://img.icons8.com/color/96/w.png' },
    { name: 'TonGYM', logo: 'https://img.icons8.com/color/96/t.png' },
    { name: 'Client 3', logo: 'https://img.icons8.com/color/96/google-logo.png' },
    { name: 'BT', logo: 'https://img.icons8.com/color/96/b.png' },
    { name: 'Microsoft', logo: 'https://img.icons8.com/color/96/microsoft.png' },
    { name: 'Apple', logo: 'https://img.icons8.com/ios-filled/96/mac-os.png' },
    { name: 'Amazon', logo: 'https://img.icons8.com/color/96/amazon.png' },
    { name: 'Meta', logo: 'https://img.icons8.com/color/96/meta.png' },
  ];

  // Triple the clients array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <div className=''>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
          width: max-content;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
        @media (max-width: 640px) {
          .animate-marquee {
            animation-duration: 45s;
          }
        }
        @media (max-width: 480px) {
          .animate-marquee {
            animation-duration: 35s;
          }
        }
      `}</style>
      <div className="text-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 inline-block relative">
    <span className="text-white">Our </span>
    <span className="text-blue-500">Clients</span>
    <svg 
      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2" 
      width="100%" 
      height="4" 
      viewBox="0 0 200 4"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="underlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2"/>
          <stop offset="50%" stopColor="#ffffff" stopOpacity="1"/>
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.8"/>
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
   </h1>      </div>

      <div className="w-full bg-gray-100 rounded-lg">
        <div className="flex gap-8 md:gap-12">
          {/* Left side - Title */}
          
          
          {/* Right side - Moving Clients Container */}
          <div className="flex-grow relative overflow-hidden group">
            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            
            {/* Scrolling Container */}
            <div className="flex items-center animate-marquee">
              {duplicatedClients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 mx-8 md:mx-12"
                >
                  <div className="flex items-center justify-center h-16 px-4">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovingClientsSection;