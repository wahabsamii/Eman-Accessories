import React, { useState, useEffect } from "react";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import DropIn from "braintree-web-drop-in-react";
import axios from "axios";
import toast from "react-hot-toast";
import Payments from '../components/Payments'
const Cart = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const navigate = useNavigate();
  
  //total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
      });
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    } catch (error) {
      console.log(error);
    }
  };
  //detele item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mx-auto px-4 py-6">
    <div className="text-center mb-6">
      <h1 className="text-3xl font-bold text-gray-800 bg-gray-100 py-2 px-4 rounded shadow-sm">
        {`Hello ${auth?.token && auth?.user?.name}`}
      </h1>
      <h4 className="text-xl text-gray-600 mt-2">
        {cart?.length
          ? `You have ${cart.length} item${cart.length > 1 ? "s" : ""} in your cart ${
              auth?.token ? "" : "— please log in to checkout"
            }`
          : "Your cart is empty."}
      </h4>
    </div>
  
    <div className="grid md:grid-cols-2 gap-6">
      <div className="md:col-span-2 lg:col-span-1">
        {cart?.map((p) => (
          <div className="flex items-center mb-4 bg-white shadow-md rounded-lg p-4" key={p._id}>
            <div className="w-1/4">
              <img
                src={p.photo}
                alt={p.name}
                className="object-cover w-24 h-24 rounded-md"
              />
            </div>
            <div className="ml-4 w-3/4">
              <p className="font-semibold text-lg">{p.name}</p>
              <p className="text-gray-500">{p.description.substring(0, 30)}...</p>
              <p className="text-gray-800 mt-2 font-medium">Price: ${p.price}</p>
              <button
                className="mt-2 bg-red-500 text-white rounded py-1 px-4 hover:bg-red-600 transition"
                onClick={() => removeCartItem(p._id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
  
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Cart Summary</h2>
        <p className="text-gray-600 text-center mb-6">Total | Checkout | Payment</p>
        <hr className="border-t-2 border-gray-200 mb-6" />
        <h4 className="text-xl font-bold text-gray-800 text-center mb-4">Total: {totalPrice()}</h4>
  
        {auth?.user?.address ? (
          <div className="text-center mb-4">
            <h4 className="text-lg font-semibold text-gray-800">Current Address</h4>
            <h5 className="text-gray-700">{auth?.user?.address}</h5>
            <button
              className="mt-3 bg-yellow-500 text-white rounded py-1 px-4 hover:bg-yellow-600 transition"
              onClick={() => navigate("/dashboard/user/profile")}
            >
              Update Address
            </button>
          </div>
        ) : (
          <div className="text-center mb-4">
            
          </div>
        )}
  
        <div className="mt-4">
        {auth?.token ? (
  <div>
    <Payments />
  </div>
) : (
  <button
    onClick={() => navigate("/login")}
    className="bg-blue-500 text-white rounded py-2 px-6 mt-4"
  >
    Login to Checkout
  </button>
)}

              
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Cart;
