import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";


// SERVICE DATA
const service_data = [
  {
    id: 1,
    type: "video",
    src: "/assets/videos/services/commercials.mp4",
    poster: "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/5882e377-84fe-4e66-3599-8ee785d38900/public",
    subtitle: "Commercial & Brand Campaigns",
    title: "Cinematic Brand Films",
    text: "Premium TV commercials and brand campaigns that combine storytelling, visual elegance, and strong brand messaging for maximum impact.",
    lists: [
      "Concept & Scriptwriting",
      "Production & Direction",
      "Post Production & Color Grade",
      "Broadcast & Digital Delivery",
    ],
  },
  {
    id: 2,
    type: "video",
    src: "/assets/videos/services/documentary.mp4",
    poster: "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/c6f0e428-b27f-42e7-350c-bcbe9e8fd400/public",
    subtitle: "Documentary & Institutional",
    title: "Cultural & Government Films",
    text: "Cinematic documentaries and institutional films that capture culture, heritage, and national development with emotional storytelling.",
    lists: [
      "Story Development",
      "Cinematic Cinematography",
      "Sound Design & Mixing",
      "Documentary Delivery",
    ],
  },
  {
    id: 3,
    type: "image",
    src: "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/49c57cf1-7477-4423-971a-43bb8e2f0b00/public",
    subtitle: "Digital & Social",
    title: "Social Media Campaigns",
    text: "Fast, modern, and engaging digital content optimized for platforms, crafted to drive engagement and audience growth.",
    lists: [
      "Short-form Video",
      "Influencer Content",
      "Digital Strategy",
      "Performance Tracking",
    ],
  },
  {
    id: 4,
    type: "image",
    src: "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/00c0b55a-2379-49f7-3f08-3efee15cad00/public",
    subtitle: "Photography",
    title: "Product & Lifestyle Photography",
    text: "High-end photography for products, lifestyle, food, and ambassadors. Clean lighting, strong composition, and commercial quality.",
    lists: [
      "Product Photography",
      "Lifestyle Photography",
      "Food & Beverage Photography",
      "Album Art & Editorial",
    ],
  },
  {
    id: 5,
    type: "image",
    src: "https://imagedelivery.net/b7i_8h3I_Vzzf0daoDffiA/83b4b10a-04b6-4d92-6d8c-33d4065e0b00/public",
    subtitle: "Events & Live Coverage",
    title: "Event Cinematography",
    text: "Dynamic event coverage with cinematic quality, capturing energy, atmosphere, and the key moments that matter.",
    lists: [
      "Event Coverage",
      "Live Cinematography",
      "Highlight Reels",
      "Brand Activation Films",
    ],
  },
];

export default function ServiceSix() {
  return (
    <div className="sv-service-area project-panel-area-2">
      <div className="container-fluid p-0">
        {service_data.map((item) => (
          <div key={item.id} className="sv-service-item project-panel-2">
            <div className="row g-0">
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-thumb">
                  {item.type === "video" ? (
                    <video
                      src={item.src}
                      poster={item.poster}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  ) : (
                  <Image
                    src={item.src}
                    alt="service-img"
                    width={1200}
                    height={800}
                    style={{ height: "auto" }}
                  />

                  )}
                </div>
              </div>

              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-content-wrap d-flex align-items-center">
                  <div className="sv-service-content">
                    <div className="sv-service-title-box">
                      <span className="sv-service-subtitle">
                        <i>{item.id < 9 ? "0" + item.id : item.id}</i>
                        {item.subtitle}
                      </span>
                      <h4 className="sv-service-title">{item.title}</h4>
                    </div>

                    <div className="sv-service-space-wrap">
                      <div className="sv-service-text">
                        <p>{item.text}</p>
                      </div>

                      <div className="sv-service-list">
                        <ul>
                          {item.lists.map((list, i) => (
                            <li key={i}>{list}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="sv-service-btn">
                        <Link href="/service-details">
                          <Button
                            variant="secondary"
                            className="rounded-pill bg-white text-dark fw-semibold px-4 px-md-5"
                          >
                            See Details
                          </Button>
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
