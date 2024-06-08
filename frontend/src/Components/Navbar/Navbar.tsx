import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "./logo.svg";
import MenuIcon from "./MenuIcon.svg";
import CloseIcon from "./CloseIcon.svg";
import logo3 from "./logo3.svg";
import scrollImg from "./scrollImg.svg";
import scrollImg1 from "./scrollImg2.svg";

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
            <li><a href="/about">About</a></li>
            <li><a href="/personaltrainers">Personal Trainers</a></li>
            <li><a href="/">Home</a></li>
          </ul>
        </div>
        <div className="logo">
          <a href="/">
            <img src={scrolled ? scrollImg : logo} alt="Gorilla" />
          </a>
          <a className="title" href="/">
            Silverback <span>Strength</span>
          </a>
          <a href="/">
            <img src={scrolled ? scrollImg1 : logo3} alt="Gorilla" />
          </a>
        </div>
        <div className="navigation">
          <ul>
            <li><a href="/Contacts">Contact</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/membership">Memberships</a></li>
          </ul>
        </div>
        <div className="MobileMenu">
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <img src={sidebarVisible ? CloseIcon : MenuIcon} height={50} alt={sidebarVisible ? "Close sidebar" : "Toggle sidebar"} />
          </button>
          <h1 className="title"><a href="/">Silverback <span>Strength</span> </a></h1>
        </div>
      </div>

      <div className={`sidebar ${sidebarVisible ? "visible" : ""}`}>
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
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/personaltrainers">Personal Trainers</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/membership">Memberships</a></li>
          <li><a href="/contact">Contact us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
