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
        {/* Hero Section */}
        <section className="relative h-[60vh]">
          <Image
            src="/images/ody.png"
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
                  <p>Notre école est un Groupe Scolaire Privé qui accueille des élèves de la crèche au collège, en passant par la maternelle et l’élémentaire.</p>
                  <p>Visant l’excellence, le Groupe Scolaire L’Odyssée offre un programme d’enseignements et d’examens intensifs, émaillé par des activités extrascolaires et périscolaires.</p>
                  <p>Ainsi, les parents et les enseignants se font mutuellement confiance et avancent vers le même but, tout en se penchant ensemble sur les difficultés et les capacités de l’élève afin qu’il puisse acquérir des savoirs et vivre l’égalité des chances.</p>
                  <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                    <p className="font-semibold text-gray-800">Depuis 1995, L’Odyssée accompagne chaque enfant à devenir un citoyen épanoui, responsable et confiant.</p>
                  </div>
                </div>
              </motion.div>

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
                { title: 'Rigueur', description: 'Nous visons l’excellence pédagogique et humaine dans tout ce que nous entreprenons.', icon: '🎓' },
                { title: 'Travail', description: 'Chaque élève est accompagné pour exprimer son plein potentiel.', icon: '🤝' },
                { title: 'Reussite', description: 'Les activités scolaires et périscolaires favorisent un développement équilibré.', icon: '🌱' },
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

        {/* 🎯 Section Équipe */}
{/* 🎯 Section Équipe - avec même tailles + dernière ligne centrée */}
<section className="py-24 relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white">
  {/* Animation de fond doux */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-transparent to-red-100/30 animate-pulse-slow z-0" />

  <div className="relative z-10 container mx-auto px-4">
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

    {/* Grille globale */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 max-w-6xl mx-auto">
      {/* Première ligne : 3 membres */}
      {[
        {
          name: 'Mme Sophie Durand',
          role: 'Directrice Générale',
          quote: 'Accompagner chaque élève vers l’excellence.',
          img: '/images/DG.png',
        },
        {
          name: 'M. Alain Morel',
          role: 'Directeur Pédagogique',
          quote: 'Un cadre exigeant et bienveillant.',
          img: '/images/DP.png',
        },
        {
          name: 'Mme Nadia El Idrissi',
          role: 'Responsable Administrative',
          quote: 'L’accueil et l’écoute avant tout.',
          img: '/images/DA.png',
        },
      ].map((member, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.15, duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group relative"
        >
          <div className="relative w-44 h-44 mx-auto mb-6 rounded-full overflow-hidden shadow-md">
            <Image
              src={member.img}
              alt={member.name}
              width={180}
              height={180}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <h3 className="text-lg font-bold font-oswald text-black">{member.name}</h3>
          <p className="text-sm font-work-sans text-indigo-700 mt-1">{member.role}</p>
          <p className="text-sm italic text-gray-500 mt-1 font-work-sans">"{member.quote}"</p>
        </motion.div>
      ))}

      {/* Dernière ligne centrée */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center gap-14">
        {[
          {
            name: 'Mme Claire Bouchard',
            role: 'Responsable Financière',
            quote: 'L’éveil en douceur.',
            img: '/images/RF.png',
          },
          {
            name: 'M. Karim Meziane',
            role: 'Responsable Des Activités Scolaires',
            quote: 'Former des esprits curieux et libres.',
            img: '/images/RAS.png',
          },
        ].map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + idx * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group relative w-full max-w-sm"
          >
            <div className="relative w-44 h-44 mx-auto mb-6 rounded-full overflow-hidden shadow-md">
              <Image
                src={member.img}
                alt={member.name}
                width={180}
                height={180}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-lg font-bold font-oswald text-black">{member.name}</h3>
            <p className="text-sm font-work-sans text-indigo-700 mt-1">{member.role}</p>
            <p className="text-sm italic text-gray-500 mt-1 font-work-sans">"{member.quote}"</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>




      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
