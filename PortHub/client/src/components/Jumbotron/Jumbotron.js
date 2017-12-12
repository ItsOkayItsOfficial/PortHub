import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) =>
  <div className="jumbotron jumbotron-fluid bg-dark text-white d-flex flex-column align-items-center">
    {children}
  </div>;

export default Jumbotron;
