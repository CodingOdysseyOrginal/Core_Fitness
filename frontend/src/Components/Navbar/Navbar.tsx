import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "./logo.svg";
import MenuIcon from "./MenuIcon.svg";
import CloseIcon from "./CloseIcon.svg";

const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

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

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Gorilla" />
          </a>
          <a className="title" href="/">
            Silverback <span>Strength</span>
          </a>
        </div>

        <div className="navigation">
          <ul>
            <li>
              <a href="/about">About us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/personaltrainers">Personal Trainers</a>
            </li>
            <li>
              <a href="/membership">Memberships</a>
            </li>
          </ul>
          <div className="MobileMenu">
            <button className="sidebar-toggle" onClick={toggleSidebar}>
              <img src={MenuIcon} height={50} alt="Toggle sidebar" />
            </button>
            <h1 className="title">Silverback <span>Strength</span></h1>
          </div>
        </div>

        <div className={`sidebar ${sidebarVisible ? "visible" : ""}`}>
          <div className="sidebar-header">
            <button className="sidebar-toggle" onClick={toggleSidebar}>
              <img src={CloseIcon} alt="Close sidebar" />
            </button>
            <a href="/" className="sidebar-logo">
              <img src={logo} alt="Gorilla" />
              <h1 className="title">Silverback <span>Strength</span></h1>
            </a>
          </div>
          <ul>
            <li>
              <a href="/about">About us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/personaltrainers">Personal Trainers</a>
            </li>
            <li>
              <a href="/membership">Memberships</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
