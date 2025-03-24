import React from 'react';
import DashboardTemplate from './DashboardTemplate';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// Dummy data for line chart (Total Sales Over Time)
const totalSalesData = {
  labels: ['Mar 10', 'Mar 11', 'Mar 12', 'Mar 13', 'Mar 14', 'Mar 15', 'Mar 16'],
  datasets: [
    {
      label: 'Sales (EUR)',
      data: [150, 200, 180, 250, 300, 220, 270],
      borderColor: '#1F3A93',
      backgroundColor: '#1F3A93',
      tension: 0.3,
    },
  ],
};

// Dummy data for bar chart (Average Order Value Over Time)
const avgOrderValueData = {
  labels: ['Mar 10', 'Mar 11', 'Mar 12', 'Mar 13', 'Mar 14', 'Mar 15', 'Mar 16'],
  datasets: [
    {
      label: 'Avg Order Value (EUR)',
      data: [20, 35, 28, 40, 32, 42, 38],
      backgroundColor: '#21C1D6',
    },
  ],
};

// Dummy data for pie chart (Total Sales by Product)
const salesByProductData = {
  labels: ['T-Shirts', 'Mugs', 'Hoodies', 'Caps'],
  datasets: [
    {
      label: 'Sales (EUR)',
      data: [500, 300, 700, 200],
      backgroundColor: ['#1F3A93', '#21C1D6', '#ad8b73', '#ceab93'],
    },
  ],
};

function AdminAnalytics() {
  return (
    <DashboardTemplate>
      <div className="p-6 space-y-6">

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">Analytics</h1>

          {/* Right-side Actions */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Date Range */}
            <div className="flex items-center space-x-2">
              <button className="border border-gray-200 px-3 py-1 rounded-md hover:bg-gray-100 text-sm">
                Today
              </button>
              <button className="border border-gray-200 px-3 py-1 rounded-md hover:bg-gray-100 text-sm">
                Yesterday
              </button>
            </div>
          </div>
        </div>

        {/* Top Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Gross sales */}
          <div className="border border-gray-200 rounded-md p-4 bg-white">
            <p className="text-sm text-gray-500">Gross sales</p>
            <h2 className="text-2xl font-bold">€1,570</h2>
          </div>
          {/* Returning customer rate */}
          <div className="border border-gray-200 rounded-md p-4 bg-white">
            <p className="text-sm text-gray-500">Returning customer rate</p>
            <h2 className="text-2xl font-bold">15%</h2>
          </div>
          {/* Orders fulfilled */}
          <div className="border border-gray-200 rounded-md p-4 bg-white">
            <p className="text-sm text-gray-500">Orders fulfilled</p>
            <h2 className="text-2xl font-bold">23</h2>
          </div>
          {/* Orders */}
          <div className="border border-gray-200 rounded-md p-4 bg-white">
            <p className="text-sm text-gray-500">Orders</p>
            <h2 className="text-2xl font-bold">25</h2>
          </div>
        </div>

        {/* Charts & Breakdowns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* Left Column */}
          <div className="space-y-4">
            {/* Total sales over time (Line Chart) */}
            <div className="border border-gray-200 rounded-md bg-white p-4">
              <h3 className="text-lg font-semibold mb-2">Total sales over time</h3>
              <div className="h-64">
                <Line 
                  data={totalSalesData} 
                  options={{ 
                    responsive: true, 
                    maintainAspectRatio: false 
                  }} 
                />
              </div>
            </div>

            {/* Average order value over time (Bar Chart) */}
            <div className="border border-gray-200 rounded-md bg-white p-4">
              <h3 className="text-lg font-semibold mb-2">Average order value over time</h3>
              <div className="h-64">
                <Bar 
                  data={avgOrderValueData} 
                  options={{ 
                    responsive: true, 
                    maintainAspectRatio: false 
                  }} 
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Total sales breakdown */}
            <div className="border border-gray-200 rounded-md bg-white p-4">
              <h3 className="text-lg font-semibold mb-2">Total sales breakdown</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Gross sales: €1,570</li>
                <li>Discounts: €200</li>
                <li>Returns: €100</li>
                <li>Net sales: €1,270</li>
                <li>Shipping charges: €50</li>
                <li>Return fees: €10</li>
                <li>Total: €1,330</li>
              </ul>
            </div>

            {/* Total sales by product (Pie Chart) */}
            <div className="border border-gray-200 rounded-md bg-white p-4">
              <h3 className="text-lg font-semibold mb-2">Total sales by product</h3>
              <div className="h-64">
                <Pie 
                  data={salesByProductData} 
                  options={{ 
                    responsive: true, 
                    maintainAspectRatio: false 
                  }} 
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </DashboardTemplate>
  );
}

export default AdminAnalytics;
