import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.scss";

function MenuItem({ title, icon, to, children, style }) {
  return (
    <NavLink className={"menu__item"} to={to} style={style}>
      <span className="menu__icon">{icon}</span>
      <span className="menu__title">{title}</span>
      {children}
    </NavLink>
  );
}

export default MenuItem;
