import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const CinemaPlatform = () => {
  const router = useRouter();
  const {theme} = useTheme();
  return (
    <section
      className="section-routers"
      style={{
        width: "97%",
        margin: "auto",
      }}
    >
      <div className="lower-container">
        {/* Cinema Grade */}
        <div
          className="d-flex flex-column align-items-center text-center p-5 cinema-platform-content"
          style={{
            backgroundColor: "#ECBD46",
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

            <p className="typography-router-headline ">
              Professional quality. <br /> Cinematic in every frame.
            </p>

            {/* <div className="d-flex align-items-center gap-5"> */}
            <div className="typography-router-cta ctas large-12 large-centered  pb-100 ">
              <Button
                variant="outline"
                className="rounded-pill fw-semibold px-md-5 py-md-3 py-sm-2 px-sm-3"
                onClick={() => router.push("/service")}
                style={{
                  backgroundColor: theme === "light" ? "#FFFFFF" : "#111111",
                  color: theme === "light" ? "#121212" : "#F5F7F5",
                }}
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
            className="position-relative rounded-4 overflow-hidden shadow-lg cinema-image-container"
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
          className="d-flex flex-column align-items-center text-center p-5 cinema-platform-content"
          style={{
            backgroundColor: "#ECBD46",

            minHeight: "880px",
            justifyContent: "space-evenly",
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

            <p className="typography-router-headline ">
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
            className="position-relative rounded-4 overflow-hidden shadow-lg cinema-image-container"
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

      <style jsx>{`
        .lower-container {
          position: relative;
          maxwidth: 100%;
          margin: 40px auto;
          display: flex;
          flex-direction: row;
          justifycontent: space-between;
          gap: 32px;
        }

        .cinema-platform-content {
          width: 48.5%;
        }

        @media (max-width: 760px) {
          .lower-container {
            margin: 20px auto;
            display: flex;
            flex-direction: column;
            justifycontent: space-between;
            align-items: center;
            gap: 32px;
          } // lower container

          .cinema-platform-content {
            width: 100%;
            margin: 0 30px;
          }
          .cinema-image-container {
            max-width: 100%;
            height: 300px;
            aspect-ratio: 0.8;
          }
        } // media query
      `}</style>
    </section>
  );
};

export default CinemaPlatform;
