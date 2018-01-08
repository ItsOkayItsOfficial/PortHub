import React from "react";
import "./Carousel.css";

const Carousel = ({ children, numCards }) =>

<div id="myCarousel" className="carousel slide" data-ride="carousel">

    <ol className="carousel-indicators">

      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>


    <div className="carousel-inner">
      <div className="item active">
        <p> uno </p>
      </div>

      <div className="item">
      <p> dos </p>
      </div>

      <div className="item">
      <p> tres </p>
      </div>
    </div>


    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>

    <a className="right carousel-control" href="#myCarousel" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>
    
</div>

export default Carousel;
