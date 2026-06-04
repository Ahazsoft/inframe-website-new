import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import AboutUsMain from "@/pages/about/about-us";

export const metadata: Metadata = {
  title: "About Us", // becomes "About Us | Inframe Advertising" via layout template
  description:
    "Inframe Advertising is a full‑service creative agency driven by strategy and storytelling. Meet our team, values, and the mission behind our work.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Inframe Advertising – Our Story & Team",
    description:
      "We are a full‑service advertising agency blending creativity with data. Learn about our culture, leadership, and what makes us different.",
    url: "/about",
    type: "website",
    // images: ["/og-about.jpg"], // optional custom image
  },
};

// JSON‑LD: AboutPage schema – adds context about the page itself
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Inframe Advertising",
  description:
    "Inframe Advertising is a full‑service creative agency founded in [Year]. We specialise in branding, digital campaigns, and strategic communication.",
  url: "https://www.inframeadvertising.com/about",
  mainEntity: {
    "@type": "Organization",
    name: "Inframe Advertising",
    // The root layout already provides the full Organization schema,
    // so this can be a lightweight reference or you can omit it.
    url: "https://www.inframeadvertising.com",
  },
};

const AboutUsPage = () => {
  return (
    <>
      {/* Inject AboutPage structured data */}
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <AboutUsMain />
    </>
  );
};

export default AboutUsPage;