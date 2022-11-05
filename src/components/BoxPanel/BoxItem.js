import React from "react";
import "./BoxPanel.scss";
import smallDescription from "~/assets/images/description.svg";
import { Tooltip, Typography } from "@mui/material";

const BoxItem = React.forwardRef((props, ref) => (
  <div {...props} ref={ref} className="box__panel">
    <div className="box__panel-left">
      <div className="box__panel-icon">{props.icon}</div>
      <div>
        <span className="box__content-title">
          <span>{props.title}</span>
          <Tooltip
            title={<Typography fontSize={11}>small description</Typography>}
            placement="top-start"
          >
            <img src={smallDescription} alt="Small Description" />
          </Tooltip>
        </span>
        <p className="box__content-num">
          {props.quantity}
          {props.title === "Income" ? "K" : ""}
        </p>
      </div>
    </div>
    <div className="box__content-numberal">{props.numberal}%</div>
  </div>
));

export default BoxItem;
