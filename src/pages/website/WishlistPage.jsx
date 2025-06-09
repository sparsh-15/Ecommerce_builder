import ProductCard from '../../components/website/ProductCard';
import { useWishlist } from '../../contexts/WishlistContext';


const WishlistPage = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>
      
      {wishlist.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl font-medium text-gray-600 mb-4">Your wishlist is empty</h2>
          <p className="text-gray-500">Add items to your wishlist to see them here</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;