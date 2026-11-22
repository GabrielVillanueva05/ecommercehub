import { Link } from "react-router-dom";
import "./Checkout.css";

function Checkout({ cartProducts, setCartProducts }) {
  const subtotal = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );

  const tax = subtotal * 0.07;
  const shipping = cartProducts.length > 0 ? 5 : 0;
  const total = subtotal + tax + shipping;

  const handlePlaceOrder = () => {
    alert("Demo order placed successfully!");
    setCartProducts([]);
  };

  return (
    <main className="checkout-page">
      <h1>Checkout</h1>

      {cartProducts.length === 0 ? (
        <>
          <p>Your cart is empty.</p>
          <Link to="/">Continue Shopping</Link>
        </>
      ) : (
        <>
          <h2>Order Summary</h2>

          {cartProducts.map((product) => (
            <p key={product.id}>
              {product.name} × {product.quantity}
            </p>
          ))}

          <h3>Total: ${total.toFixed(2)}</h3>

          <p>This is a demo checkout. No payment will be collected.</p>

          <button onClick={handlePlaceOrder}>Place Demo Order</button>
        </>
      )}
    </main>
  );
}

export default Checkout;
