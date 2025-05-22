import React, { useEffect, useState } from 'react';
import AdminMenu from '../../components/Layout/AdminMenu';
import axios from 'axios';

export default function Users() {
  const [users, setUsers] = useState([]);

  const gettingAllUsers = async () => {
    try {
      const response = await axios.get('https://backend-psi-woad.vercel.app/all-users');
      setUsers(response.data.AllUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    gettingAllUsers();
  }, []);

  return (
    <div className="flex flex-row">
      {/* Sidebar */}
      <div className="w-[25%]">
        <AdminMenu />
      </div>

      {/* Users Table */}
      <div className="w-[75%] p-4">
        <h1 className="text-3xl font-bold mb-4">All Users</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 shadow-md rounded-lg">
            {/* Table Head */}
            <thead className="bg-gray-200">
              <tr className="text-left text-gray-600">
                <th className="py-2 px-4 border-b">#</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Phone</th>
                <th className="py-2 px-4 border-b">Address</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id} className="border-b hover:bg-gray-100 transition">
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">{user.name}</td>
                  <td className="py-2 px-4">{user.email}</td>
                  <td className="py-2 px-4">{user.phone}</td>
                  <td className="py-2 px-4">{user.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
