import React from "react";
import "./Narbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="nav-container">
        <div className="logo-container">
          <h1>EcommerceHub</h1>
        </div>
        <div className="nav-links">
          <ul className="nav-list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/signup">Signup</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
