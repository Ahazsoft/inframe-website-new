import { Metadata } from "next";
import ErrorMain from "@/pages/error/error-main";

export const metadata: Metadata = {
  title: "Page Not Found", // becomes "Page Not Found | Inframe Advertising" via template
  description:
    "Sorry, the page you're looking for doesn't exist. Explore our portfolio or get in touch.",
  robots: {
    index: false,   // crucial: prevent 404 pages from appearing in search
    follow: true,   // but allow crawlers to follow any links on the page
  },
  alternates: {
    canonical: "/", // point to homepage to avoid duplicate 404 URLs
  },
};

export default function NotFound() {
  return <ErrorMain />;
}