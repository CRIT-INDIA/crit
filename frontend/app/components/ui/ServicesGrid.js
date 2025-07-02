"use client";
import React from "react";
import { ServiceCard } from "./ServiceCard";

const services = [
  {
    icon: { type: 'img', url: 'https://res.cloudinary.com/duz9xipfm/image/upload/v1751005882/icons8-rocket-64_u9psqx.png' },
    title: "SAP Implementation Services",
    description: "Professional sap implementation services designed to optimize your business processes and maximize ROI.",
    link: "/services/implementation",
  },
  {
    icon: { type: 'img', url: 'https://res.cloudinary.com/duz9xipfm/image/upload/v1751005441/icons8-globe-100_v27ffj.png' },
    title: "SAP RollOut Services",
    description: "Professional sap rollout services designed to optimize your business processes and maximize ROI.",
    link: "/services/rollout",
  },
  {
    icon: { type: 'img', url: 'https://res.cloudinary.com/duz9xipfm/image/upload/v1751005368/icons8-support-100_mi1gat.png' },
    title: "SAP Support Services",
    description: "Professional sap support services designed to optimize your business processes and maximize ROI.",
    link: "/services/support",
  },
  {
    icon: { type: 'img', url: 'https://res.cloudinary.com/duz9xipfm/image/upload/v1751005286/icons8-upgrade-96_ursgya.png' },
    title: "SAP Upgrade Services",
    description: "Professional sap upgrade services designed to optimize your business processes and maximize ROI.",
    link: "/services/upgrade",
  },
  {
    icon: { type: 'img', url: 'https://res.cloudinary.com/duz9xipfm/image/upload/v1751005760/icons8-integration-80_c0ug69.png' },
   title: "SAP Integration Services",
    description: "Professional sap integration services designed to optimize your business processes and maximize ROI.",
    link: "/services/integration",
  },
  {
    icon: { type: 'img', url: 'https://res.cloudinary.com/duz9xipfm/image/upload/v1751005703/icons8-migration-64_kgr8tx.png' },
   title: "SAP Migration Services",
    description: "Professional sap migration services designed to optimize your business processes and maximize ROI.",
    link: "/services/migration",
  },
  {
    icon: { type: 'img', url: 'https://res.cloudinary.com/duz9xipfm/image/upload/v1751005595/icons8-automation-80_zccrcv.png' },
    title: "SAP Automation Services",
    description: "Professional sap automation services designed to optimize your business processes and maximize ROI.",
    link: "/services/automation",
  },
  {
    icon: { type: 'img', url: 'https://res.cloudinary.com/duz9xipfm/image/upload/v1751005506/icons8-testing-100_xsgqf9.png' },
   title: "SAP Testing Services",
    description: "Professional sap testing services designed to optimize your business processes and maximize ROI.",
    link: "/services/testing",
  },
];

export function ServicesGrid({ mobileLimit }) {
  return (
    <>
      {/* Mobile: Show mobileLimit services and a button if set, else show all services and no button */}
      <div className="block md:hidden px-4 mb-8">
        <div className="grid grid-cols-1 gap-4">
          {(typeof mobileLimit === 'number' ? services.slice(0, mobileLimit) : services).map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
        {typeof mobileLimit === 'number' && (
          <a
            href="/services"
            className="mt-4 w-full inline-block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition-colors duration-200 text-base"
          >
            Explore Services
          </a>
        )}
      </div>
      {/* Desktop/Tablet: Show all services */}
      <div className="hidden md:grid relative grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 px-4 sm:px-6 mb-12 sm:mb-16 md:mb-20">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </>
  );
} 