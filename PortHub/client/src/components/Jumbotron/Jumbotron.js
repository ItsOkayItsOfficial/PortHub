import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) =>
  <div className="jumbotron jumbotron-fluid bg-dark text-white">
    {children}
  </div>;

export default Jumbotron;
