import type { Metadata } from 'next'
import '@/styles/globals.css'
import { MetaData } from '@/utils/Metadata'

export const metadata: Metadata = MetaData('Welcome to PhotoBooth')

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
