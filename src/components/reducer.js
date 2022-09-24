import { toast } from "react-toastify";
export function reducer(state, { type, payload }) {
  switch (type) {
    case "ADD_TO_BASKET": {
      toast.success(
        `${payload.title.slice(0, 10)}... added to basket successfully!`,
        {
          toastId: payload.id,
        }
      );
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.id === payload.id
      );
      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }
      return {
        ...state,
        order: newOrder,
      };
    }
    case "INCREMENT_QUANTITY":
      toast.success(`+1 ${payload.title.slice(0, 12)}... added!`, {
        toastId: payload.id,
      });
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.id === payload.id) {
            const newQuantity = el.quantity + 1;
            return {
              ...el,
              quantity: newQuantity,
            };
          } else {
            return el;
          }
        }),
      };

    case "DECREMENT_QUANTITY":
      toast.warn(`-1 ${payload.title.slice(0, 12)}... removed!`, {
        toastId: payload.id,
      });
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.id === payload.id) {
            const newQuantity = el.quantity - 1;
            return {
              ...el,
              quantity: newQuantity >= 0 ? newQuantity : 0,
            };
          } else {
            return el;
          }
        }),
      };
    case "REMOVE_FROM_BASKET":
      toast.error(`${payload.title.slice(0, 12)}... deleted from basket!`, {
        toastId: payload.id,
      });
      return {
        ...state,
        order: state.order.filter((item) => item.id !== payload.id),
      };
    case "SET_DATA":
      return {
        ...state,
        data: payload || [],
      };
    case "SET_FILTER":
      return {
        ...state,
        filter: payload || [],
      };

    default:
      return state;
  }
}
