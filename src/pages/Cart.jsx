import "./Cart.css";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-content">
          <div className="top-cart-content">
            <h2 className="cart-title">Your Cart</h2>
            <p className="cart-quantity">3 Items</p>
          </div>

          <div className="bottom-cart-content">
            <Link to="/" className="continue-shopping-link">
              <FaLongArrowAltLeft />
              <p className="continue-shopping">Continue Shopping</p>
            </Link>
          </div>
        </div>
        <div className="summary-container">
          <div className="top-summary-container">
            <h3 className="summary-title">Summary</h3>
          </div>
          <div className="bottom-summary-container">
            <Link to="/checkout" className="checkout-link">
              CHECKOUT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
