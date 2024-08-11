import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 mb-12">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">TeleHealth</div>

        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white">Home</Link>

          <div className="relative group">
            <button className="text-white focus:outline-none">
              Dashboard
            </button>
            <div className="absolute hidden group-hover:block bg-blue-500 rounded-md shadow-lg mt-2">
              <Link to="/doctor-dashboard" className="block px-4 py-2 text-white">Doctor Dashboard</Link>
              <Link to="/patient-dashboard" className="block px-4 py-2 text-white">Patient Dashboard</Link>
            </div>
          </div>

          <Link to="/signup" className="text-white">Signup / Login</Link>

          {/* <Link to="/profile" className="text-white">Profile</Link> */}
        </div>

        <div className="md:hidden">
          <button className="text-white">
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
