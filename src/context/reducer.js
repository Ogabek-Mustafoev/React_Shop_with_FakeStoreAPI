import { toast } from "react-toastify";

export function reducer(state, { type, payload }) {

  const setTitle = (title) => {
    if (title.length > 12) {
      return `${title.slice(0, 12)}...`
    } else {
      return title
    }
  }

  switch (type) {
    case "ADD_TO_BASKET":
      toast.success(`${setTitle(payload.title)} added to basket!`, {
        toastId: payload.id,
      });
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
      return { ...state, order: newOrder };
    case "INCR_DECR_QUANTITY":
      const minusOrder = state.order.filter((item) => item.id === payload.id);

      if (payload.plusMinus === "+1") {
        toast.info(`+1 ${setTitle(payload.title)} added to list!`, {
          toastId: payload.id,
        });
      }
      if (payload.plusMinus === "-1" && minusOrder[0].quantity > 1) {
        toast.warning(`-1 ${setTitle(payload.title)} removed from list!`, {
          toastId: payload.id,
        });
      }
      if (minusOrder[0].quantity >= 1) {
        return {
          ...state,
          order: state.order.map((item) => {
            if (item.id === payload.id) {
              return { ...item, quantity: item.quantity + +payload.plusMinus };
            } else {
              return item;
            }
          }),
        };
      } else {
        toast.error(`${setTitle(payload.title)} deleted from basket!`, {
          toastId: payload.id,
        });
        return {
          ...state,
          order: state.order.filter((item) => item.id !== payload.id),
        };
      }
    case "REMOVE_FROM_BASKET":
      toast.error(`${setTitle(payload.title)} deleted from basket!`, {
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
    case 'TOGGLE_MENU':
      return { ...state, toggleMenu: payload }
    case 'SET_TYPE':
      return { ...state, type: payload }
    case 'SET_LOADING':
      return { ...state, loading: payload }
    case 'SET_SEARCH_VALUE':
      return { ...state, term: payload }
    case 'SET_FILTERED_DATA':
      return { ...state, filteredData: payload }
    default:
      return state;
  }
}
