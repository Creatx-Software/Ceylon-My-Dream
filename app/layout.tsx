import type { Metadata } from 'next'
import { Abhaya_Libre, Inter } from 'next/font/google'
import './globals.css'

const abhayaLibre = Abhaya_Libre({
  subsets: ['latin'],
  weight: ['700', '800'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Ceylon My Dream - Contact Us',
  description: 'Get in touch with Ceylon My Dream for your travel planning needs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${abhayaLibre.className} font-sans`}>{children}</body>
    </html>
  )
}
