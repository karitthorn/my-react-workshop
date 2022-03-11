import Switch from "react-switch";
import "../App.css";
import { useState, useContext } from "react";
import { ThemeContext } from "../App";

const Title = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleSwitch = (checked) => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <header className={theme === "dark" ? "dark" : "light"}>
      <spen>Mode {theme}</spen>

      <Switch onChange={toggleSwitch} checked={theme === "dark"} />
    </header>
  );
};

export default Title;
