import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../app/component/globals.css'
import { AOSInit } from './Aos'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Demo Secondary School',
  description: 'Best school in Budhanilkanta Area',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
