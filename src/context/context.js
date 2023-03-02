import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
  loading: false,
  data: [],
  filter: [],
  order: [],
  filteredData: [],
  term: "",
  toggleMenu: false,
  type: "all",
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.addToBasket = (item) => {
    dispatch({ type: "ADD_TO_BASKET", payload: item });
  };
  value.incrDecrQuantity = (items) => {
    dispatch({ type: "INCR_DECR_QUANTITY", payload: { ...items } });
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
  value.setToggleMenu = (bool) => {
    dispatch({ type: "TOGGLE_MENU", payload: bool });
  };
  value.setType = (type) => {
    dispatch({ type: "SET_TYPE", payload: type });
  };
  value.setLoading = (bool) => {
    dispatch({ type: "SET_LOADING", payload: bool });
  };
  value.onSearch = (value) => {
    dispatch({ type: "SET_SEARCH_VALUE", payload: value });
  };
  value.getFilteredData = (filteredData) => {
    dispatch({ type: "SET_FILTERED_DATA", payload: filteredData });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
