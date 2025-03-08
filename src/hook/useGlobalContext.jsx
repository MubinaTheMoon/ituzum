import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export function useGlobalContex() {
  const context = useContext(GlobalContext);

  if (!context) {
    return "useGlobalContex() must be in the GlobalContextProvider()";
  }

  return context;
}
