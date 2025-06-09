import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { WishlistProvider } from './contexts/WishlistContext';
import WishlistPage from './pages/WishlistPage';
import { CartProvider } from './contexts/CartContext';
import CartPage from './pages/CartPage';
import CategoryPage from './pages/CategoryPage';
import ProductQuickViewPage from './pages/ProductQuickViewPage';


function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/category/:categorySlug" element={<CategoryPage />} />
              <Route path="/product/:id" element={<ProductQuickViewPage />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </WishlistProvider>
    </CartProvider>

  );
}

export default App;
