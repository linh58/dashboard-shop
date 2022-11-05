import React from "react";
import Insights from "./Insights";
import "./Promote.scss";
import RecentPost from "./RecentPost";

function Promote(props) {
  return (
    <div className="promote__wrapper">
      <h1 className="promote__heading">Promotes</h1>
      <Insights />
      <RecentPost />
    </div>
  );
}

export default Promote;
