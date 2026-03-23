"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface Props {
  projects: any[];
  height: number;
}

export default function PortfolioProjectView({ projects, height }: Props) {
  const router = useRouter();

  const getCategoryClass = (category: string) => {
    switch (category) {
      case "TV Commercials":
        return "tv";
      case "Events":
        return "events";
      case "Social Media and Digital Campaigns":
        return "digital";
      case "Documentary and Brand Film":
        return "film";
      case "Photography":
        return "photo";
      default:
        return "";
    }
  };

  const getProjectThumbnail = (project: any) =>
    project.thumbnailImage || project.gallery?.[0] || project.btsGallery?.[0];

  return (
    <div className="row grid">
      {projects.map((item) => {
        const categoryClass = getCategoryClass(item.category);
        const thumbnail = getProjectThumbnail(item);
        const isGalleryCategory =
          item.category === "events" || item.category === "photo";

        // Gallery items are skipped here
        if (isGalleryCategory) return null;

        return (
              <div
                key={item.id}
                className={`col-xl-6 col-lg-6 col-md-6 grid-item ${categoryClass}`}
              >
                <div
                  className="tp-project-5-2-thumb anim-zoomin-wrap mb-30 not-hide-cursor p-relative"
                  // data-cursor="View<br>Project"
                >
                  <Link href={`/projects/${item.id}`}>
                    <Image
                      src={thumbnail}
                      alt={item.title}
                      width={600}
                      height={height}
                      style={{ objectFit: "cover" }}
                    />

                    {/* Hover Overlay */}
                    <div className="project-hover">
                      <Button
                        className="btn btn-secondary btn-sm project-btn rounded-pill bg-white text-dark fw-semibold px-4 px-md-5"
                        onClick={() => router.push(`/projects/${item.id}`)}
                      >
                        View Project
                      </Button>
                    </div>

                    <div className="hover-btn">
                      <Button className="btn btn-secondary btn-sm rounded-pill bg-white text-dark fw-semibold px-4 px-md-5">
                        View Project
                      </Button>
                    </div>

                    <div className="tp-project-5-2-category tp_fade_anim">
                      <span>{item.category}</span>
                    </div>

                    <div className="tp-project-5-2-content tp_fade_anim">
                      <span className="tp-project-5-2-meta">{item.year}</span>
                      <h4 className="tp-project-5-2-title-sm">{item.title}</h4>

                      <br />

                      <h4 className="tp-project-5-2-meta">
                        Agency: {item.agency}
                      </h4>
                    </div>
                  </Link>
                </div>
                <style jsx>{`
        .tp-project-5-2-thumb {
          border-radius: 16px;
          overflow: hidden; /* THIS makes the image respect the radius */
        }

        /* Hide button by default */
        .hover-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: opacity 0.25s ease;
          pointer-events: none; /* prevents weird hover flicker */
        }

        /* Show button ONLY when hovering the card */
        .tp-project-5-2-thumb:hover .hover-btn {
          opacity: 1;
          pointer-events: auto;
        }

        .cursor-hide {
          max-width: 100%;
          height: 900px;
          border: 4px solid red;
        }

        @media (max-width: 760px) {
          .cursor-hide {
            height: 300px;
          }
        }
      `}</style>
              </div>
            );
      })}
    </div>
  );
}
