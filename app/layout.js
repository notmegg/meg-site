import "./globals.css";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const monts = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "megSpace",
  description: "Ready to go?🚀",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={monts.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
