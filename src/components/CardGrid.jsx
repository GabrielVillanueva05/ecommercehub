import "./CardGrid.css";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

const CardGrid = ({ cartProducts, setCartProducts }) => {
  return (
    <div className="grid-container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
        />
      ))}
    </div>
  );
};

export default CardGrid;
