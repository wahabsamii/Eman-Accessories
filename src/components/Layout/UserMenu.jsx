import React from "react";
import { NavLink } from "react-router-dom";
const UserMenu = () => {
  return (
    <div>
      <div className="text-center bg-gray-400 h-[90vh]">
        <div className="flex flex-col p-4">
          <h4 className="text-3xl font-bold mb-3">Dashboard</h4>
          <NavLink
            to="/dashboard/user/profile"
            className="bg-white p-2 rounded-sm"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="bg-white p-2 rounded-sm mt-3"
          >
            Orders
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
