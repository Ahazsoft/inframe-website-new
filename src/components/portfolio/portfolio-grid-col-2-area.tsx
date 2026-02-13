import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { UpArrow } from "../svg";
import { useIsotop } from "@/hooks/use-isotop";

import { projectsData } from "@/components/portfolio/details/projectData";

export default function PortfolioGridColTwoArea() {
  const { initIsotop, isotopContainer } = useIsotop();

  useEffect(() => {
    initIsotop();
  }, [initIsotop]);

  // Map category to isotop class
  const getCategoryClass = (category: string) => {
    switch (category) {
      case "TV Commercials":
        return "tv";
      case "Events":
        return "events";
      case "Social Media and Digital Campaigns":
        return "digital";
      case "Documentary and Brand Film":
        return "film";
      case "Photography":
        return "photo";
      default:
        return "";
    }
  };

  // Get thumbnail dynamically
  const getProjectThumbnail = (project: any) => {
    return project.heroImage || project.gallery?.[0] || project.btsGallery?.[0];
  };


  return (
    <div className="tp-project-5-2-area tp-project-5-2-pt pb-130">
      <div className="container container-1530">

        {/* FILTER MENU */}
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="portfolio-filter masonary-menu d-flex justify-content-center flex-wrap gap-3 mb-40">
              <button data-filter="*" className="active">
                <span>SHOW ALL</span>
              </button>
              <button data-filter=".tv">
                <span>TV COMMERCIALS</span>
              </button>
              <button data-filter=".events">
                <span>EVENTS</span>
              </button>
              <button data-filter=".digital">
                <span>DIGITAL CAMPAIGNS</span>
              </button>
              <button data-filter=".film">
                <span>BRAND FILM & DOCUMENTARY</span>
              </button>
              <button data-filter=".photo">
                <span>PHOTOGRAPHY</span>
              </button>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="row grid" ref={isotopContainer}>
          {projectsData.map((item) => {
            const categoryClass = getCategoryClass(item.category);
            const thumbnail = getProjectThumbnail(item);

            return (
              <div
                key={item.id}
                className={`col-xl-6 col-lg-6 col-md-6 grid-item ${categoryClass}`}
              >
                <div
                  className="tp-project-5-2-thumb anim-zoomin-wrap mb-30 not-hide-cursor p-relative"
                  data-cursor="View<br>Project"
                >
                  <Link href={`/projects/${item.id}`} className="cursor-hide">
                    <Image
                      src={thumbnail}
                      alt={item.title}
                      width={600}
                      height={900}
                      style={{ objectFit: "cover"}}
                    />

                    <div className="tp-project-5-2-category tp_fade_anim">
                      <span>{item.category}</span>
                    </div>

                    <div className="tp-project-5-2-content tp_fade_anim">
                      <span className="tp-project-5-2-meta">
                        {item.year}
                      </span>
                      <h4 className="tp-project-5-2-title-sm">
                        {item.title}
                      </h4>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* MORE PROJECTS BUTTON */}
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-projct-5-2-btn-box mt-50 d-flex justify-content-center">
              <div className="tp-hover-btn-wrapper">
                <Link
                  className="tp-btn-circle style-2 tp-hover-btn-item tp-hover-btn"
                  href="/projects"
                >
                  <span className="tp-btn-circle-text">
                    More <br /> Projects
                  </span>
                  <span className="tp-btn-circle-icon">
                    <UpArrow />
                  </span>
                  <i className="tp-btn-circle-dot"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// import React, { useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { UpArrow } from "../svg";
// import { useIsotop } from "@/hooks/use-isotop";

// import port_1 from "@/assets/img/inner-project/portfolio-col-2/port-1.jpg";
// import port_2 from "@/assets/img/inner-project/portfolio-col-2/port-2.jpg";
// import port_3 from "@/assets/img/inner-project/portfolio-col-2/port-3.jpg";
// import port_4 from "@/assets/img/inner-project/portfolio-col-2/port-4.jpg";
// import port_5 from "@/assets/img/inner-project/portfolio-col-2/port-5.jpg";
// import port_6 from "@/assets/img/inner-project/portfolio-col-2/port-6.jpg";

// const portfolio_data = [
//   // TV Commercials
//   {
//     id: 1,
//     img: port_1,
//     category: "TV Commercials",
//     title: "ZTE – Video Production",
//     year: "2024",
//     show: "tv",
//   },
//   {
//     id: 2,
//     img: port_2,
//     category: "TV Commercials",
//     title: "Negus Malt – Video Production",
//     year: "2024",
//     show: "tv",
//   },
//   {
//     id: 3,
//     img: port_3,
//     category: "TV Commercials",
//     title: "Largo Detergent – Video Production",
//     year: "2024",
//     show: "tv",
//   },

//   // Social Media and Digital Campaigns
//   {
//     id: 4,
//     img: port_4,
//     category: "Social Media and Digital Campaigns",
//     title: "Castel Wine – Valentine’s Day Campaign",
//     year: "2024",
//     show: "social",
//   },
//   {
//     id: 5,
//     img: port_5,
//     category: "Social Media and Digital Campaigns",
//     title: "Ethiopian Airlines – “The New Spirit of Africa”",
//     year: "2024",
//     show: "social",
//   },
//   {
//     id: 6,
//     img: port_6,
//     category: "Social Media and Digital Campaigns",
//     title: "Yewendoch Guday × TECNO Mobile – Brand Collaboration",
//     year: "2024",
//     show: "social",
//   },
//   {
//     id: 7,
//     img: port_1,
//     category: "Social Media and Digital Campaigns",
//     title: "Senq Malt – Mother’s Day Campaign",
//     year: "2024",
//     show: "social",
//   },
//   {
//     id: 8,
//     img: port_2,
//     category: "Social Media and Digital Campaigns",
//     title: "Ethio Telecom – 5G Launch Campaign",
//     year: "2024",
//     show: "social",
//   },
//   {
//     id: 9,
//     img: port_3,
//     category: "Social Media and Digital Campaigns",
//     title: "Abubeker Nura × TECNO – Ambassador Campaign",
//     year: "2024",
//     show: "social",
//   },
//   {
//     id: 10,
//     img: port_4,
//     category: "Social Media and Digital Campaigns",
//     title: "TECNO × Selam Tesfaye – Social Media Campaign",
//     year: "2024",
//     show: "social",
//   },
//   {
//     id: 11,
//     img: port_5,
//     category: "Social Media and Digital Campaigns",
//     title: "Jetson Doro – Social Media Photography & Video",
//     year: "2024",
//     show: "social",
//   },

//   // Events
//   {
//     id: 12,
//     img: port_6,
//     category: "Events",
//     title: "Infinix – PUBG 2025 Event Campaign",
//     year: "2025",
//     show: "events",
//   },
//   {
//     id: 13,
//     img: port_1,
//     category: "Events",
//     title: "Addis Ababa City – Night Life & Convention Center",
//     year: "2024",
//     show: "events",
//   },

//   // Documentary
//   {
//     id: 14,
//     img: port_2,
//     category: "Documentary",
//     title: "Wenchi Eco Lodge – PMO Documentary",
//     year: "2024",
//     show: "doc",
//   },
//   {
//     id: 15,
//     img: port_3,
//     category: "Documentary",
//     title: "Cubera Churchura Lodge – Documentary",
//     year: "2024",
//     show: "doc",
//   },
//   {
//     id: 16,
//     img: port_4,
//     category: "Documentary",
//     title: "National Palace Museum – Heritage Documentary",
//     year: "2024",
//     show: "doc",
//   },
//   {
//     id: 17,
//     img: port_5,
//     category: "Documentary",
//     title: "Beynouna Village – Documentary",
//     year: "2024",
//     show: "doc",
//   },
//   {
//     id: 18,
//     img: port_6,
//     category: "Documentary",
//     title: "Teracon Coffee – Brand Documentary & Commercial",
//     year: "2024",
//     show: "doc",
//   },

//   // Photography
//   {
//     id: 19,
//     img: port_1,
//     category: "Photography",
//     title: "STG Buhe Camping – Beer Photography",
//     year: "2024",
//     show: "photo",
//   },
//   {
//     id: 20,
//     img: port_2,
//     category: "Photography",
//     title: "Jenboro – Real Estate Lifestyle Photography",
//     year: "2024",
//     show: "photo",
//   },
//   {
//     id: 21,
//     img: port_3,
//     category: "Photography",
//     title: "Castel Beer – Product Photography",
//     year: "2024",
//     show: "photo",
//   },
//   {
//     id: 22,
//     img: port_4,
//     category: "Photography",
//     title: "TECNO Dinayet – Lifestyle Photography",
//     year: "2024",
//     show: "photo",
//   },
//   {
//     id: 23,
//     img: port_5,
//     category: "Photography",
//     title: "TECNO Wendoc Guday – Storytelling Photography",
//     year: "2024",
//     show: "photo",
//   },
//   {
//     id: 24,
//     img: port_6,
//     category: "Photography",
//     title: "TECNO Abubeker – Ambassador Photography",
//     year: "2024",
//     show: "photo",
//   },
//   {
//     id: 25,
//     img: port_1,
//     category: "Photography",
//     title: "Infinix × Selam Tesfaye – Social Media Photography",
//     year: "2024",
//     show: "photo",
//   },
//   {
//     id: 26,
//     img: port_2,
//     category: "Photography",
//     title: "Nigus Malt – Commercial Photography",
//     year: "2024",
//     show: "photo",
//   },
//   {
//     id: 27,
//     img: port_3,
//     category: "Photography",
//     title: "Product Detergent – Product Photography",
//     year: "2024",
//     show: "photo",
//   },
//   {
//     id: 28,
//     img: port_4,
//     category: "Photography",
//     title: "Leykun – Album Art Photography (Vol. 1 & 2)",
//     year: "2024",
//     show: "photo",
//   },
//   {
//     id: 29,
//     img: port_5,
//     category: "Photography",
//     title: "Jetson Doro – Food Photography",
//     year: "2024",
//     show: "photo",
//   },
// ];




// export default function PortfolioGridColTwoArea() {
//   const { initIsotop, isotopContainer } = useIsotop();

//   useEffect(() => {
//     initIsotop();
//   }, [initIsotop]);
//   return (
//     <div className="tp-project-5-2-area tp-project-5-2-pt pb-130">
//       <div className="container container-1530">
//         <div className="row justify-content-center">
//           <div className="col-xl-8">
//             <div className="portfolio-filter masonary-menu d-flex justify-content-center mb-40">
//               <button data-filter="*" className="active">
//                 <span>SHOW ALL</span>
//               </button>
//               <button data-filter=".tv">
//                 <span>TV COMMERCIALS</span>
//               </button>
//               <button data-filter=".radio">
//                 <span>Events</span>
//               </button>
//               <button data-filter=".digital">
//                 <span>DIGITAL CAMPAIGNS</span>
//               </button>
//               <button data-filter=".photo">
//                 <span>PHOTOGRAPHY</span>
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="row grid" ref={isotopContainer}>
//           {portfolio_data.map((item) => (
//             <div
//               key={item.id}
//               className={`col-xl-6 col-lg-6 col-md-6 grid-item ${item.show}`}
//             >
//               <div className="tp-project-5-2-thumb anim-zoomin-wrap mb-30 not-hide-cursor p-relative" data-cursor="View<br>Demo">
//                 <Link href="/portfolio-details-1" className="cursor-hide">
//                   <Image
//                     className="anim-zoomin"
//                     src={item.img}
//                     alt="port-img"
//                     style={{ height: "auto" }}
//                   />
//                   <div className="tp-project-5-2-category tp_fade_anim">
//                     <span>{item.category}</span>
//                   </div>
//                   <div className="tp-project-5-2-content tp_fade_anim">
//                     <span className="tp-project-5-2-meta">{item.year}</span>
//                     <h4 className="tp-project-5-2-title-sm">{item.title}</h4>
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="row">
//           <div className="col-xl-12">
//             <div className="tp-projct-5-2-btn-box mt-50 d-flex justify-content-center">
//               <div className="tp-hover-btn-wrapper">
//                 <Link
//                   className="tp-btn-circle style-2 tp-hover-btn-item tp-hover-btn"
//                   href="/portfolio-grid-col-4-fullwidth"
//                 >
//                   <span className="tp-btn-circle-text">
//                     More <br /> Projects
//                   </span>
//                   <span className="tp-btn-circle-icon">
//                     <UpArrow />
//                   </span>
//                   <i className="tp-btn-circle-dot"></i>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
