import React from "react";
import { NavLink } from "react-router-dom";
import { CgAddR } from "react-icons/cg";
import { CgChart } from "react-icons/cg";
import { CgPushRight } from "react-icons/cg";
import { CgSize } from "react-icons/cg";
import { CgTikcode } from "react-icons/cg";
import { AiFillCodeSandboxCircle } from "react-icons/ai";

const AdminMenu = () => {
  return (
    <>
      <div className="text-center bg-white border-r-2 border-r-zinc-400  h-[88vh] sticky">
        <div className="list-group flex flex-col pt-4">
          <h4 className="text-3xl font-bold mb-3">Admin Panel</h4>
          <NavLink to="/dashboard/admin"
               className={({isActive}) => isActive ? 'flex flex-row pl-10 items-center align-middle gap-3 bg-gradient-to-r from-white to-blue-500 py-5 border-r-8 border-r-blue-700' : 'flex flex-row gap-3 pl-10 border-r-8 border-r-white items-center text-black py-5'}
               >
            <CgChart className="text-[22px]"/> Dashboard
          </NavLink>
          <NavLink to="/dashboard/admin/create-category"
               className={({isActive}) => isActive ? 'flex flex-row pl-10 items-center align-middle gap-3 bg-gradient-to-r from-white to-blue-500 py-5 border-r-8 border-r-blue-700' : 'flex flex-row gap-3 pl-10 border-r-8 border-r-white items-center text-black py-5'}
               >
            <CgChart className="text-[22px]"/> Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className={({isActive}) => isActive ? 'flex flex-row pl-10 items-center align-middle gap-3 bg-gradient-to-r from-white to-blue-500 py-5 border-r-8 border-r-blue-700' : 'flex flex-row gap-3  border-r-8 pl-10 border-r-white items-center text-black py-5'}
          >
            <CgAddR className="text-[22px]"/>  Create Product
          </NavLink>
          <NavLink
            to="/dashboard/admin/products"
            className={({isActive}) => isActive ? 'flex flex-row pl-10 items-center align-middle gap-3 bg-gradient-to-r from-white to-blue-500 py-5  border-r-8 border-r-blue-700' : 'flex flex-row gap-3 border-r-8 pl-10 border-r-white items-center text-black py-5'}
            >
            <CgSize className="text-[22px]"/>  Products
          </NavLink>
          <NavLink
            to="/dashboard/admin/users"
            className={({isActive}) => isActive ? 'flex flex-row pl-10 items-center align-middle gap-3 bg-gradient-to-r from-white to-blue-500 py-5  border-r-8 border-r-blue-700' : 'flex flex-row gap-3 border-r-8 pl-10 border-r-white items-center text-black py-5'}
          >
            <CgTikcode className="text-[22px]" /> Users
          </NavLink>
          <NavLink
            to="/dashboard/admin/all-orders"
            className={({isActive}) => isActive ? 'flex flex-row pl-10 items-center align-middle gap-3 bg-gradient-to-r from-white to-blue-500 py-5 border-r-8 border-r-blue-700' : 'flex flex-row gap-3 border-r-8 border-r-white pl-10 items-center text-black py-5'}
          >
            <AiFillCodeSandboxCircle className="text-[22px]" /> All Orders
          </NavLink>
          <NavLink
            to="/dashboard/admin/userssd"
            className={({isActive}) => isActive ? 'flex flex-row pl-10 items-center align-middle gap-3 bg-gradient-to-r from-white to-blue-500 py-5 border-r-8 border-r-blue-700' : 'flex flex-row gap-3 border-r-8 border-r-white pl-10 items-center text-black py-5'}
          >
            <CgPushRight className="text-[22px]" /> Logout
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
