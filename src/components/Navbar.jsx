import "./Navbar.css";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../ThemeContext";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

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

            <Link to="/cart" className="cart-link">
              <FaShoppingCart className="cart-icon" />
            </Link>

            <button className="theme-toggle" onClick={toggleTheme}>
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>

            {user ? (
              <>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/signup">Signup</Link>
                <Link to="/login">Login</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
