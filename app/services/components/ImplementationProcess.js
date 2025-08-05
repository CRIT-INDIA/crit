'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { CheckCircle, ChevronRight, Clock, Users, Settings, Headset } from 'lucide-react';

// Dynamically import Lottie with no SSR
const Lottie = dynamic(
  () => import('lottie-react').then(mod => mod.default),
  { ssr: false }
);

const implementationSteps = [
  {
    id: 'assessment',
    title: 'Assessment & Planning',
    description: 'Assessment & Planning involves a thorough analysis of your current infrastructure and business needs. We identify key challenges and opportunities to tailor a strategic implementation plan. This plan outlines clear goals, timelines, and resource allocation to ensure a smooth project execution. Close collaboration with stakeholders ensures alignment and minimizes risks throughout the process.',
    icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
    animationUrl: 'https://res.cloudinary.com/dujw4np0d/raw/upload/v1753089355/Man_and_robot_with_computers_sitting_together_in_workplace_wqrfib.json'
  },
  {
    id: 'design',
    title: 'Solution Design',
    description: 'Our experts craft a solution architecture tailored to your unique business goals and technical needs. This design ensures scalability, efficiency, and seamless integration with existing systems. By aligning technology with your strategic objectives, we create a robust foundation that supports your long-term growth and innovation.',
    icon: <Settings className="w-6 h-6 text-green-600" />,
    animationUrl: 'https://res.cloudinary.com/dujw4np0d/raw/upload/v1753091479/Business_team_c1xybu.json'
  },
  {
    id: 'implementation',
    title: 'Implementation',
    description: 'We execute the implementation carefully to ensure minimal disruption to your day-to-day business operations. Our team follows a structured approach with thorough testing and phased rollouts, maintaining system stability throughout. This ensures a smooth transition while keeping your business productive and uninterrupted.',
    icon: <Clock className="w-6 h-6 text-purple-600" />,
    animationUrl: 'https://res.cloudinary.com/dujw4np0d/raw/upload/v1753092104/compliance_yrfpwo.json'
  },
  {
    id: 'training',
    title: 'Training & Handover',
    description: 'We offer comprehensive training programs designed to equip your team with the knowledge and skills needed to effectively use the new system. Our hands-on sessions and tailored materials ensure a smooth adoption process, empowering your staff to maximize the system’s benefits and enhance overall productivity.',
    icon: <Users className="w-6 h-6 text-orange-600" />,
    animationUrl: 'https://res.cloudinary.com/dujw4np0d/raw/upload/v1753094678/Customer_Support___Help___Support_Agent_pfq47o.json'
  }
];

const ImplementationProcess = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [animations, setAnimations] = useState({});

  // Load animations
  useEffect(() => {
    const loadAnimations = async () => {
      const animationPromises = implementationSteps.map(step => 
        fetch(step.animationUrl)
          .then(response => response.json())
          .then(data => ({ [step.id]: data }))
          .catch(error => {
            console.error(`Error loading animation for ${step.id}:`, error);
            return {};
          })
      );

      const loadedAnimations = await Promise.all(animationPromises);
      setAnimations(loadedAnimations.reduce((acc, curr) => ({ ...acc, ...curr }), {}));
    };

    loadAnimations();
  }, []);

  const activeStepData = implementationSteps[activeStep];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Implementation Process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A structured approach to ensure successful deployment and adoption of your solution
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {implementationSteps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(index)}
              className={`flex flex-col items-center p-4 rounded-lg transition-all ${
                activeStep === index ? 'bg-blue-50 border-2 border-blue-200' : 'hover:bg-gray-50 border border-gray-100'
              }`}
            >
              <div className={`p-3 rounded-full mb-3 ${
                activeStep === index ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
              }`}>
                {step.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
              <span className="text-sm text-gray-500">Step {index + 1}</span>
            </button>
          ))}
        </div>

        <div className="rounded-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                  Step {activeStep + 1} of {implementationSteps.length}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {activeStepData.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {activeStepData.description}
              </p>
              <button
                onClick={() => {
                  setActiveStep((prev) => (prev + 1) % implementationSteps.length);
                }}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Next: {implementationSteps[(activeStep + 1) % implementationSteps.length].title}
                <ChevronRight className="ml-1 w-5 h-5" />
              </button>
            </div>

            <div className="h-64 md:h-80 bg-white rounded-lg overflow-hidden shadow-sm">
              {animations[activeStepData.id] ? (
                <Lottie
                  animationData={animations[activeStepData.id]}
                  loop={true}
                  style={{ height: '100%', width: '100%' }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <div className="text-gray-400">Loading animation...</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationProcess;
