import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Gigs from "./pages/Gigs";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Gigs />
    </div>
  );
}

export default App;
