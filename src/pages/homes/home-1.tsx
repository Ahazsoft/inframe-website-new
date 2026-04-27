"use client";
import { gsap } from "gsap";
import React, { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import {
  ScrollSmoother,
  ScrollTrigger,
  SplitText,
  cursorAnimation,
} from "@/plugins";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderOne from "@/layouts/headers/header-one-index";
import HeroBannerInframe from "@/components/hero-banner/hero-banner-inframe";
import VideOne from "@/components/video/video-one";
import BrandOne from "@/components/brand/brand-one";
import { ServiceInframe } from "@/components/service/service-inframe";
import ArtistOffer from "../artistoffer/ArtistOffer";
import CinemaPlatform from "../cinemaplatform/CinemaPlatform";
import BundlePackage from "../bundlepackages/BundlePackage";
import FooterOne from "@/layouts/footers/footer-one";


// animation
import { videoAnimOne } from "@/utils/video-anim";
import { teamMarqueAnim } from "@/utils/scroll-marque";
import { hoverBtn } from "@/utils/hover-btn";
import { footerTwoAnimation } from "@/utils/footer-anim";
import {
  bounceAnimation,
  charAnimation,
  fadeAnimation,
} from "@/utils/title-animation";
import FaqMain from "../faq/faq-main";
import BrandFive from "@/components/brand/brand-five";
import GlobalLoader from "@/components/Global/GlobalLoader";

const HomeMain = () => {
  useScrollSmooth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // document.body.classList.add("tp-magic-cursor");
    return () => {
      // document.body.classList.remove("tp-magic-cursor");
    };
  }, []);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      document.querySelector(".tp-magic-cursor")
    ) {
      cursorAnimation();
    }
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      videoAnimOne();
      // portfolio image wrap
      gsap.timeline({
        scrollTrigger: {
          trigger: ".tp-project-full-img-wrap",
          start: "top 65",
          end: "bottom 0%",
          pin: ".tp-project-full-img",
          pinSpacing: false,
        },
      });
      // team marquee
      teamMarqueAnim();
      hoverBtn();
      footerTwoAnimation();
      fadeAnimation();
      charAnimation();
      bounceAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  const updateLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timerId); // cleanup
  }, []);
  // if (loading) {
  //   return <GlobalLoader />;
  // }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    if (loading) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling
    }

    // Cleanup function to restore scrolling if the component unmounts while loading is true
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <div>
      <Wrapper showBackToTop={false}>
        {/* magic cursor start */}

        {/* <div id="magic-cursor">
        <div id="ball"></div>
      </div> */}
        {/* magic cursor end */}

        {/* header area start */}
        <HeaderOne />
        {/* header area end */}

        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>
              {/* hero area start */}
              {/* <HeroBannerOne /> */}
              <HeroBannerInframe />
              {/* <HeroBannerInframe stopLoading={updateLoading} /> */}
              {/* hero area end */}

              {/* video area */}
              <VideOne />
              {/* video area */}

              {/* service area */}
              <ServiceInframe />
              {/* service area */}

              {/* brand area */}
              <BrandOne />
              {/* brand area */}

              <BundlePackage />
              <ArtistOffer />
              {/* FAQ area */}
              <FaqMain />
              {/* FAQ area */}

              <CinemaPlatform />

              {/* project area */}
              {/* <ProjectOne /> */}
              {/* project area */}

              {/* award area */}
              {/* <AwardOne /> */}
              {/* award area */}

              {/* team area */}
              {/* <TeamOne /> */}
              {/* team area */}

              {/* testimonial area */}
              {/* <TestimonialOne /> */}
              {/* testimonial area */}
            </main>

            {/* footer area */}
            <FooterOne />
            {/* footer area */}
          </div>
        </div>

        {/* footer shape */}
        {/* <div className="tp-footer-shape-wrap z-index-5 smooth">
          <Link href="/contact">
            <div className="tp-footer-shape p-relative">
                <Image className="img-1" src={shape_1} alt="shape"/>
                <Image className="img-2" src={shape_2} alt="shape"/> */}
        {/* <span></span> */}
        {/* </div>
          </Link>
      </div> */}
        {/* footer shape */}
      </Wrapper>
      {loading && <GlobalLoader />}
    </div>
  );
};

export default HomeMain;
