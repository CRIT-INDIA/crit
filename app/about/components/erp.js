'use client';
import React, { useState, useEffect, useRef } from "react";

const SEGMENTS = [
  {
    label: "Ongoing Improvements & Feedback",
    info: [
      "Collect user feedback regularly from all departments using surveys, interviews, and suggestion boxes.",
      "Implement system improvements based on prioritized feedback and business needs. Track the impact of changes and communicate updates to all users.",
      "Establish a continuous improvement committee to review feedback trends and plan future enhancements. Schedule quarterly review meetings to assess system performance and identify areas for optimization."
    ]
  },
  {
    label: "Planning & Organization",
    info: [
      "Define project scope, goals, and success criteria in collaboration with leadership and key stakeholders.",
      "Assemble a cross-functional implementation team with representatives from IT, operations, finance, and other relevant departments. Assign clear roles and responsibilities to ensure accountability.",
      "Create a detailed project timeline with milestones and allocate resources accordingly. Include contingency plans for potential delays and budget considerations for unexpected costs."
      
    ]
  },
  {
    label: "System Selection",
    info: [
      "Assess detailed business and technical requirements by engaging with end users and department heads.",
      "Research and shortlist potential ERP solutions based on functionality, scalability, and vendor reputation. Conduct product demos and gather feedback from stakeholders.",
      "Evaluate total cost of ownership including licensing, implementation, training, and maintenance costs. Compare vendor support quality and assess long-term scalability requirements."
      
    ]
  },
  {
    label: "Installation",
    info: [
      "Install ERP software on designated servers or cloud infrastructure, following vendor best practices.",
      "Set up required hardware, network, and security infrastructure to support the ERP system. Ensure all components are tested and optimized for performance.",
      "Configure system parameters and establish backup and disaster recovery procedures. Implement security protocols and access controls to protect sensitive business data."
     
    ]
  },
  {
    label: "Data Migration",
    info: [
      "Prepare and clean legacy data for migration by removing duplicates, correcting errors, and standardizing formats. Involve data owners in validation and ensure all sensitive information is handled securely.",
      "Map and transfer data to the new ERP system using automated tools where possible. Validate migrated data for accuracy and completeness.",
      "Create data migration rollback plans and conduct multiple test migrations before final cutover."
      
    ]
  },
  {
    label: "Training",
    info: [
      "Develop comprehensive training materials tailored to different user roles and business processes. Use a mix of documentation, videos, and hands-on exercises to accommodate various learning styles.",
      "Conduct user training sessions for all roles. Provide ongoing support and refresher courses as needed to ensure user proficiency.",
      "Establish a help desk and create user guides for common tasks and troubleshooting procedures. Develop a knowledge base with frequently asked questions and best practices for system usage."
      
    ]
  },
  {
    label: "Testing & Validation",
    info: [
      "Perform thorough system and integration testing to ensure all modules work as expected. Use test scripts and real-world scenarios for validation, and involve end users in the process.",
      "Validate business processes and workflows by involving end users in testing. Document issues found and ensure they are resolved before go-live.",
      "Conduct performance testing under various load conditions to ensure system stability and responsiveness. Test system recovery procedures and validate data integrity across all modules."
      
    ]
  },
  {
    label: "Go Live",
    info: [
      "Prepare for system launch with a comprehensive go-live checklist. Communicate the launch plan and schedule to all stakeholders in advance.",
      "Monitor initial operations and user activity closely during the first days after launch. Set up real-time alerts for critical issues and provide immediate support for users.",
      "Schedule post-go-live review meetings to assess system performance and address any immediate concerns. Plan for system optimization and additional training based on user feedback and performance metrics."
    
    ]
  }
];

// Pre-calculate label positions (relative to the center)
const LABEL_POSITIONS = [
  { x: 0, y: -270 },    // Top
  { x: 190, y: -190 }, // Top-right
  { x: 270, y: 0 },    // Right
  { x: 190, y: 190 },  // Bottom-right
  { x: 0, y: 270 },    // Bottom
  { x: -190, y: 190 }, // Bottom-left
  { x: -270, y: 0 },   // Left
  { x: -190, y: -190 } // Top-left
];

export default function ERPImplementationDiagram() {
  const [hovered, setHovered] = useState(null);
  const [size, setSize] = useState(300); // default size is now smaller
  const [leftInfo, setLeftInfo] = useState(SEGMENTS[7]);
  const [rightInfo, setRightInfo] = useState(SEGMENTS[0]);
  const [panelWidth, setPanelWidth] = useState(280);
  const [isMobile, setIsMobile] = useState(false);
  // Set robotActive to true by default so the beam and info box show on load
  const [robotActive, setRobotActive] = useState(true);
  const [rayAnim, setRayAnim] = useState(0);
  const animRef = useRef();
  const [typedInfo, setTypedInfo] = useState([]);
  const typingIndex = useRef(0);
  const typingTimeout = useRef();

  useEffect(() => {
    function handleResize() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      // Responsive: 90vw or 90vh, max 440px, min 220px (slightly larger)
      const s = Math.max(220, Math.min(440, Math.min(w, h) * 0.98));
      setSize(s);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    function handlePanelResize() {
      const w = window.innerWidth;
      // Responsive: 90vw (max 340px, min 220px)
      const pw = Math.max(220, Math.min(340, w * 0.9));
      setPanelWidth(pw);
    }
    handlePanelResize();
    window.addEventListener('resize', handlePanelResize);
    return () => window.removeEventListener('resize', handlePanelResize);
  }, []);

  useEffect(() => {
    function handleMobileCheck() {
      setIsMobile(window.innerWidth <= 600);
    }
    handleMobileCheck();
    window.addEventListener('resize', handleMobileCheck);
    return () => window.removeEventListener('resize', handleMobileCheck);
  }, []);

  useEffect(() => {
    if (robotActive) {
      let last = performance.now();
      const animate = (now) => {
        const elapsed = now - last;
        last = now;
        setRayAnim((prev) => (prev + elapsed * 0.0015) % 1); // loop 0-1
        animRef.current = requestAnimationFrame(animate);
      };
      animRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animRef.current);
    } else {
      setRayAnim(0);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    }
  }, [robotActive]);

  useEffect(() => {
    let active = true;
    // Change default info to SEGMENTS[7] (Go Live) when not hovered
    const infoArr = hovered !== null ? SEGMENTS[hovered].info : SEGMENTS[7].info;
    setTypedInfo(Array(infoArr.length).fill(''));
    typingIndex.current = 0;
    let charIdx = 0;
    let bulletIdx = 0;
    function typeNext() {
      if (!active) return;
      if (bulletIdx >= infoArr.length) return;
      const current = infoArr[bulletIdx];
      if (charIdx <= current.length) {
        setTypedInfo((prev) => {
          const updated = [...prev];
          updated[bulletIdx] = current.slice(0, charIdx);
          return updated;
        });
        charIdx++;
        typingTimeout.current = setTimeout(typeNext, isMobile ? 8 : 5);
      } else {
        bulletIdx++;
        charIdx = 0;
        typingTimeout.current = setTimeout(typeNext, isMobile ? 300 : 250);
      }
    }
    typeNext();
    return () => {
      active = false;
      clearTimeout(typingTimeout.current);
    };
  }, [hovered]);

  const cx = size / 2;
  const cy = size / 2;
  const rOuter = size * 0.3;
  const rInner = size * 0.18;
  const cardDistance = size < 500 ? size * 0.43 : size * 0.5;
  const cardWidth = Math.max(90, Math.min(120, size * 0.18)); // reduced for mobile compression
  const cardHeight = Math.max(50, Math.min(40, size * 0.98)); // reduced for mobile compression
  const popupWidth = Math.max(180, size * 0.4);

  // Helper to get coordinates for a given angle and radius
  const polarToCartesian = (angle, radius) => [
    cx + radius * Math.cos((angle - 90) * (Math.PI / 180)),
    cy + radius * Math.sin((angle - 90) * (Math.PI / 180))
  ];

  return (
    <div className="w-full min-h-* flex items-center justify-center p-15 bg-[#f5f5f5]">
      {isMobile ? (
          <div style={{
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          width: '100%', 
          padding: '1rem',
          gap: '0.5rem',
          minHeight: '100vh',
          justifyContent: 'space-between'
        }}>
          {/* Pie Chart Diagram */}
            <div style={{
              width: '100%',
            display: 'flex', 
            justifyContent: 'flex-start', 
            alignItems: 'center',
            marginBottom: '1rem',
            marginTop: '0rem',
            paddingLeft: '0rem',
            marginLeft: '-2rem',
                  position: 'relative',
            zIndex: 2
                }}>
            <div
              style={{
                position: 'relative',
                aspectRatio: '1 / 1',
                maxWidth: '120px',
                maxHeight: '120px',
                width: size,
                height: size,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* Pie Chart and Arrows */}
              <svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                className="z-10 absolute left-0 top-0"
                style={{ filter: 'drop-shadow(0 8px 24px #1e293b88)' }}
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <radialGradient id="pie3d" cx="60%" cy="40%" r="80%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.95" />
                    <stop offset="60%" stopColor="#2852a3" stopOpacity="0.98" />
                    <stop offset="100%" stopColor="#1e293b" stopOpacity="1" />
                  </radialGradient>
                  <linearGradient id="pieBevel" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#fff" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#000" stopOpacity="0.18" />
                  </linearGradient>
                  <radialGradient id="center3d" cx="50%" cy="40%" r="80%">
                    <stop offset="0%" stopColor="#c7dafe" stopOpacity="0.18" />
                    <stop offset="60%" stopColor="#1e293b" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#0C1C3C" stopOpacity="1" />
                  </radialGradient>
                </defs>
                {SEGMENTS.map((segment, i) => {
                  const startAngle = i * 45;
                  const endAngle = (i + 1) * 45;
                  // Pie segment path
                  const [x1, y1] = polarToCartesian(startAngle, rOuter);
                  const [x2, y2] = polarToCartesian(endAngle, rOuter);
                  const [x3, y3] = polarToCartesian(endAngle, rInner);
                  const [x4, y4] = polarToCartesian(startAngle, rInner);
                  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
                  const pathData = [
                    `M${x1},${y1}`,
                    `A${rOuter},${rOuter} 0 ${largeArc} 1 ${x2},${y2}`,
                    `L${x3},${y3}`,
                    `A${rInner},${rInner} 0 ${largeArc} 0 ${x4},${y4}`,
                    "Z"
                  ].join(" ");
                  // Arrow
                  const midAngle = startAngle + 22.5;
                  const rad = (midAngle - 90) * (Math.PI / 180);
                  const cardCenterX = cx + cardDistance * Math.cos(rad);
                  const cardCenterY = cy + cardDistance * Math.sin(rad);
                  const [arrowStartX, arrowStartY] = polarToCartesian(midAngle, rOuter + 5);
                  const arrowEndX = cardCenterX;
                  const arrowEndY = cardCenterY;
                  const isHovered = hovered === i;
                  return (
                    <g key={i}>
                      <path
                        d={pathData}
                        fill={isHovered ? 'url(#pie3d)' : 'url(#pie3d)'}
                        stroke="#111827"
                        strokeWidth={isHovered ? 5 : 3}
                        opacity={isHovered ? 1 : 0.95}
                        style={{
                          filter: isHovered ? "drop-shadow(0 0 16px #3b82f6)" : undefined,
                          cursor: "pointer",
                          transition: "all 0.2s cubic-bezier(.4,2,.6,1)",
                        }}
                        onMouseEnter={() => {
                          setHovered(i);
                          setRobotActive(true);
                        }}
                        onMouseLeave={() => {
                          setHovered(null);
                          setRobotActive(false);
                        }}
                      />
                      {/* Bevel highlight */}
                      <path
                        d={pathData}
                        fill="none"
                        stroke="url(#pieBevel)"
                        strokeWidth={isHovered ? 7 : 4}
                        opacity={isHovered ? 0.7 : 0.5}
                        style={{ pointerEvents: 'none' }}
                      />
                      {/* Arrow */}
                      <line
                        x1={arrowStartX}
                        y1={arrowStartY}
                        x2={arrowEndX}
                        y2={arrowEndY}
                        stroke="#6B7280"
                        strokeWidth="2"
                        strokeDasharray="6,6"
                        markerEnd="url(#arrowhead)"
                        opacity="0.7"
                      />
                    </g>
                  );
                })}
                {/* Central Circle and text */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={rInner}
                  fill="url(#center3d)"
                  stroke="#111827"
                  strokeWidth={size * 0.025}
                  filter="url(#glow)"
                />
                <text
                  x={cx}
                  y={cy - size * 0.015}
                  textAnchor="middle"
                  fill="#fff"
                  fontSize={size * 0.07}
                  fontWeight="bold"
                  fontFamily="'Segoe UI', Arial, sans-serif"
                  style={{ letterSpacing: 2 }}
                >
                  ERP
                </text>
                <text
                  x={cx}
                  y={cy + size * 0.035}
                  textAnchor="middle"
                  fill="#c7dafe"
                  fontSize={size * 0.025}
                  fontWeight="bold"
                  fontFamily="'Segoe UI', Arial, sans-serif"
                  style={{ letterSpacing: 3 }}
                >
                  IMPLEMENTATION
                </text>
                <defs>
                  <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="60%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#0C1C3C" />
                  </radialGradient>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="0" stdDeviation={size * 0.012} floodColor="#2563eb" floodOpacity="0.12" />
                  </filter>
                  <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L8,4 L0,8" fill="#6B7280" />
                  </marker>
                </defs>
              </svg>
              {/* Cards around the pie chart */}
              {SEGMENTS.map((segment, i) => {
                const startAngle = i * 45;
                const midAngle = startAngle + 22.5;
                const rad = (midAngle - 90) * (Math.PI / 180);
                const cardCenterX = cx + cardDistance * Math.cos(rad);
                const cardCenterY = cy + cardDistance * Math.sin(rad);
                const isHovered = hovered === i;

                return (
                  <React.Fragment key={i}>
                    <div
                      className={`absolute px-5 md:px-3 py-1 md:py-2 rounded-lg text-white font-bold text-xs md:text-xs shadow border border-[#222c3c] flex flex-col items-center justify-center whitespace-pre-line text-center transition-all duration-200 ${isHovered ? 'scale-110 z-50 bg-blue-600 shadow-2xl' : 'bg-gray-700'}`}
                      style={{
                        left: cardCenterX,
                        top: cardCenterY,
                        width: cardWidth,
                        height: cardHeight,
                        textAlign: 'center',
                        zIndex: isHovered ? 50 : 30,
                        transform: 'translate(-50%, -50%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '0.9em 0.9em',
                        fontSize: '0.80em', // smaller for mobile to fit inside the gray box
                      }}
                      onMouseEnter={() => {
                        setHovered(i);
                        setRobotActive(true);
                      }}
                      onMouseLeave={() => {
                        setHovered(null);
                        setRobotActive(false);
                      }}
                    >
                      {segment.label}
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Robot and Info Section */}
          <div style={{
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
              width: '100%',
            gap: '1rem',
            marginTop: '2.5rem',
              marginBottom: '2rem',
            paddingLeft: '0rem',
            position: 'relative',
            zIndex: 1
          }}>
            {/* Spacer to push info card downward */}
            <div style={{ height: '4rem' }} />
            {/* Info Box */}
            <div
              style={{
                width: (SEGMENTS[hovered !== null ? hovered : 7].label === 'Ongoing Improvements & Feedback') ? '100%' : '100%',
                maxWidth: (SEGMENTS[hovered !== null ? hovered : 7].label === 'Ongoing Improvements & Feedback') ? '440px' : '400px',
                color: '#fff',
                fontWeight: 700,
                fontSize: '0.9rem',
                textShadow: 'none',
                zIndex: 10,
                background: 'rgba(12,28,60,0.9)',
                borderRadius: '0.8em',
                padding: '1rem',
                pointerEvents: 'none',
                textAlign: 'center',
                whiteSpace: 'normal',
                border: '2px solid #3b82f6',
                marginTop: '1.5rem'
              }}
            >
              <div style={{
                fontSize:
                  typeof window !== 'undefined' && window.innerWidth <= 600
                    ? '1.1rem' // reduced heading for mobile
                    : typeof window !== 'undefined' && window.innerWidth > 600 && SEGMENTS[hovered !== null ? hovered : 7].label === 'Ongoing Improvements & Feedback'
                    ? '0.8rem'
                    : typeof window !== 'undefined' && window.innerWidth > 600
                    ? '0.9rem'
                    : '1.1rem',
                lineHeight: 1.1,
                padding: '0 0.9em',
                fontWeight:
                  SEGMENTS[hovered !== null ? hovered : 7].label === 'Ongoing Improvements & Feedback' ? 600 : 700,
                marginBottom: '0.8em',
                textDecoration: 'underline',
                letterSpacing:
                  SEGMENTS[hovered !== null ? hovered : 7].label === 'Ongoing Improvements & Feedback' ? 0.5 : 1,
                color: '#3b82f6'
              }}>
                  {SEGMENTS[hovered !== null ? hovered : 7].label}
                </div>
              <ul style={{
                fontSize: '0.85rem', 
                margin: 0,
                padding: 0, 
                color: '#fff',
                listStyle: 'disc inside', 
                fontWeight: 400, 
                whiteSpace: 'normal', 
                textAlign: 'left',
                lineHeight: 1.4
              }}>
                {SEGMENTS[hovered !== null ? hovered : 7].info.map((point, idx) => (
                  <li key={idx} style={{
                    marginBottom: '0.8em', 
                    lineHeight: 1.3, 
                    wordBreak: 'break-word', 
                    whiteSpace: 'normal' 
                  }}>
                    {typedInfo[idx] || ''}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
            <div
              style={{
                position: 'relative',
                aspectRatio: '1 / 1',
                maxWidth: '95vw',
                maxHeight: '95vw',
                width: size,
                height: size,
                display: 'flex',
                justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '5%',
              }}
            >
              {/* Pie Chart and Arrows */}
              <svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                className="z-10 absolute left-0 top-0"
                style={{ filter: 'drop-shadow(0 8px 24px #1e293b88)' }}
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <radialGradient id="pie3d" cx="60%" cy="40%" r="80%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.95" />
                    <stop offset="60%" stopColor="#2852a3" stopOpacity="0.98" />
                    <stop offset="100%" stopColor="#1e293b" stopOpacity="1" />
                  </radialGradient>
                  <linearGradient id="pieBevel" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#fff" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#000" stopOpacity="0.18" />
                  </linearGradient>
                  <radialGradient id="center3d" cx="50%" cy="40%" r="80%">
                    <stop offset="0%" stopColor="#c7dafe" stopOpacity="0.18" />
                    <stop offset="60%" stopColor="#1e293b" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#0C1C3C" stopOpacity="1" />
                  </radialGradient>
                </defs>
                {SEGMENTS.map((segment, i) => {
                  const startAngle = i * 45;
                  const endAngle = (i + 1) * 45;
                  // Pie segment path
                  const [x1, y1] = polarToCartesian(startAngle, rOuter);
                  const [x2, y2] = polarToCartesian(endAngle, rOuter);
                  const [x3, y3] = polarToCartesian(endAngle, rInner);
                  const [x4, y4] = polarToCartesian(startAngle, rInner);
                  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
                  const pathData = [
                    `M${x1},${y1}`,
                    `A${rOuter},${rOuter} 0 ${largeArc} 1 ${x2},${y2}`,
                    `L${x3},${y3}`,
                    `A${rInner},${rInner} 0 ${largeArc} 0 ${x4},${y4}`,
                    "Z"
                  ].join(" ");
                  // Arrow
                  const midAngle = startAngle + 22.5;
                  const rad = (midAngle - 90) * (Math.PI / 180);
                  const cardCenterX = cx + cardDistance * Math.cos(rad);
                  const cardCenterY = cy + cardDistance * Math.sin(rad);
                  const [arrowStartX, arrowStartY] = polarToCartesian(midAngle, rOuter + 5);
                  const arrowEndX = cardCenterX;
                  const arrowEndY = cardCenterY;
                  const isHovered = hovered === i;
                  return (
                    <g key={i}>
                      <path
                        d={pathData}
                        fill={isHovered ? 'url(#pie3d)' : 'url(#pie3d)'}
                        stroke="#111827"
                        strokeWidth={isHovered ? 5 : 3}
                        opacity={isHovered ? 1 : 0.95}
                        style={{
                          filter: isHovered ? "drop-shadow(0 0 16px #3b82f6)" : undefined,
                          cursor: "pointer",
                          transition: "all 0.2s cubic-bezier(.4,2,.6,1)",
                        }}
                        onMouseEnter={() => {
                          setHovered(i);
                          if (i >= 4) setLeftInfo(segment);
                          if (i < 4) setRightInfo(segment);
                        setRobotActive(true);
                        }}
                        onMouseLeave={() => {
                          setHovered(null);
                          if (i >= 4) setLeftInfo(SEGMENTS[7]);
                          if (i < 4) setRightInfo(SEGMENTS[0]);
                        setRobotActive(true); // keep the beam/info visible by default
                      }}
                      />
                      {/* Bevel highlight */}
                      <path
                        d={pathData}
                        fill="none"
                        stroke="url(#pieBevel)"
                        strokeWidth={isHovered ? 7 : 4}
                        opacity={isHovered ? 0.7 : 0.5}
                        style={{ pointerEvents: 'none' }}
                      />
                      {/* Arrow */}
                      <line
                        x1={arrowStartX}
                        y1={arrowStartY}
                        x2={arrowEndX}
                        y2={arrowEndY}
                        stroke="#6B7280"
                        strokeWidth="2"
                        strokeDasharray="6,6"
                        markerEnd="url(#arrowhead)"
                        opacity="0.7"
                      />
                    </g>
                  );
                })}
                {/* Central Circle and text */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={rInner}
                  fill="url(#center3d)"
                  stroke="#111827"
                  strokeWidth={size * 0.025}
                  filter="url(#glow)"
                />
                <text
                  x={cx}
                  y={cy - size * 0.015}
                  textAnchor="middle"
                  fill="#fff"
                  fontSize={size * 0.07}
                  fontWeight="bold"
                  fontFamily="'Segoe UI', Arial, sans-serif"
                  style={{ letterSpacing: 2 }}
                >
                  ERP
                </text>
                <text
                  x={cx}
                  y={cy + size * 0.035}
                  textAnchor="middle"
                  fill="#c7dafe"
                  fontSize={size * 0.025}
                  fontWeight="bold"
                  fontFamily="'Segoe UI', Arial, sans-serif"
                  style={{ letterSpacing: 3 }}
                >
                  IMPLEMENTATION
                </text>
                <defs>
                  <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="60%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#0C1C3C" />
                  </radialGradient>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="0" stdDeviation={size * 0.012} floodColor="#2563eb" floodOpacity="0.12" />
                  </filter>
                  <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L8,4 L0,8" fill="#6B7280" />
                  </marker>
                </defs>
              </svg>
              {/* Only render the cards outside the SVG, no per-label SVGs for arrows */}
              {SEGMENTS.map((segment, i) => {
                const startAngle = i * 45;
                const midAngle = startAngle + 22.5;
                const rad = (midAngle - 90) * (Math.PI / 180);
                const cardCenterX = cx + cardDistance * Math.cos(rad);
                const cardCenterY = cy + cardDistance * Math.sin(rad);
                const isHovered = hovered === i;

                // For left-side cards (indices 4-7), show info popup on left edge
                const showLeftPopup = isHovered && i >= 4;

                return (
                  <React.Fragment key={i}>
                    <div
                      className={`absolute px-2 md:px-3 py-1 md:py-2 rounded-lg text-white font-bold text-xs md:text-sm shadow border border-[#222c3c] flex flex-col items-center justify-center whitespace-pre-line text-center transition-all duration-200 ${isHovered ? 'scale-110 z-50 bg-blue-600 shadow-2xl' : 'bg-gray-700'}`}
                      style={{
                        left: cardCenterX,
                        top: cardCenterY,
                        width: cardWidth,
                        height: cardHeight,
                      textAlign: 'center',
                        zIndex: isHovered ? 50 : 30,
                      transform: 'translate(-50%, -50%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '0.5em 0.7em',
                      fontSize: '0.7em', // normal for desktop
                      }}
                      onMouseEnter={() => {
                        setHovered(i);
                        if (i >= 4) setLeftInfo(segment);
                        if (i < 4) setRightInfo(segment);
                      setRobotActive(true);
                      }}
                      onMouseLeave={() => {
                        setHovered(null);
                        if (i >= 4) setLeftInfo(SEGMENTS[7]);
                        if (i < 4) setRightInfo(SEGMENTS[0]);
                      setRobotActive(false);
                      }}
                    >
                      {segment.label}
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src="https://res.cloudinary.com/dujw4np0d/image/upload/v1751954513/vecteezy_3d-cute-robot-consultant-with-friendly-expression-pointing_52259583_z9hfjk.png"
              alt="Robot"
              style={{
                height: size * 0.7,
                marginLeft: '2vw', // shifted a little bit backward
                marginTop: '6vw', // moved much further downward
                borderRadius: '1rem',
                transition: 'transform 0.3s cubic-bezier(.4,2,.6,1)',
                transform: 'none',
                zIndex: 2,
                position: 'relative',
              }}
            />
            {robotActive && (
              <>
                {/* Light beam SVG - zIndex 2 (below info box) */}
                <svg
                  width={size * 0.9}
                  height={size * 0.8}
                  style={{
                    position: 'absolute',
                    left: size * 0.42,
                    top: size * 0.01,
                    pointerEvents: 'none',
                    zIndex: 2, // Lower than info box
                  }}
                  viewBox={`0 0 ${size * 0.9} ${size * 0.8}`}
                >
                  {/* Projector light beam */}
                  <defs>
                    <radialGradient id="projectorBeam" cx="0%" cy="50%" r="100%">
                      <stop offset="0%" stopColor="#81d4fa" stopOpacity="0.9" />
                      <stop offset="30%" stopColor="#81d4fa" stopOpacity="0.9" />
                      <stop offset="60%" stopColor="#81d4fa" stopOpacity="1.0" />
                      <stop offset="100%" stopColor="#81d4fa" stopOpacity="1.9" />
                    </radialGradient>
                    <filter id="projectorGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feDropShadow dx="0" dy="0" stdDeviation="15" floodColor="#ffffff" floodOpacity="0.6" />
                      <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#00f6ff" floodOpacity="0.4" />
                    </filter>
                  </defs>
                  {/* Main projector beam - softened corners */}
                  {/* Calculate the info card's top and bottom y-coordinates to match the polygon's right corners to the card.
                      Assume info card top is at 'size * 0.01' and height is 'size * 0.8' (from SVG height), so: */}
                  const infoCardTop = size * 0.01;
                  const infoCardHeight = size * 0.8;
                  const infoCardBottom = infoCardTop + infoCardHeight;
                  
                  <polygon
                    points={`
                      0,${size*0.34}
                      ${size*0.85},${size*0.01}
                      ${size*0.85},${size*0.81}
                      0,${size*0.40}
                    `}
                    fill="url(#projectorBeam)"
                    filter="url(#projectorGlow)"
                    opacity="0.4"
                  />
                  {/* Animated light rays (unchanged) */}
                  <g opacity="0.6">
                    {/* Top edge traveling line */}
                    {(() => {
                      const beamWidth = size * 0.85; // match polygon width
                      const beamLeft = 0;
                      const beamTopStart = size * 0.34;
                      const beamTopEnd = size * 0.08;
                      const t = rayAnim;
                      const lineLen = size * 0.18;
                      const t2 = Math.min(1, (t * beamWidth + lineLen) / beamWidth);
                      const x1 = beamLeft + t * beamWidth;
                      const y1 = beamTopStart - t * (beamTopStart - beamTopEnd);
                      const x2 = x1 + lineLen;
                      const y2 = beamTopStart - t2 * (beamTopStart - beamTopEnd);
                      return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#ffffff" strokeWidth="2" opacity="0.3" />;
                    })()}
                    {/* Bottom edge traveling line */}
                    {(() => {
                      const beamWidth = size * 0.85;
                      const beamLeft = 0;
                      const beamBottomStart = size * 0.40;
                      const beamBottomEnd = size * 0.72;
                      const t = rayAnim;
                      const lineLen = size * 0.18;
                      const t2 = Math.min(1, (t * beamWidth + lineLen) / beamWidth);
                      const x1 = beamLeft + t * beamWidth;
                      const y1 = beamBottomStart + t * (beamBottomEnd - beamBottomStart);
                      const x2 = x1 + lineLen;
                      const y2 = beamBottomStart + t2 * (beamBottomEnd - beamBottomStart);
                      return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#ffffff" strokeWidth="2" opacity="0.3" />;
                    })()}
                  </g>
                </svg>
                {/* Info box - zIndex 10 (above beam) */}
                <div
                  style={{
                    position: 'absolute',
                    left: size * 0.45 + size * 0.82,
                    top: size * 0.01,
                    minWidth: size * 0.92,
                    height: size * 0.8,
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: size * 0.04,
                    textShadow: 'none',
                    zIndex: 10, // Above the beam
                    background: 'rgba(12,28,60,0.7)',
                    borderRadius: '0.5em',
                    padding: '0.7em 1.2em',
                    pointerEvents: 'none',
                    textAlign: 'center',
                    whiteSpace: 'normal',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  {/* Light beam overlay for info card */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                    zIndex: 1,
                    background: 'linear-gradient(120deg, rgba(203, 117, 144, 0.06) 0%, rgba(191, 49, 49, 0.03) 60%, rgba(60, 12, 22, 0) 100%)',
                    filter: 'blur(10.5px)',
                    borderRadius: '0.5em',
                  }} />
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ fontSize: size * 0.045, fontWeight: 700, marginBottom: '0.5em', marginTop: '-1em', textDecoration: 'underline', letterSpacing: 1, color: '#3b82f6' }}>{hovered !== null ? SEGMENTS[hovered].label : SEGMENTS[7].label}</div>
                    <ul style={{ fontSize: size * 0.038, margin: 0, padding: 0, color: '#fff', listStyle: 'disc inside', fontWeight: 400, whiteSpace: 'normal', textAlign: 'left', maxWidth: size * 0.98 }}>
                      {(hovered !== null ? SEGMENTS[hovered].info : SEGMENTS[7].info).map((point, idx) => (
                        <li key={idx} style={{ marginBottom: '0.3em', lineHeight: 1.3, wordBreak: 'break-word', whiteSpace: 'normal' }}>{typedInfo[idx] || ''}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}