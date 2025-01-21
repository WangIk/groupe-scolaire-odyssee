"use client";

import { useState, useEffect } from 'react';
import { getProduct } from '@/lib/api';
import { Product } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';

const ProductDetailPage = () => {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        if (params.id) {
          const productData = await getProduct(params.id as string);
          setProduct(productData);
        }
      } catch (error) {
        console.error('Erreur lors du chargement du produit:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Produit non trouvé</h1>
        <Link href="/produits" className="text-primary hover:underline">
          Retour aux produits
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link 
            href="/produits"
            className="text-primary hover:underline flex items-center gap-2"
          >
            ← Retour aux produits
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                unoptimized
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col justify-between"
            >
              <div>
                <h1 className="text-4xl font-oswald font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                <p className="text-gray-600 text-lg mb-6">
                  {product.description}
                </p>
                <div className="text-3xl font-bold text-primary mb-8">
                  {product.price} DH
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold text-lg">
                  Contacter pour commander
                </button>
                <p className="text-sm text-gray-500 text-center">
                  Pour plus d'informations, n'hésitez pas à nous contacter
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
