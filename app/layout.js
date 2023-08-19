import './globals.css'
import {Montserrat,Roboto_Mono} from 'next/font/google'

const monts = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'MEGsite',
  description: 'Created with meow-gic ^^',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={monts.className}>{children}</body>
    </html>
  )
}
