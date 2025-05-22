import React, { useEffect, useState } from 'react'
import AdminMenu from '../../components/Layout/AdminMenu'
import axios from 'axios';

export default function Products() {
    const [products, setProducts] = useState([]);

    const AllProducts = async() => {
        try {
          const allProducts = await axios.get("https://backend-psi-woad.vercel.app/get-allproducts");
          if(allProducts.data.success){
               setProducts(allProducts.data.products)
          }
        } catch (error) {
          console.log(error.message)
        }
      }

      const deleteProduct = async (pid) => {
        try {
          const response = await axios.delete(`https://backend-psi-woad.vercel.app/delete-product/${pid}`);
          console.log(response);
          
        } catch (error) {
          console.error('Error deleting product:', error);
        }
      }
      useEffect(() => {
        AllProducts();
      })
  return (
    <div className='flex flex-row'>
        <div className='w-[25%]'>
            <AdminMenu />
        </div>
        <div className='flex flex-row gap-3 pb-9 flex-wrap align-middle justify-center bg-zinc-200 w-[75%] pt-8'>
      {products.map((item) => (
          <div className='w-[250px] p-2 rounded-xl bg-blue-200'>
            <img src={item.photo} alt="" className='rounded-xl mb-3 w-[250px] h-[250px] object-cover'/>
            <p className='text-blue-200 bg-black inline px-1 py-1 rounded-sm text-[14px]'>{item.category.name}</p>
            <h1 className='text-[18px] font-semibold py-2'>{item.name}</h1>
            <p>{item.description.split(' ').slice(0, 20).join(' ')}...</p>
            <div className='pt-6'>
              <button className='bg-blue-500 text-white px-4 py-2 rounded-xl mr-3'>Edit</button>
              <button onClick={() => deleteProduct(item._id)} className=' text-white bg-red-500 px-4 py-2 rounded-xl'>Delete</button>
            </div>
          </div>
        ))
      }
    </div>
    </div>
  )
}
