'use client';

import { useState } from 'react';
import { X, CheckCircle, Users, Award, Globe } from 'lucide-react';
import ModalPortal from './ModalPortal';

const countryOptions = [
  { 
    code: '+91', 
    name: 'India', 
    minLength: 10, 
    maxLength: 11, 
    placeholder: '10-11 digits',
    pattern: /^[6-9]\d{9}$/,
    formatExample: '9876543210'
  },
  { 
    code: '+1', 
    name: 'USA', 
    minLength: 10, 
    maxLength: 10, 
    placeholder: '10 digits',
    pattern: /^[2-9]\d{2}[2-9]\d{2}\d{4}$/,
    formatExample: '4151234567'
  },
  { 
    code: '+44', 
    name: 'UK', 
    minLength: 10, 
    maxLength: 11, 
    placeholder: '10-11 digits',
    pattern: /^[1-9]\d{8,9}$/,
    formatExample: '7123456789'
  },
  { 
    code: '+61', 
    name: 'Australia', 
    minLength: 9, 
    maxLength: 9, 
    placeholder: '9 digits',
    pattern: /^[2-478]\d{8}$/,
    formatExample: '412345678'
  },
  { 
    code: '+971', 
    name: 'UAE', 
    minLength: 9, 
    maxLength: 9, 
    placeholder: '9 digits',
    pattern: /^[5]\d{8}$/,
    formatExample: '501234567'
  },
  { 
    code: '+49', 
    name: 'Germany', 
    minLength: 10, 
    maxLength: 11, 
    placeholder: '10-11 digits',
    pattern: /^[1-9]\d{9,10}$/,
    formatExample: '15123456789'
  },
  { 
    code: '+33', 
    name: 'France', 
    minLength: 9, 
    maxLength: 9, 
    placeholder: '9 digits',
    pattern: /^[1-9]\d{8}$/,
    formatExample: '612345678'
  },
  { 
    code: '+65', 
    name: 'Singapore', 
    minLength: 8, 
    maxLength: 8, 
    placeholder: '8 digits',
    pattern: /^[89]\d{7}$/,
    formatExample: '91234567'
  },
  { 
    code: '+81', 
    name: 'Japan', 
    minLength: 10, 
    maxLength: 10, 
    placeholder: '10 digits',
    pattern: /^[789]0\d{8}$/,
    formatExample: '9012345678'
  },
  { 
    code: '+7', 
    name: 'Russia', 
    minLength: 10, 
    maxLength: 10, 
    placeholder: '10 digits',
    pattern: /^[9]\d{9}$/,
    formatExample: '9123456789'
  },
  { 
    code: '+86', 
    name: 'China', 
    minLength: 11, 
    maxLength: 11, 
    placeholder: '11 digits',
    pattern: /^1[3-9]\d{9}$/,
    formatExample: '13800138000'
  },
  { 
    code: '+966', 
    name: 'Saudi Arabia', 
    minLength: 9, 
    maxLength: 9, 
    placeholder: '9 digits',
    pattern: /^[5]\d{8}$/,
    formatExample: '512345678'
  },
  { 
    code: '+880', 
    name: 'Bangladesh', 
    minLength: 10, 
    maxLength: 10, 
    placeholder: '10 digits',
    pattern: /^1[3-9]\d{8}$/,
    formatExample: '1712345678'
  },
  { 
    code: '+92', 
    name: 'Pakistan', 
    minLength: 10, 
    maxLength: 10, 
    placeholder: '10 digits',
    pattern: /^3[0-9]\d{8}$/,
    formatExample: '3012345678'
  },
  { 
    code: '+62', 
    name: 'Indonesia', 
    minLength: 9, 
    maxLength: 12, 
    placeholder: '9-12 digits',
    pattern: /^8[1-9]\d{7,10}$/,
    formatExample: '812345678'
  },
  { 
    code: '+234', 
    name: 'Nigeria', 
    minLength: 10, 
    maxLength: 11, 
    placeholder: '10-11 digits',
    pattern: /^[789]\d{9,10}$/,
    formatExample: '8031234567'
  },
  { 
    code: '+55', 
    name: 'Brazil', 
    minLength: 10, 
    maxLength: 11, 
    placeholder: '10-11 digits',
    pattern: /^[1-9]\d{9,10}$/,
    formatExample: '11987654321'
  },
  { 
    code: '+60', 
    name: 'Malaysia', 
    minLength: 9, 
    maxLength: 10, 
    placeholder: '9-10 digits',
    pattern: /^1[0-9]\d{7,8}$/,
    formatExample: '123456789'
  },
  { 
    code: '+27', 
    name: 'South Africa', 
    minLength: 9, 
    maxLength: 9, 
    placeholder: '9 digits',
    pattern: /^[6-8]\d{8}$/,
    formatExample: '721234567'
  },
  { 
    code: '+39', 
    name: 'Italy', 
    minLength: 9, 
    maxLength: 10, 
    placeholder: '9-10 digits',
    pattern: /^3[0-9]\d{7,8}$/,
    formatExample: '3123456789'
  }
];

const freeEmailProviders = [
  'gmail.com', 'yahoo.com', 'hotmail.com', 'aol.com', 'outlook.com', 'icloud.com', 'mail.com', 'protonmail.com', 'zoho.com', 'yandex.com', 'gmx.com', 'rediffmail.com', 'live.com', 'msn.com', 'ymail.com', 'inbox.com', 'me.com', 'fastmail.com', 'hushmail.com', 'rocketmail.com', 'qq.com', 'naver.com', '163.com', '126.com', 'sina.com', 'yeah.net', 'googlemail.com'
];

export default function CritIndiaCtaForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    countryCode: '+91',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(true);
  const [phoneValidationState, setPhoneValidationState] = useState(''); // 'valid', 'invalid', 'typing'

  const serviceOptions = [
    'SAP Implementation',
    'SAP Rollout Services',
    'Sap Support Services',
    'SAP Upgrade Services',
    'SAP Migration Services',
    'SAP Integration Services',
    'SAP Automation Services',
    'Other',
  ];

  const getCurrentCountry = () => {
    return countryOptions.find((c) => c.code === formData.countryCode);
  };

  const validatePhone = (phone, countryCode) => {
    const selectedCountry = countryOptions.find((c) => c.code === countryCode);
    if (!selectedCountry) return { isValid: false, message: 'Invalid country selected' };

    const { minLength, maxLength, pattern, name } = selectedCountry;

    // Check if phone contains only digits
    if (!/^\d+$/.test(phone)) {
      return { 
        isValid: false, 
        message: 'Phone number must contain only digits' 
      };
    }

    // Check length
    if (phone.length < minLength || phone.length > maxLength) {
      const lengthText = minLength === maxLength 
        ? `exactly ${minLength} digits` 
        : `${minLength}-${maxLength} digits`;
      return { 
        isValid: false, 
        message: `${name} phone numbers require ${lengthText}` 
      };
    }

    // Check country-specific pattern
    if (pattern && !pattern.test(phone)) {
      return { 
        isValid: false, 
        message: `Invalid ${name} phone number format` 
      };
    }

    return { isValid: true, message: '' };
  };

  const validateEmail = (email) => {
    // Stricter email regex
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(email)) {
      return { isValid: false, message: 'Please enter a valid email address' };
    }
    // Disallow free email providers
    const domain = email.split('@')[1]?.toLowerCase();
    if (freeEmailProviders.includes(domain)) {
      return { isValid: false, message: 'Please use your business email address' };
    }
    return { isValid: true, message: '' };
  };

  const validate = () => {
    const errs = {};
    // Name: required, only letters/spaces, min 2 chars
    if (!formData.name.trim()) {
      errs.name = 'Name is required';
    } else if (!/^[A-Za-z\s]{2,}$/.test(formData.name.trim())) {
      errs.name = 'Name must be at least 2 letters and contain only letters and spaces';
    }

    // Email: required, stricter regex, no free providers
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else {
      const emailValidation = validateEmail(formData.email.trim());
      if (!emailValidation.isValid) {
        errs.email = emailValidation.message;
      }
    }

    // Company: optional, but if provided, min 2 chars
    if (formData.company && formData.company.trim().length > 0 && formData.company.trim().length < 2) {
      errs.company = 'Company name must be at least 2 characters';
    }

    // Phone: required, country-specific, and not all same digit
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else {
      const phoneValidation = validatePhone(formData.phone, formData.countryCode);
      if (!phoneValidation.isValid) {
        errs.phone = phoneValidation.message;
      } else if (/^(\d)\1+$/.test(formData.phone)) {
        errs.phone = 'Phone number cannot be all the same digit';
      }
    }

    // Service: required
    if (!formData.service) errs.service = 'Please select a service';

    // Message: required, min 15 chars
    if (!formData.message.trim()) {
      errs.message = 'Please tell us how we can help you';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Message must be at least 15 characters';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });

    // Real-time phone validation
    if (name === 'phone' || name === 'countryCode') {
      const phoneValue = name === 'phone' ? value : formData.phone;
      const countryValue = name === 'countryCode' ? value : formData.countryCode;
      
      if (phoneValue.trim()) {
        const phoneValidation = validatePhone(phoneValue, countryValue);
        if (phoneValidation.isValid) {
          setPhoneValidationState('valid');
        } else {
          setPhoneValidationState('invalid');
        }
      } else {
        setPhoneValidationState('');
      }
    }
  };

  const handlePhoneInput = (e) => {
    // Only allow digits
    const value = e.target.value.replace(/\D/g, '');
    setFormData({ ...formData, phone: value });
    setErrors({ ...errors, phone: '' });

    // Real-time validation
    if (value.trim()) {
      const phoneValidation = validatePhone(value, formData.countryCode);
      if (phoneValidation.isValid) {
        setPhoneValidationState('valid');
      } else {
        setPhoneValidationState('invalid');
      }
    } else {
      setPhoneValidationState('');
    }
  };

  const handleClose = () => {
    setVisible(false);
    if (onClose) onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting...');
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      console.log('Validation errors:', validationErrors);
      setErrors(validationErrors);
      return;
    }
    const fullPhone = `${formData.countryCode}${formData.phone}`;
    console.log('Submitted:', { ...formData, phone: fullPhone });
    setSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 3000);
  };

  if (!visible) return null;

  const currentCountry = getCurrentCountry();
  const phoneInputClass = `w-full px-3 py-2 rounded border bg-slate-800 text-white placeholder-gray-400 focus:outline-none transition-colors text-sm ${
    phoneValidationState === 'valid' 
      ? 'border-green-500 focus:border-green-400' 
      : phoneValidationState === 'invalid' 
        ? 'border-red-500 focus:border-red-400' 
        : 'border-slate-600 focus:border-blue-500'
  }`;

  return (
    <>
      <ModalPortal>
      <div className="fixed inset-0 z-50 flex justify-center items-center p-1 sm:p-3 bg-black/60 backdrop-blur-sm">
        <div className="cta-modal-content w-full max-w-[98vw] sm:max-w-2xl max-h-[95vh] overflow-y-auto h-fit bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-xl shadow-2xl border border-blue-800 animate-in slide-in-from-bottom-4 duration-500 ease-out relative">
          {/* Header Section */}
          <div className="sticky top-0 z-20 p-2 sm:p-4 text-white bg-gradient-to-r from-[#1B2433] to-[#0974C7]">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 text-white hover:text-red-200 transition-all duration-200 hover:scale-110 hover:rotate-90"
              aria-label="Close consultation form"
            >
              <X size={20} />
            </button>
            <div className="flex justify-center">
              <div className="flex items-center gap-2 sm:gap-3 mb-1">
                <div>
                  <h2 className="text-base sm:text-xl font-bold">Get Expert SAP Consultation</h2>
                  <p className="text-red-100 text-xs">Transform your business with CRIT India's SAP excellence</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Benefits */}
            <div className="w-full lg:w-2/5 p-2 sm:p-4 bg-gradient-to-b from-slate-800 to-slate-900 text-white">
              <h3 className="text-xs sm:text-base font-semibold mb-2 sm:mb-3 text-blue-400">Why Choose CRIT India?</h3>
              <div className="space-y-2 mb-2 sm:mb-3">
                <div className="flex items-start gap-2">
                  <Users className="text-blue-400 mt-0.5 flex-shrink-0" size={14} />
                  <div>
                    <h4 className="font-medium text-blue-300 text-xs">500+ Enterprise Clients</h4>
                    <p className="text-xs text-gray-400">Trusted by leading businesses</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Award className="text-blue-400 mt-0.5 flex-shrink-0" size={14} />
                  <div>
                    <h4 className="font-medium text-blue-300 text-xs">Proven SAP Expertise</h4>
                    <p className="text-xs text-gray-400">15+ years experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Globe className="text-blue-400 mt-0.5 flex-shrink-0" size={14} />
                  <div>
                    <h4 className="font-medium text-blue-300 text-xs">Global Reach</h4>
                    <p className="text-xs text-gray-400">Multiple countries support</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-700 rounded p-2 border border-slate-600">
                <p className="text-xs text-blue-300 font-medium mb-1">Free Consultation:</p>
                <ul className="text-xs text-gray-300 space-y-0">
                  <li>• Readiness assessment</li>
                  <li>• Solution roadmap</li>
                  <li>• Timeline & cost estimate</li>
                </ul>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-3/5 p-2 sm:p-4 bg-slate-900 text-white">
              {submitted ? (
                <div className="text-center py-6">
                  <CheckCircle className="text-green-400 mx-auto mb-2" size={40} />
                  <h3 className="text-base sm:text-lg font-bold text-green-400 mb-1">Thank You!</h3>
                  <p className="text-gray-300 mb-2 text-xs sm:text-sm">Our SAP specialists will contact you within 24 hours.</p>
                  <p className="text-xs text-gray-400">This window will close automatically...</p>
                </div>
              ) : (
                <form className="space-y-2.5" onSubmit={handleSubmit} autoComplete="off">
                  <h3 className="text-xs sm:text-base font-semibold text-blue-400 mb-2 sm:mb-3">Schedule Your Free Consultation</h3>
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name *"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded border border-slate-600 bg-slate-800 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors text-sm"
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-0.5">{errors.name}</p>}
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Business Email *"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded border border-slate-600 bg-slate-800 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors text-sm"
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-0.5">{errors.email}</p>}
                    </div>
                  </div>
                  {/* Company */}
                  <div>
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded border border-slate-600 bg-slate-800 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors text-sm"
                    />
                  </div>
                  {/* Phone with Country */}
                  <div className="space-y-1">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="bg-slate-800 border border-slate-600 text-white px-2 py-2 rounded focus:border-blue-500 focus:outline-none text-sm"
                      >
                        {countryOptions.map((c) => (
                          <option key={c.code} value={c.code} className="bg-slate-800">
                            {c.name} ({c.code})
                          </option>
                        ))}
                      </select>
                      <div className="flex-1 relative">
                        <input
                          type="tel"
                          name="phone"
                          placeholder={`Phone Number (${currentCountry?.placeholder}) *`}
                          value={formData.phone}
                          onChange={handlePhoneInput}
                          className={phoneInputClass}
                        />
                        {phoneValidationState === 'valid' && (
                          <CheckCircle className="absolute right-2 top-2.5 text-green-500" size={16} />
                        )}
                      </div>
                    </div>
                    {currentCountry && (
                      <p className="text-xs text-gray-400">
                        Format: {currentCountry.formatExample} ({currentCountry.placeholder})
                      </p>
                    )}
                    {errors.phone && <p className="text-red-400 text-xs">{errors.phone}</p>}
                  </div>
                  {/* Service Selection */}
                  <div>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded border border-slate-600 bg-slate-800 text-white focus:border-blue-500 focus:outline-none text-sm"
                    >
                      <option value="">Select Service Interest *</option>
                      {serviceOptions.map((service) => (
                        <option key={service} value={service} className="bg-slate-800">
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && <p className="text-red-400 text-xs mt-0.5">{errors.service}</p>}
                  </div>
                  {/* Message */}
                  <div>
                    <textarea
                      name="message"
                      placeholder="Tell us about your business requirements and challenges *"
                      value={formData.message}
                      onChange={handleChange}
                      rows="2"
                      className="w-full px-3 py-2 rounded border border-slate-600 bg-slate-800 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors resize-none text-sm"
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-0.5">{errors.message}</p>}
                  </div>
                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-blue-400/20 border border-blue-400 hover:bg-blue-500/30 hover:border-blue-600 text-blue-300 hover:text-white font-semibold py-2.5 rounded transition-all duration-200 transform hover:scale-[1.01] shadow-md text-sm backdrop-blur-md"
                  >
                    Get Your Free SAP Consultation
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-1">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      </ModalPortal>
    </>
  );
}