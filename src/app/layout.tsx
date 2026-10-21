import type { Metadata } from "next";
import { Google_Sans, Google_Sans_Code } from "next/font/google";
import "./globals.css";

const gSansMono = Google_Sans_Code({
  variable: "--font-google-sans-code",
  subsets: ["latin"],
});

const gSans = Google_Sans({
  variable: "--font-google-sans",
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
  authors: [{ name: "Stallone Musigah Odhiambo", url: "https://qmusglobal.com" }],
  openGraph: {
    title: "Stallone Odhiambo — Software Developer & Technical Project Lead",
    description: "Building useful software. Solving real problems.",
    url: "https://qmusglobal.com",
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
    <html lang="en" className={`${gSans.variable} ${gSansMono.variable} ${gSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
