import Image from "next/image";
import useLazyVideo from "@/hooks/useLazyVideo";
import { useEffect, useRef } from "react";

const HeroMedia = ({ project }) => {
  const { videoRef, isVisible } = useLazyVideo();
  const hasVideo = !!project.heroVideo;

  // Play/pause on visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isVisible, videoRef]);

  // Mobile fallback (optional)
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  if (isMobile && project.heroVideoFallbackImage) {
    return (
      <div className="tp-project-details-3-full-width-thumb mb-120">
        <Image
          src={project.heroVideoFallbackImage}
          alt={project.title}
          style={{ height: "auto" }}
        />
      </div>
    );
  }

  return (
    <div className="tp-project-details-3-full-width-thumb mb-120">
      {hasVideo ? (
        <video
          ref={videoRef}
          src={project.heroVideo}
          poster={project.heroVideoPoster}
          playsInline
          muted
          loop
          className="w-100"
          style={{ height: "auto" }}
        >
          {/* fallback if video not supported */}
          {project.heroVideoFallbackImage && (
             <Image
                src={project.heroVideoFallbackImage}
                alt={project.title}
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
                />
          )}
        </video>
      ) : (
        <Image
          src={project.heroImage}
          alt={project.title}
          width={1500}
          height={900}
          style={{ objectFit: "cover" }}
        />
      )}
    </div>
  );
};

export default HeroMedia;
