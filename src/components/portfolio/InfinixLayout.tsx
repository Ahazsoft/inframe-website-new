"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { ProjectType } from "./details/projectData";
import { Leaf } from "@/components/svg";
import Hls from "hls.js";
import { useEffect, useRef } from "react";

type Props = {
  project: ProjectType;
};




export default function InfinixLayout({ project }: Props) {

  const videoRef = useRef<HTMLVideoElement>(null);

  const [playVideo, setPlayVideo] = useState(false);
    
  
  useEffect(() => {
    if (project.makingVideo && videoRef.current) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(project.makingVideo);
        hls.attachMedia(videoRef.current);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          // Optionally autoplay after HLS is ready
          if (playVideo) videoRef.current?.play();
        });
        return () => {
          hls.destroy();
        };
      } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
        // Safari natively supports HLS
        videoRef.current.src = project.makingVideo;
      }
    }
  }, [project.makingVideo, playVideo]);

  return (
    <>
      {/* TITLE */}
      <div className="tp-project-details-3-top pt-120 pb-60">
        <div className="container">
          <h2 className="tp-section-title-70 mb-40">
            {project.title}
          </h2>
        </div>
      </div>

      {/* GALLERY FIRST */}
      {/* {project.gallery && (
        <div className="container pb-120">
          <div className="infinix-grid">
            {project.gallery.map((img, i) => (
              <div key={i} className={`grid-item item-${i + 1}`}>
                <Image
                  src={img}
                  alt="gallery-img"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      )} */}


      <div className="container pb-120">
        <div className="domino-gallery">
          {project.gallery?.map((img, i) => (
            <div key={i} className={`domino-item item-${i + 1}`}>
              <Image
                src={img}
                alt={`gallery ${i + 1}`}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* MAKING OF THIS FRAME */}
      <div className="container pb-120">
        <h3 className="mb-40">The Making of This Frame</h3>

        <div
          className="making-frame"
          onMouseEnter={() => setPlayVideo(true)}
          onMouseLeave={() => setPlayVideo(false)}
        >
          {/* IMAGE */}
          <div className="making-frame-inner">
            {project.makingFrame && (
              <Image
                src={project.makingFrame}
                alt="making frame"
                fill
                style={{ objectFit: "contain" }}
              />
            )}

            {/* VIDEO */}
            <video
              ref={videoRef}
              autoPlay={false}
              muted
              loop
              playsInline
              className={`making-video ${playVideo ? "show" : ""}`}
            />
          </div>
        </div>
      </div>

      {/* CAMPAIGN OVERVIEW (INTRO + GOAL MERGED) */}
      <div className="showcase-details-2-area pb-120">
        <div className="container">
          <h4 className="showcase-details-2-section-title">
            Campaign Overview
          </h4>

          <div className="row">
            <div className="col-xl-3">
              <span className="ab-inner-subtitle mb-25">
                <Leaf /> About the Project
              </span>
            </div>

            <div className="col-xl-9">

              {/* INTRO */}
              {project.introText?.map((text, i) => (
                <p key={`intro-${i}`} className="pb-25">
                  {text}
                </p>
              ))}

              {/* GOAL */}
              {/* {project.goalText.map((text, i) => (
                <p key={`goal-${i}`} className="pb-25">
                  {text}
                </p>
              ))} */}

            </div>
          </div>
        </div>
      </div>
    </>
  );
}