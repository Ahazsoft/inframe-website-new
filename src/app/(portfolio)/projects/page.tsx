import React from "react";
import { Metadata } from "next";
import PortfolioGridColTwoMain from "@/pages/portfolio/portfolio-grid-col-2-main";

export const metadata: Metadata = {
  title: "Inframe - Portfolio Section",
};

const PortfolioGridColTwoPage = () => {
  return (
    <PortfolioGridColTwoMain/>
  );
};

export default PortfolioGridColTwoPage;
