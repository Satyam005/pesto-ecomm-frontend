import { createContext, useContext, useReducer } from "react";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {
  const products = [
    {
      id: 1,
      product_name: "a",
      price: 12,
      description: "NFT is one of a kind",
      product_image: "./images/img1.png",
    },
    {
      id: 2,
      product_name: "b",
      price: 12,
      description: "noice product",
      product_image: "./images/img2.png",
    },
    {
      id: 3,
      product_name: "c",
      price: 12,
      description: "noice product",
      product_image: "./images/img3.png",
    },
    {
      id: 4,
      product_name: "d",
      price: 12,
      description: "noice product",
      product_image: "./images/img4.png",
    },
    {
      id: 5,
      product_name: "e",
      price: 12,
      description: "noice product",
      product_image: "./images/img5.png",
    },
    {
      id: 6,
      product_name: "f",
      price: 12,
      description: "noice product",
      product_image: "./images/img6.png",
    },
  ];

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  //   const [productState, productDispatch] = useReducer(productReducer, {
  //     byStock: false,
  //     byFastDelivery: false,
  //     byRating: 0,
  //     searchQuery: "",
  //   });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
