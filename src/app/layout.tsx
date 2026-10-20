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
  title: "Stallone Odhiambo — Software Developer & Technical Project Lead",
  description:
    "Portfolio of Stallone Musigah Odhiambo, Software Developer and Technical Project Lead. Building useful software and solving real problems across application development, cloud infrastructure, financial systems, and AI solutions.",
  keywords: [
    "Stallone Odhiambo",
    "Stallone Musigah Odhiambo",
    "Software Developer",
    "Technical Project Lead",
    "Next.js",
    "C#",
    ".NET",
    "Azure",
    "Portfolio",
  ],
  authors: [{ name: "Stallone Musigah Odhiambo", url: "https://musigahstallone.vercel.app" }],
  openGraph: {
    title: "Stallone Odhiambo — Software Developer & Technical Project Lead",
    description: "Building useful software. Solving real problems.",
    url: "https://musigahstallone.vercel.app",
    siteName: "Stallone Odhiambo Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
