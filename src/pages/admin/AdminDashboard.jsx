import React from "react";

const AdminDashboard = () => {
  return (
    <div className="flex flex-1 items-center justify-center bg-teal-50 p-6">
      <div className="relative w-full max-w-3xl">
        {/* Gambar Latar */}
        <img
          src="/public/img/Dashboard.png" 
          alt="Dashboard"
          className="w-full rounded-lg shadow-lg"
        />
        
        {/* Konten Teks dan Logo */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center">
          <h2 className="text-lg md:text-xl font-bold text-green-600">
            Selamat Datang
          </h2>
          <img
            src="/public/img/logo.png"
            alt="Logo Dinas"
            className="mx-auto w-24 h-24 my-4" 
          />
          <p className="text-sm md:text-lg font-medium text-green-600">
            Dinas Kearsipan <br /> Provinsi Sumatera Selatan
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
