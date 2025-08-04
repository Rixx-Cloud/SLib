'use client'

import "./globals.css";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { Providers } from "./Providers";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
        </Providers>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
