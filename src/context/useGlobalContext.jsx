import { createContext } from "react";

export const GlobalContext = createContext();

const a = 1;

// eslint-disable-next-line react/prop-types
export function GlobalContextProvider({ children }) {
  return (
    <GlobalContext.Provider value={{ a }}>{children}</GlobalContext.Provider>
  );
}
