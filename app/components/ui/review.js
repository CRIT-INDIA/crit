import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Quote } from 'lucide-react';

const CustomerTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Bit Pl has revolutionized the way I manage projects. Its comprehensive suite of tools, user-friendly interface, and robust performance have significantly enhanced our productivity and collaboration. A must-have for any team!",
      author: "Jack William",
      position: "CEO of MarketingPoint",
      avatar: "/avatars/jack-william.jpg",
      rating: 5.0
    },
    {
      id: 2,
      text: "The platform's intuitive design and powerful features have transformed our workflow. Highly recommended for teams looking to boost their efficiency.",
      author: "Sarah Johnson",
      position: "Project Manager at TechCorp",
      avatar: "/avatars/sarah-johnson.jpg",
      rating: 5.0
    },
    {
      id: 3,
      text: "Outstanding customer service and a product that delivers on its promises. Our team productivity has increased by 40% since we started using this tool.",
      author: "Mike Chen",
      position: "CTO at StartupXYZ",
      avatar: "/avatars/mike-chen.jpg",
      rating: 5.0
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  // Auto-advance testimonials every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 2000);
    
    return () => clearInterval(timer);
  }, [currentTestimonial]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <motion.span 
        key={index}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: index * 0.1 }}
        className={`text-xl ${index < rating ? 'text-red-500' : 'text-gray-300'}`}
      >
        ★
      </motion.span>
    ));
  };

  return (
    <div className="text-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
              Proven Results,
                <br />
                <span className="text-red-600"> Real Feedback</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
              Our clients success speaks for itself. From enterprise-level implementations to strategic consulting projects, companies across industries have partnered with us to transform their SAP environments and drive measurable business results. 
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-red-600 hover:text-white text-red-600 border-2 border-red-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Add Review
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side - Testimonial with top spacing */}
          <div className="relative mt-24 lg:mt-46">
            {/* Navigation Arrows */}
            <div className="absolute -top-12 right-0 flex gap-4">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="text-gray-400 hover:text-red-600 transition-colors duration-300 p-2 rounded-full hover:bg-red-50"
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="text-gray-400 hover:text-red-600 transition-colors duration-300 p-2 rounded-full hover:bg-red-50"
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>

            {/* Testimonial Card with Animation */}
            <motion.div 
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8 relative shadow-lg transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-6 h-6 text-red-400 opacity-60 mt-1 flex-shrink-0 mb-12" />
                            
              
              {/* Testimonial Content with Animation */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {testimonials[currentTestimonial].text}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center overflow-hidden"
                      >
                        <span className="text-white font-semibold">
                          {testimonials[currentTestimonial].author.charAt(0)}
                        </span>
                      </motion.div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {testimonials[currentTestimonial].author}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {testimonials[currentTestimonial].position}
                        </p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {renderStars(testimonials[currentTestimonial].rating)}
                      </div>
                      <span className="text-gray-900 font-semibold">
                        {testimonials[currentTestimonial].rating + ".0"}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-red-600' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonials;
