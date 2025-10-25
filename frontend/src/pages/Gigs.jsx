import React from "react";
import GigCard from "../components/GigCard";

function Gigs() {
  const gigs = [
    { title: "Poster Design for Club Event", category: "Graphic Design", price: 500, postedBy: "Ananya" },
    { title: "Python Tutoring (1 hour)", category: "Education", price: 300, postedBy: "Rahul" },
    { title: "Resume Review & Formatting", category: "Career", price: 250, postedBy: "Simran" },
    { title: "Photography for Fest", category: "Photography", price: 700, postedBy: "Karan" },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Explore Gigs
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {gigs.map((gig, index) => (
          <GigCard key={index} {...gig} />
        ))}
      </div>
    </section>
  );
}

export default Gigs;
