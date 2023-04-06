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
import ContactPage from "./Components/ContactPage";
import SignUp from "./Components/SignUp";
import TermsAndConditions from "./Components/TermsAndConditions";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import AboutUs from "./Components/AboutUs";
import PricingPage from "./Components/PricingPage";
import BlogPage from "./Components/BlogPage";
import MustCompleteJobPortal from "./Components/homePage/MustCompleteJobPortal";
import JobDescription from "./Components/JobDescription";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobListings" element={<JobListings />} />
        <Route path="/jobDescription" element={<JobDescription />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route
          path="/termsAndConditions"
          element={<TermsAndConditions />}
        ></Route>
        <Route path="/privacyPolicy" element={<PrivacyPolicy />}></Route>
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <MustCompleteJobPortal />
      <Footer />
    </div>
  );
}

export default App;
