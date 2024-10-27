import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Change this with your own data
export const metadata: Metadata = {
  title: "Portfolio",
  description: "Made by Ayushmaan Singh",
  authors: [{ name: "Ayushmaan Singh" }],
  openGraph: {
    title: "Portfolio Template",
    description: "Modern and professional template to showcase your best work.",
    url: "https://www.serenity-ui.com/",
    siteName: "Portfolio",
    images: [
      {
        url: "https://i.ibb.co/34j9BHf/portfoliotemplate.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Template",
    description: "Modern and professional template to showcase your best work.",
    images: ["https://i.ibb.co/34j9BHf/portfoliotemplate.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased mx-auto mb-14 w-full max-w-screen-sm flex-1 px-5 pb-8 pt-20`}>
      <ThemeProvider attribute="class" defaultTheme="system">
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
