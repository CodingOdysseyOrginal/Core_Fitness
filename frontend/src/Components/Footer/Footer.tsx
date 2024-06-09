import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="containerFooter">
        <div className="FooterSplit">
          <h1>Follow Us!</h1>
          <ul>
            <li>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="contactSection">
          <h2>Contact Us</h2>
          <p>
            Email: <a href="mailto:info@gym.com">info@gym.com</a>
          </p>
          <p>
            Phone: <a href="tel:+1234567890">+1 234 567 890</a>
          </p>
          <p>Address: 123 Gym Street, Fitness City</p>
          <a href="/contact">
            <button className="contactButton">Contact us!</button>
          </a>
        </div>
        <div className="infoSection">
          <h2>Opening Hours</h2>
          <ul>
            <li>Monday - Friday: 6:00 AM - 9:00 PM</li>
            <li>Saturday: 8:00 AM - 6:00 PM</li>
            <li>Sunday: 8:00 AM - 4:00 PM</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
