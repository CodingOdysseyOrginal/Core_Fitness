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
      </div>
    </footer>
  );
};

export default Footer;
