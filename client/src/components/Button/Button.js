import React from "react";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const Button = ({color, className, children, onClick}) => (
  <button
    onClick={onClick}
      className={`btn btn-${color ? color : "default"} ${className
      ? " " + className
      : ""}`}
  >
    {children}
  </button>
);

export default Button;
