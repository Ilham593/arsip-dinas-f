import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-teal-50 flex justify-between items-center px-6 shadow-sm">
      <h1 className="text-lg font-semibold text-gray-700">Selamat Datang</h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-700 font-medium">Admin</span>
        <img
          src="/public/img/logo.png"
          alt="Admin"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Navbar;
