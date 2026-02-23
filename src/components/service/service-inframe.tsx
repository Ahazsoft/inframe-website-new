import Link from "next/link";
import { Tv, Radio, Megaphone, Youtube } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export function ServiceInframe() {
  return (
    <section id="what-we-do" className="py-5 bg-white">
      <div className="container text-center">

        {/* Header */}
        <div className="mx-auto mb-5 d-flex flex-column align-items-center" style={{ maxWidth: "48rem" }}>
          
          <figure
            style={{
              width: "79px",
              height: "79px",
              backgroundImage: "url('/inframelogo3.png')",
              backgroundSize: "79px 79px",
              backgroundRepeat: "no-repeat",
              
            }}
          />

          <h2
            className="fw-bold text-black mb-4"
            style={{
              fontSize: "80px",
              lineHeight: "1.05",
              letterSpacing: "-0.02em",
            }}
          >
            Everything you need
            <br />
            under one roof.
          </h2>

          <p
            className="mx-auto"
            style={{
              maxWidth: "42rem",
              fontSize: "17px",
              lineHeight: "1.47",
              letterSpacing: "-0.022em",
              color: "#1d1d1f",
            }}
          >
            From concept to final delivery, our services
            <br />
            cover every aspect of creative production. Work with us.
          </p>
        </div>

        {/* Services grid */}
        <div className="row justify-content-center g-5 mb-5" style={{ maxWidth: "56rem", margin: "0 auto" }}>
          
          <div className="col-12 col-md-4 text-center">
            <div className="d-flex flex-column align-items-center">
              <div
                className="mb-4 p-4 rounded-4"
                style={{ transition: "transform 0.3s" }}
              >
                <Tv strokeWidth={1.5} width={80} height={80} className="text-black" />
              </div>
              <h3 className="fs-6 fw-medium text-black opacity-75">
                TV Commercials
              </h3>
            </div>
          </div>

          <div className="col-12 col-md-4 text-center">
            <div className="d-flex flex-column align-items-center">
              <div
                className="mb-4 p-4 rounded-4"
                style={{ transition: "transform 0.3s" }}
              >
                <Radio strokeWidth={1.5} width={80} height={80} className="text-black" />
              </div>
              <h3 className="fs-6 fw-medium text-black opacity-75">
                Radio
              </h3>
            </div>
          </div>

          <div className="col-12 col-md-4 text-center">
            <div className="d-flex flex-column align-items-center">
              <div
                className="mb-4 p-4 rounded-4"
                style={{ transition: "transform 0.3s" }}
              >
                <Megaphone strokeWidth={1.5} width={80} height={80} className="text-black" />
              </div>
              <h3 className="fs-6 fw-medium text-black opacity-75">
                Digital Campaign
              </h3>
            </div>
          </div>

        </div>

        {/* Platforms section */}
        <div className="py-5">
          <div className="mx-auto mb-5" style={{ maxWidth: "41.6666666667%" }}>
            <p
              className="fw-semibold text-black text-center"
              style={{
                fontSize: "40px",
                fontWeight: "600",
                lineHeight: "44px",
              }}
            >
              See our work on your favorite platforms
            </p>
          </div>

          {/* <a
            href="/projects"
            className="mb-5 text-md fw-medium"
            style={{
              color: "#0d6efd", // bootstrap blue
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "17px",
              
            }}
          >
            View Our Portfolio <span>&gt;</span>
          </a> */}

            <Link
              href="/projects"
              className="text-primary fw-medium"
              style={{ marginLeft: "0.8em", fontSize:'19px' }}
            >
              View Our Portfolio
              <i className="fa-solid fa-angle-right learn-more-icon"></i>
            </Link>

            {/* Platform icons */}
            <div
              className="row justify-content-center g-4 mx-auto"
              style={{ marginTop: "38px" }}
            >
              {[
                {
                  name: "YouTube",
                  icon: "fab fa-youtube",
                  url: "#",
                },
                {
                  name: "TikTok",
                  icon: "fab fa-tiktok",
                  url: "https://www.tiktok.com/@inframeproduction1?_r=1&_t=ZS-944pU9U3VBw",
                },
                {
                  name: "Instagram",
                  icon: "fab fa-instagram",
                  url: "https://www.instagram.com/inframe_production_?igsh=MW0xcDVidG9mY2h4cw==",
                },
                {
                  name: "Linkedin",
                  icon: "fab fa-linkedin",
                  url: "https://www.linkedin.com/company/in-frame-production/",
                },
              ].map((item) => (
                <div key={item.name} className="col-6 col-md-4 col-lg-2 text-center">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-dark"
                  >
                    <i className={`${item.icon} fs-1 mb-2`}></i>
                    <div className="fw-medium">{item.name}</div>
                  </a>
                </div>
              ))}
            </div>



        </div>
      </div>
    </section>

  );
}
