import React from "react";

function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-indigo-600">CampusGigs</h1>

      <div className="space-x-6 text-gray-700 font-medium">
        <a href="#" className="hover:text-indigo-600 transition">Home</a>
        <a href="#" className="hover:text-indigo-600 transition">Explore Gigs</a>
        <a href="#" className="hover:text-indigo-600 transition">Post a Gig</a>
      </div>

      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
        Join Now
      </button>
    </nav>
  );
}

export default Navbar;
