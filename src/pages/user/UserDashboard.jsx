import React, { useEffect, useState } from 'react'
import UserMenu from '../../components/Layout/UserMenu'
import { useAuth } from '../../context/auth';

export default function UserDashboard() {
    //context
  const [auth, setAuth] = useAuth();
  //state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

    //get user data
    useEffect(() => {
        const { email, name, phone, address } = auth?.user;
        setName(name);
        setPhone(phone);
        setEmail(email);
        setAddress(address);
      }, [auth?.user]);

  const handleSubmit = () => {}
  return (
    <div className='flex flex-row'>
        <div className='w-[25%]'>
           <UserMenu />
        </div>
        <div className='w-[75%]'>
            <div>
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
  <h4 className="text-3xl font-semibold text-center text-gray-800 mb-8">USER PROFILE</h4>

  {/* Name Input */}
  <div className="mb-5">
    <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Name</label>
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      id="name"
      placeholder="Enter Your Name"
      autoFocus
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  </div>

  {/* Email Input */}
  <div className="mb-5">
    <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      id="email"
      placeholder="Enter Your Email"
      disabled
      className="w-full px-4 py-2 border border-gray-300 bg-gray-200 rounded-md cursor-not-allowed"
    />
  </div>

  {/* Password Input */}
  <div className="mb-5">
    <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">Password</label>
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      id="password"
      placeholder="Enter Your Password"
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  </div>

  {/* Phone Input */}
  <div className="mb-5">
    <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">Phone</label>
    <input
      type="text"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      id="phone"
      placeholder="Enter Your Phone"
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  </div>

  {/* Address Input */}
  <div className="mb-5">
    <label htmlFor="address" className="block text-gray-700 text-sm font-medium mb-2">Address</label>
    <input
      type="text"
      value={address}
      onChange={(e) => setAddress(e.target.value)}
      id="address"
      placeholder="Enter Your Address"
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  </div>

  {/* Submit Button */}
  <div className="mt-6 text-center">
    <button
      type="submit"
      className="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      UPDATE
    </button>
  </div>
</form>

            </div>
        </div>
    </div>
  )
}
