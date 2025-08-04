'use client';

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import ContactButton from "./components/ui/ContactButton";

const geistSans = Geist({
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-screen" suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://res.cloudinary.com/duz9xipfm/image/upload/v1753937310/CRIT-3D_cpzr1n_1_efzl5o.avif" type="image/png" />
      
      {/* Updated SEO Meta Tags */}
      <title> critindia - Connecting roots of SAP</title>
      <meta name="description" content="Crit India is in SAP implementation and support. Critindia provides SAP solution and services across entire SAP range of technology." />
      <link rel="canonical" href="https://www.critindia.com/" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="critindia : Connecting roots of SAP" />
      <meta property="og:description" content="Critindia (Connecting Roots IT) is a Pune-based SAP consulting firm delivering end-to-end solutions across SAP S/4HANA, Ariba, SuccessFactors, Hybris, BusinessObjects, and Concur. With expertise in implementation, Rollout , integration, migration, automation, and testing, we streamline processes and drive real-time visibility. Our certified consultants design tailored roadmaps, execute seamless deployments, and provide comprehensive training and support. Committed to reliability, integrity, and innovation, critindia helps businesses run simple, grow faster, and thrive in a data-driven world." />
      <meta property="og:url" content="https://www.critindia.com/" />
      <meta property="og:site_name" content="critindia" />
      <meta property="article:modified_time" content="2025-05-18 T06:48:47+00:00" />
      <meta property="og:image" content="https://res.cloudinary.com/duz9xipfm/image/upload/v1753937310/CRIT-3D_cpzr1n_1_efzl5o.avif" />
      <meta property="og:image:width" content="150" />
      <meta property="og:image:height" content="40" />
      <meta property="og:image:type" content="image/png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="critindia : Connecting roots of SAP" />
      <meta name="twitter:description" content="Critindia (Connecting Roots IT) is a Pune-based SAP consulting firm delivering end-to-end solutions across SAP S/4HANA, Ariba, SuccessFactors, Hybris, BusinessObjects, and Concur. With expertise in implementation, Rollout , integration, migration, automation, and testing, we streamline processes and drive real-time visibility. Our certified consultants design tailored roadmaps, execute seamless deployments, and provide comprehensive training and support. Committed to reliability, integrity, and innovation, Critindia helps businesses run simple, grow faster, and thrive in a data-driven world." />


      {/* Structured Data Schema */}
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context":"https://schema.org",
              "@graph":[
                {
                  "@type":"WebPage",
                  "@id":"https://www.critindia.com/",
                  "url":"https://www.critindia.com/",
                  "name":"critindia : Connecting roots of SAP",
                  "isPartOf":{"@id":"https://www.critindia.com/#website"},
                  "about":{"@id":"https://www.critindia.com/#organization"},
                  "primaryImageOfPage":{"@id":"https://www.critindia.com/#primaryimage"},
                  "image":{"@id":"https://www.critindia.com/#primaryimage"},
                  "thumbnailUrl":"https://www.critindia.com/critindia.png",
                  "datePublished":"2025-07-31T11:19:30+00:00",
                  "dateModified":"2025-07-31T11:48:47+00:00",
                  "description":"Crit India is in SAP implementation and support. Critindia provides SAP solution and services across entire SAP range of technology.",
                  "breadcrumb":{"@id":"https://www.critindia.com/#breadcrumb"},
                  "inLanguage":"en-US",
                  "potentialAction":[{"@type":"ReadAction","target":["https://www.critindia.com/"]}]
                },
                {
                  "@type":"ImageObject",
                  "inLanguage":"en-US",
                  "@id":"https://www.critindia.com/#primaryimage",
                  "url":"https://www.critindia.com/critindia.png",
                  "contentUrl":"https://www.critindia.com/critindia.png",
                  "width":150,
                  "height":40,
                  "caption":"critindia-logo"
                },
                {
                  "@type":"BreadcrumbList",
                  "@id":"https://www.critindia.com/#breadcrumb",
                  "itemListElement":[{"@type":"ListItem","position":1,"name":"Home"}]
                },
                {
                  "@type":"WebSite",
                  "@id":"https://www.critindia.com/#website",
                  "url":"https://www.critindia.com/",
                  "name":"critindia",
                  "description":"Connecting roots of SAP",
                  "publisher":{"@id":"https://www.critindia.com/#organization"},
                  "potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://www.critindia.com/?s={search_term_string}"},"query-input":"required name=search_term_string"}],
                  "inLanguage":"en-US"
                },
                {
                  "@type":"Organization",
                  "@id":"https://www.critindia.com/#organization",
                  "name":"critindia",
                  "url":"https://www.critindia.com/",
                  "logo":{
                    "@type":"ImageObject",
                    "inLanguage":"en-US",
                    "@id":"https://www.critindia.com/#/schema/logo/image/",
                    "url":"https://www.critindia.com/critindia.png",
                    "contentUrl":"https://www.critindia.com/critindia.png",
                    "width":150,
                    "height":40,
                    "caption":"critindia-Connecting roots of SAP"
                  },
                  "image":{"@id":"https://www.critindia.com/#/schema/logo/image/"}
                }
              ]
            }
            `
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-[#fff5f5]`}
      >
        <div className="relative">
          <Navbar />
        </div>
        
        <div className="flex-1 flex flex-col max-w-[1800px] w-full mx-auto">
          {children}
          <SpeedInsights/>
        </div>
        <Footer />
        {/* Global Contact Button - Fixed Position */}
        <div className="fixed bottom-8 right-8 z-50 hidden md:block">
          <ContactButton variant="default" className="shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200" />
        </div>
      </body>
    </html>
  );
}
