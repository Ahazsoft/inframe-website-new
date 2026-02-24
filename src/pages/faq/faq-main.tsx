"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import BigText from "@/components/big-text";
import FooterTwo from "@/layouts/footers/footer-two";
// animation
import { charAnimation, titleAnimation } from "@/utils/title-animation";
import FaqArea from "@/components/faq/faq-area";
import { useTheme } from "next-themes";

const FaqMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });
  const { theme } = useTheme();

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {/* <main> */}
        {/* faq hero */}

        <div className="tm-hero-area tm-hero-ptb pin-spacer-fix">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="mx-auto mb-5" style={{ maxWidth: "48rem" }}>
                  {/* <span className="tm-hero-subtitle">Inframe</span> */}
                  <h2
                    className="tm-hero-content"
                    style={{
                      color: theme === "dark" ? "#f5f5f7" : "#121212",
                    }}
                  >
                    Questions ? Answers
                  </h2>
                </div>
                {/* <div className="tm-hero-text tp_title_anim">
                        <p>
                          Frequently asked question (FAQ)pages <br />
                          to find answars.
                        </p>
                      </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* faq hero */}

        {/* faq area */}
        <FaqArea />
        {/* faq area */}

        {/* big text */}
        {/* <BigText /> */}
        {/* big text */}
        {/* </main> */}

        {/* footer area */}
        {/* <FooterTwo topCls="" /> */}
        {/* footer area */}
      </div>
    </div>
  );
};

export default FaqMain;
