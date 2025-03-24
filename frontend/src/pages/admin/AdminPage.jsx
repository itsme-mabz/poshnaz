import React from 'react';
import DashboardTemplate from './DashboardTemplate';

function AdminPage() {
  return (
    <DashboardTemplate>
      <div className="p-6 space-y-6">

        {/* Welcome Header */}
        <div className=" p-6 rounded-md shadow-md flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome back, Admin!</h1>
            <p className="text-gray-600">
              Here's your dashboard overview. Get insights on your store's performance at a glance.
            </p>
          </div>
          <div>
            <button className="mt-4 md:mt-0 bg-dark text-white px-5 py-2 rounded-md shadow hover:bg-dark transition-colors">
              View site
            </button>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border border-gray-200 border-px rounded-md p-4 bg-white shadow hover:shadow-lg transition-shadow">
            <p className="text-sm text-gray-500">Total Sales</p>
            <h2 className="text-2xl font-bold text-gray-800">€1,570</h2>
          </div>
          <div className="border border-gray-200 border-px rounded-md p-4 bg-white shadow hover:shadow-lg transition-shadow">
            <p className="text-sm text-gray-500">Orders Today</p>
            <h2 className="text-2xl font-bold text-gray-800">25</h2>
          </div>
          <div className="border border-gray-200 border-px rounded-md p-4 bg-white shadow hover:shadow-lg transition-shadow">
            <p className="text-sm text-gray-500">New Customers</p>
            <h2 className="text-2xl font-bold text-gray-800">8</h2>
          </div>
          <div className="border border-gray-200 border-px rounded-md p-4 bg-white shadow hover:shadow-lg transition-shadow">
            <p className="text-sm text-gray-500">Returning Customer Rate</p>
            <h2 className="text-2xl font-bold text-gray-800">15%</h2>
          </div>
        </div>

        {/* Detailed Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Latest Orders */}
          <div className="border border-gray-200 border-px rounded-md p-4 bg-white shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Latest Orders</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-700">Order #1001</span>
                <span className="text-green-600 font-medium">Completed</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-700">Order #1002</span>
                <span className="text-yellow-600 font-medium">Processing</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-700">Order #1003</span>
                <span className="text-red-600 font-medium">Cancelled</span>
              </li>
            </ul>
          </div>

          {/* Recent Activity */}
          <div className="border border-gray-200 border-px rounded-md p-4 bg-white shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>New order received: Order #1004 - €45.00</li>
              <li>Product updated: Premium Cotton Hoodie</li>
              <li>Customer signed up: Jane Doe</li>
              <li>Refund issued for Order #1002</li>
            </ul>
          </div>
        </div>

      </div>
    </DashboardTemplate>
  );
}

export default AdminPage;
