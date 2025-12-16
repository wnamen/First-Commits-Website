import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'First Commits — For Those Who Build Before It\'s Obvious',
  description: 'An invite-only community for startup early hires. Founding engineers, first designers, early operators. You joined before the logo was final.',
  openGraph: {
    title: 'First Commits',
    description: 'An invite-only community for startup early hires.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
