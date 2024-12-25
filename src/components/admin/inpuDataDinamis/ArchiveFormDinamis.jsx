import React, { useState } from "react";

const ArchiveFormDinamis = () => {
  const [storageType, setStorageType] = useState("Rak");

  const handleStorageTypeChange = (e) => {
    setStorageType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 p-6 rounded-lg shadow-md max-w-4xl mx-auto"
    >
      <div className="grid grid-cols-3 gap-4 mb-4">
        <label htmlFor="kode" className="font-medium self-center">
          Kode Klasifikasi
        </label>
        <input
          type="text"
          id="kode"
          className="col-span-2 border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <label htmlFor="uraian" className="font-medium self-center">
          Uraian Masalah
        </label>
        <input
          type="text"
          id="uraian"
          className="col-span-2 border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <label htmlFor="no-berkas" className="font-medium self-center">
          No Berkas
        </label>
        <div className="col-span-2 flex gap-4">
          <input
            type="text"
            id="no-berkas"
            className="border border-gray-300 p-2 rounded-md flex-grow focus:ring-2 focus:ring-blue-500"
          />
          <label htmlFor="kurung-waktu" className="font-medium self-center">
            Kurung Waktu
          </label>
          <input
            type="text"
            id="kurung-waktu"
            className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <label htmlFor="jenis-arsip" className="font-medium self-center">
          Jenis Arsip
        </label>
        <input
          type="text"
          id="jenis-arsip"
          className="col-span-2 border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <label htmlFor="no-definitif" className="font-medium self-center">
          No Definitif
        </label>
        <input
          type="text"
          id="no-definitif"
          className="col-span-2 border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <label htmlFor="tingkat-perkembangan" className="font-medium self-center">
          Tingkat Perkembangan
        </label>
        <input
          type="text"
          id="tingkat-perkembangan"
          className="col-span-2 border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <label className="font-medium self-center">Tipe Penyimpanan</label>
        <div className="col-span-2 flex items-center gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="tipe-penyimpanan"
              value="Rak"
              checked={storageType === "Rak"}
              onChange={handleStorageTypeChange}
              className="form-radio"
            />
            Rak
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="tipe-penyimpanan"
              value="Rool opack"
              checked={storageType === "Rool opack"}
              onChange={handleStorageTypeChange}
              className="form-radio"
            />
            Rool opack
          </label>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <label htmlFor="jangka-simpan" className="font-medium self-center">
          Jangka Simpan
        </label>
        <input
          type="text"
          id="jangka-simpan"
          className="col-span-2 border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <label
          htmlFor="klasifikasi-akses"
          className="font-medium self-center"
        >
          Klasifikasi Akses Keamanan
        </label>
        <input
          type="text"
          id="klasifikasi-akses"
          className="col-span-2 border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <label htmlFor="lokasi-simpan" className="font-medium self-center">
          Lokasi Simpan
        </label>
        <input
          type="text"
          id="lokasi-simpan"
          className="col-span-2 border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <label htmlFor="keterangan" className="font-medium self-center">
          Keterangan
        </label>
        <input
          type="text"
          id="keterangan"
          className="col-span-2 border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Simpan
        </button>
      </div>
    </form>
  );
};

export default ArchiveFormDinamis;
