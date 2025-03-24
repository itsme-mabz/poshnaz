import React, { useState } from 'react';
import DashboardTemplate from './DashboardTemplate';
import { FaSearch, FaPlus, FaUpload, FaDownload } from 'react-icons/fa';

const customersData = [
  {
    id: 1,
    name: 'Muhammad Ahmed bin Zahid',
    emailSubscribed: false,
    location: 'Bahawalpur, Wicklow, Ireland',
    orders: 1,
    spent: '€0.00',
  },
  {
    id: 2,
    name: 'Ricardo Azevedo',
    emailSubscribed: false,
    location: 'Cork, Cork, Ireland',
    orders: 0,
    spent: '€0.00',
  },
];

function AdminCustomersView() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter customers by name
  const filteredCustomers = customersData.filter((customer) =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardTemplate>
      <div className="p-6">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-10">
          <h2 
            className="text-3xl text-darkest font-bold" 

          >
            Customers
          </h2>

        </div>

        {/* Search & Filters */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search customers"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-white"

            />
            <FaSearch 
              className="absolute top-2.5 right-3 text-gray-400" 
              size={16} 
            />
          </div>
        
        </div>

        {/* Customers Table */}
        <div
          className="shadow rounded-md border border-gray-200"

        >
          <table className="w-full rounded-md divide-y divide-gray-200">
            <thead className="bg-white">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Customer Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Email Subscription
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Orders
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Amount Spent
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="hover:bg-white transition-colors">
                  <td className="px-6 py-4 text-sm text-dark hover:underline cursor-pointer">
                    {customer.name}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className="px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-600">
                      {customer.emailSubscribed ? 'Subscribed' : 'Not subscribed'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {customer.location}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {customer.orders} {customer.orders === 1 ? 'order' : 'orders'}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {customer.spent}
                  </td>
                </tr>
              ))}

              {filteredCustomers.length === 0 && (
                <tr>
                  <td colSpan="5" className="px-6 py-4 text-center text-gray-500 text-sm">
                    No customers found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardTemplate>
  );
}

export default AdminCustomersView;
