import Header from './components/Header';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import ProductGrid from './components/ProductGrid';
import FeaturedSection from './components/FeaturedSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Header />
      <Hero />
      <CategorySection />
      <ProductGrid />
      <FeaturedSection />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;