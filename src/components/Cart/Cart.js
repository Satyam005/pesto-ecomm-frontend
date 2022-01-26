import React, { useState, useEffect } from "react";
import { CartState } from "../../context/Context";
import {
  ListGroup,
  Button,
  Row,
  Col,
  Image,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import "./Cart.css";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div className="home">
      <div className="cart">
        <ListGroup>
          {cart.map((item) => (
            <ListGroup.Item
              key={item.id}
              style={{
                background: `linear-gradient(#e55d87, #5fc3e4)`,
                border: `none`,
              }}
            >
              <Row className="row">
                <Col md={2}>
                  <Image
                    src={item.product_image}
                    alt={item.product_name}
                    fluid
                    rounded
                  />
                </Col>
                <Col md={2}>
                  <span>{item.product_name}</span>
                </Col>
                <Col md={2}>₹ {item.price}</Col>
                <Col md={2}>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    <FormControl
                      type="number"
                      min="1"
                      placeholder="Quantity"
                      aria-label="Username"
                      value={item.qty}
                      onChange={(e) => {
                        dispatch({
                          type: "CHANGE_CART_QTY",
                          payload: {
                            id: item.id,
                            qty: e.target.value,
                          },
                        });
                      }}
                    />
                  </InputGroup>
                </Col>
                <Col md={2}>
                  <Button
                    className="delIcon"
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: item,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="summary">
        <span className="title">Subtotal ({cart.length}) items</span>
        <span
          style={{
            fontWeight: 700,
            fontSize: 20,
          }}
        >
          Total : ₹ {total}
        </span>
        <Button
          type="button"
          disabled={cart.length === 0}
          style={{
            margin: 10,
            background: `linear-gradient(#e55d87, #5fc3e4)`,
            border: `none`,
            color: `black`,
            fontWeight: 700,
          }}
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
