import "./navbar.scss";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{duration: 0.5}}
        >
          Mishan Savaliya
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/mishan-savaliya-591bb9153/">
            <AiFillLinkedin className="socialicon" />
          </a>
          <a href="https://github.com/mishan843/blogapp">
            <AiFillGithub className="socialicon" />
          </a>
          <a href="">
            <AiFillInstagram className="socialicon" />
          </a>
          <a href="">
            <AiFillFacebook className="socialicon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
