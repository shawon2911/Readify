import React from 'react';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6">
      <div className="max-w-lg w-full text-center bg-gray-800 rounded-2xl shadow-2xl p-10">
        
        <div className="text-red-500 text-5xl mb-4">
          ⚠️
        </div>

        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-xl font-semibold mb-2">Page Not Found</h2>

        <p className="text-gray-400 mb-6">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-xl bg-gray-700 hover:bg-gray-600 transition"
          >
            Go Back
          </button>

          <button
            onClick={() => (window.location.href = '/')}
            className="px-6 py-3 rounded-xl bg-red-500 hover:bg-red-600 transition font-semibold"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;