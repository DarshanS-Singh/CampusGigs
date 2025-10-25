import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-white px-8 py-4 shadow-md">
      <Link to="/" className="text-2xl font-bold text-indigo-600">CampusGigs</Link>
      <div className="flex gap-6">
        <Link to="/" className="text-gray-700 hover:text-indigo-600 transition">Home</Link>
        <Link to="/post-gig" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
          Post a Gig
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
