import { createContext, useContext, useReducer } from "react";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {
  const products = [
    {
      id: 1,
      product_name: "Snoop D Mon",
      price: 100000,
      description: "Snoop Dowg NFT",
      product_image: "./images/img1.png",
    },
    {
      id: 2,
      product_name: "RoboCop Mon",
      price: 200000,
      description: "RoboCop NFT",
      product_image: "./images/img2.png",
    },
    {
      id: 3,
      product_name: "Money King Mon",
      price: 300000,
      description: "Money King Monkey NFT",
      product_image: "./images/img3.png",
    },
    {
      id: 4,
      product_name: "Golden Mon",
      price: 400000,
      description: "Golden Monkey NFT",
      product_image: "./images/img4.png",
    },
    {
      id: 5,
      product_name: "Simple Mon NFT",
      price: 500000,
      description: "Simple Monkey NFT",
      product_image: "./images/img5.png",
    },
    {
      id: 6,
      product_name: "Zombie Mon",
      price: 600000,
      description: "Zombie NFT",
      product_image: "./images/img6.png",
    },
  ];

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
