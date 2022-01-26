import React from "react";
import { Button } from "react-bootstrap";
import "./Product.css";
import { CartState } from "../../context/Context";

const Product = ({ item }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="card">
      <div className="content">
        <div className="imgBx">
          <img src={item.product_image} alt={item.product_name} />
        </div>
        <div className="contentBx">
          <h3>
            {item.product_name}
            <br />
            <p style={{ fontSize: 20, margin: 5 }}>₹ {item.price}</p>
            <span style={{ fontSize: 20 }}>{item.description}</span>
          </h3>
        </div>
      </div>
      <div className="sci">
        {cart.some((p) => p.id === item.id) ? (
          <Button
            variant="danger"
            onClick={() => {
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: item,
              });
            }}
          >
            Remove
          </Button>
        ) : (
          <Button
            style={{
              background: `linear-gradient(#e55d87, #5fc3e4)`,
              border: `none`,
            }}
            onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: item,
              });
            }}
          >
            Add To Cart
          </Button>
        )}
      </div>
    </div>
  );
};

export default Product;
