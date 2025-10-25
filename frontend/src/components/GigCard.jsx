import React from "react";

function GigCard({ title, category, price, postedBy }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-3">{category}</p>
      <p className="text-indigo-600 font-semibold mb-3">₹{price}</p>
      <p className="text-sm text-gray-400">Posted by {postedBy}</p>
    </div>
  );
}

export default GigCard;
