import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Footer } from '@/components/yogasar/footer'
import { Header } from '@/components/yogasar/header'
import { JsonLd } from '@/components/yogasar/json-ld'
import { MobileWhatsAppBar } from '@/components/yogasar/mobile-whatsapp-bar'
import { graph, organizationSchema, websiteSchema } from '@/lib/seo'
import { siteConfig } from '@/lib/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['online yoga classes for ladies', 'hindi yoga classes online', 'online yoga classes for women in India', 'live yoga classes in Hindi', 'ladies yoga classes from home'],
  authors: [{ name: siteConfig.teacher.name }],
  creator: siteConfig.teacher.name,
  publisher: siteConfig.name,
  applicationName: siteConfig.name,
  category: 'Health and Wellness',
  classification: 'Yoga, Wellness, Online Classes',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: '/',
    siteName: siteConfig.name,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: siteConfig.socialImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.socialImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  other: {
    language: siteConfig.htmlLang,
    'geo.region': siteConfig.country,
    'geo.country': siteConfig.country,
    coverage: 'India',
    distribution: 'global',
    target: 'Women seeking live online yoga classes in Hindi',
  },
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
    <html lang={siteConfig.htmlLang} dir="ltr">
      <body className="font-sans antialiased">
        <JsonLd data={graph([organizationSchema(), websiteSchema()])} />
        <Header />
        {children}
        <Footer />
        <MobileWhatsAppBar />
        <Analytics />
      </body>
    </html>
  )
}
