'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section - Image nette + overlay en dégradé */}
        <section className="relative h-[60vh]">
          <Image
            src="/images/ody.png" // 🖼️ Mets ici une image nette et bien choisie (pas floue)
            alt="Notre École"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent z-10" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 z-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-oswald text-5xl md:text-6xl font-bold mb-4 drop-shadow-xl"
            >
              Notre École
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-work-sans text-lg md:text-xl text-white/90 max-w-2xl"
            >
              Un lieu d'apprentissage, de partage et d'excellence
            </motion.p>
          </div>
        </section>

        {/* Section Histoire */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Texte */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="inline-block">
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="inline-block h-1 w-20 bg-primary mb-4"
                  />
                  <h2 className="text-4xl font-oswald font-bold mb-2">Notre Histoire</h2>
                  <p className="text-secondary font-work-sans text-lg">L’Odyssée éducative depuis 1995</p>
                </div>

                <div className="font-work-sans text-gray-600 space-y-4 text-lg leading-relaxed">
                  <p>
                    Notre école est un Groupe Scolaire Privé qui accueille des élèves de la crèche au collège,
                    en passant par la maternelle et l’élémentaire.
                  </p>
                  <p>
                    Visant l’excellence, le Groupe Scolaire L’Odyssée offre un programme d’enseignements et d’examens intensifs,
                    émaillé par des activités extrascolaires et périscolaires.
                  </p>
                  <p>
                    Ainsi, les parents et les enseignants se font mutuellement confiance et avancent vers le même but,
                    tout en se penchant ensemble sur les difficultés et les capacités de l’élève afin qu’il puisse
                    acquérir des savoirs et vivre l’égalité des chances.
                  </p>
                  <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                    <p className="font-semibold text-gray-800">
                      Depuis 1995, L’Odyssée accompagne chaque enfant à devenir un citoyen épanoui, responsable et confiant.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/assets/school.jpg"
                    alt="Vue de l'école"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section Valeurs */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-oswald font-bold mb-4">Nos Valeurs</h2>
              <p className="text-gray-600 font-work-sans text-lg max-w-2xl mx-auto">
                Ce qui nous guide chaque jour dans notre mission éducative
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: 'Excellence',
                  description: 'Nous visons l’excellence pédagogique et humaine dans tout ce que nous entreprenons.',
                  icon: '🎓',
                },
                {
                  title: 'Égalité des chances',
                  description: 'Chaque élève est accompagné pour exprimer son plein potentiel.',
                  icon: '🤝',
                },
                {
                  title: 'Épanouissement',
                  description: 'Les activités scolaires et périscolaires favorisent un développement équilibré.',
                  icon: '🌱',
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-8 rounded-lg shadow-md text-center"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="font-oswald text-xl font-semibold mb-3 text-primary">{value.title}</h3>
                  <p className="text-gray-600 font-work-sans">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Équipe */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-oswald font-bold mb-4">Notre Équipe</h2>
              <p className="text-gray-600 font-work-sans text-lg max-w-2xl mx-auto">
                Des éducateurs passionnés, investis et bienveillants
              </p>
            </motion.div>

            {/* Ajoute ici des cartes de l'équipe si nécessaire */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
