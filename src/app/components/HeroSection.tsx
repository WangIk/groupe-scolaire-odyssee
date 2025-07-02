"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { FaDownload } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/autoplay';

const backgrounds = [
  {
    url: '/assets/bg1.png',
    title: 'Excellence Acamdemique',
    subtitle: "Inscrivez vos enfants dans les ...",
    priority: true
  },
  {
    url: '/assets/bg2.png',
    title: 'Un Avenir garanti',
    subtitle: "La meilleure école au Congo",
    priority: false
  },
  {
    url: '/assets/bg3.png',
    title: 'Un Avenir garanti',
    subtitle: "La meilleure école au Congo",
    priority: false
  }
];

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section 
      className="relative h-screen w-full overflow-hidden"
      aria-label="Bannière principale"
    >
      <div className="absolute inset-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          speed={1000}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="h-full w-full"
        >
          {backgrounds.map((bg, index) => (
            <SwiperSlide key={bg.url} className="relative">
              <Image
                src={bg.url}
                alt={`${bg.title} - ${bg.subtitle}`}
                fill
                className={`object-cover transition-transform duration-8000 ${
                  activeIndex === index ? 'scale-up' : 'scale-100'
                }`}
                priority={bg.priority}
                quality={90}
                onLoad={() => setIsLoading(false)}
                sizes="100vw"
                loading={bg.priority ? 'eager' : 'lazy'}
              />
              <div 
                className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" 
                aria-hidden="true"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="relative h-full z-20">
        <div className="h-full flex items-center">
          <div className="container">
            <div className="max-w-4xl">
              <motion.span
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="inline-block font-work-sans text-lg md:text-xl mb-4 text-primary bg-white/90 px-4 py-1 rounded-full"
              >
                Votre partenaire depuis 1995
              </motion.span>
              
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="font-oswald text-5xl sm:text-6xl md:text-8xl font-bold mb-4 drop-shadow-lg tracking-wider text-hero"
              >
              L'Odyssée
              </motion.h1>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <p className="font-work-sans text-xl md:text-2xl drop-shadow-md text-hero">
                  {backgrounds[activeIndex].title}
                </p>
                <p className="font-work-sans text-lg md:text-xl text-hero-secondary">
                  {backgrounds[activeIndex].subtitle}
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-6 mt-12"
              >
                <Link 
                  href="/assets/JACK PLAQUETTE.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Télécharger notre catalogue au format PDF"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-primary w-full sm:w-auto flex items-center justify-center"
                    aria-label="Télécharger le catalogue"
                  >
                    <span>Télécharger le catalogue</span>
                    <FaDownload className="h-5 w-5 ml-2" />
                  </motion.button>
                </Link>
                <Link 
                  href="/contact"
                  aria-label="Accéder au formulaire de demande de devis"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-outline w-full sm:w-auto"
                    aria-label="Contactez-nous"
                  >
                    <span>Contactez-nous</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 ml-2" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Indicateurs de slide */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2"
          role="tablist"
          aria-label="Navigation des slides"
        >
          {backgrounds.map((_, index) => (
            <motion.button
              key={index}
              role="tab"
              aria-selected={activeIndex === index}
              aria-label={`Slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'w-8 bg-primary' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-8 text-white flex items-center gap-2"
        aria-hidden="true"
      >
        <div className="animate-float">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
        <span className="text-sm font-work-sans">Scroll pour découvrir</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;