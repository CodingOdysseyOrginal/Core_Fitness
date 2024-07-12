import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Footer.css";

const Footer: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.5, 
  });

  const footerRef = useRef<HTMLDivElement>(null);

  return (
    <footer ref={ref}>
      <motion.div
        className="containerFooter"
        ref={footerRef}
        animate={inView ? "visible" : "hidden"}
        initial="hidden"
      >
        <motion.div
          className="FooterSplit"
          variants={{
            hidden: { opacity: 0, x: -1000 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { delay: 0, duration: 1.5 },
            },
          }}
        >
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
        </motion.div>
        <motion.div
          className="contactSection"
          variants={{
            hidden: { opacity: 0, x: 1000 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { delay: 0.5, duration: 1.5 },
            },
          }}
        >
          <h2>Contact Us</h2>
          <p>
            Email: <a href="mailto:info@gym.com">info@gym.com</a>
          </p>
          <p>
            Phones: <a href="tel:+1234567890">+1 234 567 890</a>
          </p>
          <p>Address: 123 Gym Street, Fitness City</p>
          <a href="#">
            <button className="contactButton">Contact us!</button>
          </a>
        </motion.div>
        <motion.div
          className="infoSection"
          variants={{
            hidden: { opacity: 0, x: -1000 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { delay: 1, duration: 1.5 },
            },
          }}
        >
          <h2>Opening Hours</h2>
          <ul>
            <li>Monday - Friday: 6:00 AM - 9:00 PM</li>
            <li>Saturday: 8:00 AM - 6:00 PM</li>
            <li>Sunday: 8:00 AM - 4:00 PM</li>
          </ul>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
