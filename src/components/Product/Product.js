import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Product.css";
import { CartState } from "../../context/Context";

const Product = ({ item }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="products">
      <Card className="card">
        <Card.Img
          className="card-img"
          variant="top"
          src={item.product_image}
          alt={item.product_name}
        />
        <Card.Body className="card-body">
          <Card.Title>{item.product_name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {item.price}</span>
            <p>{item.description}</p>
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
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
