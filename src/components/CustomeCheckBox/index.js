import React from "react";
import "./CustomeCheckBox.scss";

function CustomeCheckBox({ id, name, type, handleClick, isChecked }) {
  return (
    <label className="container-checkbox">
      <input
        type={type}
        id={id}
        name={name}
        onChange={handleClick}
        checked={isChecked}
      />
      <span className="checkmark"></span>
    </label>
  );
}

export default CustomeCheckBox;
