import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react'


const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Katrine's Portfolio",
  description: "I will work for free tacos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" suppressHydrationWarning
      className={`${fraunces.variable} h-full antialiased`}>
      <body className="mx-auto max-w-5xl bg-stone-50 dark:bg-stone-950 px-12 py-36 font-fraunces antialiased transition-colors">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
