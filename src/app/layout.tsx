import type { Metadata } from 'next'
import './globals.css'
import { Footer, Navbar } from '@/components'

export const metadata: Metadata = {
  title: 'Proyecto base',
  description: 'Next JS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        <main className="min-h-screen">{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
