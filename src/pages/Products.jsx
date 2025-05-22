import axios from 'axios';
import React, { useEffect, useState } from 'react'
import FilterMenu from '../components/Layout/FilterMenu';

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

      useEffect(() => {
        AllProducts();
      }, [])
  return (
    <div className=''>
          <FilterMenu products={products}/>
    </div>
  )
}
