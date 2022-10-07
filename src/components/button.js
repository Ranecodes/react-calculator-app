import React from "react";

const Button = (props) => {
  return (
    <input className="calc-btn" type="button" value={props.label} onClick={props.handleClick} style={props.style} />
  );
};

export default Button;
