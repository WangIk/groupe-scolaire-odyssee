"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiCalendar, FiUser, FiArrowRight } from 'react-icons/fi';

interface News {
  id: string;
  title: string;
  content: string;
  image: string;
  author: string;
  date: Date;
  category: string;
  isPublished: boolean;
}

const NewsSection = () => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    try {
      const response = await fetch('/api/news');
      const newsData = await response.json();
      // Filtrer seulement les actualités publiées
      const publishedNews = newsData.filter((item: News) => item.isPublished);
      setNews(publishedNews);
    } catch (error) {
      console.error('Erreur lors du chargement des actualités:', error);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'inscription': return 'bg-accent-green text-white';
      case 'activites': return 'bg-accent-yellow text-gray-900';
      case 'reunion': return 'bg-accent-bordeaux text-white';
      default: return 'bg-accent-red text-white';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'inscription': return 'Inscription';
      case 'activites': return 'Activités';
      case 'reunion': return 'Réunion';
      default: return 'Actualité';
    }
  };

  const filteredNews = selectedCategory === 'all' 
    ? news 
    : news.filter(item => item.category === selectedCategory);

  const categories = [
    { value: 'all', label: 'Toutes' },
    { value: 'actualite', label: 'Actualités' },
    { value: 'inscription', label: 'Inscriptions' },
    { value: 'activites', label: 'Activités' },
    { value: 'reunion', label: 'Réunions' }
  ];

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-red mx-auto"></div>
            <p className="mt-4 text-gray-600">Chargement des actualités...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-accent-red/10 text-accent-red px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Actualités
          </span>
          <h1 className="text-4xl md:text-5xl font-oswald font-bold mb-6">
            Les Actualités de L'Odyssée
          </h1>
          <div className="h-1 w-20 bg-accent-red mx-auto rounded-full mb-6" />
          <p className="text-gray-600 font-work-sans text-lg max-w-2xl mx-auto">
            Restez informés des dernières nouvelles, événements et informations importantes 
            du Groupe Scolaire L'Odyssée.
          </p>
        </motion.div>

        {/* Filtres par catégorie */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category.value
                  ? 'bg-accent-red text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Grille des actualités */}
        {filteredNews.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">
              Aucune actualité disponible pour le moment.
            </p>
          </motion.div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredNews.map((newsItem, index) => (
              <motion.article
                key={newsItem.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  {newsItem.image && (
                    <Image
                      src={newsItem.image}
                      alt={newsItem.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  )}
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(newsItem.category)}`}>
                      {getCategoryLabel(newsItem.category)}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="font-oswald text-xl font-semibold mb-3 line-clamp-2 group-hover:text-accent-red transition-colors">
                    {newsItem.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {newsItem.content}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <FiUser className="w-3 h-3" />
                      <span>{newsItem.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FiCalendar className="w-3 h-3" />
                      <span>{new Date(newsItem.date).toLocaleDateString('fr-FR')}</span>
                    </div>
                  </div>
                  
                  <Link 
                    href={`/actualites/${newsItem.id}`}
                    className="inline-flex items-center text-accent-red font-semibold text-sm hover:text-accent-red/80 transition-colors group/link"
                  >
                    Lire la suite
                    <FiArrowRight className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* Call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-primary-dark p-8 rounded-2xl text-white">
            <h3 className="font-oswald text-2xl font-bold mb-4">
              Restez connectés avec L'Odyssée
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Inscrivez-vous à notre newsletter pour recevoir les dernières actualités 
              et informations importantes directement dans votre boîte mail.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center bg-accent-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-red/90 transition-colors"
            >
              Nous contacter
              <FiArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection; 