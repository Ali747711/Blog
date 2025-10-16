import React from "react";

const NotFound = ({ message = "No posts found." }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-gray-100">
      <h1 className="text-6xl font-bold mb-4 animate-pulse">404</h1>
      <p className="text-xl mb-8 text-gray-400">{message}</p>
      <button
        onClick={() => window.location.reload()}
        className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 rounded-lg text-white font-medium shadow-md"
      >
        Refresh
      </button>
    </div>
  );
};

export default NotFound;
