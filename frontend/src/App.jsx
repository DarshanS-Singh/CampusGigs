// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <Home />
      </main>

      {/* Footer (optional placeholder for later) */}
      <footer className="text-center py-4 text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} RentEase. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
