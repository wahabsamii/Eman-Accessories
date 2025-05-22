import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Spin, Alert } from 'antd';
import AdminMenu from '../../components/Layout/AdminMenu';

export default function AllOrders() {
  const [allOrders, setAllOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const statusHandler = async (event,orderId) =>{
    const response = await axios.post("https://backend-psi-woad.vercel.app/api/order/status",{
      orderId,
      status:event.target.value
    })
    if(response.data.success){
      await fetchAllOrders();
    }
  }



  const fetchAllOrders = async () => {
    try {
      const res = await axios.get('https://backend-psi-woad.vercel.app/api/order/all');
      setAllOrders(res.data.allorders);
    } catch (error) {
      setError('Failed to fetch orders. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className='flex min-h-screen bg-gray-100'>
      {/* Sidebar */}
      <div className='w-[25%] bg-white shadow-md'>
        <AdminMenu />
      </div>

      {/* Main Content */}
      <div className='w-[75%] p-8'>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">All Orders</h2>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Spin size="large" />
          </div>
        ) : error ? (
          <Alert message={error} type="error" showIcon />
        ) : (
          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-gray-200 text-gray-600 uppercase text-xs">
                <tr>
                  <th className="py-3 px-6">S.No</th>
                  <th className="py-3 px-6">Customer</th>
                  <th className="py-3 px-6">Status</th>
                  <th className="py-3 px-6">Date</th>
                  <th className="py-3 px-6">Total</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {allOrders?.map((order, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-4 px-6">{index + 1}</td>
                    <td className="py-4 px-6">{order.buyer.name}</td>
                    <select onChange={(event)=> statusHandler(event,order._id)} value={order.status}>
              <option value="Not Process">Not Process</option>
              <option value="Processing">Processing</option>
              <option value="deliverd">Delivered</option>
              <option value="cancel">Cancel</option>
            </select>
                    <td className="py-4 px-6">{new Date(order.date).toLocaleDateString()}</td>
                    <td className="py-4 px-6 font-semibold">${order.products.map((item) => (<span>{item.price}</span>))}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
