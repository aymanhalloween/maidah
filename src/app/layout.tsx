import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "Maidah",
    template: "%s | Maidah",
  },
  description:
    "A permanent endowment fund investing in the people and institutions the Muslim world still needs.",
  metadataBase: new URL("https://maidah.org"),
  openGraph: {
    title: "Maidah",
    description:
      "A permanent endowment fund investing in the people and institutions the Muslim world still needs.",
    url: "https://maidah.org",
    siteName: "Maidah",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maidah",
    description:
      "A permanent endowment fund investing in the people and institutions the Muslim world still needs.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
