import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";
import NoiseOverlay from "@/components/layout/NoiseOverlay";
import LoadingScreen from "@/components/layout/LoadingScreen";
import Footer from "@/components/layout/Footer";
import BackgroundEffect from "@/components/layout/BackgroundEffect";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cak Senz — Creative Developer Portfolio",
  description:
    "Creative developer crafting digital experiences that push the boundaries of web technology. Specializing in interactive interfaces, motion design, and full-stack development.",
  keywords: ["portfolio", "developer", "creative", "web development", "react", "next.js", "frontend"],
  authors: [{ name: "Cak Senz" }],
  openGraph: {
    title: "Cak Senz — Creative Developer Portfolio",
    description: "Creative developer crafting digital experiences that push the boundaries of web technology.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cak Senz — Creative Developer Portfolio",
    description: "Creative developer crafting digital experiences that push the boundaries of web technology.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100`}
      >
        <ThemeProvider>
          <LoadingScreen />
          <CustomCursor />
          <NoiseOverlay />
          <BackgroundEffect />
          <SmoothScroll>
            <main className="relative z-10">{children}</main>
          </SmoothScroll>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
