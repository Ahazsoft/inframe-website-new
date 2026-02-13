import React from "react";
import Image from "next/image";
import { Hand } from "../svg";

// images
import shape from "@/assets/img/inner-about/about/shape-1.png";
import ab_1 from "@/assets/img/about/about-1.jpg";
import ab_2 from "@/assets/img/about/about-3.jpg";
import ab_3 from "@/assets/img/about/about-2.jpg";

export default function AboutUsArea() {
  return (
    <div className="ab-about-area ab-about-mt pb-90 z-index-5">
      <div className="container container-1480">
        <div className="ab-about-thumb-wrap mb-180">
          <div className="row align-items-end">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="ab-about-left-thumb">
                <Image
                  data-speed=".7"
                  src={ab_1}
                  alt="about-img"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="ab-about-right-thumb p-relative">
                <Image
                  data-speed="1.1"
                  className="inner-img z-index-5"
                  src={ab_2}
                  alt="about-img"
                  style={{ height: "auto" }}
                />
                <Image
                  data-speed="0.9"
                  src={ab_3}
                  alt="about-img"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div id="about-info" className="row">
          <div className="col-xxl-9">
            <div className="ab-about-content p-relative">
              <span>
                <Hand />
                Hi!
              </span>
              <p className="tp-dropcap tp_fade_bottom">
                Inframe Productions and Promotion is a creative production and marketing
                company founded in 2022 by Seyfe Molla and Eliyas Takele. Built on strong
                experience in television and media, we specialize in transforming ideas
                into powerful visual stories that strengthen brands and connect with
                audiences.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
        <div className="col-xl-9">
          <div className="row">
            <div className="col-xl-5 col-lg-5 col-md-4 mb-40">
              <div className="ab-about-category-title-box p-relative">
                <h4 className="ab-about-category-title">
                  Our Expertise <br />
                  <span>WHAT WE DO</span>
                </h4>
                <Image
                  className="ab-about-shape-1 d-none d-md-block"
                  src={shape}
                  alt="shape"
                />
              </div>
            </div>

            <div className="col-xl-7 col-lg-7 col-md-8">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
                  <div className="ab-about-category-list category-space-1 tp_fade_bottom">
                    <ul>
                      <li>Audio & Video Production</li>
                      <li>Advertising & Campaigns</li>
                      <li>Brand Strategy</li>
                      <li>Corporate & Commercial Films</li>
                      <li>Documentary Production</li>
                    </ul>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
                  <div className="ab-about-category-list category-space-2 tp_fade_bottom">
                    <ul>
                      <li>TV & Radio Commercials</li>
                      <li>Digital Campaigns</li>
                      <li>2D & 3D Animation</li>
                      <li>Music Videos</li>
                      <li>Sound Recording & Mixing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      </div>
    </div>
  );
}
