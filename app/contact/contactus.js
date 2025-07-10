'use client';
import React, { useState, useEffect } from 'react';
import { Phone, Mail, AtSign, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const text = "CONTACT US";
  const [barPos, setBarPos] = useState(0);
  const letterRefs = React.useRef([]);
  const [barLeft, setBarLeft] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let pos = 0;
    let direction = 1;
    const interval = setInterval(() => {
      pos += direction;
      if (pos > text.length) {
        direction = -1;
        pos = text.length - 1;
      } else if (pos < 0) {
        direction = 1;
        pos = 0;
      }
      setBarPos(pos);
    }, 180); // Adjust speed here
    return () => clearInterval(interval);
  }, [text.length]);

  useEffect(() => {
    if (barPos < text.length && letterRefs.current[barPos]) {
      setBarLeft(letterRefs.current[barPos].offsetLeft);
    } else if (barPos === text.length && letterRefs.current[text.length - 1]) {
      // Place bar at the right edge of the last letter
      const last = letterRefs.current[text.length - 1];
      setBarLeft(last.offsetLeft + last.offsetWidth);
    }
  }, [barPos, text.length]);

  const contactIcons = [
    { icon: Phone, id: 'phone' },
    { icon: Mail, id: 'mail' },
    { icon: AtSign, id: 'email' },
    { icon: MessageCircle, id: 'chat' }
  ];

  return (
    <div className="relative min-h-* overflow-hidden pt-24 pb-10 sm:pt-32 lg:pt-40 px-4 sm:px-8 lg:px-16">
      <div className="relative z-10 flex flex-col lg:flex-row items-stretch justify-center w-full max-w-7xl mx-auto">
        {/* Left side content */}
        <div className="flex-1 w-full mb-10 lg:mb-0 text-center">
          {/* Contact Us Button */}
          <div className="mb-8 sm:mb-12 relative overflow-hidden">
            <h2 className="relative font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl rounded-lg tracking-wide flex items-center justify-center text-center" style={{height: '3.5rem'}}>
              {text.split("").map((char, i) => (
                <span
                  key={i}
                  ref={el => letterRefs.current[i] = el}
                  className={`transition-colors duration-200`}
                  style={{
                    color: (barPos > 0 && i < barPos) ? "#2563eb" : "#fff",
                    position: "relative",
                    zIndex: 1,
                    fontWeight: "bold",
                    fontSize: "2.2rem",
                    letterSpacing: "0.1em"
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
              {/* Vertical bar */}
              <span
                style={{
                  position: "absolute",
                  left: barLeft,
                  top: "50%",
                  height: "70%",
                  width: "6px",
                  background: "#2563eb",
                  zIndex: 2,
                  borderRadius: "3px",
                  transform: "translateY(-50%)",
                  transition: "left 0.18s linear"
                }}
              />
            </h2>
          </div>
          {/* Main text */}
          <div className="space-y-6">
            <p className="text-white/90 text-base sm:text-lg lg:text-xl leading-relaxed font-light">
              Thank you for taking the time to learn more about{' '}
              <span className="text-blue-400 font-semibold">CRIT INDIA</span>{' '}
              complete the form with inform business requirements our industry exports will get in touch with you
            </p>
          </div>
        </div>
        {/* Right side - Interactive contact icons */}
        <div className="flex-1 flex justify-center items-center w-full">
          <div className="relative">
            {/* Central glowing area */}
            <div className="relative flex items-center justify-center w-44 h-44 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full bg-transparent border-4 border-blue-400/40 shadow-2xl shadow-blue-500/20">
              {/* Contact icons floating around */}
              <div className="absolute inset-0 mt-10 ml-10 sm:mt-14 sm:ml-14 lg:mt-17 lg:ml-17">
                {/* Calculate icon radius based on phone size */}
                {(() => {
                  const phoneWidth = 80; // w-20 (20*4=80px)
                  const phoneHeight = 128; // h-32 (32*4=128px)
                  const halfWidth = phoneWidth / 2;
                  const halfHeight = phoneHeight / 2;
                  const cornerOffset = Math.sqrt(halfWidth * halfWidth + halfHeight * halfHeight);
                  const desiredGap = 70; // px, adjust for spacing
                  const iconRadius = cornerOffset + desiredGap;
                  return contactIcons.map((item, index) => {
                    const angle = 45 + index * 90;
                    const x = Math.cos((angle * Math.PI) / 180) * iconRadius;
                    const y = Math.sin((angle * Math.PI) / 180) * iconRadius;
                    return (
                      <div
                        key={item.id}
                        className="absolute w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                        style={{
                          left: `50%`,
                          top: `50%`,
                          transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`
                        }}
                        onMouseEnter={() => setHoveredIcon(item.id)}
                        onMouseLeave={() => setHoveredIcon(null)}
                      >
                        <div className="relative w-full h-full">
                          {/* Icon background with glow */}
                          <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                            hoveredIcon === item.id ? 'scale-125 shadow-[0_0_24px_8px_rgba(255,255,255,0.7)]' : 'scale-100 shadow-[0_0_16px_4px_rgba(255,255,255,0.4)]'
                          }`} style={{ background: '#2563EB', border: '2px solid #2563EB' }}>
                          </div>
                          {/* Icon */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <item.icon 
                              className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6 transition-all duration-300 text-white ${
                                hoveredIcon === item.id ? 'scale-110' : ''
                              }`} 
                              style={{ filter: hoveredIcon === item.id ? 'drop-shadow(0 0 12px #fff)' : 'drop-shadow(0 0 6px #fff)' }}
                            />
                          </div>
                          {/* Connecting line to center */}
                          <div 
                            className={`absolute w-px bg-gradient-to-r from-blue-400/40 to-transparent transition-opacity duration-300 ${
                              hoveredIcon === item.id ? 'opacity-60' : 'opacity-20'
                            }`}
                            style={{
                              height: `${iconRadius}px`,
                              left: '50%',
                              top: '50%',
                              transformOrigin: 'top',
                              transform: `translateX(-50%) rotate(${angle + 180}deg)`
                            }}
                          />
                        </div>
                      </div>
                    );
                  });
                })()}
              </div>
              {/* Center device/hand illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Phone mockup */}
                  <div className="w-16 h-24 sm:w-20 sm:h-32 bg-gradient-to-b from-slate-700 to-slate-800 rounded-2xl border-2 border-blue-400/30 shadow-xl relative overflow-hidden flex flex-col items-center justify-between py-2">
                    {/* Speaker slot */}
                    <div className="w-6 h-1 rounded-full bg-gray-300/60 mb-2 mt-1" />
                    {/* Screen */}
                    <div className="absolute inset-2 top-6 bottom-6 bg-gradient-to-b from-blue-900/50 to-slate-900/50 rounded-md">
                      {/* Screen glow */}
                      <div className="absolute inset-0 bg-blue-400/10 rounded-md animate-pulse" />
                    </div>
                    {/* Home button */}
                    <div className="relative z-10 flex flex-col items-center w-full">
                      <div className="mx-auto mt-auto mb-3 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full border border-gray-200 bg-white/80 shadow-inner" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Outer ring animation */}
            <div className="absolute inset-0 w-44 h-44 sm:w-60 sm:h-60 lg:w-72 lg:h-72 border-4 border-blue-400/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}>
              <div className="absolute w-2 h-2 bg-blue-400 rounded-full -top-1 left-1/2 transform -translate-x-1/2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}