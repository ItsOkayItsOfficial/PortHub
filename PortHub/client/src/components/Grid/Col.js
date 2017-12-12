import React from "react";

export const Col = ({ size, children, style }) =>
  <div className={size.split(" ").map(size => "col-" + size).join(" ") } style={{style}}>
    {children}
  </div>;
