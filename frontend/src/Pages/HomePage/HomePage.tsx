import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./HomePage.css";
import Card from "../../Components/Card/Card";
import Weights from "./Weights.jpg";
import GymClass from "./GymClass.jpg";
import Gloves from "./BoxingGLoves.jpg";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const leftItemVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const middleItemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const rightItemVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const HomePage = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [cardsRef, cardsInView] = useInView({ threshold: 0.1 });

  return (
    <>
      <div id="Home" className="home-section" ref={ref}>
        <motion.div
          className="Homeintro"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h1 variants={leftItemVariants}>
            Focus on enhancing your body and sharpening your mind
          </motion.h1>
          <motion.h1 variants={leftItemVariants}>
            We are more than a gym. We are a Community!
          </motion.h1>
          <motion.a href="/membership" variants={leftItemVariants}>
            <button>Join Today</button>
          </motion.a>
        </motion.div>
      </div>
      <div className="secondsection">
        <h1>Become part of Birmingham's biggest growing gym.</h1>
        <h2>
          With multiple gyms based in the West Midlands, we want to bring
          people together to achieve the best version of themselves!
        </h2>
        <a href="/services">
          <button>Our Community</button>
        </a>
      </div>
      <div className="thirdsection" ref={cardsRef}>
        <motion.div
          className="cards-container"
          initial="hidden"
          animate={cardsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={leftItemVariants}>
            <Card
              title="Strength Training"
              text="Enhance your body with our state-of-the-art weight training facilities."
              imageUrl={Weights}
              buttonText="Join Today"
              imgLink="/membership"
              buttonLink="/membership"
            />
          </motion.div>
          <motion.div variants={middleItemVariants}>
            <Card
              title="Group Classes"
              text="Join our community classes and train with others to stay motivated."
              imageUrl={GymClass}
              buttonText="Learn More"
              imgLink="/services"
              buttonLink="/services"
            />
          </motion.div>
          <motion.div variants={rightItemVariants}>
            <Card
              title="Boxing Training"
              text="Sharpen your skills with our professional boxing training sessions."
              imageUrl={Gloves}
              imgLink="/services"
              buttonText="Learn More"
              buttonLink="/services"
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default HomePage;
