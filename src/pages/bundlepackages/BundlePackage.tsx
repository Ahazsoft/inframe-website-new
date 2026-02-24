import React from "react";
import { Play, Grid, Camera, Megaphone, Disc, Cloud } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const BundlePackage = () => {
  const router = useRouter();
  const { theme } = useTheme(); // 'light' | 'dark'
  const iconColors = theme === "dark" ? "#111827" : "#FFFFFF";
  const iconBg = theme === "dark" ? "#FFFFFF" : "#121221";
  return (
    <div className="container my-5">
      <div
        className="row align-items-center justify-content-center g-5 rounded-4 p-4 p-md-5"
        // style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
        style={{
          backgroundColor: theme ==='dark'?'#111111':'#ffffff'
        }}
      >
        {/* Icons Grid */}
        <div className="col-12 col-lg-6 d-flex justify-content-center">
          <div className="row row-cols-3 g-3" style={{ maxWidth: "240px" }}>
            {[
              { icon: <Play size={28} color={iconColors} />, bg: iconBg },
              { icon: <Grid size={28} color={iconColors} />, bg: iconBg },
              { icon: <Camera size={28} color={iconColors} />, bg: iconBg },
              { icon: <Megaphone size={28} color={iconColors} />, bg: iconBg },
              { icon: <Disc size={28} color={iconColors} />, bg: iconBg },
              { icon: <Cloud size={28} color={iconColors} />, bg: iconBg },
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
            <span
              className="text-uppercase fw-semibold  small d-block mb-2"
              style={{
                color: theme === "dark" ? "#F5F7F5" : "#121212",
              }}
            >
              Complete Package
            </span>

            <h2
              className="fw-bold mb-4"
              style={{
                color: theme === "dark" ? "#F5F7F5" : "#111827",
                fontSize: "clamp(1.875rem, 4vw, 2.5rem)",
                lineHeight: 1.2,
              }}
            >
              Bundle production with post and promotion. And save more.
            </h2>

            <Button
              variant="outline"
              className="rounded-pill fw-semibold px-5 py-3"
              onClick={() => router.push("/contact")}
              style={{
                backgroundColor: theme === "dark" ? "#FFFFFF" : "#111111",
                color: theme === "dark" ? "#121212" : "#F5F7F5",
              }}
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
