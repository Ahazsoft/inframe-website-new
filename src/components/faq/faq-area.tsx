import React from "react";
import Image from "next/image";
import { Search } from "../svg";
import faq_banner from '@/assets/img/inner-faq/faq/banner-faq.jpg';
import FaqItem from "./faq-item";

// type 
type IFaq = {
  id: number;
  question: string;
  answer: string;
}
// faq data
export const faq_data: IFaq[] = [
  {
    id: 1,
    question: "What services does Inframe offer?",
    answer:
      "We provide full-service audiovisual production and marketing solutions, including TV commercials, documentaries, social media content, event coverage, radio programming, animations, and brand identity services.",
  },
  {
    id: 2,
    question: "How does Inframe work with clients?",
    answer:
      "We start by understanding your brand, audience, and goals. Then we build a strategy, develop creative concepts, and deliver production-ready content from concept to final execution.",
  },
  {
    id: 3,
    question: "Can Inframe handle both production and marketing?",
    answer:
      "Yes. We are a creative studio that combines production expertise with innovative marketing strategies to ensure your brand is seen, heard, and remembered.",
  },
  {
    id: 4,
    question: "Do you work with startups and established companies?",
    answer:
      "Absolutely. We support everything from startup brand identity design to high-end interactive campaigns for established organizations and corporations.",
  },
  {
    id: 5,
    question: "What makes Inframe different from other agencies?",
    answer:
      "We combine strong strategic planning with creative execution, led by a team with real industry experience. Our work focuses on building long-term brand value, not just short-term campaigns.",
  },
  {
    id: 6,
    question: "How do I start a project with Inframe?",
    answer:
      "Just contact us with your goals and project details. We’ll schedule a consultation, discuss your vision, and propose a tailored plan that fits your budget and timeline.",
  },
];


export default function FaqArea() {
  return (
    // <div className="fq-faq-area fq-faq-bdr pt-80 pb-140">
    <div className="fq-faq-area fq-faq-bdr pt-160 pb-140">

      <div className="container">
        <div className="row">
          <div className="col-xl-16 col-lg-16">
            <div className="fq-faq-wrapper">
              <div className="tp-service-2-accordion-box">
                <div className="accordion" id="accordionExample">
                  {faq_data.map((item) => (
                    <FaqItem key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-xl-4 col-lg-4">
            <div className="fq-faq-sidebar">
              <div className="fq-faq-sidebar-content">
                <h4 className="fq-faq-sidebar-title">Q&A</h4>
                <p>
                  Lorem ipsum dolor sit laud munere dicunt detraxit mel, nisl
                  evertitu <br /> eu vim.
                </p>
              </div>
              <div className="fq-faq-sidebar-thumb">
                <Image
                  className="w-100"
                  src={faq_banner}
                  alt="faq-banner"
                  style={{height:'auto'}}
                />
              </div>
              <div className="fq-faq-sidebar-input p-relative">
                <input type="text" placeholder="Search product" />
                <button className="fq-faq-sidebar-search">
                  <Search />
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
