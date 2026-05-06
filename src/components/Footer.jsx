import "./Footer.css";
import { SiGmail } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-links-container">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
      <div className="footer-content">
        <p>Simple tech products. Clean experience.</p>
        <p>Website Created by: Gabriel Villanueva</p>
      </div>
      <div className="footer-bottom">
        <p>Contact Me:</p>
        <SiGmail />
        <p>villanuevagabriel@gmail.com</p>
        <FaPhone />
        <p>(123) 456-7890</p>
        <FaLinkedin />
      </div>
    </div>
  );
};

export default Footer;
