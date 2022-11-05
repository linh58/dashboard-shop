import React from "react";
import "./Button.scss";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

function Button({
  children,
  type,
  onClick,
  buttonStyles,
  buttonSize,
  className,
}) {
  const checkButtonStyle = STYLES.includes(buttonStyles)
    ? buttonStyles
    : STYLES[0];
  const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${
        className ? className : ""
      }`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
