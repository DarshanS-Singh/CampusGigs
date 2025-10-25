import React from "react";

function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-6">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Find or Offer Gigs on Campus
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mb-8">
        CampusGigs connects students to earn, collaborate, and grow by exchanging
        services within their college community — from design to tutoring and more.
      </p>
      <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-indigo-700 transition">
        Explore Opportunities
      </button>
    </section>
  );
}

export default Home;
