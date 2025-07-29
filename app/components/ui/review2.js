'use client';

import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, BookOpen, Plus, Star, PenTool } from 'lucide-react';

const reviews = [
  {
    id: 1,
    text: "This app changed my life! Now I can procrastinate with style and efficiency.",
    author: "Sarah M.",
    bgColor: "bg-gradient-to-br from-red-500 to-rose-600",
    textColor: "text-white",
    backDescription: "Sarah discovered our app during a particularly productive Monday morning. Three hours later, she had reorganized her entire bookmark collection, learned seventeen new keyboard shortcuts she'll never use, and created a color-coded system for avoiding actual work. Her boss remains impressed by how busy she always looks."
  },
  {
    id: 2,
    text: "10/10 would recommend to my enemies. They'll never see productivity again.",
    author: "Mike D.",
    bgColor: "bg-gradient-to-br from-rose-400 to-red-500",
    textColor: "text-white",
    backDescription: "Mike, a former efficiency expert, stumbled upon our platform while researching 'productivity tools.' Six months later, he's mastered the art of looking thoughtful while doing absolutely nothing. His transformation has been so complete that his former clients now hire him as a consultant on strategic procrastination."
  },
  {
    id: 3,
    text: "Finally, a service that understands my need to overthink everything!",
    author: "Emily R.",
    bgColor: "bg-gradient-to-br from-red-600 to-rose-700",
    textColor: "text-white",
    backDescription: "Emily's journey began with a simple decision between two font choices. Thanks to our app, that decision expanded into a three-week philosophical exploration of typography, human perception, and the meaning of serif. She's currently on page 47 of her manifesto on why Comic Sans might actually be ironic genius."
  },
  {
    id: 4,
    text: "My plants are thriving because I spend all my time here instead of overwatering them.",
    author: "Tom K.",
    bgColor: "bg-gradient-to-br from-rose-500 to-red-600",
    textColor: "text-white",
    backDescription: "Tom's botanical success story is truly inspiring. What started as chronic plant parenthood anxiety transformed into benign neglect, all thanks to the countless hours spent exploring our features. His succulents have never been happier, and his fiddle leaf fig finally stopped being dramatic. Nature is healing."
  },
  {
    id: 5,
    text: "5 stars! Would give 6 but the button doesn't exist, just like my work-life balance.",
    author: "Lisa W.",
    bgColor: "bg-gradient-to-br from-red-500 to-rose-500",
    textColor: "text-white",
    backDescription: "Lisa's review perfectly captures the modern dilemma. She spent forty-seven minutes crafting this single sentence, exploring various punctuation options and debating whether 'work-life balance' needed a hyphen. The irony of spending her entire lunch break writing about lost time was not lost on her, but she was too invested to stop."
  }
];

export default function ReviewBook() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipProgress, setFlipProgress] = useState(0);
  const [flipDirection, setFlipDirection] = useState('forward');
  const [hoveredSide, setHoveredSide] = useState(null);
  const [bookClosed, setBookClosed] = useState(true);
  const [isOpening, setIsOpening] = useState(false);
  const [pageStack, setPageStack] = useState([]);

  const addReviewPageIndex = reviews.length;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isFlipping && !bookClosed && currentPage < addReviewPageIndex) {
        handleNextPage();
      }
    }, 8000); // Increased auto-flip interval to match slower animation

    return () => clearInterval(interval);
  }, [currentPage, isFlipping, bookClosed, addReviewPageIndex]);

  useEffect(() => {
    if (isFlipping) {
      const duration = 1400; // Increased duration for slower, more elegant animation
      const steps = 70; // More steps for smoother animation
      const increment = 100 / steps;
      let currentStep = 0;

      const animationInterval = setInterval(() => {
        currentStep++;
        const progress = currentStep * increment;
        
        // Smoother easing curve that mimics realistic paper physics
        const easeInOutCubic = (t) => {
          return t < 0.5 
            ? 4 * t * t * t 
            : 1 - Math.pow(-2 * t + 2, 3) / 2;
        };
        
        setFlipProgress(easeInOutCubic(progress / 100) * 100);

        if (currentStep >= steps) {
          clearInterval(animationInterval);
          
          if (flipDirection === 'forward') {
            setCurrentPage(prev => prev + 1);
            setPageStack(prev => [...prev, currentPage]);
          } else {
            const newPage = currentPage - 1;
            setCurrentPage(newPage);
            setPageStack(prev => prev.slice(0, -1));
          }
          
          setIsFlipping(false);
          setFlipProgress(0);
        }
      }, duration / steps);

      return () => clearInterval(animationInterval);
    }
  }, [isFlipping, flipDirection, currentPage]);

  const handleNextPage = () => {
    if (isFlipping || currentPage >= addReviewPageIndex) return;
    setFlipDirection('forward');
    setIsFlipping(true);
  };

  const handlePrevPage = () => {
    if (isFlipping) return;
    
    if (bookClosed) {
      openBook();
    } else if (currentPage > 0) {
      setFlipDirection('backward');
      setIsFlipping(true);
    }
  };

  const openBook = () => {
    setIsOpening(true);
    setTimeout(() => {
      setBookClosed(false);
      setCurrentPage(0);
      setIsOpening(false);
    }, 800);
  };

  const goToPage = (index) => {
    if (isFlipping || index === currentPage || bookClosed) return;
    
    setFlipDirection(index > currentPage ? 'forward' : 'backward');
    setIsFlipping(true);
  };

  const getPageTransform = () => {
    const normalizedProgress = flipProgress / 100;
    
    if (flipDirection === 'forward') {
      const angle = -180 * normalizedProgress;
      // More pronounced 3D curve for realistic page bend
      const curve = Math.sin(normalizedProgress * Math.PI) * 30;
      const lift = Math.sin(normalizedProgress * Math.PI) * 10;
      
      return {
        transform: `
          rotateY(${angle}deg) 
          translateZ(${curve}px) 
          translateY(${-lift}px)
          scale(${0.98 + Math.sin(normalizedProgress * Math.PI) * 0.03})
        `,
        transformOrigin: 'left center',
        transition: 'none',
      };
    } else {
      // Backward animation: page starts flipped (180deg) and rotates back to normal (0deg)
      const angle = 180 * (1 - normalizedProgress);
      const curve = Math.sin(normalizedProgress * Math.PI) * 30;
      const lift = Math.sin(normalizedProgress * Math.PI) * 10;
      
      return {
        transform: `
          rotateY(${angle}deg) 
          translateZ(${curve}px) 
          translateY(${-lift}px)
          scale(${0.98 + Math.sin(normalizedProgress * Math.PI) * 0.03})
        `,
        transformOrigin: 'left center',
        transition: 'none',
      };
    }
  };

  const getPageShadow = () => {
    const normalizedProgress = flipProgress / 100;
    const shadowIntensity = Math.sin(normalizedProgress * Math.PI) * 0.7;
    const shadowSpread = Math.sin(normalizedProgress * Math.PI) * 90;
    const innerShadow = Math.sin(normalizedProgress * Math.PI) * 0.9;
    
    if (flipDirection === 'forward') {
      return {
        boxShadow: `
          inset ${18 + shadowSpread}px 0 ${45 + shadowSpread}px -18px rgba(0,0,0,${0.5 + innerShadow}),
          ${-10 - shadowSpread/3}px 0 ${30 + shadowSpread/2}px -10px rgba(0,0,0,${0.4 + shadowIntensity/2}),
          ${-18 - shadowSpread/2}px ${6 + shadowSpread/4}px ${40 + shadowSpread}px -12px rgba(0,0,0,${0.3 + shadowIntensity/3})
        `,
        filter: `brightness(${1 - shadowIntensity * 0.4}) contrast(${1 + shadowIntensity * 0.3})`
      };
    } else {
      return {
        boxShadow: `
          inset ${-18 - shadowSpread}px 0 ${45 + shadowSpread}px -18px rgba(0,0,0,${0.5 + innerShadow}),
          ${10 + shadowSpread/3}px 0 ${30 + shadowSpread/2}px -10px rgba(0,0,0,${0.4 + shadowIntensity/2}),
          ${18 + shadowSpread/2}px ${6 + shadowSpread/4}px ${40 + shadowSpread}px -12px rgba(0,0,0,${0.3 + shadowIntensity/3})
        `,
        filter: `brightness(${1 - shadowIntensity * 0.4}) contrast(${1 + shadowIntensity * 0.3})`
      };
    }
  };

  const getBackgroundPageEffects = () => {
    if (!isFlipping) return {};
    
    const normalizedProgress = flipProgress / 100;
    const lightEffect = Math.sin(normalizedProgress * Math.PI) * 0.4;
    
    return {
      filter: `brightness(${1 + lightEffect * 0.2}) contrast(${1 + lightEffect * 0.15})`,
      transform: `scale(${1 + lightEffect * 0.008})`,
      transition: 'none'
    };
  };

  const bookStyle = {
    perspective: '2500px',
    perspectiveOrigin: '50% 50%',
    transform: bookClosed 
      ? 'rotateX(10deg) rotateY(-5deg) scale(0.95)' 
      : 'rotateX(5deg) rotateY(0deg) scale(1)',
    transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  const paperTextureStyle = {
    backgroundImage: `
      linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.4) 45%, rgba(255,255,255,0.2) 50%, transparent 55%),
      linear-gradient(to right, rgba(0,0,0,0.03) 0%, transparent 2%, transparent 98%, rgba(0,0,0,0.03) 100%),
      radial-gradient(ellipse at top, rgba(255,255,255,0.1) 0%, transparent 70%),
      url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E")
    `,
    backgroundColor: '#faf8f3',
  };

  const bookCoverStyle = {
    background: `
      linear-gradient(135deg, #dc2626 0%, #991b1b 50%, #dc2626 100%),
      repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)
    `,
    boxShadow: `
      inset 0 0 40px rgba(0,0,0,0.4),
      inset -2px 0 10px rgba(0,0,0,0.6),
      inset 2px 0 10px rgba(0,0,0,0.6),
      0 0 0 1px rgba(0,0,0,0.3),
      0 20px 50px rgba(0,0,0,0.4),
      0 40px 80px rgba(0,0,0,0.2)
    `,
  };

  const pageEdgeStyle = {
    background: `
      repeating-linear-gradient(
        0deg,
        #faf8f3,
        #faf8f3 1px,
        #f0ede6 1px,
        #f0ede6 2px
      )
    `,
  };

  const isAddReviewPage = currentPage === addReviewPageIndex;
  const isReviewPage = currentPage < reviews.length;

  // Get the content for the flipping page based on direction
  const getFlippingPageContent = () => {
    if (flipDirection === 'forward') {
      return {
        front: currentPage,
        back: currentPage + 1
      };
    } else {
      return {
        front: currentPage,
        back: currentPage - 1
      };
    }
  };

  const { front: frontPageIndex, back: backPageIndex } = getFlippingPageContent();

  return (
    <div className="w-full max-w-5xl mx-auto p-8">
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-5 sm:mb-16">
            <span className="text-black">Guest Book of  </span>
            <span className="text-red-500">Reviews</span>
            <svg className="mx-auto my-0" style={{marginTop: '4px'}} width="190" height="18" viewBox="0 0 180 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 18 Q 70 8, 170 14" stroke="#dc2626" strokeWidth="4" strokeLinecap="round" fill="none"/>
            <path d="M25 21 Q 100 15, 160 18" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" fill="none"/>
          </svg>
          </h1>
      
      <div className="relative" style={bookStyle}>
        <div 
          className="relative mx-auto"
          style={{ 
            width: '700px', 
            height: '450px',
            transformStyle: 'preserve-3d',
          }}
          onMouseLeave={() => setHoveredSide(null)}
        >
          
          {/* Enhanced Book Base Shadow */}
          
          
          {/* Book Spine */}
          <div 
            className="absolute left-1/2 top-0 bottom-0 w-10 ml-2 -translate-x-1/2 z-20 rounded"
            style={{
              ...bookCoverStyle,
              transform: 'translateX(-50%) translateZ(25px)',
              borderRadius: '5px',
            }}
          >
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center">
              <div className="text-white/80 text-xs font-serif tracking-widest rotate-180 [writing-mode:vertical-lr]">
                REVIEWS
              </div>
            </div>
          </div>

          {/* Closed Book Cover - Right Side Only */}
          {bookClosed && (
            <>
              {/* Front Cover (Right Side) */}
              <div 
                className={`absolute right-0 top-0 w-1/2 h-full rounded-r-lg transition-all duration-800 cursor-pointer ${isOpening ? 'opacity-0' : 'opacity-100'}`}
                style={{
                  ...bookCoverStyle,
                  transform: isOpening ? 'rotateY(-180deg)' : 'rotateY(0deg)',
                  transformOrigin: 'left center',
                  zIndex: 100,
                  transformStyle: 'preserve-3d',
                }}
                onClick={openBook}
              >
                <div className="flex items-center justify-center h-full px-8">
                  <div className="text-center">
                    <BookOpen className="w-16 h-16 text-white/80 mx-auto mb-4" />
                    <h3 className="text-2xl font-serif text-white/90 mb-2 tracking-wide">Guest Reviews</h3>
                    <p className="text-white/70 text-sm">Click to open</p>
                    <div className="mt-4 w-16 h-0.5 bg-white/40 mx-auto"></div>
                  </div>
                </div>
                
                {/* Cover embossing effects */}
                <div className="absolute inset-4 border border-white/30 rounded-r" />
                <div className="absolute inset-6 border border-white/15 rounded-r" />
              </div>
            </>
          )}
          
          {/* Page Stack Effect (Left) */}
          {!bookClosed && (
            <div className="absolute left-0 top-0 w-1/2 h-full" style={getBackgroundPageEffects()}>
              {pageStack.map((_, index) => (
                <div 
                  key={index}
                  className="absolute inset-0"
                  style={{
                    transform: `translateZ(${-2 - index * 0.5}px)`,
                    ...pageEdgeStyle,
                    borderRadius: '4px 0 0 4px',
                    boxShadow: 'inset -5px 0 10px -5px rgba(0,0,0,0.1)',
                  }}
                />
              ))}
            </div>
          )}
          
          {/* Left Page */}
          {!bookClosed && (
            <div 
              className="absolute left-0 top-0 w-1/2 h-full cursor-pointer"
              onMouseEnter={() => setHoveredSide('left')}
              onClick={handlePrevPage}
              style={{ 
                transformStyle: 'preserve-3d',
                ...getBackgroundPageEffects()
              }}
            >
              {currentPage > 0 && (
                <div 
                  className="absolute inset-0 rounded-l-lg overflow-hidden"
                  style={{
                    ...paperTextureStyle,
                    boxShadow: `
                      inset -10px 0 30px -10px rgba(0,0,0,0.2),
                      ${hoveredSide === 'left' ? 'inset -20px 0 40px -10px rgba(0,0,0,0.15)' : ''}
                    `,
                    transform: hoveredSide === 'left' ? 'translateZ(5px)' : 'translateZ(0)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <div className="p-10 h-full flex flex-col justify-center relative">
                    <Quote className="w-8 h-8 text-red-300 mb-4 opacity-50" />
                    <p className="text-gray-700 text-base leading-relaxed font-serif">
                      {currentPage === addReviewPageIndex 
                        ? "Thank you for reading all the reviews! We hope they've given you insight into our amazing community."
                        : reviews[currentPage - 1]?.backDescription
                      }
                    </p>
                    
                    <div className="mt-auto">
                      <p className="text-gray-600 text-right font-serif">
                        {currentPage === addReviewPageIndex 
                          ? "— The Review Team"
                          : `— ${reviews[currentPage - 1]?.author}`
                        }
                      </p>
                      <div className="flex justify-end mt-2">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-red-500">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {/* Flipping Page with Enhanced Backward Animation */}
          {isFlipping && !bookClosed && (
            <div 
              className="absolute right-0 top-0 w-1/2 h-full pointer-events-none"
              style={{
                ...getPageTransform(),
                transformStyle: 'preserve-3d',
                zIndex: 30,
                willChange: 'transform',
              }}
            >
              {/* Front of flipping page */}
              <div 
                className="absolute inset-0 rounded-r-lg overflow-hidden"
                style={{
                  ...paperTextureStyle,
                  backfaceVisibility: 'hidden',
                  ...getPageShadow(),
                }}
              >
                <div className="p-10 h-full flex flex-col justify-center">
                  <div className="absolute top-8 right-8 text-red-400 text-sm font-serif">
                    {frontPageIndex === addReviewPageIndex ? addReviewPageIndex + 1 : frontPageIndex + 1}
                  </div>
                  
                  {frontPageIndex < reviews.length ? (
                    <div className={`rounded-lg p-6 ${reviews[frontPageIndex].bgColor} shadow-lg`}>
                      <Quote className={`w-8 h-8 ${reviews[frontPageIndex].textColor} opacity-50 mb-4`} />
                      <p className={`${reviews[frontPageIndex].textColor} text-lg font-medium mb-4 leading-relaxed`}>
                        "{reviews[frontPageIndex].text}"
                      </p>
                      <p className={`${reviews[frontPageIndex].textColor} text-right font-semibold`}>
                        — {reviews[frontPageIndex].author}
                      </p>
                      <div className="flex justify-end mt-2">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`${reviews[frontPageIndex].textColor} text-lg`}>★</span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    // Add Review Page Content
                    <div className="rounded-lg p-6 bg-gradient-to-br from-red-500 to-red-600 shadow-lg text-white">
                      <PenTool className="w-8 h-8 text-white opacity-50 mb-4" />
                      <h3 className="text-xl font-bold mb-4">Share Your Experience!</h3>
                      <p className="text-lg mb-6">
                        Have you tried our app? We'd love to hear your thoughts and add your review to our guest book.
                      </p>
                      <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2">
                        <Plus className="w-5 h-5" />
                        Add Your Review
                      </button>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Back of flipping page with correct content for direction */}
              <div 
                className="absolute inset-0 rounded-l-lg overflow-hidden"
                style={{
                  ...paperTextureStyle,
                  transform: 'rotateY(180deg)',
                  backfaceVisibility: 'hidden',
                  boxShadow: `inset 10px 0 30px -10px rgba(0,0,0,0.2)`,
                }}
              >
                <div className="p-10 h-full flex flex-col justify-center relative">
                  <Quote className="w-8 h-8 text-red-300 mb-4 opacity-50" />
                  <p className="text-gray-700 text-base leading-relaxed font-serif">
                    {backPageIndex >= 0 && backPageIndex < reviews.length 
                      ? reviews[backPageIndex-1]?.backDescription
                      : backPageIndex === addReviewPageIndex
                      ? "We believe every user has a unique story to tell. Your experience matters to us and helps build our amazing community."
                      : ""
                    }
                  </p>
                  
                  <div className="mt-auto">
                    <p className="text-gray-600 text-right font-serif">
                      {backPageIndex >= 0 && backPageIndex < reviews.length 
                        ? `— ${reviews[backPageIndex-1]?.author}`
                        : backPageIndex === addReviewPageIndex
                        ? "— The Review Team"
                        : ""
                      }
                    </p>
                    {(backPageIndex >= 0) && (
                      <div className="flex justify-end mt-2">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-red-500">★</span>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Decorative corner elements */}
                  <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-red-200 opacity-30"></div>
                  <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-red-200 opacity-30"></div>
                </div>
              </div>
            </div>
          )}
          
          {/* Right Page with enhanced hover effects - MODIFIED TO SHOW NEXT PAGE DURING FLIP */}
          {!bookClosed && (
            <div 
              className="absolute right-0 top-0 w-1/2 h-full cursor-pointer"
              onMouseEnter={() => setHoveredSide('right')}
              onClick={handleNextPage}
              style={{ 
                transformStyle: 'preserve-3d',
                zIndex: isFlipping ? 15 : 20, // Lower z-index when flipping so it shows behind
                ...getBackgroundPageEffects()
              }}
            >
              <div 
                className="absolute inset-0 rounded-r-lg overflow-hidden"
                style={{
                  ...paperTextureStyle,
                  boxShadow: `
                    inset 10px 0 30px -10px rgba(0,0,0,0.2),
                    ${hoveredSide === 'right' ? 'inset 20px 0 40px -10px rgba(0,0,0,0.15)' : ''}
                  `,
                  transform: hoveredSide === 'right' ? 'translateZ(5px)' : 'translateZ(0)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div className="p-10 h-full flex flex-col justify-center relative">
                  {/* Show the next page content when flipping forward */}
                  {(() => {
                    const displayIndex = isFlipping && flipDirection === 'forward' 
                      ? currentPage + 1 
                      : currentPage;
                    
                    return (
                      <>
                        <div className="absolute top-8 right-8 text-red-400 text-sm font-serif">
                          {displayIndex === addReviewPageIndex ? addReviewPageIndex + 1 : displayIndex + 1}
                        </div>
                        
                        {displayIndex < reviews.length ? (
                          <div className={`rounded-lg p-6 ${reviews[displayIndex].bgColor} shadow-lg transform transition-all duration-500 ${
                            hoveredSide === 'right' ? 'scale-[1.02]' : 'scale-100'
                          }`}>
                            <Quote className={`w-8 h-8 ${reviews[displayIndex].textColor} opacity-50 mb-4`} />
                            <p className={`${reviews[displayIndex].textColor} text-lg font-medium mb-4 leading-relaxed`}>
                              "{reviews[displayIndex].text}"
                            </p>
                            <p className={`${reviews[displayIndex].textColor} text-right font-semibold`}>
                              — {reviews[displayIndex].author}
                            </p>
                            <div className="flex justify-end mt-2">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className={`${reviews[displayIndex].textColor} text-lg`}>★</span>
                              ))}
                            </div>
                          </div>
                        ) : (
                          // Add Review Page Content
                          <div className={`rounded-lg p-6 bg-gradient-to-br from-red-500 to-red-600 shadow-lg text-white transform transition-all duration-500 ${
                            hoveredSide === 'right' ? 'scale-[1.02]' : 'scale-100'
                          }`}>
                            <PenTool className="w-8 h-8 text-white opacity-50 mb-4" />
                            <h3 className="text-xl font-bold mb-4">Share Your Experience!</h3>
                            <p className="text-lg mb-6">
                              Have you tried our app? We'd love to hear your thoughts and add your review to our guest book.
                            </p>
                            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2">
                              <Plus className="w-5 h-5" />
                              Add Your Review
                            </button>
                          </div>
                        )}
                        
                        {/* Enhanced page corner effect */}
                        {hoveredSide === 'right' && displayIndex < addReviewPageIndex && (
                          <div 
                            className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden transition-all duration-500"
                            style={{
                              filter: 'drop-shadow(-2px -2px 4px rgba(0,0,0,0.1))',
                            }}
                          >
                            <div 
                              className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-red-100 to-red-200"
                              style={{
                                transform: 'rotate(45deg) translate(50%, 50%)',
                                boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.1)',
                              }}
                            />
                            <div 
                              className="absolute bottom-0 right-0 w-24 h-24"
                              style={{
                                background: paperTextureStyle.backgroundImage,
                                backgroundColor: '#fff5f5',
                                transform: 'rotate(45deg) translate(48%, 48%)',
                              }}
                            />
                          </div>
                        )}
                      </>
                    );
                  })()}
                </div>
              </div>
            </div>
          )}
          
          {/* Page Stack Effect (Right) */}
          {!bookClosed && (
            <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none" style={getBackgroundPageEffects()}>
              {[...Array(Math.max(0, reviews.length - currentPage))].map((_, index) => (
                <div 
                  key={index}
                  className="absolute inset-0"
                  style={{
                    transform: `translateZ(${-2 - index * 0.5}px)`,
                    ...pageEdgeStyle,
                    borderRadius: '0 4px 4px 0',
                    boxShadow: 'inset 5px 0 10px -5px rgba(0,0,0,0.1)',
                  }}
                />
              ))}
            </div>
          )}
          
          {/* Book Cover Effects */}
          {!bookClosed && (
            <>
              <div 
                className="absolute -left-2 -top-2 -bottom-2 w-4 rounded-l"
                style={{
                  ...bookCoverStyle,
                  transform: 'translateZ(10px)',
                }}
              />
              <div 
                className="absolute -right-2 -top-2 -bottom-2 w-4 rounded-r"
                style={{
                  ...bookCoverStyle,
                  transform: 'translateZ(10px)',
                }}
              />
            </>
          )}
          
          {/* Enhanced Navigation Buttons */}
          {!bookClosed && (
            <>
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 0 || isFlipping}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 p-2 rounded-full bg-white shadow-lg transition-all duration-500 ${
                  currentPage === 0 || isFlipping 
                    ? 'opacity-30 cursor-not-allowed' 
                    : 'opacity-80 hover:opacity-100 hover:shadow-xl hover:scale-110 hover:bg-red-50'
                }`}
                style={{
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1), 0 2px 10px rgba(0,0,0,0.1)',
                }}
              >
                <ChevronLeft className="w-6 h-6 text-red-700" />
              </button>
              
              <button
                onClick={handleNextPage}
                disabled={isFlipping || currentPage >= addReviewPageIndex}
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 p-3 rounded-full bg-white shadow-lg transition-all duration-500 ${
                  isFlipping || currentPage >= addReviewPageIndex
                    ? 'opacity-30 cursor-not-allowed' 
                    : 'opacity-80 hover:opacity-100 hover:shadow-xl hover:scale-110 hover:bg-red-50'
                }`}
                style={{
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1), 0 2px 10px rgba(0,0,0,0.1)',
                }}
              >
                <ChevronRight className="w-6 h-6 text-red-700" />
              </button>
            </>
          )}
        </div>
        
        {/* Page Indicators */}
        <div className="flex justify-center mt-12 space-x-3">
          {[...reviews, { id: 'add-review' }].map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              disabled={isFlipping || bookClosed}
              className={`rounded-full transition-all duration-700 ${
                index === currentPage && !bookClosed
                  ? 'bg-red-700 w-6 h-2 shadow-md' 
                  : bookClosed 
                  ? 'bg-gray-300 w-2 h-2'
                  : index === addReviewPageIndex
                  ? 'bg-blue-500 hover:bg-blue-700 w-2 h-2 hover:scale-125'
                  : 'bg-red-300 hover:bg-red-500 w-2 h-2 hover:scale-125'
              }`}
              style={{
                boxShadow: index === currentPage && !bookClosed ? '0 2px 8px rgba(220, 38, 38, 0.3)' : 'none',
              }}
              aria-label={index === addReviewPageIndex ? 'Go to add review page' : `Go to page ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Reading Progress */}
        <div className="mt-6 text-center">
          <p className="text-sm text-red-600 font-serif">
            {bookClosed 
              ? 'Book closed - Click to open' 
              : isAddReviewPage
              ? 'Add Review Page'
              : `Page ${currentPage + 1} of ${reviews.length + 1}`}
          </p>
        </div>
      </div>
    </div>
  );
}
