import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";
import logo from "./logo.svg";
import MenuIcon from "./MenuIcon.svg";
import CloseIcon from "./CloseIcon.svg";
import logo3 from "./logo3.svg";
import scrollImg from "./scrollImg.svg";
import scrollImg1 from "./scrollImg2.svg";

const sidebarVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
  closed: {
    opacity: 0,
    x: "100%",
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: -20 },
};

const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
    document.body.classList.toggle("sidebar-open", !sidebarVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 820 && sidebarVisible) {
        setSidebarVisible(false);
        document.body.classList.remove("sidebar-open");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [sidebarVisible]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="navigation">
          <ul>
            <li><a href="/SilverBackStrength/about">About</a></li>
            <li><a href="/SilverBackStrength/personaltrainers">Personal Trainers</a></li>
            <li><a href="/SilverBackStrength/">Home</a></li>
          </ul>
        </div>
        <div className="logo">
          <a href="/">
            <img src={scrolled ? scrollImg : logo} alt="Gorilla" />
          </a>
          <a className="title" href="/SilverBackStrength/">
            Silverback <span>Strength</span>
          </a>
          <a href="/">
            <img src={scrolled ? scrollImg1 : logo3} alt="Gorilla" />
          </a>
        </div>
        <div className="navigation">
          <ul>
            <li><a href="/SilverBackStrength/services">Services</a></li>
            <li><a href="/SilverBackStrength/FAQS">FAQS</a></li>
            <li><a href="/SilverBackStrength/membership">Memberships</a></li>
          </ul>
        </div>
        <div className="MobileMenu">
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <img src={sidebarVisible ? CloseIcon : MenuIcon} height={50} alt={sidebarVisible ? "Close sidebar" : "Toggle sidebar"} />
          </button>
          <h1 className="title"><a href="/">Silverback <span>Strength</span></a></h1>
        </div>
      </div>

      <motion.div
        className={`sidebar ${sidebarVisible ? "visible" : ""}`}
        animate={sidebarVisible ? "open" : "closed"}
        variants={sidebarVariants}
      >
        <div className="sidebar-header">
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <img src={CloseIcon} alt="Close sidebar" />
          </button>
          <a href="/" className="sidebar-logo">
            <img src={scrolled ? scrollImg : logo} alt="Gorilla" />
            <h1 className="title">Silverback <span>Strength</span></h1>
          </a>
        </div>
        <ul>
          <motion.li variants={itemVariants}><a href="/">Home</a></motion.li>
          <motion.li variants={itemVariants}><a href="/about">About</a></motion.li>
          <motion.li variants={itemVariants}><a href="/personaltrainers">Personal Trainers</a></motion.li>
          <motion.li variants={itemVariants}><a href="/FAQS">FAQS</a></motion.li>
          <motion.li variants={itemVariants}><a href="/membership">Memberships</a></motion.li>
          <motion.li variants={itemVariants}><a href="/services">Services</a></motion.li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
