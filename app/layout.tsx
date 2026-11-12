import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://firdanazhari.vercel.app"),
  title: {
    default: "Muhammad Firdan Azhari — Full-Stack Developer",
    template: "%s | Muhammad Firdan Azhari",
  },
  description:
    "Portofolio Muhammad Firdan Azhari. Full-Stack Developer spesialis Flutter, Laravel, dan Next.js berbasis di Kudus, Jawa Tengah. Membangun produk digital dari rancangan UI hingga API dan rilis.",
  keywords: [
    "Muhammad Firdan Azhari",
    "Full-Stack Developer",
    "Flutter Developer",
    "Laravel Developer",
    "Next.js Developer",
    "Kudus",
    "Web Developer Indonesia",
    "Satu Desa",
    "Notula",
    "NUSAVERSE",
    "LadangNusa",
  ],
  authors: [{ name: "Muhammad Firdan Azhari" }],
  creator: "Muhammad Firdan Azhari",
  openGraph: {
    title: "Muhammad Firdan Azhari — Full-Stack Developer",
    description:
      "Full-Stack Developer (Flutter, Laravel, Next.js). Membangun produk dari rancangan UI hingga API dan rilis. Juara 3 Nasional GENETIC 2025.",
    url: "https://firdanazhari.vercel.app",
    siteName: "Muhammad Firdan Azhari Portfolio",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Firdan Azhari — Full-Stack Developer",
    description:
      "Full-Stack Developer (Flutter, Laravel, Next.js). Juara 3 Nasional GENETIC 2025.",
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
  themeColor: "#F3F0E8",
  colorScheme: "light",
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
      className={`${fraunces.variable} ${manrope.variable} ${ibmPlexMono.variable}`}
    >
      <body className="bg-paper text-ink font-sans antialiased min-h-screen selection:bg-teal selection:text-ink">
        {children}
      </body>
    </html>
  );
}

