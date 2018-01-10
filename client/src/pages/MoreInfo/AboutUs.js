import React from "react";
import "./MoreInfo.css";
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/Carousel/Carousel';

const AboutUs = () =>
  <div className="row d-flex align-items-center mx-4 moreInfoText" style={{height:"90vh", width:"100vw", position:"absolute", top:"20vh"}} >
    <div className="col-8 offset-2" >
      <Carousel />

    </div>
    <Footer />
  </div>
export default AboutUs;
