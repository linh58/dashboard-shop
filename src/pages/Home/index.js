import React from "react";
import "./Home.scss";
import Overview from "./PanelLeft/Overview";
import ProductView from "./PanelLeft/ProductView";
import Protip from "./PanelLeft/Protip";
import GetMore from "./PanelLeft/GetMore";
import Popular from "./PanelRight/Popular";
import Comment from "./PanelRight/Comment";
import Request from "./PanelRight/Request";

function Home() {
  return (
    <div className="home__wrapper">
      <h1 className="home__title">Dashboard</h1>
      <div className="home__content">
        <div className="home__content-left">
          <Overview />
          <ProductView />
          <Protip />
          <GetMore />
        </div>
        <div className="home__content-right">
          <Popular />
          <Comment />
          <Request />
        </div>
      </div>
    </div>
  );
}

export default Home;
