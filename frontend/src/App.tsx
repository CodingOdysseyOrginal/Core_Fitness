import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import PersonalTrainers from "./Pages/PersonalTrainers/PersonalTrainers";
import Membership from "./Pages/Memberships/Memberships";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import TrainerDetails from "./Pages/PersonalTrainerDetails/TrainerDetails";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import "./index.css";
import FAQS from "./Pages/FAQS/FAQS";
import Success from "./Pages/Payment/Success";
import Cancel from "./Pages/Payment/Cancel";

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/SilverBackStrength/" element={<HomePage />} />
        <Route path="/SilverBackStrength/about" element={<About />} />
        <Route path="/SilverBackStrength/services" element={<Services />} />
        <Route path="/SilverBackStrength/FAQS" element={<FAQS />} />
        <Route path="/SilverBackStrength/personaltrainers" element={<PersonalTrainers />} />
        <Route path="trainer/:id" element={<TrainerDetails />} />
        <Route path="/SilverBackStrength/membership" element={<Membership />} />
        <Route path="/SilverBackStrength/success" element={<Success />} />
        <Route path="/SilverBackStrength/cancel" element={<Cancel />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
