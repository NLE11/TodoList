import React, { useContext } from "react";
import { ThemeContext } from "./Contexts";

const Header = ({ text }) => {
  const theme = useContext(ThemeContext); //useContext
  return <h1 style={{ color: theme.primaryColor }}>{text}</h1>;
};

export default Header;