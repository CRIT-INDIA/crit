'use client';

import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const countryData = [
  { code: '+91', name: 'India', flag: '🇮🇳', length: 10 },
  { code: '+1', name: 'USA', flag: '🇺🇸', length: 10 },
  { code: '+44', name: 'UK', flag: '🇬🇧', length: 10 },
  { code: '+81', name: 'Japan', flag: '🇯🇵', length: 10 },
  { code: '+61', name: 'Australia', flag: '🇦🇺', length: 9 },
  { code: '+49', name: 'Germany', flag: '🇩🇪', length: 11 },
  { code: '+33', name: 'France', flag: '🇫🇷', length: 9 },
  { code: '+86', name: 'China', flag: '🇨🇳', length: 11 },
  { code: '+39', name: 'Italy', flag: '🇮🇹', length: 10 },
  { code: '+7', name: 'Russia', flag: '🇷🇺', length: 10 },
  { code: '+34', name: 'Spain', flag: '🇪🇸', length: 9 },
  { code: '+55', name: 'Brazil', flag: '🇧🇷', length: 11 },
  { code: '+52', name: 'Mexico', flag: '🇲🇽', length: 10 },
  { code: '+82', name: 'South Korea', flag: '🇰🇷', length: 10 },
  { code: '+971', name: 'UAE', flag: '🇦🇪', length: 9 },
  { code: '+27', name: 'South Africa', flag: '🇿🇦', length: 9 },
  { code: '+90', name: 'Turkey', flag: '🇹🇷', length: 10 },
  { code: '+46', name: 'Sweden', flag: '🇸🇪', length: 9 },
  { code: '+31', name: 'Netherlands', flag: '🇳🇱', length: 9 },
  { code: '+62', name: 'Indonesia', flag: '🇮🇩', length: 10 },
];

export default function ContactPage() {
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [formStatus, setFormStatus] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryData[0]);

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const expectedLength = selectedCountry.length;
    if (/^\d{0,15}$/.test(value)) {
      setPhone(value);
      if (value.length === expectedLength || value.length === 0) {
        setPhoneError('');
      } else {
        setPhoneError(`Phone number must be exactly ${expectedLength} digits for ${selectedCountry.name}`);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const expectedLength = selectedCountry.length;
    if (phone.length !== expectedLength) {
      setPhoneError(`Phone number must be exactly ${expectedLength} digits for ${selectedCountry.name}`);
      return;
    }

    setFormStatus('Message successfully sent!');
    setShowPopup(true);
    setPhone('');
    setPhoneError('');

    setTimeout(() => {
      setFormStatus('');
      setShowPopup(false);
    }, 4000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#041836] via-[#0a0f1a] to-black text-white flex flex-col items-center justify-center p-6 relative space-y-16">
      <div className="w-full max-w-7xl grid md:grid-cols-2 gap-16">
        {/* Left section */}
        <motion.div
          className="space-y-8 pr-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold relative w-fit group cursor-pointer">
            Contact Information
            <span className="absolute left-0 -bottom-1 h-1 w-0 bg-[#D12222] transition-all duration-300 group-hover:w-full"></span>
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Feel free to reach out to us using any of the contact methods below.
          </p>

          <div className="space-y-8">
            <InfoItem icon={<MapPin className="w-6 h-6" />} title="Our Office" content="Pune, Maharashtra" />
            <InfoItem icon={<Mail className="w-6 h-6" />} title="Email Us" content="" sub="For general inquiries" />
            <InfoItem icon={<Phone className="w-6 h-6" />} title="Call Us" content="+91 89560 01555" sub="Mon–Sat 9:30am–6:30pm" />
            <InfoItem icon={<Clock className="w-6 h-6" />} title="Working Hours" content="Mon–Sat 9:30am–6:30pm" sub="Sunday Closed" />
          </div>
        </motion.div>

        {/* Right section */}
        <motion.div
          className="bg-[#0f1b2e] p-8 rounded-xl shadow-2xl border border-[#1f2f49]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Send Us a Message</h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Your Name *" placeholder="Enter your full name" />
              <Input label="Email Address *" placeholder="Enter your email" type="email" />
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1 text-Blue">Phone Number</label>
                <div className="flex gap-2 items-center">
                  <select
                    value={selectedCountry.code}
                    onChange={(e) => setSelectedCountry(countryData.find((c) => c.code === e.target.value))}
                    className="p-3 bg-black border border-gray-700 rounded-md text-white"
                  >
                    {countryData.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.flag} {country.name} ({country.code})
                      </option>
                    ))}
                  </select>
                  <div className="relative w-full">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xl">{selectedCountry.flag}</span>
                    <input
                      type="tel"
                      value={phone}
                      onChange={handlePhoneChange}
                      placeholder={`Enter ${selectedCountry.length}-digit number`}
                      className="w-full pl-10 p-3 bg-black border border-gray-700 rounded-md text-white"
                    />
                  </div>
                </div>
                {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
              </div>
              <Input label="Company Name" placeholder="Enter your company name" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-Blue">Your Message *</label>
              <textarea
                placeholder="Tell us about your project or inquiry"
                className="w-full p-3 bg-black border border-gray-700 rounded-md text-white resize-none"
                rows="5"
              />
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-[#258aff] to-[#041836] hover:from-[#369aff] hover:to-[#0e2548] transition px-6 py-3 flex items-center gap-2 rounded-md text-white font-semibold shadow-lg hover:scale-105 duration-300"
            >
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>

      {/* Embedded Map */}
      <div className="w-full max-w-5xl aspect-video mt-8 border border-[#1f2f49] rounded-xl overflow-hidden shadow-xl">
        <iframe
          src="https://www.google.com/maps?q=Atorix+IT+Company,+4th+Floor,+Radhika+Avenue,+Near+Jagtap+Dairy+Circle,+Highway,+Wakad+-+Bhosari+BRTS+Rd,+Beside+Savitribai+Phule+Park,+Pimple+Nilakh,+Pune,+Maharashtra+411027&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
/>

      </div>

      {/* Floating Call Button */}
      <a
        href="tel:+918956001555"
        className="fixed bottom-5 right-5 bg-[#258aff] hover:bg-[#369aff] rounded-full w-14 h-14 flex items-center justify-center shadow-xl animate-bounce hover:animate-none transition"
        title="Call Now"
      >
        <Phone className="text-white w-6 h-6" />
      </a>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#0f1b2e] border border-green-500 px-10 py-6 rounded-lg shadow-2xl text-green-400 text-2xl font-bold"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              ✅ {formStatus}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

function InfoItem({ icon, title, content, sub }) {
  return (
    <div className="group flex items-start gap-5 bg-[#0e1a2f] hover:bg-[#18253d] p-4 rounded-lg transition duration-300 hover:scale-[1.02] shadow hover:shadow-md cursor-pointer">
      <div className="border border-[#258aff] text-[#258aff] rounded-full p-3">
        {icon}
      </div>
      <div className="space-y-1">
        <h4 className="text-lg font-semibold text-[#258aff] group-hover:text-[#D12222] transition duration-300">{title}</h4>
        <p className="text-gray-300 leading-relaxed">{content}</p>
        {sub && <p className="text-sm text-gray-400">{sub}</p>}
      </div>
    </div>
  );
}

function Input({ label, placeholder, type = 'text', value, onChange, error }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1 text-Blue">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-3 bg-black border border-gray-700 rounded-md text-white"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
