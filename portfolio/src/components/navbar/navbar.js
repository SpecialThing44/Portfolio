import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {


  return (
    <nav
      className="bg-gray-900 z-10 text-slate-300 p-4 fixed w-full border-b border-gray-500" 
    >
      <div className="container mx-auto flex justify-between items-center font-mono ">
        <Link to="/" className="text-2xl font-bold hover:text-slate-200">
          Spencer Perkins
        </Link>

        <div className="text-lg space-x-7">
          <Link to="/" className=" hover:text-slate-200">
            Home
          </Link>
          <Link to="/projects" className=" hover:text-slate-200">
            Projects
          </Link>
          <Link to="/contact" className=" hover:text-slate-200">
            Contact
          </Link>
          {/* Add more navigation links as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
