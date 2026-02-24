import React, { useEffect } from "react";
import Link from "next/link";
import { parallaxSlider } from "@/utils/parallax-slider";

const slider_data = [
  {
    id: 3,
    // subtitle: "branding",
    title: "Largo",
  },
  {
    id: 3,
    // subtitle: "Digital",
    title: "Largo",
  },
  {
    id: 3,
    // subtitle: "Markus",
    title: "Largo",
  },
  {
    id: 3,
    // subtitle: "Emko",
    title: "Largo",
  },
  {
    id: 3,
    // subtitle: "branding",
    title: "Largo",
  },
  {
    id: 2,
    // subtitle: "Craig",
    title: "Negus",
  },
  {
    id: 2,
    // subtitle: "Green",
    title: "Negus",
  },
  {
    id: 2,
    // subtitle: "branding",
    title: "Negus",
  },
  {
    id: 2,
    // subtitle: "Digital",
    title: "Negus",
  },
  {
    id: 2,
    // subtitle: "Markus",
    title: "Negus",
  },
  {
    id: 6,
    // subtitle: "Emko",
    title: "Yewendoch Guday",
  },
  {
    id: 6,
    // subtitle: "branding",
    title: "Yewendoch Guday",
  },
  {
    id: 6,
    // subtitle: "Craig",
    title: "Yewendoch Guday",
  },
  {
    id: 6,
    // subtitle: "Green",
    title: "Yewendoch Guday",
  },
  {
    id: 6,
    // subtitle: "Green",
    title: "Yewendoch Guday",
  },

  {
    id: 1,
    // subtitle: "Green",
    title: "ZTE",
  },
  {
    id: 1,
    // subtitle: "Green",
    title: "ZTE",
  },
  
];

export default function PortfolioSliderHomeTwelve() {
  useEffect(() => {
    const timer = setTimeout(() => {
      parallaxSlider();
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="parallax-slider-wrapper">
      <div className="parallax-slider">
        <div className="parallax-slider-inner">
          {/* {slider_data.map((item) => (
            <div
              className="parallax-item not-hide-cursor"
              data-cursor="View<br>Demo"
              key={item.id}
            >
              {" "}
              <Link className="cursor-hide" href="/portfolio-showcase-details">
                {" "}
                <div className="parallax-content">
                  {" "}
                  <span>{item.subtitle}</span> <h4>{item.title}</h4>{" "}
                </div>{" "}
                <div className="parallax-img"></div>{" "}
              </Link>{" "}
            </div>
          ))} */}

          {slider_data.map((item) => (
            <div className="parallax-item" key={item.id}>
              <Link href={`/projects/${item.id}`}>
                <div className="parallax-content">
                  {/* <span>{item.subtitle}</span> */}
                  <h4>{item.title}</h4>
                </div>
                <div className="parallax-img" style={{ height: "100%" }}></div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
