import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Number Analyzer',
  description: 'Website made to analyze the numbers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-blue-600">
        <h1 className="text-white text-center">
          Number Analyzer
        </h1>
        {children}</body>
    </html>
  )
}
