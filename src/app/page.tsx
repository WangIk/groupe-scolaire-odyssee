import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhyChooseUs from './components/WhyChooseUs';
import PopularProducts from './components/PopularProducts';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <WhyChooseUs />
      <PopularProducts />
      <Partners />
      <Testimonials />
      <Footer />
    </main>
  );
}
