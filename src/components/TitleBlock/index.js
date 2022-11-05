import React from "react";
import "./TitleBlock.scss";

function TitleBlock({ style, title }) {
  return (
    <div className="title__block">
      <div className="block" style={style}></div>
      <p className="title">{title}</p>
    </div>
  );
}

export default TitleBlock;
