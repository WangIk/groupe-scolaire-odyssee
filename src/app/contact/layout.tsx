import { Metadata } from 'next';
import { getMetadata } from '@/lib/metadata';

export const metadata: Metadata = getMetadata({
  title: 'Contactez-nous',
  description: 'Contactez JACK Industries pour tous vos besoins en matériel de construction et outillage professionnel. Service client disponible en français et arabe.'
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 