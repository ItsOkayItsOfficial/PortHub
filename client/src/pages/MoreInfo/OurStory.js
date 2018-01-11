import React from "react";
import "./MoreInfo.css";
import Footer from '../../components/Footer/Footer';

const OurStory = () =>
  <div className="row d-flex align-items-center moreInfoText" style={{position:"absolute", top:"80px", height:"94vh"}}>
      <div className="col-8 offset-2">
          <p className="text-center title">Leave your mark on the world</p>
          <p><span className="font-weight-bold">The problem: </span> New developers face a hurdle of learning the "Why?", before "How?". How do you create a website showing all the 
              skills you have learned? How do you deploy it? What's deployment? It is so very common for budding developers to create content to 
              show off their skills. But, it's just as common for them not to know how to get it seen! How can you get your content online? Will it take long?
              Are there any guides or resources I can use? 
          </p>
          <p>Porthub saw this problem and wanted to attack it as developers. We wanted to create a simple service, that empowered
              our user to not only <span className="font-weight-bold">fill</span> out a completely <span className="font-weight-bold">customizable</span> template, but also <span className="font-weight-bold">publish</span> their content on a completely hosted domain! All done in the blink of an eye!
              A resource for <span className="font-weight-bold">developers</span>, made by <span className="font-weight-bold">developers</span>, to further their development careers. 
          </p>
          <hr/>
          <p> Our product is for developers looking to make a new online presence. New developers who want to get their work
              and information out for the world to see! We cater to developers in the midst of job searches looking to
              match their skills to a specific employer. Current developers looking to transition into more specific Software
              Development practices. Can non developers use our Pothub?  Certainly!! This app encompasses them <span className="font-weight-bold">all</span> and we want them all to use our product!
          </p>
      </div>
    <Footer />
  </div>
export default OurStory;
