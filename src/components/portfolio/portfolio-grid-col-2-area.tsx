"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { UpArrow } from "../svg";
import { useIsotop } from "@/hooks/use-isotop";

import { Button } from "../ui/button";

import { useRouter } from "next/navigation";

import { projectsData } from "@/components/portfolio/details/projectData";
import PortfolioGalleryView from "./PortfolioGalleryView";
import PortfolioProjectView from "./PortfolioProjectView";

export default function PortfolioGridColTwoArea() {
  const { initIsotop, isotopContainer } = useIsotop();
  const [height, setHeight] = useState(900); // Default height
  const [activeFilter, setActiveFilter] = useState("*");
  const router = useRouter();
  const isGalleryMode = activeFilter === ".events" || activeFilter === ".photo";
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setHeight(500); // Set height for small screens
      } else {
        setHeight(900); // Set height for larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Re-init Isotope whenever filter changes
    setTimeout(() => {
      initIsotop();
    }, 100);
  }, [activeFilter, initIsotop]);

  // Map category to isotop class
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

  // Get thumbnail dynamically
  const getProjectThumbnail = (project: any) => {
    return (
      project.thumbnailImage || project.gallery?.[0] || project.btsGallery?.[0]
    );
  };

  return (
    <div className="tp-project-5-2-area tp-project-5-2-pt pb-130">
      <div className="container container-1530">
        {/* FILTER MENU */}
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="portfolio-filter masonary-menu d-flex justify-content-center flex-wrap gap-3 mb-40">
              <button
                data-filter="*"
                className="active"
                onClick={() => setActiveFilter("*")}
              >
                <span>SHOW ALL</span>
              </button>
              <button data-filter=".tv" onClick={() => setActiveFilter(".tv")}>
                <span>TV COMMERCIALS</span>
              </button>
              <button
                data-filter=".events"
                onClick={() => setActiveFilter(".events")}
              >
                <span>EVENTS</span>
              </button>
              <button
                data-filter=".digital"
                onClick={() => setActiveFilter(".digital")}
              >
                <span>DIGITAL CAMPAIGNS</span>
              </button>
              <button
                data-filter=".film"
                onClick={() => setActiveFilter(".film")}
              >
                <span>BRAND FILM & DOCUMENTARY</span>
              </button>
              <button
                data-filter=".photo"
                onClick={() => setActiveFilter(".photo")}
              >
                <span>PHOTOGRAPHY</span>
              </button>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="row grid" ref={isotopContainer}>
          {/* PROJECT / GALLERY VIEW */}
          <div ref={isotopContainer}>
            {isGalleryMode ? (
              <PortfolioGalleryView
                projects={projectsData.filter((item) =>
                  activeFilter === ".events"
                    ? item.category === "Events"
                    : item.category === "Photography",
                )}
              />
            ) : (
              <PortfolioProjectView projects={projectsData} height={height} />
            )}
          </div>
        </div>

        {/* MORE PROJECTS BUTTON */}
        {/* <div className="row">
          <div className="col-xl-12">
            <div className="tp-projct-5-2-btn-box mt-50 d-flex justify-content-center">
              <div className="tp-hover-btn-wrapper">
                <Link
                  className="tp-btn-circle style-2 tp-hover-btn-item tp-hover-btn"
                  href="/projects"
                >
                  <span className="tp-btn-circle-text">
                    More <br /> Projects
                  </span>
                  <span className="tp-btn-circle-icon">
                    <UpArrow />
                  </span>
                  <i className="tp-btn-circle-dot"></i>
                </Link>
              </div>
            </div>
          </div>
        </div> */}
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
}
