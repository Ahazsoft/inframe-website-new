import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import PortfolioGridColTwoMain from "@/pages/portfolio/portfolio-grid-col-2-main";

export const metadata: Metadata = {
  title: "Portfolio", // becomes "Portfolio | Inframe Advertising"
  description:
    "Explore Inframe Advertising's portfolio of creative work. Case studies, campaigns, branding, and digital projects for ambitious brands.",
  alternates: {
    canonical: "/portfolio/projects",
  },
  openGraph: {
    title: "Our Portfolio | Inframe Advertising",
    description:
      "A selection of advertising and design projects that showcase our strategy, craft, and results.",
    url: "/portfolio/projects",
    type: "website",
    // images: ["/og-portfolio.jpg"],
  },
};

// Structured data for the portfolio listing page
const portfolioPageSchema = [
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
      {
        "@type": "ListItem",
        position: 2,
        name: "Portfolio",
        item: "https://www.inframeadvertising.com/portfolio/projects",
      },
    ],
  },
  // Optional: if you want to list all projects as an ItemList for SEO/GEO
  // This helps AI understand the collection.
  // {
  //   "@context": "https://schema.org",
  //   "@type": "ItemList",
  //   name: "Portfolio Projects",
  //   url: "https://www.inframeadvertising.com/portfolio/projects",
  //   itemListElement: [
  //     // You could dynamically map over your projects array here,
  //     // but a static list can be added if you import the data.
  //   ],
  // },
];

const PortfolioGridColTwoPage = () => {
  return (
    <>
      <Script
        id="portfolio-listing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioPageSchema),
        }}
      />
      <PortfolioGridColTwoMain />
    </>
  );
};

export default PortfolioGridColTwoPage;