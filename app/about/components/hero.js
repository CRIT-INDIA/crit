'use client';

import { useState, useEffect } from 'react';
import { SparklesIcon, ChartBarIcon, UserGroupIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const AboutUsHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStory, setActiveStory] = useState(0);
  const [timelineInView, setTimelineInView] = useState(false);
  const [visibleBeats, setVisibleBeats] = useState([]);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: timelineRef, inView: timelineVisible } = useInView({ 
    threshold: 0.3, 
    triggerOnce: true 
  });


  const storyBeats = [
    {
      year: '2013',
      title: 'The Foundation',
      description: 'Connecting Roots IT was founded with a vision to revolutionize enterprise software implementation and make SAP accessible to businesses of all sizes.',
      icon: <SparklesIcon className="w-6 h-6" />,
      color: 'from-red-400 to-orange-400'
    },
    {
      year: '2017',
      title: 'Strategic Growth',
      description: 'Expanded our services and expertise, establishing ourselves as a trusted SAP partner with innovative solutions and exceptional client satisfaction.',
      icon: <ChartBarIcon className="w-6 h-6" />,
      color: 'from-blue-400 to-cyan-400'
    },
    {
      year: '2020',
      title: 'Team Excellence',
      description: 'Built a world-class team of SAP consultants, developers, and project managers, focusing on delivering transformative business solutions.',
      icon: <UserGroupIcon className="w-6 h-6" />,
      color: 'from-purple-400 to-pink-400'
    },
    {
      year: '2025',
      title: 'Industry Leadership',
      description: 'Today, we lead the industry with cutting-edge SAP solutions, helping businesses achieve digital transformation and sustainable growth.',
      icon: <LightBulbIcon className="w-6 h-6" />,
      color: 'from-green-400 to-emerald-400'
    }
  ];


  useEffect(() => {
    setIsVisible(true);
    
    // Auto-cycle through story beats
    const interval = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % storyBeats.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  // Enhanced timeline reveal animation
  useEffect(() => {
    if (timelineVisible) {
      setTimelineInView(true);
      
      // Staggered reveal of timeline items
      storyBeats.forEach((_, index) => {
        setTimeout(() => {
          setVisibleBeats(prev => [...prev, index]);
        }, index * 800); // 800ms delay between each item
      });
    }
  }, [timelineVisible]);

  return (
    <div
        className="relative w-full bg-no-repeat bg-cover overflow-hidden"
        style={{ 
          backgroundImage:
            "linear-gradient(rgba(10,22,36,0.7),rgba(10,22,36,0.7)), url('https://res.cloudinary.com/dujw4np0d/image/upload/v1751703287/image_2_qzxt24.png')",
        }}
      >
    <section className="relative min-h-* overflow-hidden pt-30">
      

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="text-center max-w-6xl mx-auto">
          
        
          {/* Unique About Us Header */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-3 mb-6">
              <h1 className="text-4xl md:text-6xl font-black text-white">
                About The{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-gradient-x">
                   Connecting Roots IT
                </span>
              </h1>
            </div>
            
            </div>

          {/* Mission Statement */}
          <div className={`transition-all pt-10 duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-black/10 backdrop-blur-md rounded-3xl p-8 mb-12 border border-cyan-400/30 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
              
              <p className="text-lg md:text-lg text-white leading-relaxed">
                We{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 font-bold">
                  Challenge 
                </span>{' '}
                the notion that enterprise software has to be boring, overly complex, or frustrating. We believe every SAP system should be efficient, user-friendly, and a true asset to your business.
              </p>
            </div>
          </div>
          </div>
        </div>
      
    </section>
    </div>
  );
};

export default AboutUsHero;