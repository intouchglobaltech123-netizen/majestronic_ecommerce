import type { Metadata } from "next";
import "./globals.css";

const SITE = "https://majestronic-ecommerce.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "MAJESTRONICZ – DIY electronic components, robotics kits and STEM kits",
  description: "Majestronicz, Erode: Arduino and ESP32 boards, sensors, modules, tools, robotics kits and STEM kits. Cash on Delivery across India.",
  icons: { icon: "/logo-mark.png" },
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: "MAJESTRONICZ", title: "MAJESTRONICZ – DIY electronics, robotics and STEM kits", description: "Arduino and ESP32 boards, sensors, modules, tools, robotics kits and STEM kits. Cash on Delivery across India.", url: SITE, images: ["/rc-car.webp"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <base href="/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,800&family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;500&family=Poppins:wght@700&family=VT323&display=swap" />
        <link rel="preload" as="image" href="/rc-car.webp" />
      </head>
      <body>{children}</body>
    </html>
  );
}
