import { useState, useMemo } from 'react';
import { Filter, Grid, List, ChevronDown } from 'lucide-react';
import ProductCard from './ProductCard';
import { 
  products, 
  getFeaturedProducts, 
  getNewProducts, 
  getProductsOnSale,
  getProductsByCategory,
  sortProducts 
} from '../data/Products';
import { categories } from '../data/Category';

const ProductGrid = ({ 
  title = "Latest Products", 
  showFilters = true, 
  showSorting = true,
  initialFilter = "all",
  limit = null,
  categoryFilter = null 
}) => {
  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  // Filter options
  const filterOptions = [
    { key: 'all', label: 'All Products', count: products.length },
    { key: 'featured', label: 'Featured', count: getFeaturedProducts().length },
    { key: 'new', label: 'New Arrivals', count: getNewProducts().length },
    { key: 'sale', label: 'On Sale', count: getProductsOnSale().length },
  ];

  // Add category filters
  const categoryFilters = categories.map(cat => ({
    key: cat.slug,
    label: cat.name,
    count: getProductsByCategory(cat.slug).length
  }));

  const allFilterOptions = [...filterOptions, ...categoryFilters];

  // Sort options
  const sortOptions = [
    { key: 'newest', label: 'Newest First' },
    { key: 'price-low', label: 'Price: Low to High' },
    { key: 'price-high', label: 'Price: High to Low' },
    { key: 'rating', label: 'Highest Rated' },
    { key: 'discount', label: 'Best Deals' }
  ];

  // Get filtered and sorted products
const filteredAndSortedProducts = useMemo(() => {
  let filtered = products;

  // First apply category filter if specified as prop
  if (categoryFilter) {
    filtered = getProductsByCategory(categoryFilter);
  }

  // Then apply the active filter (unless we're already filtered by category)
  if (!categoryFilter || activeFilter !== 'all') {
    switch (activeFilter) {
      case 'featured':
        filtered = getFeaturedProducts();
        break;
      case 'new':
        filtered = getNewProducts();
        break;
      case 'sale':
        filtered = getProductsOnSale();
        break;
      default:
        if (activeFilter !== 'all') {
          // This handles category filters from the filter options
          filtered = getProductsByCategory(activeFilter);
        }
    }
  }

  // Sort products
  const sorted = sortProducts(filtered, sortBy);

  // Apply limit if specified
  return limit ? sorted.slice(0, limit) : sorted;
}, [activeFilter, sortBy, categoryFilter, limit]);
  const handleFilterChange = (filterKey) => {
    setActiveFilter(filterKey);
    setShowFilterDropdown(false);
  };

  return (
    <section className="py-8 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            {title}
          </h3>
          <p className="text-gray-600">
            {filteredAndSortedProducts.length} products found
          </p>
        </div>

        {/* View Toggle & Sort (Desktop) */}
        {(showFilters || showSorting) && (
          <div className="flex items-center gap-4">
            {/* View Mode Toggle */}
            <div className="hidden sm:flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-white shadow-sm text-emerald-600' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-white shadow-sm text-emerald-600' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>

            {/* Sort Dropdown */}
            {showSorting && (
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                >
                  {sortOptions.map(option => (
                    <option key={option.key} value={option.key}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Filters */}
      {showFilters && !categoryFilter && (
        <div className="mb-8">
          {/* Mobile Filter Dropdown */}
          <div className="sm:hidden relative mb-4">
            <button
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
              className="flex items-center justify-between w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-left"
            >
              <span className="flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                {allFilterOptions.find(f => f.key === activeFilter)?.label || 'All Products'}
              </span>
              <ChevronDown className="h-4 w-4" />
            </button>
            
            {showFilterDropdown && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                {allFilterOptions.map(option => (
                  <button
                    key={option.key}
                    onClick={() => handleFilterChange(option.key)}
                    className={`w-full px-4 py-3 text-left hover:bg-gray-50 flex justify-between items-center ${
                      activeFilter === option.key ? 'bg-emerald-50 text-emerald-600' : ''
                    }`}
                  >
                    <span>{option.label}</span>
                    <span className="text-sm text-gray-500">({option.count})</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Filter Tabs */}
          <div className="hidden sm:flex flex-wrap gap-2">
            {allFilterOptions.map(option => (
              <button
                key={option.key}
                onClick={() => setActiveFilter(option.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === option.key
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {option.label} ({option.count})
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Products Grid/List */}
      {filteredAndSortedProducts.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Grid className="h-16 w-16 mx-auto" />
          </div>
          <h4 className="text-lg font-medium text-gray-900 mb-2">No products found</h4>
          <p className="text-gray-600">Try adjusting your filters or search criteria.</p>
        </div>
      ) : (
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            : 'grid-cols-1'
        }`}>
          {filteredAndSortedProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              viewMode={viewMode}
            />
          ))}
        </div>
      )}

      {/* Load More Button (if limit is applied and there are more products) */}
      {limit && filteredAndSortedProducts.length >= limit && (
        <div className="text-center mt-12">
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
            Load More Products
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductGrid;