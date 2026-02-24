import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

const ArtistOffer = () => {
  const router = useRouter();
  const { theme } = useTheme();
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

            <Button
              variant="outline"
              className="rounded-pill fw-semibold px-5 py-3"
              onClick={() => router.push("/contact")}
              style={{
                
                backgroundColor: theme === "light" ? "#FFFFFF" : "#111111",
                color: theme === "light" ? "#121212" : "#F5F7F5",
              }}
            >
              Work with us
            </Button>
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
