import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Devix",
  description:
    "DevixLab specializes in cutting-edge software development, web applications, automation tools, and AI-driven solutions. We provide consulting services, full-stack development, and scalable, high-performance digital products.",
  keywords: [
    "DevixLab",
    "software development",
    "web applications",
    "automation",
    "AI solutions",
    "full-stack development",
    "technology consulting",
    "custom software",
    "business automation",
    "scalable applications"
  ],
  icons: "/favicon.ico",
  author: "DevixLab",
  
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
       
            {children}
          
      </body>
    </html>
  );
}
