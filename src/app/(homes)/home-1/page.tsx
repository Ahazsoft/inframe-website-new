import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import HomeMain from "@/pages/homes/home-1";

export const metadata: Metadata = {
  title: "Inframe Advertising – Creative Agency & Portfolio", // Full, precise homepage title
  description:
    "Inframe Advertising is a full‑service creative agency that builds bold brands. Strategy, design, and digital campaigns that drive growth and inspire action.",
  alternates: {
    canonical: "/", // Root canonical
  },
  openGraph: {
    title: "Inframe Advertising – Creative Agency",
    description:
      "We combine creativity with performance. Explore our work and see how we turn brands into market leaders.",
    url: "/",
    type: "website",
    // images: ["/og-home.jpg"], // optional custom OG image
  },
  twitter: {
    card: "summary_large_image",
    title: "Inframe Advertising – Creative Agency",
    description:
      "Full‑service advertising agency. Strategy, design, digital campaigns.",
    // images: ["/og-home.jpg"],
  },
};

// Structured data for the homepage
const homePageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Inframe Advertising",
    url: "https://www.inframeadvertising.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://www.inframeadvertising.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    description:
      "Full‑service advertising agency offering branding, digital marketing, and creative services.",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.inframeadvertising.com",
      },
    ],
  },
];

const Home = () => {
  return (
    <>
      <Script
        id="home-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homePageSchema),
        }}
      />
      <HomeMain />
    </>
  );
};

export default Home;