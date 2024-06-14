import "./TrainerDetails.css";
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { personalTrainers } from '../../Components/data/PersonalTrainersData';

const TrainerDetails = () => {
  const { id } = useParams<{ id: string }>();
  const trainer = personalTrainers.find((trainer) => trainer.id === parseInt(id));

  if (!trainer) {
    return <div>Trainer not found</div>;
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [contactByPhone, setContactByPhone] = useState(false);
  const [contactByEmail, setContactByEmail] = useState(false);

  const handlePhoneCheckboxChange = () => {
    setContactByPhone(!contactByPhone);
  };

  const handleEmailCheckboxChange = () => {
    setContactByEmail(!contactByEmail);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Form submitted!');
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setContactByPhone(false);
    setContactByEmail(false);
  };

  return (
    <div className="trainer-details">
      <div className="top-section">
        <Link to="/personaltrainers" className="back-button">
          Back to Personal Trainers
        </Link>
      </div>
      <div className="trainer-info">
        <div className="qualifications">
          <h3>Qualifications</h3>
          <ul>
            {trainer.qualifications.map((qualification, index) => (
              <li key={index}>{qualification}</li>
            ))}
          </ul>
        </div>
        <div className="details">
          <div className="trainer-header">
            <img src={trainer.img} alt={`${trainer.name}'s picture`} />
            <h2>{trainer.name}</h2>
          </div>
          <div className="about-me">
            <h3>About Me</h3>
            <p>{trainer.description}</p>
          </div>
        </div>
      </div>
      <div className="contact-me">
        <h3>Contact Me</h3>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="tel" placeholder="Your Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          <textarea rows={4} placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
          <div className="contact-preferences">
            <label>
              <input type="checkbox" checked={contactByPhone} onChange={handlePhoneCheckboxChange} />
              Contact me by phone
            </label>
            <label>
              <input type="checkbox" checked={contactByEmail} onChange={handleEmailCheckboxChange} />
              Contact me by email
            </label>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default TrainerDetails;
