import { useState } from "react";
import { createContext } from "react";

export const myCartContext = createContext();

export function MyCartContextProvider({ children }) {
  const [item, setItem] = useState([]);

  return (
    <myCartContext.Provider value={{ item, setItem }}>
      {children}
    </myCartContext.Provider>
  );
}
