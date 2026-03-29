import type { Metadata, Viewport } from 'next'
import { Ovo } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const ovo = Ovo({ 
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ovo",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Online Yoga Classes in Ahmedabad | Rs 1000/Month | 5 Days a Week | Yogasar',
  description: 'Join beginner-friendly online yoga classes in Ahmedabad for Rs 1000 per month. Live classes 5 days a week from the comfort of home. WhatsApp to join. By Acharya Sarika Disawal.',
  keywords: ['online yoga classes in Ahmedabad', 'yoga classes in Ahmedabad online', 'beginner online yoga classes', 'affordable yoga classes', 'live yoga classes Ahmedabad'],
  authors: [{ name: 'Acharya Sarika Disawal' }],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#6B7A3D',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={ovo.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
