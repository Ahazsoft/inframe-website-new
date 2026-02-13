import React from "react";
import { scroller } from "react-scroll";
import Link from "next/link";

export default function AboutUsHero() {
  const scrollTo = () => {
    scroller.scrollTo("about-info", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div
      className="ab-inner-hero-area ab-inner-hero-bg p-relative"
      style={{ backgroundColor: "#222222" }}
    >

      
      {/* VIDEO BACKGROUND */}
      {/* <video
        className="ab-hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="/assets/img/home-01/hero/herovideo.mp4"
          type="video/mp4"
        />
      </video> */}

      {/* OPTIONAL DARK OVERLAY */}
      {/* <div className="ab-hero-overlay"></div> */}

      <div className="breadcurmb-site d-none">
        <h6>About Us</h6>
      </div>

      <div className="ab-inner-hero-scroll smooth">
        <a className="pointer" onClick={scrollTo}></a>
      </div>

      <div className="container container-1480">
        <div className="row">
          <div className="col-xl-8">
            <div
              className="ab-inner-hero-title-box"
              data-lag="0.2"
              data-stagger="0.08"
            >
            <h1 className="ab-inner-hero-title tp-char-animation">
              Crafting Powerful Brand Stories
            </h1>
            <p>
              Creative production and marketing solutions that bring ideas to life. Inframe Productions and Promotion develops creative production and marketing
              solutions that bring brands to life and drive real impact.
            </p>

            </div>
          </div>
        </div>

        {/* <div className="row justify-content-end">
          <div className="col-xl-5 col-lg-8">
            <div
              className="ab-inner-hero-content"
              data-lag="0.2"
              data-stagger="0.08"
            >
            <p>
              Inframe Productions and Promotion develops creative production and marketing
              solutions that bring brands to life and drive real impact.
            </p>
              <Link className="tp-btn-white-sm border-style" href="#">
                Our Story
              </Link>
            </div>
          </div>
        </div> */}
      </div>

      {/* INLINE CSS for hero video */}

      <style jsx>{`
        .ab-inner-hero-bg {
          background-image: none !important;
          background-color: #222222 !important;
        }

        .ab-inner-hero-bg::before,
        .ab-inner-hero-bg::after {
          content: none !important;
          display: none !important;
        }

      
        .ab-inner-hero-area {
          position: relative;
          overflow: hidden;
          height: 100vh;
        }

        .ab-hero-video {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: translate(-50%, -50%);
          z-index: 0;
        }

        .ab-hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.35);
          z-index: 1;
        }

        .ab-inner-hero-area .container {
          position: relative;
          z-index: 2;
        }
      `}</style>
    </div>
  );
}
