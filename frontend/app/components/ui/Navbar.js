"use client";
 
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
 
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
 
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-4 pb-2 transition-colors duration-300 ${
      scrolled ? 'bg-[#1e2836]' : 'bg-[#0c1c3c]/80 backdrop-blur-md'
    }`}>
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4">
        {/* Brand */}
        <div className="relative w-40 h-15 md:w-56 md:h-15">
  <Image
    src="https://res.cloudinary.com/dubeuisom/image/upload/v1750767288/rzhsdjrfvdvuail1g1e5_kykx8g.avif"
    alt="CRIT INDIA Logo"
    fill
    className="object-contain"
    priority
  />
</div>

        {/* Navigation Links - Desktop */}
        <div className="hidden lg:flex items-center gap-8 mx-8 font-inria-serif">
          <Link
            href="/"
            className="text-white hover:text-[#d12222] transition-colors text-lg font-inria-serif"
            style={{ fontFamily: 'var(--font-inria-serif)' }}
          >
            Home
          </Link>
          <div className="relative group">
  <Link
    href="/products"
    className="text-white hover:text-[#d12222] transition-colors text-lg font-inria-serif"
    style={{ fontFamily: 'var(--font-inria-serif)' }}
  >
    Products
  </Link>
  
  {/* Dropdown Menu */}
  <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 rounded-lg shadow-xl border border-gray-700 z-50 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
  <a href="/products/sap-s4hana" className="block px-6 py-3 text-white hover:bg-gray-800 hover:text-[#3B82F6] transition-colors duration-200 border-b border-gray-700">
    SAP S/4HANA
  </a>
  <a href="/products/sap-ariba" className="block px-6 py-3 text-white hover:bg-gray-800 hover:text-[#3B82F6] transition-colors duration-200 border-b border-gray-700">
    SAP ARIBA
  </a>
  <a href="/products/success-factors" className="block px-6 py-3 text-white hover:bg-gray-800 hover:text-[#3B82F6] transition-colors duration-200 border-b border-gray-700">
    SAP Success Factors
  </a>
  <a href="/products/sap-hybris" className="block px-6 py-3 text-white hover:bg-gray-800 hover:text-[#3B82F6] transition-colors duration-200 border-b border-gray-700">
    SAP HYBRIS
  </a>
  <a href="/products/business-object" className="block px-6 py-3 text-white hover:bg-gray-800 hover:text-[#3B82F6] transition-colors duration-200 border-b border-gray-700">
    SAP Business Object
  </a>
  <a href="/products/sap-concur" className="block px-6 py-3 text-white hover:bg-gray-800 hover:text-[#3B82F6] transition-colors duration-200">
    SAP Concur
  </a>
</div>

</div>
<div className="relative group">
  <Link
    href="/services"
    className="text-white hover:text-[#d12222] transition-colors text-lg font-inria-serif"
    style={{ fontFamily: 'var(--font-inria-serif)' }}
  >
    Services
  </Link>

  <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 rounded-lg shadow-xl border border-gray-700 z-50 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
    <a href="/services/implementation" className="block px-6 py-3 text-white hover:bg-gray-800 hover:text-[#3B82F6] transition-colors duration-200 border-b border-gray-700">
      SAP Implementation Services
    </a>
    <a href="/services/rollout" className="block px-6 py-3 text-white hover:bg-gray-800 hover:text-[#3B82F6] transition-colors duration-200 border-b border-gray-700">
      SAP Roll Out Services
    </a>
    <a href="/services/support" className="block px-6 py-3 text-white hover:bg-gray-800 hover:text-[#3B82F6] transition-colors duration-200 border-b border-gray-700">
      SAP Support Services
    </a>
    <a href="/services/upgrade" className="block px-6 py-3 text-white hover:bg-gray-800 hover:text-[#3B82F6] transition-colors duration-200 border-b border-gray-700">
      SAP Upgrade Services
    </a>
    <a href="/services/integration" className="block px-6 py-3 text-white hover:bg-gray-800 hover:text-[#3B82F6] transition-colors duration-200 border-b border-gray-700">
      SAP Integration Services
    </a>
    <a href="/services/migration" className="block px-6 py-3 text-white hover:bg-gray-800 hover:text-[#3B82F6] transition-colors duration-200 border-b border-gray-700">
      SAP Migration Services
    </a>
    <a href="/services/automation" className="block px-6 py-3 text-white hover:bg-gray-800 hover:text-[#3B82F6] transition-colors duration-200 border-b border-gray-700">
      SAP Automation Services
    </a>
    <a href="/services/testing" className="block px-6 py-3 text-white hover:bg-gray-800 hover:text-[#3B82F6] transition-colors duration-200">
      SAP Testing Services
    </a>
  </div>
</div>

          <Link
            href="/careers"
            className="text-white hover:text-[#d12222] transition-colors text-lg font-inria-serif"
            style={{ fontFamily: 'var(--font-inria-serif)' }}
          >
            Careers
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-[#d12222] transition-colors text-lg font-inria-serif"
            style={{ fontFamily: 'var(--font-inria-serif)' }}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-[#d12222] transition-colors text-lg font-inria-serif"
            style={{ fontFamily: 'var(--font-inria-serif)' }}
          >
            Contact
          </Link>
        </div>
 
        {/* Right Section - Search and CTA */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Search Button/Input - Desktop */}
          <div className="hidden lg:flex items-center relative">
            {isSearchOpen ? (
              <div className="flex items-center bg-white/10 rounded-md px-2 py-1 w-64 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-white/70 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
                <input
                  type="text"
                  autoFocus
                  placeholder="Search..."
                  className="bg-transparent text-white outline-none w-full placeholder-white/60"
                  style={{ minWidth: 0 }}
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="ml-2 text-white hover:text-[#d12222] transition-colors"
                  tabIndex={-1}
                  aria-label="Close search"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ) : (
              <button
                className="p-2 rounded-md bg-white/10 text-white hover:bg-white/20 transition-colors"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Open search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            )}
          </div>
 
          {/* Theme Toggle Button */}
          <button
            onClick={() => setIsDark((prev) => !prev)}
            className="p-2 rounded-md bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 19.5V21M4.219 4.219l1.061 1.061M17.657 17.657l1.061 1.061M3 12h1.5M19.5 12H21M4.219 19.781l1.061-1.061M17.657 6.343l1.061-1.061M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
              </svg>
            )}
          </button>
 
          {/* CTA Button */}
          <button 
            className="bg-[#3B82F6] hover:bg-[#b51d1d] text-white px-2 py-1.5 md:px-4 md:py-2 rounded-md transition-colors text-xs md:text-base font-medium whitespace-nowrap font-inria-serif"
            style={{ fontFamily: 'var(--font-inria-serif)' }}
          >
            Get a Consultation
          </button>
 
          {/* Search Button - Mobile */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="lg:hidden text-white hover:text-[#d12222] transition-colors p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
 
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-[#d12222] transition-colors p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                }
              />
            </svg>
          </button>
        </div>
      </div>
 
      {/* Mobile Search Bar */}
      <div className={`lg:hidden ${isSearchOpen ? 'block' : 'hidden'} px-4 py-2 bg-black/95 backdrop-blur-md`}>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-white/10 text-white pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d12222] transition-all placeholder-white/50"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-white/70 absolute left-3 top-1/2 -translate-y-1/2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
 
      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-black/95 backdrop-blur-md`}>
        <div className="px-4 py-6 space-y-4 font-inria-serif">
          <Link
            href="/"
            className="block text-white hover:text-[#d12222] transition-colors text-lg font-inria-serif"
            style={{ fontFamily: 'var(--font-inria-serif)' }}
          >
            Home
          </Link>
          <Link
            href="/products"
            className="block text-white hover:text-[#d12222] transition-colors text-lg font-inria-serif"
            style={{ fontFamily: 'var(--font-inria-serif)' }}
          >
            Products
          </Link>
          <Link
            href="/services"
            className="block text-white hover:text-[#d12222] transition-colors text-lg font-inria-serif"
            style={{ fontFamily: 'var(--font-inria-serif)' }}
          >
            Services
          </Link>
          <Link
            href="/careers"
            className="block text-white hover:text-[#d12222] transition-colors text-lg font-inria-serif"
            style={{ fontFamily: 'var(--font-inria-serif)' }}
          >
            Careers
          </Link>
          <Link
            href="/about"
            className="block text-white hover:text-[#d12222] transition-colors text-lg font-inria-serif"
            style={{ fontFamily: 'var(--font-inria-serif)' }}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="block text-white hover:text-[#d12222] transition-colors text-lg font-inria-serif"
            style={{ fontFamily: 'var(--font-inria-serif)' }}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};
 
export default Navbar;