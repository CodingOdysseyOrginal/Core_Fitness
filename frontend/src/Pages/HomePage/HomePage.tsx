import "./HomePage.css";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const HomePage = () => {
  return (
    <>
      <div id="Home" className="home-section">
        <motion.div
          className="Homeintro"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 variants={itemVariants}>
            Focus on enhancing your body and sharpening your mind
          </motion.h1>
          <motion.h1 variants={itemVariants}>
            We are more than a gym. We are a Community!
          </motion.h1>
          <motion.a href="/membership" variants={itemVariants}>
            <button>Join Today</button>
          </motion.a>
        </motion.div>
      </div>
      <div className="secondsection">
          <h1>
            Become part of Birmingham's biggest growing gym.
          </h1>
          <h2>
            
            With multiple gyms based in the West Midlands, we want to bring
            people together to achieve the best version of themselves!
          </h2>
          <a href="/services"><button>Our Community</button></a>
        

      </div>
    </>
  );
};

export default HomePage;
