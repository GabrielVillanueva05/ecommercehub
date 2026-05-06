import React from "react";
import "./CardGrid.css";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

const CardGrid = () => {
  return (
    <div className="grid-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CardGrid;
