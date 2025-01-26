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
    template: '%s | JACK Industries - Matériels de Construction et Travaux Publics au Maroc',
    default: 'JACK Industries - Matériels de Construction, Outillages et Quincaillerie au Maroc'
  },
  description: 'Fournisseur leader au Maroc en matériels de construction et travaux publics. Spécialiste en outillages électriques, tiges de coffrage, écrous ADC, contreplaqué bakélisé, cisailles Leadermec et Icaro. Livraison dans tout le Maroc.',
  keywords: [
    'matériels construction Maroc',
    'matériels travaux publics',
    'outillages électriques',
    'outils et quincailleries',
    'drogueries',
    'tiges de coffrage',
    'tiges ADC',
    'écrou de coffrage',
    'écrou ADC',
    'contreplaqué bakélisé',
    'madrier',
    'tube garde corps',
    'tôle nervesco',
    'pointe et file d\'attache',
    'JP8',
    'cale à béton',
    'étoile',
    'cale rambax',
    'ventilateur brumisateur',
    'rafraîchissement grande surface',
    'cisaille leadermec',
    'cisaille icaro',
    'coudeuse leadermec',
    'coudeuse ofmer'
  ].join(', '),
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
    siteName: 'JACK Industries - Matériels de Construction',
    title: 'JACK Industries - Leader en Matériels de Construction et Travaux Publics au Maroc',
    description: 'Expert en matériels de construction, outillages électriques, tiges et écrous de coffrage, contreplaqué bakélisé. Distributeur officiel Leadermec et Icaro au Maroc.',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JACK Industries - Matériels de Construction et Travaux Publics au Maroc',
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
