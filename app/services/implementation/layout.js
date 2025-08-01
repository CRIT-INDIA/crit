import { metadata } from './metadata';

export { metadata };

export default function ImplementationLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.critindia.com/services/implementation",
        "url": "https://www.critindia.com/services/implementation",
        "name": "SAP Implementation Services - critindia",
        "isPartOf": { "@id": "https://www.critindia.com/#website" },
        "about": { "@id": "https://www.critindia.com/#organization" },
        "primaryImageOfPage": { "@id": "https://www.critindia.com/#primaryimage" },
        "image": { "@id": "https://www.critindia.com/#primaryimage" },
        "thumbnailUrl": "https://www.critindia.com/critindia.png",
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.critindia.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.critindia.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.critindia.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Implementation"
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  );
}
