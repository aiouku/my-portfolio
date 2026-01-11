import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kei Tanaka | Developer Portfolio",
  description: "Student Developer specializing in Unity, Web Development, and Creative Coding. Building interactive experiences and web apps.",
  keywords: ["developer", "portfolio", "unity", "react", "next.js", "p5.js", "game development", "web development"],
  authors: [{ name: "Kei Tanaka" }],
  openGraph: {
    title: "Kei Tanaka | Developer Portfolio",
    description: "Student Developer specializing in Unity, Web Development, and Creative Coding.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
