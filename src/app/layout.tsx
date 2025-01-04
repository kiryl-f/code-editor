import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import './styles/home.scss';
import './styles/globals.scss';

import './styles/components/language-select.scss';

import './styles/components/button.scss';



const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ['400']
});

const spaceMonoBold = Space_Mono({
  variable: "--font-space-mono-bold",
  subsets: ["latin"],
  weight: '700'
});



export const metadata: Metadata = {
  title: "CodeArena",
  description: "Practice your coding skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} ${spaceMonoBold.variable}`}>
        {children}
      </body>
    </html>
  );
}
