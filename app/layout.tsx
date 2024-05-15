import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="max-w-7xl w-full mx-auto py-3 px-5 border-b border-border">
          <span className="text-xl font-bold">Todo</span>
        </nav>
        {children}
      </body>
    </html>
  );
}
