import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
  const [testimonialRef, testimonialInView] = useInView({ threshold: 0.1 });

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
          <motion.h1 variants={rightItemVariants}>
            We are more than a gym. We are a Community!
          </motion.h1>
          <motion.a
            href="/SilverBackStrength/membership"
            variants={leftItemVariants}
          >
            <button>Join Today</button>
          </motion.a>
        </motion.div>
      </div>
      <div className="secondsection">
        <h1>Become part of Birmingham's biggest growing gym.</h1>
        <h2>
          With multiple gyms based in the West Midlands, we want to bring people
          together to achieve the best version of themselves!
        </h2>
        <a href="/SilverBackStrength/services">
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
              imgLink="/SilverBackStrength/membership"
              buttonLink="/SilverBackStrength/membership"
            />
          </motion.div>
          <motion.div variants={middleItemVariants}>
            <Card
              title="Group Classes"
              text="Join our community classes and train with others to stay motivated."
              imageUrl={GymClass}
              buttonText="Learn More"
              imgLink="/SilverBackStrength/services"
              buttonLink="/SilverBackStrength/services"
            />
          </motion.div>
          <motion.div variants={rightItemVariants}>
            <Card
              title="Boxing Training"
              text="Sharpen your skills with our professional boxing training sessions."
              imageUrl={Gloves}
              imgLink="/SilverBackStrength/services"
              buttonText="Learn More"
              buttonLink="/SilverBackStrength/services"
            />
          </motion.div>
        </motion.div>
      </div>
      <div className="forthsection" ref={testimonialRef}>
        <motion.div
          initial="hidden"
          animate={testimonialInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h1 variants={leftItemVariants}>
            Work with our high-level trainers
          </motion.h1>
          <motion.h2 variants={leftItemVariants}>
            We employ the finest trainers! Hear what our community has to say!
          </motion.h2>
        </motion.div>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          interval={5000}
          transitionTime={500}
          showArrows={false}
          stopOnHover={true}
        >
          <div className="testimonial">
            <p>
              "The supportive gym community also plays a big role, offering
              encouragement and motivation every step of the way. With top-notch
              equipment and a positive atmosphere, I've seen consistent
              improvements in my strength, endurance, and overall well-being.
              They have helped me achieve my goals!"
            </p>
            <h3>Bruce Wayne</h3>
          </div>
          <div className="testimonial">
            <p>
              "The gym is equipped with top-notch equipment, which ensures that
              I have everything I need to achieve my fitness goals. This
              combination of expert guidance and excellent facilities has led to
              consistent improvements in my strength, endurance, and overall
              well-being."
            </p>
            <h3>Margaret Hamilton</h3>
          </div>
          <div className="testimonial">
            <p>
              "I feel more motivated and stronger every day thanks to the great
              trainers here. Their tailored approach ensures that my workouts
              align perfectly with my goals and current fitness level, leading
              to consistent improvements in my strength, endurance, and overall
              well-being."
            </p>
            <h3>Ned Stark</h3>
          </div>
          <div className="testimonial">
            <p>
              "The plans are continually adjusted based on my performance,
              ensuring I am always challenged without being overwhelmed. As a
              result, I've seen consistent improvements in my strength,
              endurance, and overall well-being."
            </p>
            <h3>Mary Shelley</h3>
          </div>
        </Carousel>
        <a href="/SilverBackStrength/personaltrainers">
          <button>Personal Trainers</button>
        </a>
      </div>
    </>
  );
};

export default HomePage;
