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

      {/* <ul className="sci">
        <li>
          <a href="">happy</a>
        </li>
        <li>
          <a href="">birth</a>
        </li>
        <li>
          <a href="">day</a>
        </li>
      </ul> */}

      {/* <Card.Img
        className="card-img"
        variant="top"
        src={item.product_image}
        alt={item.product_name}
      />
      <Card.Body className="card-body">
        <Card.Title>{item.product_name}</Card.Title>
        <Card.Subtitle>
          <span style={{ marginBottom: 50, fontSize: 20 }}>₹ {item.price}</span>
          <p style={{ paddingTop: 5 }}>{item.description}</p>
        </Card.Subtitle>
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
      </Card.Body> */}
    </div>
  );
};

export default Product;
