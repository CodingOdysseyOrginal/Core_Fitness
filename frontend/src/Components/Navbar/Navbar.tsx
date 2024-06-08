import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "./logo.svg";
import MenuIcon from "./MenuIcon.svg";
import CloseIcon from "./CloseIcon.svg";
import logo3 from "./logo3.svg";

// Things to fix
// 1. fix border while scrolling on navbar as it leaks over
// 2. adjust colors and make font stay out more (maybe look into good fonts that are thick)
// 3. double check sidebar for navbar to make sure it works correctly with any adjustments
// finally adjust colors to match syle of website site. look into navyblue maybe (also see about changing gorillas to white on navbar when you scroll. not sure if possible but worth a shot)

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
          </ul>
        </div>
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Gorilla" />
          </a>
          <a className="title" href="/">
            Silverback <span>Strength</span>
          </a>
          <a href="/">
            <img src={logo3} alt="Gorilla" />
          </a>
        </div>
        <div className="navigation">
          <ul>
            <li><a href="/services">Services</a></li>
            <li><a href="/membership">Memberships</a></li>
          </ul>
        </div>
        <div className="MobileMenu">
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <img src={sidebarVisible ? CloseIcon : MenuIcon} height={50} alt={sidebarVisible ? "Close sidebar" : "Toggle sidebar"} />
          </button>
          <h1 className="title">Silverback <span>Strength</span> </h1>
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
          <li><a href="/about">About</a></li>
          <li><a href="/personaltrainers">Personal Trainers</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/membership">Memberships</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
