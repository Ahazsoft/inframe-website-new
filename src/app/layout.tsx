import type { Metadata, Viewport } from "next";
import { Syne, Aladin, Marcellus } from "next/font/google";
import { VideoProvider } from "@/provider/VideoProvider";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import "swiper/css/bundle";
import "./globals.scss";

// 1. Font declarations – keep yours but consider consolidating to reduce layout shifts and requests.
const gellery = localFont({
  src: [
    {
      path: "../../public/assets/fonts/gallerymodern-webfont.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/gallerymodern-webfont.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/gallerymodern-webfont.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--tp-ff-gallery",
  display: "swap", // 2. Prevent invisible text during load (FOIT)
});

const mainfont = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Helvena-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Helvena-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Helvena-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--tp-ff-mainfont",
  display: "swap",
});

const aladin = Aladin({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--tp-ff-mainfont",
  display: "swap",
});

const syne_body = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-mainfont",
  display: "swap",
});

const syne_heading = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-mainfont",
  display: "swap",
});

const syne_p = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-mainfont",
  display: "swap",
});

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-mainfont",
  display: "swap",
});

const marcellus = Marcellus({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--tp-ff-mainfont",
  display: "swap",
});

// 3. Site‑wide viewport configuration (important for mobile SERP)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000", // replace with your brand colour
};

// 4. Base metadata – extend per page with template
export const metadata: Metadata = {
  metadataBase: new URL("https://www.inframeadvertising.com"), // prevents relative URLs
  title: {
    template: "%s | Inframe Advertising", // enables “Services | Inframe Advertising”
    default: "Inframe Advertising – Creative Agency & Portfolio", // homepage title
  },
  description:
    "Full‑service advertising agency combining strategy, design, and technology. We build brands that perform.",
  keywords: ["advertising agency", "creative agency", "branding", "digital marketing"],
  authors: [{ name: "Inframe Advertising", url: "https://www.inframeadvertising.com" }],
  generator: "Next.js",
  openGraph: {
    title: "Inframe Advertising – Creative Agency",
    description:
      "Full‑service advertising agency combining strategy, design, and technology.",
    url: "https://www.inframeadvertising.com",
    siteName: "Inframe Advertising",
    images: [
      {
        url: "https://www.inframeadvertising.com/og-default.jpg", // create a 1200x630 image
        width: 1200,
        height: 630,
        alt: "Inframe Advertising – Creative Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inframe Advertising – Creative Agency",
    description:
      "Full‑service advertising agency combining strategy, design, and technology.",
    images: ["https://www.inframeadvertising.com/og-default.jpg"],
    // creator: "@yourtwitterhandle", // optional
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: {
    canonical: "/", // root canonical; child pages can override
  },
};

// 5. JSON‑LD Structured Data for the Organization – crucial for GEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService", // or "LocalBusiness" if you have a physical office
  name: "Inframe Advertising",
  url: "https://www.inframeadvertising.com",
  telephone: "(+251) 923002831", // replace with real number
  description:
    "Full‑service advertising agency combining strategy, design, and technology.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Addis Ababa",
    addressRegion: "Addis Ababa",
  },
  sameAs: [
    "https://www.linkedin.com/company/in-frame-production/", // replace
    "https://www.tiktok.com/@inframeproduction1?_r=1&_t=ZS-944pU9U3VBw",
    "https://www.instagram.com/inframe_production_?igsh=MW0xcDVidG9mY2h4cw==",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  },
  image: "https://www.inframeadvertising.com/logo.png", // add your logo
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* 6. Preconnect to external origins to speed up font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* 7. Inject JSON‑LD structured data */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
      </head>
      <body
        id="body"
        suppressHydrationWarning
        className={`${mainfont.variable} ${aladin.variable} ${syne_body.variable} ${syne_heading.variable} ${syne_p.variable} ${syne.variable} ${marcellus.variable} ${gellery.variable}`}
      >
        <ThemeProvider defaultTheme="dark" enableSystem={false}>
          <VideoProvider>{children}</VideoProvider>
        </ThemeProvider>
        {/* Google tag (gtag.js) */}
<Script
  strategy="afterInteractive"
  src="https://www.googletagmanager.com/gtag/js?id=G-BEZ3KHYMSR"
/>
<Script
  id="google-analytics"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-BEZ3KHYMSR');
    `,
  }}
/>
      </body>
    </html>
  );
}