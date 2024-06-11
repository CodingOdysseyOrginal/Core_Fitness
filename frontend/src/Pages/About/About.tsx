import React from "react";
import "./About.css";
import gym from "./GymPicture.jpg";
import Founder from "./Founder.jpg";

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="content">
        <h1>Our History</h1>
        <div className="history-content">
          <div className="history-text">
            <p>
              Silverback Strength was born out of a personal journey. Our founder, Sarah, struggled to find a sense of community at the gyms she frequented. Despite the abundance of equipment and classes, she felt disconnected and lacked the support she needed to reach her fitness goals.
            </p>
          </div>
          <img src={Founder} alt="Founder" className="founder-image" />
        </div>
        <div className="founder-section">
          <h1>The Mission</h1>
          <p>
            At Silverback Strength, our mission is to foster a supportive and inclusive community where everyone feels empowered to achieve their fitness goals. Our values are:
          </p>
          <ul>
            <li><strong>Community:</strong> Creating a welcoming and supportive environment for all members.</li>
            <li><strong>Empowerment:</strong> Encouraging personal growth and confidence through fitness.</li>
            <li><strong>Integrity:</strong> Upholding honesty, transparency, and respect in all our interactions.</li>
            <li><strong>Excellence:</strong> Striving for the highest standards in coaching, facilities, and member experience.</li>
            <li><strong>Innovation:</strong> Continuously evolving to provide the best fitness solutions and experiences.</li>
          </ul>
        </div>
        <div className="facility-section">
          <h1>Our Facility</h1>
          <div className="gym-facilities">
            <img src={gym} alt="Gym Facility" className="facility-image" />
            <div>
              <p>
                Our facility includes:
              </p>
              <ul>
                <li>State-of-the-art fitness equipment</li>
                <li>Dedicated areas for weightlifting, cardio, and functional training</li>
                <li>Group exercise classes including yoga, spinning, and HIIT</li>
                <li>Boxing area with punching bags and boxing ring</li>
                <li>Personal training services</li>
                <li>Locker rooms and shower facilities</li>
              </ul>
            </div>
          </div>
          <div className="facility-button">
            <a href="./services">
          <button>Services</button>
          </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
