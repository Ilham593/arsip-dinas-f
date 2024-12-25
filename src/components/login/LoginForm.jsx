import React from "react";

const LoginForm = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[">
      <form className="bg-white shadow-md rounded-lg p-6 w-full">
        <div className="mb-4">
          <input
            type="text"
            id="username"
            placeholder="Email or User Name"
            className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-all duration-200"
        >
          Sign In
        </button>
        <p className="text-sm text-center mt-4 text-gray-500">
          Masukan dengan akun yang sudah anda daftarkan sebelumnya
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
