import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DashboardTemplate from './DashboardTemplate';

const ordersData = [
  {
    id: '1001',
    customer: 'Alice Smith',
    date: '2023-03-20',
    status: 'Completed',
    total: '$120.00',
  },
  {
    id: '1002',
    customer: 'Bob Johnson',
    date: '2023-03-21',
    status: 'Processing',
    total: '$85.50',
  },
  {
    id: '1003',
    customer: 'Charlie Brown',
    date: '2023-03-22',
    status: 'Cancelled',
    total: '$60.00',
  },
  // Add more orders as needed.
];

const AdminOrderOverview = () => {
  // State for filters
  const [statusFilter, setStatusFilter] = useState('All');
  const [searchId, setSearchId] = useState('');

  // Filtered list of orders
  const filteredOrders = ordersData.filter((order) => {
    const matchesStatus =
      statusFilter === 'All' || order.status === statusFilter;
    const matchesId = order.id.toLowerCase().includes(searchId.toLowerCase());

    return matchesStatus && matchesId;
  });

  // Navigate to order detail page
  const handleRowClick = (orderId) => {
    window.location.href = `/admin/orders/${orderId}`;
  };

  return (
    <DashboardTemplate>
      <div className="p-4">
        <div className='flex items-center justify-between  mb-10'>

        <h2 className="text-3xl font-bold text-darkest">Orders</h2>

{/* Filters Section */}
<div className="flex flex-col sm:flex-row sm:items-end sm:space-x-4">
  {/* Status Filter */}
  <div className="mb-4 sm:mb-0">

    <select
      value={statusFilter}
      onChange={(e) => setStatusFilter(e.target.value)}
      className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
    >
      <option value="All">All</option>
      <option value="Completed">Completed</option>
      <option value="Processing">Processing</option>
      <option value="Cancelled">Cancelled</option>
    </select>
  </div>

  {/* Order ID Filter */}
  <div>
    <input
      type="text"
      placeholder="Search by Order ID"
      value={searchId}

      onChange={(e) => setSearchId(e.target.value)}
      className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
    />
  </div>
</div>
        </div>

        {/* Orders Table */}
        <div className="overflow-x-auto bg-white shadow rounded border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <motion.tr
                  key={order.id}
                  onClick={() => handleRowClick(order.id)}
                  whileHover={{ backgroundColor: "#F2F4F8", transition: { duration: 0.2 } }}
                  className="cursor-pointer"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        order.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : order.status === 'Processing'
                          ? 'bg-yellow-100 text-yellow-800'
                          : order.status === 'Cancelled'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.total}
                  </td>
                </motion.tr>
              ))}

              {filteredOrders.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-4 text-center text-gray-500 text-sm"
                  >
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardTemplate>
  );
};

export default AdminOrderOverview;
