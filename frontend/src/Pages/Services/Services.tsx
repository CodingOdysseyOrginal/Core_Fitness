import React from "react";
import "./Services.css";
import GymPicture from "./GymPicture.jpg";
import SwimmingPool from "./SwimmingPool.jpg";
import Sauna from "./Sauna.jpg";
import FrontDesk from "./FrontDesk.jpg";

const Services = () => {
  return (
    <section className="services-container">
      <h1>Our Services</h1>
      <div className="service-section gym-section">
        <img src={GymPicture} alt="Gym" />
        <div className="service-text">
          <h3>State-of-the-Art Gym</h3>
          <p>
            Experience the cutting edge of fitness with our state-of-the-art gym equipment. Our facility features everything you need to achieve your goals, including advanced recovery tools designed to optimize your post-workout healing and performance, as well as top-tier powerlifting platforms engineered for maximum strength and stability. Whether you're a seasoned athlete or just starting your fitness journey, our comprehensive range of equipment ensures you have the best tools available to reach new heights in your training.
          </p>
        </div>
      </div>
      <div className="service-section pool-section">
        <img src={SwimmingPool} alt="Pool" />
        <div className="service-text">
          <h3>Luxurious Pool</h3>
          <p>
            Enjoy our luxurious pool, a serene oasis available from dawn till dusk, perfect for both leisurely swims under the morning sun and rigorous aquatic workouts in the evening. Complementing our pool is a soothing hot tub, where you can unwind and relax your muscles after a long day. Whether you're looking to relax or engage in a full-body exercise, our pool and hot tub provide the ideal setting to enhance your overall fitness experience.
          </p>
        </div>
      </div>
      <div className="service-section sauna-section">
        <img src={Sauna} alt="Sauna" />
        <div className="service-text">
          <h3>Relaxing Saunas</h3>
          <p>
            Here, you'll find both dry and wet saunas, each designed to provide unique health benefits. After your sauna session, we recommend trying our cold plunge to invigorate your body and aid in recovery. If you're new to this process or would like detailed guidance, we offer complimentary pamphlets that outline the best practices for sauna use and recovery.
          </p>
        </div>
      </div>
      <div className="service-section frontdesk-section">
        <img src={FrontDesk} alt="Front Desk" />
        <div className="service-text">
          <h3>Welcoming Front Desk</h3>
          <p>
            As you step inside, you'll be greeted by our warm and welcoming front desk, where our friendly staff is ready to assist you with any inquiries and provide information about our facilities. Adjacent to the front desk, we have a comfortable area perfect for enjoying post-training meals or waiting for your personal training session. This space features cozy seating and tables, offering a relaxing atmosphere to refuel with nutritious snacks and beverages after a workout. Whether you're meeting friends, catching up on work, or simply unwinding, this area ensures a pleasant and convenient experience during your visit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
