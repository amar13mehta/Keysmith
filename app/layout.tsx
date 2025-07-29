import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import type { Metadata } from "next";
import { SessionProvider } from "@/components/providers/session-provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Keysmith",
  description: "a minimalist developer typing test.",
  metadataBase: new URL("https://www.Keysmith.live"),
  applicationName: "Keysmith",
  authors: [{ name: "amar13mehta" }],
  keywords: [
    "typing test",
    "developer tools",
    "coding practice",
    "speed typing",
    "programming",
    "developer typing",
    "code snippets",
  ],
  creator: "amar13mehta",
  publisher: "amar13mehta",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.Keysmith.live",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.Keysmith.live",
    siteName: "Keysmith",
    title: "Keysmith",
    description: "a minimalist developer typing test.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Keysmith - Developer Typing Test",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@amar13mehta",
    creator: "@amar13mehta",
    title: "Keysmith",
    description: "a minimalist developer typing test.",
    images: [
      {
        url: "/og-image.png",
        alt: "Keysmith - Developer Typing Test",
      },
    ],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  category: "developer tools",
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
        <SessionProvider>
          <TooltipProvider delayDuration={300}>
            <Toaster />
            {children}
          </TooltipProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
