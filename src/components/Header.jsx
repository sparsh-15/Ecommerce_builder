import { ShoppingCart, Menu, Search, Heart, X, User, ChevronUp, ChevronDown } from 'lucide-react';
import { useWishlist } from '../contexts/WishlistContext';
import { useState } from 'react';
import { getFeaturedCategories, getAllCategoryNames } from '../data/Category';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const { cartCount } = useCart();
  const { wishlist } = useWishlist();

  const featuredCategories = getFeaturedCategories(6);
  const allCategoriesName = getAllCategoryNames();

  const allCategories = [
    ...featuredCategories,
    ...allCategoriesName
      .filter(name => !featuredCategories.includes(name))
      .map(name => ({ name }))
  ];


  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const toggleAllCategories = () => setShowAllCategories(!showAllCategories);

  const handleCategoryClick = (category) => {
    console.log(`Navigate to category: ${typeof category === 'string' ? category : category.name}`);
    setIsMenuOpen(false);
    setShowAllCategories(false);
  };

 
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/wishlist');
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
            <button className="relative p-2 hover:bg-gray-100 rounded-md transition-colors group"
            onClick={handleClick}>
              <Heart className="h-5 w-5 text-gray-700 group-hover:text-red-500 transition-colors" />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Shopping Cart */}
            <button className="relative p-2 hover:bg-gray-100 rounded-md transition-colors group" onClick={() => navigate('/cart')}>
              <ShoppingCart className="h-5 w-5 text-gray-700 group-hover:text-emerald-600 transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {cartCount}
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
                key={category.id || category.name}
                onClick={() => handleCategoryClick(category)}
                className="flex items-center w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors text-left"
              >
                {category.icon && <category.icon className="h-4 w-4 mr-3 text-gray-500" />}
                {category.name}
              </button>
            ))}

            <button
              onClick={toggleAllCategories}
              className="flex items-center w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors text-left"
            >
              <span>All Categories</span>
              {showAllCategories ? (
                <ChevronUp className="h-4 w-4 ml-auto" />
              ) : (
                <ChevronDown className="h-4 w-4 ml-auto" />
              )}
            </button>

            {showAllCategories && allCategories.length > 0 && (
              <div className="ml-4 space-y-1">
                {allCategories.map((category) => (
                  <button
                    key={category.id || category.name}
                    onClick={() => handleCategoryClick(category)}
                    className="flex items-center w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors text-left text-sm"
                  >
                    {category.icon && <category.icon className="h-4 w-4 mr-3 text-gray-500" />}
                    {category.name || category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      {/* Desktop Navigation */}
      <div className="hidden lg:block bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 py-3 overflow-x-auto">
            {featuredCategories.map((category) => (
              <button
                key={category.id || category.name}
                onClick={() => handleCategoryClick(category)}
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors whitespace-nowrap flex items-center space-x-1"
              >
                {category.icon && <category.icon className="h-4 w-4" />}
                <span>{category.name}</span>
              </button>
            ))}

            <button
              onClick={toggleAllCategories}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors whitespace-nowrap flex items-center space-x-1"
            >
              <span>All Categories</span>
              {showAllCategories ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
          </nav>

          {/* Expanded Categories Section */}
          {showAllCategories && allCategories.length > 0 && (
            <div className="grid grid-cols-4 gap-4 py-4 border-t border-gray-200">
              {allCategories.map((category) => (
                <button
                  key={category.id || category.name}
                  onClick={() => handleCategoryClick(category)}
                  className="text-gray-700 hover:text-emerald-600 text-left py-1 hover:bg-gray-100 px-2 rounded transition-colors flex items-center"
                >
                  {category.icon && <category.icon className="h-4 w-4 mr-2" />}
                  {category.name || category}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>


    </header>
  );
};

export default Header;