import "./Cart.css";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiCircleRemove } from "react-icons/ci";

const Cart = ({ cartProducts, setCartProducts }) => {
  console.log(cartProducts);

  const handleCartRemove = (id) => {
    let updatedCart = cartProducts.filter((product) => product.id !== id);

    setCartProducts(updatedCart);
  };

  const subtotal = cartProducts.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const tax = subtotal * 0.07;

  const shipping = cartProducts.length > 0 ? 5 : 0;
  // const shipping = 999;
  const total = subtotal + tax + shipping;

  const handleAddQuantity = (product) => {
    setCartProducts((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  };

  const handleMinusQuantity = (product) => {
    setCartProducts((prevCart) =>
      prevCart
        .map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-content">
          <div>
            <div className="top-cart-content">
              <h2 className="cart-title">Your Cart</h2>
              <p className="cart-quantity">
                {cartProducts.reduce(
                  (total, product) => total + product.quantity,
                  0,
                )}{" "}
                Items
              </p>
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
                      <button
                        onClick={() => handleMinusQuantity(product)}
                        className="quantity-btn"
                      >
                        -
                      </button>
                      <span className="quantity">{product.quantity}</span>
                      <button
                        onClick={() => handleAddQuantity(product)}
                        className="quantity-btn"
                      >
                        +
                      </button>
                    </div>
                    <p>${product.price.toFixed(2)}</p>

                    <button
                      className="remove-item-btn"
                      onClick={() => handleCartRemove(product.id)}
                    >
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
          <div className="summary-body">
            <div className="summary-items">
              <div className="summary-item summary-item-header">
                <p>Product</p>
                <p>Price</p>
                <p>Qty</p>
              </div>
              {cartProducts.map((product) => {
                return (
                  <div key={product.id} className="summary-item">
                    <p>{product.name}</p>
                    <p>${product.price.toFixed(2)}</p>
                    <p>{product.quantity}</p>
                  </div>
                );
              })}
            </div>

            <div className="summary-totals">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="summary-row summary-row-total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
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
