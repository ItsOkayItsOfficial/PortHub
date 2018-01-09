import React from "react";
import "./Carousel.css";

const Carousel = ({ children, numCards }) =>

<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
  </ol>
  <div className="carousel-inner" role="listbox">
    <div className="carousel-item active">
      <img className="d-block img-fluid" src="http://www.powerenergyusa.com/wp-content/themes/power-energy-usa/images/road_map/slide2.gif" alt="First slide"></img>
    </div>
    <div className="carousel-item">
      <img className="d-block img-fluid" src="http://cdn.mysitemyway.com/icons-watermarks/flat-rounded-square-white-on-black/social-media/social-media_github/social-media_github_flat-rounded-square-white-on-black_512x512.png" alt="Second slide"></img>
    </div>
    <div className="carousel-item">
      <img className="d-block img-fluid" src="/assets/images/resumeTemplates/resume-oblique.png" alt="resume"></img>
      <img className="d-block img-fluid" src="/assets/templates/websitepeeks/oslo.png" alt="resume"></img>
    </div>
    <div className="carousel-item">
      <img className="d-block img-fluid" src="https://www.tenstickers.com/wall-stickers/img/preview/enjoy-smile-wall-sticker-9457.png" alt="Second slide"></img>
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
