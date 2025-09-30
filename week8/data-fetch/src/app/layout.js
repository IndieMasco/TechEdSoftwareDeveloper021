import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next.js Blog",
  description: "A simple blog built with Next.js",
  openGraph: {
    title: "Next.js Blog",
    description: "A simple blog built with Next.js",
    type: "website",
    url: "https://next-comments-postgres.vercel.app/",
    images: ["https://next-comments-postgres.vercel.app/og-image.png"], // add an appropriate image to your public folder - need to be in an array
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
