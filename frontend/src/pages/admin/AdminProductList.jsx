import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DashboardTemplate from './DashboardTemplate';
import { API_BASE_URL } from '../../config';

const rowHover = {
  hover: { backgroundColor: '#F9FAFB' },
};

function AdminProductList() {
  const [filter, setFilter] = useState('All');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/products/`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${localStorage.getItem('token')}`, // adjust token handling if needed
          },
        });
        if (!response.ok) {
          console.error('Failed to fetch products');
          setProducts([]);
        } else {
          const data = await response.json();
          setProducts(data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
      setLoading(false);
    };
    fetchProducts();
  }, []);

  // Filter logic based on is_published flag
  const filteredProducts = products.filter((product) => {
    if (filter === 'All') return true;
    if (filter === 'Active') return product.is_published;
    if (filter === 'Inactive') return product.is_published === false;
    return true;
  });

  const handleRowClick = (id) => {
    // Navigate to product detail page
    window.location.href = `/admin/products/${id}`;
  };

  const handleFilterClick = (status) => {
    setFilter(status);
  };

  return (
    <DashboardTemplate>
      <div className="p-4 space-y-4">
        {/* Top Section: Title & Action Buttons */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-darkest mb-4 md:mb-0">Products</h2>
          <a
            href="/admin/products/create"
            className="bg-dark cursor-pointer text-white rounded-lg font-medium px-4 py-2 hover:bg-dark"
          >
            Add Product
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center space-x-4 text-sm font-medium text-gray-600 p-3 px-4 border-b border-gray-200 bg-gray-100 rounded-md">
          {['All', 'Active', 'Inactive'].map((status) => (
            <div
              key={status}
              onClick={() => handleFilterClick(status)}
              className={`cursor-pointer rounded-md px-4 py-1 uppercase ${
                filter === status
                  ? 'text-white bg-dark'
                  : 'bg-gray-200 hover:text-black'
              }`}
            >
              {status}
            </div>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center text-gray-600 py-10">Loading products...</div>
        )}

        {/* No Products */}
        {!loading && products.length === 0 && (
          <div className="text-center text-gray-600 py-10">
            You haven't created any products yet.{' '}
            <a href="/admin/products/create" className="text-blue-600 hover:underline">
              Create a product
            </a>.
          </div>
        )}

        {/* Product Table */}
        {!loading && products.length > 0 && (
          <div className="overflow-x-auto bg-white shadow rounded border border-gray-200">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Inventory
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <motion.tr
                    key={product.id}
                    className="border-b border-gray-100 cursor-pointer"
                    variants={rowHover}
                    whileHover="hover"
                    onClick={() => handleRowClick(product.id)}
                  >
                    <td className="px-4 py-3 flex items-center space-x-3">
                      <img
                        src={
                          product.images && product.images.length > 0
                            ? `${product.images[0].image}`
                            : 'https://placehold.co/600x400/png'
                        }
                        alt={product.title}
                        className="h-10 w-10 object-cover rounded"
                      />
                      <span className="text-gray-800 font-medium">{product.title}</span>
                    </td>
                    <td className="px-4 py-3">
                      {product.is_published ? (
                        <span className="text-green-600 font-semibold">Active</span>
                      ) : (
                        <span className="text-gray-500 font-semibold">Inactive</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-gray-700">{product.inventory}</td>
                    <td className="px-4 py-3 text-gray-700">{product.category_name}</td>
                    <td className="px-4 py-3 text-gray-700">{product.price}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </DashboardTemplate>
  );
}

export default AdminProductList;
