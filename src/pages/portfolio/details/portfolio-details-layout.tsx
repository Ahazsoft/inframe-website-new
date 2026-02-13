"use client";

import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

import Wrapper from "@/layouts/wrapper";
import HeaderOne from "@/layouts/headers/header-one";
// import HeaderEleven from "@/layouts/headers/header-eleven";
import PortfolioDetailsThreeArea from "@/components/portfolio/details/portfolio-details-3-area";
import FooterOne from "@/layouts/footers/footer-one";
// import FooterTwo from "@/layouts/footers/footer-two";

import { charAnimation, titleAnimation } from "@/utils/title-animation";
import { ProjectType } from "@/components/portfolio/details/projectData";

type Props = {
  project: ProjectType;
};

const PortfolioDetailsLayout = ({ project }: Props) => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
    }, 100);

    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      <HeaderOne />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <PortfolioDetailsThreeArea project={project} />
          </main>

          <FooterOne topCls="" whiteFooter={true} />
        </div>
      </div>
    </Wrapper>
  );
};

export default PortfolioDetailsLayout;
