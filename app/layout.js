
import { Inter } from 'next/font/google'
import "@";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Furnicraft',
  description: 'Customize Your Furniture Before Buying It',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
