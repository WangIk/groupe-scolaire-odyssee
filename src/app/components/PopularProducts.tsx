"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: "Outillage Professionnel",
    image: "/assets/image5.png",
    description: "Gamme complète d'outils pour les professionnels du bâtiment"
  },
  {
    id: 2,
    name: "Matériel de Construction",
    image: "/assets/image6.png",
    description: "Équipements et matériaux pour chantiers"
  },
  {
    id: 3,
    name: "Quincaillerie Premium",
    image: "/assets/image8.jpg",
    description: "Solutions de quincaillerie haut de gamme"
  }
];

const PopularProducts = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* En-tête de section amélioré */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Produits Phares
            </span>
            <h2 className="text-5xl font-oswald font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Nos Meilleurs Produits
            </h2>
            <div className="w-20 h-1.5 bg-primary rounded-full mb-6" />
            <p className="text-gray-600 font-work-sans text-lg max-w-2xl">
              Découvrez notre sélection de produits professionnels de haute qualité, 
              choisis pour leur performance et leur fiabilité exceptionnelle.
            </p>
          </motion.div>
        </div>

        {/* Grille de produits améliorée */}
        <div className="grid lg:grid-cols-3 gap-10 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-72">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-8">
                <h3 className="font-oswald text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 font-work-sans mb-6 line-clamp-2">
                  {product.description}
                </p>
                <Link 
                  href={`/produits/${product.id}`}
                  className="inline-flex items-center gap-3 text-primary font-semibold group/link"
                >
                  <span className="relative">
                    En savoir plus
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover/link:w-full transition-all duration-300" />
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover/link:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call-to-action amélioré */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl">
            <div className="flex items-center gap-6">
              <div className="bg-primary/20 p-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-oswald text-xl font-bold text-white mb-1">Catalogue Complet</p>
                <p className="text-gray-300 font-work-sans">Plus de 1000 références disponibles</p>
              </div>
            </div>
            <Link href="/produits">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-primary/90 text-white font-oswald text-lg px-10 py-4 
                rounded-xl transition-all shadow-lg flex items-center gap-3 group border-2 border-transparent
                hover:border-white/20"
              >
                Voir tous nos produits
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 transform transition-transform group-hover:translate-x-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularProducts; 