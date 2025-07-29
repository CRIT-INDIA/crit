"use client"

import React, { useRef } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"

// Import required modules
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules"

// Main component that will be the default export
const CardCarousel = ({
  images = [],
  autoplayDelay = 1500,
  showPagination = true,
  showNavigation = true,
}) => {
  const swiperRef = useRef(null);

  const css = `
  .swiper {
    width: 100%;
    padding: 40px 0;
    height: 500px; /* Fixed height for the swiper container */
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 400px;
    border-radius: 1.5rem;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .swiper-slide > div {
    width: 100%;
    height: 100%;
    position: relative;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
  
  .swiper-slide-active {
    transform: scale(1.05);
    z-index: 2;
  }
  
  .swiper-pagination-bullet {
    background: #9CA3AF;
    opacity: 0.5;
    width: 10px;
    height: 10px;
    transition: all 0.3s ease;
  }
  
  .swiper-pagination-bullet-active {
    background: #EF4444;
    opacity: 1;
    transform: scale(1.2);
  }
  
  .swiper-button-next,
  .swiper-button-prev {
    color: #EF4444;
    background: rgba(255, 255, 255, 0.8);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: all 0.3s ease;
  }
  
  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    background: rgba(239, 68, 68, 0.1);
  }
  
  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 1.2rem;
    font-weight: bold;
  }`
  
  return (
    <section className="w-full py-8">
      <style>{css}</style>
      <div className="mx-auto text-center w-full max-w-5xl rounded-[22px]">
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 transition-all duration-1000 inline-block relative`}>
          <span className="text-black"> Industries we </span>
          <span className="text-red-500">Empower</span>
          <svg className="mx-auto my-0" style={{marginTop: '-4px'}} width="190" height="18" viewBox="0 0 220 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 18 Q 110 8, 215 14" stroke="#dc2626" strokeWidth="4" strokeLinecap="round" fill="none"/>
            <path d="M15 21 Q 120 15, 200 18" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" fill="none"/>
          </svg>
        </h2>
        <p className="mb-4 text-center inline-block text-lg text-gray-700 leading-relaxed max-w-3xl">
          Delivering tailored technology and consulting solutions across diverse sectors to drive innovation, efficiency, and growth.
        </p>
        <div className="relative mx-auto flex w-full flex-col rounded-[22px] border border-gray-200/30 bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm p-6 shadow-md md:items-start md:gap-10 md:rounded-[36px] md:p-8">
          <div className="flex sm:ml-25 flex-col justify-center pb-4 pl-4 pt-6 md:items-center">
            <div className="flex gap-3">
              <div className="text-center"></div>
            </div>
          </div>

          <div className="flex w-full items-center justify-center gap-4">
            <div className="w-full">
              <Swiper
                ref={swiperRef}
                spaceBetween={30}
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 200,
                  modifier: 2.5,
                  slideShadows: false,
                }}
                pagination={showPagination ? {
                  clickable: true,
                  el: '.swiper-pagination',
                } : false}
                navigation={
                  showNavigation
                    ? {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }
                    : false
                }
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
                className="w-full h-full"
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 30
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 40
                  }
                }}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full h-full rounded-3xl shadow-2xl transform transition-all duration-300 hover:scale-105 overflow-hidden group">
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 w-full h-full">
                          <Image
                            src={image.src}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            alt={image.alt}
                            priority={index < 3}
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                          <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <h4 className="text-white font-bold text-xl md:text-2xl lg:text-3xl tracking-wide mb-2">
                              {image.industry}
                            </h4>
                            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mt-3 rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
                            <p className="text-white/90 mt-4 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                              {image.description || 'Learn more about our services'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Optional: Keep the simple Badge component as a named export if needed elsewhere
export function SimpleBadge({ children, className = "", ...props }) {
  return (
    <span
      className={`inline-block px-2 py-1 rounded bg-gray-200 text-gray-800 text-xs font-semibold ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

// Export as default
export default CardCarousel;
