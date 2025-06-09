import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductCard from '../../components/website/ProductCard';
import { getProductsByCategory } from '../../data/Products';

const CategoryPage = () => {
  const { categorySlug } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Convert slug back to category name
        const categoryName = categorySlug.replace(/-/g, ' ');
        const categoryProducts = getProductsByCategory(categoryName);
        console.log(categoryProducts);
        
        setProducts(categoryProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [categorySlug]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {categorySlug.replace(/-/g, ' ')}
      </h1>
      
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
  );
};

export default CategoryPage;