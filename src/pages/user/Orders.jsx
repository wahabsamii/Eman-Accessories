import React, { useEffect, useState } from 'react';
import UserMenu from '../../components/Layout/UserMenu';
import { useAuth } from '../../context/auth';
import axios from 'axios';

export default function Orders() {
  const [allorders, setOrders] = useState([]);
  const [auth] = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(`https://backend-psi-woad.vercel.app/api/order/${auth?.user?._id}`);
        setOrders(res.data.orders || []);
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      } finally {
        setLoading(false);
      }
    };
    if (auth?.user?._id) fetchOrders();
  }, [auth]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-[25%] bg-white shadow-md">
        <UserMenu />
      </div>

      {/* Main content */}
      <div className="w-[75%] p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">All Orders</h2>

        {loading ? (
          <p className="text-gray-600">Loading orders...</p>
        ) : allorders.length === 0 ? (
          <p className="text-gray-600">No orders found.</p>
        ) : (
          allorders.map((order, index) => (
            <div
              key={order._id}
              className="mb-8 border rounded-lg p-6 bg-white shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-700">Order #{index + 1}</h3>
                <span className={`text-sm px-3 py-1 rounded-full font-medium text-white ${
                  order.status === 'Delivered'
                    ? 'bg-green-500'
                    : order.status === 'Processing'
                    ? 'bg-yellow-500'
                    : 'bg-red-500'
                }`}>
                  {order.status}
                </span>
              </div>

              <p className="text-sm text-gray-600 mb-2">
                <strong>Order Date:</strong> {new Date(order.createdAt).toLocaleString()}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Total Payment:</strong> ${order.payment}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Buyer:</strong> {order.buyer?.name} ({order.buyer?.email})
              </p>

              <div>
                <h4 className="text-md font-semibold mb-2 text-gray-700">Products:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {order.products.map((product, i) => (
                    <div key={product._id || i} className="border rounded p-4 bg-gray-50">
                      <p className="font-medium text-gray-800">{product.name}</p>
                      <p className="text-sm text-gray-600">Price: ${product.price}</p>
                      <p className="text-sm text-gray-500 mt-1">{product.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
