import React from "react";
import "./MoreInfo.css";
import Footer from '../../components/Footer/Footer';

const Repository = () =>
  <div className="row d-flex align-items-center mx-4 moreInfoText" style={{height:"90vh", position:"absolute", top:"20vh"}} >
    <div className="col-8 offset-2" >
        <div>
            <p className="text-center">
                view the ENTIRE project from start to where we are today at our <a href="https://github.com/ItsOkayItsOfficial/project3/">Github site</a>
            </p>
            <p className="text-center">
                <i class="fa fa-github fa-4x" aria-hidden="true"></i>
            </p>
        </div>
    </div>
    <Footer />
  </div>
export default Repository;
