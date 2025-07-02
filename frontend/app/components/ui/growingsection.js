'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import Image from 'next/image'

const GrowingSection = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    team: 0,
    clients: 0,
    success: 0
  })

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.3 })
  const controls = useAnimation()

  // Animated counter function
  const animateCounter = (key, target, duration = 2000) => {
    const increment = target / (duration / 16)
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      
      setCounters(prev => ({
        ...prev,
        [key]: Math.floor(current)
      }))
    }, 16)
  }

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
      // Start counters with delays
      setTimeout(() => animateCounter('projects', 11), 800)
      setTimeout(() => animateCounter('team', 600), 1000)
      setTimeout(() => animateCounter('clients', 200), 1200)
      setTimeout(() => animateCounter('success', 75), 1400)
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  const stats = [
    {
      key: 'projects',
      label: 'Years of Success',
      suffix: '+',
      growth: '11+ years and counting',
      icon: <Image 
        src="https://res.cloudinary.com/dujw4np0d/image/upload/v1750939192/rocket_jwq1o9.png"
        alt="Rocket icon"
        width={40}
        height={40}
        className="mx-auto"
      />
    },
    {
      key: 'team',
      label: 'Projects Under Our Belt',
      suffix: '+',
      growth: 'Growing portfolio',
      icon: <Image 
        src="https://res.cloudinary.com/dujw4np0d/image/upload/v1750939414/layers_i3vavi.png"
        alt="Layers icon"
        width={40}
        height={40}
        className="mx-auto"
      />
    },
    {
      key: 'clients',
      label: 'Clients',
      suffix: '+',
      growth: 'Trusted partnerships',
      icon: <Image 
        src="https://res.cloudinary.com/dujw4np0d/image/upload/v1750940007/client_zgml9v.png"
        alt="Clients icon"
        width={40}
        height={40}
        className="mx-auto"
      />
    },
    {
      key: 'success',
      label: 'Technologies',
      suffix: '+',
      growth: 'Cutting-edge stack',
      icon: <Image 
        src="https://res.cloudinary.com/dujw4np0d/image/upload/v1750941176/techno_tda1t6.png"
        alt="Technology icon"
        width={40}
        height={40}
        className="mx-auto"
      />
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-* bg-[#0C1C3C] overflow-hidden"
    >
      <style jsx global>{`
  @keyframes border-shine {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  .shine-border {
    position: relative;
  }
  .shine-border::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    background: linear-gradient(
      45deg,
      transparent,
      transparent,
      rgba(59, 130, 246, 0.1),  /* blue-500 */
      rgba(37, 99, 235, 0.2),   /* blue-600 */
      rgba(59, 130, 246, 0.1),
      transparent,
      transparent
    );
    background-size: 200% 200%;
    animation: border-shine 4s linear infinite;
    border-radius: 0.75rem;
  }
`}</style>

     

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            animate={{
              y: [-20, -100],
              x: [0, 50],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: '100%'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 flex items-center">
        <motion.div 
          className="w-full max-w-5xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Main Title */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-6xl sm:text-6xl lg:text-5xl font-bold text-white mb-2">
               We Are Growing
              
            </h1>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          {/* Subtitle */}
          

          {/* Stats Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.key}
                variants={itemVariants}
                className="shine-border group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 hover:bg-slate-800/70 transition-all duration-500 hover:scale-105"
              >
                {/* Card glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-emerald-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="text-2xl mb-2 h-8 flex items-center justify-center">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold mb-1">
                    <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                      {counters[stat.key]}{stat.suffix}
                    </span>
                  </div>
                  <div className="text-slate-300 text-base font-medium mb-2">
                    {stat.label}
                  </div>
                  <div className="flex items-center justify-center text-xs text-blue-400">
                    <motion.div
                      className="w-0 h-0 border-l-2 border-r-2 border-b-2 border-transparent border-b-blue-400 mr-1"
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    {stat.growth}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          
          
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0C1C3C] to-transparent" />
    </section>
  )
}

export default GrowingSection