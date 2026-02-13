import React from "react";
import Image from "next/image";

const ArtistOffer = () => {
  return (
    <div
      className="overflow-hidden"
      style={{ backgroundColor: "#f6bd14", padding: "4rem 1rem" }}
    >
      <div className="container">
        <div className="row align-items-center g-4">

          {/* Text */}
          <div className="col-12 col-md-6 text-center text-lg-start">
            <div className="mx-auto" style={{ maxWidth: "540px" }}>
              <h2
                className="fw-bold text-dark mb-4"
                style={{
                  fontSize: "clamp(1.875rem, 4vw, 2.5rem)",
                  lineHeight: 1.2,
                }}
              >
                For artists and musicians, album art and music videos start at
                special rates.
              </h2>

              <button className="btn btn-dark px-4 py-2 rounded-pill">
                Work with us
              </button>
            </div>
          </div>

          {/* Images */}
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div
              className="position-relative rounded-4 overflow-hidden shadow-lg"
              style={{
                width: "472px",   // same as two images + gap
                height: "384px",  // same height
              }}
            >
              <Image
                src="/assets/img/home-01/artistoffer/artistoffer.jpg"
                alt="Inframe featured work"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default ArtistOffer;
