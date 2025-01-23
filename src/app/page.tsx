import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhyChooseUs from './components/WhyChooseUs';
import PopularProducts from './components/PopularProducts';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import PageSchema from '@/components/PageSchema';
import { Metadata } from 'next';

const homeFAQs = [
  {
    question: "Quels types de produits proposez-vous ?",
    answer: "Nous proposons une large gamme de matériel de construction, outils professionnels et quincaillerie, incluant des outils électriques, manuels, matériaux de construction et fournitures diverses."
  },
  {
    question: "Livrez-vous dans tout le Maroc ?",
    answer: "Oui, nous assurons la livraison dans toutes les régions du Maroc avec des délais optimisés et un service de suivi de commande."
  },
  {
    question: "Proposez-vous des garanties sur vos produits ?",
    answer: "Tous nos produits sont garantis et nous assurons un service après-vente professionnel. La durée de garantie varie selon le type de produit."
  },
  {
    question: "Quelles sont vos méthodes de paiement acceptées ?",
    answer: "Nous acceptons plusieurs modes de paiement : carte bancaire, virement bancaire, paiement à la livraison, et paiement en ligne sécurisé."
  },
  {
    question: "Proposez-vous des devis pour les projets professionnels ?",
    answer: "Oui, nous établissons des devis personnalisés pour les professionnels et les grands projets. Notre équipe commerciale est à votre disposition pour étudier vos besoins."
  },
  {
    question: "Avez-vous un showroom pour voir les produits ?",
    answer: "Oui, notre showroom est situé à Casablanca où vous pouvez découvrir notre gamme de produits et bénéficier des conseils de nos experts."
  },
  {
    question: "Quels sont vos délais de livraison moyens ?",
    answer: "Les délais de livraison varient entre 24-48h pour Casablanca et 2-5 jours ouvrables pour les autres villes du Maroc, selon la disponibilité des produits."
  },
  {
    question: "Proposez-vous des services d'installation ou de formation ?",
    answer: "Oui, nous proposons des services d'installation pour certains équipements ainsi que des formations pour l'utilisation optimale des machines professionnelles."
  }
];

const testimonials = [
  {
    author: "Mohammed Alami",
    reviewBody: "Excellent service et produits de qualité. La livraison était rapide et le service client très professionnel.",
    reviewRating: 5,
    datePublished: "2024-01-15"
  },
  {
    author: "Karim Benjelloun",
    reviewBody: "Grande variété de produits et prix compétitifs. Je recommande vivement pour tous les professionnels du BTP.",
    reviewRating: 5,
    datePublished: "2024-01-20"
  },
  {
    author: "Sara Mansouri",
    reviewBody: "Service après-vente excellent et équipe très réactive. Les produits sont conformes aux descriptions.",
    reviewRating: 4,
    datePublished: "2024-01-25"
  }
];

export const metadata: Metadata = {
  title: 'JACK Industries | Matériel, Outils de Construction et Quincaillerie au Maroc',
  description: 'Premier fournisseur de matériel de construction, outils professionnels et quincaillerie au Maroc. Large gamme d\'outillage, matériaux BTP et fournitures de construction. Livraison dans tout le Maroc.',
  keywords: 'matériel construction Maroc, outils construction Maroc, quincaillerie Maroc, outillage professionnel, matériaux BTP, fournitures construction, quincaillerie Casablanca, outillage Maroc, bricolage Maroc, outils électriques, outils manuels, visserie, plomberie, électricité',
  openGraph: {
    title: 'JACK Industries | Matériel et Outils de Construction au Maroc',
    description: 'Votre fournisseur en matériel de construction, outillage professionnel et quincaillerie au Maroc. Qualité et prix compétitifs.',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'JACK Industries Maroc',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#ffffff',
  alternates: {
    canonical: 'https://www.jackindustries.ma'
  }
};

export default function Home() {
  return (
    <main>
      <PageSchema 
        faqs={homeFAQs}
        breadcrumbs={[
          { name: 'Accueil', url: '/' }
        ]}
        showLocalBusiness={true}
        showServices={true}
        reviews={testimonials}
      />
      <Header />
      <HeroSection />
      <WhyChooseUs />
      <PopularProducts />
      <Partners />
      <Testimonials />
      <Footer />
    </main>
  );
}
