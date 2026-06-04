import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import TeamMain from "@/pages/team/team";

export const metadata: Metadata = {
  title: "Team", // becomes "Team | Inframe Advertising"
  description:
    "Meet the people behind Inframe Advertising. Our creative directors, strategists, designers, and producers bring bold ideas to life.",
  alternates: {
    canonical: "/team",
  },
  openGraph: {
    title: "Our Team | Inframe Advertising",
    description:
      "The talent behind our award‑winning campaigns. Learn about our team’s expertise and creative philosophy.",
    url: "/team",
    type: "website",
    // images: ["/og-team.jpg"],
  },
};

// Structured data for the Team page
const teamPageSchema = [
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
        name: "Team",
        item: "https://www.inframeadvertising.com/team",
      },
    ],
  },
  // Optional: If you have individual team member data,
  // you can add Person schemas inside an array here.
  // See note below for how to implement it.
];

const TeamPage = () => {
  return (
    <>
      <Script
        id="team-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(teamPageSchema),
        }}
      />
      <TeamMain />
    </>
  );
};

export default TeamPage;