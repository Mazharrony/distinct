import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContactBar } from "@/components/layout/FloatingContactBar";
import { OrganizationSchema } from "@/components/seo/JsonLd";
import { site } from "@/content/site";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Property Maintenance & Fit-Out Dubai`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.shortName,
  keywords: [
    "property maintenance Dubai",
    "technical services Dubai",
    "villa renovation Dubai",
    "interior fit-out Dubai",
    "AC maintenance Dubai",
    "British run maintenance company Dubai",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    url: site.url,
    title: `${site.name} | ${site.strapline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.strapline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  formatDetection: { telephone: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-AE"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      {/* pb-16 on small screens reserves room for the fixed contact bar */}
      <body className="flex min-h-full flex-col pb-16 sm:pb-0">
        <a
          href="#main"
          className="sr-only rounded-full focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-200 focus:bg-brand-deep focus:px-5 focus:py-3 focus:text-white"
        >
          Skip to main content
        </a>
        <OrganizationSchema />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingContactBar />
      </body>
    </html>
  );
}
