import React from "react";

const Jumbotron = ({ children }) =>
  <div style={{ height: 250 }} className="jumbotron jumbotron-fluid bg-dark">
    {children}
  </div>;

export default Jumbotron;
