"use client";

import React, { useRef, useState } from 'react';
import { MapPin, Briefcase, Clock, User, ExternalLink, ArrowRight, X, DollarSign, Calendar, Users, Award, Zap } from 'lucide-react';
import Player from "lottie-react";
import { useRouter } from 'next/navigation';

const CareerPage = () => {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const fileInputRef = useRef(null);
  
  const jobListings = [
    {
      id: 1,
      title: "ReactJs Developer",
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
      company: "Codetentacles",
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
      company: "Codetentacles",
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
    <div className="min-h-screen p-20" style={{ backgroundColor: '#0C1C3C', color: 'white' }}>
      {/* Hero Section */}
      <section className="px-2 sm:px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-teal-600/20 rounded-2xl p-4 sm:p-6 text-center relative overflow-hidden">
            {/* Exploding Beams SVG Burst */}
            <style jsx>{`
@keyframes moveGradient {
  0% {
    stop-color: #a78bfa;
    stop-opacity: 1;
  }
  50% {
    stop-color: #38bdf8;
    stop-opacity: 1;
  }
  100% {
    stop-color: #a78bfa;
    stop-opacity: 1;
  }
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
            <svg
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
              width="340"
              height="340"
              viewBox="0 0 340 340"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ opacity: 0.18 }}
            >
              <defs>
                <linearGradient id="beam-gradient-animated" x1="170" y1="0" x2="170" y2="60" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#a78bfa">
                    <animate attributeName="stop-color" values="#a78bfa;#38bdf8;#a78bfa" dur="2s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="100%" stopColor="#38bdf8">
                    <animate attributeName="stop-color" values="#38bdf8;#a78bfa;#38bdf8" dur="2s" repeatCount="indefinite" />
                  </stop>
                </linearGradient>
              </defs>
              <g>
                {[...Array(24)].map((_, i) => (
                  <line
                    key={i}
                    x1="170"
                    y1="30"
                    x2="170"
                    y2="0"
                    stroke="url(#beam-gradient-animated)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    transform={`rotate(${(360 / 24) * i} 170 170)`}
                  />
                ))}
              </g>
              <circle cx="170" cy="170" r="60" fill="#6366f1" fillOpacity="0.12" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-teal-500/10 rounded-2xl"></div>
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl transform -translate-x-16 translate-y-16"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Looking for the Best IT Job?
              </h2>
              <p className="text-base md:text-lg mb-4 text-white/90 max-w-2xl mx-auto leading-relaxed">
                Join a team that thrives on innovation, creativity, and collaboration. At Codetentacles, we empower individuals to grow while building solutions that make an impact. Discover your next big opportunity today!
              </p>
              <button className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300 font-semibold text-sm linkedin-btn">
                <span>Visit us on LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-blue-500 linkedin-logo"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="px-2 sm:px-4 py-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobListings.map((job, idx) => (
              <div 
                key={job.id} 
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{job.title}</h3>
                  <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium">
                    {job.type}
                  </span>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin size={16} className="text-gray-400" />
                    <span className="text-white text-sm">{job.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-300">
                    <Briefcase size={16} className="text-gray-400" />
                    <span className="text-white text-sm">{job.experience}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-300">
                    <DollarSign size={16} className="text-gray-400" />
                    <span className="text-white text-sm font-medium">{job.salary}</span>
                  </div>
                  
                  <div className="flex items-start gap-2 text-gray-300">
                    <User size={16} className="text-gray-400 mt-1" />
                    <div>
                      <span className="font-medium text-sm text-gray-300">Skills</span>
                      <div className="mt-1 flex flex-wrap gap-1">
                        {job.skills.slice(0, 3).map((skill, index) => (
                          <span key={index} className="bg-gray-700/50 text-white text-xs px-2 py-1 rounded">
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

                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {job.description}
                </p>

                {/* Learn More Link */}
                <div className="mb-4">
                  <button 
                    onClick={() => handleLearnMore(job)}
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                  >
                    Learn More →
                  </button>
                </div>

                <div className="flex justify-center">
                  <button
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-1 font-semibold text-xs mx-auto text-xs min-w-[110px]"
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
          <div className="absolute inset-0 bg-black/60" onClick={closeModal}></div>
          <div className="relative bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gray-900 rounded-t-2xl p-6 border-b border-gray-700">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{selectedJob.title}</h2>
                  <div className="flex items-center gap-4 text-gray-300 text-sm">
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
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">C</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{selectedJob.company}</h3>
                    <p className="text-gray-400 text-sm">Posted on {new Date(selectedJob.postedDate).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>

              {/* Job Description */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <Zap size={20} className="text-blue-400" />
                  Job Description
                </h3>
                <p className="text-gray-300 leading-relaxed">{selectedJob.description}</p>
              </div>

              {/* Responsibilities */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <Users size={20} className="text-blue-400" />
                  Key Responsibilities
                </h3>
                <ul className="space-y-2">
                  {selectedJob.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <Award size={20} className="text-blue-400" />
                  Requirements
                </h3>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Required Skills</h3>
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
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <Award size={20} className="text-blue-400" />
                  Benefits & Perks
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedJob.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-300">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Application Deadline */}
              <div className="bg-blue-600/10 border border-blue-600/20 rounded-lg p-4">
                <div className="flex items-center gap-2 text-blue-300">
                  <Calendar size={16} />
                  <span className="font-medium">Application Deadline:</span>
                  <span>{new Date(selectedJob.applicationDeadline).toLocaleDateString()}</span>
                </div>
              </div>

              {/* Apply Button */}
              <div className="flex justify-center pt-4">
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 font-semibold text-sm"
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
      <section className="px-2 sm:px-5 py-7 sm:py-11" style={{ backgroundColor: '#0C1C3C' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 relative inline-block">
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
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
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
                  style={{ opacity: 0.18 }}
                >
                  <path>
                    <animate attributeName="d" dur="8s" repeatCount="indefinite"
                      values="M320,200Q320,280,240,320Q160,360,80,320Q0,280,0,200Q0,120,80,80Q160,40,240,80Q320,120,320,200Z;
                              M340,200Q340,280,260,320Q180,360,100,320Q20,280,20,200Q20,120,100,80Q180,40,260,80Q340,120,340,200Z;
                              M320,200Q320,280,240,320Q160,360,80,320Q0,280,0,200Q0,120,80,80Q160,40,240,80Q320,120,320,200Z" />
                  </path>
                </svg>
                {/* Card overlay and content */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-teal-500/10 rounded-2xl z-10"></div>
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
            <div className="bg-gray-800/50 rounded-2xl p-4 sm:p-8 border border-gray-700 h-full">
              <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Desired Position <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="e.g., React Developer"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Experience <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="e.g., 3+ years"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Current CTC <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="e.g., 10 LPA"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Write a message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows="4"
                      className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about yourself and your interests..."
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
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
                        <p className="text-white font-medium">{selectedFile ? selectedFile.name : 'Upload file'}</p>
                        <p className="text-gray-400 text-sm mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-6 sm:px-8 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
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