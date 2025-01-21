"use client";

import { useState, useEffect, useRef } from 'react';
import { useAuth } from '@/lib/hooks/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Product } from '@/lib/types';
import { getProducts, addProduct, updateProduct, deleteProduct } from '@/lib/api';
import Image from 'next/image';
import { FiUpload, FiX } from 'react-icons/fi';

const Dashboard = () => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: ''
  });

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const productsData = await getProducts();
      console.log('Produits chargés:', productsData);
      setProducts(productsData);
    } catch (error) {
      console.error('Erreur lors du chargement des produits:', error);
    }
  };

  const handleLogout = async () => {
    try {
      // Déconnexion de Firebase
      await signOut(auth);
      
      // Nettoyage complet du stockage
      localStorage.clear();
      sessionStorage.clear();
      
      // Supprimer tous les cookies
      document.cookie.split(";").forEach(function(c) { 
        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });

      // Attendre un peu pour que tout soit nettoyé
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Redirection forcée avec reload
      window.location.replace('/admin/login');
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
      alert('Erreur lors de la déconnexion');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (!formData.image) {
        alert('Veuillez ajouter une image');
        return;
      }

      const productData = {
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        image: formData.image,
        createdAt: new Date(),
        category: 'default'
      };

      if (editingProduct) {
        await updateProduct(editingProduct.id, productData);
      } else {
        await addProduct(productData);
      }

      await loadProducts();
      resetForm();
      setIsAddingProduct(false);
      setEditingProduct(null);
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
      alert('Erreur lors de la sauvegarde du produit');
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      image: product.image
    });
    setIsAddingProduct(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
      try {
        await deleteProduct(id);
        await loadProducts();
        setIsAddingProduct(false);
        setEditingProduct(null);
      } catch (error) {
        console.error('Erreur lors de la suppression:', error);
        alert('Erreur lors de la suppression');
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      price: '',
      image: ''
    });
  };

  const handleImageUpload = async (file: File) => {
    try {
      setUploading(true);
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'jack_products');

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();
      if (data.secure_url) {
        setFormData(prev => ({
          ...prev,
          image: data.secure_url
        }));
      }
    } catch (error) {
      console.error('Erreur lors de l\'upload:', error);
      alert('Erreur lors de l\'upload de l\'image');
    } finally {
      setUploading(false);
    }
  };

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar fixe */}
      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="font-oswald text-xl font-bold">Dashboard Admin</h1>
            <button
              onClick={handleLogout}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Déconnexion
            </button>
          </div>
        </div>
      </nav>

      {/* Contenu principal avec défilement */}
      <main className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Bouton d'ajout fixe en bas à droite */}
          <button
            onClick={() => {
              resetForm();
              setIsAddingProduct(true);
            }}
            className="fixed bottom-6 right-6 bg-white text-gray-900 p-4 rounded-full shadow-lg hover:bg-gray-50 transition-colors z-30"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>

          {/* Liste des produits */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 pb-20">
            {products.map((product) => (
              <motion.div
                key={product.id}
                layout
                className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  {product.image && (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      unoptimized
                      priority
                    />
                  )}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      onClick={() => handleEdit(product)}
                      className="bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
                    >
                      Voir détails
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-oswald text-xl font-semibold truncate">{product.name}</h3>
                  <p className="text-gray-600 text-sm mt-1 line-clamp-2">{product.description}</p>
                  <div className="mt-3">
                    <span className="text-primary font-semibold text-lg">{product.price} DH</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Modal d'ajout/édition de produit */}
      {isAddingProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 rounded-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-oswald font-bold">
                {editingProduct ? 'Modifier le produit' : 'Ajouter un produit'}
              </h2>
              <div className="flex gap-2">
                {editingProduct && (
                  <button
                    onClick={() => handleDelete(editingProduct.id)}
                    className="text-red-500 hover:text-red-700 px-3 py-1 rounded"
                  >
                    Supprimer
                  </button>
                )}
                <button
                  onClick={() => {
                    resetForm();
                    setIsAddingProduct(false);
                    setEditingProduct(null);
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FiX size={24} />
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Image upload */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image du produit
                </label>
                <div className="relative">
                  {!formData.image ? (
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
                    >
                      <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            handleImageUpload(file);
                          }
                        }}
                      />
                      <div>
                        <FiUpload className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-2 text-sm text-gray-600">
                          {uploading ? 'Upload en cours...' : 'Cliquez pour sélectionner une image'}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          PNG, JPG jusqu'à 5MB
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full h-48 rounded-lg overflow-hidden mb-2">
                      <Image
                        src={formData.image}
                        alt="Aperçu"
                        fill
                        className="object-cover"
                        unoptimized
                        priority
                      />
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, image: '' }))}
                        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 z-20"
                      >
                        <FiX size={20} />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Nom */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom du produit
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none min-h-[100px]"
                  required
                />
              </div>

              {/* Prix */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Prix (DH)
                </label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                  min="0"
                  step="0.01"
                  required
                />
              </div>

              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg shadow-md"
                >
                  {editingProduct ? 'Mettre à jour' : 'Valider'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Dashboard; 