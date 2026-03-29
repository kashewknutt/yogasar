import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Online Yoga Classes for Ladies in Hindi | Across India | Yogasar',
  description: 'Join ladies-only online yoga classes in Hindi with Acharya Sarika Disawal. Live classes for women across India, 5 days a week, from the comfort of home.',
  keywords: ['online yoga classes for ladies', 'hindi yoga classes online', 'online yoga classes for women in India', 'live yoga classes in Hindi', 'ladies yoga classes from home'],
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
  themeColor: '#56663c',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
