import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Google Ads Specialist | Local Lead Generation for Service Businesses",
  description: "Expert Google Ads management for local service businesses. Specializing in HVAC, plumbing, electrical, roofing, and home services. Generate more qualified leads with proven strategies.",
  keywords: ["Google Ads specialist", "local lead generation", "Google Ads for service businesses", "PPC management", "Local Service Ads", "HVAC marketing", "plumbing leads"],
  authors: [{ name: "LeadGen Ads" }],
  openGraph: {
    title: "Google Ads Specialist for Service Businesses",
    description: "Turn Google Ads into a predictable lead machine. Expert management for local service businesses.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
