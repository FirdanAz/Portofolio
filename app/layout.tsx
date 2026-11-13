import type { Metadata, Viewport } from "next";
import { Poppins, Space_Mono, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://firdanazhari.vercel.app"),
  title: {
    default: "Muhammad Firdan Azhari — Full-Stack Developer",
    template: "%s | Muhammad Firdan Azhari",
  },
  description:
    "Portfolio of Muhammad Firdan Azhari. Full-Stack Developer specializing in Flutter, Laravel, and Next.js based in Kudus, Indonesia.",
  keywords: [
    "Muhammad Firdan Azhari",
    "Full-Stack Developer",
    "Flutter Developer",
    "Laravel Developer",
    "Next.js Developer",
    "Software Engineer",
    "Kudus",
    "Indonesia",
  ],
  authors: [{ name: "Muhammad Firdan Azhari" }],
  creator: "Muhammad Firdan Azhari",
  openGraph: {
    title: "Muhammad Firdan Azhari — Full-Stack Developer",
    description:
      "Full-Stack Developer (Flutter, Laravel, Next.js). Dark editorial portfolio with high performance and clean code.",
    url: "https://firdanazhari.vercel.app",
    siteName: "Muhammad Firdan Azhari Portfolio",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Firdan Azhari — Full-Stack Developer",
    description: "Full-Stack Developer (Flutter, Laravel, Next.js).",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${poppins.variable} ${spaceMono.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="bg-dark text-white font-sans antialiased min-h-screen selection:bg-accent-red selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
