import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-300%",
    transition: {
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          animate="animate"
          initial="initial"
        >
          <motion.h2 variants={textVariants}>MISHAN SAVALIYA</motion.h2>
          <motion.h1 variants={textVariants}>
            MERN Stack Developer and UI UX Designer
          </motion.h1>

          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              See the latest works
            </motion.button>
            <motion.button variants={textVariants}>Contact me</motion.button>
          </motion.div>
          <motion.img
            src="/scroll.png"
            alt=""
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        animate="animate"
        initial="initial"
      >
        Website Development in ReactJs, NodeJs, TailwindCss.
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
