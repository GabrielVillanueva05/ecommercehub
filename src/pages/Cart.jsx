import "./Cart.css";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiCircleRemove } from "react-icons/ci";
import { useEffect } from "react";

const Cart = ({ cartProducts, setCartProducts }) => {
  console.log(cartProducts);

  const handleCartRemove = (id) => {
    let updatedCart = cartProducts.filter((product) => product.id !== id);

    setCartProducts(updatedCart);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProducts));
  }, [cartProducts]);

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-content">
          <div>
            <div className="top-cart-content">
              <h2 className="cart-title">Your Cart</h2>
              <p className="cart-quantity">3 Items</p>
            </div>

            <div className="middle-cart-content">
              {cartProducts.map((product) => {
                return (
                  <div key={product.id} className="cart-item">
                    <img
                      className="cart-item-image"
                      src={product.image}
                      alt={product.name}
                    />
                    <p>{product.name}</p>
                    <div>
                      <button className="quantity-btn">-</button>
                      <span className="quantity">1</span>
                      <button className="quantity-btn">+</button>
                    </div>
                    <p>${product.price.toFixed(2)}</p>

                    <button onClick={() => handleCartRemove(product.id)}>
                      <CiCircleRemove className="remove-item-icon" />
                    </button>
                  </div>
                );
              })}
            </div>
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
