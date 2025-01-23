import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jackindustries.ma'),
  title: {
    template: '%s | JACK Industries',
    default: 'JACK Industries - Matériel de Construction et Outillage Professionnel au Maroc'
  },
  description: 'JACK Industries est votre fournisseur de confiance en matériel de construction et outillage professionnel au Maroc. Large gamme de produits de qualité aux meilleurs prix.',
  keywords: 'matériel construction, outillage professionnel, quincaillerie, Maroc, Casablanca, JACK Industries',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://jackindustries.ma',
    siteName: 'JACK Industries',
    title: 'JACK Industries - Matériel de Construction et Outillage Professionnel au Maroc',
    description: 'Votre partenaire de confiance pour le matériel de construction et l\'outillage professionnel au Maroc.',
  },
  alternates: {
    canonical: 'https://jackindustries.ma'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
