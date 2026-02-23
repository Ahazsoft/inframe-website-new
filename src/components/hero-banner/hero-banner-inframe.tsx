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

    const ctx = gsap.context(() => {
      const lines = h2Ref.current!.querySelectorAll("h2");

      // Initial states
      gsap.set(heroTextRef.current, { opacity: 0 });
      gsap.set(lines, { opacity: 0, y: 80 });
      gsap.set(videoWrapRef.current, { "--overlay": 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=950", 
          scrub: true,
          invalidateOnRefresh: true,
          pin: true,
        }
      });

      /**
       * 0:00 — Video plays alone
       */
      tl.to({}, { duration: 1.2 });

      /**
       * 0:05 — Hero fades in
       */
      tl.to(heroTextRef.current, {
        opacity: 1,
        duration: 0.15,
        ease: "none",
      });

      /**
       * 0:05–0:15 — Hero holds 
       */
      tl.to({}, { duration: 0.45 });

      /**
       * 0:15 — Hero fades out while darkening begins
       */
      tl.to(heroTextRef.current, {
        opacity: 0,
        duration: 1,
        ease: "none",
      });

      tl.to(videoWrapRef.current, {
        "--overlay": 0.65,
        duration: 1,
        ease: "none",
      }, "<");

      /**
       * 0:20 — First H2
       */
      tl.to(videoWrapRef.current, {
        "--overlay": 0.85,
        duration: 0.8,
        ease: "none",
      });

      tl.to(lines[0], {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "none",
      }, "<");

      /**
       * 0:25 — Second H2
       */
      tl.to(videoWrapRef.current, {
        "--overlay": 0.92,
        duration: 0.8,
        ease: "none",
      });

      tl.to(lines[1], {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "none",
      }, "<");

      /**
       * 0:30 — Third H2
       */
      tl.to(videoWrapRef.current, {
        "--overlay": 0.95,
        duration: 0.8,
        ease: "none",
      });

      tl.to(lines[2], {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "none",
      }, "<");

    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <div
      ref={sectionRef}
      // className="ab-inner-hero-area ab-inner-hero-bg p-relative"
      className="ab-inner-hero-area p-relative"
      style={{ height: "100vh" }}
    >
      
      {/* VIDEO BACKGROUND */}
      <div ref={videoWrapRef} className="ab-hero-video-wrap">
        <video
          className="ab-hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          src="/assets/img/home-01/hero/herovideo.mp4"
        />

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
              We craft powerful visual experiences that go beyond aesthetics
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
          height: 200vh;
          background: transparent
          
        }

        .ab-hero-video-wrap {
          position: absolute;          
          inset: 0;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          z-index: 0;              
          --overlay: 0;
          pointer-events: none;    
        }


        .ab-hero-video {
          position: absolute;
          top: 50%;
          left: 50%;
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          transform: translate(-50%, -50%);
          object-fit: cover;
          will-change: transform;
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
          position: absolute;
          z-index: 2;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .ab-inner-hero-title-box {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 75%;
          margin: 0 auto;              
          text-align: center;         
          display: flex;
          flex-direction: column;
          align-items: center;        
          justify-content: center;
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


          .ab-inner-hero-h2ref {
            text-aling:left;
            font-size: 30px;            
          }
        }
      `}</style>
    </div>
  );
}
