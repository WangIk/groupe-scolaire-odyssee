"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Product } from '@/lib/types';
import { getProducts } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PRODUCTS_PER_PAGE = 9;

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Erreur lors du chargement des produits:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // Filtrage des produits
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-[40vh] bg-gray-900">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-gray-900/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white"
            >
              <h1 className="font-oswald text-5xl font-bold mb-4">Nos Produits</h1>
              <p className="font-work-sans text-xl">
                Découvrez notre gamme complète de produits professionnels
              </p>
            </motion.div>
          </div>
        </section>

        {/* Barre de recherche */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher un produit..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Grille de produits améliorée */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            {products.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 bg-white rounded-lg shadow-sm"
              >
                <p className="text-gray-500 text-lg mb-4">
                  Aucun produit disponible pour le moment.
                </p>
              </motion.div>
            ) : currentProducts.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 bg-white rounded-lg shadow-sm"
              >
                <p className="text-gray-500 text-lg mb-4">
                  Aucun produit ne correspond à votre recherche.
                </p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setCurrentPage(1);
                  }}
                  className="text-primary hover:underline"
                >
                  Réinitialiser la recherche
                </button>
              </motion.div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -5 }}
                      className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                    >
                      <Link href={`/produits/${product.id}`} className="block">
                        <div className="relative h-56 w-full">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover rounded-t-xl"
                            unoptimized
                            priority
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="bg-primary text-white px-6 py-3 rounded-full transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                              Voir les détails
                              <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </span>
                          </div>
                        </div>

                        <div className="p-4">
                          <h2 className="font-oswald text-xl font-semibold text-gray-900 mb-2">
                            {product.name}
                          </h2>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                            {product.description}
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-xl font-bold text-primary">
                              {product.price} DH
                            </span>
                            <span className="text-sm text-gray-500 group-hover:text-primary transition-colors">
                              Plus d'infos →
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Pagination améliorée */}
                {totalPages > 1 && (
                  <div className="mt-8 flex flex-wrap justify-center gap-2">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`px-4 py-2 rounded-lg ${
                        currentPage === 1
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          : 'bg-white text-primary hover:bg-gray-50 border border-primary'
                      }`}
                    >
                      Précédent
                    </button>
                    
                    {[...Array(totalPages)].map((_, index) => (
                      <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`w-10 h-10 rounded-lg ${
                          currentPage === index + 1
                            ? 'bg-primary text-white'
                            : 'bg-white text-primary hover:bg-gray-50 border border-primary'
                        }`}
                      >
                        {index + 1}
                      </button>
                    ))}
                    
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`px-4 py-2 rounded-lg ${
                        currentPage === totalPages
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          : 'bg-white text-primary hover:bg-gray-50 border border-primary'
                      }`}
                    >
                      Suivant
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProductsPage;
