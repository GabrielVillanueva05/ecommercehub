import "./Footer.css";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <nav className="footer-links-container">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>

      <div className="footer-content">
        <p>Simple tech products. Clean experience.</p>
        <p>Created by Gabriel Villanueva</p>
      </div>

      <div className="footer-bottom">
        <SiGmail />
        <a href="mailto:villanuevagabriel@gmail.com">
          villanuevagabriel@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
