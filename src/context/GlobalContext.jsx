import { createContext, useEffect, useReducer } from "react";

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
      return {
        ...state,
        products: [...state.products, payload],
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter((p) => payload != p.id),
      };
  }
};

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, initialState);

  const calculateTotal = () => {};

  useEffect(() => {}, []);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
