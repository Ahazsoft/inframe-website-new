"use client";
import logoDark from "../../../public/assets/img/logo/logodark.png";
import logoWhite from "../../../public/assets/img/logo/logo-white-transparent.png";
import Image from "next/image";

export default function GlobalLoader() {
  return (
    <div
      className="global-loader"
      style={{
        display: "flex",
        backgroundColor: "#111",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "200000000",
        position: "absolute",
        inset: 0,
      }}
    >
      {/* <div className="spinner" /> */}

      <Image
        style={{ width: "auto", height: "auto" }}
        src={logoWhite}
        alt="logo"
        width={300}
        height={50}
      />

      <style jsx>{`
        .spinner {
          width: 150px;
          height: 150px;
          border: 3px solid #333;
          border-top: 3px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
