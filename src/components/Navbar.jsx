import React from "react";
import "./Navbar.css";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = ({ setUser }) => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    navigate("/login");
  };

  return (
    <div>
      <div className="nav-container">
        <div className="logo-container">
          <Link to="/">
            <h1>EcommerceHub</h1>
          </Link>
        </div>
        <div className="nav-links">
          <div className="nav-list">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>

          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
