import type { Metadata } from "next";
import { Geist, Geist_Mono, Baloo_2, Nunito } from "next/font/google";
import "./globals.css";
import WhatsappFloat from "@/components/ui/WhatsappFloat";
import BackgroundWordmark from "@/components/common/BackgroundWordmark";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Load the playful fonts globally
const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Fairy Tales Play Center & Cafe | Tirupur",
  description: "A magical indoor kids play center and cafe in Tirupur. Explore our trampoline zone, LED slides, and relaxing cafe for parents!",
  keywords: "kids play center, indoor playground, cafe, Tirupur, birthday party venue, Fairy Tales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${baloo.variable} ${nunito.variable} h-full antialiased`}
    >
      {/* Added a soft off-white background color (bg-[#fafaf9]) to help the watermark blend smoothly */}
      <body className="min-h-full flex flex-col selection:bg-[#FF8C42] selection:text-white bg-[#fafaf9]">
        
        {/* Global animated background wordmark */}
        <BackgroundWordmark />
        
        {/* 🚨 THE FIX: Wrap the pages in a relative z-10 container so they float ABOVE the watermark */}
        <div className="relative z-10 flex-1 flex flex-col bg-transparent">
          {children}
        </div>
        
        <WhatsappFloat />
      </body>
    </html>
  );
}