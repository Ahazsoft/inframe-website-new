import team_data from "@/data/team-data";
import TeamDetailsMain from "@/pages/team/team-details";
import { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";

// Props type
type Props = {
  params: Promise<{ id: string }>;
};

// Dynamic metadata for each team member
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const member = team_data.find((t) => t.id === Number(id));

  if (!member) {
    return {
      title: "Team Member Not Found",
      description: "The requested team member does not exist.",
    };
  }

  const memberUrl = `/team/${id}`;

  return {
    title: member.name, // e.g., "Jane Doe | Inframe Advertising" (template adds brand)
    description:
      member.bio?.slice(0, 160) ||
      `${member.name}, ${member.jobTitle || "team member"} at Inframe Advertising.`,
    alternates: {
      canonical: memberUrl,
    },
    openGraph: {
      title: `${member.name} – ${member.jobTitle || "Team Member"} | Inframe Advertising`,
      description:
        member.bio?.slice(0, 200) ||
        `Meet ${member.name}, ${member.jobTitle} at Inframe Advertising.`,
      url: memberUrl,
      type: "profile", // indicates a person page
      images: member.image
        ? [
            {
              url: member.image,
              width: 800,
              height: 800,
              alt: member.name,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary",
      title: `${member.name} – ${member.jobTitle}`,
      description: member.bio?.slice(0, 200) || "",
      images: member.image ? [member.image] : undefined,
    },
  };
}

// Generate static paths (optional, but good for SSG)
export async function generateStaticParams() {
  return team_data.map((member) => ({
    id: member.id.toString(),
  }));
}

export default async function TeamDetailsPage({ params }: Props) {
  const { id } = await params;
  const member = team_data.find((t) => t.id === Number(id));

  if (!member) {
    notFound();
  }

  // Person structured data – critical for Knowledge Graph & GEO
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.jobTitle || undefined,
    worksFor: {
      "@type": "Organization",
      name: "Inframe Advertising",
      url: "https://www.inframeadvertising.com",
    },
    url: `https://www.inframeadvertising.com/team/${id}`,
    image: member.image || undefined,
    description: member.bio || undefined,
    sameAs: member.socialLinks
      ? [
          member.socialLinks.linkedin,
          member.socialLinks.twitter,
          member.socialLinks.instagram,
        ].filter(Boolean)
      : undefined,
  };

  const breadcrumbSchema = {
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
      {
        "@type": "ListItem",
        position: 3,
        name: member.name,
        item: `https://www.inframeadvertising.com/team/${id}`,
      },
    ],
  };

  return (
    <>
      <Script
        id="team-detail-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([personSchema, breadcrumbSchema]),
        }}
      />
      <TeamDetailsMain id={id} />
    </>
  );
}