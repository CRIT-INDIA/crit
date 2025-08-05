"use client";

import React, { useRef, useState, useEffect } from 'react';
import { MapPin, Briefcase, Clock, User, ExternalLink, ArrowRight, X, DollarSign, Calendar, Users, Award, Zap, Gift, Star } from 'lucide-react';
import Player from "lottie-react";
import { useRouter } from 'next/navigation';

const CareerPage = () => {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const fileInputRef = useRef(null);
  const vantaRef = useRef(null);
  
  useEffect(() => {
    let vantaEffect = null;
    let threeScript = null;
    let vantaScript = null;

    const loadVantaScripts = async () => {
      try {
        if (!window.THREE) {
          // Load Three.js first
          threeScript = document.createElement('script');
          threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
          threeScript.async = true;
          threeScript.crossOrigin = 'anonymous';
          
          threeScript.onload = () => {
            // After Three.js loads, load Vanta
            vantaScript = document.createElement('script');
            vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js';
            vantaScript.async = true;
            vantaScript.crossOrigin = 'anonymous';
            
            vantaScript.onload = () => {
              if (window.VANTA && vantaRef.current) {
                try {
                  vantaEffect = window.VANTA.BIRDS({
                    el: vantaRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 2.00,
                    scaleMobile: 1.00
                  });
                } catch (error) {
                  console.error('Error initializing Vanta effect:', error);
                }
              }
            };
            
            vantaScript.onerror = (error) => {
              console.error('Error loading Vanta script:', error);
            };
            
            document.head.appendChild(vantaScript);
          };
          
          threeScript.onerror = (error) => {
            console.error('Error loading Three.js:', error);
          };
          
          document.head.appendChild(threeScript);
        } else if (window.VANTA && vantaRef.current) {
          // If Three.js is already loaded, just load Vanta
          vantaScript = document.createElement('script');
          vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js';
          vantaScript.async = true;
          vantaScript.crossOrigin = 'anonymous';
          
          vantaScript.onload = () => {
            if (window.VANTA && vantaRef.current) {
              try {
                vantaEffect = window.VANTA.BIRDS({
                  el: vantaRef.current,
                  mouseControls: true,
                  touchControls: true,
                  gyroControls: false,
                  minHeight: 200.00,
                  minWidth: 200.00,
                  scale: 2.00,
                  scaleMobile: 1.00
                });
              } catch (error) {
                console.error('Error initializing Vanta effect:', error);
              }
            }
          };
          
          vantaScript.onerror = (error) => {
            console.error('Error loading Vanta script:', error);
          };
          
          document.head.appendChild(vantaScript);
        }
      } catch (error) {
        console.error('Error in Vanta initialization:', error);
      }
    };

    // Add a small delay to ensure the component is mounted
    const timer = setTimeout(() => {
      loadVantaScripts();
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      
      // Cleanup Vanta effect
      if (vantaEffect && typeof vantaEffect.destroy === 'function') {
        try {
          vantaEffect.destroy();
        } catch (error) {
          console.error('Error cleaning up Vanta effect:', error);
        }
      }
      
      // Remove scripts if they were added
      if (vantaScript && vantaScript.parentNode) {
        vantaScript.parentNode.removeChild(vantaScript);
      }
      if (threeScript && threeScript.parentNode) {
        threeScript.parentNode.removeChild(threeScript);
      }
    };
  }, []);

  const sapCareerInfo = {
    title: "SAP Career Opportunities at CRIT",
    description: "Going beyond work, Life at Crit is brimming with a dynamic and fun environment; one where people not only ace at their field of expertise but also give meaning to their passion.\n\n  We provide opportunities for you to grow and excel in your career and beyond. Along with creating an impact on technology, you also have the chance to unleash your full potential at every stage of your career. Our expertise spans SAP implementation, customization, and comprehensive consulting services, ensuring our clients achieve maximum value from their SAP investments. ",
    requirements: [
      "Strong technical background in SAP technologies",
      "Excellent communication and problem-solving skills",
      "Ability to work in a fast-paced environment",
      "Willingness to travel for client projects",
      "Bachelor's degree in Computer Science or related field",
      "SAP certifications are preferred"
    ]
  };

  const handleLearnMore = (job) => {
    if (!job) {
      console.error('No job data provided');
      return;
    }
    try {
      setSelectedJob({
        ...job,
        // Ensure required fields have fallbacks
        title: job.title || 'Position Title',
        company: job.company || 'CRIT',
        location: job.location || 'Location not specified',
        experience: job.experience || 'Experience not specified',
        salary: job.salary || 'Salary not specified',
        postedDate: job.postedDate || new Date().toISOString(),
        description: job.description || 'No description available',
        responsibilities: Array.isArray(job.responsibilities) ? job.responsibilities : [],
        requirements: Array.isArray(job.requirements) ? job.requirements : [],
        skills: Array.isArray(job.skills) ? job.skills : [],
        applicationDeadline: job.applicationDeadline || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() // 30 days from now
      });
      setShowModal(true);
    } catch (error) {
      console.error('Error setting job details:', error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedJob(null);
  };

  return (
    <div className="min-h-screen p-2 sm:p-4 md:p-6">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] px-2 sm:px-4 py-6 pt-20">
        
        <div className="max-w-5xl mx-auto relative z-10 h-full flex items-center justify-center">
          <div className="bg-white/40 rounded-2xl p-6 sm:p-9 text-center relative overflow-hidden border border-red-100 w-full" ref={vantaRef}>
          <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
            
            <style jsx>{`
@keyframes moveGradient {
  0%, 100% { stop-color: #ffffff; stop-opacity: 1; }
  50% { stop-color: #ffffff; stop-opacity: 1; }
}
.burst-gradient stop {
  animation: moveGradient 2s linear infinite;
}
.linkedin-btn:hover .linkedin-logo {
  transform: rotate(360deg);
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.linkedin-logo {
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.modal-overlay {
  backdrop-filter: blur(8px);
}
`}</style>
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/50 bg-opacity-5 rounded-full blur-3xl transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/50 bg-opacity-5 rounded-full blur-3xl transform -translate-x-16 translate-y-16"></div>
            
            
            <div className="relative z-10 ">
              <h2 className="text-2xl md:text-3xl text-gray font-bold mb-4">
                Looking for the Best IT Job?
              </h2>
              <p className="text-base md:text-lg mb-4 text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Join a team that thrives on innovation, creativity, and collaboration. At CRIT, we empower individuals to grow while building solutions that make an impact. Discover your next big opportunity today!
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* SAP Career Information */}
      <section className="px-2 sm:px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main SAP Career Info */}
          <div className="bg-white rounded-2xl p-8 mb-8 border border-red-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {sapCareerInfo.title}
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                {sapCareerInfo.description}
              </p>
            </div>

            {/* Requirements Section */}
            <div className="bg-red-50 rounded-xl p-6 border border-gray-300 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Award size={20} className="text-red-600" />
                Requirements
              </h3>
              <div className="space-y-2">
                {sapCareerInfo.requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-gray-400 to-gray-500 rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Ready to Join Our SAP Team?</h3>
              <p className="text-white-100 mb-6">
                Send your resume and cover letter to our HR team. We'll get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  className="bg-white text-red-600 px-6 py-3 rounded-full hover:bg-red-100 transition-all duration-300 flex items-center gap-2 font-semibold"
                  onClick={() => router.push('/career/apply')}
                >
                  <span>Apply Now</span>
                  <ArrowRight size={16} />
                </button>
                <a
                  href="mailto:info@critindia.com"
                  className="text-white hover:text-red-300 transition-colors duration-200 flex items-center gap-2 font-medium"
                >
                  <span>Email: info@critindia.com</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      {showModal && selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
            onClick={closeModal}
            role="button"
            aria-label="Close modal"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Escape' && closeModal()}
          ></div>
          <div 
            className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="job-modal-title"
          >
            <div className="sticky top-0 bg-white rounded-t-2xl p-6 border-b border-gray-200 z-10">
              <div className="flex justify-between items-start">
                <div>
                  <h2 id="job-modal-title" className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedJob.title || 'Job Position'}
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm">
                    {selectedJob.location && (
                      <span className="flex items-center gap-1">
                        <MapPin size={16} aria-hidden="true" />
                        {selectedJob.location}
                      </span>
                    )}
                    {selectedJob.experience && (
                      <span className="flex items-center gap-1">
                        <Briefcase size={16} aria-hidden="true" />
                        {selectedJob.experience}
                      </span>
                    )}
                    {selectedJob.salary && (
                      <span className="flex items-center gap-1">
                        <DollarSign size={16} aria-hidden="true" />
                        {selectedJob.salary}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="p-1 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
                  aria-label="Close modal"
                >
                  <X size={24} className="text-gray-500 hover:text-gray-700" />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-8">
              {/* Company Info */}
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="w-16 h-16 rounded-lg flex-shrink-0 overflow-hidden bg-white p-1.5 border border-gray-200">
                    <img
                      src="https://res.cloudinary.com/dujw4np0d/image/upload/v1753342468/CRIT-3D_cpzr1n_ggj84n.avif"
                      alt="CRIT Logo"
                      className="w-full h-full object-contain"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iN2Q4YjVjIiBjbGFzczz"icon"PjxnPjxwYXRoIGQ9Ik0xMiwxMkMxMiwxMC4zNCAxMy4zNCw5IDE1LDlTMTgsMTAuMzQgMTgsMTJDMTgsMTMuNjYgMTYuNjYsMTUgMTUsMTVTMiwxMy42NiAxMiwxMloiLz48L2c+PC9zdmc+';
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 truncate">
                      {selectedJob.company || 'CRIT'}
                    </h3>
                    {selectedJob.postedDate && (
                      <p className="text-gray-600 text-sm mt-1">
                        Posted on {new Date(selectedJob.postedDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Job Description */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 bg-red-50 rounded-xl flex-shrink-0">
                    <Zap size={20} className="text-red-500" />
                  </span>
                  <span>Job Description</span>
                </h3>
                <div className="prose prose-red max-w-none text-gray-700">
                  {selectedJob.description ? (
                    typeof selectedJob.description === 'string' ? (
                      <p>{selectedJob.description}</p>
                    ) : (
                      <p>No job description available.</p>
                    )
                  ) : (
                    <p>No job description available.</p>
                  )}
                </div>
              </div>

              {/* Responsibilities */}
              {Array.isArray(selectedJob.responsibilities) && selectedJob.responsibilities.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-red-50 rounded-xl flex-shrink-0">
                      <Users size={20} className="text-red-500" />
                    </span>
                    <span>Key Responsibilities</span>
                  </h3>
                  <ul className="space-y-3">
                    {selectedJob.responsibilities.map((responsibility, index) => (
                      <li key={`resp-${index}`} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 bg-red-500 rounded-full mt-2.5"></span>
                        <span className="text-gray-700">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Requirements */}
              {Array.isArray(selectedJob.requirements) && selectedJob.requirements.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-red-50 rounded-xl flex-shrink-0">
                      <Award size={20} className="text-red-500" />
                    </span>
                    <span>Requirements</span>
                  </h3>
                  <ul className="space-y-3">
                    {selectedJob.requirements.map((requirement, index) => (
                      <li key={`req-${index}`} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 bg-red-500 rounded-full mt-2.5"></span>
                        <span className="text-gray-700">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Skills */}
              {Array.isArray(selectedJob.skills) && selectedJob.skills.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-red-50 rounded-xl flex-shrink-0">
                      <Star size={20} className="text-red-500" />
                    </span>
                    <span>Required Skills</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedJob.skills.filter(Boolean).map((skill, index) => (
                      <span 
                        key={`skill-${index}`} 
                        className="bg-gray-800 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Application Deadline */}
              {selectedJob.applicationDeadline && (
                <div className="bg-red-50 border border-red-100 rounded-xl p-5">
                  <div className="flex items-center gap-4">
                    <span className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 bg-white rounded-xl border border-red-100">
                      <Calendar size={20} className="text-red-500" />
                    </span>
                    <div>
                      <p className="font-medium text-gray-900">Application Deadline</p>
                      <p className="text-gray-700">
                        {new Date(selectedJob.applicationDeadline).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Apply Button */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    closeModal();
                    router.push('/career/apply');
                  }}
                  className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  aria-label={`Apply for ${selectedJob.title || 'this position'}`}
                >
                  <span>Apply for this position</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <p className="text-center text-sm text-gray-500 mt-3">
                  We'll review your application and get back to you soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stay Ahead of Opportunities Section */}
      <section className="px-2 sm:px-5 py-7 sm:py-11">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 relative inline-block">
              Stay Ahead of Opportunities
              <svg
                className="absolute -bottom-5 left-0 w-full"
                width="100%"
                height="22"
                viewBox="0 0 500 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                style={{ display: 'block' }}
              >
                <path
                  d="M10 12 Q250 0 490 12"
                  stroke="#FFD700"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M40 20 Q250 8 460 20"
                  stroke="#FFD700"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </h2>
            <p className="text-gray-700 text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
              Didn't find the right role? No worries! Submit your details, and we'll contact you when a matching position becomes available.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-stretch">
            {/* Left Side - Content */}
            <div className="h-full flex justify-center lg:ml-40 items-start mb-8 lg:mb-0">
              <div 
                className="bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-teal-600/20 rounded-2xl p-4 sm:p-6 pt-4 backdrop-blur-sm border border-gray-700 h-full max-w-md w-full flex flex-col justify-start items-center relative overflow-hidden"
                style={{
                  backgroundImage: `url('https://res.cloudinary.com/dujw4np0d/image/upload/v1752223234/10516_k7wjyt.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
                
                {/* Animated SVG Blob Background */}
                <svg
                  className="absolute inset-0 w-full h-full z-0"
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ opacity: 0.98 }}
                >
                  <path>
                    <animate attributeName="d" dur="8s" repeatCount="indefinite"
                      values="M320,200Q320,280,240,320Q160,360,80,320Q0,280,0,200Q0,120,80,80Q160,40,240,80Q320,120,320,200Z;
                              M340,200Q340,280,260,320Q180,360,100,320Q20,280,20,200Q20,120,100,80Q180,40,260,80Q340,120,340,200Z;
                              M320,200Q320,280,240,320Q160,360,80,320Q0,280,0,200Q0,120,80,80Q160,40,240,80Q320,120,320,200Z" />
                  </path>
                </svg>
                {/* Card overlay and content */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-500/10 via-gray-700/10 to-gray-900/10 rounded-2xl z-10"></div>
                <div className="relative z-20 text-center w-full">
                  <Player
                    autoplay
                    loop
                    src="https://assets10.lottiefiles.com/packages/lf20_tno6cg2w.json"
                    style={{ height: 120, width: 120, margin: '0 auto 1rem auto' }}
                  />
                  <h3 className="text-3xl font-bold mb-6 text-white">
                    Discover Opportunities & Stay Connected
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    We're always looking for talented individuals who share our vision. If you don't find the right opportunity today, submit your details, and we'll reach out when a suitable position opens up.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-gradient-to-b from-gray-200 to-gray-100 rounded-2xl p-4 sm:p-8 border border-gray-400 h-full">
              <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-black font-medium mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-200 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-black font-medium mb-2">
                      Desired Position <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-200 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="e.g., React Developer"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-black font-medium mb-2">
                      Experience <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-200 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="e.g., 3+ years"
                    />
                  </div>
                  <div>
                    <label className="block text-black font-medium mb-2">
                      Current CTC <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-200 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="e.g., 10 LPA"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-black font-medium mb-2">
                      Write a message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows="4"
                      className="w-full bg-gray-200 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about yourself and your interests..."
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-black font-medium mb-2">
                      Upload Your CV <span className="text-red-500">*</span>
                    </label>
                    <div
                      className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-purple-500 transition-colors cursor-pointer"
                      onClick={() => fileInputRef.current && fileInputRef.current.click()}
                    >
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={e => {
                          if (e.target.files && e.target.files[0]) {
                            setSelectedFile(e.target.files[0]);
                          }
                        }}
                      />
                      <div className="flex flex-col items-center">
                        <svg className="w-12 h-12 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="text-black font-medium">{selectedFile ? selectedFile.name : 'Upload file'}</p>
                        <p className="text-gray-400 text-sm mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    className="bg-red-600 hover:red-800 text-white font-semibold px-6 sm:px-8 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                  >
                    <span>Submit</span>
                    <ArrowRight size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;