import { Metadata } from "next";
import HomeOnePage from "./(homes)/home-1/page";

export const metadata: Metadata = {
  title: "Inframe - Production and Video",
};

export default function Home() {
  return (
    <>
      <HomeOnePage />
    </>
  );
}
