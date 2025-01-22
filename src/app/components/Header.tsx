"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/98 backdrop-blur-md shadow-lg py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between max-w-full">
            <Link href="/" className="flex-shrink-0 block h-12 sm:h-12">
              <Image
                src="/assets/logo.png"
                alt="Jack Industries Logo"
                width={120}
                height={48}
                className={`h-8 sm:h-full w-auto transition-all duration-300 ${
                  isScrolled ? 'brightness-100' : 'brightness-0 invert'
                }`}
                priority
              />
            </Link>
            
            <div className="hidden md:flex items-center space-x-8 flex-shrink-0">
              {[
                { name: 'Accueil', path: '/' },
                { name: 'Produits', path: '/produits' },
                { name: 'À propos', path: '/propos' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <NavLink 
                  key={item.name} 
                  href={item.path}
                  isScrolled={isScrolled}
                  isActive={activeSection === item.name.toLowerCase()}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg flex-shrink-0 ${
                isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 w-64 bg-primary shadow-2xl z-50 md:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-end mb-8">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-primary-dark text-white"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>
                <div className="flex flex-col space-y-4">
                  {[
                    { name: 'Accueil', path: '/' },
                    { name: 'Produits', path: '/produits' },
                    { name: 'À propos', path: '/propos' },
                    { name: 'Contact', path: '/contact' }
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.path}
                      className="font-oswald text-lg text-white hover:text-white/80 transition-colors py-2 border-b border-white/10 last:border-0"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const NavLink = ({ 
  href, 
  children, 
  isScrolled,
  isActive 
}: { 
  href: string; 
  children: React.ReactNode; 
  isScrolled: boolean;
  isActive: boolean;
}) => (
  <Link href={href} className="flex-shrink-0">
    <motion.span
      className={`font-oswald text-lg transition-all relative ${
        isScrolled 
          ? 'text-gray-800 hover:text-primary' 
          : 'text-hero hover:text-hero-secondary'
      } ${isActive ? 'text-primary' : ''}`}
      whileHover={{ y: -2 }}
    >
      {children}
      {isActive && (
        <motion.span
          layoutId="activeSection"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
        />
      )}
    </motion.span>
  </Link>
);

export default Header;
