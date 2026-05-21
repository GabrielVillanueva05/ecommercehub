import "./ProductCard.css";
import { useEffect } from "react";

const ProductCard = ({ product, cartProducts, setCartProducts }) => {
  const handleAddToCart = () => {
    const existingItem = cartProducts.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity++;

      setCartProducts([...cartProducts]);
    } else {
      const productToAdd = { ...product, quantity: 1 };

      setCartProducts([...cartProducts, productToAdd]);
    }
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
