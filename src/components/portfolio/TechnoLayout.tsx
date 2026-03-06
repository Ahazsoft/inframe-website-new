import React from "react";
import { scroller } from "react-scroll";
import Image from "next/image";
import HeroMedia from "@/components/hero-banner/hero-portfolio-details";
import { Leaf, ScrollDownTwo } from "@/components/svg";
import { ProjectType } from "./details/projectData";

type Props = { project?: ProjectType };

export default function TecnoLayout({ project }: Props) {
  if (!project) return null;

  const scrollTo = () => {
    scroller.scrollTo("xyz", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  // Combine all images for the grid
  const allImages = project.gallery?.concat(project.btsGallery || []) || [];

  return (
    <>
      {/* TOP SECTION */}
      <div className="tp-project-details-3-top tp-project-details-3-ptb">
        <div className="container container-1560">
          <h2 className="tp-section-title-70 mb-50 tp-char-animation">
            {project.title}
          </h2>
          <div className="tp-project-details-3-scroll smooth">
            <a onClick={scrollTo} className="pointer">
              <span><ScrollDownTwo /></span>
              Scroll to Explore
            </a>
          </div>
        </div>
      </div>

      {/* HERO MEDIA */}
      {project.heroVideo && <HeroMedia project={project} />}

      {/* INTRO */}
      <div className="showcase-details-2-area">
        <div className="container">
          <h4 className="showcase-details-2-section-title tp-char-animation">
            {project.introTitle}
          </h4>
          <div className="row">
            <div className="col-xl-9">
              {project.introText.map((text, i) => (
                <p key={i} className="pb-25">{text}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FULL-WIDTH GALLERY GRID */}
      {allImages.length > 0 && (
        <div
          className="tecno-full-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            width: "100vw",
            padding: "20px 0",
          }}
        >
          {allImages.map((img, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16/9", // keeps all images equal height
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <Image
                src={img}
                alt={`tecno-img-${i}`}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}