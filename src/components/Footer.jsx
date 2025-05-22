import React from "react";
import { FaFacebookF, FaInstagram, FaPinterestP, FaTiktok, FaYoutube, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-sm pt-10">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Shop Section */}
        <div>
          <h3 className="font-bold mb-4">SHOP</h3>
          <ul className="space-y-2">
            <li>New In</li>
            <li>Women</li>
            <li>Men</li>
            <li>Shoes</li>
            <li>Bags & Accessories</li>
            <li>Top Brands</li>
            <li>Sale & Special Offers</li>
          </ul>
        </div>

        {/* Information Section */}
        <div>
          <h3 className="font-bold mb-4">INFORMATION</h3>
          <ul className="space-y-2">
            <li>About</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Customer Service Section */}
        <div>
          <h3 className="font-bold mb-4">CUSTOMER SERVICE</h3>
          <ul className="space-y-2">
            <li>Search Terms</li>
            <li>Advanced Search</li>
            <li>Orders And Returns</li>
            <li>Contact Us</li>
            <li>Theme FAQs</li>
            <li>Consultant</li>
            <li>Store Locations</li>
          </ul>
        </div>

        {/* Newsletter Sign Up */}
        <div>
          <h3 className="font-bold mb-4">NEWSLETTER SIGN UP</h3>
          <p className="mb-4">
            Sign up for exclusive updates, new arrivals & insider-only discounts
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 text-black border border-gray-400"
            />
            <button className="bg-white text-black px-4 font-bold">SUBMIT</button>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-3 mt-6">
            <FaFacebookF className="w-8 h-8 p-2 bg-white text-black rounded-full cursor-pointer hover:bg-gray-300" />
            <FaInstagram className="w-8 h-8 p-2 bg-white text-black rounded-full cursor-pointer hover:bg-gray-300" />
            <FaPinterestP className="w-8 h-8 p-2 bg-white text-black rounded-full cursor-pointer hover:bg-gray-300" />
            <FaTiktok className="w-8 h-8 p-2 bg-white text-black rounded-full cursor-pointer hover:bg-gray-300" />
            <FaYoutube className="w-8 h-8 p-2 bg-white text-black rounded-full cursor-pointer hover:bg-gray-300" />
            <FaXTwitter className="w-8 h-8 p-2 bg-white text-black rounded-full cursor-pointer hover:bg-gray-300" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 py-4 text-center text-gray-400">
        <p>© 2024, Ella Eccom. All Rights Reserved. Develop By Abdul Wahab</p>
      </div>
    </footer>
  );
};

export default Footer;
