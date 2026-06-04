import { projectsData, type ProjectType } from "@/components/portfolio/details/projectData";
import PortfolioDetailsLayout from "@/pages/portfolio/details/portfolio-details-layout";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Script from "next/script";

// Generate static paths for SSG
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id.toString(),
  }));
}

// Dynamic metadata – SEO & GEO core
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projectsData.find((item) => item.id === Number(id));

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested portfolio project does not exist.",
    };
  }

  // Base URL comes from the layout's metadataBase
  const projectUrl = `/portfolio/projects/${id}`;
  const projectDescription =
    project.introText?.[0] || project.goalText?.[0] || project.title;
  const projectImage =
    project.heroImage || project.thumbnailImage || project.heroVideoFallbackImage;

  return {
    title: project.title, // e.g., "Nike Campaign – Inframe Advertising"
    description: projectDescription,
    alternates: {
      canonical: projectUrl,
    },
    openGraph: {
      title: project.title,
      description: projectDescription,
      url: projectUrl,
      type: "article", // since this is a creative work showcase
      images: projectImage
        ? [
            {
              url: projectImage,
              width: 1200,
              height: 630,
              alt: project.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: projectDescription,
      images: projectImage ? [projectImage] : undefined,
    },
  };
}

// Schema.org structured data for each project
function ProjectStructuredData({ project }: { project: ProjectType }) {
  const projectUrl = `https://www.inframeadvertising.com/portfolio/projects/${project.id}`;
  const projectDescription =
    project.introText?.[0] || project.goalText?.[0] || project.title;
  const projectImage =
    project.heroImage || project.thumbnailImage || project.heroVideoFallbackImage;

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
        name: "Portfolio",
        item: "https://www.inframeadvertising.com/portfolio",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: projectUrl,
      },
    ],
  };

  // Use Article schema for a case study / portfolio piece
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    description: projectDescription,
    image: projectImage,
    url: projectUrl,
    author: {
      "@type": "Organization",
      name: "Inframe Advertising",
      url: "https://www.inframeadvertising.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Inframe Advertising",
      url: "https://www.inframeadvertising.com",
    },
    datePublished: project.year || undefined, // include if available
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": projectUrl,
    },
  };

  return (
    <Script
      id="project-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([breadcrumbSchema, articleSchema]),
      }}
    />
  );
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projectsData.find((item) => item.id === Number(id));

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectStructuredData project={project} />
      <PortfolioDetailsLayout project={project} />
    </>
  );
}