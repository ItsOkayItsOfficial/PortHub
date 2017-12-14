import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) =>
  // <div className="jumbotron jumbotron-fluid bg-dark text-white d-flex flex-column align-items-center">
  //   {children}
  // </div>;

  <div className="bg-dark" style={{opacity:'.2', width:'100%', height:'400px'}}>
    {children}
  </div>
export default Jumbotron;
