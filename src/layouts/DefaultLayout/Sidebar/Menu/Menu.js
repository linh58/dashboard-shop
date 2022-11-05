import React from "react";
import "./Menu.scss";

function Menu({ children }) {
  return <nav className="menu__list">{children}</nav>;
}

export default Menu;
