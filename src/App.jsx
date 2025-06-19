import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
import { useState } from 'react';
import AdminDashboard from './pages/admin/AdminDashboard';
import Login from './pages/Login';

function AppRoutes({ isLoggedIn, onLogin, onLogout }) {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {!isAdminRoute && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/category/:categorySlug" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductQuickViewPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />

        {/* Auth Routes */}
        <Route
          path="/login"
          element={
            isLoggedIn ? <Navigate to="/admin" replace /> : <Login onLogin={onLogin} />
          }
        />

        {/* Admin Routes - Protected */}
        <Route
          path="/admin/*"
          element={
            isLoggedIn ? (
              <AdminDashboard onLogout={onLogout} />
            ) : (
              <Navigate to="/login" replace state={{ from: '/admin' }} />
            )
          }
        />

        {/* Catch-all redirect */}
        <Route
          path="*"
          element={<Navigate to={isLoggedIn ? "/admin" : "/login"} replace />}
        />
      </Routes>
      {!isAdminRoute && <Footer />}
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <AppRoutes isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
