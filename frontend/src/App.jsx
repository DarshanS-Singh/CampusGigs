import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Gigs from "./pages/Gigs";
import PostGig from "./pages/PostGig";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Home /><Gigs /></>} />
        <Route path="/post-gig" element={<PostGig />} />
      </Routes>
    </Router>
  );
}

export default App;
