"use client";
 
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import CtaForm from './CtaForm';
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion";

const services = [
  {
    name: "SAP Implementation Services",
    link: "/services/implementation",
    },
  {
    name: "SAP RollOut Services",
    link: "/services/rollout",
    },
  {
    name: "SAP Support Services",
    link: "/services/support",
    },
  {
    name: "SAP Upgrade Services",
    link: "/services/upgrade",
    },
  {
    name: "SAP Integration Services",
    link: "/services/integration",
    },
  {
    name: "SAP Migration Services",
    link: "/services/migration",
    },
  {
    name: "SAP Automation Services",
    link: "/services/automation",
    },
  {
    name: "SAP Testing Services",
    link: "/services/testing",
    }
];

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

const MenuItem = ({ setActive, active, item, href, pathname, children }) => {
  const isHovered = active === item;
  const isCurrentPage = pathname === href;
  const hasDropdown = item === "Products" || item === "Services";
  return (
    <div 
      onMouseEnter={() => setActive(item)} 
      onMouseLeave={() => setActive(null)} 
      className="relative group"
    >
      <motion.a
        href={href}
        transition={{ duration: 0.3 }}
        className={`cursor-pointer text-lg px-2 font-mono relative transition-all duration-200
          before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-0.5 before:w-0 before:h-px before:bg-white before:transition-all before:duration-300
          hover:before:w-full hover:text-white
          ${isCurrentPage ? 'text-white !hover:text-white' : 'text-gray-300'}`}
      >
        <span className="inline-flex items-center gap-1 relative">
          {item}
          {hasDropdown && (
            <svg className={`w-4 h-4 ml-0.5 inline-block transition-colors duration-200 ${isCurrentPage ? 'text-white' : 'text-gray-400 group-hover:text-white'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          )}
          {isCurrentPage && (
            <motion.div
              layoutId="navbar-underline"
              className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-white"
              initial={false}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          )}
        </span>
      </motion.a>
      {isHovered && children && (
        <>
          {/* Invisible bridge to prevent hover gap */}
          <div className="absolute top-full left-0 right-0 h-2 bg-transparent" />
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={transition}
            className="absolute top-full left-1/2 transform -translate-x-1/2 z-50"
            onMouseEnter={() => setActive(item)}
            onMouseLeave={() => setActive(null)}
          >
            <motion.div
              transition={transition}
              layoutId="active"
              className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl min-w-[180px] min-h-[40px] flex items-center justify-center mt-2"
            >
              {/* Dropdown content can go here */}
              {children}
            </motion.div>
          </motion.div>
        </>
      )}
    </div>
  );
};

const Menu = ({ setActive, children }) => {
  return (
    <nav
      className="relative rounded-full border border-transparent bg-[#0c1c3c]/80 backdrop-blur-md shadow-input flex items-center justify-center space-x-8 px-8 py-3">
      {children}
    </nav>
  );
};

const ProductItem = ({ title, description, href }) => {
  return (
    <Link href={href} className="flex flex-col space-y-1 p-2 rounded-lg hover:bg-gray-800 transition-colors">
      <h4 className="text-base sm:text-lg md:text-xl font-medium text-white">
        {title}
      </h4>
      
    </Link>
  );
};

const ServiceItem = ({ title, description, href }) => {
  return (
    <Link href={href} className="flex flex-col space-y-1 p-2 rounded-lg hover:bg-gray-800 transition-colors">
      <h4 className="text-base sm:text-lg md:text-xl font-medium text-white">
        {title}
      </h4>
      
    </Link>
  );
};

const HoveredLink = ({ children, ...rest }) => {
  return (
    <Link
      {...rest}
      className="text-gray-300 hover:text-white transition-colors">
      {children}
    </Link>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCtaForm, setShowCtaForm] = useState(false);
  const [active, setActive] = useState(null);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  // Close CTA form when route changes
  useEffect(() => {
    setShowCtaForm(false);
  }, [pathname]);

  // Close CTA form when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showCtaForm && !event.target.closest('.cta-modal-content')) {
        setShowCtaForm(false);
      }
    };

    if (showCtaForm) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCtaForm]);

  // Debug mobile menu state
  useEffect(() => {
    console.log('Mobile menu state changed:', isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  // Fetch products from JSON file
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log('Fetching products from JSON...');
        const response = await fetch('/json/data/products.json');
        console.log('Response status:', response.status);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Products data received:', data);
        console.log('Products array:', data.products);
        
        setProducts(data.products || []);
        console.log('Products state set with', data.products?.length || 0, 'items');
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
      } finally {
        setLoading(false);
        console.log('Loading finished');
      }
    };

    fetchProducts();
  }, []);

  // Helper function to convert product name to URL slug
  const createSlug = (name) => {
    // Special case for SAP BusinessObjects
    if (name === "SAP BusinessObjects") {
      return "products/business-object";
    }
    
    return "products/" + name
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  // Helper function to convert service name to URL slug
  const createServiceSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/services/gi, '') // Remove "Services" from the name
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-') // Replace multiple dashes with single dash
      .trim()
      .replace(/-$/, '') // Remove trailing dash if exists
      + '-services';
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Debug products state
  useEffect(() => {
    console.log('Products state updated:', products);
    console.log('Products count:', products.length);
  }, [products]);
  
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[100vw] max-w-7xl backdrop-blur-xl shadow-2xl px-6 py-3 flex items-center justify-between rounded-full">
      {/* Logo and Brand */}
      <a href="/" className="flex items-center space-x-2">
      <div className="flex items-center">
        <div className="relative w-8 h-8">
          <Image
            src="https://res.cloudinary.com/dujw4np0d/image/upload/v1751005553/CRIT-3D_cpzr1n.png"
            alt="CRIT INDIA Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <span className="ml-2 font-bold text-lg sm:text-xl md:text-2xl text-white tracking-wide">CRIT INDIA</span>
      </div>
      </a>

      {/* Hamburger Icon (Mobile Only) */}
      <button
        className="lg:hidden flex items-center justify-center p-0.5 rounded-md text-white bg-[#0c1c3c]/80 hover:bg-[#0c1c3c] focus:outline-none focus:ring-2 focus:ring-blue-500 z-50"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? (
          <svg className="w-7 h-7" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-7 h-7" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Desktop Menu (hidden on mobile) */}
      <div className="flex-1 flex items-center justify-center gap-8 hidden lg:flex ">
        <MenuItem setActive={setActive} active={active} item="Home" href="/" pathname={pathname} />
        <MenuItem setActive={setActive} active={active} item="Products" href="/products" pathname={pathname}>
          {active === "Products" && (
            <div className="bg-[#0c1c3c]/95 shadow-lg rounded-xl p-2 min-w-[400px]">
              <div className="grid grid-cols-2 gap-2">
                {products.map((product, idx) => (
                  <Link
                    key={idx}
                    href={`/${product.slug}`}
                    className={`block px-4 py-2 rounded-md text-white font-medium hover:bg-blue-900/60 transition text-left ${idx === 0 ? 'font-bold' : ''}`}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Services" href="/services" pathname={pathname}>
          {active === "Services" && (
            <div className="bg-[#0c1c3c]/95 shadow-lg rounded-xl p-2 min-w-[400px]">
              <div className="grid grid-cols-2 gap-2">
                {services.map((service, idx) => (
                  <Link
                    key={idx}
                    href={`/${createServiceSlug(service.name)}`}
                    className={`block px-4 py-2 rounded-md text-white font-medium hover:bg-blue-900/60 transition text-left ${idx === 0 ? 'font-bold' : ''}`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Careers" href="/careers" pathname={pathname} />
        <MenuItem setActive={setActive} active={active} item="About" href="/about" pathname={pathname} />
        <MenuItem setActive={setActive} active={active} item="Contact" href="/contact" pathname={pathname} />
      </div>

      {/* Get Consultation Button (desktop only) */}
      <button
        onClick={() => setShowCtaForm(true)}
        className="hidden lg:block rounded-full px-5 py-2 font-semibold text-[#0c1c3c] bg-gray-100 shadow-lg border border-white/20 hover:brightness-110 hover:scale-105 transition-all duration-200 text-base relative overflow-hidden transmit-bar cursor-pointer"
      >
        <span className="relative z-10">Get Consultation</span>
      </button>
      
      {/* CTA Form Modal */}
      {showCtaForm && (
        <CtaForm onClose={() => setShowCtaForm(false)} />
      )}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0c1c3c]/95 backdrop-blur-lg flex flex-col h-screen lg:hidden px-1 py-1">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-2 py-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <img src="https://res.cloudinary.com/dujw4np0d/image/upload/v1751005553/CRIT-3D_cpzr1n.png" alt="Logo" className="w-8 h-8 rounded" />
              <span className="text-white font-bold text-base sm:text-lg md:text-xl">CRIT INDIA</span>
            </div>
            <button
              className="text-white p-2 rounded hover:bg-white/10 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {/* Menu Items */}
          <nav className="flex-1 min-h-0 overflow-y-auto px-4 py-6 flex flex-col gap-2">
            <a href="/" className="block text-white text-base sm:text-lg md:text-xl font-semibold rounded px-4 py-3 hover:bg-white/10 transition" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="/careers" className="block text-white text-base sm:text-lg md:text-xl font-semibold rounded px-4 py-3 hover:bg-white/10 transition" onClick={() => setIsMobileMenuOpen(false)}>Careers</a>
            <a href="/about" className="block text-white text-base sm:text-lg md:text-xl font-semibold rounded px-4 py-3 hover:bg-white/10 transition" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="/contact" className="block text-white text-base sm:text-lg md:text-xl font-semibold rounded px-4 py-3 hover:bg-white/10 transition" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            <div className="my-3 border-t border-white/10" />
            {/* Expandable Products */}
            <button
              className="w-full flex items-center justify-between text-white text-base sm:text-lg md:text-xl font-semibold rounded px-4 py-3 hover:bg-white/10 transition focus:outline-none"
              onClick={() => setMobileProductsOpen((open) => !open)}
              aria-expanded={mobileProductsOpen}
            >
              <span>Products</span>
              <svg className={`w-5 h-5 ml-2 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileProductsOpen && (
              <div className="bg-[#0c1c3c]/95 shadow-lg rounded-xl p-4 min-w-[300px]">
                <div className="grid grid-cols-2 gap-2">
                  {products.map((product, idx) => (
                    <Link
                      key={idx}
                      href={`/${product.slug}`}
                      className={`block px-4 py-2 rounded-md text-white font-medium hover:bg-blue-900/60 transition text-left ${idx === 0 ? 'font-bold' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {/* Expandable Services */}
            <button
              className="w-full flex items-center justify-between text-white text-base sm:text-lg md:text-xl font-semibold rounded px-4 py-3 hover:bg-white/10 transition focus:outline-none"
              onClick={() => setMobileServicesOpen((open) => !open)}
              aria-expanded={mobileServicesOpen}
            >
              <span>Services</span>
              <svg className={`w-5 h-5 ml-2 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div className="bg-[#0c1c3c]/95 shadow-lg rounded-xl p-4 min-w-[300px]">
                <div className="grid grid-cols-2 gap-2">
                  {services.map((service, idx) => (
                    <Link
                      key={idx}
                      href={`/${createServiceSlug(service.name)}`}
                      className={`block px-4 py-2 rounded-md text-white font-medium hover:bg-blue-900/60 transition text-left ${idx === 0 ? 'font-bold' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </nav>
          {/* CTA Button */}
          <div className="px-4 pb-6">
            <button
              onClick={() => { setShowCtaForm(true); setIsMobileMenuOpen(false); }}
              className="w-full rounded-full px-6 py-3 font-semibold text-white bg-gradient-to-r from-[#5062B9] via-[#3A4BA2] to-[#1B2859] shadow-lg border border-white/20 hover:brightness-110 hover:scale-105 transition-all duration-200 text-base"
            >
              Get Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
 
export default Navbar;