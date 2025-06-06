// pages/CartPage.jsx
import { useCart } from '../contexts/CartContext';
import ProductCard from '../components/ProductCard';

const CartPage = () => {
  const { 
    cart, 
    updateQuantity, 
    removeFromCart, 
    cartTotal, 
    clearCart 
  } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart ({cart.length} items)</h1>
      
      {cart.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl font-medium text-gray-600 mb-4">Your cart is empty</h2>
          <p className="text-gray-500">Add items to your cart to see them here</p>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="grid gap-6">
              {cart.map((product) => (
                <div key={product.id} className="flex items-start border-b pb-6">
                  <div className="w-24 h-24 flex-shrink-0">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="font-medium text-gray-900">{product.name}</h3>
                    <p className="text-gray-600 mt-1">{product.brand}</p>
                    <p className="font-semibold mt-2">
                      {new Intl.NumberFormat('en-IN', {
                        style: 'currency',
                        currency: 'INR',
                      }).format(product.price)}
                    </p>
                    <div className="mt-4 flex items-center">
                      <button 
                        onClick={() => updateQuantity(product.id, product.quantity - 1)}
                        className="px-3 py-1 border rounded-l"
                      >
                        -
                      </button>
                      <span className="px-4 py-1 border-t border-b">
                        {product.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(product.id, product.quantity + 1)}
                        className="px-3 py-1 border rounded-r"
                      >
                        +
                      </button>
                      <button 
                        onClick={() => removeFromCart(product.id)}
                        className="ml-4 text-red-500 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-lg font-bold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>
                  {new Intl.NumberFormat('en-IN', {
                    style: 'currency',
                    currency: 'INR',
                  }).format(cartTotal)}
                </span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>FREE</span>
              </div>
              <div className="border-t my-4"></div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>
                  {new Intl.NumberFormat('en-IN', {
                    style: 'currency',
                    currency: 'INR',
                  }).format(cartTotal)}
                </span>
              </div>
              <button className="w-full mt-6 bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
                Checkout
              </button>
              <button 
                onClick={clearCart}
                className="w-full mt-2 text-red-500 py-2 rounded-lg font-medium hover:bg-red-50 transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;