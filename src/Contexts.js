import React from "react";

export const ThemeContext = React.createContext({
  primaryColor: "deepskyblue", // Give default value
  secondaryColor: "coral",
});

export const StateContext = React.createContext({
  state: {}, // Give default value
  dispatch: () => {},
});
