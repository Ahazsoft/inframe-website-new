"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
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

import { projectsData } from "./portfolio/details/projectData";

/* ============================= */
/* Intersection Observer Hook */
/* ============================= */

function useInView(
  ref: React.RefObject<Element>,
  threshold = 0.8,
  delay = 250,
) {
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
      { threshold },
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
  const router = useRouter();

  // Grid MUST show image only (no video)
  const image =
    item.heroImage ||
    item.secondImage ||
    item.gallery?.[0] ||
    item.btsGallery?.[0] ||
    "/default-placeholder.png";

  return (
    <div
      ref={ref}
      className="project-card bg-dark flex-shrink-0 position-relative overflow-hidden "
    >
      <Image
        src={image}
        alt={`Project ${item.id}`}
        fill
        className="project-image"
      />

      <div className="project-overlay" />

      <Button
        className="btn btn-secondary btn-sm project-btn rounded-pill bg-white text-dark fw-semibold px-4 px-md-5"
        onClick={() => router.push(`/projects/${item.id}`)}
      >
        View Project
      </Button>
    </div>
  );
}

/* ============================= */
/* Main Section */
/* ============================= */

export function FeaturedWorkSection() {
  const router = useRouter();
  const [paused, setPaused] = useState(false);

  const row1Marquee = useMarquee(0.6, -1);
  const row2Marquee = useMarquee(1, -1);

  const autoplayPlugin = useMemo(
    () => Autoplay({ delay: 5000, stopOnInteraction: false }),
    [],
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

  const featuredProjects = projectsData.filter((p) => p.featured === true);
  const gridProjects = projectsData.filter((p) => p.grid === true);

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
                  {project.heroVideo ? (
                    <video
                      src={project.heroVideo}
                      poster={
                        project.heroVideoFallbackImage ||
                        project.secondImage ||
                        project.heroImage ||
                        "/default-placeholder.png"
                      }
                      autoPlay={!paused}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="object-fit-cover w-100 h-100"
                    />
                  ) : (
                    <Image
                      src={
                        project.heroImage ||
                        project.secondImage ||
                        "/default-placeholder.png"
                      }
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
                        className="rounded-pill bg-white text-dark fw-semibold px-sm-1 px-md-5 fs-6"
                        onClick={() => router.push(`/projects/${project.id}`)}
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
                <GridProjectCard
                  key={`row1-${idx}`}
                  item={item}
                  paused={paused}
                />
              ),
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
                <GridProjectCard
                  key={`row2-${idx}`}
                  item={item}
                  paused={paused}
                />
              ),
            )}
          </div>
        </div>

        {/* BUTTONS BELOW SECOND GRID */}
        <div className="d-flex justify-content-between align-items-center mt-4">
          <div className="flex-grow-1 d-flex justify-content-center">
            <Button
              variant="secondary"
              className="rounded-pill bg-white text-dark fw-semibold px-md-5 py-md-3 sm:px-2 sm:py-1"
              style={{ transform: "translateX(27.5%)" }}
              onClick={() => router.push("/projects")}
            >
              See all Projects
            </Button>
          </div>

          <Button
            variant="outline"
            className="rounded-pill border-white text-white fw-semibold  px-md-5 py-md-3 sm:px-2 sm:py-1"
            onClick={() => setPaused((prev) => !prev)}
          >
            <i className={`fa ${paused ? "fa-play" : "fa-pause"}`} />
          </Button>
        </div>
      </div>
    </section>
  );
}
