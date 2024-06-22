import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { SpeedInsights } from "@vercel/speed-insights/next";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CombUI | Home",
  description:
    "CombUI is a design system for building modern web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={
          (clsx("antialiased bg-white text-black w-full"), urbanist.className)
        }
      >
        <Navigation />
        <div className="mx-auto max-w-[90rem] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20">
          {children}
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
