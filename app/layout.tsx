import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_TC, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navigation } from "@/components/navigation"
import "./globals.css"

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "被設計的設計 | The Design of Being Designed",
  description:
    "數位展覽網站 - 探索設計學習脈絡與策展理念。A digital exhibition showcasing design education and curatorial concepts.",
  generator: "v0.app",
  keywords: ["設計展覽", "design exhibition", "YODEX", "設計教育", "design education"],
  openGraph: {
    title: "被設計的設計 | The Design of Being Designed",
    description: "數位展覽網站 - 探索設計學習脈絡與策展理念",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
}

export const viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-TW" className="scroll-smooth">
      <body className={`${notoSansTC.variable} ${inter.variable} font-sans antialiased`}>
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
