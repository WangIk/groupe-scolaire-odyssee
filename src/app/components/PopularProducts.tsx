"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Importation de Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const levels = [
  {
    id: 1,
    name: "Crèche",
    image: "/assets/bg1.png",
    description: "Accueil des tout-petits de 3 mois à 3 ans dans un environnement bienveillant et sécurisé"
  },
  {
    id: 2,
    name: "Maternelle",
    image: "/assets/bg2.png",
    description: "Éveil et développement des compétences fondamentales de 3 à 6 ans"
  },
  {
    id: 3,
    name: "Élémentaire",
    image: "/assets/image3.jpg",
    description: "Acquisition des savoirs de base et développement de l'autonomie de 6 à 11 ans"
  },
  {
    id: 4,
    name: "Collège",
    image: "/assets/image4.jpg",
    description: "Approfondissement des connaissances et préparation au lycée de 11 à 15 ans"
  }
];

const PopularProducts = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="bg-accent-red/10 text-accent-red px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Nos Niveaux
            </span>
            <h2 className="text-5xl font-oswald font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Parcours Éducatif Complet
            </h2>
            <div className="w-20 h-1.5 bg-accent-red rounded-full mb-6" />
            <p className="text-gray-600 font-work-sans text-lg max-w-2xl">
              De la crèche au collège, découvrez notre approche pédagogique adaptée 
              à chaque étape du développement de l&apos;enfant.
            </p>
          </motion.div>
        </div>

        {/* Swiper pour les niveaux avec pagination à droite */}
        <div className="w-full relative">
          <div className="swiper progress-slide-carousel swiper-container relative">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ 
                clickable: true,
                el: '.swiper-pagination',
                type: 'bullets'
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              className="!pb-12"
            >
              {levels.map((level, index) => (
                <SwiperSlide key={level.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
                  >
                    <Link href="/niveaux" className="block h-full">
                      <div className="relative h-48">
                        <Image
                          src={level.image}
                          alt={level.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="font-oswald text-xl font-bold mb-3 group-hover:text-accent-red transition-colors">
                          {level.name}
                        </h3>
                        <p className="text-gray-600 font-work-sans mb-4 line-clamp-3 text-sm flex-1">
                          {level.description}
                        </p>
                        <div className="inline-flex items-center gap-3 text-accent-red font-semibold group/link">
                          <span className="relative">
                            En savoir plus
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-red group-hover/link:w-full transition-all duration-300" />
                          </span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover/link:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination !bottom-2 !top-auto !w-80 right-0 mx-auto bg-gray-100 rounded-full"></div>
          </div>
        </div>

        {/* Call-to-action amélioré */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 bg-gradient-to-r from-primary via-primary-dark to-primary p-8 rounded-2xl shadow-2xl">
            <div className="flex items-center gap-6">
              <div className="bg-white/20 p-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-oswald text-xl font-bold text-white mb-1">Projet Éducatif</p>
                <p className="text-white/80 font-work-sans">Découvrez notre approche pédagogique</p>
              </div>
            </div>
            <Link href="/niveaux">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent-red hover:bg-accent-red/90 text-white font-oswald text-lg px-10 py-4 
                rounded-xl transition-all shadow-lg flex items-center gap-3 group border-2 border-transparent
                hover:border-white/20"
              >
                Découvrir nos niveaux
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