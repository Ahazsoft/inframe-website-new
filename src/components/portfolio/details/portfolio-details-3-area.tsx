"use client";

import React from 'react';
import { scroller } from 'react-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import Image from 'next/image';
import { Leaf, ScrollDownTwo, UpArrowFour } from '@/components/svg';
import Link from 'next/link';
import HeroMedia from '@/components/hero-banner/hero-portfolio-details';
// import { ProjectType } from '@/data/projectData';

import { ProjectType } from './projectData';

type Props = {
  project: ProjectType;
};

// slider setting
const slider_setting: SwiperOptions = {
  slidesPerView: 3,
  loop: true,
  autoplay: true,
  spaceBetween: 20,
  speed: 1000,
  breakpoints: {
    1400: { slidesPerView: 3 },
    1200: { slidesPerView: 3 },
    992: { slidesPerView: 2 },
    768: { slidesPerView: 2 },
    576: { slidesPerView: 1 },
    0: { slidesPerView: 1 },
  },
};

export default function PortfolioDetailsThreeArea({ project }: Props) {
  const scrollTo = () => {
    scroller.scrollTo('xyz', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <>
      {/* TOP SECTION */}
      <div className="tp-project-details-3-top tp-project-details-3-ptb">
        <div className="container container-1560">
          <div className="row">
            <div className="col-xl-12">
              <h2 className="tp-section-title-160 mb-50 tp-char-animation">
                {project.title}
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-6">
              <div className="tp-project-details-3-scroll smooth">
                <a onClick={scrollTo} className="pointer">
                  <span><ScrollDownTwo /></span>
                  Scroll to Explore
                </a>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="tp-project-details-3-link mt-30 text-start text-md-end">
                <Link href={project.link}>
                  Visit Website
                  <span><UpArrowFour /></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HERO IMAGE */}
      {/* <div className="tp-project-details-3-full-width-thumb mb-120">
        <Image src={project.heroImage} alt={project.title} style={{ height: 'auto' }} />
      </div> */}

      {/* <div className="tp-project-details-3-full-width-thumb mb-120">
        {project.heroVideo ? (
          <video
            src={project.heroVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-100"
            style={{ height: "auto" }}
          />
        ) : (
          <Image
            src={project.heroImage}
            alt={project.title}
            style={{ height: "auto" }}
          />
        )}
      </div> */}

      {(project.heroImage || project.heroVideo) && (
        <HeroMedia project={project} />
      )}




      {/* INTRO SECTION */}
      <div className="showcase-details-2-area pb-120">
        <div className="container">
          <h4 className="showcase-details-2-section-title tp-char-animation">
            {project.introTitle}
          </h4>

          <div className="row">
            <div className="col-xl-3">
              <span className="ab-inner-subtitle mb-25">
                <Leaf /> An introduction
              </span>
            </div>

            <div className="col-xl-9">
              {project.introText.map((text, i) => (
                <p key={i} className="pb-25">{text}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SECOND IMAGE */}
      {project.secondImage && (
        <div id="xyz" className="tp-project-details-3-thumb mb-120">
          <div className="container container-1560">
            <Image
              src={project.secondImage}
              alt={project.title}
              width={1500}
              height={800}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      )}


      {/* GOAL SECTION */}
      <div className="showcase-details-2-area pb-120">
        <div className="container">
          <h4 className="showcase-details-2-section-title tp-char-animation">
            {project.goalTitle}
          </h4>

          <div className="row">
            <div className="col-xl-3">
              <span className="ab-inner-subtitle mb-25">
                <Leaf /> The Goal
              </span>
            </div>

            <div className="col-xl-9">
              {project.goalText.map((text, i) => (
                <p key={i} className="pb-25">{text}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* GALLERY GRID */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="tp-project-details-3-thumb mb-90">
          <div className="container">
            <div className="row">
              {project.gallery.slice(0, 2).map((img, i) => {
                const isEven = i % 2 === 0;

                const width = 576;
                const height = isEven
                  ? Math.round((680 / 570) * 576)
                  : Math.round((800 / 570) * 576);

                return (
                  <div key={i} className="col-xl-6">
                    <div className="tp-project-details-3-thumb-box mb-30">
                      <Image
                        className="w-100"
                        src={img}
                        alt="gallery-img"
                        width={width}
                        height={height}
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}



      {/* SLIDER */}
      {project.btsGallery && project.btsGallery.length > 0 && (
        <div className="pd-visual-slider-wrap pb-40">
          <Swiper {...slider_setting} modules={[Autoplay]}>
            {project.btsGallery.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="pd-visual-slider-thumb fix">
                  <Image
                    src={img}
                    alt="bts-slider-img"
                    width={665}
                    height={475} 
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
)}

    </>
  );
}
