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
    template: '%s | JACK Industries - Matériel de Construction au Maroc',
    default: 'JACK Industries - Matériel de Construction et Outillage Professionnel au Maroc'
  },
  description: 'Leader dans la vente de matériel de construction au Maroc. Large gamme d\'équipements BTP, outillage professionnel et matériaux de construction. Prix compétitifs et livraison sur tout le Maroc.',
  keywords: 'matériel construction Maroc, matériaux construction, équipement BTP, outillage professionnel, quincaillerie, Casablanca, fournisseur matériel construction, vente matériel construction',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://jackindustries.ma',
    siteName: 'JACK Industries - Matériel de Construction',
    title: 'JACK Industries - Premier Fournisseur de Matériel de Construction au Maroc',
    description: 'Découvrez notre large gamme de matériel de construction et outillage professionnel. Expert en équipements BTP et matériaux de construction au Maroc.',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JACK Industries - Matériel de Construction au Maroc',
      },
    ],
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
