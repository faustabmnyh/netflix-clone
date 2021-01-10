import React, { createContext, useContext, useReducer } from "react";

// prepare data layer
export const StateContext = createContext();

// warap app and provide data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// pull information
export const useStateValue = () => useContext(StateContext);
