import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Ecommerce",
    img: "./react1.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quo nisi voluptatibus autem voluptatum ex soluta? Ut incidunt illo provident!",
  },
  {
    id: 2,
    title: "Nextjs News and Blog",
    img: "./react2.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quo nisi voluptatibus autem voluptatum ex soluta? Ut incidunt illo provident!",
  },
  {
    id: 3,
    title: "React Movie",
    img: "./react3.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quo nisi voluptatibus autem voluptatum ex soluta? Ut incidunt illo provident!",
  },
  {
    id: 4,
    title: "React Travel Booking",
    img: "./react4.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quo nisi voluptatibus autem voluptatum ex soluta? Ut incidunt illo provident!",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featuerd Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
