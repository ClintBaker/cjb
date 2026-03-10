import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Clinton Baker | Data Enthusiast',
  description:
    'Personal portfolio showcasing selected projects, live demos, and GitHub work.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-zinc-950 via-zinc-950 to-black text-zinc-50`}
      >
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(244,244,245,0.1),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(39,39,42,0.8),_transparent_60%)]">
          {children}
        </div>
      </body>
    </html>
  )
}
