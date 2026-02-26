import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#2563eb',
}

export const metadata: Metadata = {
  title: 'Fisio Training - Terapia Física y Rehabilitación',
  description: 'Johan Retana - Terapeuta Físico especializado en rehabilitación, masajes y clases grupales. Servicios profesionales de terapia física en Costa Rica.',
  keywords: 'terapia física, rehabilitación, masajes, clases grupales, fisioterapia, Costa Rica',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navigation />
        <ScrollProgress />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
