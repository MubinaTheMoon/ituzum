import { createContext, useReducer } from "react";

export const GlobalContext = createContext();

const initialState = {
  products: [],
  totalAmount: 0,
  totalPrice: 0,
};

const changeState = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_PRODUCT":
      return { ...state, products: [...state.products, payload] };
    case "REMOVE_PRODUCT":
      return {
        ...state,
        products: [...state.products.filter((p) => p.id != payload)],
      };
    default:
      return state;
  }
};

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, initialState);
  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
