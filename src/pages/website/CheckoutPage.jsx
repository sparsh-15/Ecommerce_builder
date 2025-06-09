import { useCart } from '../../contexts/CartContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'India',
    paymentMethod: 'credit-card',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
    saveInfo: false,
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setOrderSuccess(true);
      clearCart();
    } catch (error) {
      console.error('Checkout error:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  if (cart.length === 0 && !orderSuccess) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <p className="text-gray-600 mb-6">Add items to your cart before proceeding to checkout</p>
        <button 
          onClick={() => navigate('/')}
          className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  if (orderSuccess) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-sm">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold mb-2">Order Confirmed!</h1>
          <p className="text-gray-600 mb-6">Thank you for your purchase. Your order has been received.</p>
          <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
            <h2 className="font-medium mb-2">What's next?</h2>
            <ul className="text-sm text-gray-600 space-y-1">
              <li className="flex items-start">
                <span className="inline-block mr-2">•</span>
                You'll receive an order confirmation email shortly
              </li>
              <li className="flex items-start">
                <span className="inline-block mr-2">•</span>
                We'll notify you when your order ships
              </li>
            </ul>
          </div>
          <button 
            onClick={() => navigate('/')}
            className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <h1 className="text-2xl font-bold mb-6">Checkout</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-bold mb-4">Contact Information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-bold mb-4">Shipping Address</h2>
              <div className="mt-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Street Address*</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City*</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State*</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">ZIP Code*</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country*</label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="India">India</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                </select>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-bold mb-4">Payment Method</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    id="credit-card"
                    name="paymentMethod"
                    type="radio"
                    value="credit-card"
                    checked={formData.paymentMethod === 'credit-card'}
                    onChange={handleChange}
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500"
                  />
                  <label htmlFor="credit-card" className="ml-3 block text-sm font-medium text-gray-700">
                    Credit Card
                  </label>
                </div>
                {formData.paymentMethod === 'credit-card' && (
                  <div className="mt-4 space-y-4 pl-7">
                    <div>
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">Card Number*</label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        required
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mb-1">Expiry Date*</label>
                        <input
                          type="text"
                          id="cardExpiry"
                          name="cardExpiry"
                          value={formData.cardExpiry}
                          onChange={handleChange}
                          required
                          placeholder="MM/YY"
                          className="w-full px-4 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="cardCvv" className="block text-sm font-medium text-gray-700 mb-1">CVV*</label>
                        <input
                          type="text"
                          id="cardCvv"
                          name="cardCvv"
                          value={formData.cardCvv}
                          onChange={handleChange}
                          required
                          placeholder="123"
                          className="w-full px-4 py-2 border rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex items-center">
                  <input
                    id="upi"
                    name="paymentMethod"
                    type="radio"
                    value="upi"
                    checked={formData.paymentMethod === 'upi'}
                    onChange={handleChange}
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500"
                  />
                  <label htmlFor="upi" className="ml-3 block text-sm font-medium text-gray-700">
                    UPI
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="cod"
                    name="paymentMethod"
                    type="radio"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleChange}
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500"
                  />
                  <label htmlFor="cod" className="ml-3 block text-sm font-medium text-gray-700">
                    Cash on Delivery
                  </label>
                </div>
              </div>
              <div className="mt-6 flex items-center">
                <input
                  id="saveInfo"
                  name="saveInfo"
                  type="checkbox"
                  checked={formData.saveInfo}
                  onChange={handleChange}
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500"
                />
                <label htmlFor="saveInfo" className="ml-3 block text-sm text-gray-700">
                  Save this information for next time
                </label>
              </div>
            </div>
          </form>
        </div>

        <div className="lg:w-1/3">
          <div className="bg-gray-50 p-6 rounded-lg sticky top-4">
            <h2 className="text-lg font-bold mb-4">Order Summary</h2>
            <div className="space-y-4 mb-6">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white rounded-md overflow-hidden mr-3 border">
                      <img src={item.images?.[0]} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="text-sm font-medium">
                    {new Intl.NumberFormat('en-IN', {
                      style: 'currency',
                      currency: 'INR',
                    }).format(item.price * item.quantity)}
                  </p>
                </div>
              ))}
            </div>
            <div className="space-y-3 border-t pt-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>
                  {new Intl.NumberFormat('en-IN', {
                    style: 'currency',
                    currency: 'INR',
                  }).format(cartTotal)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="text-emerald-600">FREE</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2">
                <span>Total</span>
                <span>
                  {new Intl.NumberFormat('en-IN', {
                    style: 'currency',
                    currency: 'INR',
                  }).format(cartTotal)}
                </span>
              </div>
            </div>
            <button
              type="submit"
              form="checkout-form"
              disabled={isProcessing}
              className={`w-full mt-6 bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors ${isProcessing ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isProcessing ? 'Processing...' : 'Place Order'}
            </button>
            <p className="text-xs text-gray-500 mt-3">
              By placing your order, you agree to our <a href="#" className="text-emerald-600 hover:underline">Terms of Service</a> and <a href="#" className="text-emerald-600 hover:underline">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;