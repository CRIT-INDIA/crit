import React, { useState, useEffect } from 'react';

const ServicesGrid = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [filterPosition, setFilterPosition] = useState({ left: 0, width: 0 });
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const categories = [
    { id: 'all', label: 'All', icon: '🎯', color: '#dc2626' },
    { id: 'analytics', label: 'Analytics', icon: '📊', color: '#ef4444' },
    { id: 'integration', label: 'Integration', icon: '🔗', color: '#f87171' },
    { id: 'finance', label: 'Finance', icon: '💰', color: '#dc2626' },
    { id: 'logistics', label: 'Logistics', icon: '📦', color: '#991b1b' }
  ];

  const extensions = [
    {
        id: 1,
        icon: { type: 'img', url: 'https://res.cloudinary.com/duz9xipfm/image/upload/v1751005882/icons8-rocket-64_u9psqx.png' },
        name: "SAP Implementation Services",
        description: "Professional sap implementation services designed to optimize your business processes and maximize ROI.",
        link: "/services/implementation",
        category: "integration",
        color: "#dc2626",
        tags: ["Implementation", "ERP", "Business"]
      },
      {
        id: 2,
        icon: { type: 'img', url: 'https://res.cloudinary.com/duz9xipfm/image/upload/v1751005441/icons8-globe-100_v27ffj.png' },
        name: "SAP Roll Out Services",
        description: "Professional sap roll out services designed to optimize your business processes and maximize ROI.",
        link: "/sap-rollout-services",
        category: "integration",
        color: "#ef4444",
        tags: ["Roll out", "Global", "Deployment"]
      },
      {
        id: 3,
        icon: { type: 'img', url: 'https://res.cloudinary.com/duz9xipfm/image/upload/v1751005368/icons8-support-100_mi1gat.png' },
        name: "SAP Support Services",
        description: "Professional sap support services designed to optimize your business processes and maximize ROI.",
        link: "/sap-support-services",
        category: "finance",
        color: "#f87171",
        tags: ["Support", "Maintenance", "Help"]
      },
      {
        id: 4,
        icon: { type: 'img', url: 'https://res.cloudinary.com/duz9xipfm/image/upload/v1751005286/icons8-upgrade-96_ursgya.png' },
        name: "SAP Upgrade Services",
        description: "Professional sap upgrade services designed to optimize your business processes and maximize ROI.",
        link: "/sap-upgrade-services",
        category: "finance",
        color: "#dc2626",
        tags: ["Upgrade", "Migration", "Modernization"]
      },
      {
        id: 5,
        icon: { type: 'img', url: 'https://res.cloudinary.com/duz9xipfm/image/upload/v1751005760/icons8-integration-80_c0ug69.png' },
       name: "SAP Integration Services",
        description: "Professional sap integration services designed to optimize your business processes and maximize ROI.",
        link: "/sap-integration-services",
        category: "integration",
        color: "#ef4444",
        tags: ["Integration", "API", "Connectivity"]
      },
      {
        id: 6,
        icon: { type: 'img', url: 'https://res.cloudinary.com/duz9xipfm/image/upload/v1751005703/icons8-migration-64_kgr8tx.png' },
       name: "SAP Migration Services",
        description: "Professional sap migration services designed to optimize your business processes and maximize ROI.",
        link: "/sap-migration-services",
        category: "logistics",
        color: "#f87171",
        tags: ["Migration", "Data", "Transfer"]
      },
      {
        id: 7,
        icon: { type: 'img', url: 'https://res.cloudinary.com/duz9xipfm/image/upload/v1751005595/icons8-automation-80_zccrcv.png' },
        name: "SAP Automation Services",
        description: "Professional sap automation services designed to optimize your business processes and maximize ROI.",
        link: "/sap-automation-services",
        category: "analytics",
        color: "#dc2626",
        tags: ["Automation", "RPA", "Efficiency"]
      },
      {
        id: 8,
        icon: { type: 'img', url: 'https://res.cloudinary.com/duz9xipfm/image/upload/v1751005506/icons8-testing-100_xsgqf9.png' },
       name: "SAP Testing Services",
        description: "Professional sap testing services designed to optimize your business processes and maximize ROI.",
        link: "/sap-testing-services ",
        category: "logistics",
        color: "#ef4444",
        tags: ["Testing", "QA", "Quality"]
      },
  ];

  const filteredExtensions = activeCategory === 'all' 
    ? extensions 
    : extensions.filter(ext => ext.category === activeCategory);

  const activeCount = categories.find(cat => cat.id === activeCategory)?.count || 0;
  const activeColor = categories.find(cat => cat.id === activeCategory)?.color || '#dc2626';

  useEffect(() => {
    // Animate filter appearance
    setIsFilterVisible(true);
    
    // Initialize filter indicator position for the active category
    const activeButton = document.querySelector(`.filter-btn[data-category="${activeCategory}"]`);
    if (activeButton) {
      const container = activeButton.parentElement;
      const scrollLeft = container.scrollLeft;
      const rect = activeButton.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const left = rect.left - containerRect.left + scrollLeft;
      
      setFilterPosition({
        left: left,
        width: rect.width
      });
    }
  }, [activeCategory]);

  const handleCategoryClick = (category, event) => {
    const button = event.currentTarget;
    const container = button.parentElement;
    
    // Get the scroll position of the container
    const scrollLeft = container.scrollLeft;
    const rect = button.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    
    // Calculate the position relative to the container, accounting for scroll
    const left = rect.left - containerRect.left + scrollLeft;
    
    setFilterPosition({
      left: left,
      width: rect.width
    });
    
    setActiveCategory(category.id);
    
    // Scroll the button into view if needed
    button.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .extension-showcase {
          padding: 40px 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          position: relative;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 1;
        }

        .header-section {
          text-align: center;
          margin-bottom: 32px;
        }

        .section-title {
          font-size: 56px;
          font-weight: 800;
          margin-bottom: 20px;
          color: #0a0a0a;
          letter-spacing: -0.02em;
          line-height: 1.1;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .gradient-text {
          background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: 20px;
          color: #64748b;
          margin-bottom: 24px;
          line-height: 1.6;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          .section-title {
            font-size: 32px;
            margin-bottom: 16px;
          }
          
          .section-subtitle {
            font-size: 16px;
            padding: 0 16px;
            margin-bottom: 20px;
          }
          
          .container {
            padding: 0 16px;
          }
        }
        
        @media (max-width: 480px) {
          .section-title {
            font-size: 28px;
          }
          
          .section-subtitle {
            font-size: 14px;
          }
        }

        /* Innovative Filter Design */
        .filter-container {
          display: flex;
          justify-content: center;
          margin-bottom: 24px;
          opacity: ${isFilterVisible ? '1' : '0'};
          transform: translateY(${isFilterVisible ? '0' : '20px'});
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .category-filters {
          display: flex;
          gap: 2px;
          padding: 4px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          box-shadow: 0 4px 24px rgba(220, 38, 38, 0.1);
          position: relative;
          border: 1px solid rgba(220, 38, 38, 0.1);
          flex-wrap: wrap;
          justify-content: center;
        }

        .filter-indicator {
          position: absolute;
          top: 6px;
          height: calc(100% - 12px);
          background: ${activeColor};
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          left: ${filterPosition.left}px;
          width: ${filterPosition.width}px;
          opacity: 0.1;
        }

        .filter-btn {
          padding: 8px 16px;
          border: none;
          background: transparent;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #64748b;
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
        }

        /* Mobile responsive filter styles */
        @media (max-width: 1024px) {
          /* Hide the filter indicator on mobile */
          .filter-indicator {
            display: none;
          }

          /* Mobile filter container */
          .filter-container {
            padding: 0 16px;
            position: relative;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE and Edge */
          }
          
          .filter-container::-webkit-scrollbar {
            display: none; /* Hide scrollbar for Chrome, Safari and Opera */
          }
          
          .category-filters {
            width: max-content;
            min-width: 100%;
            position: relative;
            padding: 4px;
            gap: 4px;
          }
          
          /* Mobile filter buttons */
          .filter-btn {
            padding: 8px 16px;
            font-size: 13px;
            gap: 6px;
            border: 1px solid #e5e7eb;
            background: white;
            border-radius: 8px;
            margin: 0 2px;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          }
          
          .filter-btn.active {
            color: #4b5563;
            font-weight: 500;
            background: #f9fafb;
            border-color: #d1d5db;
          }
          
          .filter-btn .filter-count {
            background: #f3f4f6;
            color: #4b5563;
            border-radius: 10px;
            padding: 0 6px;
            font-size: 12px;
            height: 20px;
            min-width: 20px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }
          
          .filter-icon {
            font-size: 16px;
          }
          
          /* Adjustments for smaller screens */
          @media (max-width: 500px) {
            .filter-btn {
              padding: 6px 12px;
              font-size: 12px;
            }
            
            .filter-icon {
              font-size: 14px;
            }
          }
        }
        
        @media (max-width: 480px) {
          .filter-btn {
            padding: 6px 12px;
            font-size: 11px;
            gap: 4px;
          }
          
          .filter-icon {
            font-size: 14px;
          }
        }

        .filter-btn:hover {
          color: #dc2626;
        }

        .filter-btn.active {
          color: ${activeColor};
          font-weight: 600;
        }

        .filter-icon {
          font-size: 16px;
          transition: transform 0.3s ease;
        }

        .filter-btn:hover .filter-icon {
          transform: scale(1.2);
        }

        .filter-btn.active .filter-icon {
          animation: pulse 2s infinite;
        }

        .filter-count {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 24px;
          height: 24px;
          padding: 0 6px;
          background: rgba(220, 38, 38, 0.1);
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
          transition: all 0.3s ease;
          color: #dc2626;
        }

        .filter-btn.active .filter-count {
          background: ${activeColor};
          color: white;
          transform: scale(1.1);
        }

        /* Active Category Stats */
        .active-stats {
          text-align: center;
          margin-bottom: 16px;
          opacity: 0.8;
        }

        .active-stats-text {
          font-size: 14px;
          color: #64748b;
        }

        .active-stats-number {
          font-weight: 600;
          color: ${activeColor};
          font-size: 16px;
        }

        /* Extension Cards */
        .extensions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 16px;
          margin-bottom: 32px;
        }

        .extension-card {
          background: white;
          border-radius: 16px;
          padding: 28px;
          border: 1px solid #fecaca;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
          animation: slideIn 0.6s ease-out forwards;
          animation-delay: calc(var(--index) * 0.05s);
          opacity: 0;
        }

        .extension-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--card-color);
          transform: scaleX(0);
          transition: transform 0.3s ease;
          transform-origin: left;
        }

        .extension-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 20px 40px rgba(220, 38, 38, 0.15), 0 10px 20px rgba(220, 38, 38, 0.1);
          border-color: #f87171;
          background: linear-gradient(135deg, #ffffff 0%, #fef2f2 100%);
        }

        .extension-card:hover::before {
          transform: scaleX(1);
        }

        .card-header {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 16px;
        }

        .extension-icon {
          font-size: 40px;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fef2f2;
          border-radius: 12px;
          flex-shrink: 0;
        }

        .extension-info {
          flex: 1;
        }

        .extension-name {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 4px;
          color: #0a0a0a;
          line-height: 1.3;
        }

        .extension-description {
          font-size: 14px;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .extension-tags {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }

        .tag {
          font-size: 12px;
          padding: 4px 10px;
          background: #fef2f2;
          color: #dc2626;
          border-radius: 6px;
          font-weight: 500;
        }

        /* Footer */
        .footer-section {
          text-align: center;
        }

        .view-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          background: #dc2626;
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .view-all-btn:hover {
          background: #991b1b;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(220, 38, 38, 0.2);
        }

        .arrow-icon {
          transition: transform 0.2s ease;
        }

        .view-all-btn:hover .arrow-icon {
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 40px;
          }
          
          .section-subtitle {
            font-size: 18px;
          }
          
          .extensions-grid {
            grid-template-columns: 1fr;
          }

          .category-filters {
            flex-wrap: wrap;
            gap: 8px;
          }

          .filter-btn {
            padding: 10px 16px;
            font-size: 13px;
          }

          .filter-icon {
            font-size: 16px;
          }
        }
      `}</style>

      <section className="extension-showcase">
      <div className="relative z-10 text-center sm:mb-12 px-4 sm:px-1">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 inline-block relative">
    <span className="text-black">Our </span>
    <span className="text-red-500">Services</span>
   <svg className="mx-auto my-0" style={{marginTop: '-4px'}} width="160" height="18" viewBox="0 0 220 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 18 Q 110 8, 215 14" stroke="#dc2626" strokeWidth="4" strokeLinecap="round" fill="none"/>
  <path d="M15 21 Q 120 15, 200 18" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" fill="none"/>
</svg>
  </h1>
      <p className="text-base sm:text-lg text-black max-w-3xl mx-auto px-2 sm:px-0">
        Comprehensive SAP solutions tailored to transform your business operations and drive digital excellence
      </p>
    </div>
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-red-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-red-300/10 rounded-full blur-2xl" />
        
        <div className="container">
          

          <div className="filter-container">
            <div className="category-filters">
              <div className="filter-indicator" />
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={(e) => handleCategoryClick(category, e)}
                  ref={el => {
                    if (el && activeCategory === category.id && filterPosition.width === 0) {
                      const rect = el.getBoundingClientRect();
                      const containerRect = el.parentElement.getBoundingClientRect();
                      setFilterPosition({
                        left: rect.left - containerRect.left,
                        width: rect.width
                      });
                    }
                  }}
                >
                  <span className="filter-icon">{category.icon}</span>
                  <span>{category.label}</span>

                </button>
              ))}
            </div>
          </div>

          <div className="extensions-grid">
            {filteredExtensions.map((extension, index) => (
              <div 
                key={extension.id} 
                className="extension-card"
                style={{
                  '--card-color': extension.color,
                  '--index': index
                }}
                onMouseEnter={() => setHoveredCard(extension.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="card-header">
                  <div className="extension-icon">
                    {extension.icon && typeof extension.icon === 'object' && extension.icon.type === 'img' ? (
                      <img
                        src={extension.icon.url}
                        alt={extension.name + ' icon'}
                        className="w-8 h-8 object-contain filter brightness-0 invert-[0.3] sepia-[0.8] saturate-[2.5] hue-rotate-[340deg]"
                      />
                    ) : (
                      extension.icon
                    )}
                  </div>
                  <div className="extension-info">
                    <h3 className="extension-name">{extension.name}</h3>
                  </div>
                </div>
                <p className="extension-description">{extension.description}</p>
                <div className="extension-tags">
                  {extension.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
       </div>
      </section>
    </>
  );
};

export default ServicesGrid;