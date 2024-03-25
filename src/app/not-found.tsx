// NotFound.js

import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-green-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
        404 - Not Found
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        className="mt-8 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
        href="/"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
