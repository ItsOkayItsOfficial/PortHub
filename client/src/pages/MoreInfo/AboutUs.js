import React from "react";
import "./MoreInfo.css";
import Footer from '../../components/Footer/Footer';

const AboutUs = () =>
  <div className="row d-flex align-items-center mx-4 moreInfoText" style={{height:"90vh", width:"100vw", position:"absolute", top:"20vh"}} >
    <div className="row w-100">
    <div className="col-10 offset-1" >
      <div className="row w-100 d-flex flex-row">
            <div className="col-3">
                <img className="d-block img-fluid rounded-circle" src="/assets/images/ph/alex.jpg" alt="Alex"></img>
            </div>
            <div className="col-3">
                <img className="d-block img-fluid rounded-circle" src="/assets/images/ph/jason.jpg" alt="Jason"></img>
            </div>
            <div className="col-3">
                <img className="d-block img-fluid rounded-circle" src="/assets/images/ph/cody.jpg" alt="Cody"></img>
            </div>
            <div className="col-3">
                <img className="d-block img-fluid rounded-circle" src="/assets/images/ph/kui2.jpg" alt="Kui"></img>
            </div> 
      </div>
    </div>
    </div>
    <Footer />
  </div>
export default AboutUs;
