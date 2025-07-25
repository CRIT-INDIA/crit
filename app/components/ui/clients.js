import React from 'react';

const MovingClientsSection = () => {
  // Client data matching the style from your image
  const clients = [
    { name: 'Google', logo: 'https://res.cloudinary.com/dujw4np0d/image/upload/v1753339366/google-logo_cxut0t.avif' },
    { name: 'Microsoft', logo: 'https://res.cloudinary.com/dujw4np0d/image/upload/v1753339366/microsoft_buuqps.avif' },
    { name: 'Apple', logo: 'https://res.cloudinary.com/dujw4np0d/image/upload/v1753339367/Apple_logo_grey.svg_m7dsoq_vm6wyx.avif' },
    { name: 'Amazon', logo: 'https://res.cloudinary.com/dujw4np0d/image/upload/v1753339367/Amazon-Logo-White-PNG-Pic_m8kupd_vfhxys.avif' },
    { name: 'Meta', logo: 'https://res.cloudinary.com/dujw4np0d/image/upload/v1753339366/meta_ivcb5k.avif' },
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
    <span className="text-black">Our </span>
    <span className="text-red-500">Clients</span>
    <svg className="mx-auto my-0" style={{marginTop: '-4px'}} width="120" height="18" viewBox="0 0 180 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 18 Q 70 8, 170 14" stroke="#dc2626" strokeWidth="4" strokeLinecap="round" fill="none"/>
            <path d="M25 21 Q 100 15, 160 18" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" fill="none"/>
          </svg>
   </h1>      </div>

      <div className="w-full bg-[#00203F] drop-shadow-lg rounded-lg md:p-2">
        <div className="flex gap-8 md:gap-12">
          {/* Left side - Title */}
          
          
          {/* Right side - Moving Clients Container */}
          <div className="flex-grow relative overflow-hidden group">
            
            {/* Scrolling Container */}
            <div className="flex items-center animate-marquee">
              {duplicatedClients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 mx-8 md:mx-12"
                >
                  <div className="flex items-center justify-center h-12 md:h-16 px-4">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300"
                    /> </div>
                    <div className="w-full text-center text-xs text-white font-medium pb-2">{client.name}</div>
                  
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