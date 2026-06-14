import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

// Set your production domain here
const siteUrl = "https://www.themotiondigital.com";

export const metadata: Metadata = {
  title: "Motion Digital",
  description: "Performance. Engineered.",
  metadataBase: new URL(siteUrl), // Required for absolute URL resolution
  openGraph: {
    title: "Motion Digital",
    description: "High-performance digital systems that drive measurable growth.",
    url: siteUrl,
    siteName: "Motion Digital",
    images: [
      {
        url: "/img/MotionDigitalOpenGraph.png", // Ensure file is at public/img/MotionDigitalOpenGraph.png
        width: 1200,
        height: 630,
        alt: "Motion Digital - Performance. Engineered.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Motion Digital",
    description: "Performance. Engineered.",
    images: ["/img/MotionDigitalOpenGraph.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF9F5]">
        {children}
      </body>
    </html>
  );
}