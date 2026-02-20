import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { UpArrow } from "../svg";
import { useIsotop } from "@/hooks/use-isotop";

import { projectsData } from "@/components/portfolio/details/projectData";

export default function PortfolioGridColTwoArea() {
  const { initIsotop, isotopContainer } = useIsotop();
  const [height, setHeight] = useState(900); // Default height

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setHeight(500); // Set height for small screens
            } else {
                setHeight(900); // Set height for larger screens
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check

        return () => window.removeEventListener('resize', handleResize);
    }, []);

  useEffect(() => {
    initIsotop();
  }, [initIsotop]);

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
    return project.thumbnailImage || project.gallery?.[0] || project.btsGallery?.[0];
  };


  return (
    <div className="tp-project-5-2-area tp-project-5-2-pt pb-130">
      <div className="container container-1530">

        {/* FILTER MENU */}
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="portfolio-filter masonary-menu d-flex justify-content-center flex-wrap gap-3 mb-40">
              <button data-filter="*" className="active">
                <span>SHOW ALL</span>
              </button>
              <button data-filter=".tv">
                <span>TV COMMERCIALS</span>
              </button>
              <button data-filter=".events">
                <span>EVENTS</span>
              </button>
              <button data-filter=".digital">
                <span>DIGITAL CAMPAIGNS</span>
              </button>
              <button data-filter=".film">
                <span>BRAND FILM & DOCUMENTARY</span>
              </button>
              <button data-filter=".photo">
                <span>PHOTOGRAPHY</span>
              </button>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="row grid" ref={isotopContainer}>
          {projectsData.map((item) => {
            const categoryClass = getCategoryClass(item.category);
            const thumbnail = getProjectThumbnail(item);

            return (
              <div
                key={item.id}
                className={`col-xl-6 col-lg-6 col-md-6 grid-item ${categoryClass}`}
              >
                <div
                  className="tp-project-5-2-thumb anim-zoomin-wrap mb-30 not-hide-cursor p-relative"
                  data-cursor="View<br>Project"
                >
                  <Link href={`/projects/${item.id}`} className="cursor-hide">
                    <Image
                      src={thumbnail}
                      alt={item.title}
                      width={600}
                      height={height}
                      style={{ objectFit: "cover"}}
                    />

                    <div className="tp-project-5-2-category tp_fade_anim">
                      <span>{item.category}</span>
                    </div>

                    <div className="tp-project-5-2-content tp_fade_anim">
                      <span className="tp-project-5-2-meta">
                        {item.year}
                      </span>
                      <h4 className="tp-project-5-2-title-sm">
                        {item.title}
                      </h4>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* MORE PROJECTS BUTTON */}
        <div className="row">
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
        </div>

      </div>

      <style jsx>{
        `

        .cursor-hide{
          max-width:100%;
          height:900px;
          border:4px solid red;
        }

        @media (max-width:760px){
        .cursor-hide{
          height:300px;
        }
                  
        }
        
        
        
        
        `        
        }</style>



    </div>
  );
}

