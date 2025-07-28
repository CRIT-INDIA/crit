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
    // Load Vanta.js scripts
    const loadVantaScripts = async () => {
      // Load Three.js
      if (!window.THREE) {
        const threeScript = document.createElement('script');
        threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
        threeScript.onload = () => {
          // Load Vanta Birds
          const vantaScript = document.createElement('script');
          vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js';
          vantaScript.onload = () => {
            if (window.VANTA && vantaRef.current) {
              window.VANTA.BIRDS({
                el: vantaRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 2.00,
                scaleMobile: 1.00
              });
            }
          };
          document.head.appendChild(vantaScript);
        };
        document.head.appendChild(threeScript);
      } else {
        // Three.js already loaded, just load Vanta
        const vantaScript = document.createElement('script');
        vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js';
        vantaScript.onload = () => {
          if (window.VANTA && vantaRef.current) {
            window.VANTA.BIRDS({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00
            });
          }
        };
        document.head.appendChild(vantaScript);
      }
    };

    loadVantaScripts();

    // Cleanup function
    return () => {
      if (window.VANTA && window.VANTA.BIRDS) {
        // Clean up Vanta instance if needed
      }
    };
  }, []);

  const jobListings = [
    {
      id: 1,
      title: "React Js Developer",
      location: "Pune, Maharashtra",
      experience: "3+ years",
      type: "Part Time",
      salary: "₹8-12 LPA",
      skills: ["React.js", "JavaScript", "TypeScript", "Redux", "Node.js", "Git"],
      description: "We are looking for a skilled React.js developer to join our dynamic team. You will be responsible for building user-facing features and reusable components.",
      responsibilities: [
        "Develop new user-facing features using React.js",
        "Build reusable code and libraries for future use",
        "Ensure the technical feasibility of UI/UX designs",
        "Optimize applications for maximum speed and scalability",
        "Collaborate with other team members and stakeholders"
      ],
      requirements: [
        "Strong proficiency in JavaScript, including DOM manipulation",
        "Thorough understanding of React.js and its core principles",
        "Experience with popular React.js workflows (Redux, Context API)",
        "Familiarity with newer specifications of EcmaScript",
        "Experience with data structure libraries (e.g., Immutable.js)"
      ],
      benefits: [
        "Flexible working hours",
        "Remote work options",
        "Health insurance coverage",
        "Professional development opportunities",
        "Performance-based bonuses"
      ],
      company: "CRIT",
      postedDate: "2024-01-15",
      applicationDeadline: "2024-02-15"
    },
    {
      id: 2,
      title: "Business Developer",
      location: "Pune, Maharashtra",
      experience: "1+ years",
      type: "Full Time",
      salary: "₹6-10 LPA",
      skills: ["LinkedIn Sales Navigator", "Upwork", "Data Scraping Tools", "Negotiation", "Proposals Documentation", "CRM"],
      description: "Join our business development team to drive growth and establish strategic partnerships. You will be responsible for identifying new business opportunities and building client relationships.",
      responsibilities: [
        "Identify and pursue new business opportunities",
        "Build and maintain relationships with potential clients",
        "Develop and implement sales strategies",
        "Prepare and deliver presentations to clients",
        "Negotiate contracts and close deals"
      ],
      requirements: [
        "Proven experience in business development or sales",
        "Strong communication and negotiation skills",
        "Experience with CRM systems and sales tools",
        "Ability to work independently and as part of a team",
        "Bachelor's degree in Business or related field"
      ],
      benefits: [
        "Competitive salary with commission structure",
        "Comprehensive health benefits",
        "Paid time off and holidays",
        "Career advancement opportunities",
        "Team building activities"
      ],
      company: "CRIT",
      postedDate: "2024-01-10",
      applicationDeadline: "2024-02-10"
    }
  ];

  const handleLearnMore = (job) => {
    setSelectedJob(job);
    setShowModal(true);
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

      {/* Job Listings */}
      <section className="px-2 sm:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobListings.map((job, idx) => (
              <div 
                key={job.id} 
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-red-200 transition-all duration-300 hover:shadow-lg hover:shadow-red-100/50"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-medium">
                    {job.type}
                  </span>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin size={16} className="text-black" />
                    <span className="text-black text-md">{job.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-700">
                    <Briefcase size={16} className="text-black" />
                    <span className="text-black text-md">{job.experience}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-700">
                    <DollarSign size={16} className="text-black" />
                    <span className="text-black text-md">{job.salary}</span>
                  </div>
                  
                  <div className="flex items-start gap-2 text-gray-700">
                    <User size={16} className="text-black mt-1" />
                    <div>
                      <span className="font-medium text-sm text-gray-700">Skills</span>
                      <div className="mt-1 flex flex-wrap gap-1">
                        {job.skills.slice(0, 3).map((skill, index) => (
                          <span key={index} className="bg-red-50 text-red-700 text-xs px-2 py-1 rounded border border-red-100">
                            {skill}
                          </span>
                        ))}
                        {job.skills.length > 3 && (
                          <span className="text-gray-400 text-xs">+{job.skills.length - 3} more</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {job.description}
                </p>

                {/* Learn More Link */}
                <div className="mb-4">
                  <button 
                    onClick={() => handleLearnMore(job)}
                    className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                  >
                    Learn More →
                  </button>
                </div>

                <div className="flex justify-center">
                  <button
                    className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2.5 rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center justify-center gap-1 font-medium text-sm mx-auto min-w-[130px] shadow-sm hover:shadow-md"
                    style={{ fontSize: '0.85rem', padding: '0.5rem 1.2rem' }}
                    onClick={() => router.push('/career/apply')}
                  >
                    <span>Apply Now</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      {showModal && selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay">
          <div className="absolute inset-0 bg-black/50" onClick={closeModal}></div>
          <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white rounded-t-2xl p-6 border-b border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedJob.title}</h2>
                  <div className="flex items-center gap-4 text-gray-600 text-sm">
                    <span className="flex items-center gap-1">
                      <MapPin size={16} />
                      {selectedJob.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase size={16} />
                      {selectedJob.experience}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign size={16} />
                      {selectedJob.salary}
                    </span>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Company Info */}
              <div className="bg-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dujw4np0d/image/upload/v1753342468/CRIT-3D_cpzr1n_ggj84n.avif"
                      alt="CRIT Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black">{selectedJob.company}</h3>
                    <p className="text-black text-sm pt-1">Posted on {new Date(selectedJob.postedDate).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>

              {/* Job Description */}
              <div>
                <h3 className="text-xl font-semibold text-red-400 mb-3 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-red-100 rounded-lg">
                    <Zap size={20} className="text-red-400" />
                  </span>
                  Job Description
                </h3>
                <p className="text-gray-900 leading-relaxed">{selectedJob.description}</p>
              </div>

              {/* Responsibilities */}
              <div>
                <h3 className="text-xl font-semibold text-red-400 mb-3 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-red-100 rounded-lg">
                    <Users size={20} className="text-red-400" />
                  </span>
                  Key Responsibilities
                </h3>
                <ul className="space-y-2">
                  {selectedJob.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-900">
                      <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="text-xl font-semibold text-red-400 mb-3 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-red-100 rounded-lg">
                    <Award size={20} className="text-red-400" />
                  </span>
                  Requirements
                </h3>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-900">
                      <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-xl font-semibold text-red-400 mb-3 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-red-100 rounded-lg">
                    <Star size={20} className="text-red-400" />
                  </span>
                  Required Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedJob.skills.map((skill, index) => (
                    <span key={index} className="bg-[#14213d] text-white px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-xl font-semibold text-red-400 mb-3 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-red-100 rounded-lg">
                    <Gift size={20} className="text-red-400" />
                  </span>
                  Benefits & Perks
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedJob.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-900">
                        <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Application Deadline */}
              <div className="bg-red-600/10 border border-red-600/20 rounded-lg p-4">
                <div className="flex items-center gap-2 text-gray-900">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-gray-100 rounded-lg">
                    <Calendar size={16} className="text-red-400" />
                  </span>
                  <span className="font-medium">Application Deadline:</span>
                  <span>{new Date(selectedJob.applicationDeadline).toLocaleDateString()}</span>
                </div>
              </div>

              {/* Apply Button */}
              <div className="flex justify-center pt-4">
                <button
                    className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-all duration-300 flex items-center gap-2 font-semibold text-sm"
                  onClick={() => router.push('/career/apply')}
                >
                  <span>Apply for this position</span>
                  <ArrowRight size={20} />
                </button>
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
                  stroke="#EAB308"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M40 20 Q250 8 460 20"
                  stroke="#EAB308"
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