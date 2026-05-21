import CardGrid from "../components/CardGrid";
import "./Home.css";
import { FaUser } from "react-icons/fa";

const Home = ({ user, cartProducts, setCartProducts }) => {
  return (
    <div className="home-container">
      {user ? (
        <p>
          <FaUser className="user-icon" /> Logged in as {user.email}
        </p>
      ) : (
        <p>Log in to view your profile!</p>
      )}
      <h1>EcommerceHub</h1>
      Our Products:
      <CardGrid cartProducts={cartProducts} setCartProducts={setCartProducts} />
    </div>
  );
};

export default Home;
