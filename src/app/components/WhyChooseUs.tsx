"use client";

import { motion } from 'framer-motion';
import { FaTools, FaHandshake, FaAward, FaHeadset, FaShieldAlt, FaTruck } from 'react-icons/fa';

const features = [
  {
    title: "Expertise depuis 1995",
    description: "Plus de 25 ans d'expérience dans l'importation et la distribution de matériel professionnel.",
    icon: <FaTools className="w-10 h-10 text-primary" />,
    delay: 0.1
  },
  {
    title: "Partenariats durables",
    description: "Collaboration continue avec les plus grandes marques mondiales depuis notre création.",
    icon: <FaHandshake className="w-10 h-10 text-primary" />,
    delay: 0.2
  },
  {
    title: "Qualité garantie",
    description: "Sélection rigoureuse des produits pour garantir fiabilité et performance.",
    icon: <FaAward className="w-10 h-10 text-primary" />,
    delay: 0.3
  },
  {
    title: "Service client premium",
    description: "Accompagnement personnalisé et support technique professionnel.",
    icon: <FaHeadset className="w-10 h-10 text-primary" />,
    delay: 0.4
  },
  {
    title: "Garantie étendue",
    description: "Protection optimale de vos investissements avec nos garanties exclusives.",
    icon: <FaShieldAlt className="w-10 h-10 text-primary" />,
    delay: 0.5
  },
  {
    title: "Livraison rapide",
    description: "Service de livraison efficace partout au Maroc avec suivi en temps réel.",
    icon: <FaTruck className="w-10 h-10 text-primary" />,
    delay: 0.6
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Pourquoi nous choisir ?
          </span>
          <h2 className="text-4xl font-oswald font-bold mb-6">
            Une expertise reconnue à votre service
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-gray-600 font-work-sans text-lg max-w-2xl mx-auto">
            Découvrez les raisons qui font de Jack Industries le partenaire idéal 
            pour tous vos besoins en outillage et matériel professionnel.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-oswald font-semibold mb-4 text-gray-900 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-work-sans leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-primary/5 px-6 py-3 rounded-full">
            <span className="text-primary font-oswald text-lg font-semibold">
              Plus de 25 ans d'excellence
            </span>
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-gray-600 font-work-sans">
              Des milliers de clients satisfaits
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 