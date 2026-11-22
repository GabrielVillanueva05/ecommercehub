import "./CardGrid.css";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";

const CardGrid = ({ cartProducts, setCartProducts }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=12");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        const formattedProducts = data.products.map((product) => ({
          id: product.id,
          name: product.title,
          price: product.price,
          quantity: 0,
          image: product.thumbnail,
          description: product.description,
        }));

        setProducts(formattedProducts);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

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
