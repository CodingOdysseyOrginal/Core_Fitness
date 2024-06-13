import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import PersonalTrainers from "./Pages/PersonalTrainers/PersonalTrainers";
import Membership from "./Pages/Memberships/Memberships";
import "./index.css";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import TrainerDetails from "./Pages/PersonalTrainerDetails/TrainerDetails";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/personaltrainers" element={<PersonalTrainers />} />
        <Route path="/trainer/:id" element={<TrainerDetails />} />
        <Route path="/membership" element={<Membership />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
