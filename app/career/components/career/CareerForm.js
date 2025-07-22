"use client";
import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Briefcase, Upload, ChevronRight, CheckCircle, User, Mail, Phone, Award, Calendar, Link, FileText } from 'lucide-react';

export default function ProfessionalJobApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    currentCTC: '',
    mobileNumber: '',
    yearOfExperience: '',
    skills: '',
    noticePeriod: '',
    linkedinProfile: '',
    cv: null
  });
  
  const [focusedField, setFocusedField] = useState('');
  const [completedFields, setCompletedFields] = useState(new Set());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isAuthorized, setIsAuthorized] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
    
    // Mark field as completed if it has content
    if (value && value.trim()) {
      setCompletedFields(prev => new Set([...prev, field]));
    } else {
      setCompletedFields(prev => {
        const newSet = new Set(prev);
        newSet.delete(field);
        return newSet;
      });
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, cv: file }));
      setCompletedFields(prev => new Set([...prev, 'cv']));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.currentCTC.trim()) newErrors.currentCTC = 'Current CTC is required';
    if (!formData.mobileNumber.trim()) newErrors.mobileNumber = 'Mobile number is required';
    if (!formData.yearOfExperience.trim()) newErrors.yearOfExperience = 'Experience is required';
    if (!formData.skills.trim()) newErrors.skills = 'Skills are required';
    if (!formData.noticePeriod) newErrors.noticePeriod = 'Notice period is required';
    if (!formData.linkedinProfile.trim()) newErrors.linkedinProfile = 'LinkedIn profile is required';
    if (!formData.cv) newErrors.cv = 'CV is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const progress = (completedFields.size / 9) * 100;

  const getFieldIcon = (field) => {
    const icons = {
      name: User,
      email: Mail,
      currentCTC: Award,
      mobileNumber: Phone,
      yearOfExperience: Calendar,
      skills: Briefcase,
      noticePeriod: Clock,
      linkedinProfile: Link,
      cv: FileText
    };
    return icons[field] || User;
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-2xl p-8 text-center max-w-md w-full transform animate-fade-in">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted Successfully</h2>
          <p className="text-gray-600 mb-6">Thank you for your interest in joining our team. We will review your application and get back to you within 3-5 business days.</p>
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div className="bg-green-600 h-1 rounded-full w-full transition-all duration-1000"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#0C1C3C' }}>
      {/* Professional Dynamic Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Enhanced Corporate Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        {/* Secondary Grid Pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)',
            backgroundSize: '25px 25px'
          }}></div>
        </div>
        {/* Business-Themed Floating Elements */}
        <div className="absolute top-1/2 left-0 w-10 h-10 opacity-12 animate-float-gentle -translate-y-1/2">
          <div className="w-full h-full bg-blue-300 rounded-full"></div>
        </div>
        <div className="absolute top-1/2 right-0 w-10 h-10 opacity-12 animate-float-gentle -translate-y-1/2">
          <div className="w-full h-full bg-slate-300 rounded-full"></div>
        </div>
        <div className="absolute top-20 left-20 w-8 h-8 opacity-12 animate-float">
          <div className="w-full h-full bg-blue-300 rounded-sm"></div>
        </div>
        <div className="absolute top-40 right-32 w-6 h-6 opacity-12 animate-float-delayed">
          <div className="w-full h-full bg-slate-300 rounded-full"></div>
        </div>
        <div className="absolute bottom-32 left-32 w-5 h-5 opacity-12 animate-float">
          <div className="w-full h-full bg-blue-300 rotate-45"></div>
        </div>
        <div className="absolute top-60 left-1/2 w-4 h-4 opacity-12 animate-float-delayed">
          <div className="w-full h-full bg-slate-300 rounded-sm"></div>
        </div>
        {/* Additional Business Elements */}
        <div className="absolute top-1/3 left-16 w-3 h-3 opacity-10 animate-float-gentle">
          <div className="w-full h-full bg-blue-400/40 rounded-full"></div>
        </div>
        <div className="absolute top-2/3 right-20 w-4 h-4 opacity-10 animate-float-gentle" style={{ animationDelay: '2s' }}>
          <div className="w-full h-full bg-slate-400/40 transform rotate-45"></div>
        </div>
        <div className="absolute bottom-1/5 left-1/3 w-3 h-3 opacity-10 animate-float-gentle" style={{ animationDelay: '4s' }}>
          <div className="w-full h-full bg-blue-400/40 rounded-sm"></div>
        </div>
        <div className="absolute top-1/5 right-1/3 w-2 h-2 opacity-10 animate-float-gentle" style={{ animationDelay: '6s' }}>
          <div className="w-full h-full bg-slate-400/40 rounded-full"></div>
        </div>
        {/* Corporate Chart-like Elements */}
        <div className="absolute top-24 left-1/4 w-12 h-8 opacity-8 animate-float-slow">
          <div className="flex items-end space-x-1 h-full">
            <div className="w-2 h-3 bg-blue-400/30 rounded-t-sm"></div>
            <div className="w-2 h-6 bg-blue-400/30 rounded-t-sm"></div>
            <div className="w-2 h-4 bg-blue-400/30 rounded-t-sm"></div>
            <div className="w-2 h-8 bg-blue-400/30 rounded-t-sm"></div>
          </div>
        </div>
        <div className="absolute bottom-24 right-1/4 w-12 h-8 opacity-8 animate-float-slow" style={{ animationDelay: '5s' }}>
          <div className="flex items-end space-x-1 h-full">
            <div className="w-2 h-5 bg-slate-400/30 rounded-t-sm"></div>
            <div className="w-2 h-3 bg-slate-400/30 rounded-t-sm"></div>
            <div className="w-2 h-7 bg-slate-400/30 rounded-t-sm"></div>
            <div className="w-2 h-4 bg-slate-400/30 rounded-t-sm"></div>
          </div>
        </div>
        {/* Enhanced Elegant Gradient Waves */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/8 to-transparent rounded-full filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-slate-500/8 to-transparent rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-gradient-to-tr from-blue-400/8 to-transparent rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '6s' }}></div>
          <div className="absolute top-1/2 left-1/6 w-64 h-64 bg-gradient-to-bl from-cyan-400/6 to-transparent rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '9s' }}></div>
          <div className="absolute bottom-1/3 right-1/6 w-88 h-88 bg-gradient-to-tr from-indigo-400/6 to-transparent rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '12s' }}></div>
        </div>
        {/* Layered Gradient Waves */}
        <div className="absolute top-0 left-0 w-full h-full opacity-15">
          <div className="absolute top-1/6 right-1/3 w-72 h-72 bg-gradient-to-bl from-blue-600/10 to-transparent rounded-full filter blur-2xl animate-wave-drift"></div>
          <div className="absolute bottom-1/6 left-1/3 w-64 h-64 bg-gradient-to-tr from-slate-600/10 to-transparent rounded-full filter blur-2xl animate-wave-drift" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-2/3 left-1/5 w-80 h-80 bg-gradient-to-br from-blue-400/8 to-transparent rounded-full filter blur-2xl animate-wave-drift" style={{ animationDelay: '8s' }}></div>
        </div>
        {/* Professional Circuit Lines */}
        <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-blue-400/25 to-transparent animate-slide-right"></div>
        <div className="absolute top-1/2 right-0 w-24 h-px bg-gradient-to-l from-transparent via-slate-400/25 to-transparent animate-slide-left"></div>
        <div className="absolute bottom-1/3 left-0 w-40 h-px bg-gradient-to-r from-transparent via-blue-400/25 to-transparent animate-slide-right" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 right-0 w-28 h-px bg-gradient-to-l from-transparent via-slate-400/25 to-transparent animate-slide-left" style={{ animationDelay: '4s' }}></div>
        {/* Additional Circuit Lines */}
        <div className="absolute top-1/8 left-0 w-36 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-slide-right" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-5/6 right-0 w-32 h-px bg-gradient-to-l from-transparent via-indigo-400/20 to-transparent animate-slide-left" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/6 left-0 w-28 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-slide-right" style={{ animationDelay: '5s' }}></div>
        {/* Vertical Tech Lines */}
        <div className="absolute top-0 left-1/6 w-px h-20 bg-gradient-to-b from-transparent via-blue-400/25 to-transparent animate-slide-down"></div>
        <div className="absolute top-0 right-1/4 w-px h-16 bg-gradient-to-b from-transparent via-slate-400/25 to-transparent animate-slide-down" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/3 w-px h-24 bg-gradient-to-t from-transparent via-blue-400/25 to-transparent animate-slide-up"></div>
        <div className="absolute bottom-0 right-1/3 w-px h-18 bg-gradient-to-t from-transparent via-slate-400/25 to-transparent animate-slide-up" style={{ animationDelay: '3s' }}></div>
        {/* Additional Vertical Lines */}
        <div className="absolute top-0 left-1/8 w-px h-16 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-slide-down" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 right-1/8 w-px h-20 bg-gradient-to-t from-transparent via-indigo-400/20 to-transparent animate-slide-up" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-0 left-3/4 w-px h-12 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-slide-down" style={{ animationDelay: '6s' }}></div>
        {/* Enhanced Data Points */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-blue-400/35 rounded-full animate-pulse-gentle"></div>
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-slate-400/35 rounded-full animate-pulse-gentle" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-blue-400/35 rounded-full animate-pulse-gentle" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-slate-400/35 rounded-full animate-pulse-gentle" style={{ animationDelay: '6s' }}></div>
        {/* Additional Data Points */}
        <div className="absolute top-1/5 left-1/3 w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse-gentle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/5 right-1/5 w-1.5 h-1.5 bg-indigo-400/30 rounded-full animate-pulse-gentle" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-3/4 left-1/6 w-1 h-1 bg-blue-400/30 rounded-full animate-pulse-gentle" style={{ animationDelay: '5s' }}></div>
        <div className="absolute bottom-2/3 right-2/3 w-2 h-2 bg-slate-400/30 rounded-full animate-pulse-gentle" style={{ animationDelay: '7s' }}></div>
        {/* Rotating Corporate Symbols */}
        <div className="absolute top-16 right-16 w-6 h-6 opacity-12">
          <div className="w-full h-full bg-blue-300/25 transform rotate-45 animate-spin-slow"></div>
        </div>
        <div className="absolute bottom-20 left-16 w-5 h-5 opacity-12">
          <div className="w-full h-full bg-slate-300/25 transform rotate-45 animate-spin-slow" style={{ animationDelay: '4s' }}></div>
        </div>
        <div className="absolute top-1/2 left-12 w-4 h-4 opacity-12">
          <div className="w-full h-full bg-blue-300/25 transform rotate-45 animate-spin-slow" style={{ animationDelay: '8s' }}></div>
        </div>
        {/* Additional Corporate Symbols */}
        <div className="absolute top-1/4 right-12 w-5 h-5 opacity-10">
          <div className="w-full h-full border-2 border-blue-400/20 rounded-full animate-spin-reverse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="absolute bottom-1/4 left-1/4 w-4 h-4 opacity-10">
          <div className="w-full h-full border-2 border-slate-400/20 rounded-sm animate-spin-reverse" style={{ animationDelay: '6s' }}></div>
        </div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 opacity-10">
          <div className="w-full h-full border-2 border-cyan-400/20 rounded-full animate-spin-reverse" style={{ animationDelay: '10s' }}></div>
        </div>
        {/* Hexagonal Corporate Patterns */}
        <div className="absolute top-32 left-1/3 w-8 h-8 opacity-8">
          <div className="w-full h-full bg-blue-400/15 clip-hexagon animate-rotate-slow"></div>
        </div>
        <div className="absolute bottom-32 right-1/3 w-6 h-6 opacity-8">
          <div className="w-full h-full bg-slate-400/15 clip-hexagon animate-rotate-slow" style={{ animationDelay: '5s' }}></div>
        </div>
        <div className="absolute top-1/2 right-16 w-5 h-5 opacity-8">
          <div className="w-full h-full bg-indigo-400/15 clip-hexagon animate-rotate-slow" style={{ animationDelay: '10s' }}></div>
        </div>
        {/* Business Network Lines */}
        <div className="absolute top-1/3 left-1/5 w-24 h-px bg-gradient-to-r from-blue-400/15 via-blue-400/25 to-blue-400/15 animate-network-pulse"></div>
        <div className="absolute top-2/3 right-1/5 w-20 h-px bg-gradient-to-l from-slate-400/15 via-slate-400/25 to-slate-400/15 animate-network-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-16 h-px bg-gradient-to-r from-cyan-400/15 via-cyan-400/25 to-cyan-400/15 animate-network-pulse" style={{ animationDelay: '4s' }}></div>
        {/* Subtle Connection Nodes */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-blue-400/40 rounded-full animate-node-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-slate-400/40 rounded-full animate-node-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-cyan-400/40 rounded-full animate-node-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-indigo-400/40 rounded-full animate-node-pulse" style={{ animationDelay: '5s' }}></div>
      </div>

      {/* Header */}
      <div className="bg-[#142850]/80 backdrop-blur-sm shadow-sm border-b border-[#223A5F] relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Job Application</h1>
              <p className="text-gray-300 mt-1">Complete all fields to submit your application</p>
            </div>
            {/* Progress Indicator */}
            <div className="hidden md:flex items-center space-x-3">
              <div className="text-sm text-gray-300">Progress</div>
              <div className="w-32 bg-[#223A5F]/50 rounded-full h-2 backdrop-blur-sm">
                <div 
                  className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full transition-all duration-500 ease-out shadow-lg"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="text-sm font-medium text-white">{Math.round(progress)}%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-1 relative z-10">
        {/* Job Details Card */}
        <div className="bg-[#223A5F]/80 backdrop-blur-sm rounded-xl shadow-lg border border-[#223A5F]/50 p-1 mb-2 hover:shadow-xl transition-all duration-300 hover:bg-[#223A5F]/90">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Business Developer</h2>
              <div className="flex flex-wrap gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>Pune, Maharashtra</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>Full-time</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-blue-400" />
                  <span>1+ Years Experience</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-900/80 to-blue-800/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
              <span className="text-blue-200 font-medium">Open Position</span>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-[#223A5F]/80 backdrop-blur-sm rounded-xl shadow-lg border border-[#223A5F]/50 p-2 hover:shadow-xl transition-all duration-300">
          <div className="mb-1">
            <h3 className="text-xl font-semibold text-white mb-2">Application Details</h3>
            <p className="text-gray-300">Please fill in all the required information below</p>
          </div>

          <div className="space-y-4">
            {/* Personal Information Section */}
            <div>
              <h4 className="text-lg font-medium text-white mb-2 flex items-center">
                <User className="w-5 h-5 mr-2 text-blue-400" />
                Personal Information
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full px-4 py-3 border border-gray-400 rounded-lg text-gray-300 placeholder-gray-400 bg-transparent focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 ${
                        errors.name ? 'border-red-400' : 'border-gray-400'
                      } ${focusedField === 'name' ? 'transform scale-[1.02] shadow-lg' : ''}`}
                      placeholder="Enter your full name"
                    />
                    {completedFields.has('name') && !errors.name && (
                      <CheckCircle className="absolute right-3 top-3 w-5 h-5 text-green-400" />
                    )}
                  </div>
                  {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full px-4 py-3 border border-gray-400 rounded-lg text-gray-300 placeholder-gray-400 bg-transparent focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 ${
                        errors.email ? 'border-red-400' : 'border-gray-400'
                      } ${focusedField === 'email' ? 'transform scale-[1.02] shadow-lg' : ''}`}
                      placeholder="Enter your email address"
                    />
                    {completedFields.has('email') && !errors.email && (
                      <CheckCircle className="absolute right-3 top-3 w-5 h-5 text-green-500" />
                    )}
                  </div>
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                {/* Mobile Number */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      value={formData.mobileNumber}
                      onChange={(e) => {
                        const value = e.target.value.replace(/[^0-9]/g, '');
                        handleInputChange('mobileNumber', value);
                      }}
                      onFocus={() => setFocusedField('mobileNumber')}
                      onBlur={() => setFocusedField('')}
                      inputMode="numeric"
                      pattern="[0-9]*"
                      className={`w-full px-4 py-3 border border-gray-400 rounded-lg text-gray-300 placeholder-gray-400 bg-transparent focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 ${
                        errors.mobileNumber ? 'border-red-400' : 'border-gray-400'
                      } ${focusedField === 'mobileNumber' ? 'transform scale-[1.02] shadow-lg' : ''}`}
                      placeholder="Enter your mobile number"
                    />
                    {completedFields.has('mobileNumber') && !errors.mobileNumber && (
                      <CheckCircle className="absolute right-3 top-3 w-5 h-5 text-green-500" />
                    )}
                  </div>
                  {errors.mobileNumber && <p className="text-red-500 text-sm">{errors.mobileNumber}</p>}
                </div>

                {/* LinkedIn Profile */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white">
                    LinkedIn Profile URL <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="url"
                      value={formData.linkedinProfile}
                      onChange={(e) => handleInputChange('linkedinProfile', e.target.value)}
                      onFocus={() => setFocusedField('linkedinProfile')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full px-4 py-3 border border-gray-400 rounded-lg text-gray-300 placeholder-gray-400 bg-transparent focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 ${
                        errors.linkedinProfile ? 'border-red-400' : 'border-gray-400'
                      } ${focusedField === 'linkedinProfile' ? 'transform scale-[1.02] shadow-lg' : ''}`}
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                    {completedFields.has('linkedinProfile') && !errors.linkedinProfile && (
                      <CheckCircle className="absolute right-3 top-3 w-5 h-5 text-green-500" />
                    )}
                  </div>
                  {errors.linkedinProfile && <p className="text-red-500 text-sm">{errors.linkedinProfile}</p>}
                </div>
              </div>
            </div>

            {/* Professional Information Section */}
            <div>
              <h4 className="text-lg font-medium text-white mb-2 flex items-center">
                <Briefcase className="w-5 h-5 mr-2 text-blue-400" />
                Professional Information
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Current CTC */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white">
                    Current CTC <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.currentCTC}
                      onChange={(e) => handleInputChange('currentCTC', e.target.value)}
                      onFocus={() => setFocusedField('currentCTC')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full max-w-[160px] px-4 py-3 border border-gray-400 rounded-lg text-gray-300 placeholder-gray-400 bg-transparent focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 ${
                        errors.currentCTC ? 'border-red-400' : 'border-gray-400'
                      } ${focusedField === 'currentCTC' ? 'transform scale-[1.02]' : ''}`}
                      placeholder="e.g., 5 LPA"
                    />
                    {completedFields.has('currentCTC') && !errors.currentCTC && (
                      <CheckCircle className="absolute right-3 top-3 w-5 h-5 text-green-500" />
                    )}
                  </div>
                  {errors.currentCTC && <p className="text-red-500 text-sm">{errors.currentCTC}</p>}
                </div>

                {/* Years of Experience */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white">
                    Years of Experience <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.yearOfExperience}
                      onChange={(e) => handleInputChange('yearOfExperience', e.target.value)}
                      onFocus={() => setFocusedField('yearOfExperience')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full max-w-[160px] px-4 py-3 border border-gray-400 rounded-lg text-gray-300 placeholder-gray-400 bg-transparent focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 ${
                        errors.yearOfExperience ? 'border-red-400' : 'border-gray-400'
                      } ${focusedField === 'yearOfExperience' ? 'transform scale-[1.02]' : ''}`}
                      placeholder="e.g., 2 years"
                    />
                    {completedFields.has('yearOfExperience') && !errors.yearOfExperience && (
                      <CheckCircle className="absolute right-3 top-3 w-5 h-5 text-green-500" />
                    )}
                  </div>
                  {errors.yearOfExperience && <p className="text-red-500 text-sm">{errors.yearOfExperience}</p>}
                </div>

                {/* Skills */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white">
                    Key Skills <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.skills}
                      onChange={(e) => handleInputChange('skills', e.target.value)}
                      onFocus={() => setFocusedField('skills')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full px-4 py-3 border border-gray-400 rounded-lg text-gray-300 placeholder-gray-400 bg-transparent focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 ${
                        errors.skills ? 'border-red-400' : 'border-gray-400'
                      } ${focusedField === 'skills' ? 'transform scale-[1.02] shadow-lg' : ''}`}
                      placeholder="e.g., Business Development, Sales, Marketing"
                    />
                    {completedFields.has('skills') && !errors.skills && (
                      <CheckCircle className="absolute right-3 top-3 w-5 h-5 text-green-500" />
                    )}
                  </div>
                  {errors.skills && <p className="text-red-500 text-sm">{errors.skills}</p>}
                </div>

                {/* Notice Period */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white">
                    Notice Period <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      value={formData.noticePeriod}
                      onChange={(e) => handleInputChange('noticePeriod', e.target.value)}
                      onFocus={() => setFocusedField('noticePeriod')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full px-4 py-3 border border-gray-400 rounded-lg text-gray-300 bg-transparent focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 ${
                        errors.noticePeriod ? 'border-red-400' : 'border-gray-400'
                      } ${focusedField === 'noticePeriod' ? 'transform scale-[1.02] shadow-lg' : ''}`}
                    >
                      <option value="">Select Notice Period</option>
                      <option value="immediate">Immediate</option>
                      <option value="15days">15 Days</option>
                      <option value="30days">30 Days</option>
                      <option value="60days">60 Days</option>
                      <option value="90days">90 Days</option>
                    </select>
                    {completedFields.has('noticePeriod') && !errors.noticePeriod && (
                      <CheckCircle className="absolute right-8 top-3 w-5 h-5 text-green-500" />
                    )}
                  </div>
                  {errors.noticePeriod && <p className="text-red-500 text-sm">{errors.noticePeriod}</p>}
                </div>
              </div>
            </div>

            {/* Documents Section */}
            <div>
              <h4 className="text-lg font-medium text-white mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-blue-400" />
                Documents
              </h4>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white">
                  Upload Your Resume/CV <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="cv-upload"
                  />
                  <label
                    htmlFor="cv-upload"
                    className={`flex items-center justify-center w-full max-w-xs mx-auto px-3 py-4 border-2 border-dashed rounded-lg cursor-pointer transition-all duration-200 bg-transparent hover:border-blue-400 ${
                      errors.cv ? 'border-red-400' : 'border-gray-400'
                    } ${focusedField === 'cv' ? 'border-blue-400' : ''}`}
                  >
                    <div className="text-center">
                      <Upload className="w-5 h-5 mx-auto mb-1 text-gray-300" />
                      <p className="text-xs text-gray-300">
                        {formData.cv ? (
                          <span className="text-blue-400 font-medium">{formData.cv.name}</span>
                        ) : (
                          <span className="font-medium">Upload file</span>
                        )}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                    </div>
                  </label>
                  {completedFields.has('cv') && !errors.cv && (
                    <CheckCircle className="absolute right-3 top-3 w-5 h-5 text-green-500" />
                  )}
                </div>
                {errors.cv && <p className="text-red-500 text-sm">{errors.cv}</p>}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-1 pt-1 border-t border-gray-300/20">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="authorize-info"
                  checked={isAuthorized}
                  onChange={e => setIsAuthorized(e.target.checked)}
                  className="mr-2 accent-blue-600 w-4 h-4"
                />
                <label htmlFor="authorize-info" className="text-sm text-gray-300 select-none cursor-pointer">
                  I authorize that the above information is correct.
                </label>
              </div>
              <button
                onClick={handleSubmit}
                disabled={isSubmitting || !isAuthorized}
                className="px-5 py-2 bg-blue-600 text-white font-medium rounded-lg focus:ring-4 focus:ring-blue-200 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Processing Application...
                  </div>
                ) : (
                  'Submit'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.1; }
        }
        
        @keyframes pulse-gentle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        
        @keyframes slide-right {
          0% { transform: translateX(-100px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100px); opacity: 0; }
        }
        
        @keyframes slide-left {
          0% { transform: translateX(100px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(-100px); opacity: 0; }
        }
        
        @keyframes slide-down {
          0% { transform: translateY(-50px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(50px); opacity: 0; }
        }
        
        @keyframes slide-up {
          0% { transform: translateY(50px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-50px); opacity: 0; }
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        
        .animate-pulse-gentle {
          animation: pulse-gentle 3s ease-in-out infinite;
        }
        
        .animate-slide-right {
          animation: slide-right 6s ease-in-out infinite;
        }
        
        .animate-slide-left {
          animation: slide-left 6s ease-in-out infinite;
        }
        
        .animate-slide-down {
          animation: slide-down 4s ease-in-out infinite;
        }
        
        .animate-slide-up {
          animation: slide-up 4s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}