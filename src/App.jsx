import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/website/header/Header';
import Footer from './components/website/footer/Footer';
import HomePage from './pages/website/HomePage';
import { WishlistProvider } from './contexts/WishlistContext';
import { CartProvider } from './contexts/CartContext';
import CartPage from './pages/website/CartPage';
import CheckoutPage from './pages/website/CheckoutPage';
import WishlistPage from './pages/website/WishlistPage';
import CategoryPage from './pages/website/CategoryPage';
import ProductQuickViewPage from './pages/website/ProductQuickViewPage';


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
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </WishlistProvider>
    </CartProvider>

  );
}

export default App;
