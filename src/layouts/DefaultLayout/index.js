import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./DefaultLayout.scss";

function DefaultLayout({ children }) {
  const [click, setClick] = useState(false);

  return (
    <div className="app">
      <Sidebar click={click} setClick={setClick} />
      <Header setClick={setClick} />
      <div className="content__wrapper">{children}</div>
    </div>
  );
}

export default DefaultLayout;
