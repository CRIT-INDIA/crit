"use client";
import React from "react";
import { ServiceCard } from "./s_card";
import Link from 'next/link';

const services = [
  {
    icon: { type: 'img', url: 'https://res.cloudinary.com/duz9xipfm/image/upload/v1751005882/icons8-rocket-64_u9psqx.png' },
    title: "SAP Implementation Services",
    description: "Professional sap implementation services designed to optimize your business processes and maximize ROI.",
    link: "/sap-implementation-services",
  },
  {
    icon: { type: 'img', url: 'https://res.cloudinary.com/duz9xipfm/image/upload/v1751005441/icons8-globe-100_v27ffj.png' },
    title: "SAP RollOut Services",
    description: "Professional sap rollout services designed to optimize your business processes and maximize ROI.",
    link: "/sap-rollout-services",
  },
  {
    icon: { type: 'img', url: 'https://res.cloudinary.com/duz9xipfm/image/upload/v1751005368/icons8-support-100_mi1gat.png' },
    title: "SAP Support Services",
    description: "Professional sap support services designed to optimize your business processes and maximize ROI.",
    link: "/sap-support-services",
  },
  {
    icon: { type: 'img', url: 'https://res.cloudinary.com/duz9xipfm/image/upload/v1751005286/icons8-upgrade-96_ursgya.png' },
    title: "SAP Upgrade Services",
    description: "Professional sap upgrade services designed to optimize your business processes and maximize ROI.",
    link: "/sap-upgrade-services",
  },
  {
    icon: { type: 'img', url: 'https://res.cloudinary.com/duz9xipfm/image/upload/v1751005760/icons8-integration-80_c0ug69.png' },
   title: "SAP Integration Services",
    description: "Professional sap integration services designed to optimize your business processes and maximize ROI.",
    link: "/sap-integration-services",
  },
  {
    icon: { type: 'img', url: 'https://res.cloudinary.com/duz9xipfm/image/upload/v1751005703/icons8-migration-64_kgr8tx.png' },
   title: "SAP Migration Services",
    description: "Professional sap migration services designed to optimize your business processes and maximize ROI.",
    link: "/sap-migration-services",
  },
  {
    icon: { type: 'img', url: 'https://res.cloudinary.com/duz9xipfm/image/upload/v1751005595/icons8-automation-80_zccrcv.png' },
    title: "SAP Automation Services",
    description: "Professional sap automation services designed to optimize your business processes and maximize ROI.",
    link: "/sap-automation-services",
  },
  {
    icon: { type: 'img', url: 'https://res.cloudinary.com/duz9xipfm/image/upload/v1751005506/icons8-testing-100_xsgqf9.png' },
   title: "SAP Testing Services",
    description: "Professional sap testing services designed to optimize your business processes and maximize ROI.",
    link: "/sap-testing-services ",
  },
];

export function ServicesGrid({ showAll = false }) {
  return (
    <>
      {/* Mobile: 2 cards + button, unless showAll is true */}
      {!showAll && (
        <div className="block md:hidden px-4 mb-8 pt-5">
          <div className="grid grid-cols-2 gap-4">
            {services.slice(0, 2).map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <Link href="/services" passHref legacyBehavior>
              <a className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                Explore Services
              </a>
            </Link>
          </div>
        </div>
      )}
      {/* All services grid: show on all screens if showAll, else only on desktop */}
      <div className={`${showAll ? 'grid' : 'hidden md:grid'} grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 mb-8 pt-10`}>
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </>
  );
} 