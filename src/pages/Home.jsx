import React, { useEffect, useState } from 'react'
import './main.css'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../context/auth';
import { useCart } from '../context/cart';
import toast, { Toaster } from 'react-hot-toast';
import HomeSectionThird from '../components/HomeSectionThird';
import BrandLogoScroll from '../components/BrandLogoScroll';
import bgImg from '../assessts/banner-new-arrivals.webp'
import HomeSlider from '../components/HomeSlider';
import Marquee from '../components/Marquee';
export default function Home() {
      const [auth, setAuth] = useAuth();
      const [cart, setCart] = useCart();
      const [categories, setCategories] = useState([]);
      const [products, setProducts] = useState([]);
      const navigate = useNavigate();
      const AllCategories = async () => {
        try {
          const allcates = await axios.get('/all-categories');
          if(allcates.data.success){
            setCategories(allcates.data.allcategories)
          }
        } catch (error) {
          console.log(error.message)
        }
      }

      const AllProducts = async() => {
        try {
          const allProducts = await axios.get("/get-allproducts?limit=8");
          if(allProducts.data.success){
               setProducts(allProducts.data.products)
          }
        } catch (error) {
          console.log(error.message)
        }
      }
      useEffect(() => {
        AllCategories();
      })
      useEffect(() => {
        AllProducts()
      })
  return (
    <div className='overflow-hidden'>
        <HomeSlider />
          <h3 className='text-center text-2xl font-semibold mt-10'>Choose your Category</h3>
                    <p className='text-center'>Express your style with our standout collection—fashion meets sophistication.</p>
        <div className="flex justify-center gap-6 mt-4">
          
      {categories.map((category, index) => (
        <div key={index}  className="cursor-pointer relative w-72 h-48 overflow-hidden shadow-md">
          <img
            src={category.photo}
            alt={category.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <span className="text-white text-xl font-bold">{category.name}</span>
          </div>
        </div>
      ))}
    </div>

    {/* products  */}
    <div className='mt-14 flex flex-col align-middle justify-center'>
        <h1 className='text-center text-2xl font-semibold'>New Arrivals</h1>
        <button className='m-auto underline'>View All</button>
    </div>
    <Toaster/>
    <div className="grid grid-cols-4 gap-2 p-4 mb-16">
  {products.map((item) => (
    <div key={item._id}  className=" max-w-xs mb-4 mx-2 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className='w-full h-56 rounded-xl object-cover mb-4' style={{backgroundImage: `url(${item.photo})`, backgroundSize:'cover'}}>

        <div className='relative overflow-hidden pb-3  w-full h-full'>
          <div className=' flex relative translate-y-20 transition duration-200 ease-out items-end justify-center pb-3 hover:translate-y-1 w-full h-full'><button className='px-6 py-2 rounded-full bg-black text-white' onClick={() => {
          setCart([...cart, item]);
          localStorage.setItem("cart", JSON.stringify([...cart, item]));
          toast.success("Item Added to cart");
          console.log("item added");
        }}>Add to Card</button></div>
        </div>
      </div>
      
      <div className='px-4 py-2 mb-4 cursor-pointer' onClick={() => navigate(`product/${item.slug}`)}>
      <p className="text-xs font-medium text-white bg-gray-800 inline-block px-2 py-1 rounded-full mb-2">
        {item.category.name}
      </p>
      <h1 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h1>
      <p className="text-sm text-gray-500 mb-4">{item.description.slice(0, 50)}...</p>
      
      <p className="text-xl font-semibold mb-2">
        ${item.price}
      </p>
      
      {/* <button
        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
        onClick={() => {
          setCart([...cart, item]);
          localStorage.setItem("cart", JSON.stringify([...cart, item]));
          toast.success("Item Added to cart");
          console.log("item added");
        }}
      >
        Add to Cart
      </button> */}
      </div>
    </div>
  ))}
</div>
<Marquee />
  <HomeSectionThird />
  <img src={bgImg} alt="" />
  <BrandLogoScroll/>
</div>
  )
}
