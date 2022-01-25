import React from "react";
import { CartState } from "../../context/Context";
import Product from "./../Product/Product";
import "./Home.css";

const Home = () => {
  const {
    state: { products },
  } = CartState();

  return (
    <div className="productContainer">
      {products.map((item) => {
        return <Product item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Home;
