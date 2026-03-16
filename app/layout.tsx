import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vincula.io — Reviews, recuperador de carrito y Google Merchant para ecommerce latinoamericano',
  description: 'Reviews automáticos, recuperador de carrito y Google Merchant Sync en una sola herramienta. Compatible con Tiendanube, Jumpseller y WooCommerce. En español, con soporte local.',
  keywords: 'reviews ecommerce, recuperador de carrito, google merchant sync, tiendanube, jumpseller, woocommerce, latinoamerica',
  authors: [{ name: 'Vincula.io' }],
  openGraph: {
    title: 'Vincula.io — Convertí más en tu ecommerce latinoamericano',
    description: 'Reviews automáticos, recuperador de carrito y Google Merchant Sync. En español, con soporte local.',
    url: 'https://vincula.io',
    siteName: 'Vincula.io',
    locale: 'es_419',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vincula.io — Convertí más en tu ecommerce latinoamericano',
    description: 'Reviews automáticos, recuperador de carrito y Google Merchant Sync.',
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
