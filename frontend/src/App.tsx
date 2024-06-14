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

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/FAQS" element={<FAQS />} />
        <Route path="/personaltrainers" element={<PersonalTrainers />} />
        <Route path="/trainer/:id" element={<TrainerDetails />} />
        <Route path="/membership" element={<Membership />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
