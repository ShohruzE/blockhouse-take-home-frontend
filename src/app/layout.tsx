import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Sidebar from "@/components/Sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Blockhouse Take Home Project",
  description: "Created by Shohruz Ernazarov",
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
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <div className="w-1/6 md:w-[8%] lg:w-1/6 bg-slate-200">
            <Sidebar />
          </div>
          {/* Main */}
          <div className="w-full md:w-92% lg:w-full bg-white p-8 flex flex-col">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
