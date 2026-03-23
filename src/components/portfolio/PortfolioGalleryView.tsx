"use client";
import React from "react";
import Image from "next/image";

interface Props {
  projects: any[];
}

export default function PortfolioGalleryView({ projects }: Props) {
  return (
    <div className="row grid">
      {projects.map((item) => {
        const gallery = item.btsGallery || [];
        return gallery.map((img:any, idx:any) => (
          <div key={idx} className="col-6 col-md-4 col-lg-3 grid-item mb-4">
            <div className="gallery-card position-relative overflow-hidden rounded shadow-sm">
              <div className="image-wrapper" style={{ aspectRatio: "1 / 1" }}>
                <Image src={img} alt={`${item.title} - ${idx}`} fill className="object-fit-cover transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="hover-overlay position-absolute bottom-0 start-0 w-100 bg-dark bg-opacity-75 text-white p-2 px-4 translate-y-100 transition-transform duration-300">              
                <br />
                <h4 className="tp-project-5-2-meta" >Agency: {item.agency}</h4>
              </div>
            </div>
          </div>
        ));
      })}

      <style jsx>{`
        .gallery-card {
          border-radius: 12px;
          overflow: hidden;
          position: relative;
        }

        .gallery-card img {
          transition: transform 0.3s ease;
        }

        .gallery-card:hover img {
          transform: scale(1.05);
        }

        .hover-overlay {
          transform: translateY(100%);
        }

        .gallery-card:hover .hover-overlay {
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}