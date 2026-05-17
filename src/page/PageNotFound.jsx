import React from 'react'
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="flex flex-col items-center mt-18 min-h-screen p-6">
      <h1 className="text-9xl font-extrabold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-500 dark:text-gray-400 mb-6 text-center max-w-md">
        Oops! The page you're looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 element text rounded-md shadow-[0_3px_15px_rgb(0,0,0,0.1)] hover:opacity-80 transition-all"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default PageNotFound