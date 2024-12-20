import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './styles/home.scss';
import './styles/globals.scss';

import './styles/components/language-select.scss';

import './styles/components/button.scss';
import './styles/components/header.scss';
import './styles/components/footer.scss';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeArena",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
