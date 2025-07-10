import React from "react";

const Hero = () => {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "420px",
        background: `linear-gradient(rgba(12,28,60,0.85), rgba(12,28,60,0.85)), url('https://res.cloudinary.com/dujw4np0d/image/upload/v1751883453/wmremove-transformed_7_kgxp25.jpg') center/cover no-repeat`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
        padding: "48px 20px 32px 20px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <h1
        style={{
          color: "#fff",
          fontWeight: 700,
          fontSize: "3rem",
          marginBottom: 20,
          position: "relative",
          zIndex: 2,
          lineHeight: 1.1,
          maxWidth: 900,
          textShadow: "0 2px 8px rgba(0,0,0,0.25)",
        }}
      >
        About <span style={{ color: "#0070f3" }}>Us</span>
        <svg 
      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2" 
      width="100%" 
      height="4" 
      viewBox="0 0 200 4"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="underlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8"/>
          <stop offset="30%" stopColor="#3b82f6" stopOpacity="1"/>
          <stop offset="70%" stopColor="#1d4ed8" stopOpacity="1"/>
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9"/>
        </linearGradient>
      </defs>
      <rect 
        x="0" 
        y="0" 
        width="200" 
        height="4" 
        fill="url(#underlineGradient)"
        rx="2"
      />
    </svg>
      </h1>
      <p style={{
        marginTop: 16,
        fontSize: "1.18rem",
        lineHeight: 1.7,
        maxWidth: 900,
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        textShadow: "0 1px 6px rgba(0,0,0,0.18)",
        fontWeight: 400,
        letterSpacing: 0.1,
      }}>
        Connecting Roots IT delivers end-to-end value through innovation process and SAP technology consulting plus a range of other services. We are dedicated to enhance your business with helping you in the implementation of SAP in your firm. We provide feasible solutions to your problems by providing you SAP solutions at a reasonable cost. We are true pioneers as we make the best of experts in the industry, work for you. We deliver the promise that we make and to the highest quality. We stand for reliance and commitment to our people and business partners. We live with our values, attract and retain talent, encourage entrepreneurial spirit and are proud of our corporate culture & the integrity of our people.
      </p>
      {/* Subtle fade at the bottom for polish */}
      <div style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: 40,
        background: "linear-gradient(0deg, rgba(12,28,60,0.95) 0%, rgba(12,28,60,0) 100%)",
        pointerEvents: "none",
      }} />
    </section>
  );
};

export default Hero;
