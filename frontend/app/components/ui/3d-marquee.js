"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { motion as framerMotion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export const ThreeDMarquee = ({ className }) => {
  const images = [
    "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
    "https://assets.aceternity.com/animated-modal.png",
    "https://assets.aceternity.com/animated-testimonials.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
    "https://assets.aceternity.com/github-globe.png",
    "https://assets.aceternity.com/glare-card.png",
    "https://assets.aceternity.com/layout-grid.png",
    "https://assets.aceternity.com/flip-text.png",
    "https://assets.aceternity.com/hero-highlight.png",
    "https://assets.aceternity.com/carousel.webp",
    "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
    "https://assets.aceternity.com/signup-form.png",
    "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
    "https://assets.aceternity.com/spotlight-new.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
    "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
    "https://assets.aceternity.com/tabs.png",
    "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    "https://assets.aceternity.com/glowing-effect.webp",
    "https://assets.aceternity.com/hover-border-gradient.png",
    "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png","https://assets.aceternity.com/tabs.png",
    "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    "https://assets.aceternity.com/glowing-effect.webp",
    "https://assets.aceternity.com/hover-border-gradient.png",
    "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png","https://assets.aceternity.com/tabs.png",
    "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    "https://assets.aceternity.com/glowing-effect.webp",
    "https://assets.aceternity.com/hover-border-gradient.png",
    "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
    "https://assets.aceternity.com/macbook-scroll.png",
    "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    "https://assets.aceternity.com/multi-step-loader.png",
    "https://assets.aceternity.com/vortex.png",
    "https://assets.aceternity.com/wobble-card.png",
    "https://assets.aceternity.com/world-map.webp",
  ];

  // Split the images array into 4 equal parts
  const chunkSize = Math.ceil(images.length / 4);
  const chunks = Array.from({ length: 4 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return images.slice(start, start + chunkSize);
  });

  // For seamless loop: measure stack height
  const stackRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [stackHeights, setStackHeights] = useState([0, 0, 0, 0]);

  useEffect(() => {
    setStackHeights(stackRefs.map(ref => ref.current ? ref.current.scrollHeight / 2 : 0));
  }, [images.length]);

  return (
    <div className="relative w-full h-screen min-h-screen overflow-hidden" style={{ backgroundColor: '#0c1c3c' }}>
      {/* Overlayed Content */}
      <div className="flex items-center justify-start min-h-screen w-full z-20 relative" >
        <motion.div
          className="w-full max-w-lg md:max-w-2xl lg:max-w-3xl px-4 ml-2 sm:ml-8 md:ml-16 lg:ml-32 flex flex-col items-start justify-center py-8 md:py-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6 text-left"
            variants={itemVariants}
          >
            Transforming<br />
            Business Through<br />
            <span className="text-red-700">SAP Excellence</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-l text-gray-200 mb-8 max-w-2xl text-left"
            variants={itemVariants}
          >
            Empower your enterprise with CritIndia's comprehensive SAP implementation and support services. We deliver tailored solutions that drive innovation and growth.
          </motion.p>
          <motion.div className="flex flex-wrap gap-4 mb-10 justify-start" variants={itemVariants}>
            <a
              href="#demo"
              className="flex items-center gap-2 px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-semibold bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 text-base md:text-lg active:scale-95"
              style={{ pointerEvents: 'auto' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="13" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
              Schedule a Demo
            </a>
            <a
              href="#solutions"
              className="flex items-center gap-2 px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-semibold bg-white/10 border border-gray-400/30 text-white backdrop-blur-md hover:bg-white/20 hover:border-gray-200/50 transition-all duration-200 text-base md:text-lg active:scale-95 shadow-md"
              style={{ pointerEvents: 'auto' }}
            >
              
              View Solutions
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
              </a>
          </motion.div>
        </motion.div>
      </div>
      {/* Marquee Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <div
          style={{
            transform: "rotateX(55deg) rotateY(0deg) rotateZ(-45deg)",
          }}
          className="w-full h-full grid origin-top-left grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-16 transform-3d">
          {chunks.map((subarray, colIndex) => {
            // Unique duration and direction for each column
            const durations = [22, 28, 24, 30];
            const direction = colIndex % 2 === 0 ? -1 : 1;
            return (
              <motion.div
                key={colIndex + "marquee"}
                className="flex flex-col items-start gap-16"
                ref={stackRefs[colIndex]}
                animate={{
                  y: [0, direction * stackHeights[colIndex]],
                }}
                transition={{
                  duration: durations[colIndex % durations.length],
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear"
                }}
                style={{ willChange: "transform" }}
              >
                <GridLineVertical className="-left-4" offset="80px" />
                {[...subarray, ...subarray].map((image, imageIndex) => (
                  <div className="relative" key={imageIndex + image}>
                    <GridLineHorizontal className="-top-4" offset="20px" />
                    <motion.img
                      whileHover={{
                        y: -10,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      key={imageIndex + image}
                      src={image}
                      alt={`Image ${imageIndex + 1}`}
                      className="aspect-[970/700] object-cover opacity-40 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
                      width={970}
                      height={700} />
                  </div>
                ))}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const GridLineHorizontal = ({
  className,
  offset
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",

          //-100px if you want to keep the line inside
          "--offset": offset || "200px",

          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude"
        }
      }
      className={cn(
        "absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}></div>
  );
};

const GridLineVertical = ({
  className,
  offset
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "5px",
          "--width": "1px",
          "--fade-stop": "90%",

          //-100px if you want to keep the line inside
          "--offset": offset || "150px",

          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude"
        }
      }
      className={cn(
        "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}></div>
  );
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 40,
      damping: 12,
      duration: 2.2,
    },
  },
};
