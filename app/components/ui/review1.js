'use client';

import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    text: "This app changed my life! Now I can procrastinate with style and efficiency.",
    author: "Sarah M.",
    bgColor: "bg-gradient-to-br from-purple-400 to-pink-400",
    textColor: "text-white"
  },
  {
    id: 2,
    text: "10/10 would recommend to my enemies. They'll never see productivity again.",
    author: "Mike D.",
    bgColor: "bg-gradient-to-br from-blue-400 to-cyan-400",
    textColor: "text-white"
  },
  {
    id: 3,
    text: "Finally, a service that understands my need to overthink everything!",
    author: "Emily R.",
    bgColor: "bg-gradient-to-br from-yellow-400 to-orange-400",
    textColor: "text-gray-800"
  },
  {
    id: 4,
    text: "My plants are thriving because I spend all my time here instead of overwatering them.",
    author: "Tom K.",
    bgColor: "bg-gradient-to-br from-green-400 to-teal-400",
    textColor: "text-white"
  },
  {
    id: 5,
    text: "5 stars! Would give 6 but the button doesn't exist, just like my work-life balance.",
    author: "Lisa W.",
    bgColor: "bg-gradient-to-br from-red-400 to-pink-500",
    textColor: "text-white"
  }
];

export default function ReviewStack() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [nextIndex, setNextIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      handlePageTurn();
    }, 4000); // Change review every 4 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePageTurn = (specificIndex) => {
    if (isFlipping) return;
    
    setIsFlipping(true);
    const next = specificIndex !== undefined 
      ? specificIndex 
      : (currentIndex + 1) % reviews.length;
    setNextIndex(next);
    
    setTimeout(() => {
      setCurrentIndex(next);
      setIsFlipping(false);
    }, 800); // Match animation duration
  };

  const getCardStyle = (index) => {
    const position = (index - currentIndex + reviews.length) % reviews.length;
    
    // During flip animation
    if (isFlipping && index === currentIndex) {
      return {
        transform: 'rotateY(-180deg) translateZ(0)',
        opacity: 1,
        zIndex: 50,
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
      };
    }
    
    if (isFlipping && index === nextIndex) {
      return {
        transform: 'rotateY(0deg) translateZ(0)',
        opacity: 1,
        zIndex: 40,
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
      };
    }
    
    // Normal states
    if (position === 0) {
      // Current card
      return {
        transform: 'rotateY(0deg) translateY(0px) scale(1) rotateZ(0deg)',
        opacity: 1,
        zIndex: 30,
        filter: 'blur(0px)',
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
      };
    } else if (position === 1) {
      // First card behind
      return {
        transform: 'rotateY(0deg) translateY(15px) scale(0.95) rotateZ(2deg)',
        opacity: 0.7,
        zIndex: 20,
        filter: 'blur(0.5px)',
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
      };
    } else if (position === 2) {
      // Second card behind
      return {
        transform: 'rotateY(0deg) translateY(30px) scale(0.9) rotateZ(-2deg)',
        opacity: 0.5,
        zIndex: 10,
        filter: 'blur(1px)',
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
      };
    } else {
      // Hidden cards
      return {
        transform: 'rotateY(0deg) translateY(45px) scale(0.85) rotateZ(0deg)',
        opacity: 0,
        zIndex: 0,
        filter: 'blur(2px)',
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
      };
    }
  };

  // Inline styles for additional effects
  const containerStyle = {
    perspective: '2000px',
    perspectiveOrigin: '50% 50%',
  };

  const deepShadowStyle = `
    0 1px 2px rgba(0, 0, 0, 0.07),
    0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07),
    0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07),
    0 32px 64px rgba(0, 0, 0, 0.07),
    0 10px 30px -5px rgba(0, 0, 0, 0.3),
    0 20px 40px -10px rgba(0, 0, 0, 0.2),
    0 30px 50px -15px rgba(0, 0, 0, 0.1)
  `;

  const paperTextureStyle = {
    backgroundImage: `
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 10px,
        rgba(255, 255, 255, 0.05) 10px,
        rgba(255, 255, 255, 0.05) 20px
      ),
      url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")
    `,
  };

  const flipTransitionStyle = {
    transition: 'transform 0.8s cubic-bezier(0.4, 0.0, 0.2, 1), opacity 0.8s ease, filter 0.8s ease',
    transformOrigin: 'left center',
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        What People Are Saying
      </h2>
      
      <div className="relative h-[400px] flex items-center justify-center" style={containerStyle}>
        {reviews.map((review, index) => {
          const style = getCardStyle(index);
          const isCurrentlyFlipping = isFlipping && (index === currentIndex || index === nextIndex);
          
          return (
            <div
              key={review.id}
              className={`absolute w-full max-w-lg rounded-2xl ${review.bgColor}`}
              style={{
                ...style,
                ...flipTransitionStyle,
                boxShadow: deepShadowStyle,
                ...(isCurrentlyFlipping && {
                  transition: 'transform 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)',
                }),
              }}
            >
              {/* Front of the card */}
              <div className="relative p-8">
                {/* Paper texture overlay */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-10 bg-white mix-blend-overlay pointer-events-none" 
                  style={paperTextureStyle}
                />
                
                <div className="relative z-10">
                  {/* Quote icon */}
                  <div className={`mb-4 ${review.textColor}`}>
                    <Quote className="w-10 h-10 opacity-50" />
                  </div>
                  
                  {/* Review text */}
                  <p className={`text-xl md:text-2xl font-medium mb-6 leading-relaxed ${review.textColor}`}>
                    {review.text}
                  </p>
                  
                  {/* Author */}
                  <div className={`text-right ${review.textColor}`}>
                    <p className="text-lg font-semibold opacity-90">— {review.author}</p>
                    <div className="flex justify-end mt-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-2xl opacity-80">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Corner fold effect */}
                <div 
                  className="absolute bottom-0 right-0 w-12 h-12"
                  style={{
                    background: 'linear-gradient(45deg, transparent 50%, rgba(0,0,0,0.1) 50%)',
                    filter: 'drop-shadow(-2px -2px 3px rgba(0,0,0,0.1))',
                    borderBottomRightRadius: '1rem',
                  }}
                />
                
                {/* Page edge shadow for depth */}
                <div 
                  className="absolute inset-y-0 left-0 w-4 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to right, rgba(0,0,0,0.1) 0%, transparent 100%)',
                    borderTopLeftRadius: '1rem',
                    borderBottomLeftRadius: '1rem',
                  }}
                />
              </div>
              
              {/* Back of the card (visible during flip) */}
              <div 
                className="absolute inset-0 rounded-2xl"
                style={{
                  transform: 'rotateY(180deg)',
                  backfaceVisibility: 'hidden',
                  background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
                  boxShadow: 'inset 0 0 40px rgba(0,0,0,0.1)',
                }}
              >
                <div 
                  className="absolute inset-0 rounded-2xl"
                  style={paperTextureStyle}
                />
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Progress dots */}
      <div className="flex justify-center mt-12 space-x-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            className={`rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-gray-800 w-8 h-2' 
                : 'bg-gray-400 hover:bg-gray-600 w-2 h-2'
            }`}
            style={{
              boxShadow: index === currentIndex ? '0 2px 4px rgba(0,0,0,0.2)' : 'none',
            }}
            onClick={() => handlePageTurn(index)}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}