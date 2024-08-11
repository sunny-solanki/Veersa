import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-24">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold">Your Health, Our Priority</h1>
        <p className="mt-4 text-lg">Get access to top healthcare professionals from the comfort of your home.</p>
        <Link
          to="/appointments"
          className="mt-8 inline-block bg-white text-blue-600 font-semibold py-2 px-4 rounded"
        >
          Book an Appointment
        </Link>
      </div>
    </header>
  );
}

export default Header;