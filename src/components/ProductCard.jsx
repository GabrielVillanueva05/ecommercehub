import "./ProductCard.css";
import { useEffect } from "react";

const ProductCard = ({ product, cartProducts, setCartProducts }) => {
  const handleAddToCart = () => {
    const updatedCart = [...cartProducts, product];
    setCartProducts(updatedCart);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProducts));
  }, [cartProducts]);

  return (
    <>
      <div className="card-container">
        <div className="card-header">
          <p>Product Name: {product.name}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
        </div>
        <img src={product.image} alt={product.name} width="200" />
        <div className="card-footer">
          <p>Description: {product.description}</p>
        </div>
        <div className="card-btn-container">
          <button onClick={handleAddToCart} className="add-cart-btn">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
