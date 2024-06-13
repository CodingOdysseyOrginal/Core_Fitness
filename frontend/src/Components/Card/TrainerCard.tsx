import React from 'react';
import { Link } from 'react-router-dom';
import "./TrainerCard.css";

interface TrainerCardProps {
  id: number;
  name: string;
  skills: string[];
  img: string;
}

const TrainerCard: React.FC<TrainerCardProps> = ({ id, name, skills, img }) => {
  const skillColors = [
    'gray'
  ];

  return (
    <div className="trainer-card">
      <div className='trainer-container'>
      <Link to={`/trainer/${id}`}> <img src={img} alt={`${name}'s picture`} /></Link>
        <h2>{name}</h2>
        <div className="skills">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="skill"
              style={{ backgroundColor: skillColors[index % skillColors.length] }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <button><Link to={`/trainer/${id}`}>View Profile</Link></button>
    </div>
  );
};

export default TrainerCard;
