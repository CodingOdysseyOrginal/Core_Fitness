import "./PersonalTrainers.css"
import { personalTrainers } from '../../Components/data/PersonalTrainersData';
import TrainerCard from '../../Components/Card/TrainerCard';

const PersonalTrainers = () => {
  return (
    <section className="personalTrainerContainer">
    <div className="personal-trainers">
      {personalTrainers.map((trainer) => (
        <TrainerCard key={trainer.id} {...trainer} />
      ))}
    </div>
    </section>
  );
};

export default PersonalTrainers;
