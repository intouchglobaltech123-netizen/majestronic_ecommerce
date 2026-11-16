import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Majestronicz",
  description: "DIY electronic components, robotics kits and STEM kits",
  icons: { icon: "/logo-mark.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,800&family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;500&family=Poppins:wght@700&display=swap" />
        <link rel="preload" as="image" href="/rc-car.webp" />
      </head>
      <body>{children}</body>
    </html>
  );
}
