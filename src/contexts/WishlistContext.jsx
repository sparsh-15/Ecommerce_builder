import { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // 1. Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('wishlist');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setWishlist(parsed);
        }
      }
    } catch (error) {
      console.error('Failed to load wishlist from localStorage:', error);
      localStorage.removeItem('wishlist');
    }
    setIsInitialized(true);
  }, []);

  // 2. Save to localStorage when wishlist changes
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
  }, [wishlist, isInitialized]);

  const addToWishlist = (product) => {
    setWishlist(prev => 
      prev.some(item => item.id === product.id) 
        ? prev 
        : [...prev, product]
    );
  };

  const removeFromWishlist = (productId) => {
    setWishlist(prev => prev.filter(item => item.id !== productId));
  };

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);