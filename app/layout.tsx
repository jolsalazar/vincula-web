import type { Metadata } from 'next'
import { BRAND } from '@/lib/brand'
import './globals.css'

export const metadata: Metadata = {
  title: `${BRAND.siteName} — Reviews, recuperador de carrito y Google Merchant para tu ecommerce`,
  description: 'Reviews automáticos, recuperador de carrito y Google Merchant Sync en una sola herramienta. Compatible con cualquier ecommerce: Tiendanube, WooCommerce, desarrollo propio y más. En español, con soporte local.',
  keywords: 'reviews ecommerce, recuperador de carrito, google merchant sync, tiendanube, jumpseller, woocommerce',
  authors: [{ name: BRAND.siteName }],
  openGraph: {
    title: `${BRAND.siteName} — Vende más en tu ecommerce`,
    description: 'Reviews automáticos, recuperador de carrito y Google Merchant Sync. En español, con soporte local.',
    url: BRAND.url,
    siteName: BRAND.siteName,
    locale: 'es_419',
    type: 'website',
    images: [
      {
        url: `${BRAND.url}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: `${BRAND.siteName} — Reviews, recuperador de carrito y Google Merchant Sync`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BRAND.siteName} — Vende más en tu ecommerce`,
    description: 'Reviews automáticos, recuperador de carrito y Google Merchant Sync.',
    images: [`${BRAND.url}/og-image.svg`],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔗</text></svg>"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
