import type { Metadata } from 'next'
import { Abhaya_Libre } from 'next/font/google'
import './globals.css'

const abhayaLibre = Abhaya_Libre({
  subsets: ['latin'],
  weight: ['700', '800'],
  display: 'swap',
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
    <html lang="en">
      <body className={abhayaLibre.className}>{children}</body>
    </html>
  )
}
