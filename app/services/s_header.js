"use client";
import React, { useState, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";

// --- Data ---
const SERVICES = [
  { id: 'implementation3d', name: 'Implementation', color: '#10b981' },
  { id: 'rollout3d', name: 'Rollout', color: '#3b82f6' },
  { id: 'support3d', name: 'Support', color: '#8b5cf6' },
  { id: 'upgrade3d', name: 'Upgrade', color: '#f97316' },
  { id: 'integration3d', name: 'Integration ', color: '#14b8a6' },
  { id: 'migration3d', name: 'Migration ', color: '#6366f1' },
  { id: 'automation3d', name: 'Automation ', color: '#06b6d4' },
  { id: 'testing3d', name: 'Testing ', color: '#f43f5e' }
];

const SERVICE_CATEGORIES = [
  { title: 'Core Services',    services: 'Implementation • Migration  • Integration ' },
  { title: 'Business Services', services: 'Rollout • Testing • Support ' }
];

// --- Orbital Helpers ---
const ORBIT_RADIUS = 6;
const ORBIT_SPEED = 0.4;
function getOrbitPosition(index, total, time) {
  const angle = (index / total) * Math.PI * 2 + time * ORBIT_SPEED;
  return [
    Math.cos(angle) * ORBIT_RADIUS,
    (Math.sin(angle * 1.2) * ORBIT_RADIUS) / 2,
    Math.sin(angle) * ORBIT_RADIUS
  ];
}

// --- Service Node (Orbiting Planet) ---
const ServiceNode = ({ service, index, total }) => {
  const meshRef = useRef(null);
  const textRef = useRef(null);
  const groupRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    // Orbit movement
    if (groupRef.current) {
      const pos = getOrbitPosition(index, total, state.clock.elapsedTime);
      groupRef.current.position.set(...pos);
    }

    // Individual spin
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.z += delta * 0.2;
    }

    // Billboard label
    if (textRef.current) {
      textRef.current.lookAt(state.camera.position);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.6} floatingRange={[0.3, 0.8]}>
      <group
        ref={groupRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <mesh ref={meshRef} scale={hovered ? 1.5 : 1.2}>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial
            color={service.color}
            emissive={service.color}
            emissiveIntensity={hovered ? 0.5 : 0.3}
            transparent
            opacity={0.93}
            roughness={0.25}
            metalness={0.1}
          />
        </mesh>
        <group ref={textRef} position={[0, -1.2, 0]}>
          <Text
            fontSize={0.25}
            color="#fff"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.03}
            outlineColor="#222"
            maxWidth={3}
            textAlign="center"
          >
            {service.name}
          </Text>
        </group>
        {/* Glow ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.8, 1.0, 36]} />
          <meshBasicMaterial color={service.color} transparent opacity={hovered ? 0.22 : 0.09} />
        </mesh>
      </group>
    </Float>
  );
};

// --- Central Sphere (SAP Core) ---
const CentralSphere = () => {
  const sphereRef = useRef(null);
  const innerRef = useRef(null);
  const coreRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const sphereMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        colorA: { value: new THREE.Color('#1e40af') },
        colorB: { value: new THREE.Color('#3b82f6') },
        colorC: { value: new THREE.Color('#60a5fa') },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        void main() {
          vUv = uv;
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 colorA;
        uniform vec3 colorB;
        uniform vec3 colorC;
        varying vec2 vUv;
        varying vec3 vPosition;
        void main() {
          float wave1 = sin(time + vPosition.y * 3.0) * 0.5 + 0.5;
          float wave2 = sin(time * 0.7 + vPosition.x * 3.0) * 0.5 + 0.5;
          vec3 color = mix(colorA, colorB, wave1);
          color = mix(color, colorC, wave2 * 0.5);
          gl_FragColor = vec4(color, 1.0);
        }
      `,
    });
  }, []);

  useFrame((state, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += delta * 0.3;
      sphereRef.current.rotation.y += delta * 0.4;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x += delta * 0.2;
      innerRef.current.rotation.y += delta * 0.3;
      innerRef.current.rotation.z += delta * 0.1;
    }
    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.1;
      coreRef.current.rotation.y += delta * 0.2;
      coreRef.current.rotation.z += delta * 0.15;
    }
    if (sphereMaterial) {
      sphereMaterial.uniforms.time.value = state.clock.elapsedTime;
    }
  });

  return (
    <group onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
      {/* SAP Services label */}
      <Text
        position={[0, 0, 2.1]}
        fontSize={0.5}
        color="#ffff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.04}
        outlineColor="#1e40af"
        maxWidth={4}
        textAlign="center"
      >
        SAP Services
      </Text>
      {/* Main central sphere */}
      <mesh ref={sphereRef} scale={hovered ? 1.3 : 1.2}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <primitive object={sphereMaterial} />
      </mesh>
      {/* Glow rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.2, 2.6, 64]} />
        <meshBasicMaterial color="#1e40af" transparent opacity={0.18} />
      </mesh>
      <mesh rotation={[Math.PI / 4, 0, 0]}>
        <ringGeometry args={[2.4, 2.7, 64]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.12} />
      </mesh>
      {/* Inner core */}
      <mesh ref={innerRef}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshPhongMaterial
          color="#60a5fa"
          emissive="#1e40af"
          emissiveIntensity={0.26}
          transparent
          opacity={0.93}
          roughness={0.2}
          metalness={0.3}
        />
      </mesh>
      {/* Innermost core */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshPhongMaterial
          color="#93c5fd"
          emissive="#60a5fa"
          emissiveIntensity={0.32}
          transparent
          opacity={0.82}
          roughness={0.1}
          metalness={0.5}
        />
      </mesh>
    </group>
  );
};

// --- Particle System (Background Field) ---
const ParticleSystem = () => {
  const particlesRef = useRef(null);
  const particleCount = 200;

  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      colors[i * 3] = Math.random();
      colors[i * 3 + 1] = Math.random() * 0.8 + 0.2;
      colors[i * 3 + 2] = Math.random() * 0.6 + 0.4;
    }
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={particles.positions}
          count={particleCount}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={particles.colors}
          count={particleCount}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        transparent
        opacity={0.7}
        vertexColors
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// --- 3D Scene ---
const Scene3D = () => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 10]} intensity={1.08} />
      <pointLight position={[-10, -10, -10]} intensity={0.75} color="#8b5cf6" />
      <pointLight position={[10, -10, 10]} intensity={0.53} color="#3b82f6" />
      <pointLight position={[0, 10, 0]} intensity={0.35} color="#10b981" />
      <CentralSphere />
      {SERVICES.map((service, idx) => (
        <ServiceNode key={service.id} service={service} index={idx} total={SERVICES.length} />
      ))}
      <ParticleSystem />
      <OrbitControls
        enableZoom
        enablePan
        enableRotate
        autoRotate={false}
        maxDistance={25}
        minDistance={8}
        maxPolarAngle={Math.PI}
        minPolarAngle={0}
      />
    </>
  );
};

// --- 3D Globe Component ---
const SphereGlobe3D = () => (
  <div className="block relative pt-5">
    <div className="relative">
      {/* Main 3D Canvas */}
      <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 h-96 w-full overflow-hidden shadow-lg">
        <Canvas
          camera={{ position: [0, 0, 15], fov: 60 }}
          style={{ width: '100%', height: '100%' }}
        >
          <Scene3D />
        </Canvas>
        <div className="absolute top-4 left-4 text-white/70 text-xs opacity-70">
          Drag or scroll to explore
        </div>
        <div className="absolute top-4 right-4 text-white/40 text-xs opacity-60">
          
        </div>
      </div>
      {/* Service Categories */}
      <div className="mt-6 grid grid-cols-2 gap-3 text-center">
        {SERVICE_CATEGORIES.map((category, index) => (
          <div
            key={category.title}
            className={`bg-slate-800/30 backdrop-blur-lg rounded-lg p-4 border border-slate-700`}
          >
            <div className="text-sm font-medium text-white mb-1">{category.title}</div>
            <div className="text-xs text-slate-400">{category.services}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- Background Blobs (Optional) ---
const BackgroundBlobs = () => (
  <>
    <div className="hidden md:block absolute top-1/4 left-1/4 w-[28rem] h-[28rem] bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
    <div className="hidden md:block absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" style={{ animationDelay: '2s' }}></div>
  </>
);

// --- HeaderContent ---
const HeaderContent = () => (
  <div className="text-left py-5 md:py-0">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 inline-block relative break-words">
      <span className="text-white">Our </span>
      <span className="text-blue-500">Services</span>
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
        <rect x="0" y="0" width="200" height="4" fill="url(#underlineGradient)" rx="2" />
      </svg>
    </h1>
    <p className="max-w-full md:max-w-xl text-base sm:text-lg leading-relaxed text-slate-300 pt-5 sm:pt-7">
    We offer a comprehensive suite of SAP services tailored to meet the evolving needs of modern enterprises. From end-to-end SAP Implementation that aligns technology with business goals, to seamless SAP Rollout Services that help expand your systems globally, we ensure your SAP environment supports growth and efficiency. Our SAP Support Services provide continuous maintenance, issue resolution, and system optimization to ensure peak performance. With SAP Upgrade Services, we help you stay ahead by migrating to the latest versions with minimal disruption.</p>
  </div>
);

// --- Main ServicesHeader Component ---
export function ServicesHeader() {
  return (
    <div className="relative z-10 text-center sm:mb-12 px-4 sm:px-1">
      <main className="relative z-10 pt-2 pb-8 sm:pt-4 sm:pb-10 lg:pb-8 font-sans w-full">
        <BackgroundBlobs />
        <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-12 lg:gap-x-24 items-center">
            <HeaderContent />
            <SphereGlobe3D />
          </div>
        </div>
      </main>
    </div>
  );
}