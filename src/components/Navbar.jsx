import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">My React App</h1>
      <ul className="flex gap-4">
        <li><a href="#" className="hover:text-gray-300">Home</a></li>
        <li><a href="#" className="hover:text-gray-300">Tasks</a></li>
        <li><a href="#" className="hover:text-gray-300">About</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;