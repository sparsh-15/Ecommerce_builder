import { ShoppingCart, Menu, Search, Heart, X, User } from 'lucide-react';
import { useState } from 'react';
import { getFeaturedCategories, getAllCategoryNames } from '../data/Category';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartCount] = useState(3);
  const [wishlistCount] = useState(5);
  
  const featuredCategories = getFeaturedCategories(6);
  const allCategories = getAllCategoryNames();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const handleCategoryClick = (categoryName) => {
    console.log(`Navigate to category: ${categoryName}`);
    setIsMenuOpen(false); // Close mobile menu after selection
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Section - Logo and Menu */}
          <div className="flex items-center space-x-3">
            <button 
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <ShoppingCart className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-emerald-600 tracking-tight">
                ReactKart
              </h1>
            </div>
          </div>

          {/* Center Section - Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
              />
            </div>
          </div>

          {/* Right Section - Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Mobile Search Toggle */}
            <button 
              onClick={toggleSearch}
              className="md:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Toggle search"
            >
              <Search className="h-5 w-5 text-gray-700" />
            </button>

            {/* User Account */}
            <button className="hidden sm:flex p-2 hover:bg-gray-100 rounded-md transition-colors">
              <User className="h-5 w-5 text-gray-700" />
            </button>

            {/* Wishlist */}
            <button className="relative p-2 hover:bg-gray-100 rounded-md transition-colors group">
              <Heart className="h-5 w-5 text-gray-700 group-hover:text-red-500 transition-colors" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {wishlistCount > 9 ? '9+' : wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Cart */}
            <button className="relative p-2 hover:bg-gray-100 rounded-md transition-colors group">
              <ShoppingCart className="h-5 w-5 text-gray-700 group-hover:text-emerald-600 transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 pt-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-2">
            <div className="pb-2 mb-2 border-b border-gray-100">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Categories
              </h4>
            </div>
            {featuredCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.name)}
                className="flex items-center w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors text-left"
              >
                <category.icon className="h-4 w-4 mr-3 text-gray-500" />
                {category.name}
              </button>
            ))}
            <div className="border-t border-gray-100 pt-2 mt-2">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                All Categories
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                Deals & Offers
              </a>
            </div>
            <div className="sm:hidden border-t border-gray-200 pt-2 mt-2">
              <a href="#" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                <User className="h-5 w-5 mr-3" />
                My Account
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Navigation (Optional) */}
      <div className="hidden lg:block bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 py-3 overflow-x-auto">
            {featuredCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.name)}
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors whitespace-nowrap flex items-center space-x-1"
              >
                <category.icon className="h-4 w-4" />
                <span>{category.name}</span>
              </button>
            ))}
            <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors whitespace-nowrap">
              All Categories
            </a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors whitespace-nowrap">
              Deals & Offers
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;