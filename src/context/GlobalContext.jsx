import { createContext } from "react";

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  return (
    <GlobalContext.Provider value={"hi"}>{children}</GlobalContext.Provider>
  );
}
