import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) =>
  // <div className="jumbotron jumbotron-fluid bg-dark text-white d-flex flex-column align-items-center">
  //   {children}
  // </div>;
  <div>
      <div className="bg-dark" style={{opacity:'0', width:'100%', height:'50vh'}}>      
          <div className='jumbotron-contents'>
            {children}
          </div>
      </div>
  </div>
export default Jumbotron;
