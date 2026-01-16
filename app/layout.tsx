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
  title: "Circular Nepal | Hope from the Top of the World",
  description:
    "Join us to move circularity from concept to execution. We work at the intersection of communities, municipalities, and markets to design practical, inclusive, and scalable circular economy systems in Nepal.",
  keywords: [
    "circular economy",
    "Nepal",
    "sustainability",
    "waste management",
    "recycling",
    "EPR",
    "extended producer responsibility",
    "Kathmandu",
    "circular systems",
    "waste recovery",
    "sustainable development",
  ],
  authors: [{ name: "Circular Nepal" }],
  creator: "Circular Nepal",
  publisher: "Circular Nepal",
  openGraph: {
    title: "Circular Nepal | Hope from the Top of the World",
    description:
      "Join us to move circularity from concept to execution. Designing practical, inclusive, and scalable circular economy systems in Nepal.",
    url: "https://circularnepal.com",
    siteName: "Circular Nepal",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Circular Nepal | Hope from the Top of the World",
    description:
      "Join us to move circularity from concept to execution. Designing practical, inclusive, and scalable circular economy systems in Nepal.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://circularnepal.com",
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
