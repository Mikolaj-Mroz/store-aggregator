import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import {Footer} from "@/components/layout/Footer";
import {Header} from "@/components/layout/Header";

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
    default: "Store Aggregator",
    template: "%s | Store Aggregator",
  },
  description:
      "Browse fashion products from multiple stores in one place.",
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <html
          lang="en"
          className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
      <body className="min-h-full bg-[#f4f4ef] text-[#202820]">
      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />
      </div>
      </body>
      </html>
  )
}