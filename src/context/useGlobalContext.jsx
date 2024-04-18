import { createContext, useReducer } from "react";

export const GlobalContext = createContext();

// eslint-disable-next-line react/prop-types

const changeState = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return {
        ...state,
        color: action.payload,
      };
    case "CHANGE_USER":
      return {
        ...state,
        user: action.payload,
      };
  }
};

// eslint-disable-next-line react/prop-types
export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    user: null,
    navbarColor: "red",
  });

  dispatch({
    type: "CHANGE_COLOR",
    payload: "green",
  });

  return (
    <GlobalContext.Provider value={{ state }}>
      {children}
    </GlobalContext.Provider>
  );
}
