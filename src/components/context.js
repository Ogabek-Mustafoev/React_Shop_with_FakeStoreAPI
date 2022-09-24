import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
  data: [],
  filter: [],
  order: [],
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.addToBasket = (item) => {
    dispatch({ type: "ADD_TO_BASKET", payload: item });
  };
  value.incrementQuantity = (id, title) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: { id, title } });
  };
  value.decrementQuantity = (id, title) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: { id, title } });
  };
  value.removeFromBasket = (id, title) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: { id, title } });
  };
  value.setData = (data) => {
    dispatch({ type: "SET_DATA", payload: data });
  };
  value.setFilter = (filter) => {
    dispatch({ type: "SET_FILTER", payload: filter });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
