"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderMenus from "./header-menus-index";
import MobileOffcanvas from "@/components/offcanvas/mobile-offcanvas";
import logoDark from "../../../public/assets/img/logo/logodark.png";
import logoWhite from "../../../public/assets/img/logo/logo-white-transparent.png";
import useStickyHeader from "@/hooks/use-sticky-header";

import logoiconheader from "../../../public/assets/img/logo/inframelogoheader.png";
import ThemeSetting from "@/components/theme-setting";

const HeaderOne = () => {
  const { isSticky, headerRef, headerFullWidth } = useStickyHeader(20);
  const [openOffCanvas, setOpenOffCanvas] = React.useState(false);
  useEffect(() => {
    headerFullWidth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header className="tp-header-height" ref={headerRef}>
        <div
          id="header-sticky"
          className={`tp-header-area tp-header-mob-space pl-60 pr-60 z-index-9 ${isSticky ? "header-sticky" : ""}`}
          //  style={{ backgroundColor: '#fff' }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 col-6">
                <div className="tp-header-logo">
                  <Link className="logo-1" href="/">
                    <Image
                      style={{ width: "auto", height: "auto" }}
                      src={isSticky ? logoDark : logoWhite}
                      alt="logo"
                      width={85}
                      height={26}
                    />
                  </Link>
                  <Link className="logo-2" href="/">
                    <Image
                      style={{ width: "auto", height: "auto" }}
                      src={logoWhite}
                      alt="logo"
                      width={85}
                      height={26}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xl-8 col-lg-9 d-none d-xl-block">
                <div className="tp-header-menu header-main-menu text-center">
                  <nav className="tp-main-menu-content force-white-menu">
                    {/* header menus */}
                    <HeaderMenus color={isSticky ? "" : "#fff"} />
                    {/* header menus */}
                  </nav>
                </div>
              </div>
              <div className="col-xl-2 col-lg col-6 ">
                <div
                  className="tp-header-bar text-end"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <ThemeSetting isIndex={isSticky ? false : true} />

                  <button
                    className="tp-offcanvas-open-btn"
                    onClick={() => setOpenOffCanvas(true)}
                  >
                    <span className={isSticky?"": "button-line"}></span>
                    <span className={isSticky?"": "button-line"}></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* off canvas */}
      <MobileOffcanvas
        openOffcanvas={openOffCanvas}
        setOpenOffcanvas={setOpenOffCanvas}
      />
      {/* off canvas */}

      <style jsx>{`
        .force-white-menu a {
          color: #fff !important;
        }

        .force-white-menu li a {
          color: #fff !important;
        }
        .tp-offcanvas-open-btn .button-line {
          border-bottom: 1.8px solid white;
        }
      `}</style>
    </>
  );
};

export default HeaderOne;
