import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isDinamisOpen, setIsDinamisOpen] = useState(false);
  const [isStatisOpen, setIsStatisOpen] = useState(false);

  return (
    <div
      className="w-64 min-h-screen shadow-lg flex flex-col items-center py-6"
      style={{
        backgroundImage: "url('/img/bg-sidebar.png')", 
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Logo */}
      <div className="text-center mb-6">
        <img
          src="/img/logo.png" 
          alt="Logo Dinas"
          className="w-20 h-auto mx-auto"
        />
        <h2 className="text-xl font-semibold mt-2 text-white">Sistem Arsip</h2>
      </div>

      {/* Menu Items */}
      <ul className="w-full">
        {/* Dashboard */}
        <li className="mb-3">
          <Link
            to="/dashboard"
            className="block w-full text-left bg-teal-500 text-white py-3 px-5 rounded-lg hover:bg-teal-600 transition-all duration-200"
          >
            Dashboard
          </Link>
        </li>

        {/* Arsip Dinamis Dropdown */}
        <li className="mb-3">
          <button
            onClick={() => setIsDinamisOpen(!isDinamisOpen)}
            className="w-full text-left bg-gray-200 py-3 px-5 rounded-lg hover:bg-gray-300 flex justify-between items-center transition-all duration-200"
          >
            Arsip Dinamis{" "}
            <span
              className={`text-gray-600 transform ${
                isDinamisOpen ? "rotate-180" : ""
              } transition-transform duration-200`}
            >
              ▼
            </span>
          </button>
          {isDinamisOpen && (
            <ul className="ml-6 mt-2 space-y-2">
              <li>
                <Link
                  to="/dashboard/form-dinamis"
                  className="block w-full text-left bg-gray-100 py-2 px-4 rounded hover:bg-gray-200 shadow-md transition-all duration-200"
                >
                  Input Data
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/arsip-dinamis/manage"
                  className="block w-full text-left bg-gray-100 py-2 px-4 rounded hover:bg-gray-200 shadow-md transition-all duration-200"
                >
                  Kelola Data
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/arsip-dinamis/print"
                  className="block w-full text-left bg-gray-100 py-2 px-4 rounded hover:bg-gray-200 shadow-md transition-all duration-200"
                >
                  Cetak
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Arsip Statis Dropdown */}
        <li className="mb-3">
          <button
            onClick={() => setIsStatisOpen(!isStatisOpen)}
            className="w-full text-left bg-gray-200 py-3 px-5 rounded-lg hover:bg-gray-300 flex justify-between items-center transition-all duration-200"
          >
            Arsip Statis{" "}
            <span
              className={`text-gray-600 transform ${
                isStatisOpen ? "rotate-180" : ""
              } transition-transform duration-200`}
            >
              ▼
            </span>
          </button>
          {isStatisOpen && (
            <ul className="ml-6 mt-2 space-y-2">
              <li>
                <Link
                  to="/dashboard/arsip-statis/input"
                  className="block w-full text-left bg-gray-100 py-2 px-4 rounded hover:bg-gray-200 shadow-md transition-all duration-200"
                >
                  Input Data
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/arsip-statis/manage"
                  className="block w-full text-left bg-gray-100 py-2 px-4 rounded hover:bg-gray-200 shadow-md transition-all duration-200"
                >
                  Kelola Data
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/arsip-statis/print"
                  className="block w-full text-left bg-gray-100 py-2 px-4 rounded hover:bg-gray-200 shadow-md transition-all duration-200"
                >
                  Cetak
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Log Out */}
        <li className="mt-auto">
          <Link
            to="/login"
            className="block w-full text-left bg-red-500 text-white py-3 px-5 rounded-lg hover:bg-red-600 transition-all duration-200"
          >
            Log Out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
