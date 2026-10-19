import type { Metadata, Viewport } from 'next'
import { Noto_Sans_HK, Poppins, Space_Grotesk } from 'next/font/google'
import './globals.css'

const notoSansHK = Noto_Sans_HK({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-noto-sans-hk',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TennisHub HK - 香港網球社群',
  description: '香港最流暢的網球約球平台。搵場、約波、結識波友，一站式體驗。',
  keywords: ['香港網球', '約波', 'tennis HK', '網球場', '社群'],
  authors: [{ name: 'TennisHub HK' }],
  openGraph: {
    title: 'TennisHub HK - 香港網球社群',
    description: '香港最流暢的網球約球平台',
    type: 'website',
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#2E7D32',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-HK" className={`${notoSansHK.variable} ${poppins.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-[var(--bg-primary)]">
        {children}
      </body>
    </html>
  )
}
