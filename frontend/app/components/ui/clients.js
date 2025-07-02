import React from 'react';

const MovingClientsSection = () => {
  // Sample client data - replace with your actual client logos and names
  const clients = [
    { name: 'Microsoft', logo: 'https://img.icons8.com/color/96/microsoft.png' },
    { name: 'Google', logo: 'https://img.icons8.com/color/96/google-logo.png' },
    { name: 'Apple', logo: 'https://img.icons8.com/ios-filled/96/mac-os.png' },
    { name: 'Amazon', logo: 'https://img.icons8.com/color/96/amazon.png' },
    { name: 'Meta', logo: 'https://img.icons8.com/color/96/meta.png' },
    { name: 'Netflix', logo: 'https://img.icons8.com/color/96/netflix.png' },
    { name: 'Spotify', logo: 'https://img.icons8.com/color/96/spotify.png' },
    { name: 'Airbnb', logo: 'https://img.icons8.com/color/96/airbnb.png' },
  ];

  // Triple the clients array for truly seamless infinite scroll
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="bg-[#0c1c3c] pb-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-6xl sm:text-6xl lg:text-5xl font-bold text-white mb-2 inline-block px-4 py-2 group">
            <span className="relative">
              Our Partners 
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300"></span>
            </span>
          </h2>
        </div>

        {/* Moving Clients Container */}
        <div className="relative group overflow-hidden">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-8 sm:w-12 h-full bg-gradient-to-r from-[#0c1c3c] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-8 sm:w-12 h-full bg-gradient-to-l from-[#0c1c3c] to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling Container */}
          <div className="flex items-center animate-marquee">
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8"
              >
                <div className="flex items-center justify-center h-12 sm:h-16 px-2 sm:px-4">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-h-8 sm:max-h-10 md:max-h-12 w-auto object-contain filter brightness-90 hover:brightness-100 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
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
    </section>
  );
};

export default MovingClientsSection;