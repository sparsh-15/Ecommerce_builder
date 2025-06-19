const ProductCard = ({ product, onEdit }) => {
  return (
    <div className="bg-white rounded shadow p-4">
      <img 
        src={product.images[0]} 
        alt={product.name}
        className="w-full h-40 object-cover rounded mb-3"
      />
      <h3 className="font-semibold">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
      <div className="mt-3 flex justify-between">
        <button 
          onClick={onEdit}
          className="text-blue-500 hover:text-blue-700 text-sm"
        >
          Edit
        </button>
        <span className={`text-xs px-2 py-1 rounded-full ${
          product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;