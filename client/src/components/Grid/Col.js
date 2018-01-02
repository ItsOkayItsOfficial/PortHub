import React from "react";

export const Col = ({ size, children, style , className}) =>
  <div className={size.split(" ").map(size => "col-" + size).join(" ") + " " +  className} style={{style}}>
    {children}
  </div>;
