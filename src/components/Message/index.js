import React from "react";
import { DoubleSelectIcon } from "../Icons";
import "./Message.scss";

function Message({ prodList }) {
  return (
    <div className="message__box">
      <div className="message__box-icon">
        <DoubleSelectIcon />
      </div>
      <span className="message__box-quantity">
        {prodList.length} products selected
      </span>
    </div>
  );
}

export default Message;
