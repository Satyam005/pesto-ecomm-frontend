import React from "react";
import {
  Container,
  Dropdown,
  Navbar,
  NavbarBrand,
  Nav,
  Button,
} from "react-bootstrap";
import "./Header.css";
import { AiFillDelete } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "./../../context/Context";

const Header = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <Navbar style={{ height: 80 }}>
      <Container>
        <NavbarBrand style={{ fontWeight: 500, fontSize: 30 }}>
          <Link to="/">NFTs</Link>
        </NavbarBrand>
        <Nav>
          <Dropdown align="end">
            <Dropdown.Toggle variant="dark">
              <FaShoppingCart color="white" fontSize="25px" />
              <span className="badge">{cart.length}</span>
            </Dropdown.Toggle>
            <Dropdown.Menu
              style={{
                border: `none`,
                minWidth: 370,
                background: `linear-gradient(#e55d87, #5fc3e4)`,
              }}
            >
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartItem" key={prod.id}>
                      <img
                        src={prod.product_image}
                        className="cartItemImg"
                        alt={prod.product_name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.product_name}</span>
                        <span>₹ {prod.price}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button
                      style={{
                        width: "95%",
                        margin: "0 10px",
                        background: `linear-gradient(#da22ff, #9733ee)`,
                        border: `none`,
                      }}
                    >
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10, fontWeight: 500 }}>
                  Cart Is Empty
                </span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
