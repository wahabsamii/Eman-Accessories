import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assessts/logo.jpg';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { Badge } from 'antd';
import { useAuth } from '../context/auth';
import { useCart } from '../context/cart';
import { FaUserAlt } from 'react-icons/fa';
import SearchInput from './Layout/SearchInput';
import { IoSunnyOutline } from "react-icons/io5";

export default function Header() {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isPagesDropdownVisible, setIsPagesDropdownVisible] = useState(false);
  const navigation = useNavigate();

  const handleLogout = () => {
    setAuth({ user: null, token: '' });
    localStorage.removeItem('auth');
    // navigation('/login');
  };

  return (
    <nav className="bg-black  left-0 right-0 z-[1000]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex sm:h-[90px] items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
            >
              <svg
                className="block size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          {/* Logo and Nav Links */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img className="h-8 w-auto" src={logo} alt="Your Company" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-blue-500 font-semibold'
                      : 'hover:text-blue-400 text-white'
                  }
                  style={{ padding: '0.5rem 0.75rem', borderRadius: '0.375rem', fontSize: '0.875rem', fontWeight: 500 }}
                >
                  Home
                </NavLink>

                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-blue-500'
                      : 'hover:text-blue-400 text-white'
                  }
                  style={{ padding: '0.5rem 0.75rem', borderRadius: '0.375rem', fontSize: '0.875rem', fontWeight: 500 }}
                >
                  Products
                </NavLink>

                {/* Pages dropdown */}
                <div
                  className="relative mt-[6px]"
                  onMouseEnter={() => setIsPagesDropdownVisible(true)}
                  onMouseLeave={() => setIsPagesDropdownVisible(false)}
                >
                  <NavLink
                    to="/pages"
                    className={({ isActive }) =>
                      isActive
                        ? 'text-blue-500'
                        : ' text-white hover:text-blue-400'
                    }
                    style={{ padding: '0.5rem 0.75rem', borderRadius: '0.375rem', fontSize: '0.875rem', fontWeight: 500 }}
                  >
                    Pages
                  </NavLink>
                  {isPagesDropdownVisible && (
                    <div className="absolute overflow-hidden left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                      <NavLink to="/about" className="block px-4 py-2 text-sm hover:bg-gray-100">About Us</NavLink>
                      <NavLink to="/faqs" className="block px-4 py-2 text-sm hover:bg-gray-100">FAQS</NavLink>
                      <NavLink to="/brands" className="block px-4 py-2 text-sm hover:bg-gray-100">Brands</NavLink>
                    </div>
                  )}
                </div>

                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-blue-500'
                      : 'text-white'
                  }
                  style={{ padding: '0.5rem 0.75rem', borderRadius: '0.375rem', fontSize: '0.875rem', fontWeight: 500 }}
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>

          {/* Search Input */}
          <SearchInput />

          {/* Cart, Theme, and Profile */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Cart */}
            <NavLink to="/cart">
              <Badge count={cart?.length} showZero>
                <MdOutlineShoppingBag className="text-2xl text-white" />
              </Badge>
            </NavLink>

            {/* Profile dropdown */}
            {auth?.user ? (
              <div
                className="relative ml-6"
                onMouseEnter={() => setIsMenuVisible(true)}
                onMouseLeave={() => setIsMenuVisible(false)}
              >
                  <FaUserAlt className="text-white text-2xl" />
                {/* <button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none">
                </button> */}

                {isMenuVisible && (
                  <div className="absolute right-0 z-10 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black/5">
                    <NavLink
                      to={`/dashboard/${auth?.user?.role === 1 ? 'admin' : 'user'}`}
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Your Profile
                    </NavLink>
                    <NavLink
                      to="#"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Settings
                    </NavLink>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <NavLink to="/login" className="bg-blue-500 ml-6 px-4 py-2 text-white rounded-sm">Login</NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
