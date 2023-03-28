// Modules
import React from "react";
import { Route, Routes } from "react-router-dom";
import firebase from "./Components/firebase";

// Components
import NavBar from "./Components/NavBar";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";

// Local imports
import "./styles/styles.scss";
import ErrorPage from "./Components/ErrorPage";
import JobListings from "./Components/JobListings";
import ContactPage from "./Components/ContactPage";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Login />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobListings" element={<JobListings />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
