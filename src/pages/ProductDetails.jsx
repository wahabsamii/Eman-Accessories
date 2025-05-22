import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../context/auth';
import { useCart } from '../context/cart';
import toast, { Toaster } from 'react-hot-toast';
function ProductDetails() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
      const [auth, setAuth] = useAuth();
      const [cart, setCart] = useCart();
      const [categories, setCategories] = useState([]);
      const [products, setProducts] = useState([]);
      const navigate = useNavigate();
      const AllProducts = async() => {
        try {
          const allProducts = await axios.get("https://backend-psi-woad.vercel.app/get-allproducts?limit=4");
          if(allProducts.data.success){
               setProducts(allProducts.data.products)
          }
        } catch (error) {
          console.log(error.message)
        }
      };
      useEffect(() => {
        AllProducts()
      })
  const getProduct = async () => {
    try {
      const res = await axios.get(`https://backend-psi-woad.vercel.app/api/v1/product/get-product/${slug}`);
      setProduct(res.data.product);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (!product) {
    return <div className="text-center p-10">Loading...</div>;
  }

  return (
    <>
    <div className="flex flex-col lg:flex-row gap-10 p-6 max-w-6xl mx-auto">
      {/* Left Column - Images */}
      <div className="flex flex-col items-center lg:items-start">
        <img src={product.photo} alt={product.name} className="w-full max-w-sm rounded-xl" />
        {/* Thumbnail Gallery Placeholder */}
        <div className="flex gap-2 mt-4">
          {/* Thumbnails would be rendered here */}
        </div>
      </div>

      {/* Right Column - Details */}
      <div className="flex-1">
        <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>
        <div className="text-yellow-500 mb-2">⭐⭐⭐⭐⭐ (2 reviews)</div>
        <p className="text-red-600 mb-2 font-medium">$240.00</p>
        <p className="text-gray-600 mb-4">{product.description}</p>

        {/* Size Options */}
        <div className="mb-4">
          <p className="font-semibold">Size:</p>
          <div className="flex gap-2 mt-1">
            {['S', 'M', 'L'].map(size => (
              <button key={size} className="border px-3 py-1 rounded hover:bg-black hover:text-white">{size}</button>
            ))}
          </div>
        </div>

        {/* Color Options */}
        <div className="mb-4">
          <p className="font-semibold">Color:</p>
          <div className="flex gap-2 mt-1">
            <div className="w-6 h-6 bg-black rounded-full border"></div>
            <div className="w-6 h-6 bg-teal-400 rounded-full border"></div>
            <div className="w-6 h-6 bg-pink-300 rounded-full border"></div>
          </div>
        </div>

        {/* Quantity & Preorder */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex border rounded">
            <button className="px-3 py-1">-</button>
            <input type="text" value="1" className="w-10 text-center border-l border-r" readOnly />
            <button className="px-3 py-1">+</button>
          </div>
          <button className="bg-black text-white px-6 py-2 rounded">PRE-ORDER</button>
        </div>

        {/* Agreement & Buy */}
        <div className="mb-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            <span>I agree with <a href="#" className="underline">Terms & Conditions</a></span>
          </label>
        </div>

        <button className="w-full bg-gray-800 text-white py-2 rounded">ADD TO CART</button>

        {/* Delivery & Return */}
        <div className="text-sm text-gray-600 mt-4">
          <p>Pickup available at <span className="font-semibold">Shop location.</span></p>
          <p>Estimate delivery time: <span className="font-semibold">12-26 days (International), 3-6 days (US)</span></p>
          <p>Return within <span className="font-semibold">45 days</span> of purchase.</p>
        </div>

        {/* SKU & Tags */}
        <div className="text-xs text-gray-500 mt-4">
          <p>SKU: FS_17</p>
          <p>Available: Pre-Order</p>
          <p>Vendor: Rokan-Theme</p>
        </div>
      </div>
    </div>
          
      <section>
         {/* products  */}
    <div className='mt-14 flex flex-col align-middle justify-center'>
        <h1 className='text-center text-2xl font-semibold'>Other Products</h1>
        <p className='text-center'>Here’s some of our most similar products people are buying. Click to discover trending style.</p>
    </div>
    <Toaster/>
    <div className="grid grid-cols-4 gap-2 p-4 mb-16">
  {products.map((item) => (
    <div key={item._id} onClick={() => navigate(`product/${item.slug}`)} className=" cursor-pointer max-w-xs mb-4 mx-2 bg-white shadow-lg rounded-lg overflow-hidden">
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
      
      <div className='px-4 py-2 mb-4'>
      <p className="text-xs font-medium text-white bg-gray-800 inline-block px-2 py-1 rounded-full mb-2">
        {item.category.name}
      </p>
      <h1 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h1>
      <p className="text-sm text-gray-500 mb-4">{item.description.slice(0, 50)}...</p>
      
      <p className="text-xl font-semibold mb-2">
        ${item.price}
      </p>
      
      </div>
    </div>
  ))}
</div>
      </section>
    </>
  );
}

export default ProductDetails;
