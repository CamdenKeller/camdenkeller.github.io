import { Inter } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import { Providers } from "@/lib/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://camkeller.dev"),
  title: "Cam Keller | Software Engineer",
  description: "Cam Keller is an Incoming Junior at Cornell University double-majoring in Computer Science and Cognitive Science, passionate about software engineering and applying technology to address environmental and social challenges.",
  keywords: ["Cam Keller", "Software Engineer", "Cornell University", "Portfolio", "Computer Science", "Cognitive Science"],
  openGraph: {
    title: "Cam Keller | Software Engineer",
    description: "Cornell University Computer Science and Cognitive Science student building scalable systems, cloud infrastructure, and full-stack applications",
    url: "https://camkeller.dev",
    siteName: "Cam Keller Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Cam Keller | Software Engineer",
    description: "Cornell University Computer Science and Cognitive Science student building scalable systems, cloud infrastructure, and full-stack applications",
  },
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
