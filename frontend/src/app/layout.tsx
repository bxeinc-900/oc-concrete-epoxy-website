import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/lib/schema/LocalBusiness";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Epoxy Garage Floor Contractors in Orange County | OC Concrete Polishing",
    template: "%s | OC Concrete Polishing & Epoxy Flooring"
  },
  description: "Specializing in high-end epoxy flooring, concrete polishing, and metallic 3D floors in Orange County, LA, and Inland Empire. 20+ years of expert service.",
  keywords: [
    "epoxy flooring Orange County",
    "garage floor epoxy",
    "concrete polishing contractors",
    "commercial epoxy floors",
    "metallic 3D epoxy flooring",
    "Orange County concrete restoration",
    "polished concrete floors",
    "industrial epoxy flooring"
  ],
  authors: [{ name: "OC Concrete Polishing" }],
  creator: "OC Concrete Polishing",
  publisher: "OC Concrete Polishing",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://occoncreterestoration.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Epoxy Garage Floor Contractors in Orange County | OC Concrete Polishing",
    description: "Premium epoxy flooring and concrete polishing experts for 20 years. Serving Orange County, Los Angeles, and Inland Empire.",
    url: 'https://occoncreterestoration.com',
    siteName: 'OC Concrete Polishing',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Epoxy Garage Floor Contractors in Orange County",
    description: "Expert epoxy flooring and concrete polishing services in Southern California.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'sBgLAiQ6RymNjZIVP-Ue8QBY447scdflJt2D7ISkKoo',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://occoncreterestoration.com/" />
        <LocalBusinessSchema />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased font-sans bg-[#0c0c0c] text-white`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}


