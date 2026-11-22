import "./ProductCard.css";

const ProductCard = ({ product, cartProducts, setCartProducts }) => {
  const handleAddToCart = () => {
    const existingItem = cartProducts.find((item) => item.id === product.id);

    if (existingItem) {
      setCartProducts(
        cartProducts.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      const productToAdd = { ...product, quantity: 1 };

      setCartProducts([...cartProducts, productToAdd]);
    }
  };

  return (
    <div className="card-container">
      <div className="card-image-container">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="card-header">
        <h3>{product.name}</h3>
        <p className="card-price">${product.price.toFixed(2)}</p>
      </div>

      <p className="card-description">{product.description}</p>

      <button onClick={handleAddToCart} className="add-cart-btn">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
