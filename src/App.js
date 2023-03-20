// Modules
import React from "react";
import { Route, Routes } from "react-router-dom";
// Components
import NavBar from "./Components/NavBar";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";

// Local imports
import "./styles/styles.scss";
import ErrorPage from "./Components/ErrorPage";
import JobListings from "./Components/JobListings";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobListings" element={<JobListings />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
