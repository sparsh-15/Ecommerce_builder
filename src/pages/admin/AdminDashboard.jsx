import { useState } from 'react';
import { products } from '../../data/Products';
import { categories } from '../../data/Category';
import AdminLayout from '../../components/admin/AdminLayout';
import ProductCard from '../../components/admin/ProductCard';

const AdminDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('products');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowForm(false);
    // Add your form submission logic here
  };

  return (
    <AdminLayout onLogout={onLogout}>
      <div className="p-4">
        {/* Tab Navigation */}
        <div className="flex border-b mb-4">
          <button
            className={`px-4 py-2 ${activeTab === 'products' ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab('products')}
          >
            Products
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'categories' ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab('categories')}
          >
            Categories
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'orders' ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            Orders
          </button>
        </div>

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div>
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-bold">Products</h2>
              <button 
                onClick={() => setShowForm(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add Product
              </button>
            </div>

            {showForm ? (
              <form onSubmit={handleSubmit} className="mb-6 p-4 bg-gray-50 rounded">
                <h3 className="font-bold mb-3">Add New Product</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1">Name</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Price</label>
                    <input
                      name="price"
                      type="number"
                      value={formData.price}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      required
                    >
                      <option value="">Select category</option>
                      {categories.map(cat => (
                        <option key={cat.id} value={cat.slug}>{cat.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mt-4 space-x-2">
                  <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                    Save
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setShowForm(false)}
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : null}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onEdit={() => {
                    setFormData({
                      name: product.name,
                      price: product.price,
                      category: product.category,
                      description: product.description
                    });
                    setShowForm(true);
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Categories Tab */}
        {activeTab === 'categories' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {categories.map(category => (
                <div key={category.id} className="bg-white p-4 rounded shadow">
                  <div className={`p-3 rounded-full ${category.color} inline-block`}>
                    {/* Icon would go here */}
                  </div>
                  <h3 className="font-semibold mt-2">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.description}</p>
                  <div className="mt-3 flex space-x-2">
                    <button className="text-blue-500 text-sm">Edit</button>
                    <button className="text-red-500 text-sm">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
            <div className="bg-white rounded shadow overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left">Order ID</th>
                    <th className="px-4 py-2 text-left">Customer</th>
                    <th className="px-4 py-2 text-left">Amount</th>
                    <th className="px-4 py-2 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-2">#ORD-1001</td>
                    <td className="px-4 py-2">John Doe</td>
                    <td className="px-4 py-2">$149.99</td>
                    <td className="px-4 py-2">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                        Completed
                      </span>
                    </td>
                  </tr>
                  {/* More order rows would go here */}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;