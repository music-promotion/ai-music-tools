import type { Metadata } from "next";
import { siteConfig } from "@/site.config";
import "./globals.css";
import { Space_Grotesk, DM_Sans } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords.join(", "),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className={`${dmSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
