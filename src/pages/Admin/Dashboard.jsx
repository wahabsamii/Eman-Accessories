import React, { useEffect, useState } from 'react'
import AdminMenu from '../../components/Layout/AdminMenu'
import { useAuth } from '../../context/auth'
import { FaUsers, FaBox, FaClipboardList } from 'react-icons/fa'; // Import icons
import axios from 'axios';
export default function Dashboard() {
    const [auth] = useAuth();
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);
     const getRandomColor = () => {
      const colors = ['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-pink-500', 'bg-purple-500'];
      return colors[Math.floor(Math.random() * colors.length)];
    };
    const boxes = [
      {
        title: 'All Users',
        count: users + 10,
        icon: <FaUsers className="text-white text-2xl" />,
      },
      {
        title: 'All Products',
        count: products + 4,
        icon: <FaBox className="text-white text-2xl" />,
      },
      {
        title: 'All Orders',
        count: 78,
        icon: <FaClipboardList className="text-white text-2xl" />,
      },
    ];
   const gettingAllUsers = async () => {
    try {
      const response = await axios.get('https://backend-psi-woad.vercel.app/all-users');
      setUsers(response.data.AllUsers.length);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const AllProducts = async() => {
      try {
        const allProducts = await axios.get("https://backend-psi-woad.vercel.app/get-allproducts");
        if(allProducts.data.success){
             setProducts(allProducts.data.products.length)
        }
      } catch (error) {
        console.log(error.message)
      }
    }
  useEffect(() => {
    AllProducts()
    gettingAllUsers();
  }, []);


  return (
    <div className='flex flex-row'>
        <div className='w-[25%]'>
            <AdminMenu/>
        </div>
        <div>
        <div className="card w-75 p-3">
          <h1 className='text-3xl font-bold pl-5 pt-5'>Dashboard</h1>
        <div className="flex gap-5 p-5">
      {boxes.map((box, index) => (
        <div
          key={index}
          className={`flex-1 p-5 w-[230px] rounded-lg text-white flex items-center gap-4 ${getRandomColor()}`}
        >
          <div className="bg-white bg-opacity-30 rounded-full w-12 h-12 flex items-center justify-center">
            {box.icon}
          </div>
          <div>
            <h3 className="m-0 text-lg">{box.title}</h3>
            <p className="m-0 text-2xl font-bold">{box.count}</p>
          </div>
        </div>
      ))}
    </div>
              {/* <h3 className='text-3xl'> Admin Name : {auth?.user?.name}</h3>
              <h3 className='text-3xl'> Admin Email : {auth?.user?.email}</h3>
              <h3 className='text-3xl'> Admin Contact : {auth?.user?.phone}</h3> */}
            </div>
        </div>
    </div>
  )
}
