import React from "react";
import "./Carousel.css";

const Carousel = ({ children, numCards }) =>

<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>

  </ol>
  <div className="carousel-inner" role="listbox">
    <div className="carousel-item active text-center">
      <img className="d-block img-fluid" src="/assets/images/ph/team.jpg" alt="the team"></img>
    </div>
    <div className="carousel-item">
      <img className="d-block img-fluid rounded-circle" src="/assets/images/ph/alex.jpg" alt="Alex"></img>
    </div>
    <div className="carousel-item">
      <img className="d-block img-fluid rounded-circle" src="/assets/images/ph/jason.jpg" alt="Jason"></img>
    </div>
    <div className="carousel-item">
      <img className="d-block img-fluid rounded-circle" src="/assets/images/ph/cody.jpg" alt="Cody"></img>
    </div> 
    <div className="carousel-item">
      <img className="d-block img-fluid rounded-circle" src="/assets/images/ph/kui2.jpg" alt="Kui"></img>
    </div>        
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>




export default Carousel;
