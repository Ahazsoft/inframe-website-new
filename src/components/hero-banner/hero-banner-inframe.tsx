"use client";

import React, { useEffect, useRef } from "react";
import { scroller } from "react-scroll";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUsHero() {
  const router = useRouter();
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);

  const heroTextRef = useRef<HTMLDivElement>(null);
  const h2Ref = useRef<HTMLDivElement>(null);

  const scrollTo = () => {
    scroller.scrollTo("about-info", {
      duration: 800,
      delay: 10,
      smooth: "easeInOutQuart",
    });
  };

  const text = `InFrame Productions and Promotion was founded in 2022 by two co-founders, Seyfe Molla and Eliyas Takele.
  Both founders have experience working at EBS, a major television company in Ethiopia. Their goal is to build the best creative production and marketing team.
  They aim to become one of the leading industry players in Ethiopia and a major force in the creative sector.`;

  const parts = text.split("\n");

  useEffect(() => {
    if (!sectionRef.current || !videoWrapRef.current || !h2Ref.current) return;

    const lines = h2Ref.current.querySelectorAll("h2");

    // Overlay
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=300",
      scrub: true,
      onUpdate: (self) => {
        if (!videoWrapRef.current) return; 
        const progress = Math.min(self.progress * 1, 1);
        videoWrapRef.current.style.setProperty("--overlay", String(progress));
      },
    });

    // Fade out H1 + button + p
    gsap.to(heroTextRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=100",
        scrub: true,
      },
      opacity: 0,
      y: 0,
    });

    // H2 moves up and fades in
    gsap.fromTo(
      h2Ref.current,
      { opacity: 0, y: 840 },
      {
        opacity: 1,
        y: -460,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top+=80",
          end: "+=300",
          scrub: true,
        },
      },
    );

    gsap.set(lines, { opacity: 0, y: 80 });

    gsap.to(lines, {
      opacity: 1,
      y: 0,
      stagger: 0.55,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top+=20",
        end: "+=480",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="ab-inner-hero-area ab-inner-hero-bg p-relative"
      style={{ height: "200vh" }}
    >
      
      {/* VIDEO BACKGROUND */}
      <div ref={videoWrapRef} className="ab-hero-video-wrap">
        <video className="ab-hero-video" autoPlay muted loop playsInline>
          <source
            src="/assets/img/home-01/hero/herovideo.mp4"
            type="video/mp4"
          />
        </video>

        <div className="ab-hero-overlay" />
        <div className="ab-hero-scroll-overlay" />
      </div>

      <div className="ab-inner-hero-scroll smooth">
        <a className="pointer" onClick={scrollTo}></a>
      </div>

      <div style={{ height: 40 }} />

      <div className="container container-1208">
        <div className="row">
          {/* <div className="col-xl-8"> */}

          {/* H1 + Button + P */}
          <div
            className="ab-inner-hero-title-box"
            data-lag="0.2"
            data-stagger="0.08"
            ref={heroTextRef}
          >
            <h1 className="ab-inner-hero-title ">
              Visual storytelling
              <br />
              that captivates
            </h1>

            {/* <Link className="tp-btn-white background-black" href="#">
              Contact Us
            </Link> */}

            <Button
              variant="secondary"
              className="rounded-pill bg-black text-white fw-semibold px-5 py-3"
              id="ab-inner-hero-contact-button"
              onClick={() => router.push("/contact")}
            >
              Contact Us
            </Button>

            <div style={{ height: 40 }} />

            <p className="text-white text-justify break-words ab-inner-hero-title">
              We craft powerful visual experiences that go beyond aesthetics —
              stories that move people, spark emotion, and leave a lasting
              impression. From concept to final frame, we transform ideas into
              compelling narratives that connect brands with audiences in
              meaningful and unforgettable ways.
            </p>
          </div>

          {/* H2s */}

          <div ref={h2Ref}>
            {parts.map((p, idx) => (
              <div key={idx}>
                <h2 className="text-white  ab-inner-hero-h2ref">
                  {p}
                </h2>
                <div style={{ height: idx === parts.length - 1 ? 80 : 15 }} />
              </div>
            ))}
          </div>

          {/* </div> */}
        </div>
      </div>

      <style jsx>{`
        .ab-inner-hero-area {
          position: relative;
          overflow: hidden;
          height: 160vh;
        }

        .ab-hero-video-wrap {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          --overlay: 0;
        }

.ab-hero-video {
  position: absolute;
  inset: 0;              /* fills the parent exactly */
  width: 100%;
  height: 100%;
  object-fit: cover;     /* true "background-size: cover" behavior */
  object-position: center;
}


        .ab-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0.7)
          );
        }

        .ab-hero-scroll-overlay {
          position: absolute;
          inset: 0;
          background: black;
          opacity: var(--overlay);
          pointer-events: none;
        }

        .ab-inner-hero-area .container {
          position: relative;
          z-index: 2;
        }

        .ab-inner-hero-title-box h1{
          color: #ffffff !important;
          font-size:80px;
          letter-spacing:1;
        }
        .ab-inner-hero-title-box p {
          color: #ffffff !important;
        }


        .ab-inner-hero-h2ref {
            text-align: center;
            font-size: 40px;
          }
        

        @media (max-width: 540px) {
          .ab-inner-hero-title-box h1 {
            font-size: 40px;
            line-height: 1;
            font-weight: 700;
            letter-spacing: 0.0013em;
          }

          #ab-inner-hero-contact-button {
            width: 300px;
            height: 50px;
            color: red !important;
            font-size: 40px;
          }

          .ab-inner-hero-title-box p {
            font-size: 1.1rem;
          }

          .ab-inner-hero-area {
            height: 180vh;
          }

          .ab-inner-hero-h2ref {
            text-aling:left;
            font-size: 30px;            
          }
        }
      `}</style>
    </div>
  );
}
