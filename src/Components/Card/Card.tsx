import React from "react";
import "./Card.css"; 

interface CardProps {
  title: string;
  text: string;
  imageUrl: string;
  buttonText: string;
  buttonLink: string;
  imgLink: string;
}

const Card: React.FC<CardProps> = ({ title, text, imageUrl, buttonText, buttonLink, imgLink }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{text}</p>
      <a href={imgLink}>
      <img src={imageUrl} alt={title} className="card-image" />
      </a>
      <a href={buttonLink}>
        <button>{buttonText}</button>
      </a>
    </div>
  );
};

export default Card;
