import { Metadata } from 'next';
import { getMetadata } from '@/lib/metadata';

export const metadata: Metadata = getMetadata({
  title: 'À Propos',
  description: 'Découvrez JACK Industries, votre partenaire de confiance pour le matériel de construction et l\'outillage professionnel au Maroc.'
});

export default function ProposLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 