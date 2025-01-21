"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const partners = [
  {
    id: 1,
    name: "DeWalt",
    logo: "/assets/partners/DeWalt_Logo.svg",
    description: "Leader mondial de l'outillage électroportatif",
    darkMode: true
  },
  {
    id: 2,
    name: "Bosch",
    logo: "/assets/partners/partenaire1.svg",
    description: "Solutions innovantes pour les professionnels",
    darkMode: false
  },
  {
    id: 3,
    name: "Makita",
    logo: "/assets/partners/makita.png",
    description: "Excellence japonaise en outillage",
    darkMode: true
  },
  {
    id: 4,
    name: "Stanley",
    logo: "/assets/partners/stanley.png",
    description: "Outils manuels de référence",
    darkMode: false
  },
  {
    id: 5,
    name: "Chicago Pneumatic",
    logo: "/assets/partners/chicago.png",
    description: "Performance et robustesse",
    darkMode: true
  }
];

const Partners = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Effet de fond amélioré */}
      <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[url('/assets/grid.png')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
      </div>
      
      <div className="container relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-primary/20 text-primary px-6 py-2 rounded-full text-sm font-semibold backdrop-blur-sm"
          >
            Nos Partenaires
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl font-oswald font-bold mt-6 mb-6 text-white tracking-wide drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]"
          >
            Ils nous font confiance
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-1.5 bg-primary mx-auto rounded-full"
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className={`relative rounded-2xl p-4 sm:p-6 transition-all duration-300 h-full
                  ${partner.darkMode 
                    ? 'bg-white/5 backdrop-blur-sm hover:bg-white/10 border border-white/5 hover:border-white/20' 
                    : 'bg-white/90 hover:bg-white border border-white/20 hover:border-white/30'}`}
                >
                  <div className={`flex items-center justify-center h-24 sm:h-28 mb-4 sm:mb-6 
                    ${!partner.darkMode && 'rounded-lg overflow-hidden'}`}
                  >
                    <div className="relative w-full h-16 sm:h-20">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className={`object-contain transition-all duration-500
                          ${partner.darkMode ? 'grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100' : 'grayscale-0'}`}
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      />
                    </div>
                  </div>
                  <div className="text-center transform transition-all duration-300">
                    <h3 className={`font-oswald text-lg sm:text-xl font-bold mb-2 sm:mb-3 
                      ${partner.darkMode ? 'text-white group-hover:text-primary' : 'text-gray-900 group-hover:text-primary'}`}
                    >
                      {partner.name}
                    </h3>
                    <p className={`text-sm font-work-sans opacity-0 group-hover:opacity-100 transition-all duration-300 
                      transform translate-y-2 group-hover:translate-y-0 line-clamp-2
                      ${partner.darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                    >
                      {partner.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16 sm:mt-20"
          >
            <p className="text-base sm:text-lg font-work-sans text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Nous collaborons avec les plus grandes marques mondiales pour vous garantir 
              des produits de qualité supérieure et un service d'excellence inégalé.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners; 