import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nitesh Chauhan | Full Stack Developer",
  description: "Portfolio of Nitesh Chauhan, a Full Stack Developer specializing in Laravel, React, and Node.js",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
