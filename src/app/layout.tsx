import { Inter } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import { Providers } from "@/lib/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cam Keller",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="Cam Keller" />
      </head>
      <body className={`${inter.className} bg-gray text-gray-600 antialiased`}>
        <Providers>
          <Header />
          <main className="flex min-h-screen w-full flex-col">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
