import { Metadata } from 'next';

const defaultOpenGraph = {
  type: 'website',
  locale: 'fr_FR',
  siteName: 'JACK Industries Maroc',
  title: 'JACK Industries',
  description: 'Premier fournisseur de matériel de construction au Maroc',
};

const defaultMetadata: Metadata = {
  title: {
    absolute: 'JACK Industries | Matériel et Outillage Professionnel au Maroc',
  },
  description: 'Premier fournisseur de matériel de construction, outils professionnels et quincaillerie au Maroc.',
  openGraph: defaultOpenGraph,
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#ffffff',
};

export const getMetadata = (props?: {
  title?: string;
  description?: string;
}): Metadata => {
  const customTitle = props?.title ?? '';
  const customDescription = props?.description ?? defaultMetadata.description ?? '';

  return {
    ...defaultMetadata,
    title: customTitle ? { absolute: `${customTitle} | JACK Industries` } : defaultMetadata.title,
    description: customDescription,
    openGraph: {
      ...defaultOpenGraph,
      title: customTitle || defaultOpenGraph.title,
      description: customDescription,
    }
  };
}; 