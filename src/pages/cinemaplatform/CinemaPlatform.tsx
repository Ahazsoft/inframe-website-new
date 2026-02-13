import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";


const CinemaPlatform = () => {
  const router = useRouter();
  return (
    <section className="section-routers"
    style={{
      width: "97%",
      margin: "auto",
      }}
      >
      <div
        className="lower-container"
        style={{
          position: "relative",
          maxWidth: "100%",
          margin: "40px auto",
          display: "flex",
          justifyContent: "space-between",
          gap: "32px", // space between boxes preserved
        }}
      >
        {/* Cinema Grade */}
        <div
          className="d-flex flex-column align-items-center text-center p-5"
          style={{
            backgroundColor: "#ECBD46",
            width: "48.5%",
            minHeight: "880px",
            justifyContent: "space-between",
          }}
        >
          {/* Top content */}
          <div className="cinema-grade">
            <span
              className="fw-semibold text-uppercase"
              style={{ fontSize: "30px" }}
            >
              Cinema Grade
            </span>

            <p
              className="typography-router-headline "
              
            >
              Professional quality. <br/> Cinematic in every frame.
            </p>

            {/* <div className="d-flex align-items-center gap-5"> */}
            <div className="typography-router-cta ctas large-12 large-centered pb-100">



              <Button
                variant="secondary"
                className="rounded-pill bg-black text-white fw-semibold px-5 py-3"
                onClick={() => router.push("/service")}
              >
                Services
              </Button>

              

              <Link
                href="/about-us"
                className="text-primary fw-medium"
                style={{ marginLeft: "0.8em" }}
              >
                Learn more 
                <i className="fa-solid fa-angle-right learn-more-icon"></i>
              </Link>


            



            </div>

          </div>

          {/* Image */}
          <div
            className="position-relative rounded-4 overflow-hidden shadow-lg"
            style={{
              width: "100%",
              maxWidth: "80%",
              height: "100%",
              
            }}
          >
            <Image
              src="/assets/img/home-01/service/serviceback1.png"
              alt="Cinema grade example"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Multi Platform */}
        <div
          className="d-flex flex-column align-items-center text-center p-5"
          style={{
            backgroundColor: "#ECBD46",
            width: "48.5%",
            minHeight: "880px",
            justifyContent: "space-between",
          }}
        >
          {/* Top content */}
          <div className="cinema-grade">
            <span
              className="fw-semibold text-uppercase mb-3"
              style={{ fontSize: "30px" }}
            >
              Multi-Platform
            </span>

            <p
              className="typography-router-headline "
              
            >
              Deliver your content to any screen.
            </p>


            <div className="typography-router-cta ctas large-12 large-centered pb-100">
              

              <Link
                href="/about-us"
                className="text-primary fw-medium"
                style={{ marginLeft: "0.8em" }}
              >
                Learn more 
                <i className="fa-solid fa-angle-right learn-more-icon"></i>
              </Link>


            



            </div>

            
          </div>

          {/* Image */}
          <div
            className="position-relative rounded-4 overflow-hidden shadow-lg"
            style={{
              width: "100%",
              maxWidth: "80%",
              height: "100%",
            }}
          >
            <Image
              src="/assets/img/home-01/service/serviceback2.png"
              alt="Multi-platform example"
              fill
              style={{ objectFit: "cover" }}
            />
            
          </div>
        </div>
      </div>
      </section>

  );
};

export default CinemaPlatform;
