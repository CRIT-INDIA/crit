
'use client'; // This component MUST be a client component for @react-three/fiber

import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, Line, Html } from '@react-three/drei';
import * as THREE from 'three';

// --- IMPORT YOUR ICONS ---
// Assuming these icons come from 'lucide-react'.
import { Database, TrendingUp, Users, Globe, Layers, Target } from 'lucide-react';

// Your provided products data - IMPORTANT: Has 'color' and 'icon' properties
const products = [
    {
      id: 1, name: "SAP S/4HANA", icon: <Database className="w-8 h-8" />, color: '#00BCD4' // Vibrant Cyan
    },
    {
      id: 2, name: "SAP Ariba", icon: <TrendingUp className="w-8 h-8" />, color: '#6366F1' // Indigo
    },
    {
      id: 3, name: "SAP SuccessFactors", icon: <Users className="w-8 h-8" />, color: '#10B981' // Emerald
    },
    {
      id: 4, name: "SAP Commerce Cloud", icon: <Globe className="w-8 h-8" />, color: '#F43F5E' // Rose
    },
    {
      id: 5, name: "SAP BusinessObjects", icon: <Layers className="w-8 h-8" />, color: '#F59E0B' // Amber
    },
    {
      id: 6, name: "SAP Concur", icon: <Target className="w-8 h-8" />, color: '#8B5CF6' // Violet
    },
];

// Central SAP hub position
const CENTRAL_HUB_POSITION = [0, 0, 0];

// Calculate orbital positions for products around the central hub
const ORBITAL_RADIUS = 2.5;
const ORBITAL_POSITIONS = products.map((_, index) => {
  const angle = (index * 60) * (Math.PI / 180); // 60 degrees apart
  const x = Math.cos(angle) * ORBITAL_RADIUS;
  const z = Math.sin(angle) * ORBITAL_RADIUS;
  const y = (Math.sin(index * 0.5) * 0.3); // Slight vertical variation
  return [x, y, z];
});

// Central SAP Hub component
function CentralHub() {
  const hubRef = useRef();
  const [hovered, setHover] = useState(false);

  useFrame(({ clock }) => {
    // Gentle pulsing animation
    const pulseScale = 1 + Math.sin(clock.elapsedTime * 1.2) * 0.1;
    const hoverScale = hovered ? 1.3 : 1;
    hubRef.current.scale.setScalar(pulseScale * hoverScale);

    // Slow rotation
    hubRef.current.rotation.y = clock.elapsedTime * 0.3;
    
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  });

  return (
    <Sphere
      ref={hubRef}
      args={[0.4, 32, 32]}
      position={CENTRAL_HUB_POSITION}
      onPointerOver={(event) => { event.stopPropagation(); setHover(true); }}
      onPointerOut={() => setHover(false)}
    >
      {/* Central hub material with gradient-like effect */}
      <meshStandardMaterial
        color="#1e40af"
        emissive="#3b82f6"
        emissiveIntensity={hovered ? 1.2 : 0.8}
        roughness={0.1}
        metalness={0.9}
        transparent
        opacity={0.9}
      />

      {/* SAP Logo/Text in the center */}
      <Html
        position={[0, 0, 0.45]}
        transform
        sprite
        center
      >
        <div
          className={`
            flex items-center justify-center rounded-full transition-all duration-300 ease-in-out
            w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20
            bg-gradient-to-br from-blue-900/90 to-blue-600/90 backdrop-blur-sm
            border-2 border-blue-400/60
            ${hovered ? 'scale-110' : 'scale-100'}
          `}
          style={{
            boxShadow: `
              0 0 20px 4px #3b82f6${hovered ? 'AA' : '66'},
              0 0 40px 8px #1e40af${hovered ? '77' : '33'},
              inset 0 0 20px #60a5fa33
            `,
          }}
        >
          <div className="text-center">
            <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-wider">
              SAP
            </div>
            <div className="text-xs text-blue-200 font-semibold">
              Enterprise
            </div>
          </div>
        </div>

        {/* Central hub tooltip */}
        {hovered && (
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-slate-800/95 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-lg shadow-xl whitespace-nowrap animate-fade-in pointer-events-none border border-slate-600">
            <div className="font-bold text-blue-300">SAP Enterprise Hub</div>
            <div className="text-xs text-slate-300 mt-1">Connecting all SAP solutions</div>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800/95"></div>
          </div>
        )}
      </Html>
    </Sphere>
  );
}

// Orbital Product Node component
function OrbitingProductNode({ data, position, index }) {
  const nodeRef = useRef();
  const [hovered, setHover] = useState(false);

  useFrame(({ clock }) => {
    // Orbital motion around the central hub
    const orbitSpeed = 0.1;
    const time = clock.elapsedTime * orbitSpeed + index * (Math.PI / 3);
    
    // Calculate orbital position
    const x = Math.cos(time) * ORBITAL_RADIUS;
    const z = Math.sin(time) * ORBITAL_RADIUS;
    const y = position[1] + Math.sin(clock.elapsedTime * 0.5 + index) * 0.2; // Floating motion
    
    nodeRef.current.position.set(x, y, z);
    
    // Node pulsing and hover effects
    const pulseScale = 1 + Math.sin(clock.elapsedTime * 2 + index * 0.5) * 0.06;
    const hoverScale = hovered ? 1.4 : 1;
    nodeRef.current.scale.setScalar(pulseScale * hoverScale);
    
    // Individual node rotation
    nodeRef.current.rotation.y = clock.elapsedTime * 0.5;
    
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  });

  return (
    <Sphere
      ref={nodeRef}
      args={[0.2, 32, 32]}
      position={position}
      onPointerOver={(event) => { event.stopPropagation(); setHover(true); }}
      onPointerOut={() => setHover(false)}
    >
      {/* Product node material */}
      <meshStandardMaterial
        color={data.color}
        emissive={data.color}
        emissiveIntensity={hovered ? 1.0 : 0.6}
        roughness={0.1}
        metalness={0.8}
        transparent
        opacity={hovered ? 0.95 : 0.85}
      />

      {/* Product icon */}
      <Html
        position={[0, 0, 0.25]}
        transform
        sprite
        center
      >
        <div
          className={`
            flex items-center justify-center rounded-full transition-all duration-200 ease-in-out
            w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14
            bg-slate-900/90 backdrop-blur-sm
            border-2
            ${hovered ? 'scale-110' : 'scale-100'}
          `}
          style={{
            boxShadow: `
              0 0 15px 3px ${data.color}${hovered ? 'AA' : '66'},
              0 0 25px 6px ${data.color}${hovered ? '77' : '33'},
              0 0 35px 10px ${data.color}${hovered ? '44' : '22'}
            `,
            borderColor: `${data.color}${hovered ? 'CC' : '88'}`,
            background: `radial-gradient(circle, ${data.color}33, rgba(15, 23, 42, 0.9))`,
          }}
        >
          {React.cloneElement(data.icon, {
            className: `w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 transition-all duration-200`,
            style: { 
              color: hovered ? '#ffffff' : data.color,
              filter: hovered ? 'drop-shadow(0 0 8px currentColor)' : 'none'
            }
          })}
        </div>

        {/* Product tooltip */}
        {hovered && (
          <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-slate-800/95 backdrop-blur-sm text-white text-sm px-3 py-2 rounded-lg shadow-xl whitespace-nowrap animate-fade-in pointer-events-none border border-slate-600">
            <div className="font-bold" style={{ color: data.color }}>{data.name}</div>
            <div className="text-xs text-slate-300 mt-1">Enterprise Solution</div>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800/95"></div>
          </div>
        )}
      </Html>
    </Sphere>
  );
}

// Connection lines from central hub to orbiting nodes
function ConnectionLine({ targetPosition, color, index }) {
  const lineRef = useRef();
  
  useFrame(({ clock }) => {
    // Animated opacity with individual timing
    const time = clock.elapsedTime + index * 0.5;
    const opacity = 0.3 + Math.sin(time * 1.5) * 0.2;
    lineRef.current.material.opacity = opacity;
    
    // Update line endpoint based on current orbital position
    const orbitSpeed = 0.1;
    const orbitTime = clock.elapsedTime * orbitSpeed + index * (Math.PI / 3);
    const x = Math.cos(orbitTime) * ORBITAL_RADIUS;
    const z = Math.sin(orbitTime) * ORBITAL_RADIUS;
    const y = targetPosition[1] + Math.sin(clock.elapsedTime * 0.5 + index) * 0.2;
    
    const points = [
      new THREE.Vector3(...CENTRAL_HUB_POSITION),
      new THREE.Vector3(x, y, z)
    ];
    
    lineRef.current.geometry.setPositions(points.flatMap(p => [p.x, p.y, p.z]));
  });

  return (
    <Line
      ref={lineRef}
      points={[CENTRAL_HUB_POSITION, targetPosition]}
      color={color}
      lineWidth={2}
      transparent
      opacity={0.3}
    />
  );
}

// Constellation background with twinkling stars
function ConstellationBackground() {
  const starsRef = useRef();
  const starCount = 100;
  
  const positions = React.useMemo(() => {
    const pos = [];
    for (let i = 0; i < starCount; i++) {
      pos.push(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30
      );
    }
    return new Float32Array(pos);
  }, []);

  useFrame(({ clock }) => {
    if (starsRef.current) {
      starsRef.current.material.opacity = 0.2 + Math.sin(clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={starCount}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#60A5FA"
        transparent
        opacity={0.2}
        sizeAttenuation={false}
      />
    </points>
  );
}

// Main 3D scene content
function SceneContent() {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Very gentle overall rotation
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <>
      {/* Constellation background */}
      <ConstellationBackground />
      
      <group ref={groupRef}>
        {/* Enhanced lighting for constellation effect */}
        <ambientLight intensity={0.3} color="#E8F4FD" />
        <directionalLight position={[10, 10, 10]} intensity={0.8} color="#FFFFFF" />
        <directionalLight position={[-10, -10, -10]} intensity={0.4} color="#3B82F6" />
        
        {/* Point light at center for hub glow */}
        <pointLight
          position={CENTRAL_HUB_POSITION}
          color="#3B82F6"
          intensity={1.5}
          distance={8}
          decay={1}
        />

        {/* Individual point lights for each product */}
        {products.map((product, index) => (
          <pointLight
            key={`light-${product.id}`}
            position={ORBITAL_POSITIONS[index]}
            color={product.color}
            intensity={0.8}
            distance={3}
            decay={1.5}
          />
        ))}

        {/* Central SAP Hub */}
        <CentralHub />

                {/* Orbiting Product Nodes */}
                {products.map((product, index) => (
          <OrbitingProductNode
            key={product.id}
            data={product}
            position={ORBITAL_POSITIONS[index]}
            index={index}
          />
        ))}

        {/* Connection Lines from hub to products */}
        {products.map((product, index) => (
          <ConnectionLine
            key={`connection-${product.id}`}
            targetPosition={ORBITAL_POSITIONS[index]}
            color={product.color}
            index={index}
          />
        ))}

        {/* Orbital rings for visual effect */}
        <mesh rotation={[Math.PI / 2, 0, 0]} position={CENTRAL_HUB_POSITION}>
          <ringGeometry args={[ORBITAL_RADIUS - 0.05, ORBITAL_RADIUS + 0.05, 64]} />
          <meshBasicMaterial
            color="#60A5FA"
            transparent
            opacity={0.1}
            side={THREE.DoubleSide}
          />
        </mesh>
        
        {/* Inner orbital ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]} position={CENTRAL_HUB_POSITION}>
          <ringGeometry args={[ORBITAL_RADIUS * 0.7 - 0.03, ORBITAL_RADIUS * 0.7 + 0.03, 64]} />
          <meshBasicMaterial
            color="#3B82F6"
            transparent
            opacity={0.08}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
    </>
  );
}

// Main ProductNetwork3D component - sets up the Canvas
export default function ProductNetwork3D() {
  return (
    <Canvas
      camera={{ position: [0, 2, 10], fov: 50 }}
      style={{
        background: 'transparent',
        width: '100%',
        height: '100%',
      }}
      raycaster={{ params: { Points: { threshold: 0.2 } } }}
      gl={{ antialias: true, alpha: true }}
    >
      <SceneContent />
    </Canvas>
  );
}