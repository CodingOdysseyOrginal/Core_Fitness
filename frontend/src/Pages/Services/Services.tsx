import React from "react";
import "./Services.css";
import GymPicture from "./GymPicture.jpg";
import SwimmingPool from "./SwimmingPool.jpg";

const Services = () => {
  return (
    <section className="ServicesContainer">
      <h1>Our Services!</h1>
      <div className="GymSection">
        <img src={GymPicture} alt="Picture of the gym" />
        <h3>
          Experience the cutting edge of fitness with our state-of-the-art gym
          equipment. Our facility features everything you need to achieve your
          goals, including advanced recovery tools designed to optimize your
          post-workout healing and performance, as well as top-tier
          powerlifting platforms engineered for maximum strength and stability.
          Whether you're a seasoned athlete or just starting your fitness
          journey, our comprehensive range of equipment ensures you have the
          best tools available to reach new heights in your training.
        </h3>
      </div>
      <div className="PoolSection">
        <h3>
          Enjoy our luxurious pool, a serene oasis available from dawn till
          dusk, perfect for both leisurely swims under the morning sun and
          rigorous aquatic workouts in the evening. Complementing our pool is a
          soothing hot tub, where you can unwind and relax your muscles after a
          long day. Whether you're looking to relax or engage in a full-body
          exercise, our pool and hot tub provide the ideal setting to enhance
          your overall fitness experience.
        </h3>
        <img src={SwimmingPool} alt="Picture of the pool" />
      </div>
    </section>
  );
};

export default Services;
