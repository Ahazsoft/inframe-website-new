import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import ContactMain from "@/pages/contact/contact";

export const metadata: Metadata = {
  title: "Contact", // becomes "Contact | Inframe Advertising"
  description:
    "Get in touch with Inframe Advertising. Let’s discuss your next branding, digital, or creative campaign. Call, email, or visit our office.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Inframe Advertising",
    description:
      "Ready to start a project? Reach out and we’ll get back to you within one business day.",
    url: "/contact",
    type: "website",
    // images: ["/og-contact.jpg"],
  },
};

// Structured data for the Contact page
const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Inframe Advertising",
  description:
    "Contact Inframe Advertising for new business inquiries, press, or careers.",
  url: "https://www.inframeadvertising.com/contact",
  mainEntity: {
    "@type": "Organization",
    name: "Inframe Advertising",
    // Even though the root layout has Organization schema,
    // explicitly including contact details on the Contact page helps
    // search engines connect the page to the business entity.
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-234-567-890",       // ← replace with real number
      contactType: "sales",
      email: "hello@inframeadvertising.com",  // ← replace
      availableLanguage: ["English"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Creative Street",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10001",
      addressCountry: "US",
    },
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.inframeadvertising.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: "https://www.inframeadvertising.com/contact",
    },
  ],
};

const ContactPage = () => {
  return (
    <>
      {/* Inject structured data */}
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([contactPageSchema, breadcrumbSchema]),
        }}
      />
      <ContactMain />
    </>
  );
};

export default ContactPage;