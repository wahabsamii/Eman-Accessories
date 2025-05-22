import React from "react";
// import Layout from "./../components/Layout/Layout";
import { useSearch } from "../../context/search";
import { useCart } from "../../context/cart";
import toast from "react-hot-toast";
const Search = () => {
  const [values, setValues] = useSearch();
  const [cart, setCart] = useCart()
  return (
    // <Layout title={"Search results"}>
      <div className="container p-10">
        <div className="text-center">
          <h1>Search Resuts</h1>
          {/* <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6> */}
          <div className="flex gap-4 flex-wrap mt-4">
            {values?.results.map((item) => (
              <div key={item._id} className="max-w-xs bg-white shadow-lg rounded-lg w-[350px] overflow-hidden">
              {/* Product Image */}
              <img
                src={item.photo}
                alt={item.name}
                className="w-full h-64 object-cover mb-4"
              />
              
              {/* Product Category */}
              
              
              <div className='px-4 py-2'>
              <p className="text-xs font-medium text-white bg-gray-800 inline-block px-2 py-1 rounded-full mb-2">
                {item.category.name}
              </p>
              <h1 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h1>
              
              
              <p className="text-sm text-gray-500 mb-4">{item.description.split(' ').slice(0, 10).join(' ')}...</p>
              
              
              <button
                className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
                onClick={() => {
                  setCart([...cart, item]);
                  localStorage.setItem("cart", JSON.stringify([...cart, item]));
                  toast.success("Item Added to cart");
                  console.log("item added");
                }}
              >
                Add to Cart
              </button>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    // </Layout>
  );
};

export default Search;
