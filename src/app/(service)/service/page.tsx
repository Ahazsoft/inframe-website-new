import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import ServiceMain from "@/pages/service/service";

export const metadata: Metadata = {
  title: "Services", // will become "Services | Inframe Advertising"
  description:
    "Explore Inframe Advertising's full range of creative and strategic services: branding, digital campaigns, content production, and media planning.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Our Services | Inframe Advertising",
    description:
      "Full‑service advertising agency. We craft brand identities, run high‑performance digital ads, and produce content that converts.",
    url: "/services",
    type: "website",
    // optionally override the default OG image
    // images: ["/og-services.jpg"],
  },
};

// JSON‑LD: multiple schemas can be combined in one array
const servicesPageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Advertising & Creative Services",
    provider: {
      "@type": "ProfessionalService",
      name: "Inframe Advertising",
      url: "https://www.inframeadvertising.com",
    },
    serviceType: "Branding, Digital Marketing, Content Production",
    areaServed: {
      "@type": "Country",
      name: "United States", // adjust to your actual area
    },
    description:
      "Full‑service advertising agency offering branding, digital campaigns, content creation, and media strategy.",
    offers: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Custom Advertising Package",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What advertising services does Inframe offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide branding, digital marketing, social media management, video production, and media buying.",
        },
      },
      {
        "@type": "Question",
        name: "How do I start a project with Inframe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Contact us through the form on our contact page or call us directly. We'll schedule a discovery call to understand your goals.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with small businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Our services scale from startups to enterprise clients. We tailor every engagement to your budget and objectives.",
        },
      },
    ],
  },
];

const ServicePage = () => {
  return (
    <>
      {/* Inject structured data */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesPageSchema),
        }}
      />
      <ServiceMain />
    </>
  );
};

export default ServicePage;