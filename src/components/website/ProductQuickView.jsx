import React, { useEffect, useState, useMemo } from 'react';
import {
  ArrowLeft, Star, Heart, ShoppingCart, ChevronUp, ChevronDown,
  Shield, Truck, CreditCard, Check, X, ChevronRight
} from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';
import { useNavigate } from 'react-router-dom';


const ProductQuickView = ({ product, onClose, recommendedProducts }) => {
  // State and hooks
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [expandedReviews, setExpandedReviews] = useState(false);

  const { addToCart, clearCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const navigate = useNavigate();

  useEffect(() => {
    if (product?.images?.length > 0) {
      setSelectedImage(product.images[0]);
    }
  }, [product]);

  const handleBuyNow = () => {
    if (!product.inStock) return;

    // Clear cart and add only this product
    clearCart();
    addToCart({ ...product, quantity });

    // Navigate directly to checkout
    navigate('/checkout');
  };

  // Helper functions
  const formatPrice = (price) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    // Add toast notification here
  };

  const renderRatingStars = (rating) =>
    [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));

  const filteredRecommendedProducts = useMemo(() => {
    if (!recommendedProducts || !product) return [];

    return recommendedProducts.filter(
      (recProduct) => recProduct.category === product.category && recProduct.id !== product.id
    );
  }, [recommendedProducts, product]);


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50 min-h-screen">
      {/* Header with Back Button */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={onClose}
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          <span className="font-medium">Back to products</span>
        </button>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">Product ID: {product.sku}</span>
        </div>
      </div>

      {/* Main Product Container */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
        {/* Image and Basic Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-contain p-4"
              />

              {/* Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-2">
                {product.isNew && (
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-1"></span> NEW
                  </span>
                )}
                {product.discount > 0 && (
                  <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {product.discount}% OFF
                  </span>
                )}
                {!product.inStock && (
                  <span className="bg-gray-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    OUT OF STOCK
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`aspect-square border-2 rounded-md overflow-hidden transition-all ${selectedImage === img
                    ? 'border-blue-500 scale-105'
                    : 'border-gray-200 hover:border-gray-300'
                    }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="py-2">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{product.name}</h1>
                <p className="text-gray-500 text-sm mt-1">by {product.brand}</p>
              </div>

              <button
                onClick={() => isInWishlist(product.id)
                  ? removeFromWishlist(product.id)
                  : addToWishlist(product)}
                className={`p-2 rounded-full ${isInWishlist(product.id)
                  ? 'text-red-500 bg-red-50'
                  : 'text-gray-400 hover:bg-gray-100'}`}
                aria-label={isInWishlist(product.id) ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart className="h-6 w-6" fill={isInWishlist(product.id) ? "currentColor" : "none"} />
              </button>
            </div>

            {/* Rating and Certification */}
            <div className="flex items-center mt-4 space-x-4">
              <div className="flex items-center bg-blue-50 px-2 py-1 rounded">
                <span className="text-blue-800 font-bold mr-1">{product.rating}</span>
                {renderRatingStars(Math.floor(product.rating))}
                <span className="text-gray-600 text-sm ml-2">
                  ({product.reviews.toLocaleString()} Ratings)
                </span>
              </div>
              <div className="flex items-center text-green-600 text-sm">
                <Shield className="h-4 w-4 mr-1" />
                <span>Verified</span>
              </div>
            </div>

            {/* Price Section */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-end">
                <span className="text-3xl font-bold text-gray-900">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="ml-3 text-lg text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                    <span className="ml-3 text-green-600 font-medium">
                      {product.discount}% off
                    </span>
                  </>
                )}
              </div>
              <div className="mt-2 text-sm text-gray-600">
                <span className="font-medium">Special Price</span> - Get extra 5% off (price inclusive of discount)
              </div>
              <div className="mt-3 flex items-center text-sm text-green-600">
                <Truck className="h-4 w-4 mr-1" />
                <span>Free delivery</span>
              </div>
            </div>

            {/* Offers Section */}
            <div className="mt-6 border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Available offers</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Bank Offer 5% Cashback on Axis Bank Card</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Special Price Get extra 5% off</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Partner Offer Sign up for Pay Later and get Gift Card worth ₹100</span>
                </li>
              </ul>
            </div>

            {/* Quantity Selector */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Quantity:</label>
              <div className="flex items-center w-32">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="p-2 border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100"
                  disabled={quantity <= 1}
                >
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="px-4 py-2 border-t border-b border-gray-300 bg-white text-center w-full">
                  {quantity}
                </div>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="p-2 border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100"
                >
                  <ChevronUp className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`flex-1 py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${product.inStock
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
              >
                <ShoppingCart className="h-5 w-5" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
              <button
                onClick={handleBuyNow}
                disabled={!product.inStock}
                className={`flex-1 py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${product.inStock
                    ? 'bg-orange-600 hover:bg-orange-700 text-white shadow-md hover:shadow-lg'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
              >
                <CreditCard className="h-5 w-5" />
                {product.inStock ? 'Buy Now' : 'Out of Stock'}
              </button>
            </div>

            {/* Delivery Options */}
            <div className="mt-6 border-t border-gray-200 pt-4">
              <div className="flex items-start">
                <Truck className="h-5 w-5 text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Delivery Options</p>
                  <div className="mt-1 text-sm text-gray-600">
                    <p>Enter your delivery location to check availability</p>
                    <button className="text-blue-600 hover:text-blue-800 mt-1 flex items-center">
                      <span>Select delivery location</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="border-t border-gray-200">
          <nav className="flex -mb-px">
            {['description', 'specifications', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${activeTab === tab
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'description' && (
            <div>
              <h3 className="text-lg font-medium text-gray-900">Product Description</h3>
              <p className="mt-2 text-gray-600">{product.description}</p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900">Key Features</h4>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    {product.features?.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">In the Box</h4>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    {product.inTheBox?.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'specifications' && (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="bg-white divide-y divide-gray-200">
                  {product.specifications?.map((spec, i) => (
                    <tr key={i}>
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 w-1/3">
                        {spec.name}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">
                  Customer Reviews ({product.reviewsCount?.toLocaleString()})
                </h3>
                <button className="text-sm text-blue-600 hover:text-blue-800">
                  Write a review
                </button>
              </div>

              {/* Rating Summary */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-4xl font-bold text-gray-900 text-center">
                    {product.rating.toFixed(1)}
                  </div>
                  <div className="flex justify-center mt-2">
                    {renderRatingStars(Math.floor(product.rating))}
                  </div>
                  <div className="text-center text-sm text-gray-600 mt-1">
                    {product.reviewsCount?.toLocaleString()} ratings
                  </div>
                </div>

                <div className="col-span-2">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <div key={star} className="flex items-center mb-2">
                      <span className="text-sm font-medium w-8">{star} star</span>
                      <div className="flex-1 mx-2 h-2.5 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-yellow-400"
                          style={{ width: `${(product.ratingDistribution?.[star] || 0) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 w-12 text-right">
                        {Math.round((product.ratingDistribution?.[star] || 0) * 100)}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews List */}
              <div className="mt-8 space-y-6">
                {product.reviews?.slice(0, expandedReviews ? undefined : 3).map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-6">
                    <div className="flex items-center">
                      <div className="flex items-center mr-4">
                        {renderRatingStars(review.rating)}
                      </div>
                      <span className="text-sm font-medium text-gray-900">
                        {review.user}
                      </span>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-sm text-gray-500">
                        {new Date(review.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h4 className="mt-2 font-medium text-gray-900">{review.title}</h4>
                    <p className="mt-1 text-gray-600">{review.content}</p>
                    {review.images?.length > 0 && (
                      <div className="mt-3 flex gap-2">
                        {review.images.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt=""
                            className="h-16 w-16 object-cover rounded border border-gray-200"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {product.reviews?.length > 3 && (
                <button
                  onClick={() => setExpandedReviews(!expandedReviews)}
                  className="mt-6 text-blue-600 hover:text-blue-800 flex items-center"
                >
                  {expandedReviews ? 'Show less reviews' : 'Show all reviews'}
                  <ChevronRight className={`h-4 w-4 ml-1 transition-transform ${expandedReviews ? 'rotate-90' : ''
                    }`} />
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Recommended Products
      <h3>Recommended Products</h3>
      <div className="recommended-products">
        {filteredRecommendedProducts.length === 0 ? (
          <p>No recommendations available.</p>
        ) : (
          filteredRecommendedProducts.map((recProduct) => (
            <recommendedProducts key={recProduct.id} product={recProduct} />
          ))
        )}
      </div> */}
      {/* Warranty and Support */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Warranty & Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <Shield className="h-6 w-6 text-blue-500 mr-2" />
              <h3 className="font-medium text-gray-900">Warranty</h3>
            </div>
            <p className="text-gray-600 text-sm">
              {product.warranty || '1 year manufacturer warranty for device and 6 months for accessories'}
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <Truck className="h-6 w-6 text-blue-500 mr-2" />
              <h3 className="font-medium text-gray-900">Easy Returns</h3>
            </div>
            <p className="text-gray-600 text-sm">
              7 days easy return policy. 1 year service warranty. Free pick and drop available.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <CreditCard className="h-6 w-6 text-blue-500 mr-2" />
              <h3 className="font-medium text-gray-900">Support</h3>
            </div>
            <p className="text-gray-600 text-sm">
              24/7 customer support. Call us at 1800-123-4567 or email support@example.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductQuickView;