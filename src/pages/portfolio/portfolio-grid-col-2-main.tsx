"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText, cursorAnimation } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import HeaderOne from "@/layouts/headers/header-one";
import PortfolioGridColTwoArea from "@/components/portfolio/portfolio-grid-col-2-area";
import BigText from "@/components/big-text";
import FooterTwo from "@/layouts/footers/footer-two";
import FooterOne from "@/layouts/footers/footer-one";
// animation
import { hoverBtn } from "@/utils/hover-btn";
import { charAnimation, fadeAnimation, titleAnimation, zoomAnimation } from "@/utils/title-animation";

const PortfolioGridColTwoMain = () => {
  useScrollSmooth();

  useEffect(() => {
    document.body.classList.add("tp-magic-cursor");
    return () => {
      document.body.classList.remove("tp-magic-cursor");
    }
  }, []);

  useEffect(() => {
    if(typeof window !== 'undefined' && document.querySelector('.tp-magic-cursor')) {
      cursorAnimation();
    }
  },[]);

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      hoverBtn();
      zoomAnimation();
      fadeAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>

      {/* magic cursor start */}
      <div id="magic-cursor">
        <div id="ball"></div>
      </div>
      {/* magic cursor end */}
      
      {/* header area start */}
      <HeaderOne />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* portfolio hero */}
            <div className="tm-hero-area tm-hero-ptb">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tm-hero-content mt-150">
                      <span className="tm-hero-subtitle">
                        Inframe Productions & Promotion
                      </span>
                    <h4 className="tm-hero-title fs-120 tp-char-animation">
                      Building Brands Through Story
                    </h4>
                    </div>
                    <div className="tm-hero-text tp_title_anim pb-100">
                      <p>
                        We are a creative production and marketing company delivering powerful
                        visual storytelling through TV, radio, and digital campaigns that connect
                        brands with their audiences.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            {/* portfolio hero */}

            {/* portfolio area */}
            <PortfolioGridColTwoArea />
            {/* portfolio area */}

            {/* big text */}
            <BigText />
            {/* big text */}
          </main>

          {/* footer area */}
          <FooterOne topCls="" />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default PortfolioGridColTwoMain;
