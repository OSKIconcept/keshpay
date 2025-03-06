import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { LinkWrapper } from "@/context/headerContext";

const geistSans = localFont({
  src: "../fonts/Gilroy-Medium.ttf",
  weight: "600",
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <LinkWrapper>
        <body className={`${geistSans.className} antialiased`}>{children}</body>
      </LinkWrapper>
    </html>
  );
}
