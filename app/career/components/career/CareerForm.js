"use client";
import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Briefcase, Upload, ChevronRight, CheckCircle, User, Mail, Phone, Award, Calendar, Link, FileText } from 'lucide-react';
import { useRouter } from 'next/navigation';

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
  const [showPositions, setShowPositions] = useState(false);
  const openPositions = [
    { name: "ReactJs Developer", path: "/career/apply/reactjs-developer" },
    { name: "Business Developer", path: "/career/apply/business-developer" },
    // Add more as needed
  ];
  const router = useRouter();

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
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('currentCTC', formData.currentCTC);
      formDataToSend.append('mobileNumber', formData.mobileNumber);
      formDataToSend.append('yearOfExperience', formData.yearOfExperience);
      formDataToSend.append('skills', formData.skills);
      formDataToSend.append('noticePeriod', formData.noticePeriod);
      formDataToSend.append('linkedinProfile', formData.linkedinProfile);
      formDataToSend.append('position', 'General Application');
      if (formData.cv) {
        formDataToSend.append('cv', formData.cv);
      }
      
      console.log('Sending career form data to backend');
      
      const response = await fetch('http://localhost:5000/api/career/submit', {
        method: 'POST',
        body: formDataToSend
      });
      
      const result = await response.json();
      
      if (result.success) {
        console.log('Career form submitted successfully:', result);
        setIsSubmitting(false);
        setSubmitted(true);
      } else {
        console.error('Career form submission failed:', result);
        alert('Form submission failed. Please try again.');
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Error submitting career form:', error);
      alert('Error submitting form. Please try again.');
      setIsSubmitting(false);
    }
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
    <div className="min-h-screen relative overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-300 via-white to-gray-400 border-[#223A5F] relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-red-600 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-red-100 rounded-lg">
                  <Briefcase size={28} className="text-red-400" />
                </span>
                Job Application
              </h1>
              <p className="text-gray-900 mt-1">Complete all fields to submit your application</p>
            </div>
            {/* Progress Indicator */}
            <div className="hidden md:flex items-center space-x-3">
              <div className="text-sm text-gray-900">Progress</div>
              <div className="w-32 bg-[#223A5F]/50 rounded-full h-2 backdrop-blur-sm">
                <div 
                  className="bg-gradient-to-r from-gray-400 to-cyan-400 h-2 rounded-full transition-all duration-500 ease-out shadow-lg"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="text-sm font-medium text-gray-900">{Math.round(progress)}%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-1 relative z-10">
        {/* Job Details Card */}
        <div className="bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg p-4">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Business Developer</h2>
              <div className="flex flex-wrap gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-900" />
                  <span>Pune, Maharashtra</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-900" />
                  <span>Full-time</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-gray-900" />
                  <span>1+ Years Experience</span>
                </div>
              </div>
            </div>
            <div className="relative inline-block">
              <button
                type="button"
                className="bg-gray-500 text-white px-4 py-2 rounded-lg transition-all duration-200"
              >
                Open Positions
              </button>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-gradient-to-r from-gray-200 via-white to-gray-300 border-[#223A5F] relative z-10 p-2 hover:shadow-xl transition-all duration-300">
          <div className="mb-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Application Details</h3>
            <p className="text-gray-600">Please fill in all the required information below</p>
          </div>

          <div className="space-y-4">
            {/* Personal Information Section */}
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-2 flex items-center">
                <User className="w-5 h-5 mr-2 text-gray-900" />
                Personal Information
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-600">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full px-4 py-3 border border-gray-400 rounded-lg text-gray-900 placeholder-gray-400 bg-transparent focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 ${
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
                  <label className="block text-sm font-medium text-gray-600">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full px-4 py-3 border border-gray-400 rounded-lg text-gray-900 placeholder-gray-400 bg-transparent focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 ${
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
                  <label className="block text-sm font-medium text-gray-600">
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
                      className={`w-full px-4 py-3 border border-gray-400 rounded-lg text-gray-900 placeholder-gray-400 bg-transparent focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 ${
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
                  <label className="block text-sm font-medium text-gray-600">
                    LinkedIn Profile URL <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="url"
                      value={formData.linkedinProfile}
                      onChange={(e) => handleInputChange('linkedinProfile', e.target.value)}
                      onFocus={() => setFocusedField('linkedinProfile')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full px-4 py-3 border border-gray-400 rounded-lg text-gray-900 placeholder-gray-400 bg-transparent focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 ${
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
              <h4 className="text-lg font-medium text-gray-900 mb-2 flex items-center">
                <Briefcase className="w-5 h-5 mr-2 text-gray-900" />
                Professional Information
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Current CTC */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-600">
                    Current CTC <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.currentCTC}
                      onChange={(e) => handleInputChange('currentCTC', e.target.value)}
                      onFocus={() => setFocusedField('currentCTC')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full max-w-[160px] px-4 py-3 border border-gray-400 rounded-lg text-gray-900 placeholder-gray-400 bg-transparent focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 ${
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
                  <label className="block text-sm font-medium text-gray-900">
                    Years of Experience <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.yearOfExperience}
                      onChange={(e) => handleInputChange('yearOfExperience', e.target.value)}
                      onFocus={() => setFocusedField('yearOfExperience')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full max-w-[160px] px-4 py-3 border border-gray-400 rounded-lg text-gray-900 placeholder-gray-400 bg-transparent focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 ${
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
                  <label className="block text-sm font-medium text-gray-600">
                    Key Skills <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.skills}
                      onChange={(e) => handleInputChange('skills', e.target.value)}
                      onFocus={() => setFocusedField('skills')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full px-4 py-3 border border-gray-400 rounded-lg text-gray-900 placeholder-gray-400 bg-transparent focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 ${
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
                  <label className="block text-sm font-medium text-gray-600">
                    Notice Period <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      value={formData.noticePeriod}
                      onChange={(e) => handleInputChange('noticePeriod', e.target.value)}
                      onFocus={() => setFocusedField('noticePeriod')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full px-4 py-3 border border-gray-400 rounded-lg text-gray-900 bg-transparent focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 ${
                        errors.noticePeriod ? 'border-red-400' : 'border-gray-400'
                      } ${focusedField === 'noticePeriod' ? 'transform scale-[1.02] shadow-lg' : ''}`}
                    >
                      <option value="" className="text-gray-600">Select Notice Period</option>
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
              <h4 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-gray-900" />
                Documents
              </h4>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-600">
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
                          <span className="font-medium text-gray-600">Upload file</span>
                        )}
                      </p>
                      <p className="text-xs text-gray-600 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
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
          <div className="border-t  pb-2  border-gray-300/30">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="authorize-info"
                  checked={isAuthorized}
                  onChange={e => setIsAuthorized(e.target.checked)}
                  className="mr-2 accent-blue-600 w-4 h-4"
                />
                <label htmlFor="authorize-info" className="text-sm text-gray-600 select-none cursor-pointer">
                  I authorize that the above information is correct.
                </label>
              </div>
              <button
                onClick={handleSubmit}
                disabled={isSubmitting || !isAuthorized}
                className="px-5 py-2 bg-gray-900 text-white font-medium rounded-lg focus:ring-4 focus:ring-red-200 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center ">
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
      
    </div>
  );
}