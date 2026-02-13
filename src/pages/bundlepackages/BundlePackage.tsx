import React from "react";
import { Play, Grid, Camera, Megaphone, Disc, Cloud } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const BundlePackage = () => {
  const router = useRouter();

  return (
    <div className="container my-5">
      <div
        className="row align-items-center justify-content-center g-5 rounded-4 p-4 p-md-5"
        style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
      >
        {/* Icons Grid */}
        <div className="col-12 col-lg-6 d-flex justify-content-center">
          <div className="row row-cols-3 g-3" style={{ maxWidth: "240px" }}>
            {[
              { icon: <Play size={28} />, bg: "#111827" },
              { icon: <Grid size={28} />, bg: "#111827" },
              { icon: <Camera size={28} />, bg: "#111827" },
              { icon: <Megaphone size={28} />, bg: "#111827" },
              { icon: <Disc size={28} />, bg: "#111827" },
              { icon: <Cloud size={28} />, bg: "#111827" },
            ].map((item, i) => (
              <div key={i} className="col d-flex justify-content-center">
                <div
                  className="d-flex align-items-center justify-content-center rounded-3 shadow"
                  style={{
                    width: "64px",
                    height: "64px",
                    backgroundColor: item.bg,
                  }}
                >
                  <span className="text-white">{item.icon}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Text */}
        <div className="col-12 col-lg-6 text-center text-lg-start">
          <div className="mx-auto mx-lg-0" style={{ maxWidth: "420px" }}>
            <span className="text-uppercase fw-semibold text-muted small d-block mb-2">
              Complete Package
            </span>

            <h2
              className="fw-bold text-dark mb-4"
              style={{
                fontSize: "clamp(1.875rem, 4vw, 2.5rem)",
                lineHeight: 1.2,
              }}
            >
              Bundle production with post and promotion. And save more.
            </h2>

            <Button
              variant="secondary"
              className="rounded-pill bg-black text-white fw-semibold px-5 py-3"
              onClick={() => router.push("/contact")}
            >
              Get a quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BundlePackage;
