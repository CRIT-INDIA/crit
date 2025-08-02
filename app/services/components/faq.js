import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FaqSection1() {
    const [activeId, setActiveId] = useState('1-1');
    const [hoveredId, setHoveredId] = useState(null);
    const [isAutoCycling, setIsAutoCycling] = useState(true);
    const [userInteracted, setUserInteracted] = useState(false);
    const [activeCategory, setActiveCategory] = useState('');
    const [faqs, setFaqs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch FAQ data from JSON file
    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                const response = await fetch('/json/data/faq.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch FAQ data');
                }
                const data = await response.json();
                
                // Transform the data into the format expected by the component
                const transformedFaqs = [];
                const categoriesSet = new Set();
                
                // Get the first service category (e.g., 'SAP Services FAQ')
                const serviceCategory = Object.values(data)[0];
                
                // Process each FAQ category (e.g., 'SAP Implementation', 'SAP Rollout ')
                Object.entries(serviceCategory).forEach(([category, questions], catIndex) => {
                    categoriesSet.add(category);
                    
                    // Process each question in the category
                    Object.entries(questions).forEach(([qKey, qData], qIndex) => {
                        const id = `${catIndex + 1}-${qIndex + 1}`;
                        const answer = Array.isArray(qData.answer) 
                            ? qData.answer.map((item, i) => (
                                <React.Fragment key={i}>
                                    {i > 0 && <br />}
                                    • {item}
                                </React.Fragment>
                            ))
                            : qData.answer;
                            
                        transformedFaqs.push({
                            id,
                            category,
                            q: qData.question,
                            a: answer
                        });
                    });
                });
                
                const categoriesList = Array.from(categoriesSet);
                setFaqs(transformedFaqs);
                setCategories(categoriesList);
                
                // Set the first category and FAQ as active by default
                if (categoriesList.length > 0) {
                    setActiveCategory(categoriesList[0]);
                    const firstFaq = transformedFaqs.find(faq => faq.category === categoriesList[0]);
                    if (firstFaq) {
                        setActiveId(firstFaq.id);
                    }
                }
                
            } catch (err) {
                console.error('Error loading FAQ data:', err);
                setError('Failed to load FAQ data. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchFaqs();
    }, []);
  
    // Filter FAQs by active category
    const filteredFaqs = useMemo(() => {
      return faqs.filter(faq => faq.category === activeCategory);
    }, [faqs, activeCategory]);
  
    // Auto-cycling effect
    useEffect(() => {
      if (!isAutoCycling || userInteracted) return;
  
      const interval = setInterval(() => {
        setActiveId(prevId => {
          const currentIndex = faqs.findIndex(faq => faq.id === prevId);
          const nextIndex = (currentIndex + 1) % faqs.length;
          return faqs[nextIndex].id;
        });
      }, 3000); // Change every 3 seconds
  
      return () => clearInterval(interval);
    }, [isAutoCycling, userInteracted, faqs]);
  
    // Reset auto-cycling after user interaction pause
    useEffect(() => {
      if (userInteracted) {
        const timeout = setTimeout(() => {
          setUserInteracted(false);
          setIsAutoCycling(true);
        }, 4000); // Resume auto-cycling after 4 seconds of no interaction
  
        return () => clearTimeout(timeout);
      }
    }, [userInteracted]);
  
    // Handle manual FAQ selection
    const handleFaqClick = (faqId) => {
      setActiveId(faqId);
      setIsAutoCycling(false);
      setUserInteracted(true);
    };
  
    // Handle hover events
    const handleMouseEnter = (faqId) => {
      setHoveredId(faqId);
    };
  
    const handleMouseLeave = () => {
      setHoveredId(null);
    };
  
    return (
      <section className="relative min-h-* py-16 md:py-20 overflow-hidden pb-20 bg-white">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-5 lg:px-7">
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                <span className="text-black">Frequently Asked </span>
                <span className="text-red-500">Questions</span>
                <svg className="mx-auto my-0" style={{marginTop: '-4px'}} width="160" height="18" viewBox="0 0 220 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 18 Q 110 8, 215 14" stroke="#FFD700" strokeWidth="4" strokeLinecap="round" fill="none"/>
              <path d="M15 21 Q 120 15, 200 18" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" fill="none"/>
            </svg>
              </h2>
              
              {/* Category Tabs */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setUserInteracted(true);
                      setIsAutoCycling(false);
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeCategory === category
                        ? 'bg-red-600 text-white shadow-md'
                        : 'bg-white text-black hover:bg-gray-200 border border-red-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
  
          {/* FAQ Container */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
            {/* Left Side - Questions */}
            <div className="max-w-4xl mx-auto space-y-4">
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => handleMouseEnter(faq.id)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleFaqClick(faq.id)}
                  className="relative cursor-pointer group"
                >
                  <div
                    className={`relative p-5 rounded-2xl border-2 transition-all duration-500 ${
                      activeId === faq.id
                        ? 'bg-red-500 border-red-500 shadow-2xl shadow-red-500/20 scale-[1.015]'
                        : 'bg-white border-gray-200'
                    }`}
                  >
                    <div className="relative flex items-start gap-3">
                      {/* Number */}
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-base transition-all duration-300 ${
                          activeId === faq.id
                            ? 'bg-white text-red-500'
                            : 'bg-red-50 text-red-600'
                        }`}
                      >
                        {faq.id}
                      </div>
  
                      {/* Question */}
                      <div className="flex-1">
                        <p
                          className={`text-xs font-semibold tracking-wider mb-1 transition-colors duration-300 ${
                            activeId === faq.id 
                              ? 'text-red-100' 
                              : 'text-red-400'
                          }`}
                        >
                          {faq.category}
                        </p>
                        <h3
                          className={`text-base font-semibold transition-colors duration-300 ${
                            activeId === faq.id
                              ? 'text-white'
                              : 'text-gray-900'
                          }`}
                        >
                          {faq.q}
                        </h3>
                      </div>
  
                      {/* Arrow */}
                      <motion.svg
                        animate={{ 
                          rotate: activeId === faq.id ? 45 : 0
                        }}
                        className={`w-5 h-5 flex-shrink-0 transition-colors duration-300 ${
                          activeId === faq.id
                            ? 'text-white'
                            : 'text-red-400'
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </motion.svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
  
            {/* Right Side - Answer Display */}
            <div className="lg:sticky lg:top-6 mt-8 lg:mt-0">
              <AnimatePresence mode="wait">
                {faqs.map((faq) => (
                  activeId === faq.id && (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 20, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.97 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      {/* Background Decoration */}
                      <div className="absolute -inset-3 bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl opacity-50 blur-2xl" />
                      
                      <div className="relative bg-white rounded-2xl p-7 shadow-2xl border-2 border-red-100">
                        {/* Top Pattern */}
                        <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-red-500 to-pink-500 rounded-full opacity-10 blur-2xl" />
                        
                        {/* Category Badge */}
                        <div className="inline-flex items-center gap-1.5 mb-5 bg-red-50 px-4 py-2 rounded-full">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                          <span className="text-xs font-semibold tracking-wider text-red-700">
                            {faq.category}
                          </span>
                        </div>
  
                        {/* Question Title */}
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {faq.q}
                        </h3>
  
                        {/* Answer */}
                        <p className="text-gray-600 leading-relaxed text-base">
                          {faq.a}
                        </p>
  
                        {/* Action Button */}
                        <div className="mt-7 flex items-center gap-3">
                          
                        </div>
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    );
  }
  