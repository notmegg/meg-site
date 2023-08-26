import './globals.css'
import {Montserrat} from 'next/font/google'

const monts = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'megSpace',
  description: 'Made with meow-gic ^^',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={monts.className}>{children}</body>
    </html>
  )
}
