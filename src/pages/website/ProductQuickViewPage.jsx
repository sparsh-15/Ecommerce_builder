import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductQuickView from '../../components/website/ProductQuickView';
import { getProductById } from '../../data/Products';

const ProductQuickViewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = getProductById(id);
        
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product:', error);
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, navigate]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <ProductQuickView 
        product={product} 
        onClose={() => navigate(-1)} // Go back to previous page
      />
    </div>
  );
};

export default ProductQuickViewPage;