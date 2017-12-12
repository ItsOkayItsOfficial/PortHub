import React from "react";

export const Row = ({ fluid, children, className}) =>
  <div className={`$className row${fluid ? "-fluid" : ""}`}>
    {children}
  </div>;
