import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "../styles/globals.css"
import { Toaster } from "react-hot-toast"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Nigam Prasad Lenka - Portfolio",
    template: "%s | Nigam Prasad Lenka",
  },
  description:
    "Portfolio of Nigam Prasad Lenka — Full Stack Developer & AI Systems Engineer (B.Tech CSE, VIT Bhopal). Experienced in Python, FastAPI, Django REST, Next.js, LangGraph, Multi-Agent AI, AWS, and Docker.",
  keywords: [
    "Nigam Prasad Lenka",
    "justynigam",
    "Portfolio",
    "Full Stack Developer",
    "Generative AI",
    "LangGraph",
    "FastAPI",
    "Django REST",
    "Next.js",
    "VIT Bhopal",
  ],
  authors: [{ name: "Nigam Prasad Lenka" }],
  creator: "Nigam Prasad Lenka",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/assets/Images/icon/icon-light.png",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/assets/Images/icon/icon-dark.png",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/assets/Images/icon/icon-light.png",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/assets/Images/icon/icon-dark.png",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Nigam Prasad Lenka - Portfolio",
    description:
      "Full Stack Developer & AI Systems Engineer — Python, FastAPI, Django REST, React, Next.js, LangGraph, PostgreSQL, Redis, AWS, and Docker.",
    siteName: "Nigam Prasad Lenka",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nigam Prasad Lenka - Portfolio",
    description:
      "Full Stack Developer & AI Systems Engineer — B.Tech CSE @ VIT Bhopal. Multi-Agent AI, RegTech, Open Source (Jenkins CI).",
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  )
}
