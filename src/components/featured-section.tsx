"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Button } from "./ui/button";
import { useMarquee } from "@/hooks/useMarquee";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

/* ============================= */
/* Data */
/* ============================= */

const featuredProjects = [
  {
    id: 1,
    category: "Documentary",
    title: "Transforming visions into visual stories.",
    type: "video",
    src: "/assets/img/featured/docufeatured.mp4",
    poster: "/assets/img/featured/fallback/docufeatured_FB.png",
  },
  {
    id: 2,
    category: "Photography",
    title: "Capturing authentic moments.",
    type: "image",
    src: "/2026-01-14_16-59.png",
  },
  {
    id: 3,
    category: "TV Commercial",
    title: "Creating compelling brand narratives.",
    type: "video",
    src: "/assets/img/featured/commercialfeatured1.mp4",
    poster: "/assets/img/featured/fallback/commercialfeatured_FB.png",
  },
  {
    id: 4,
    category: "Events",
    title: "Capturing authentic moments.",
    type: "video",
    src: "/assets/img/featured/eventfeatured.mp4",
    poster: "/assets/img/featured/fallback/eventfeatured_FB.png",
  },
  {
    id: 5,
    category: "Social Media",
    title: "Capturing authentic moments.",
    type: "image",
    src: "/assets/img/featured/smfeatured21.png",
  },
];

const gridProjects = [
  { id: 1, type: "image", src: "/assets/img/featured/grid/images/emushu01.jpg" },
  { id: 2, type: "video", src: "/assets/img/featured/grid/videos/docfeaturedgrid.mp4", poster: "/assets/img/featured/grid/videos/fallback/docfeaturedgrid.png" },
  { id: 3, type: "image", src: "/assets/img/featured/grid/images/commercial3.jpg" },
  { id: 4, type: "video", src: "/assets/img/featured/grid/videos/commercialfeatured1.mp4", poster: "/assets/img/featured/grid/videos/fallback/commercialfeatured1.png" },
  { id: 5, type: "image", src: "/assets/img/featured/grid/images/commercial2.jpg" },
  { id: 6, type: "video", src: "/assets/img/featured/grid/videos/commercialfeatured2.mp4", poster: "/assets/img/featured/grid/videos/fallback/commercialfeatured2.png" },
  { id: 7, type: "video", src: "/assets/img/featured/grid/videos/commercialfeatured3.mp4", poster: "/assets/img/featured/grid/videos/fallback/commercialfeatured3.png" },
  { id: 8, type: "image", src: "/assets/img/featured/grid/images/smfeatured1.png" },
  { id: 9, type: "video", src: "/assets/img/featured/grid/videos/commercialfeatured4.mp4", poster: "/assets/img/featured/grid/videos/fallback/commercialfeatured4.png" },
  { id: 10, type: "image", src: "/assets/img/featured/grid/images/docufeatured_2.png" },
  { id: 11, type: "video", src: "/assets/img/featured/grid/videos/commercialfeatured5.mp4", poster: "/assets/img/featured/grid/videos/fallback/commercialfeatured5.png" },
  { id: 12, type: "image", src: "/assets/img/featured/grid/images/docufeatured_2_1.png" },
  { id: 13, type: "video", src: "/assets/img/featured/grid/videos/commercialfeatured6.mp4", poster: "/assets/img/featured/grid/videos/fallback/commercialfeatured6.png" },
  { id: 14, type: "image", src: "/assets/img/featured/grid/images/docufeatured_2_2.png" },
  { id: 15, type: "video", src: "/assets/img/featured/grid/videos/eventfeatured.mp4", poster: "/assets/img/featured/grid/videos/fallback/eventfeatured.png" },
];

/* ============================= */
/* Intersection Observer Hook */
/* ============================= */

function useInView(ref: React.RefObject<Element>, threshold = 0.8, delay = 250) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timeoutId: NodeJS.Timeout | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = setTimeout(() => setInView(true), delay);
        } else {
          if (timeoutId) clearTimeout(timeoutId);
          setInView(false);
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [ref, threshold, delay]);

  return inView;
}

/* ============================= */
/* Grid Card Component */
/* ============================= */

function GridProjectCard({ item, paused }: { item: any; paused: boolean }) {
  const ref = useRef<HTMLDivElement>(null!);
  const inView = useInView(ref);

  return (
    <div
      ref={ref}
      className="project-card bg-dark flex-shrink-0 position-relative overflow-hidden"
    >
      {item.type === "video" && inView && !paused ? (
        <video
          src={item.src}
          poster={item.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="project-image"
        />
      ) : (
        <Image
          src={item.poster || item.src}
          alt={`Project ${item.id}`}
          fill
          className="project-image"
        />
      )}

      <div className="project-overlay" />

      <Button className="btn btn-secondary btn-sm project-btn rounded-pill bg-white text-dark fw-semibold px-4 px-md-5">
        View Project
      </Button>
    </div>
  );
}

/* ============================= */
/* Main Section */
/* ============================= */

export function FeaturedWorkSection() {
  const [paused, setPaused] = useState(false);

  const row1Marquee = useMarquee(0.6, -1);
  const row2Marquee = useMarquee(1, -1);

  const autoplayPlugin = useMemo(
    () => Autoplay({ delay: 5000, stopOnInteraction: false }),
    []
  );

  useEffect(() => {
    if (!autoplayPlugin) return;
    if (paused) autoplayPlugin.stop();
    else autoplayPlugin.reset();
  }, [paused, autoplayPlugin]);

  useEffect(() => {
    if (paused) {
      row1Marquee.pause();
      row2Marquee.pause();
    } else {
      row1Marquee.resume();
      row2Marquee.resume();
    }
  }, [paused]);

  return (
    <section className="featured-work-section bg-black py-5" id="our-work">
      <div className="container-fluid">

        {/* Carousel */}
        <Carousel
          opts={{ align: "center", loop: true, duration: 65 }}
          plugins={[autoplayPlugin]}
          className="w-100 mb-4"
        >
          <CarouselContent className="ml-neg-4">
            {featuredProjects.map((project) => (
              <CarouselItem key={project.id} className="custom-basis">
                <div className="position-relative overflow-hidden cursor-pointer carousel-fixed-size">

                  {project.type === "video" ? (
                    <video
                      src={project.src}
                      poster={project.poster}
                      autoPlay={!paused}
                      muted
                      loop
                      playsInline
                      preload="none"
                      className="object-fit-contain w-100 h-100"
                    />
                  ) : (
                    <Image
                      src={project.src}
                      alt={project.title}
                      fill
                      className="object-fit-cover"
                      priority
                    />
                  )}

                  <div className="custom-gradient-overlay" />

                  <div className="position-absolute bottom-0 start-0 end-0 p-3 p-md-4 d-flex flex-column flex-md-row align-items-md-end gap-3">
                    <Button
                      variant="secondary"
                      className="rounded-pill bg-white text-dark fw-semibold px-4 px-md-5"
                    >
                      View Project
                    </Button>

                    <div className="text-white">
                      <span className="fw-bold">{project.category}</span>
                      <span className="mx-2 text-white-50">•</span>
                      <span className="text-white-75">{project.title}</span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="d-none d-md-block position-relative">
            <CarouselPrevious className="carousel-arrow carousel-prev" />
            <CarouselNext className="carousel-arrow carousel-next" />
          </div>
        </Carousel>

        {/* Marquee Rows */}
        <div className="position-relative overflow-hidden">

          <div
            className="d-flex project-row mb-3 mb-md-4"
            ref={row1Marquee.ref}
            onMouseEnter={() => row1Marquee.pause()}
            onMouseLeave={() => row1Marquee.resume()}
          >
            {[...gridProjects.slice(0, 8), ...gridProjects.slice(0, 8)].map(
              (item, idx) => (
                <GridProjectCard key={`row1-${idx}`} item={item} paused={paused} />
              )
            )}
          </div>

          <div
            className="d-flex project-row"
            ref={row2Marquee.ref}
            onMouseEnter={() => row2Marquee.pause()}
            onMouseLeave={() => row2Marquee.resume()}
          >
            {[...gridProjects.slice(8, 15), ...gridProjects.slice(8, 15)].map(
              (item, idx) => (
                <GridProjectCard key={`row2-${idx}`} item={item} paused={paused} />
              )
            )}
          </div>

        </div>

        {/* BUTTONS BELOW SECOND GRID */}
        <div className="d-flex justify-content-between align-items-center mt-4">
          <div className="flex-grow-1 d-flex justify-content-center">
            <Button
              variant="secondary"
              className="rounded-pill bg-white text-dark fw-semibold px-5 py-3"
            >
              See all Projects
            </Button>
          </div>

          <Button
            variant="outline"
            className="rounded-pill border-white text-white fw-semibold px-5 py-3"
            onClick={() => setPaused((prev) => !prev)}
          >
            <i className={`fa ${paused ? "fa-play" : "fa-pause"}`} />
          </Button>
        </div>

      </div>
    </section>
  );
}
