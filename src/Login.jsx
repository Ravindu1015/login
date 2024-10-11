import React from 'react'

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
    {/* Signup Card */}
    <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-96">
      <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>
      {/* Form */}
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Full Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your full name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>
        {/* Register Button */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transform hover:scale-105 transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  </div>
);
};

export default Login

